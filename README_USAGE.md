# DualSubs Universal - OpenAI/Gemini 翻译版使用指南

## 一、项目概述

此版本基于 DualSubs Universal v1.7.5 进行二次开发，添加了 **OpenAI 兼容 API** 支持，可以使用：
- Gemini (通过 OpenAI 兼容端点)
- OpenAI GPT 系列
- 本地部署的 LLM (Ollama, vLLM, LMStudio 等)
- 任何 OpenAI API 兼容的服务

## 二、默认配置

```
端点 (Endpoint): https://jp.duckcoding.com/v1beta/models/gemini-3-pro-preview:generateContent
模型 (Model): gemini-3-pro-preview
API Key: （内置测试 key，可在 BoxJs 覆盖）
翻译服务商: OpenAI（Gemini 原生 generateContent）
```

## 三、文件说明

### 3.1 核心文件

| 文件 | 说明 |
|------|------|
| `scripts/Translate.response.bundle.js` | 翻译脚本（支持 Gemini 原生 generateContent + OpenAI 兼容） |
| `DualSubs.Universal.OpenAI.snippet` | Quantumult X 配置片段 |
| `DualSubs-Universal-Source/` | 修改后的源代码 |

### 3.2 修改的源文件

```
src/class/Translate.mjs          - 添加 OpenAI 翻译方法
src/function/database.mjs        - 添加 OpenAI 配置和默认值
src/Translate.response.js        - 添加 OpenAI 翻译长度配置
arguments-builder.config.ts      - 添加 UI 选项
template/boxjs.settings.json     - 添加 BoxJs 配置项
```

## 四、安装使用

### 4.1 Quantumult X 使用方法

**方法 A: 使用自定义翻译脚本（推荐）**

1. 将 `scripts/Translate.response.bundle.js` 复制到 Quantumult X 的脚本目录

2. 在 Quantumult X 配置文件中添加：

```ini
[rewrite_local]
# 示例：Apple TV+ 字幕翻译
^https?:\/\/vod-(.+)-(aoc|svod)\.tv\.apple\.com\/itunes-assets\/(.+)\.webvtt\?(.*)subtype=Translate url script-response-body Translate.response.bundle.js

[mitm]
hostname = vod-*.tv.apple.com
```

**方法 B: 使用完整的 snippet 文件**

1. 将 `DualSubs.Universal.OpenAI.snippet` 导入 Quantumult X
2. （可选）将 `scripts/Translate.response.bundle.js` 复制到脚本目录
3. 启用该配置

### 4.2 Surge / Loon / Stash 使用方法

需要将源代码构建为对应平台的模块：

```bash
cd DualSubs-Universal-Source
# 安装依赖 (需要 GitHub Token)
export NODE_AUTH_TOKEN=your_github_token
npm install
# 构建
npm run build
```

或者直接使用翻译脚本：
1. 将 `scripts/Translate.response.bundle.js` 部署到可访问的位置
2. 在配置中引用该脚本

## 五、配置修改

### 5.1 修改端点和模型

推荐使用 BoxJs 覆盖（不需要改脚本源码）：

```
@DualSubs.API.Settings.OpenAI.Endpoint = "https://jp.duckcoding.com/v1beta/models/gemini-3-pro-preview:generateContent"
@DualSubs.API.Settings.OpenAI.Model = "gemini-3-pro-preview"
@DualSubs.API.Settings.OpenAI.Auth = "sk-***"
@DualSubs.API.Settings.OpenAI.Timeout = 15000
```

说明：
- `Endpoint` 支持填写：
  - Gemini 原生：`https://jp.duckcoding.com/v1beta/models/<model>:generateContent`
  - OpenAI 兼容：`https://jp.duckcoding.com`（脚本会自动拼接 `/v1/chat/completions`）

### 5.2 使用 BoxJs 配置（可选）

如果使用 BoxJs，可以设置以下键值：

```
@DualSubs.Universal.Settings.Vendor = "OpenAI"
@DualSubs.API.Settings.OpenAI.Endpoint = "https://jp.duckcoding.com/v1beta/models/gemini-3-pro-preview:generateContent"
@DualSubs.API.Settings.OpenAI.Model = "gemini-3-pro-preview"
@DualSubs.API.Settings.OpenAI.Auth = "sk-***"
```

### 5.3 修改翻译语言

在脚本配置中修改：

```javascript
Languages: ["AUTO", "ZH"],  // [源语言, 目标语言]
```

支持的语言代码：
- `AUTO` - 自动检测
- `ZH` / `ZH-HANS` - 简体中文
- `ZH-HANT` - 繁体中文
- `EN` - 英语
- `JA` - 日语
- `KO` - 韩语
- 等等...

## 六、OpenAI API 请求格式

翻译脚本发送的请求格式如下：

```json
POST /v1beta/models/gemini-3-pro-preview:generateContent
{
  "contents": [
    {
      "role": "user",
      "parts": [
        { "text": "You are a professional subtitle translator...\n\n字幕文本\\n[LINE_BREAK]\\n第二行字幕..." }
      ]
    }
  ],
  "generationConfig": {
    "temperature": 0.3,
    "maxOutputTokens": 4096
  }
}
```

预期响应格式：

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          { "text": "翻译后的文本\\n[LINE_BREAK]\\n第二行翻译..." }
        ]
      }
    }
  ]
}
```

## 七、支持的流媒体平台

- ✅ Apple TV / TV+ / Fitness
- ✅ Disney+
- ✅ Amazon Prime Video
- ✅ Max (HBO Max)
- ✅ Hulu
- ✅ Paramount+
- ✅ 更多平台...

## 八、故障排除

### 8.1 翻译不工作

1. 检查 MITM 是否正确配置
2. 检查 API 端点是否可访问
3. 查看日志输出（设置 LogLevel 为 DEBUG）

### 8.2 翻译结果错位

LLM 可能不会严格按行返回，脚本会尝试对齐，但如果问题严重：
- 减小 `chunkSize` 值（默认 50）
- 尝试其他模型

### 8.3 请求超时

- 检查网络连接
- 增加重试次数和间隔

## 九、源代码修改详情

### 9.1 Translate.mjs 添加的 OpenAI 方法

```javascript
async OpenAI(text = [], source = this.Source, target = this.Target, api = this.API) {
    // 完整实现见源文件
    // 主要功能：
    // 1. 语言代码转换
    // 2. 构建系统提示词
    // 3. 调用 OpenAI 兼容 API
    // 4. 解析返回结果
}
```

### 9.2 database.mjs 添加的配置

```javascript
API: {
    Settings: {
        // ... 现有配置
        OpenAI: {
            Endpoint: "http://192.168.31.203",
            Model: "gemini-2.5-pro-preview",
            Auth: "dummy-not-used",
        },
    },
},
Translate: {
    Settings: {
        Vendor: "OpenAI",  // 默认使用 OpenAI
        // ...
    },
},
```

## 十、许可证

本项目基于 DualSubs Universal (Apache-2.0 License) 修改。

---

如有问题，请参考原项目文档：https://DualSubs.github.io/guide/universal
