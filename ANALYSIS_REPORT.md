# DualSubs Universal 项目深度分析报告

## 一、项目概览

**项目名称**: 🍿️ DualSubs: 🔣 Universal  
**版本**: 1.7.5  
**作者**: VirgilClyne  
**许可证**: Apache-2.0  
**项目地址**: https://github.com/DualSubs/Universal

### 功能简介
DualSubs Universal 是一个流媒体平台字幕增强及双语模块，支持多个主流流媒体平台：
- Apple TV / Apple TV+ / Apple Fitness
- Disney+
- Amazon Prime Video
- Max (原 HBO Max)
- Hulu
- Paramount+
- Netflix
- YouTube
- Spotify (歌词)
- 等多个平台

## 二、项目架构

### 2.1 目录结构
```
DualSubs-Universal-Source/
├── src/                          # 源代码目录
│   ├── class/                    # 核心类
│   │   ├── AttrList.mjs          # 属性列表类
│   │   ├── Composite.mjs         # 字幕合成器类
│   │   └── Translate.mjs         # 翻译器类 ⭐️ 核心
│   ├── function/                 # 功能模块
│   │   ├── database.mjs          # 数据库配置 ⭐️ 默认设置
│   │   ├── setENV.mjs            # 环境设置
│   │   ├── detectFormat.mjs      # 格式检测
│   │   ├── detectPlatform.mjs    # 平台检测
│   │   └── ...
│   ├── Manifest.response.js      # M3U8 清单处理
│   ├── Composite.Subtitles.response.js  # 字幕合成处理
│   ├── Translate.response.js     # 翻译处理 ⭐️ 核心入口
│   ├── WebVTT/                   # WebVTT 字幕解析
│   ├── XML/                      # XML 字幕解析
│   └── protobuf/                 # Protobuf 定义
├── template/                     # 模板文件
│   ├── quantumultx.handlebars    # Quantumult X 模板
│   ├── surge.handlebars          # Surge 模板
│   └── ...
├── modules/                      # 编译后的模块
└── dist/                         # 发布目录
```

### 2.2 核心脚本文件

| 脚本文件 | 功能 | 大小 |
|---------|------|-----|
| `Manifest.response.bundle.js` | 处理 M3U8 清单，注入字幕轨道 | 55KB |
| `Composite.Subtitles.response.bundle.js` | 合成双语字幕 | 60KB |
| `Translate.response.bundle.js` | 翻译字幕内容 | 116KB |

## 三、翻译系统分析

### 3.1 翻译器架构

```
Translate.response.js
    ↓
Translator() 函数
    ↓
new Translate(options)[vendor](text)
    ↓
支持的翻译服务商：
├── Google      (免费，无需 API)
├── GoogleCloud (需要 API Key/Token)
├── Microsoft   (需要 Azure API)
├── DeepL       (需要 API Key)
├── BaiduFanyi  (需要 APP ID/Key)
└── YoudaoAI    (需要 API Key)
```

### 3.2 Translate.mjs 类核心代码

```javascript
export default class Translate {
    constructor(options = {}) {
        this.Name = "Translate";
        this.Version = "1.0.7";
        this.Source = "AUTO";
        this.Target = "ZH";
        this.API = {};
        Object.assign(this, options);
    }
    
    // 翻译方法
    async Google(text, source, target) { ... }
    async GoogleCloud(text, source, target, api) { ... }
    async Microsoft(text, source, target, api) { ... }
    async DeepL(text, source, target, api) { ... }
    async BaiduFanyi(text, source, target, api) { ... }
    async YoudaoAI(text, source, target, api) { ... }
}
```

### 3.3 翻译流程

1. **设置加载**: 从 BoxJs 或默认配置读取设置
2. **字幕解析**: 根据格式 (VTT/XML/JSON/Protobuf) 解析
3. **文本提取**: 提取需要翻译的文本数组
4. **翻译调用**: 调用配置的翻译服务
5. **结果合并**: 将翻译结果与原文合并
6. **字幕输出**: 重新编码字幕返回

### 3.4 默认配置 (database.mjs)

```javascript
Translate: {
    Settings: {
        Vendor: "Google",      // 默认翻译服务商
        ShowOnly: false,       // 是否只显示翻译
        Position: "Forward",   // 翻译位置
        CacheSize: 10,
        Method: "Part",        // 翻译方法：Part(分段)/Row(逐行)
        Times: 3,              // 重试次数
        Interval: 500,         // 重试间隔(ms)
        Exponential: true,     // 指数退避
    },
},
API: {
    Settings: {
        GoogleCloud: { Version: "v2", Mode: "Key", Auth: "" },
        Microsoft: { Version: "Azure", Mode: "Token", Region: "", Auth: "" },
        DeepL: { Version: "Free", Auth: "" },
        DeepLX: { Endpoint: "", Auth: "" },  // 已预留但未实现
    },
},
```

## 四、配置系统

### 4.1 BoxJs 配置项

配置通过 BoxJs App 进行管理：
- **启用类型**: Official(官方字幕合成), Translate(翻译字幕)
- **主语言**: 源语言选择
- **副语言**: 目标语言选择
- **字幕位置**: Forward(上面), Reverse(下面)
- **翻译服务商**: Google, Microsoft 等
- **日志等级**: OFF/ERROR/WARN/INFO/DEBUG/ALL

### 4.2 配置存储路径

```
@DualSubs.Universal.Settings.Types
@DualSubs.Universal.Settings.Languages[0]
@DualSubs.Universal.Settings.Languages[1]
@DualSubs.Universal.Settings.Vendor
@DualSubs.Universal.Settings.ShowOnly
...
```

## 五、支持的平台和字幕格式

### 5.1 支持的流媒体平台
- Apple: TV, TV+, Fitness
- Disney+
- Amazon Prime Video
- Max (HBO Max)
- Hulu
- Paramount+
- Discovery+
- Peacock TV
- FuboTV
- TED
- BBC iPlayer
- Britbox
- STARZ
- AMC+
- Showtime
- SkyShowtime
- Viki
- MGM+
- Nebula
- Pluto TV
- MUBI

### 5.2 支持的字幕格式
- WebVTT (.vtt)
- TTML/TTML2 (.xml)
- JSON (YouTube)
- Protobuf (YouTube Music, Spotify)

## 六、二次开发要点

### 6.1 添加新翻译服务商步骤

1. **修改 `src/class/Translate.mjs`**:
   - 添加语言代码映射
   - 实现翻译方法

2. **修改 `src/function/database.mjs`**:
   - 添加 API 配置项
   - 设置默认值

3. **修改 `src/Translate.response.js`**:
   - 添加翻译长度配置
   - 确保 Vendor 名称匹配

4. **修改 `arguments-builder.config.ts`**:
   - 添加 UI 选项

5. **重新构建**: `npm run build`

### 6.2 关键注入点

```javascript
// Translate.response.js 第 277 行
async function Translator(vendor, method, text, [source, target], API, times, interval, exponential) {
    // vendor: 翻译服务商名称
    // text: 待翻译文本数组
    // API: API 配置对象
    
    // 这里调用 Translate 类的方法
    new Translate({ Source: source, Target: target, API: API })[vendor](text)
}
```

### 6.3 添加 OpenAI 兼容 API 示例

需要在 `Translate.mjs` 中添加类似：

```javascript
async OpenAI(text = [], source = this.Source, target = this.Target, api = this.API) {
    text = Array.isArray(text) ? text : [text];
    const request = {
        url: `${api.Endpoint}/v1/chat/completions`,
        headers: {
            "Authorization": `Bearer ${api.Auth}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: api.Model || "gpt-3.5-turbo",
            messages: [
                { role: "system", content: `Translate the following text to ${target}` },
                { role: "user", content: text.join("\n") }
            ]
        })
    };
    return await fetch(request)
        .then(response => {
            const body = JSON.parse(response.body);
            return body?.choices?.[0]?.message?.content?.split("\n");
        });
}
```

## 七、使用的依赖

```json
{
    "@nsnanocat/url": "^1.2.5",      // URL 处理
    "@nsnanocat/util": "^1.8.10",    // 工具类 (Console, fetch, done 等)
    "@protobuf-ts/runtime": "^2.11.1", // Protobuf 运行时
    "crypto-js": "^4.2.0",           // 加密库
    "text-encoding": "^0.7.0"        // 文本编码
}
```

## 八、构建系统

- **构建工具**: Rspack
- **模板引擎**: Handlebars
- **配置生成**: @iringo/arguments-builder

**构建命令**:
```bash
npm run build        # 生产构建
npm run build:dev    # 开发构建
npm run build:args   # 生成配置
```

---

报告生成时间: 2025-12-15

