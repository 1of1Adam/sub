console.log("🍿️ DualSubs: 🔣 Universal");
console.log("Composite.Subtitles.response.bundle.js");
console.log("Version: 1.7.5");
console.log("Date: 2025/11/23 15:45:04");
(() => {
  "use strict";

  let vF = (() => {
    let v2 = Object.keys(globalThis);
    switch (true) {
      case v2.includes("$task"):
        return "Quantumult X";
      case v2.includes("$loon"):
        return "Loon";
      case v2.includes("$rocket"):
        return "Shadowrocket";
      case typeof module != "undefined":
        return "Node.js";
      case v2.includes("Egern"):
        return "Egern";
      case v2.includes("$environment"):
        if ($environment["surge-version"]) {
          return "Surge";
        }
        if ($environment["stash-version"]) {
          return "Stash";
        }
        return;
      default:
        return;
    }
  })();
  class C2 {
    static #e = new Map([]);
    static #a = [];
    static #t = new Map([]);
    static clear = () => {};
    static count = (p2 = "default") => {
      switch (C2.#e.has(p2)) {
        case true:
          C2.#e.set(p2, C2.#e.get(p2) + 1);
          break;
        case false:
          C2.#e.set(p2, 0);
      }
      C2.log(`${p2}: ${C2.#e.get(p2)}`);
    };
    static countReset = (p3 = "default") => {
      switch (C2.#e.has(p3)) {
        case true:
          C2.#e.set(p3, 0);
          C2.log(`${p3}: ${C2.#e.get(p3)}`);
          break;
        case false:
          C2.warn(`Counter "${p3}" doesn’t exist`);
      }
    };
    static debug = (...e) => {
      if (!(C2.#s < 4)) {
        e = e.map(p4 => `🅱️ ${p4}`);
        C2.log(...e);
      }
    };
    static error(...t) {
      if (!(C2.#s < 1)) {
        switch (vF) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Egern":
          case "Shadowrocket":
          case "Quantumult X":
          default:
            t = t.map(p5 => `❌ ${p5}`);
            break;
          case "Node.js":
            t = t.map(p6 => `❌ ${p6.stack}`);
        }
        C2.log(...t);
      }
    }
    static exception = (...e) => C2.error(...e);
    static group = p7 => C2.#a.unshift(p7);
    static groupEnd = () => C2.#a.shift();
    static info(...e) {
      if (!(C2.#s < 3)) {
        e = e.map(p8 => `ℹ️ ${p8}`);
        C2.log(...e);
      }
    }
    static #s = 3;
    static get logLevel() {
      switch (C2.#s) {
        case 0:
          return "OFF";
        case 1:
          return "ERROR";
        case 2:
          return "WARN";
        case 3:
        default:
          return "INFO";
        case 4:
          return "DEBUG";
        case 5:
          return "ALL";
      }
    }
    static set logLevel(p9) {
      switch (typeof p9) {
        case "string":
          p9 = p9.toLowerCase();
          break;
        case "number":
          break;
        default:
          p9 = "warn";
      }
      switch (p9) {
        case 0:
        case "off":
          C2.#s = 0;
          break;
        case 1:
        case "error":
          C2.#s = 1;
          break;
        case 2:
        case "warn":
        case "warning":
        default:
          C2.#s = 2;
          break;
        case 3:
        case "info":
          C2.#s = 3;
          break;
        case 4:
        case "debug":
          C2.#s = 4;
          break;
        case 5:
        case "all":
          C2.#s = 5;
      }
    }
    static log = (...e) => {
      if (C2.#s !== 0) {
        e = e.map(p10 => {
          switch (typeof p10) {
            case "object":
              p10 = JSON.stringify(p10);
              break;
            case "bigint":
            case "number":
            case "boolean":
            case "string":
              p10 = p10.toString();
          }
          return p10;
        });
        C2.#a.forEach(p11 => {
          (e = e.map(p12 => `  ${p12}`)).unshift(`▼ ${p11}:`);
        });
        console.log((e = ["", ...e]).join("\n"));
      }
    };
    static time = (p13 = "default") => C2.#t.set(p13, Date.now());
    static timeEnd = (p14 = "default") => C2.#t.delete(p14);
    static timeLog = (p15 = "default") => {
      let v3 = C2.#t.get(p15);
      if (v3) {
        C2.log(`${p15}: ${Date.now() - v3}ms`);
      } else {
        C2.warn(`Timer "${p15}" doesn’t exist`);
      }
    };
    static warn(...e) {
      if (!(C2.#s < 2)) {
        e = e.map(p16 => `⚠️ ${p16}`);
        C2.log(...e);
      }
    }
  }
  class C3 {
    static escape(p17) {
      let vO = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      };
      return p17.replace(/[&<>"']/g, p18 => vO[p18]);
    }
    static get(p19 = {}, p20 = "", p21) {
      if (!Array.isArray(p20)) {
        p20 = C3.toPath(p20);
      }
      let v4 = p20.reduce((p22, p23) => Object(p22)[p23], p19);
      if (v4 === undefined) {
        return p21;
      } else {
        return v4;
      }
    }
    static omit(p24 = {}, p25 = []) {
      if (!Array.isArray(p25)) {
        p25 = [p25.toString()];
      }
      p25.forEach(p26 => C3.unset(p24, p26));
      return p24;
    }
    static pick(p27 = {}, p28 = []) {
      if (!Array.isArray(p28)) {
        p28 = [p28.toString()];
      }
      return Object.fromEntries(Object.entries(p27).filter(([v5, v6]) => p28.includes(v5)));
    }
    static set(p29, p30, p31) {
      if (!Array.isArray(p30)) {
        p30 = C3.toPath(p30);
      }
      p30.slice(0, -1).reduce((p32, p33, p34) => Object(p32[p33]) === p32[p33] ? p32[p33] : p32[p33] = /^\d+$/.test(p30[p34 + 1]) ? [] : {}, p29)[p30[p30.length - 1]] = p31;
      return p29;
    }
    static toPath(p35) {
      return p35.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    }
    static unescape(p36) {
      let vO2 = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": "\"",
        "&#39;": "'"
      };
      return p36.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, p37 => vO2[p37]);
    }
    static unset(p38 = {}, p39 = "") {
      if (!Array.isArray(p39)) {
        p39 = C3.toPath(p39);
      }
      return p39.reduce((p40, p41, p42) => p42 === p39.length - 1 ? (delete p40[p41], true) : Object(p40)[p41], p38);
    }
  }
  let vO3 = {
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    103: "Early Hints",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    208: "Already Reported",
    226: "IM Used",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    304: "Not Modified",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Content Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required"
  };
  async function f2(p43, p44 = {}) {
    switch (typeof p43) {
      case "object":
        p43 = {
          ...p44,
          ...p43
        };
        break;
      case "string":
        p43 = {
          ...p44,
          url: p43
        };
        break;
      default:
        throw TypeError(`${Function.name}: 参数类型错误, resource 必须为对象或字符串`);
    }
    if (!p43.method) {
      p43.method = "GET";
      if (p43.body ?? p43.bodyBytes) {
        p43.method = "POST";
      }
    }
    delete p43.headers?.Host;
    delete p43.headers?.[":authority"];
    delete p43.headers?.["Content-Length"];
    delete p43.headers?.["content-length"];
    let v7 = p43.method.toLocaleLowerCase();
    if (!p43.timeout) {
      p43.timeout = 5;
    }
    if (p43.timeout) {
      p43.timeout = Number.parseInt(p43.timeout, 10);
      if (p43.timeout > 500) {
        p43.timeout = Math.round(p43.timeout / 1000);
      }
    }
    switch (vF) {
      case "Loon":
      case "Surge":
      case "Stash":
      case "Egern":
      case "Shadowrocket":
      default:
        if (p43.timeout && vF === "Loon") {
          p43.timeout = p43.timeout * 1000;
        }
        if (p43.policy) {
          switch (vF) {
            case "Loon":
              p43.node = p43.policy;
              break;
            case "Stash":
              C3.set(p43, "headers.X-Stash-Selected-Proxy", encodeURI(p43.policy));
              break;
            case "Shadowrocket":
              C3.set(p43, "headers.X-Surge-Proxy", p43.policy);
          }
        }
        if (typeof p43.redirection == "boolean") {
          p43["auto-redirect"] = p43.redirection;
        }
        if (p43.bodyBytes && !p43.body) {
          p43.body = p43.bodyBytes;
          p43.bodyBytes = undefined;
        }
        switch ((p43.headers?.Accept || p43.headers?.accept)?.split(";")?.[0]) {
          case "application/protobuf":
          case "application/x-protobuf":
          case "application/vnd.google.protobuf":
          case "application/vnd.apple.flatbuffer":
          case "application/grpc":
          case "application/grpc+proto":
          case "application/octet-stream":
            p43["binary-mode"] = true;
        }
        return await new Promise((p45, p46) => {
          $httpClient[v7](p43, (p47, p48, p49) => {
            if (p47) {
              p46(p47);
            } else {
              p48.ok = /^2\d\d$/.test(p48.status);
              p48.statusCode = p48.status;
              p48.statusText = vO3[p48.status];
              if (p49) {
                p48.body = p49;
                if (p43["binary-mode"] == true) {
                  p48.bodyBytes = p49;
                }
              }
              p45(p48);
            }
          });
        });
      case "Quantumult X":
        p43.timeout = p43.timeout * 1000;
        if (p43.policy) {
          C3.set(p43, "opts.policy", p43.policy);
        }
        if (typeof p43["auto-redirect"] == "boolean") {
          C3.set(p43, "opts.redirection", p43["auto-redirect"]);
        }
        if (p43.body instanceof ArrayBuffer) {
          p43.bodyBytes = p43.body;
          p43.body = undefined;
        } else if (ArrayBuffer.isView(p43.body)) {
          p43.bodyBytes = p43.body.buffer.slice(p43.body.byteOffset, p43.body.byteLength + p43.body.byteOffset);
          p43.body = undefined;
        } else if (p43.body) {
          p43.bodyBytes = undefined;
        }
        return Promise.race([await $task.fetch(p43).then(p50 => {
          p50.ok = /^2\d\d$/.test(p50.statusCode);
          p50.status = p50.statusCode;
          p50.statusText = vO3[p50.status];
          switch ((p50.headers?.["Content-Type"] ?? p50.headers?.["content-type"])?.split(";")?.[0]) {
            case "application/protobuf":
            case "application/x-protobuf":
            case "application/vnd.google.protobuf":
            case "application/vnd.apple.flatbuffer":
            case "application/grpc":
            case "application/grpc+proto":
            case "application/octet-stream":
              p50.body = p50.bodyBytes;
          }
          p50.bodyBytes = undefined;
          return p50;
        }, p51 => Promise.reject(p51.error)), new Promise((p52, p53) => {
          setTimeout(() => {
            p53(Error(`${Function.name}: 请求超时, 请检查网络后重试`));
          }, p43.timeout);
        })]);
      case "Node.js":
        {
          let v8 = globalThis.fetch ? globalThis.fetch : require("node-fetch");
          let v9 = (globalThis.fetchCookie ? globalThis.fetchCookie : require("fetch-cookie").default)(v8);
          p43.timeout = p43.timeout * 1000;
          p43.redirect = p43.redirection ? "follow" : "manual";
          let {
            url: s,
            ...n
          } = p43;
          return Promise.race([await v9(s, n).then(async p54 => {
            let v10;
            let v11 = await p54.arrayBuffer();
            try {
              v10 = p54.headers.raw();
            } catch {
              v10 = Array.from(p54.headers.entries()).reduce((p55, [v12, v13]) => {
                p55[v12] = p55[v12] ? [...p55[v12], v13] : [v13];
                return p55;
              }, {});
            }
            return {
              ok: p54.ok ?? /^2\d\d$/.test(p54.status),
              status: p54.status,
              statusCode: p54.status,
              statusText: p54.statusText,
              body: new TextDecoder("utf-8").decode(v11),
              bodyBytes: v11,
              headers: Object.fromEntries(Object.entries(v10).map(([v14, v15]) => [v14, v14.toLowerCase() !== "set-cookie" ? v15.toString() : v15]))
            };
          }).catch(p56 => Promise.reject(p56.message)), new Promise((p57, p58) => {
            setTimeout(() => {
              p58(Error(`${Function.name}: 请求超时, 请检查网络后重试`));
            }, p43.timeout);
          })]);
        }
    }
  }
  class C4 {
    static data = null;
    static dataFile = "box.dat";
    static #n = /^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;
    static getItem(p59, p60 = null) {
      let vP60 = p60;
      if (p59.startsWith("@") === true) {
        let {
          key: e,
          path: s
        } = p59.match(C4.#n)?.groups;
        p59 = e;
        let v16 = C4.getItem(p59, {});
        if (typeof v16 != "object") {
          v16 = {};
        }
        vP60 = C3.get(v16, s);
        try {
          vP60 = JSON.parse(vP60);
        } catch (e2) {}
      } else {
        switch (vF) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Egern":
          case "Shadowrocket":
            vP60 = $persistentStore.read(p59);
            break;
          case "Quantumult X":
            vP60 = $prefs.valueForKey(p59);
            break;
          case "Node.js":
            C4.data = C4.#l(C4.dataFile);
            vP60 = C4.data?.[p59];
            break;
          default:
            vP60 = C4.data?.[p59] || null;
        }
        try {
          vP60 = JSON.parse(vP60);
        } catch (e3) {}
      }
      return vP60 ?? p60;
    }
    static setItem(p61 = new String(), p62 = new String()) {
      let v17 = false;
      p62 = typeof p62 == "object" ? JSON.stringify(p62) : String(p62);
      if (p61.startsWith("@") === true) {
        let {
          key: e,
          path: r
        } = p61.match(C4.#n)?.groups;
        p61 = e;
        let v18 = C4.getItem(p61, {});
        if (typeof v18 != "object") {
          v18 = {};
        }
        C3.set(v18, r, p62);
        v17 = C4.setItem(p61, v18);
      } else {
        switch (vF) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Egern":
          case "Shadowrocket":
            v17 = $persistentStore.write(p62, p61);
            break;
          case "Quantumult X":
            v17 = $prefs.setValueForKey(p62, p61);
            break;
          case "Node.js":
            C4.data = C4.#l(C4.dataFile);
            C4.data[p61] = p62;
            C4.#r(C4.dataFile);
            v17 = true;
            break;
          default:
            v17 = C4.data?.[p61] || null;
        }
      }
      return v17;
    }
    static removeItem(p63) {
      let v19 = false;
      if (p63.startsWith("@") === true) {
        let {
          key: e,
          path: n
        } = p63.match(C4.#n)?.groups;
        p63 = e;
        let v20 = C4.getItem(p63);
        if (typeof v20 != "object") {
          v20 = {};
        }
        keyValue = C3.unset(v20, n);
        v19 = C4.setItem(p63, v20);
      } else {
        switch (vF) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Egern":
          case "Shadowrocket":
          case "Node.js":
          default:
            v19 = false;
            break;
          case "Quantumult X":
            v19 = $prefs.removeValueForKey(p63);
        }
      }
      return v19;
    }
    static clear() {
      let v21 = false;
      switch (vF) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
        case "Node.js":
        default:
          v21 = false;
          break;
        case "Quantumult X":
          v21 = $prefs.removeAllValues();
      }
      return v21;
    }
    static #l = p64 => {
      if (vF !== "Node.js") {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("node:fs");
        this.path = this.path ? this.path : require("node:path");
        let v22 = this.path.resolve(p64);
        let v23 = this.path.resolve(process.cwd(), p64);
        let v24 = this.fs.existsSync(v22);
        let v25 = !v24 && this.fs.existsSync(v23);
        if (!v24 && !v25) {
          return {};
        }
        try {
          return JSON.parse(this.fs.readFileSync(v24 ? v22 : v23));
        } catch (e4) {
          return {};
        }
      }
    };
    static #r = (p65 = this.dataFile) => {
      if (vF === "Node.js") {
        this.fs = this.fs ? this.fs : require("node:fs");
        this.path = this.path ? this.path : require("node:path");
        let v26 = this.path.resolve(p65);
        let v27 = this.path.resolve(process.cwd(), p65);
        let v28 = this.fs.existsSync(v26);
        let v29 = !v28 && this.fs.existsSync(v27);
        let v30 = JSON.stringify(this.data);
        if (v28) {
          this.fs.writeFileSync(v26, v30);
        } else if (v29) {
          this.fs.writeFileSync(v27, v30);
        } else {
          this.fs.writeFileSync(v26, v30);
        }
      }
    };
  }
  function f3(p66) {
    if (/^\d+$/.test(p66)) {
      p66 = Number.parseInt(p66, 10);
    }
    return p66;
  }
  class C5 {
    constructor(p67) {
      switch (typeof p67) {
        case "string":
          if (p67.length === 0) {
            break;
          }
          if (p67.startsWith("?")) {
            p67 = p67.slice(1);
          }
          p67.split("&").map(p68 => p68.split("=")).forEach(([v31, v32]) => {
            this.#i.push(v31 ? decodeURIComponent(v31) : v31);
            this.#o.push(v32 ? decodeURIComponent(v32) : v32);
          });
          break;
        case "object":
          if (Array.isArray(p67)) {
            Object.entries(p67).forEach(([v33, v34]) => {
              this.#i.push(v33);
              this.#o.push(v34);
            });
          } else if (Symbol.iterator in Object(p67)) {
            for (const [v35, v36] of p67) {
              this.#i.push(v35);
              this.#o.push(v36);
            }
          }
      }
      this.#g(this.#i, this.#o);
    }
    #u = "";
    #i = [];
    #o = [];
    #c(p69) {
      return encodeURIComponent(p69).replace(/%2C/g, ",").replace(/%21/g, "!").replace(/%27/g, "'").replace(/%28/g, "(").replace(/%29/g, ")").replace(/%2A/g, "*");
    }
    #g(p70, p71) {
      if (p70.length === 0) {
        this.#u = "";
      } else {
        this.#u = p70.map((p72, p73) => {
          switch (typeof p71[p73]) {
            case "object":
              return `${this.#c(p72)}=${this.#c(JSON.stringify(p71[p73]))}`;
            case "boolean":
            case "number":
            case "string":
              return `${this.#c(p72)}=${this.#c(p71[p73])}`;
            default:
              return this.#c(p72);
          }
        }).join("&");
      }
    }
    append(p74, p75) {
      this.#i.push(p74);
      this.#o.push(p75);
      this.#g(this.#i, this.#o);
    }
    delete(p76, p77) {
      while (this.#i.indexOf(p76) > -1) {
        this.#o.splice(this.#i.indexOf(p76), 1);
        this.#i.splice(this.#i.indexOf(p76), 1);
      }
      this.#g(this.#i, this.#o);
    }
    entries() {
      return this.#i.map((p78, p79) => [p78, this.#o[p79]]);
    }
    get(p80) {
      return this.#o[this.#i.indexOf(p80)];
    }
    getAll(p81) {
      return this.#o.filter((p82, p83) => this.#i[p83] === p81);
    }
    has(p84, p85) {
      return this.#i.indexOf(p84) > -1;
    }
    keys() {
      return this.#i;
    }
    set(p86, p87) {
      if (this.#i.indexOf(p86) === -1) {
        this.append(p86, p87);
      } else {
        let v37 = true;
        let vA = [];
        this.#i = this.#i.filter((p88, p89) => p88 !== p86 ? (vA.push(this.#o[p89]), true) : !!v37 && (v37 = false, vA.push(p87), true));
        this.#o = vA;
        this.#g(this.#i, this.#o);
      }
    }
    sort() {
      let v38 = this.entries().sort();
      this.#i = [];
      this.#o = [];
      v38.forEach(p90 => {
        this.#i.push(p90[0]);
        this.#o.push(p90[1]);
      });
      this.#g(this.#i, this.#o);
    }
    toString = () => this.#u;
    values = () => this.#o.values();
  }
  class C6 {
    constructor(p91, p92) {
      switch (typeof p91) {
        case "string":
          {
            const v39 = /^(blob:|file:)?[a-zA-z]+:\/\/.*/.test(p91);
            const v40 = !!p92 && /^(blob:|file:)?[a-zA-z]+:\/\/.*/.test(p92);
            if (v39) {
              this.href = p91;
            } else if (v40) {
              this.href = p92 + p91;
            } else {
              throw TypeError("URL string is not valid. If using a relative url, a second argument needs to be passed representing the base URL. Example: new URL(\"relative/path\", \"http://www.example.com\");");
            }
            break;
          }
        case "object":
          break;
        default:
          throw TypeError("Invalid argument type.");
      }
    }
    #m = {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      password: "",
      pathname: "",
      port: NaN,
      protocol: "",
      search: "",
      searchParams: new C5(""),
      username: ""
    };
    static #d = /^(?<scheme>([^:\/?#]+):)?(?:\/\/(?<authority>[^\/?#]*))?(?<path>[^?#]*)(?<query>\?([^#]*))?(?<hash>#(.*))?$/;
    static #p = /^(?<authentication>(?<username>[^:]*)(:(?<password>[^@]*))?@)?(?<hostname>[^:]+)(:(?<port>\d+))?$/;
    get hash() {
      return this.#m.hash;
    }
    set hash(p93) {
      if (p93.length !== 0) {
        if (p93.startsWith("#")) {
          p93 = p93.slice(1);
        }
        this.#m.hash = `#${encodeURIComponent(p93)}`;
      }
    }
    get host() {
      if (this.port.length > 0) {
        return `${this.hostname}:${this.port}`;
      } else {
        return this.hostname;
      }
    }
    set host(p94) {
      [this.hostname, this.port] = p94.split(":", 2);
    }
    get hostname() {
      return encodeURIComponent(this.#m.hostname);
    }
    set hostname(p95) {
      this.#m.hostname = p95 ?? "";
    }
    get href() {
      let vLS = "";
      if (this.username.length > 0) {
        vLS += this.username;
        if (this.password.length > 0) {
          vLS += `:${this.password}`;
        }
        vLS += "@";
      }
      return `${this.protocol}//${vLS}${this.host}${this.pathname}${this.search}${this.hash}`;
    }
    set href(p96) {
      if (p96.startsWith("blob:") || p96.startsWith("file:")) {
        p96 = p96.slice(5);
      }
      let v41 = p96.match(C6.#d);
      if (!v41) {
        throw TypeError("Invalid URL format.");
      }
      this.protocol = v41.groups.scheme ?? "";
      let v42 = v41.groups.authority.match(C6.#p);
      this.username = v42.groups.username ?? "";
      this.password = v42.groups.password ?? "";
      this.hostname = v42.groups.hostname ?? "";
      this.port = v42.groups.port ?? "";
      this.pathname = v41.groups.path ?? "";
      this.search = v41.groups.query ?? "";
      this.hash = v41.groups.hash ?? "";
    }
    get origin() {
      return `${this.protocol}//${this.host}`;
    }
    get password() {
      return encodeURIComponent(this.#m.password);
    }
    set password(p97) {
      if (this.username.length > 0) {
        this.#m.password = p97 ?? "";
      }
    }
    get pathname() {
      return `/${this.#m.pathname}`;
    }
    set pathname(p98) {
      if ((p98 = `${p98}`).startsWith("/")) {
        p98 = p98.slice(1);
      }
      this.#m.pathname = p98;
    }
    get port() {
      if (Number.isNaN(this.#m.port)) {
        return "";
      }
      let v43 = this.#m.port.toString();
      if (this.protocol === "ftp:" && v43 === "21" || this.protocol === "http:" && v43 === "80" || this.protocol === "https:" && v43 === "443") {
        return "";
      } else {
        return v43;
      }
    }
    set port(p99) {
      if (p99 === "") {
        this.#m.port = NaN;
      } else {
        let v44 = Number.parseInt(p99, 10);
        if (v44 >= 0 && v44 < 65535) {
          this.#m.port = v44;
        }
      }
    }
    get protocol() {
      return `${this.#m.protocol}:`;
    }
    set protocol(p100) {
      if (p100.endsWith(":")) {
        p100 = p100.slice(0, -1);
      }
      this.#m.protocol = p100;
    }
    get search() {
      this.#m.search = this.searchParams.toString();
      if (this.#m.search.length > 0) {
        return `?${this.#m.search}`;
      } else {
        return "";
      }
    }
    set search(p101) {
      if ((p101 = `${p101}`).startsWith("?")) {
        p101 = p101.slice(1);
      }
      this.#m.search = p101;
      this.#m.searchParams = new C5(this.#m.search);
    }
    get searchParams() {
      return this.#m.searchParams;
    }
    get username() {
      return encodeURIComponent(this.#m.username);
    }
    set username(p102) {
      this.#m.username = p102 ?? "";
    }
    static parse = (p103, p104) => new C6(p103, p104);
    toString = () => this.href;
    toJSON = () => JSON.stringify({
      hash: this.hash,
      host: this.host,
      hostname: this.hostname,
      href: this.href,
      origin: this.origin,
      password: this.password,
      pathname: this.pathname,
      port: this.port,
      protocol: this.protocol,
      search: this.search,
      searchParams: this.searchParams,
      username: this.username
    });
  }
  class C7 {
    static name = "XML";
    static version = "0.4.2";
    static about = () => console.log(`
🟧 ${this.name} v${this.version}
`);
    static #h = "@";
    static #f = "#";
    static #b = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&apos;": "'",
      "&quot;": "\""
    };
    static #y = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&apos;",
      "\"": "&quot;"
    };
    static parse(p105 = new String(), p106 = "") {
      let v45 = this.#b;
      let v46 = this.#h;
      let v47 = this.#f;
      return function f4(p107, p108) {
        let v48;
        switch (typeof p107) {
          case "string":
          case "undefined":
            v48 = p107;
            break;
          case "object":
            let v49 = p107.raw;
            let v50 = p107.name;
            let v51 = p107.tag;
            let v52 = p107.children;
            v48 = v49 || (v51 ? function (p109, p110) {
              let v53;
              let v54;
              if (!p109) {
                return;
              }
              let v55 = p109.split(/([^\s='"]+(?:\s*=\s*(?:'[\S\s]*?'|"[\S\s]*?"|[^\s'"]*))?)/);
              let v56 = v55.length;
              for (let vLN0 = 0; vLN0 < v56; vLN0++) {
                var v57;
                v57 = v55[vLN0];
                let v58 = v57?.trim?.();
                if (!v58) {
                  continue;
                }
                v53 ||= {};
                let v59 = v58.indexOf("=");
                if (v59 < 0) {
                  v58 = v46 + v58;
                  v54 = null;
                } else {
                  v54 = v58.substr(v59 + 1).replace(/^\s+/, "");
                  v58 = v46 + v58.substr(0, v59).replace(/\s+$/, "");
                  let v60 = v54[0];
                  if (v60 === v54[v54.length - 1] && (v60 === "'" || v60 === "\"")) {
                    v54 = v54.substr(1, v54.length - 2);
                  }
                  v54 = f8(v54);
                }
                if (p110) {
                  v54 = p110(v58, v54);
                }
                f6(v53, v58, v54);
              }
              return v53;
            }(v51, p108) : v52 ? {} : {
              [v50]: undefined
            });
            if (v50 === "plist") {
              v48 = Object.assign(v48, function f5(p111, p112) {
                let v61;
                switch (typeof p111) {
                  case "string":
                  case "undefined":
                    v61 = p111;
                    break;
                  case "object":
                    let v62 = p111.name;
                    let v63 = p111.children;
                    v61 = {};
                    switch (v62) {
                      case "plist":
                        v61 = Object.assign(v61, f5(v63[0], p112));
                        break;
                      case "dict":
                        let v64 = v63.map(p113 => f5(p113, p112));
                        v61 = Object.fromEntries(v64 = function (p114, p115) {
                          for (var vLN02 = 0, vA2 = []; vLN02 < p114.length;) {
                            vA2.push(p114.slice(vLN02, vLN02 += 2));
                          }
                          return vA2;
                        }(v64, 2));
                        break;
                      case "array":
                        if (!Array.isArray(v61)) {
                          v61 = [];
                        }
                        v61 = v63.map(p116 => f5(p116, p112));
                        break;
                      case "key":
                      case "string":
                        v61 = v63[0];
                        break;
                      case "true":
                      case "false":
                        v61 = JSON.parse(v62);
                        break;
                      case "integer":
                        v61 = BigInt(v63[0]);
                        break;
                      case "real":
                        v61 = parseFloat(v63[0]);
                    }
                    if (p112) {
                      v61 = p112(v62 || "", v61);
                    }
                }
                return v61;
              }(v52[0], p108));
            } else {
              v52?.forEach?.((p117, p118) => {
                if (typeof p117 == "string") {
                  f6(v48, v47, f4(p117, p108), undefined);
                } else if (p117.tag || p117.children || p117.raw) {
                  f6(v48, p117.name, f4(p117, p108), undefined);
                } else {
                  f6(v48, p117.name, f4(p117, p108), v52?.[p118 - 1]?.name);
                }
              });
            }
            if (v52 && v52.length === 0) {
              f6(v48, v47, null, undefined);
            }
            if (p108) {
              v48 = p108(v50 || "", v48);
            }
        }
        return v48;
        function f6(p119, p120, p121, p122 = p120) {
          if (p121 !== undefined) {
            let v65 = p119[p122];
            if (Array.isArray(v65)) {
              v65.push(p121);
            } else if (v65) {
              p119[p122] = [v65, p121];
            } else {
              p119[p120] = p121;
            }
          }
        }
      }(function (p123) {
        let v66 = p123.replace(/^[ \t]+/gm, "").split(/<([^!<>?](?:'[\S\s]*?'|"[\S\s]*?"|[^'"<>])*|!(?:--[\S\s]*?--|\[[^\[\]'"<>]+\[[\S\s]*?]]|DOCTYPE[^\[<>]*?\[[\S\s]*?]|(?:ENTITY[^"<>]*?"[\S\s]*?")?[\S\s]*?)|\?[\S\s]*?\?)>/);
        let v67 = v66.length;
        let vO4 = {
          children: []
        };
        let vVO4 = vO4;
        let vA3 = [];
        for (let vLN03 = 0; vLN03 < v67;) {
          let v68 = v66[vLN03++];
          if (v68) {
            (function (p124) {
              var v69;
              v69 = p124;
              if (p124 = v69?.replace?.(/^(\r\n|\r|\n|\t)+|(\r\n|\r|\n|\t)+$/g, "")) {
                f7(f8(p124));
              }
            })(v68);
          }
          let v70 = v66[vLN03++];
          if (v70) {
            (function (p125) {
              let v71 = p125.split(" ");
              let v72 = v71.shift();
              let v73 = v71.length;
              let vO5 = {};
              switch (v72[0]) {
                case "/":
                  let v74 = p125.replace(/^\/|[\s\/].*$/g, "").toLowerCase();
                  while (vA3.length) {
                    let v75 = vVO4?.name?.toLowerCase?.();
                    vVO4 = vA3.pop();
                    if (v75 === v74) {
                      break;
                    }
                  }
                  break;
                case "?":
                  vO5.name = v72;
                  vO5.raw = v71.join(" ");
                  f7(vO5);
                  break;
                case "!":
                  if (/!\[CDATA\[(.+)\]\]/.test(p125)) {
                    vO5.name = "!CDATA";
                    vO5.raw = p125.match(/!\[CDATA\[(?<raw>.+)\]\]/)?.groups?.raw;
                  } else if (/!--(.+)--/.test(p125)) {
                    vO5.name = "!--";
                    vO5.raw = p125.match(/!--(?<raw>.+)--/)?.groups?.raw;
                  } else {
                    vO5.name = v72;
                    vO5.raw = v71.join(" ");
                  }
                  f7(vO5);
                  break;
                default:
                  f7(vO5 = function (p126) {
                    let vO6 = {
                      children: []
                    };
                    let v76 = (p126 = p126.replace(/\s*\/?$/, "")).search(/[\s='"\/]/);
                    if (v76 < 0) {
                      vO6.name = p126;
                    } else {
                      vO6.name = p126.substr(0, v76);
                      vO6.tag = p126.substr(v76);
                    }
                    return vO6;
                  }(p125));
                  if ((v71?.[v73 - 1] ?? v72).slice(-1) === "/" || v72 === "link") {
                    delete vO5.children;
                  } else {
                    vA3.push(vVO4);
                    vVO4 = vO5;
                  }
              }
            })(v70);
          }
        }
        return vO4;
        function f7(p127) {
          vVO4.children.push(p127);
        }
      }(p105), p106);
      function f8(p128) {
        return p128.replace(/(&(?:lt|gt|amp|apos|quot|#(?:\d{1,6}|x[0-9a-fA-F]{1,5}));)/g, function (p129) {
          if (p129[1] === "#") {
            let v77 = p129[2] === "x" ? parseInt(p129.substr(3), 16) : parseInt(p129.substr(2), 10);
            if (v77 > -1) {
              return String.fromCharCode(v77);
            }
          }
          return v45[p129] || p129;
        });
      }
    }
    static stringify(p130 = {}, p131 = "") {
      this.#y;
      let v78 = this.#h;
      let v79 = this.#f;
      let vLS2 = "";
      for (let v80 in p130) {
        vLS2 += function f9(p132, p133, p134) {
          let vLS3 = "";
          switch (typeof p132) {
            case "object":
              if (Array.isArray(p132)) {
                vLS3 = p132.reduce((p135, p136) => p135 += `${p134}${f9(p136, p133, `${p134}	`)}
`, "");
              } else {
                let vLS4 = "";
                let v81 = false;
                for (let v82 in p132) {
                  if (v82[0] === v78) {
                    vLS4 += ` ${v82.substring(1)}="${p132[v82].toString()}"`;
                    delete p132[v82];
                  } else if (p132[v82] === undefined) {
                    p133 = v82;
                  } else {
                    v81 = true;
                  }
                }
                vLS3 += `${p134}<${p133}${vLS4}${v81 || p133 === "link" ? "" : "/"}>`;
                if (v81) {
                  if (p133 === "plist") {
                    vLS3 += function f10(p137, p138, p139) {
                      let vLS5 = "";
                      switch (typeof p137) {
                        case "boolean":
                          vLS5 = `${p139}<${p137.toString()}/>`;
                          break;
                        case "number":
                          vLS5 = `${p139}<real>${p137.toString()}</real>`;
                          break;
                        case "bigint":
                          vLS5 = `${p139}<integer>${p137.toString()}</integer>`;
                          break;
                        case "string":
                          vLS5 = `${p139}<string>${p137.toString()}</string>`;
                          break;
                        case "object":
                          let vLS6 = "";
                          if (Array.isArray(p137)) {
                            for (var vLN04 = 0, v83 = p137.length; vLN04 < v83; vLN04++) {
                              vLS6 += `${p139}${f10(p137[vLN04], p138, `${p139}	`)}`;
                            }
                            vLS5 = `${p139}<array>${vLS6}${p139}</array>`;
                          } else {
                            let vLS7 = "";
                            Object.entries(p137).forEach(([v84, v85]) => {
                              vLS7 += `${p139}<key>${v84}</key>`;
                              vLS7 += f10(v85, v84, p139);
                            });
                            vLS5 = `${p139}<dict>${vLS7}${p139}</dict>`;
                          }
                      }
                      return vLS5;
                    }(p132, p133, `${p134}	`);
                  } else {
                    for (let v86 in p132) {
                      if (v86 === v79) {
                        vLS3 += p132[v86] ?? "";
                      } else {
                        vLS3 += f9(p132[v86], v86, `${p134}	`);
                      }
                    }
                  }
                  vLS3 += `${vLS3.slice(-1) === "\n" ? p134 : ""}</${p133}>`;
                }
              }
              break;
            case "string":
              switch (p133) {
                case "?xml":
                case "!DOCTYPE":
                  vLS3 += `${p134}<${p133} ${p132.toString()}>`;
                  break;
                case "?":
                  vLS3 += `${p134}<${p133}${p132.toString()}${p133}>`;
                  break;
                case "!--":
                  vLS3 += `${p134}<!--${p132.toString()}-->`;
                  break;
                case "!CDATA":
                  vLS3 += `${p134}<![CDATA[${p132.toString()}]]>`;
                  break;
                case v79:
                  vLS3 += p132;
                  break;
                default:
                  vLS3 += `${p134}<${p133}>${p132.toString()}</${p133}>`;
              }
              break;
            case "undefined":
              vLS3 += `${p134}<${p133.toString()}/>`;
          }
          return vLS3;
        }(p130[v80], v80, "");
      }
      if (p131) {
        return vLS2.replace(/\t/g, p131);
      } else {
        return vLS2.replace(/\t|\n/g, "");
      }
    }
  }
  class C8 {
    static name = "WebVTT";
    static version = "2.2.0";
    static about = () => console.log(`
🟧 ${this.name} v${this.version}
`);
    static parse(p140 = new String(), p141 = {
      milliseconds: true,
      timeStamp: true,
      line: "single",
      lineBreak: "\n"
    }) {
      let v87 = p141.milliseconds ? /^((?<index>\d+)(\r\n|\r|\n))?(?<timing>(?<startTime>[0-9:.,]+) --> (?<endTime>[0-9:.,]+)) ?(?<settings>.+)?[^](?<text>[\s\S]*)?$/ : /^((?<index>\d+)(\r\n|\r|\n))?(?<timing>(?<startTime>[0-9:]+)[0-9.,]+ --> (?<endTime>[0-9:]+)[0-9.,]+) ?(?<settings>.+)?[^](?<text>[\s\S]*)?$/;
      let v88 = p140.split(/\r\n\r\n|\r\r|\n\n/);
      let vO7 = {
        headers: {},
        comments: [],
        style: "",
        body: []
      };
      v88.forEach(p142 => {
        switch ((p142 = p142.trim()).substring(0, 5).trim()) {
          case "WEBVT":
            {
              let v89 = p142.split(/\r\n|\r|\n/);
              vO7.headers.type = v89.shift();
              vO7.headers.options = v89;
              break;
            }
          case "NOTE":
            vO7.comments.push(p142);
            break;
          case "STYLE":
            {
              let v90 = p142.split(/\r\n|\r|\n/);
              v90.shift();
              vO7.style = v90.join(p141.lineBreak);
              break;
            }
          default:
            let v91 = p142.match(v87)?.groups;
            if (v91) {
              if (vO7.headers?.type !== "WEBVTT") {
                v91.timing = v91?.timing?.replace?.(",", ".");
                v91.startTime = v91?.startTime?.replace?.(",", ".");
                v91.endTime = v91?.endTime?.replace?.(",", ".");
              }
              if (p141.timeStamp) {
                let v92 = v91?.startTime?.replace?.(/(.*)/, "1970-01-01T$1Z");
                v91.timeStamp = p141.milliseconds ? Date.parse(v92) : Date.parse(v92) / 1000;
              }
              v91.text = v91?.text?.trimEnd?.();
              switch (p141.line) {
                case "single":
                  v91.text = v91?.text?.replace?.(/\r\n|\r|\n/, " ");
                  break;
                case "multi":
                  v91.text = v91?.text?.split?.(/\r\n|\r|\n/);
              }
              vO7.body.push(v91);
            }
        }
      });
      return vO7;
    }
    static stringify(p143 = {
      headers: {},
      comments: [],
      style: "",
      body: []
    }, p144 = {
      milliseconds: true,
      timeStamp: true,
      line: "single",
      lineBreak: "\n"
    }) {
      return [p143.headers = [p143.headers?.type || "", p143.headers?.options || ""].flat(Infinity).join(p144.lineBreak), p143.comments = p143?.comments?.join?.(p144.lineBreak), p143.style = p143?.style?.length > 0 ? ["STYLE", p143.style].join(p144.lineBreak) : "", p143.body = p143.body.map(p145 => {
        if (Array.isArray(p145.text)) {
          p145.text = p145.text.join(p144.lineBreak);
        }
        return p145 = `${p145.index ? p145.index + p144.lineBreak : ""}${p145.timing} ${p145?.settings ?? ""}${p144.lineBreak}${p145.text}`;
      }).join(p144.lineBreak + p144.lineBreak)].join(p144.lineBreak + p144.lineBreak).trim() + p144.lineBreak + p144.lineBreak;
    }
  }
  let vO8 = {
    Universal: {
      Settings: {
        Types: ["Official", "Translate"],
        Languages: ["AUTO", "ZH"]
      },
      Configs: {
        Languages: {
          AUTO: ["en", "en-US", "eng", "en-GB", "en-UK", "en-CA", "en-US SDH", "ja", "ja-JP", "jpn", "ko", "ko-KR", "kor", "pt", "pt-PT", "pt-BR", "por"],
          AR: ["ar", "ar-001"],
          BG: ["bg", "bg-BG", "bul"],
          CS: ["cs", "cs-CZ", "ces"],
          DA: ["da", "da-DK", "dan"],
          DE: ["de", "de-DE", "deu"],
          EL: ["el", "el-GR", "ell"],
          EN: ["en", "en-US", "eng", "en-GB", "en-UK", "en-CA", "en-US SDH"],
          "EN-CA": ["en-CA", "en", "eng"],
          "EN-GB": ["en-UK", "en", "eng"],
          "EN-US": ["en-US", "en", "eng"],
          "EN-US SDH": ["en-US SDH", "en-US", "en", "eng"],
          ES: ["es", "es-419", "es-ES", "spa", "es-419 SDH"],
          "ES-419": ["es-419", "es", "spa"],
          "ES-419 SDH": ["es-419 SDH", "es-419", "es", "spa"],
          "ES-ES": ["es-ES", "es", "spa"],
          ET: ["et", "et-EE", "est"],
          FI: ["fi", "fi-FI", "fin"],
          FR: ["fr", "fr-CA", "fr-FR", "fra"],
          "FR-CA": ["fr-CA", "fr", "fra"],
          "FR-DR": ["fr-FR", "fr", "fra"],
          HU: ["hu", "hu-HU", "hun"],
          ID: ["id", "id-id"],
          IT: ["it", "it-IT", "ita"],
          JA: ["ja", "ja-JP", "jpn"],
          KO: ["ko", "ko-KR", "kor"],
          LT: ["lt", "lt-LT", "lit"],
          LV: ["lv", "lv-LV", "lav"],
          NL: ["nl", "nl-NL", "nld"],
          NO: ["no", "nb-NO", "nor"],
          PL: ["pl", "pl-PL"],
          PT: ["pt", "pt-PT", "pt-BR", "por"],
          "PT-PT": ["pt-PT", "pt", "por"],
          "PT-BR": ["pt-BR", "pt", "por"],
          RO: ["ro", "ro-RO", "ron"],
          RU: ["ru", "ru-RU", "rus"],
          SK: ["sk", "sk-SK", "slk"],
          SL: ["sl", "sl-SI", "slv"],
          SV: ["sv", "sv-SE", "swe"],
          IS: ["is", "is-IS", "isl"],
          ZH: ["zh", "cmn", "zho", "zh-CN", "zh-Hans", "zh-Hans-SG", "cmn-Hans", "zh-TW", "zh-Hant", "zh-Hant-TW", "cmn-Hant", "zh-HK", "yue-Hant", "yue"],
          "ZH-CN": ["zh-CN", "zh-Hans", "cmn-Hans", "zh-Hans-SG", "zho"],
          "ZH-HANS": ["zh-Hans", "zh-Hans-SG", "cmn-Hans", "zh-CN", "zho"],
          "ZH-HK": ["zh-HK", "yue-Hant", "yue", "zho"],
          "ZH-TW": ["zh-TW", "zh-Hant-TW", "zh-Hant", "cmn-Hant", "zho"],
          "ZH-HANT": ["zh-Hant", "zh-Hant-TW", "cmn-Hant", "zh-TW", "zho"],
          YUE: ["yue", "yue-Hant", "zh-HK", "zho"],
          "YUE-HK": ["yue-Hant", "yue", "zh-HK", "zho"]
        }
      }
    },
    YouTube: {
      Settings: {
        Type: "Official",
        Types: ["Translate", "External"],
        Languages: ["AUTO", "ZH"],
        AutoCC: true,
        ShowOnly: false
      },
      Configs: {
        Languages: {
          BG: "bg-BG",
          CS: "cs",
          DA: "da-DK",
          DE: "de",
          EL: "el",
          EN: "en",
          "EN-GB": "en-GB",
          "EN-US": "en-US",
          "EN-US SDH": "en-US SDH",
          ES: "es",
          "ES-419": "es-419",
          "ES-ES": "es-ES",
          ET: "et-EE",
          FI: "fi",
          FR: "fr",
          HU: "hu-HU",
          ID: "id",
          IS: "is-IS",
          IT: "it",
          JA: "ja",
          KO: "ko",
          LT: "lt-LT",
          LV: "lv-LV",
          NL: "nl-NL",
          NO: "nb-NO",
          PL: "pl-PL",
          PT: "pt",
          "PT-PT": "pt-PT",
          "PT-BR": "pt-BR",
          RO: "ro-RO",
          RU: "ru-RU",
          SK: "sk-SK",
          SL: "sl-SI",
          SV: "sv-SE",
          YUE: "yue",
          "YUE-HK": "yue-HK",
          ZH: "zh",
          "ZH-HANS": "zh-Hans",
          "ZH-HK": "zh-Hant-HK",
          "ZH-HANT": "zh-Hant",
          "ZH-TW": "zh-TW"
        },
        translationLanguages: {
          DESKTOP: [{
            languageCode: "sq",
            languageName: {
              simpleText: "Shqip - 阿尔巴尼亚语"
            }
          }, {
            languageCode: "ak",
            languageName: {
              simpleText: "Ákán - 阿肯语"
            }
          }, {
            languageCode: "ar",
            languageName: {
              simpleText: "العربية - 阿拉伯语"
            }
          }, {
            languageCode: "am",
            languageName: {
              simpleText: "አማርኛ - 阿姆哈拉语"
            }
          }, {
            languageCode: "as",
            languageName: {
              simpleText: "অসমীয়া - 阿萨姆语"
            }
          }, {
            languageCode: "az",
            languageName: {
              simpleText: "آذربايجان ديلی - 阿塞拜疆语"
            }
          }, {
            languageCode: "ee",
            languageName: {
              simpleText: "Èʋegbe - 埃维语"
            }
          }, {
            languageCode: "ay",
            languageName: {
              simpleText: "Aymar aru - 艾马拉语"
            }
          }, {
            languageCode: "ga",
            languageName: {
              simpleText: "Gaeilge - 爱尔兰语"
            }
          }, {
            languageCode: "et",
            languageName: {
              simpleText: "Eesti - 爱沙尼亚语"
            }
          }, {
            languageCode: "or",
            languageName: {
              simpleText: "ଓଡ଼ିଆ - 奥里亚语"
            }
          }, {
            languageCode: "om",
            languageName: {
              simpleText: "Afaan Oromoo - 奥罗莫语"
            }
          }, {
            languageCode: "eu",
            languageName: {
              simpleText: "Euskara - 巴斯克语"
            }
          }, {
            languageCode: "be",
            languageName: {
              simpleText: "Беларуская - 白俄罗斯语"
            }
          }, {
            languageCode: "bg",
            languageName: {
              simpleText: "Български - 保加利亚语"
            }
          }, {
            languageCode: "nso",
            languageName: {
              simpleText: "Sesotho sa Leboa - 北索托语"
            }
          }, {
            languageCode: "is",
            languageName: {
              simpleText: "Íslenska - 冰岛语"
            }
          }, {
            languageCode: "pl",
            languageName: {
              simpleText: "Polski - 波兰语"
            }
          }, {
            languageCode: "bs",
            languageName: {
              simpleText: "Bosanski - 波斯尼亚语"
            }
          }, {
            languageCode: "fa",
            languageName: {
              simpleText: "فارسی - 波斯语"
            }
          }, {
            languageCode: "bho",
            languageName: {
              simpleText: "भोजपुरी - 博杰普尔语"
            }
          }, {
            languageCode: "ts",
            languageName: {
              simpleText: "Xitsonga - 聪加语"
            }
          }, {
            languageCode: "tt",
            languageName: {
              simpleText: "Татарча - 鞑靼语"
            }
          }, {
            languageCode: "da",
            languageName: {
              simpleText: "Dansk - 丹麦语"
            }
          }, {
            languageCode: "de",
            languageName: {
              simpleText: "Deutsch - 德语"
            }
          }, {
            languageCode: "dv",
            languageName: {
              simpleText: "ދިވެހިބަސް - 迪维希语"
            }
          }, {
            languageCode: "ru",
            languageName: {
              simpleText: "Русский - 俄语"
            }
          }, {
            languageCode: "fr",
            languageName: {
              simpleText: "français - 法语"
            }
          }, {
            languageCode: "sa",
            languageName: {
              simpleText: "संस्कृतम् - 梵语"
            }
          }, {
            languageCode: "fil",
            languageName: {
              simpleText: "Filipino - 菲律宾语"
            }
          }, {
            languageCode: "fi",
            languageName: {
              simpleText: "suomi - 芬兰语"
            }
          }, {
            languageCode: "km",
            languageName: {
              simpleText: "ភាសាខ្មែរ - 高棉语"
            }
          }, {
            languageCode: "ka",
            languageName: {
              simpleText: "ქართული - 格鲁吉亚语"
            }
          }, {
            languageCode: "gu",
            languageName: {
              simpleText: "ગુજરાતી - 古吉拉特语"
            }
          }, {
            languageCode: "gn",
            languageName: {
              simpleText: "Avañe'ẽ - 瓜拉尼语"
            }
          }, {
            languageCode: "kk",
            languageName: {
              simpleText: "Қазақ тілі - 哈萨克语"
            }
          }, {
            languageCode: "ht",
            languageName: {
              simpleText: "Kreyòl ayisyen - 海地克里奥尔语"
            }
          }, {
            languageCode: "ko",
            languageName: {
              simpleText: "한국어 - 韩语"
            }
          }, {
            languageCode: "ha",
            languageName: {
              simpleText: "هَوُسَ - 豪萨语"
            }
          }, {
            languageCode: "nl",
            languageName: {
              simpleText: "Nederlands - 荷兰语"
            }
          }, {
            languageCode: "gl",
            languageName: {
              simpleText: "Galego - 加利西亚语"
            }
          }, {
            languageCode: "ca",
            languageName: {
              simpleText: "català - 加泰罗尼亚语"
            }
          }, {
            languageCode: "cs",
            languageName: {
              simpleText: "čeština - 捷克语"
            }
          }, {
            languageCode: "kn",
            languageName: {
              simpleText: "ಕನ್ನಡ - 卡纳达语"
            }
          }, {
            languageCode: "ky",
            languageName: {
              simpleText: "кыргыз тили - 吉尔吉斯语"
            }
          }, {
            languageCode: "xh",
            languageName: {
              simpleText: "isiXhosa - 科萨语"
            }
          }, {
            languageCode: "co",
            languageName: {
              simpleText: "corsu - 科西嘉语"
            }
          }, {
            languageCode: "hr",
            languageName: {
              simpleText: "hrvatski - 克罗地亚语"
            }
          }, {
            languageCode: "qu",
            languageName: {
              simpleText: "Runa Simi - 克丘亚语"
            }
          }, {
            languageCode: "ku",
            languageName: {
              simpleText: "Kurdî - 库尔德语"
            }
          }, {
            languageCode: "la",
            languageName: {
              simpleText: "lingua latīna - 拉丁语"
            }
          }, {
            languageCode: "lv",
            languageName: {
              simpleText: "latviešu valoda - 拉脱维亚语"
            }
          }, {
            languageCode: "lo",
            languageName: {
              simpleText: "ພາສາລາວ - 老挝语"
            }
          }, {
            languageCode: "lt",
            languageName: {
              simpleText: "lietuvių kalba - 立陶宛语"
            }
          }, {
            languageCode: "ln",
            languageName: {
              simpleText: "lingála - 林加拉语"
            }
          }, {
            languageCode: "lg",
            languageName: {
              simpleText: "Luganda - 卢干达语"
            }
          }, {
            languageCode: "lb",
            languageName: {
              simpleText: "Lëtzebuergesch - 卢森堡语"
            }
          }, {
            languageCode: "rw",
            languageName: {
              simpleText: "Kinyarwanda - 卢旺达语"
            }
          }, {
            languageCode: "ro",
            languageName: {
              simpleText: "Română - 罗马尼亚语"
            }
          }, {
            languageCode: "mt",
            languageName: {
              simpleText: "Malti - 马耳他语"
            }
          }, {
            languageCode: "mr",
            languageName: {
              simpleText: "मराठी - 马拉地语"
            }
          }, {
            languageCode: "mg",
            languageName: {
              simpleText: "Malagasy - 马拉加斯语"
            }
          }, {
            languageCode: "ml",
            languageName: {
              simpleText: "മലയാളം - 马拉雅拉姆语"
            }
          }, {
            languageCode: "ms",
            languageName: {
              simpleText: "bahasa Melayu - 马来语"
            }
          }, {
            languageCode: "mk",
            languageName: {
              simpleText: "македонски јазик - 马其顿语"
            }
          }, {
            languageCode: "mi",
            languageName: {
              simpleText: "te reo Māori - 毛利语"
            }
          }, {
            languageCode: "mn",
            languageName: {
              simpleText: "Монгол хэл - 蒙古语"
            }
          }, {
            languageCode: "bn",
            languageName: {
              simpleText: "বাংলা - 孟加拉语"
            }
          }, {
            languageCode: "my",
            languageName: {
              simpleText: "ဗမာစာ - 缅甸语"
            }
          }, {
            languageCode: "hmn",
            languageName: {
              simpleText: "Hmoob - 苗语"
            }
          }, {
            languageCode: "af",
            languageName: {
              simpleText: "Afrikaans - 南非荷兰语"
            }
          }, {
            languageCode: "st",
            languageName: {
              simpleText: "Sesotho - 南索托语"
            }
          }, {
            languageCode: "ne",
            languageName: {
              simpleText: "नेपाली - 尼泊尔语"
            }
          }, {
            languageCode: "no",
            languageName: {
              simpleText: "Norsk - 挪威语"
            }
          }, {
            languageCode: "pa",
            languageName: {
              simpleText: "ਪੰਜਾਬੀ - 旁遮普语"
            }
          }, {
            languageCode: "pt",
            languageName: {
              simpleText: "Português - 葡萄牙语"
            }
          }, {
            languageCode: "ps",
            languageName: {
              simpleText: "پښتو - 普什图语"
            }
          }, {
            languageCode: "ny",
            languageName: {
              simpleText: "chiCheŵa - 齐切瓦语"
            }
          }, {
            languageCode: "ja",
            languageName: {
              simpleText: "日本語 - 日语"
            }
          }, {
            languageCode: "sv",
            languageName: {
              simpleText: "Svenska - 瑞典语"
            }
          }, {
            languageCode: "sm",
            languageName: {
              simpleText: "Gagana fa'a Samoa - 萨摩亚语"
            }
          }, {
            languageCode: "sr",
            languageName: {
              simpleText: "Српски језик - 塞尔维亚语"
            }
          }, {
            languageCode: "si",
            languageName: {
              simpleText: "සිංහල - 僧伽罗语"
            }
          }, {
            languageCode: "sn",
            languageName: {
              simpleText: "ChiShona - 绍纳语"
            }
          }, {
            languageCode: "eo",
            languageName: {
              simpleText: "Esperanto - 世界语"
            }
          }, {
            languageCode: "sk",
            languageName: {
              simpleText: "slovenčina - 斯洛伐克语"
            }
          }, {
            languageCode: "sl",
            languageName: {
              simpleText: "slovenščina - 斯洛文尼亚语"
            }
          }, {
            languageCode: "sw",
            languageName: {
              simpleText: "Kiswahili - 斯瓦希里语"
            }
          }, {
            languageCode: "gd",
            languageName: {
              simpleText: "Gàidhlig - 苏格兰盖尔语"
            }
          }, {
            languageCode: "ceb",
            languageName: {
              simpleText: "Binisaya - 宿务语"
            }
          }, {
            languageCode: "so",
            languageName: {
              simpleText: "Soomaaliga - 索马里语"
            }
          }, {
            languageCode: "tg",
            languageName: {
              simpleText: "тоҷикӣ - 塔吉克语"
            }
          }, {
            languageCode: "te",
            languageName: {
              simpleText: "తెలుగు - 泰卢固语"
            }
          }, {
            languageCode: "ta",
            languageName: {
              simpleText: "தமிழ் - 泰米尔语"
            }
          }, {
            languageCode: "th",
            languageName: {
              simpleText: "ไทย - 泰语"
            }
          }, {
            languageCode: "ti",
            languageName: {
              simpleText: "ትግርኛ - 提格利尼亚语"
            }
          }, {
            languageCode: "tr",
            languageName: {
              simpleText: "Türkçe - 土耳其语"
            }
          }, {
            languageCode: "tk",
            languageName: {
              simpleText: "Türkmen - 土库曼语"
            }
          }, {
            languageCode: "cy",
            languageName: {
              simpleText: "Cymraeg - 威尔士语"
            }
          }, {
            languageCode: "ug",
            languageName: {
              simpleText: "ئۇيغۇرچە - 维吾尔语"
            }
          }, {
            languageCode: "und",
            languageName: {
              simpleText: "Unknown - 未知语言"
            }
          }, {
            languageCode: "ur",
            languageName: {
              simpleText: "اردو - 乌尔都语"
            }
          }, {
            languageCode: "uk",
            languageName: {
              simpleText: "українська - 乌克兰语"
            }
          }, {
            languageCode: "uz",
            languageName: {
              simpleText: "O'zbek - 乌兹别克语"
            }
          }, {
            languageCode: "es",
            languageName: {
              simpleText: "Español - 西班牙语"
            }
          }, {
            languageCode: "fy",
            languageName: {
              simpleText: "Frysk - 西弗里西亚语"
            }
          }, {
            languageCode: "iw",
            languageName: {
              simpleText: "עברית - 希伯来语"
            }
          }, {
            languageCode: "el",
            languageName: {
              simpleText: "Ελληνικά - 希腊语"
            }
          }, {
            languageCode: "haw",
            languageName: {
              simpleText: "ʻŌlelo Hawaiʻi - 夏威夷语"
            }
          }, {
            languageCode: "sd",
            languageName: {
              simpleText: "سنڌي - 信德语"
            }
          }, {
            languageCode: "hu",
            languageName: {
              simpleText: "magyar - 匈牙利语"
            }
          }, {
            languageCode: "su",
            languageName: {
              simpleText: "Basa Sunda - 巽他语"
            }
          }, {
            languageCode: "hy",
            languageName: {
              simpleText: "հայերեն - 亚美尼亚语"
            }
          }, {
            languageCode: "ig",
            languageName: {
              simpleText: "Igbo - 伊博语"
            }
          }, {
            languageCode: "it",
            languageName: {
              simpleText: "Italiano - 意大利语"
            }
          }, {
            languageCode: "yi",
            languageName: {
              simpleText: "ייִדיש - 意第绪语"
            }
          }, {
            languageCode: "hi",
            languageName: {
              simpleText: "हिन्दी - 印地语"
            }
          }, {
            languageCode: "id",
            languageName: {
              simpleText: "Bahasa Indonesia - 印度尼西亚语"
            }
          }, {
            languageCode: "en",
            languageName: {
              simpleText: "English - 英语"
            }
          }, {
            languageCode: "yo",
            languageName: {
              simpleText: "Yorùbá - 约鲁巴语"
            }
          }, {
            languageCode: "vi",
            languageName: {
              simpleText: "Tiếng Việt - 越南语"
            }
          }, {
            languageCode: "jv",
            languageName: {
              simpleText: "Basa Jawa - 爪哇语"
            }
          }, {
            languageCode: "zh-Hant",
            languageName: {
              simpleText: "中文（繁體）- 中文（繁体）"
            }
          }, {
            languageCode: "zh-Hans",
            languageName: {
              simpleText: "中文（简体）"
            }
          }, {
            languageCode: "zu",
            languageName: {
              simpleText: "isiZulu - 祖鲁语"
            }
          }, {
            languageCode: "kri",
            languageName: {
              simpleText: "Krìì - 克里语"
            }
          }],
          MOBILE: [{
            languageCode: "sq",
            languageName: {
              runs: [{
                text: "Shqip - 阿尔巴尼亚语"
              }]
            }
          }, {
            languageCode: "ak",
            languageName: {
              runs: [{
                text: "Ákán - 阿肯语"
              }]
            }
          }, {
            languageCode: "ar",
            languageName: {
              runs: [{
                text: "العربية - 阿拉伯语"
              }]
            }
          }, {
            languageCode: "am",
            languageName: {
              runs: [{
                text: "አማርኛ - 阿姆哈拉语"
              }]
            }
          }, {
            languageCode: "as",
            languageName: {
              runs: [{
                text: "অসমীয়া - 阿萨姆语"
              }]
            }
          }, {
            languageCode: "az",
            languageName: {
              runs: [{
                text: "Azərbaycanca - 阿塞拜疆语"
              }]
            }
          }, {
            languageCode: "ee",
            languageName: {
              runs: [{
                text: "Eʋegbe - 埃维语"
              }]
            }
          }, {
            languageCode: "ay",
            languageName: {
              runs: [{
                text: "Aymar - 艾马拉语"
              }]
            }
          }, {
            languageCode: "ga",
            languageName: {
              runs: [{
                text: "Gaeilge - 爱尔兰语"
              }]
            }
          }, {
            languageCode: "et",
            languageName: {
              runs: [{
                text: "Eesti - 爱沙尼亚语"
              }]
            }
          }, {
            languageCode: "or",
            languageName: {
              runs: [{
                text: "ଓଡ଼ିଆ - 奥里亚语"
              }]
            }
          }, {
            languageCode: "om",
            languageName: {
              runs: [{
                text: "Oromoo - 奥罗莫语"
              }]
            }
          }, {
            languageCode: "eu",
            languageName: {
              runs: [{
                text: "Euskara - 巴斯克语"
              }]
            }
          }, {
            languageCode: "be",
            languageName: {
              runs: [{
                text: "Беларуская - 白俄罗斯语"
              }]
            }
          }, {
            languageCode: "bg",
            languageName: {
              runs: [{
                text: "Български - 保加利亚语"
              }]
            }
          }, {
            languageCode: "nso",
            languageName: {
              runs: [{
                text: "Sesotho sa Leboa - 北索托语"
              }]
            }
          }, {
            languageCode: "is",
            languageName: {
              runs: [{
                text: "Íslenska - 冰岛语"
              }]
            }
          }, {
            languageCode: "pl",
            languageName: {
              runs: [{
                text: "Polski - 波兰语"
              }]
            }
          }, {
            languageCode: "bs",
            languageName: {
              runs: [{
                text: "Bosanski - 波斯尼亚语"
              }]
            }
          }, {
            languageCode: "fa",
            languageName: {
              runs: [{
                text: "فارسی - 波斯语"
              }]
            }
          }, {
            languageCode: "bho",
            languageName: {
              runs: [{
                text: "भोजपुरी - 博杰普尔语"
              }]
            }
          }, {
            languageCode: "ts",
            languageName: {
              runs: [{
                text: "Xitsonga - 聪加语"
              }]
            }
          }, {
            languageCode: "tt",
            languageName: {
              runs: [{
                text: "Татарча - 鞑靼语"
              }]
            }
          }, {
            languageCode: "da",
            languageName: {
              runs: [{
                text: "Dansk - 丹麦语"
              }]
            }
          }, {
            languageCode: "de",
            languageName: {
              runs: [{
                text: "Deutsch - 德语"
              }]
            }
          }, {
            languageCode: "dv",
            languageName: {
              runs: [{
                text: "ދިވެހިބަސް - 迪维希语"
              }]
            }
          }, {
            languageCode: "ru",
            languageName: {
              runs: [{
                text: "Русский - 俄语"
              }]
            }
          }, {
            languageCode: "fr",
            languageName: {
              runs: [{
                text: "Français - 法语"
              }]
            }
          }, {
            languageCode: "sa",
            languageName: {
              runs: [{
                text: "संस्कृतम् - 梵语"
              }]
            }
          }, {
            languageCode: "fil",
            languageName: {
              runs: [{
                text: "Filipino - 菲律宾语"
              }]
            }
          }, {
            languageCode: "fi",
            languageName: {
              runs: [{
                text: "Suomi - 芬兰语"
              }]
            }
          }, {
            languageCode: "km",
            languageName: {
              runs: [{
                text: "ភាសាខ្មែរ - 高棉语"
              }]
            }
          }, {
            languageCode: "ka",
            languageName: {
              runs: [{
                text: "ქართული - 格鲁吉亚语"
              }]
            }
          }, {
            languageCode: "gu",
            languageName: {
              runs: [{
                text: "ગુજરાતી - 古吉拉特语"
              }]
            }
          }, {
            languageCode: "gn",
            languageName: {
              runs: [{
                text: "Avañe'ẽ - 瓜拉尼语"
              }]
            }
          }, {
            languageCode: "kk",
            languageName: {
              runs: [{
                text: "Қазақ тілі - 哈萨克语"
              }]
            }
          }, {
            languageCode: "ht",
            languageName: {
              runs: [{
                text: "海地克里奥尔语"
              }]
            }
          }, {
            languageCode: "ko",
            languageName: {
              runs: [{
                text: "한국말 - 韩语"
              }]
            }
          }, {
            languageCode: "ha",
            languageName: {
              runs: [{
                text: "هَوُسَ - 豪萨语"
              }]
            }
          }, {
            languageCode: "nl",
            languageName: {
              runs: [{
                text: "Nederlands - 荷兰语"
              }]
            }
          }, {
            languageCode: "gl",
            languageName: {
              runs: [{
                text: "Galego - 加利西亚语"
              }]
            }
          }, {
            languageCode: "ca",
            languageName: {
              runs: [{
                text: "Català - 加泰罗尼亚语"
              }]
            }
          }, {
            languageCode: "cs",
            languageName: {
              runs: [{
                text: "Čeština - 捷克语"
              }]
            }
          }, {
            languageCode: "kn",
            languageName: {
              runs: [{
                text: "ಕನ್ನಡ - 卡纳达语"
              }]
            }
          }, {
            languageCode: "ky",
            languageName: {
              runs: [{
                text: "Кыргызча - 吉尔吉斯语"
              }]
            }
          }, {
            languageCode: "xh",
            languageName: {
              runs: [{
                text: "isiXhosa - 科萨语"
              }]
            }
          }, {
            languageCode: "co",
            languageName: {
              runs: [{
                text: "Corsu - 科西嘉语"
              }]
            }
          }, {
            languageCode: "hr",
            languageName: {
              runs: [{
                text: "Hrvatski - 克罗地亚语"
              }]
            }
          }, {
            languageCode: "qu",
            languageName: {
              runs: [{
                text: "Runa Simi - 克丘亚语"
              }]
            }
          }, {
            languageCode: "ku",
            languageName: {
              runs: [{
                text: "Kurdî - 库尔德语"
              }]
            }
          }, {
            languageCode: "la",
            languageName: {
              runs: [{
                text: "lingua latīna - 拉丁语"
              }]
            }
          }, {
            languageCode: "lv",
            languageName: {
              runs: [{
                text: "Latviešu - 拉脱维亚语"
              }]
            }
          }, {
            languageCode: "lo",
            languageName: {
              runs: [{
                text: "ລາວ - 老挝语"
              }]
            }
          }, {
            languageCode: "lt",
            languageName: {
              runs: [{
                text: "Lietuvių - 立陶宛语"
              }]
            }
          }, {
            languageCode: "ln",
            languageName: {
              runs: [{
                text: "Lingála - 林加拉语"
              }]
            }
          }, {
            languageCode: "lg",
            languageName: {
              runs: [{
                text: "Luganda - 卢干达语"
              }]
            }
          }, {
            languageCode: "lb",
            languageName: {
              runs: [{
                text: "Lëtzebuergesch - 卢森堡语"
              }]
            }
          }, {
            languageCode: "rw",
            languageName: {
              runs: [{
                text: "Kinyarwanda - 卢旺达语"
              }]
            }
          }, {
            languageCode: "ro",
            languageName: {
              runs: [{
                text: "Română - 罗马尼亚语"
              }]
            }
          }, {
            languageCode: "mt",
            languageName: {
              runs: [{
                text: "Malti - 马耳他语"
              }]
            }
          }, {
            languageCode: "mr",
            languageName: {
              runs: [{
                text: "मराठी - 马拉地语"
              }]
            }
          }, {
            languageCode: "mg",
            languageName: {
              runs: [{
                text: "Malagasy - 马拉加斯语"
              }]
            }
          }, {
            languageCode: "ml",
            languageName: {
              runs: [{
                text: "മലയാളം - 马拉雅拉姆语"
              }]
            }
          }, {
            languageCode: "ms",
            languageName: {
              runs: [{
                text: "Bahasa Melayu - 马来语"
              }]
            }
          }, {
            languageCode: "mk",
            languageName: {
              runs: [{
                text: "македонски - 马其顿语"
              }]
            }
          }, {
            languageCode: "mi",
            languageName: {
              runs: [{
                text: "Māori - 毛利语"
              }]
            }
          }, {
            languageCode: "mn",
            languageName: {
              runs: [{
                text: "Монгол - 蒙古语"
              }]
            }
          }, {
            languageCode: "bn",
            languageName: {
              runs: [{
                text: "বাংলা - 孟加拉语"
              }]
            }
          }, {
            languageCode: "my",
            languageName: {
              runs: [{
                text: "ဗမာစာ - 缅甸语"
              }]
            }
          }, {
            languageCode: "hmn",
            languageName: {
              runs: [{
                text: "Hmoob - 苗语"
              }]
            }
          }, {
            languageCode: "af",
            languageName: {
              runs: [{
                text: "Afrikaans - 南非荷兰语"
              }]
            }
          }, {
            languageCode: "st",
            languageName: {
              runs: [{
                text: "Sesotho - 南索托语"
              }]
            }
          }, {
            languageCode: "ne",
            languageName: {
              runs: [{
                text: "नेपाली - 尼泊尔语"
              }]
            }
          }, {
            languageCode: "no",
            languageName: {
              runs: [{
                text: "Norsk - 挪威语"
              }]
            }
          }, {
            languageCode: "pa",
            languageName: {
              runs: [{
                text: "ਪੰਜਾਬੀ - 旁遮普语"
              }]
            }
          }, {
            languageCode: "pt",
            languageName: {
              runs: [{
                text: "Português - 葡萄牙语"
              }]
            }
          }, {
            languageCode: "ps",
            languageName: {
              runs: [{
                text: "پښتو - 普什图语"
              }]
            }
          }, {
            languageCode: "ny",
            languageName: {
              runs: [{
                text: "chiCheŵa - 齐切瓦语"
              }]
            }
          }, {
            languageCode: "ja",
            languageName: {
              runs: [{
                text: "日本語 - 日语"
              }]
            }
          }, {
            languageCode: "sv",
            languageName: {
              runs: [{
                text: "Svenska - 瑞典语"
              }]
            }
          }, {
            languageCode: "sm",
            languageName: {
              runs: [{
                text: "Gagana Samoa - 萨摩亚语"
              }]
            }
          }, {
            languageCode: "sr",
            languageName: {
              runs: [{
                text: "Српски језик - 塞尔维亚语"
              }]
            }
          }, {
            languageCode: "si",
            languageName: {
              runs: [{
                text: "සිංහල - 僧伽罗语"
              }]
            }
          }, {
            languageCode: "sn",
            languageName: {
              runs: [{
                text: "ChiShona - 绍纳语"
              }]
            }
          }, {
            languageCode: "eo",
            languageName: {
              runs: [{
                text: "Esperanto - 世界语"
              }]
            }
          }, {
            languageCode: "sk",
            languageName: {
              runs: [{
                text: "Slovenčina - 斯洛伐克语"
              }]
            }
          }, {
            languageCode: "sl",
            languageName: {
              runs: [{
                text: "Slovenščina - 斯洛文尼亚语"
              }]
            }
          }, {
            languageCode: "sw",
            languageName: {
              runs: [{
                text: "Kiswahili - 斯瓦希里语"
              }]
            }
          }, {
            languageCode: "gd",
            languageName: {
              runs: [{
                text: "Gàidhlig - 苏格兰盖尔语"
              }]
            }
          }, {
            languageCode: "ceb",
            languageName: {
              runs: [{
                text: "Cebuano - 宿务语"
              }]
            }
          }, {
            languageCode: "so",
            languageName: {
              runs: [{
                text: "Soomaaliga - 索马里语"
              }]
            }
          }, {
            languageCode: "tg",
            languageName: {
              runs: [{
                text: "тоҷикӣ - 塔吉克语"
              }]
            }
          }, {
            languageCode: "te",
            languageName: {
              runs: [{
                text: "తెలుగు - 泰卢固语"
              }]
            }
          }, {
            languageCode: "ta",
            languageName: {
              runs: [{
                text: "தமிழ் - 泰米尔语"
              }]
            }
          }, {
            languageCode: "th",
            languageName: {
              runs: [{
                text: "ไทย - 泰语"
              }]
            }
          }, {
            languageCode: "ti",
            languageName: {
              runs: [{
                text: "ትግርኛ - 提格利尼亚语"
              }]
            }
          }, {
            languageCode: "tr",
            languageName: {
              runs: [{
                text: "Türkçe - 土耳其语"
              }]
            }
          }, {
            languageCode: "tk",
            languageName: {
              runs: [{
                text: "Türkmen - 土库曼语"
              }]
            }
          }, {
            languageCode: "cy",
            languageName: {
              runs: [{
                text: "Cymraeg - 威尔士语"
              }]
            }
          }, {
            languageCode: "ug",
            languageName: {
              runs: [{
                text: "ئۇيغۇرچە - 维吾尔语"
              }]
            }
          }, {
            languageCode: "und",
            languageName: {
              runs: [{
                text: "Unknown - 未知语言"
              }]
            }
          }, {
            languageCode: "ur",
            languageName: {
              runs: [{
                text: "اردو - 乌尔都语"
              }]
            }
          }, {
            languageCode: "uk",
            languageName: {
              runs: [{
                text: "Українська - 乌克兰语"
              }]
            }
          }, {
            languageCode: "uz",
            languageName: {
              runs: [{
                text: "O‘zbek - 乌兹别克语"
              }]
            }
          }, {
            languageCode: "es",
            languageName: {
              runs: [{
                text: "Español - 西班牙语"
              }]
            }
          }, {
            languageCode: "fy",
            languageName: {
              runs: [{
                text: "Frysk - 西弗里西亚语"
              }]
            }
          }, {
            languageCode: "iw",
            languageName: {
              runs: [{
                text: "עברית - 希伯来语"
              }]
            }
          }, {
            languageCode: "el",
            languageName: {
              runs: [{
                text: "Ελληνικά - 希腊语"
              }]
            }
          }, {
            languageCode: "haw",
            languageName: {
              runs: [{
                text: "ʻŌlelo Hawaiʻi - 夏威夷语"
              }]
            }
          }, {
            languageCode: "sd",
            languageName: {
              runs: [{
                text: "سنڌي - 信德语"
              }]
            }
          }, {
            languageCode: "hu",
            languageName: {
              runs: [{
                text: "Magyar - 匈牙利语"
              }]
            }
          }, {
            languageCode: "su",
            languageName: {
              runs: [{
                text: "Basa Sunda - 巽他语"
              }]
            }
          }, {
            languageCode: "hy",
            languageName: {
              runs: [{
                text: "Հայերեն - 亚美尼亚语"
              }]
            }
          }, {
            languageCode: "ig",
            languageName: {
              runs: [{
                text: "Igbo - 伊博语"
              }]
            }
          }, {
            languageCode: "it",
            languageName: {
              runs: [{
                text: "Italiano - 意大利语"
              }]
            }
          }, {
            languageCode: "yi",
            languageName: {
              runs: [{
                text: "ייִדיש - 意第绪语"
              }]
            }
          }, {
            languageCode: "hi",
            languageName: {
              runs: [{
                text: "हिन्दी - 印地语"
              }]
            }
          }, {
            languageCode: "id",
            languageName: {
              runs: [{
                text: "Bahasa Indonesia - 印度尼西亚语"
              }]
            }
          }, {
            languageCode: "en",
            languageName: {
              runs: [{
                text: "English - 英语"
              }]
            }
          }, {
            languageCode: "yo",
            languageName: {
              runs: [{
                text: "Yorùbá - 约鲁巴语"
              }]
            }
          }, {
            languageCode: "vi",
            languageName: {
              runs: [{
                text: "Tiếng Việt - 越南语"
              }]
            }
          }, {
            languageCode: "jv",
            languageName: {
              runs: [{
                text: "Basa Jawa - 爪哇语"
              }]
            }
          }, {
            languageCode: "zh-Hant",
            languageName: {
              runs: [{
                text: "中文（繁體） - 中文（繁体）"
              }]
            }
          }, {
            languageCode: "zh-Hans",
            languageName: {
              runs: [{
                text: "中文（简体）"
              }]
            }
          }, {
            languageCode: "zu",
            languageName: {
              runs: [{
                text: "isiZulu - 祖鲁语"
              }]
            }
          }, {
            languageCode: "kri",
            languageName: {
              runs: [{
                text: "Krìì - 克里语"
              }]
            }
          }]
        }
      }
    },
    Netflix: {
      Settings: {
        Type: "Translate",
        Languages: ["AUTO", "ZH"]
      },
      Configs: {
        Languages: {
          AR: "ar",
          CS: "cs",
          DA: "da",
          DE: "de",
          EN: "en",
          "EN-GB": "en-GB",
          "EN-US": "en-US",
          "EN-US SDH": "en-US SDH",
          ES: "es",
          "ES-419": "es-419",
          "ES-ES": "es-ES",
          FI: "fi",
          FR: "fr",
          HE: "he",
          HR: "hr",
          HU: "hu",
          ID: "id",
          IT: "it",
          JA: "ja",
          KO: "ko",
          MS: "ms",
          NB: "nb",
          NL: "nl",
          PL: "pl",
          PT: "pt",
          "PT-PT": "pt-PT",
          "PT-BR": "pt-BR",
          RO: "ro",
          RU: "ru",
          SV: "sv",
          TH: "th",
          TR: "tr",
          UK: "uk",
          VI: "vi",
          IS: "is",
          ZH: "zh",
          "ZH-HANS": "zh-Hans",
          "ZH-HK": "zh-HK",
          "ZH-HANT": "zh-Hant"
        }
      }
    },
    Spotify: {
      Settings: {
        Types: ["Translate", "External"],
        Languages: ["AUTO", "ZH"]
      }
    },
    Composite: {
      Settings: {
        CacheSize: 20,
        ShowOnly: false,
        Position: "Reverse",
        Offset: 0,
        Tolerance: 1000
      }
    },
    Translate: {
      Settings: {
        Vendor: "Google",
        ShowOnly: false,
        Position: "Forward",
        CacheSize: 10,
        Method: "Part",
        Times: 3,
        Interval: 500,
        Exponential: true
      }
    },
    External: {
      Settings: {
        SubVendor: "URL",
        LrcVendor: "NeteaseMusic",
        CacheSize: 50
      }
    },
    API: {
      Settings: {
        GoogleCloud: {
          Version: "v2",
          Mode: "Key",
          Auth: ""
        },
        Microsoft: {
          Version: "Azure",
          Mode: "Token",
          Region: "",
          Auth: ""
        },
        DeepL: {
          Version: "Free",
          Auth: ""
        },
        DeepLX: {
          Endpoint: "",
          Auth: ""
        },
        URL: "",
        NeteaseMusic: {
          PhoneNumber: "",
          Password: ""
        }
      }
    },
    Default: {
      Settings: {
        Type: "Translate",
        Types: ["Official", "Translate"],
        Languages: ["EN", "ZH"],
        CacheSize: 50,
        LogLevel: "WARN"
      },
      Configs: {
        breakLine: {
          "text/xml": "&#x000A;",
          "application/xml": "&#x000A;",
          "text/vtt": "\n",
          "application/vtt": "\n",
          "text/json": "\n",
          "application/json": "\n"
        }
      }
    }
  };
  class C9 {
    constructor(p146 = {}) {
      this.Name = "Composite";
      this.Version = "1.0.2";
      this.Offset = 0;
      this.Tolerance = 0;
      this.Position = "Forward";
      Object.assign(this, p146);
      C2.log(`🟧 ${this.Name} v${this.Version}`);
    }
    JSON(p147 = {}, p148 = {}, p149 = "captions", p150 = this.Offset, p151 = this.Tolerance, p152 = this.Position) {
      C2.log("☑️ Composite JSON Subtitles", `Offset:${p150}`, `Tolerance:${p151}`, `Position:${p152}`);
      let vLN05 = 0;
      let vLN06 = 0;
      let vLN07 = 0;
      let v93 = p147?.events?.length;
      let v94 = p148?.events?.length;
      for (p149 === "asr" && (C2.info("DualSub是自动生成字幕"), vLN05 = 1, vLN06 = 1, vLN07 = 1, p147.events = p147.events.map(p153 => {
        if (p153?.segs && Array.isArray(p153?.segs)) {
          p153.segs = [{
            utf8: p153.segs.map(p154 => p154.utf8).join("")
          }];
        }
        delete p153.wWinId;
        return p153;
      }), p148.events = p148.events.map(p155 => {
        if (p155?.segs && Array.isArray(p155?.segs)) {
          p155.segs = [{
            utf8: p155.segs.map(p156 => p156.utf8).join("")
          }];
        }
        delete p155.wWinId;
        return p155;
      })); vLN06 < v93 && vLN07 < v94;) {
        let v95 = p147.events[vLN06].tStartMs;
        let v96 = p148.events[vLN07].tStartMs;
        let v97 = p147.events[vLN06 + 1]?.tStartMs ?? v95;
        let v98 = p148.events[vLN07 + 1]?.tStartMs ?? v96;
        if (Math.abs(v95 - v96) <= p151) {
          vLN05 = vLN06;
          let v99 = p147.events[vLN06]?.segs?.[0].utf8 ?? "";
          let v100 = p148.events[vLN07]?.segs?.[0].utf8 ?? "";
          p147.events[vLN05].segs = [{
            utf8: (p152 === "Reverse" ? `${v100}
${v99}` : `${v99}
${v100}`).trim()
          }];
        }
        if (Math.abs(v97 - v98) <= p151) {
          vLN06++;
          vLN07++;
        } else if (v96 > v95) {
          vLN06++;
        } else {
          if (!(v95 > v96)) {
            vLN06++;
          }
          vLN07++;
        }
      }
      C2.log("✅ Composite JSON Subtitles");
      return p147;
    }
    timedText(p157 = {}, p158 = {}, p159 = "captions", p160 = this.Offset, p161 = this.Tolerance, p162 = this.Position) {
      C2.log("☑️ Composite timedText Subtitles", `Offset: ${p160}`, `Tolerance: ${p161}`, `Position: ${p162}`);
      let vLN08 = 0;
      let vLN09 = 0;
      let vLN010 = 0;
      let v101 = p157?.timedtext?.body?.p?.length;
      let v102 = p158?.timedtext?.body?.p?.length;
      for (p159 === "asr" && (C2.info("DualSub是自动生成字幕"), p157.timedtext.head.wp[1]["@rc"] = "1", p157.timedtext.body.p = p157.timedtext.body.p.map(p163 => {
        if (p163?.s) {
          if (Array.isArray(p163?.s)) {
            p163["#"] = p163?.s.map(p164 => p164["#"]).join("");
          } else {
            p163["#"] = p163.s?.["#"] ?? "";
          }
          delete p163.s;
        }
        return p163;
      }), p158.timedtext.body.p = p158.timedtext.body.p.map(p165 => {
        if (p165?.s) {
          if (Array.isArray(p165?.s)) {
            p165["#"] = p165?.s.map(p166 => p166["#"]).join("");
          } else {
            p165["#"] = p165.s?.["#"] ?? "";
          }
          delete p165.s;
        }
        return p165;
      })); vLN09 < v101 && vLN010 < v102;) {
        let vParseInt = parseInt(p157.timedtext.body.p[vLN09]["@t"], 10);
        let vParseInt2 = parseInt(p158.timedtext.body.p[vLN010]["@t"], 10);
        let vParseInt3 = parseInt(p157.timedtext.body.p[vLN09 + 1]?.["@t"] ?? vParseInt, 10);
        let vParseInt4 = parseInt(p158.timedtext.body.p[vLN010 + 1]?.["@t"] ?? vParseInt2, 10);
        if (Math.abs(vParseInt - vParseInt2) <= p161) {
          vLN08 = vLN09;
          let v103 = p157.timedtext.body.p[vLN09]?.["#"] ?? "";
          let v104 = p158.timedtext.body.p[vLN010]?.["#"] ?? "";
          p157.timedtext.body.p[vLN08]["#"] = (p162 === "Reverse" ? `${v104}&#x000A;${v103}` : `${v103}&#x000A;${v104}`).trim();
        }
        if (Math.abs(vParseInt3 - vParseInt4) <= p161) {
          vLN09++;
          vLN010++;
        } else if (vParseInt2 > vParseInt) {
          vLN09++;
        } else {
          if (!(vParseInt > vParseInt2)) {
            vLN09++;
          }
          vLN010++;
        }
      }
      C2.log("✅ Composite timedText Subtitles");
      return p157;
    }
    webVTT(p167 = {}, p168 = {}, p169 = this.Offset, p170 = this.Tolerance, p171 = this.Position) {
      C2.log("☑️ Composite webVTT Subtitles", `Offset: ${p169}`, `Tolerance: ${p170}`, `Position: ${p171}`);
      let vLN011 = 0;
      let vLN012 = 0;
      let vLN013 = 0;
      let v105 = p167?.body?.length;
      let v106 = p168?.body?.length;
      while (vLN012 < v105 && vLN013 < v106) {
        let v107 = p167.body[vLN012].timeStamp;
        let v108 = p168.body[vLN013].timeStamp;
        let v109 = p167.body[vLN012 + 1]?.timeStamp ?? v107;
        let v110 = p168.body[vLN013 + 1]?.timeStamp ?? v108;
        let v111 = p167.body[vLN012]?.text ?? "";
        let v112 = p168.body[vLN013]?.text ?? "";
        if (Math.abs(v107 - v108) <= p170) {
          vLN011 = vLN012;
          p167.body[vLN011].text = (p171 === "Reverse" ? `${v112}
${v111}` : `${v111}
${v112}`).trim();
        }
        if (Math.abs(v109 - v110) <= p170) {
          vLN012++;
          vLN013++;
        } else if (v108 > v107) {
          vLN012++;
        } else {
          if (!(v107 > v108)) {
            vLN012++;
          }
          vLN013++;
        }
      }
      C2.log("✅ Composite webVTT Subtitles");
      return p167;
    }
    spotifyLyric(p172 = [], p173 = [], p174 = this.Offset, p175 = this.Tolerance, p176 = this.Position) {
      C2.log("☑️ Composite Spotify Lyrics", `Offset: ${p174}`, `Tolerance: ${p175}`, `Position: ${p176}`);
      let vLN014 = 0;
      let vLN015 = 0;
      let vLN016 = 0;
      let v113 = p172?.length;
      let v114 = p173?.length;
      while (vLN015 < v113 && vLN016 < v114) {
        let v115 = p172[vLN015].startTimeMs;
        let v116 = p173[vLN016].startTimeMs + p174;
        let v117 = p172[vLN015 + 1]?.startTimeMs ?? v115;
        let v118 = p173[vLN016 + 1]?.startTimeMs + this.Offset ?? v116;
        let v119 = p172[vLN015]?.words ?? "";
        let v120 = p173[vLN016]?.words ?? "";
        if (Math.abs(v115 - v116) <= p175) {
          p172[vLN014 = vLN015].words = (p176 === "Reverse" ? `${v120}
${v119}` : `${v119}
${v120}`).trim();
          p172[vLN014].owords = v119.trim();
          p172[vLN014].twords = v120.trim();
        }
        if (Math.abs(v117 - v118) <= p175) {
          vLN015++;
          vLN016++;
        } else if (v116 > v115) {
          vLN015++;
        } else {
          if (!(v115 > v116)) {
            vLN015++;
          }
          vLN016++;
        }
      }
      C2.log("✅ Composite Spotify Lyrics");
      return p172;
    }
  }
  let v121 = new C6($request.url);
  C2.info(`url: ${v121.toJSON()}`);
  let v122 = v121.pathname.split("/").filter(Boolean);
  C2.info(`PATHs: ${v122}`);
  let v123 = ($response.headers?.["Content-Type"] ?? $response.headers?.["content-type"])?.split(";")?.[0];
  if (v123 === "application/octet-stream" || v123 === "text/plain") {
    v123 = function (p177, p178, p179) {
      C2.log("☑️ detectFormat", `format: ${p177.format || p177.searchParams.get("fmt") || p177.searchParams.get("format")}`);
      switch (p177.format || p177.searchParams.get("fmt") || p177.searchParams.get("format")) {
        case "txt":
          p179 = "text/plain";
          break;
        case "xml":
        case "srv3":
        case "ttml":
        case "ttml2":
        case "imsc":
          p179 = "text/xml";
          break;
        case "vtt":
        case "webvtt":
          p179 = "text/vtt";
          break;
        case "json":
        case "json3":
          p179 = "application/json";
          break;
        case "m3u":
        case "m3u8":
          p179 = "application/x-mpegurl";
          break;
        case "plist":
          p179 = "application/plist";
          break;
        case undefined:
          let v124 = p178?.substring?.(0, 6).trim?.();
          switch (v124) {
            case "<?xml":
              p179 = "text/xml";
              break;
            case "WEBVTT":
              p179 = "text/vtt";
              break;
            default:
              switch (v124?.substring?.(0, 1)) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  p179 = "text/vtt";
                  break;
                case "{":
                  p179 = "application/json";
              }
              break;
            case undefined:
              p179 = undefined;
          }
      }
      C2.log("✅ detectFormat", `format: ${p179}`);
      return p179;
    }(v121, $response?.body, v123);
  }
  C2.info(`FORMAT: ${v123}`);
  (async () => {
    let vF2 = function (p180) {
      C2.log("☑️ Detect Platform");
      let vLSUniversal = "Universal";
      switch (true) {
        case /\.(netflix\.com|nflxvideo\.net)/i.test(p180):
          vLSUniversal = "Netflix";
          break;
        case /(\.youtube|youtubei\.googleapis)\.com/i.test(p180):
          vLSUniversal = "YouTube";
          break;
        case /\.spotify(cdn)?\.com/i.test(p180):
          vLSUniversal = "Spotify";
          break;
        case /\.apple\.com/i.test(p180):
          vLSUniversal = "Apple";
          break;
        case /\.(dssott|starott|dssedge)\.com/i.test(p180):
          vLSUniversal = "Disney+";
          break;
        case /primevideo\.com|(\.(pv-cdn|aiv-cdn|akamaihd|cloudfront)\.net)|s3\.amazonaws\.com\/aiv-prod-timedtext\//i.test(p180):
          vLSUniversal = "PrimeVideo";
          break;
        case /pro?d\.media\.(h264\.io|max\.com)/i.test(p180):
          vLSUniversal = "Max";
          break;
        case /\.(api\.hbo|hbomaxcdn)\.com/i.test(p180):
          vLSUniversal = "HBOMax";
          break;
        case /\.hulu(stream|im)?\.com/i.test(p180):
          vLSUniversal = "Hulu";
          break;
        case /\.(pplus\.paramount\.tech|cbs(aavideo|cbsivideo)?\.com)/i.test(p180):
          vLSUniversal = "Paramount+";
          break;
        case /\.uplynk\.com/i.test(p180):
          vLSUniversal = "Discovery+";
          break;
        case /dplus-ph-/i.test(p180):
          vLSUniversal = "Discovery+Ph";
          break;
        case /\.peacocktv\.com/i.test(p180):
          vLSUniversal = "PeacockTV";
          break;
        case /\.fubo\.tv/i.test(p180):
          vLSUniversal = "FuboTV";
          break;
        case /\.viki\.io/i.test(p180):
          vLSUniversal = "Viki";
          break;
        case /epix(hls\.akamaized\.net|\.services\.io)/i.test(p180):
          vLSUniversal = "MGM+";
          break;
        case /\.nebula\.app/i.test(p180):
          vLSUniversal = "Nebula";
          break;
        case /\.pluto(\.tv|tv\.net)/i.test(p180):
          vLSUniversal = "PlutoTV";
          break;
        case /\.mubicdn\.net/i.test(p180):
          vLSUniversal = "MUBI";
      }
      C2.log("✅ Detect Platform", `Platform: ${vLSUniversal}`);
      return vLSUniversal;
    }($request.url);
    C2.info(`PLATFORM: ${vF2}`);
    let {
      Settings: s,
      Caches: _i2,
      Configs: o
    } = function (p181, p182, p183) {
      C2.log("☑️ Set Environment Variables");
      let {
        Settings: i,
        Caches: o,
        Configs: g
      } = function (p184, p185, p186) {
        p185 = [p185].flat(Infinity);
        let vO9 = {
          Settings: p186?.Default?.Settings || {},
          Configs: p186?.Default?.Configs || {},
          Caches: {}
        };
        p185.forEach(p187 => {
          vO9.Settings = {
            ...vO9.Settings,
            ...p186?.[p187]?.Settings
          };
          vO9.Configs = {
            ...vO9.Configs,
            ...p186?.[p187]?.Configs
          };
        });
        switch (typeof $argument) {
          case "string":
            $argument = Object.fromEntries($argument.split("&").map(p188 => p188.split("=", 2).map(p189 => p189.replace(/\"/g, ""))));
          case "object":
            {
              let vO10 = {};
              Object.keys($argument).forEach(p190 => C3.set(vO10, p190, $argument[p190]));
              vO9.Settings = {
                ...vO9.Settings,
                ...vO10
              };
            }
        }
        let v125 = C4.getItem(p184);
        if (v125) {
          p185.forEach(p191 => {
            switch (typeof v125?.[p191]?.Settings) {
              case "string":
                v125[p191].Settings = JSON.parse(v125[p191].Settings || "{}");
              case "object":
                vO9.Settings = {
                  ...vO9.Settings,
                  ...v125[p191].Settings
                };
            }
            switch (typeof v125?.[p191]?.Caches) {
              case "string":
                v125[p191].Caches = JSON.parse(v125[p191].Caches || "{}");
              case "object":
                vO9.Caches = {
                  ...vO9.Caches,
                  ...v125[p191].Caches
                };
            }
          });
        }
        (function f11(p192, p193) {
          for (let v126 in p192) {
            let v127 = p192[v126];
            p192[v126] = typeof v127 == "object" && v127 !== null ? f11(v127, p193) : p193(v126, v127);
          }
          return p192;
        })(vO9.Settings, (p194, p195) => {
          if (p195 === "true" || p195 === "false") {
            p195 = JSON.parse(p195);
          } else if (typeof p195 == "string") {
            p195 = p195.includes(",") ? p195.split(",").map(p196 => f3(p196)) : f3(p195);
          }
          return p195;
        });
        return vO9;
      }(p181, p182, p183);
      if (!Array.isArray(_i2?.Types)) {
        i.Types = i.Types ? [i.Types] : [];
      }
      C2.info(`typeof Settings: ${typeof i}`, `Settings: ${JSON.stringify(i, null, 2)}`);
      if (typeof o?.Playlists != "object" || Array.isArray(o?.Playlists)) {
        o.Playlists = {};
      }
      o.Playlists.Master = new Map(JSON.parse(o?.Playlists?.Master || "[]"));
      o.Playlists.Subtitle = new Map(JSON.parse(o?.Playlists?.Subtitle || "[]"));
      if (typeof o?.Subtitles != "object") {
        o.Subtitles = new Map(JSON.parse(o?.Subtitles || "[]"));
      }
      if (typeof o?.Metadatas != "object" || Array.isArray(o?.Metadatas)) {
        o.Metadatas = {};
      }
      if (typeof o?.Metadatas?.Tracks != "object") {
        o.Metadatas.Tracks = new Map(JSON.parse(o?.Metadatas?.Tracks || "[]"));
      }
      C2.log("✅ Set Environment Variables");
      return {
        Settings: i,
        Caches: o,
        Configs: g
      };
    }("DualSubs", [["YouTube", "Netflix", "BiliBili", "Spotify"].includes(vF2) ? vF2 : "Universal", "Composite", "API"], vO8);
    C2.logLevel = s.LogLevel;
    let v128 = v121.searchParams?.get("subtype") ?? s.Type;
    let vA4 = [v121.searchParams?.get("lang")?.toUpperCase?.() ?? s.Languages[0], (v121.searchParams?.get("tlang") ?? _i2?.tlang)?.toUpperCase?.() ?? s.Languages[1]];
    C2.info(`Type: ${v128}`, `Languages: ${vA4}`);
    let vO11 = {};
    let vA5 = [];
    switch (v128) {
      case "Official":
        C2.info("官方字幕");
        switch (vF2) {
          default:
            {
              var v129;
              var v130;
              var v131;
              var v132;
              var v133;
              var v134;
              var v135;
              var v136;
              var v137;
              var v138;
              var v139;
              let v140;
              let v141;
              let v142;
              let v143;
              let v144;
              let v145;
              let v146;
              let v147;
              let v148;
              let v149;
              let v150;
              v129 = $request.url;
              v130 = _i2.Playlists.Subtitle;
              v131 = 0;
              C2.log("☑️ getSubtitlesCache");
              v140 = "";
              v141 = [];
              v142 = 0;
              v130?.forEach((p197, p198) => {
                if (Array.isArray(p197) && p197?.some((p199, p200) => !!v129.includes(p199 || null) && (v142 = p200, C2.debug(`subtitlesIndex: ${v142}`), true))) {
                  v140 = p198;
                  v141 = p197;
                }
              });
              C2.log("✅ getSubtitlesCache", `subtitlesPlaylistURL: ${v140}`);
              let {
                subtitlesPlaylistURL: h
              } = {
                subtitlesPlaylistURL: v140,
                subtitles: v141,
                subtitlesIndex: v142
              };
              v132 = h;
              v133 = _i2.Playlists.Master;
              v134 = vA4;
              C2.log("☑️ getPlaylistCache");
              v143 = "";
              v144 = {};
              v145 = 0;
              v133?.forEach((p201, p202) => {
                v134?.forEach(p203 => {
                  if (Array.isArray(p201?.[p203])) {
                    let v151 = p201?.[p203];
                    if (v151?.some((p204, p205) => !!v132.includes(p204?.URI || p204?.OPTION?.URI || null) && (v145 = p205, C2.debug(`subtitlesPlaylistIndex: ${v145}`), true))) {
                      v143 = p202;
                      v144 = p201;
                    }
                  }
                });
              });
              C2.log("✅ getPlaylistCache", `masterPlaylistURL: ${JSON.stringify(v143)}`);
              let {
                masterPlaylistURL: f,
                subtitlesPlaylistIndex: y
              } = {
                masterPlaylistURL: v143,
                subtitlesPlaylist: v144,
                subtitlesPlaylistIndex: v145
              };
              v135 = f;
              v136 = y;
              v137 = _i2.Playlists.Master;
              v138 = _i2.Playlists.Subtitle;
              v139 = vA4;
              C2.log("☑️ getSubtitlesArray");
              v146 = v137?.get(v135) || {};
              v147 = v146?.[v139[0]]?.[v136]?.URL || v146?.[v139[0]]?.[0]?.URL;
              v148 = v146?.[v139[1]]?.[v136]?.URL || v146?.[v139[1]]?.[0]?.URL;
              C2.debug(`subtitlesPlaylistURL0: ${v147}, subtitlesPlaylistURL1: ${v148}`);
              v149 = v138.get(v147) || [];
              v150 = v138.get(v148) || [];
              C2.log("✅ getSubtitlesArray");
              let {
                subtitlesURIArray0: O,
                subtitlesURIArray1: L
              } = {
                subtitlesURIArray0: v149,
                subtitlesURIArray1: v150
              };
              if (L.length) {
                C2.debug(`subtitlesURIArray1.length: ${L.length}`);
                let v152 = v122?.[v122?.length - 1] ?? function (p206, p207) {
                  let v153;
                  C2.log("☑️ Get Subtitles FileName", `url: ${p206}`);
                  switch (p207) {
                    case "Apple":
                      v153 = request.url.match(/.+_(subtitles(_V\d)?-\d+\.webvtt)\?(.*)subtype=/)[1];
                      break;
                    case "Disney+":
                      v153 = request.url.match(/([^\/]+\.vtt)\?(.*)subtype=/)[1];
                      break;
                    case "Hulu":
                      v153 = request.url.match(/.+_(SEGMENT\d+_.+\.vtt)\?(.*)subtype=/)[1];
                      break;
                    default:
                      v153 = null;
                  }
                  C2.log("✅ Get Subtitles FileName", `fileName: ${v153}`);
                  return v153;
                }($request.url, vF2);
                C2.debug(`fileName: ${v152}`);
                vA5 = function (p208, p209, p210 = [], p211 = []) {
                  C2.log("☑️ Construct Subtitles Queue", `fileName: ${p209}`);
                  let vA6 = [];
                  C2.debug(`VTTs1.length: ${p210.length}`, `VTTs2.length: ${p211.length}`);
                  let v154 = p210.findIndex(p212 => p212?.includes(p209));
                  C2.debug(`Index1: ${v154}`);
                  switch (p211.length) {
                    case 0:
                      C2.info("长度为 0");
                      break;
                    case 1:
                      {
                        log("长度为 1");
                        let vO12 = {
                          url: p211[0],
                          headers: p208.headers
                        };
                        vA6.push(vO12);
                        break;
                      }
                    case p210.length:
                      {
                        C2.info("长度相等");
                        let vO13 = {
                          url: p211[v154],
                          headers: p208.headers
                        };
                        vA6.push(vO13);
                        break;
                      }
                    default:
                      {
                        C2.info("长度不等，需要计算");
                        let v155 = (v154 + 1) / p210.length;
                        C2.debug(`Position1: ${v155}`, `Index2: ${v154}/${p210.length}`);
                        let v156 = Math.round(v155 * p211.length - 1);
                        C2.debug(`Position2: ${v155}`, `Index2: ${v156}/${p211.length}`);
                        let v157 = Math.abs(p211.length - p210.length);
                        let v158 = Math.min(v154, v156);
                        let v159 = Math.max(v154, v156);
                        C2.debug(`diffLength: ${v157}`, `BeginIndex: ${v158}`, `EndIndex: ${v159}`);
                        let v160 = p211.slice(Math.max(0, v158 - v157), Math.max(v159, v159 + v157) + 1);
                        C2.debug(`nearlyVTTs: ${JSON.stringify(v160)}`);
                        v160.forEach(p213 => {
                          let vO14 = {
                            url: p213,
                            headers: p208.headers
                          };
                          vA6.push(vO14);
                        });
                      }
                  }
                  C2.log("✅ Construct Subtitles Queue");
                  return vA6;
                }($request, v152, O, L);
              }
              break;
            }
          case "YouTube":
            C2.info("YouTube");
            if (v121.searchParams.get("tlang") === undefined) {
              C2.info("未选择翻译语言，跳过");
            } else {
              C2.info("已选择翻译语言");
              s.Tolerance = 100;
              s.Position = s.Position === "Reverse" ? "Forward" : "Reverse";
              if (s.ShowOnly === true) {
                C2.info("仅显示翻译后字幕，跳过");
              } else {
                C2.info("生成双语字幕");
                v121.searchParams.set("lang", _i2.Playlists.Subtitle.get(v121.searchParams.get("v")) || v121.searchParams.get("lang"));
                v121.searchParams.delete("tlang");
                let vO15 = {
                  url: v121.toString(),
                  headers: $request.headers
                };
                vA5.push(vO15);
              }
            }
            break;
          case "Netflix":
            C2.info("Netflix");
            break;
          case "Bilibili":
            C2.info("Bilibili");
        }
        break;
      case "Translate":
      default:
        C2.info("翻译字幕");
        break;
      case "External":
        C2.info("外挂字幕");
        if (s.SubVendor === "URL") {
          let vO16 = {
            url: s.URL,
            headers: {
              Accept: "*/*",
              "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1"
            }
          };
          vA5.push(vO16);
        }
    }
    switch (v123) {
      case undefined:
      case "application/x-www-form-urlencoded":
      case "text/plain":
      default:
      case "application/x-mpegURL":
      case "application/x-mpegurl":
      case "application/vnd.apple.mpegurl":
      case "audio/mpegurl":
        break;
      case "text/xml":
      case "text/html":
      case "text/plist":
      case "application/xml":
      case "application/plist":
      case "application/x-plist":
        vO11 = C7.parse($response.body);
        await Promise.all(vA5.map(async p214 => {
          let v161 = await f2(p214).then(p215 => C7.parse(p215.body));
          vO11 = new C9(s).timedText(vO11, v161, v121.searchParams.get("kind"));
        }));
        $response.body = C7.stringify(vO11);
        break;
      case "text/vtt":
      case "application/vtt":
        vO11 = C8.parse($response.body);
        await Promise.all(vA5.map(async p216 => {
          let v162 = await f2(p216).then(p217 => C8.parse(p217.body));
          vO11 = new C9(s).webVTT(vO11, v162);
        }));
        $response.body = C8.stringify(vO11);
        break;
      case "text/json":
      case "application/json":
        vO11 = JSON.parse($response.body ?? "{}");
        await Promise.all(vA5.map(async p218 => {
          let v163 = await f2(p218).then(p219 => JSON.parse(p219.body));
          vO11 = new C9(s).JSON(vO11, v163, v121.searchParams.get("kind"));
        }));
        $response.body = JSON.stringify(vO11);
      case "application/protobuf":
      case "application/x-protobuf":
      case "application/vnd.google.protobuf":
      case "application/grpc":
      case "application/grpc+proto":
      case "application/octet-stream":
    }
  })().catch(p220 => C2.error(p220)).finally(() => function (p221 = {}) {
    switch (vF) {
      case "Surge":
        if (p221.policy) {
          C3.set(p221, "headers.X-Surge-Policy", p221.policy);
        }
        C2.log("🚩 执行结束!", `🕛 ${new Date().getTime() / 1000 - $script.startTime} 秒`);
        $done(p221);
        break;
      case "Loon":
        if (p221.policy) {
          p221.node = p221.policy;
        }
        C2.log("🚩 执行结束!", `🕛 ${(new Date() - $script.startTime) / 1000} 秒`);
        $done(p221);
        break;
      case "Stash":
        if (p221.policy) {
          C3.set(p221, "headers.X-Stash-Selected-Proxy", encodeURI(p221.policy));
        }
        C2.log("🚩 执行结束!", `🕛 ${(new Date() - $script.startTime) / 1000} 秒`);
        $done(p221);
        break;
      case "Egern":
      case "Shadowrocket":
        C2.log("🚩 执行结束!");
        $done(p221);
        break;
      case "Quantumult X":
        if (p221.policy) {
          C3.set(p221, "opts.policy", p221.policy);
        }
        switch (typeof (p221 = C3.pick(p221, ["status", "url", "headers", "body", "bodyBytes"])).status) {
          case "number":
            p221.status = `HTTP/1.1 ${p221.status} ${vO3[p221.status]}`;
            break;
          case "string":
          case "undefined":
            break;
          default:
            throw TypeError(`${Function.name}: 参数类型错误, status 必须为数字或字符串`);
        }
        if (p221.body instanceof ArrayBuffer) {
          p221.bodyBytes = p221.body;
          p221.body = undefined;
        } else if (ArrayBuffer.isView(p221.body)) {
          p221.bodyBytes = p221.body.buffer.slice(p221.body.byteOffset, p221.body.byteLength + p221.body.byteOffset);
          p221.body = undefined;
        } else if (p221.body) {
          p221.bodyBytes = undefined;
        }
        C2.log("🚩 执行结束!");
        $done(p221);
        break;
      default:
        C2.log("🚩 执行结束!");
        process.exit(1);
    }
  }($response));
})();