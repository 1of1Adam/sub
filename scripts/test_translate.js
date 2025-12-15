/**
 * 测试脚本 - 模拟 Quantumult X 环境测试翻译功能
 */

const https = require('https');
const http = require('http');

// 模拟配置
const CONFIG = {
    Endpoint: "http://192.168.31.203:8317",
    Model: "gemini-3-pro-preview",
    Auth: "dummy-not-used",
};

// 模拟 VTT 字幕内容
const MOCK_VTT = `WEBVTT

00:00:01.000 --> 00:00:04.000
Hello everyone, welcome to today's workout!

00:00:04.500 --> 00:00:08.000
We're going to start with a quick warm-up.

00:00:08.500 --> 00:00:12.000
Remember to listen to your body and take breaks when needed.

00:00:12.500 --> 00:00:16.000
Let's begin! Follow along with me.
`;

// HTTP 请求函数
function httpRequest(options) {
    return new Promise((resolve, reject) => {
        const url = new URL(options.url);
        const isHttps = url.protocol === 'https:';
        const lib = isHttps ? https : http;
        
        const reqOptions = {
            hostname: url.hostname,
            port: url.port || (isHttps ? 443 : 80),
            path: url.pathname + url.search,
            method: options.method || 'GET',
            headers: options.headers || {},
        };

        const req = lib.request(reqOptions, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, body: data }));
        });

        req.on('error', reject);
        req.setTimeout(30000, () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });
        
        if (options.body) {
            req.write(options.body);
        }
        req.end();
    });
}

// OpenAI 翻译函数
async function translateWithOpenAI(textArray, targetLang = "Chinese") {
    const systemPrompt = `You are a professional subtitle translator. Translate to ${targetLang}.
Rules:
1. Keep the translation natural and fluent
2. Each line should be translated separately, preserving line breaks
3. Output ONLY the translated text, no explanations
4. Do not add any numbering`;

    const requestOptions = {
        url: `${CONFIG.Endpoint}/v1/chat/completions`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${CONFIG.Auth}`,
        },
        body: JSON.stringify({
            model: CONFIG.Model,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: textArray.join("\n") }
            ],
            temperature: 0.3,
            max_tokens: 2048,
        }),
    };

    console.log("\n📤 发送翻译请求...");
    console.log(`   端点: ${CONFIG.Endpoint}`);
    console.log(`   模型: ${CONFIG.Model}`);
    console.log(`   文本数量: ${textArray.length} 条\n`);

    const response = await httpRequest(requestOptions);
    const body = JSON.parse(response.body);
    
    if (body.error) {
        throw new Error(`API Error: ${body.error.message}`);
    }
    
    const translatedText = body.choices?.[0]?.message?.content?.trim();
    return translatedText ? translatedText.split("\n") : textArray;
}

// VTT 解析
function parseVTT(text) {
    const lines = text.split(/\r?\n/);
    const result = { header: [], body: [] };
    let currentCue = null;
    let inHeader = true;

    for (const line of lines) {
        if (inHeader && !line.includes("-->")) {
            result.header.push(line);
            continue;
        }
        inHeader = false;

        if (line.includes("-->")) {
            if (currentCue) result.body.push(currentCue);
            const parts = line.split("-->");
            currentCue = {
                startTime: parts[0].trim(),
                endTime: parts[1].trim(),
                text: ""
            };
        } else if (line.trim() === "") {
            if (currentCue) {
                result.body.push(currentCue);
                currentCue = null;
            }
        } else if (currentCue) {
            currentCue.text += (currentCue.text ? "\n" : "") + line;
        }
    }
    if (currentCue) result.body.push(currentCue);
    return result;
}

// VTT 输出
function stringifyVTT(data) {
    let result = data.header.join("\n") + "\n\n";
    for (const cue of data.body) {
        result += `${cue.startTime} --> ${cue.endTime}\n`;
        result += cue.text + "\n\n";
    }
    return result.trim();
}

// 合并文本
function combineText(original, translated, position = "Forward") {
    if (position === "Reverse") {
        return `${translated}\n${original}`;
    }
    return `${original}\n${translated}`;
}

// 主测试函数
async function runTest() {
    console.log("═══════════════════════════════════════════════════════════");
    console.log("🧪 DualSubs Translate.OpenAI.response.js 测试");
    console.log("═══════════════════════════════════════════════════════════");
    
    console.log("\n📝 原始 VTT 字幕:");
    console.log("───────────────────────────────────────────────────────────");
    console.log(MOCK_VTT);
    
    try {
        // 1. 解析 VTT
        console.log("───────────────────────────────────────────────────────────");
        console.log("1️⃣  解析 VTT 字幕...");
        const vtt = parseVTT(MOCK_VTT);
        console.log(`   ✅ 解析完成: ${vtt.body.length} 条字幕\n`);
        
        // 2. 提取文本
        console.log("2️⃣  提取字幕文本...");
        const texts = vtt.body.map(cue => cue.text);
        texts.forEach((t, i) => console.log(`   [${i+1}] ${t}`));
        
        // 3. 翻译
        console.log("\n3️⃣  调用 OpenAI API 翻译...");
        const startTime = Date.now();
        const translations = await translateWithOpenAI(texts);
        const elapsed = Date.now() - startTime;
        
        console.log(`   ✅ 翻译完成! 耗时: ${elapsed}ms\n`);
        console.log("   翻译结果:");
        translations.forEach((t, i) => console.log(`   [${i+1}] ${t}`));
        
        // 4. 合并双语字幕
        console.log("\n4️⃣  合并双语字幕...");
        vtt.body = vtt.body.map((cue, i) => {
            cue.text = combineText(cue.text, translations[i] || "", "Forward");
            return cue;
        });
        
        // 5. 输出结果
        const output = stringifyVTT(vtt);
        console.log("\n═══════════════════════════════════════════════════════════");
        console.log("📺 双语字幕输出:");
        console.log("═══════════════════════════════════════════════════════════");
        console.log(output);
        console.log("\n═══════════════════════════════════════════════════════════");
        console.log("✅ 测试完成!");
        console.log("═══════════════════════════════════════════════════════════");
        
    } catch (error) {
        console.error("\n❌ 测试失败:", error.message);
        console.error(error.stack);
    }
}

// 运行测试
runTest();

