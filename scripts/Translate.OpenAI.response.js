/**
 * DualSubs Universal - OpenAI Compatible Translate Script
 * 专门用于 OpenAI 兼容 API 的字幕翻译脚本
 * 支持: OpenAI, Gemini (通过 OpenAI 兼容端点), Ollama, vLLM 等
 * 
 * @version 1.0.0
 * @author DualSubs Modified
 * @license Apache-2.0
 * 
 * 默认配置:
 * - Endpoint: http://192.168.31.203
 * - Model: gemini-2.5-pro-preview
 * - API Key: dummy-not-used
 */

// 配置 - 可通过 BoxJs 覆盖
const DEFAULT_CONFIG = {
    // OpenAI API 配置
    OpenAI: {
        Endpoint: "http://192.168.31.203:8317",
        Model: "gemini-3-pro-preview", 
        Auth: "dummy-not-used",
    },
    // 翻译设置
    Translate: {
        Vendor: "OpenAI",
        ShowOnly: false,
        Position: "Forward", // Forward: 原文在上, Reverse: 译文在上
        Method: "Part",
        Times: 3,
        Interval: 1000,
        Exponential: true,
    },
    // 语言设置
    Languages: ["AUTO", "ZH"],
    LogLevel: "INFO", // OFF, ERROR, WARN, INFO, DEBUG, ALL
};

// ============ 工具函数 ============

const Console = {
    level: DEFAULT_CONFIG.LogLevel,
    levels: { OFF: 0, ERROR: 1, WARN: 2, INFO: 3, DEBUG: 4, ALL: 5 },
    log: function(...args) { if (this.levels[this.level] >= 3) console.log("🍿️ DualSubs:", ...args); },
    info: function(...args) { if (this.levels[this.level] >= 3) console.log("ℹ️", ...args); },
    warn: function(...args) { if (this.levels[this.level] >= 2) console.log("⚠️", ...args); },
    error: function(...args) { if (this.levels[this.level] >= 1) console.log("❌", ...args); },
    debug: function(...args) { if (this.levels[this.level] >= 4) console.log("🅱️", ...args); },
};

// 获取存储
function getStorage(key) {
    if (typeof $persistentStore !== "undefined") {
        const data = $persistentStore.read(key);
        return data ? JSON.parse(data) : null;
    }
    return null;
}

// HTTP 请求封装 (timeout: 100秒)
async function httpRequest(options) {
    // 设置默认超时时间为 100 秒
    options.timeout = options.timeout ?? 100;  // Surge/Loon 使用秒
    
    return new Promise((resolve, reject) => {
        const handler = (error, response, data) => {
            if (error) {
                reject(error);
            } else {
                resolve({ 
                    status: response?.status ?? response?.statusCode ?? 200,
                    headers: response?.headers ?? {},
                    body: data 
                });
            }
        };
        
        if (typeof $httpClient !== "undefined") {
            // Surge, Loon (timeout 单位: 秒)
            const method = (options.method || "GET").toLowerCase();
            $httpClient[method](options, handler);
        } else if (typeof $task !== "undefined") {
            // Quantumult X (timeout 单位: 毫秒)
            options.timeout = 100000;  // 100秒 = 100000毫秒
            $task.fetch(options).then(
                response => resolve({ status: response.statusCode, headers: response.headers, body: response.body }),
                error => reject(error)
            );
        } else if (typeof $http !== "undefined") {
            // Stash (timeout 单位: 秒)
            const method = (options.method || "GET").toLowerCase();
            $http[method](options).then(
                response => resolve({ status: response.status, headers: response.headers, body: response.body }),
                error => reject(error)
            );
        } else {
            reject(new Error("不支持的环境"));
        }
    });
}

// 完成回调
function done(response) {
    if (typeof $done !== "undefined") {
        $done(response);
    }
}

// ============ OpenAI 翻译类 ============

class OpenAITranslator {
    constructor(config) {
        this.config = config || DEFAULT_CONFIG.OpenAI;
        this.languageNames = {
            AUTO: "the same language as detected",
            ZH: "Chinese", "ZH-HANS": "Simplified Chinese", "ZH-HANT": "Traditional Chinese", "ZH-HK": "Traditional Chinese (Hong Kong)",
            EN: "English", "EN-US": "American English", "EN-GB": "British English",
            JA: "Japanese", KO: "Korean", DE: "German", FR: "French", ES: "Spanish",
            PT: "Portuguese", IT: "Italian", RU: "Russian", AR: "Arabic", TH: "Thai",
            VI: "Vietnamese", ID: "Indonesian", TR: "Turkish", PL: "Polish", NL: "Dutch",
            DA: "Danish", FI: "Finnish", SV: "Swedish", NO: "Norwegian", CS: "Czech",
            HU: "Hungarian", EL: "Greek", RO: "Romanian", SK: "Slovak", UK: "Ukrainian",
        };
    }

    async translate(text, source = "AUTO", target = "ZH") {
        const textArray = Array.isArray(text) ? text : [text];
        const targetLang = this.languageNames[target] || this.languageNames[target?.split?.(/[-_]/)?.[0]] || target;
        const sourceLang = source === "AUTO" ? "" : (this.languageNames[source] || this.languageNames[source?.split?.(/[-_]/)?.[0]] || source);

        const systemPrompt = `You are a professional subtitle translator. Translate the following subtitles to ${targetLang}.
Rules:
1. Keep the translation natural and fluent
2. Maintain the original meaning and tone
3. Each line should be translated separately, preserving line breaks
4. Output ONLY the translated text, no explanations or notes
5. Do not add any numbering or formatting
${sourceLang ? `6. The source language is ${sourceLang}` : ""}`;

        const userContent = textArray.join("\n");
        const endpoint = this.config.Endpoint?.replace(/\/+$/, "") || "http://192.168.31.203";
        
        const requestOptions = {
            url: `${endpoint}/v1/chat/completions`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "DualSubs/1.0",
            },
            body: JSON.stringify({
                model: this.config.Model || "gemini-2.5-pro-preview",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userContent }
                ],
                temperature: 0.3,
                max_tokens: 4096,
            }),
        };

        // 添加认证
        if (this.config.Auth) {
            requestOptions.headers["Authorization"] = `Bearer ${this.config.Auth}`;
        }

        Console.debug("请求配置:", JSON.stringify(requestOptions, null, 2));

        try {
            const response = await httpRequest(requestOptions);
            Console.debug("响应状态:", response.status);
            
            const body = typeof response.body === "string" ? JSON.parse(response.body) : response.body;
            
            if (body?.error) {
                Console.error(`API 错误: ${body.error.message || JSON.stringify(body.error)}`);
                return textArray.map(() => `翻译失败: ${body.error.message || "未知错误"}`);
            }

            const translatedText = body?.choices?.[0]?.message?.content?.trim();
            if (!translatedText) {
                Console.error("翻译结果为空");
                return textArray.map(() => "翻译失败: 空结果");
            }

            Console.debug("翻译结果:", translatedText.substring(0, 100) + "...");

            // 按行分割翻译结果
            const translatedLines = translatedText.split(/\n/);
            
            // 确保返回的行数与输入相同
            if (translatedLines.length === textArray.length) {
                return translatedLines;
            } else if (translatedLines.length > textArray.length) {
                return translatedLines.slice(0, textArray.length);
            } else {
                return textArray.map((original, i) => translatedLines[i] || original);
            }
        } catch (error) {
            Console.error(`翻译请求失败: ${error}`);
            return textArray.map(() => `翻译失败: ${error.message || error}`);
        }
    }
}

// ============ 重试机制 ============

async function retry(fn, retriesLeft = 3, interval = 1000, exponential = true) {
    Console.debug(`重试: 剩余次数=${retriesLeft}, 间隔=${interval}ms`);
    try {
        return await fn();
    } catch (error) {
        if (retriesLeft > 0) {
            await new Promise(r => setTimeout(r, interval));
            return retry(fn, retriesLeft - 1, exponential ? interval * 2 : interval, exponential);
        }
        throw error;
    }
}

// ============ 分块处理 ============

function chunk(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

// ============ 文本合并 ============

function combineText(original, translated, showOnly = false, position = "Forward", lineBreak = "\n") {
    if (showOnly) return translated;
    if (position === "Reverse") {
        return `${translated}${lineBreak}${original}`;
    }
    return `${original}${lineBreak}${translated}`;
}

// ============ WebVTT 解析器 ============

const VTT = {
    parse: function(text) {
        const lines = text.split(/\r?\n/);
        const result = { header: [], body: [] };
        let currentCue = null;
        let inHeader = true;

        for (const line of lines) {
            if (inHeader) {
                if (line.includes("-->")) {
                    inHeader = false;
                } else {
                    result.header.push(line);
                    continue;
                }
            }

            if (line.includes("-->")) {
                if (currentCue) result.body.push(currentCue);
                const parts = line.split("-->");
                currentCue = {
                    startTime: parts[0].trim(),
                    endTime: parts[1].trim().split(/\s/)[0],
                    settings: parts[1].trim().split(/\s/).slice(1).join(" "),
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
    },

    stringify: function(data) {
        let result = data.header.join("\n") + "\n\n";
        for (const cue of data.body) {
            result += `${cue.startTime} --> ${cue.endTime}${cue.settings ? " " + cue.settings : ""}\n`;
            result += cue.text + "\n\n";
        }
        return result.trim();
    }
};

// ============ 主处理逻辑 ============

(async () => {
    Console.log("🔣 Universal OpenAI Translate Script");
    Console.log("Version: 1.0.0");

    try {
        // 获取配置 (可从 BoxJs 覆盖)
        const storedConfig = getStorage("@DualSubs.Universal.Settings") || {};
        const config = { ...DEFAULT_CONFIG, ...storedConfig };
        
        // 获取 API 配置
        const apiConfig = getStorage("@DualSubs.Universal.API.OpenAI") || config.OpenAI;
        
        Console.level = config.LogLevel || "INFO";
        Console.info("配置加载完成");
        Console.debug("API 配置:", JSON.stringify(apiConfig));

        // 获取请求信息
        const url = $request?.url || "";
        const responseBody = $response?.body || "";
        const contentType = $response?.headers?.["Content-Type"] || $response?.headers?.["content-type"] || "";

        Console.info(`URL: ${url.substring(0, 100)}...`);
        Console.info(`Content-Type: ${contentType}`);

        // 解析 URL 参数
        const urlObj = new URL(url);
        const subtype = urlObj.searchParams?.get("subtype");
        const lang = urlObj.searchParams?.get("lang")?.toUpperCase() || config.Languages[0];
        const tlang = urlObj.searchParams?.get("tlang")?.toUpperCase() || config.Languages[1];

        Console.info(`源语言: ${lang}, 目标语言: ${tlang}`);

        // 只处理翻译类型的字幕
        if (subtype !== "Translate") {
            Console.info("非翻译字幕，跳过处理");
            done({ body: responseBody });
            return;
        }

        // 创建翻译器
        const translator = new OpenAITranslator(apiConfig);
        
        // 解析字幕格式
        let body = {};
        let format = "";

        if (contentType.includes("vtt") || url.includes(".vtt") || url.includes(".webvtt")) {
            format = "vtt";
            body = VTT.parse(responseBody);
        } else if (contentType.includes("xml") || url.includes(".xml")) {
            format = "xml";
            // XML 处理需要更复杂的解析，这里简化处理
            Console.warn("XML 格式暂不完全支持，使用原始内容");
            done({ body: responseBody });
            return;
        } else {
            Console.warn(`未知格式: ${contentType}`);
            done({ body: responseBody });
            return;
        }

        Console.info(`格式: ${format}, 字幕条数: ${body.body?.length || 0}`);

        if (format === "vtt" && body.body?.length > 0) {
            // 提取文本
            const fullText = body.body.map(item => (item?.text || "\u200b").replace(/<\/?[^<>]+>/g, ""));
            Console.info(`提取文本: ${fullText.length} 条`);

            // 分块翻译
            const chunkSize = 50;
            const chunks = chunk(fullText, chunkSize);
            Console.info(`分成 ${chunks.length} 批次翻译`);

            let translations = [];
            for (let i = 0; i < chunks.length; i++) {
                Console.info(`翻译批次 ${i + 1}/${chunks.length}...`);
                const result = await retry(
                    () => translator.translate(chunks[i], lang, tlang),
                    config.Translate.Times,
                    config.Translate.Interval,
                    config.Translate.Exponential
                );
                translations = translations.concat(result);
            }

            // 合并翻译结果
            body.body = body.body.map((item, i) => {
                item.text = combineText(
                    item?.text || "\u200b",
                    translations[i] || "",
                    config.Translate.ShowOnly,
                    config.Translate.Position
                );
                return item;
            });

            // 生成输出
            const output = VTT.stringify(body);
            Console.info("翻译完成!");
            done({ body: output });
        } else {
            done({ body: responseBody });
        }

    } catch (error) {
        Console.error(`处理失败: ${error}`);
        Console.error(error.stack);
        done({ body: $response?.body || "" });
    }
})();

