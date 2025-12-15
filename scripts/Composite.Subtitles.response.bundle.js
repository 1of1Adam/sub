/*! https://DualSubs.github.io/guide/universal */
console.log('🍿️ DualSubs: 🔣 Universal β');
console.log('Composite.Subtitles.response.bundle.js');
console.log('Version: undefined');
console.log('Date: 2025/12/15 23:46:06');
(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./node_modules/@nsnanocat/url/URL.mjs": 
/*!*********************************************!*\
  !*** ./node_modules/@nsnanocat/url/URL.mjs ***!
  \*********************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  URL: () => (URL)
});
/* ESM import */var _URLSearchParams_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./URLSearchParams.mjs */ "./node_modules/@nsnanocat/url/URLSearchParams.mjs");

class URL {
    constructor(url, base) {
        switch (typeof url) {
            case "string": {
                const urlIsValid = /^(blob:|file:)?[a-zA-z]+:\/\/.*/.test(url);
                const baseIsValid = base ? /^(blob:|file:)?[a-zA-z]+:\/\/.*/.test(base) : false;
                // If a string is passed for url instead of location or link, then set the properties of the URL instance.
                if (urlIsValid)
                    this.href = url;
                // If the url isn't valid, but the base is, then prepend the base to the url.
                else if (baseIsValid)
                    this.href = base + url;
                // If no valid url or base is given, then throw a type error.
                else
                    throw new TypeError('URL string is not valid. If using a relative url, a second argument needs to be passed representing the base URL. Example: new URL("relative/path", "http://www.example.com");');
                break;
            }
            case "object":
                break;
            default:
                throw new TypeError("Invalid argument type.");
        }
    }
    #url = {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        password: "",
        pathname: "",
        port: Number.NaN,
        protocol: "",
        search: "",
        searchParams: new _URLSearchParams_mjs__WEBPACK_IMPORTED_MODULE_0__.URLSearchParams(""),
        username: "",
    };
    // refer: http://www.ietf.org/rfc/rfc3986.txt
    static #URLRegExp = /^(?<scheme>([^:\/?#]+):)?(?:\/\/(?<authority>[^\/?#]*))?(?<path>[^?#]*)(?<query>\?([^#]*))?(?<hash>#(.*))?$/;
    static #AuthorityRegExp = /^(?<authentication>(?<username>[^:]*)(:(?<password>[^@]*))?@)?(?<hostname>[^:]+)(:(?<port>\d+))?$/;
    get hash() {
        return this.#url.hash;
    }
    set hash(value) {
        if (value.length !== 0) {
            if (value.startsWith("#"))
                value = value.slice(1);
            this.#url.hash = `#${encodeURIComponent(value)}`;
        }
    }
    get host() {
        return this.port.length > 0 ? `${this.hostname}:${this.port}` : this.hostname;
    }
    set host(value) {
        [this.hostname, this.port] = value.split(":", 2);
    }
    get hostname() {
        return encodeURIComponent(this.#url.hostname);
    }
    set hostname(value) {
        this.#url.hostname = value ?? "";
    }
    get href() {
        let authority = "";
        if (this.username.length > 0) {
            authority += this.username;
            if (this.password.length > 0)
                authority += `:${this.password}`;
            authority += "@";
        }
        return `${this.protocol}//${authority}${this.host}${this.pathname}${this.search}${this.hash}`;
    }
    set href(value) {
        if (value.startsWith("blob:") || value.startsWith("file:"))
            value = value.slice(5);
        const urlMatch = value.match(URL.#URLRegExp);
        if (!urlMatch)
            throw new TypeError("Invalid URL format.");
        this.protocol = urlMatch.groups.scheme ?? "";
        const authorityMatch = urlMatch.groups.authority.match(URL.#AuthorityRegExp);
        this.username = authorityMatch.groups.username ?? "";
        this.password = authorityMatch.groups.password ?? "";
        this.hostname = authorityMatch.groups.hostname ?? "";
        this.port = authorityMatch.groups.port ?? "";
        this.pathname = urlMatch.groups.path ?? "";
        this.search = urlMatch.groups.query ?? "";
        this.hash = urlMatch.groups.hash ?? "";
    }
    get origin() {
        return `${this.protocol}//${this.host}`;
    }
    get password() {
        return encodeURIComponent(this.#url.password);
    }
    set password(value) {
        if (this.username.length > 0)
            this.#url.password = value ?? "";
    }
    get pathname() {
        return `/${this.#url.pathname}`;
    }
    set pathname(value) {
        value = `${value}`;
        if (value.startsWith("/"))
            value = value.slice(1);
        this.#url.pathname = value;
    }
    get port() {
        if (Number.isNaN(this.#url.port))
            return "";
        const port = this.#url.port.toString();
        if (this.protocol === "ftp:" && port === "21")
            return "";
        if (this.protocol === "http:" && port === "80")
            return "";
        if (this.protocol === "https:" && port === "443")
            return "";
        return port;
    }
    set port(value) {
        switch (value) {
            case "":
                this.#url.port = Number.NaN;
                break;
            default: {
                const port = Number.parseInt(value, 10);
                if (port >= 0 && port < 65535)
                    this.#url.port = port;
            }
        }
    }
    get protocol() {
        return `${this.#url.protocol}:`;
    }
    set protocol(value) {
        if (value.endsWith(":"))
            value = value.slice(0, -1);
        this.#url.protocol = value;
    }
    get search() {
        this.#url.search = this.searchParams.toString();
        if (this.#url.search.length > 0)
            return `?${this.#url.search}`;
        else
            return "";
    }
    set search(value) {
        value = `${value}`;
        if (value.startsWith("?"))
            value = value.slice(1);
        this.#url.search = value;
        this.#url.searchParams = new _URLSearchParams_mjs__WEBPACK_IMPORTED_MODULE_0__.URLSearchParams(this.#url.search);
    }
    get searchParams() {
        return this.#url.searchParams;
    }
    get username() {
        return encodeURIComponent(this.#url.username);
    }
    set username(value) {
        this.#url.username = value ?? "";
    }
    static parse = (url, base) => new URL(url, base);
    /**
     * Returns the string representation of the URL.
     *
     * @returns {string} The href of the URL.
     */
    toString = () => this.href;
    /**
     * Converts the URL object properties to a JSON string.
     *
     * @returns {string} A JSON string representation of the URL object.
     */
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
        username: this.username,
    });
}


}),
"./node_modules/@nsnanocat/url/URLSearchParams.mjs": 
/*!*********************************************************!*\
  !*** ./node_modules/@nsnanocat/url/URLSearchParams.mjs ***!
  \*********************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  URLSearchParams: () => (URLSearchParams)
});
class URLSearchParams {
    constructor(params) {
        switch (typeof params) {
            case "string": {
                if (params.length === 0)
                    break;
                if (params.startsWith("?"))
                    params = params.slice(1);
                const pairs = params.split("&").map(pair => pair.split("="));
                pairs.forEach(([key, value]) => {
                    this.#params.push(key ? decodeURIComponent(key) : key);
                    this.#values.push(value ? decodeURIComponent(value) : value);
                });
                break;
            }
            case "object":
                if (Array.isArray(params)) {
                    Object.entries(params).forEach(([key, value]) => {
                        this.#params.push(key);
                        this.#values.push(value);
                    });
                }
                else if (Symbol.iterator in Object(params)) {
                    for (const [key, value] of params) {
                        this.#params.push(key);
                        this.#values.push(value);
                    }
                }
                break;
        }
        this.#updateSearchString(this.#params, this.#values);
    }
    // Create 2 seperate arrays for the params and values to make management and lookup easier.
    #param = "";
    #params = [];
    #values = [];
    // Custom encode function that doesn't encode commas and other safe characters
    // Only encodes characters that are not allowed in query strings according to RFC 3986
    #encodeQueryComponent(str) {
        // encodeURIComponent encodes too many characters, so we need to unencode safe ones
        return encodeURIComponent(str)
            .replace(/%2C/g, ",") // Comma is safe
            .replace(/%21/g, "!") // Exclamation mark
            .replace(/%27/g, "'") // Single quote
            .replace(/%28/g, "(") // Left parenthesis
            .replace(/%29/g, ")") // Right parenthesis
            .replace(/%2A/g, "*"); // Asterisk
    }
    // Update the search property of the URL instance with the new params and values.
    #updateSearchString(params, values) {
        if (params.length === 0)
            this.#param = "";
        else
            this.#param = params
                .map((param, index) => {
                switch (typeof values[index]) {
                    case "object":
                        return `${this.#encodeQueryComponent(param)}=${this.#encodeQueryComponent(JSON.stringify(values[index]))}`;
                    case "boolean":
                    case "number":
                    case "string":
                        return `${this.#encodeQueryComponent(param)}=${this.#encodeQueryComponent(values[index])}`;
                    case "undefined":
                    default:
                        return this.#encodeQueryComponent(param);
                }
            })
                .join("&");
    }
    // Add a given param with a given value to the end.
    append(name, value) {
        this.#params.push(name);
        this.#values.push(value);
        this.#updateSearchString(this.#params, this.#values);
    }
    // Remove all occurances of a given param
    delete(name, value) {
        while (this.#params.indexOf(name) > -1) {
            this.#values.splice(this.#params.indexOf(name), 1);
            this.#params.splice(this.#params.indexOf(name), 1);
        }
        this.#updateSearchString(this.#params, this.#values);
    }
    // Return an array to be structured in this way: [[param1, value1], [param2, value2]] to mimic the native method's ES6 iterator.
    entries() {
        return this.#params.map((param, index) => [param, this.#values[index]]);
    }
    // Return the value matched to the first occurance of a given param.
    get(name) {
        return this.#values[this.#params.indexOf(name)];
    }
    // Return all values matched to all occurances of a given param.
    getAll(name) {
        return this.#values.filter((value, index) => this.#params[index] === name);
    }
    // Return a boolean to indicate whether a given param exists.
    has(name, value) {
        return this.#params.indexOf(name) > -1;
    }
    // Return an array of the param names to mimic the native method's ES6 iterator.
    keys() {
        return this.#params;
    }
    // Set a given param to a given value.
    set(name, value) {
        if (this.#params.indexOf(name) === -1) {
            this.append(name, value); // If the given param doesn't already exist, append it.
        }
        else {
            let first = true;
            const newValues = [];
            // If the param already exists, change the value of the first occurance and remove any remaining occurances.
            this.#params = this.#params.filter((currentParam, index) => {
                if (currentParam !== name) {
                    newValues.push(this.#values[index]);
                    return true;
                    // If the currentParam matches the one being changed and it's the first one, keep the param and change its value to the given one.
                }
                else if (first) {
                    first = false;
                    newValues.push(value);
                    return true;
                }
                // If the currentParam matches the one being changed, but it's not the first, remove it.
                return false;
            });
            this.#values = newValues;
            this.#updateSearchString(this.#params, this.#values);
        }
    }
    // Sort all key/value pairs, if any, by their keys then by their values.
    sort() {
        // Call entries to make sorting easier, then rewrite the params and values in the new order.
        const sortedPairs = this.entries().sort();
        this.#params = [];
        this.#values = [];
        sortedPairs.forEach(pair => {
            this.#params.push(pair[0]);
            this.#values.push(pair[1]);
        });
        this.#updateSearchString(this.#params, this.#values);
    }
    // Return the search string without the '?'.
    toString = () => this.#param;
    // Return and array of the param values to mimic the native method's ES6 iterator..
    values = () => this.#values.values();
}


}),
"./node_modules/@nsnanocat/util/getStorage.mjs": 
/*!*****************************************************!*\
  !*** ./node_modules/@nsnanocat/util/getStorage.mjs ***!
  \*****************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  getStorage: () => (getStorage)
});
/* ESM import */var _polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill/Console.mjs */ "./node_modules/@nsnanocat/util/polyfill/Console.mjs");
/* ESM import */var _polyfill_Lodash_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill/Lodash.mjs */ "./node_modules/@nsnanocat/util/polyfill/Lodash.mjs");
/* ESM import */var _polyfill_Storage_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfill/Storage.mjs */ "./node_modules/@nsnanocat/util/polyfill/Storage.mjs");




/**
 * Get Storage Variables
 * @link https://github.com/NanoCat-Me/utils/blob/main/getStorage.mjs
 * @author VirgilClyne
 * @param {string} key - Persistent Store Key
 * @param {array | string} names - Platform Names
 * @param {object} database - Default Database
 * @return {object} { Settings, Caches, Configs }
 */
function getStorage(key, names, database) {
	names = [names].flat(Number.POSITIVE_INFINITY);
	//Console.log("☑️ getStorage");
	/***************** Default *****************/
	const Store = { Settings: database?.Default?.Settings || {}, Configs: database?.Default?.Configs || {}, Caches: {} };
	//Console.debug("Default", `Store.Settings类型: ${typeof Store.Settings}`, `Store.Settings: ${JSON.stringify(Store.Settings)}`);
	/***************** Database *****************/
	names.forEach(name => {
		Store.Settings = { ...Store.Settings, ...database?.[name]?.Settings };
		Store.Configs = { ...Store.Configs, ...database?.[name]?.Configs };
	});
	//Console.debug("Database", `Store.Settings类型: ${typeof Store.Settings}`, `Store.Settings: ${JSON.stringify(Store.Settings)}`);
	/***************** Argument *****************/
	switch (typeof $argument) {
		// biome-ignore lint/suspicious/noFallthroughSwitchClause: <explanation>
		case "string":
			$argument = Object.fromEntries($argument.split("&").map(item => item.split("=", 2).map(i => i.replace(/\"/g, ""))));
		case "object": {
			const argument = {};
			Object.keys($argument).forEach(key => _polyfill_Lodash_mjs__WEBPACK_IMPORTED_MODULE_1__.Lodash.set(argument, key, $argument[key]));
			//Console.debug(`✅ $argument`, `argument: ${JSON.stringify(argument)}`);
			Store.Settings = { ...Store.Settings, ...argument };
			break;
		}
		case "undefined":
			break;
	}
	//Console.debug("$argument", `Store.Settings类型: ${typeof Store.Settings}`, `Store.Settings: ${JSON.stringify(Store.Settings)}`);
	/***************** BoxJs *****************/
	// 包装为局部变量，用完释放内存
	// BoxJs的清空操作返回假值空字符串, 逻辑或操作符会在左侧操作数为假值时返回右侧操作数。
	const BoxJs = _polyfill_Storage_mjs__WEBPACK_IMPORTED_MODULE_2__.Storage.getItem(key);
	if (BoxJs) {
		//Console.debug("BoxJs", `BoxJs类型: ${typeof BoxJs}`, `BoxJs内容: ${JSON.stringify(BoxJs || {})}`);
		names.forEach(name => {
			switch (typeof BoxJs?.[name]?.Settings) {
				// biome-ignore lint/suspicious/noFallthroughSwitchClause: <explanation>
				case "string":
					BoxJs[name].Settings = JSON.parse(BoxJs[name].Settings || "{}");
				case "object":
					Store.Settings = { ...Store.Settings, ...BoxJs[name].Settings };
					break;
				case "undefined":
					break;
			}
			switch (typeof BoxJs?.[name]?.Caches) {
				// biome-ignore lint/suspicious/noFallthroughSwitchClause: <explanation>
				case "string":
					BoxJs[name].Caches = JSON.parse(BoxJs[name].Caches || "{}");
				case "object":
					Store.Caches = { ...Store.Caches, ...BoxJs[name].Caches };
					break;
				case "undefined":
					break;
			}
		});
		//Console.debug("BoxJs", `Store.Settings类型: ${typeof Store.Settings}`, `Store.Settings: ${JSON.stringify(Store.Settings)}`);
	}
	/***************** traverseObject *****************/
	traverseObject(Store.Settings, (key, value) => {
		//Console.debug("☑️ traverseObject", `${key}: ${typeof value}`, `${key}: ${JSON.stringify(value)}`);
		if (value === "true" || value === "false")
			value = JSON.parse(value); // 字符串转Boolean
		else if (typeof value === "string") {
			if (value.includes(","))
				value = value.split(",").map(item => string2number(item)); // 字符串转数组转数字
			else value = string2number(value); // 字符串转数字
		}
		return value;
	});
	//Console.debug("✅ traverseObject", `Store.Settings类型: ${typeof Store.Settings}`, `Store.Settings: ${JSON.stringify(Store.Settings)}`);
	return Store;
}

function traverseObject(o, c) {
	for (const t in o) {
		const n = o[t];
		o[t] = "object" === typeof n && null !== n ? traverseObject(n, c) : c(t, n);
	}
	return o;
}
function string2number(string) {
	if (/^\d+$/.test(string)) string = Number.parseInt(string, 10);
	return string;
}


}),
"./node_modules/@nsnanocat/util/index.js": 
/*!***********************************************!*\
  !*** ./node_modules/@nsnanocat/util/index.js ***!
  \***********************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Console: () => (/* reexport safe */ _polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_5__.Console),
  done: () => (/* reexport safe */ _lib_done_mjs__WEBPACK_IMPORTED_MODULE_1__.done),
  fetch: () => (/* reexport safe */ _polyfill_fetch_mjs__WEBPACK_IMPORTED_MODULE_6__.fetch),
  getStorage: () => (/* reexport safe */ _getStorage_mjs__WEBPACK_IMPORTED_MODULE_10__.getStorage)
});
/* ESM import */var _lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/app.mjs */ "./node_modules/@nsnanocat/util/lib/app.mjs");
/* ESM import */var _lib_done_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/done.mjs */ "./node_modules/@nsnanocat/util/lib/done.mjs");
/* ESM import */var _lib_notification_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/notification.mjs */ "./node_modules/@nsnanocat/util/lib/notification.mjs");
/* ESM import */var _lib_time_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/time.mjs */ "./node_modules/@nsnanocat/util/lib/time.mjs");
/* ESM import */var _lib_wait_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/wait.mjs */ "./node_modules/@nsnanocat/util/lib/wait.mjs");
/* ESM import */var _polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polyfill/Console.mjs */ "./node_modules/@nsnanocat/util/polyfill/Console.mjs");
/* ESM import */var _polyfill_fetch_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./polyfill/fetch.mjs */ "./node_modules/@nsnanocat/util/polyfill/fetch.mjs");
/* ESM import */var _polyfill_Lodash_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./polyfill/Lodash.mjs */ "./node_modules/@nsnanocat/util/polyfill/Lodash.mjs");
/* ESM import */var _polyfill_StatusTexts_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./polyfill/StatusTexts.mjs */ "./node_modules/@nsnanocat/util/polyfill/StatusTexts.mjs");
/* ESM import */var _polyfill_Storage_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./polyfill/Storage.mjs */ "./node_modules/@nsnanocat/util/polyfill/Storage.mjs");
/* ESM import */var _getStorage_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getStorage.mjs */ "./node_modules/@nsnanocat/util/getStorage.mjs");













}),
"./node_modules/@nsnanocat/util/lib/app.mjs": 
/*!**************************************************!*\
  !*** ./node_modules/@nsnanocat/util/lib/app.mjs ***!
  \**************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  $app: () => ($app)
});
/**
 * Current app name
 *
 * @type {("Quantumult X" | "Loon" | "Shadowrocket" | "Node.js" | "Egern" | "Surge" | "Stash")}
 */
const $app = (() => {
	const keys = Object.keys(globalThis);
	switch (true) {
		case keys.includes("$task"):
			return "Quantumult X";
		case keys.includes("$loon"):
			return "Loon";
		case keys.includes("$rocket"):
			return "Shadowrocket";
		case typeof module !== "undefined":
			return "Node.js";
		case keys.includes("Egern"):
			return "Egern";
		case keys.includes("$environment"):
			if ($environment["surge-version"]) return "Surge";
			if ($environment["stash-version"]) return "Stash";
			return undefined;
		default:
			return undefined;
	}
})();


}),
"./node_modules/@nsnanocat/util/lib/done.mjs": 
/*!***************************************************!*\
  !*** ./node_modules/@nsnanocat/util/lib/done.mjs ***!
  \***************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  done: () => (done)
});
/* ESM import */var _app_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.mjs */ "./node_modules/@nsnanocat/util/lib/app.mjs");
/* ESM import */var _polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfill/Console.mjs */ "./node_modules/@nsnanocat/util/polyfill/Console.mjs");
/* ESM import */var _polyfill_Lodash_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfill/Lodash.mjs */ "./node_modules/@nsnanocat/util/polyfill/Lodash.mjs");
/* ESM import */var _polyfill_StatusTexts_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfill/StatusTexts.mjs */ "./node_modules/@nsnanocat/util/polyfill/StatusTexts.mjs");





/**
 * Complete the script execution
 *
 * @export
 * @param {object} object
 * @returns {void}
 */
function done(object = {}) {
	switch (_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
		case "Surge":
			if (object.policy) _polyfill_Lodash_mjs__WEBPACK_IMPORTED_MODULE_2__.Lodash.set(object, "headers.X-Surge-Policy", object.policy);
			_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.log("🚩 执行结束!", `🕛 ${new Date().getTime() / 1000 - $script.startTime} 秒`);
			$done(object);
			break;
		case "Loon":
			if (object.policy) object.node = object.policy;
			_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.log("🚩 执行结束!", `🕛 ${(new Date() - $script.startTime) / 1000} 秒`);
			$done(object);
			break;
		case "Stash":
			if (object.policy) _polyfill_Lodash_mjs__WEBPACK_IMPORTED_MODULE_2__.Lodash.set(object, "headers.X-Stash-Selected-Proxy", encodeURI(object.policy));
			_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.log("🚩 执行结束!", `🕛 ${(new Date() - $script.startTime) / 1000} 秒`);
			$done(object);
			break;
		case "Egern":
			_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.log("🚩 执行结束!");
			$done(object);
			break;
		case "Shadowrocket":
			_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.log("🚩 执行结束!");
			$done(object);
			break;
		case "Quantumult X":
			if (object.policy) _polyfill_Lodash_mjs__WEBPACK_IMPORTED_MODULE_2__.Lodash.set(object, "opts.policy", object.policy);
			object = _polyfill_Lodash_mjs__WEBPACK_IMPORTED_MODULE_2__.Lodash.pick(object, ["status", "url", "headers", "body", "bodyBytes"]);
			switch (typeof object.status) {
				case "number":
					object.status = `HTTP/1.1 ${object.status} ${_polyfill_StatusTexts_mjs__WEBPACK_IMPORTED_MODULE_3__.StatusTexts[object.status]}`;
					break;
				case "string":
				case "undefined":
					break;
				default:
					throw new TypeError(`${Function.name}: 参数类型错误, status 必须为数字或字符串`);
			}
			if (object.body instanceof ArrayBuffer) {
				object.bodyBytes = object.body;
				object.body = undefined;
			} else if (ArrayBuffer.isView(object.body)) {
				object.bodyBytes = object.body.buffer.slice(object.body.byteOffset, object.body.byteLength + object.body.byteOffset);
				object.body = undefined;
			} else if (object.body) object.bodyBytes = undefined;
			_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.log("🚩 执行结束!");
			$done(object);
			break;
		case "Node.js":
		default:
			_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.log("🚩 执行结束!");
			process.exit(1);
			break;
	}
}


}),
"./node_modules/@nsnanocat/util/lib/notification.mjs": 
/*!***********************************************************!*\
  !*** ./node_modules/@nsnanocat/util/lib/notification.mjs ***!
  \***********************************************************/
(function (__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {
/* ESM import */var _app_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.mjs */ "./node_modules/@nsnanocat/util/lib/app.mjs");
/* ESM import */var _polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfill/Console.mjs */ "./node_modules/@nsnanocat/util/polyfill/Console.mjs");



/**
 * 系统通知
 *
 * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
 *
 * 示例:
 * $.msg(title, subtitle, body, "twitter://")
 * $.msg(title, subtitle, body, { "open-url": "twitter://", "media-url": "https://github.githubassets.com/images/modules/open_graph/github-mark.png" })
 * $.msg(title, subtitle, body, { "open-url": "https://bing.com", "media-url": "https://github.githubassets.com/images/modules/open_graph/github-mark.png" })
 *
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} body 内容
 * @param {*} mutableContent 通知扩展字段
 *
 */
function notification(title = `ℹ️ ${_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app} 通知`, subtitle = "", body = "", content = {}) {
	const mutableContent = MutableContent(content);
	switch (_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
		case "Surge":
		case "Loon":
		case "Stash":
		case "Egern":
		case "Shadowrocket":
		default:
			$notification.post(title, subtitle, body, mutableContent);
			break;
		case "Quantumult X":
			$notify(title, subtitle, body, mutableContent);
			break;
		case "Node.js":
			break;
	}
	_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.group("📣 系统通知");
	_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.log(title, subtitle, body, JSON.stringify(mutableContent, null, 2));
	_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.groupEnd();
}

const MutableContent = content => {
	const mutableContent = {};
	switch (typeof content) {
		case undefined:
			break;
		case "string":
		case "number":
		case "boolean":
			switch (_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
				case "Surge":
				case "Stash":
				case "Egern":
				default:
					mutableContent.url = content;
					break;
				case "Loon":
				case "Shadowrocket":
					mutableContent.openUrl = content;
					break;
				case "Quantumult X":
					mutableContent["open-url"] = content;
					break;
				case "Node.js":
					break;
			}
			break;
		case "object": {
			const openUrl = content.open || content["open-url"] || content.url || content.openUrl;
			const copyUrl = content.copy || content["update-pasteboard"] || content.updatePasteboard;
			const mediaUrl = content.media || content["media-url"] || content.mediaUrl;
			switch (_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
				case "Surge":
				case "Stash":
				case "Egern":
				case "Shadowrocket":
				default: {
					if (openUrl) {
						mutableContent.action = "open-url";
						mutableContent.url = openUrl;
					}
					if (copyUrl) {
						mutableContent.action = "clipboard";
						mutableContent.text = copyUrl;
					}
					if (mediaUrl) {
						switch (true) {
							case mediaUrl.startsWith("http"): // http 开头的网络地址
								mutableContent["media-url"] = mediaUrl;
								break;
							case mediaUrl.startsWith("data:"): {
								// data 开头的 Base64 编码
								// data:image/png;base64,iVBORw0KGgo...
								const base64RegExp = /^data:(?<MIME>\w+\/\w+);base64,(?<Base64>.+)/;
								const { MIME, Base64 } = mediaUrl.match(base64RegExp).groups;
								mutableContent["media-base64"] = Base64;
								mutableContent["media-base64-mime"] = content.mime || MIME;
								break;
							}
							default: {
								mutableContent["media-base64"] = mediaUrl;
								// https://stackoverflow.com/questions/57976898/how-to-get-mime-type-from-base-64-string
								switch (true) {
									case mediaUrl.startsWith("CiVQREYt"):
									case mediaUrl.startsWith("JVBERi0"):
										mutableContent["media-base64-mime"] = "application/pdf";
										break;
									case mediaUrl.startsWith("R0lGODdh"):
									case mediaUrl.startsWith("R0lGODlh"):
										mutableContent["media-base64-mime"] = "image/gif";
										break;
									case mediaUrl.startsWith("iVBORw0KGgo"):
										mutableContent["media-base64-mime"] = "image/png";
										break;
									case mediaUrl.startsWith("/9j/"):
										mutableContent["media-base64-mime"] = "image/jpg";
										break;
									case mediaUrl.startsWith("Qk02U"):
										mutableContent["media-base64-mime"] = "image/bmp";
										break;
								}
								break;
							}
						}
					}
					if (content["auto-dismiss"]) mutableContent["auto-dismiss"] = content["auto-dismiss"];
					if (content.sound) mutableContent.sound = content.sound;
					break;
				}
				case "Loon": {
					if (openUrl) mutableContent.openUrl = openUrl;
					if (mediaUrl?.startsWith("http")) mutableContent.mediaUrl = mediaUrl;
					break;
				}
				case "Quantumult X": {
					if (openUrl) mutableContent["open-url"] = openUrl;
					if (mediaUrl?.startsWith("http")) mutableContent["media-url"] = mediaUrl;
					if (copyUrl) mutableContent["update-pasteboard"] = copyUrl;
					break;
				}
				case "Node.js":
					break;
			}
			break;
		}
		default:
			_polyfill_Console_mjs__WEBPACK_IMPORTED_MODULE_1__.Console.error(`不支持的通知参数类型: ${typeof content}`, "");
			break;
	}
	return mutableContent;
};


}),
"./node_modules/@nsnanocat/util/lib/time.mjs": 
/*!***************************************************!*\
  !*** ./node_modules/@nsnanocat/util/lib/time.mjs ***!
  \***************************************************/
(function () {
/**
 * time
 * 时间格式化
 * [version of ISO8601]{@link https://262.ecma-international.org/5.1/#sec-15.9.1.15}
 * 示例:time("yyyy-MM-dd qq HH:mm:ss.S") YYYY-MM-DDTHH:mm:ss.sssZ
 *    :time("yyyyMMddHHmmssS")
 *    YY:年 MM:月 dd:日 S:季 HH:时 m:分 ss:秒 sss:毫秒 Z:时区
 *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
 * @param {string} format 格式化参数
 * @param {number} ts 可选: 根据指定时间戳返回格式化日期
 *
 */
function time(format, ts) {
	const date = ts ? new Date(ts) : new Date();
	const Time = {
		YY: date.getFullYear().toString().substring(3),
		yyyy: date.getFullYear().toString(),
		MM: (date.getMonth() + 1).toString().padStart(2, "0"),
		dd: date.getDate().toString().padStart(2, "0"),
		HH: date.getHours().toString().padStart(2, "0"),
		mm: date.getMinutes().toString().padStart(2, "0"),
		sss: date.getMilliseconds().toString().padStart(3, "0"),
		ss: date.getSeconds().toString().padStart(2, "0"),
		S: `${Math.floor(date.getMonth() / 3) + 1}`,
	};
	for (const [key, value] of Object.entries(Time)) {
		format = format.replace(key, value);
	}
	return format;
}


}),
"./node_modules/@nsnanocat/util/lib/wait.mjs": 
/*!***************************************************!*\
  !*** ./node_modules/@nsnanocat/util/lib/wait.mjs ***!
  \***************************************************/
(function () {
/**
 * wait
 *
 * @export
 * @param {number} [delay=1000]
 * @returns {Promise<resolve>}
 */
function wait(delay = 1000) {
	return new Promise(resolve => setTimeout(resolve, delay));
}


}),
"./node_modules/@nsnanocat/util/polyfill/Console.mjs": 
/*!***********************************************************!*\
  !*** ./node_modules/@nsnanocat/util/polyfill/Console.mjs ***!
  \***********************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Console: () => (Console)
});
/* ESM import */var _lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/app.mjs */ "./node_modules/@nsnanocat/util/lib/app.mjs");


class Console {
	static #counts = new Map([]);
	static #groups = [];
	static #times = new Map([]);

	static clear = () => {};

	static count = (label = "default") => {
		switch (Console.#counts.has(label)) {
			case true:
				Console.#counts.set(label, Console.#counts.get(label) + 1);
				break;
			case false:
				Console.#counts.set(label, 0);
				break;
		}
		Console.log(`${label}: ${Console.#counts.get(label)}`);
	};

	static countReset = (label = "default") => {
		switch (Console.#counts.has(label)) {
			case true:
				Console.#counts.set(label, 0);
				Console.log(`${label}: ${Console.#counts.get(label)}`);
				break;
			case false:
				Console.warn(`Counter "${label}" doesn’t exist`);
				break;
		}
	};

	static debug = (...msg) => {
		if (Console.#level < 4) return;
		msg = msg.map(m => `🅱️ ${m}`);
		Console.log(...msg);
	};

	static error(...msg) {
		if (Console.#level < 1) return;
		switch (_lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
			case "Surge":
			case "Loon":
			case "Stash":
			case "Egern":
			case "Shadowrocket":
			case "Quantumult X":
			default:
				msg = msg.map(m => `❌ ${m}`);
				break;
			case "Node.js":
				msg = msg.map(m => `❌ ${m.stack}`);
				break;
		}
		Console.log(...msg);
	}

	static exception = (...msg) => Console.error(...msg);

	static group = label => Console.#groups.unshift(label);

	static groupEnd = () => Console.#groups.shift();

	static info(...msg) {
		if (Console.#level < 3) return;
		msg = msg.map(m => `ℹ️ ${m}`);
		Console.log(...msg);
	}

	static #level = 3;

	static get logLevel() {
		switch (Console.#level) {
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

	static set logLevel(level) {
		switch (typeof level) {
			case "string":
				level = level.toLowerCase();
				break;
			case "number":
				break;
			case "undefined":
			default:
				level = "warn";
				break;
		}
		switch (level) {
			case 0:
			case "off":
				Console.#level = 0;
				break;
			case 1:
			case "error":
				Console.#level = 1;
				break;
			case 2:
			case "warn":
			case "warning":
			default:
				Console.#level = 2;
				break;
			case 3:
			case "info":
				Console.#level = 3;
				break;
			case 4:
			case "debug":
				Console.#level = 4;
				break;
			case 5:
			case "all":
				Console.#level = 5;
				break;
		}
	}

	static log = (...msg) => {
		if (Console.#level === 0) return;
		msg = msg.map(log => {
			switch (typeof log) {
				case "object":
					log = JSON.stringify(log);
					break;
				case "bigint":
				case "number":
				case "boolean":
				case "string":
					log = log.toString();
					break;
				case "undefined":
				default:
					break;
			}
			return log;
		});
		Console.#groups.forEach(group => {
			msg = msg.map(log => `  ${log}`);
			msg.unshift(`▼ ${group}:`);
		});
		msg = ["", ...msg];
		console.log(msg.join("\n"));
	};

	static time = (label = "default") => Console.#times.set(label, Date.now());

	static timeEnd = (label = "default") => Console.#times.delete(label);

	static timeLog = (label = "default") => {
		const time = Console.#times.get(label);
		if (time) Console.log(`${label}: ${Date.now() - time}ms`);
		else Console.warn(`Timer "${label}" doesn’t exist`);
	};

	static warn(...msg) {
		if (Console.#level < 2) return;
		msg = msg.map(m => `⚠️ ${m}`);
		Console.log(...msg);
	}
}


}),
"./node_modules/@nsnanocat/util/polyfill/Lodash.mjs": 
/*!**********************************************************!*\
  !*** ./node_modules/@nsnanocat/util/polyfill/Lodash.mjs ***!
  \**********************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Lodash: () => (Lodash)
});
/* https://www.lodashjs.com */
class Lodash {
	static escape(string) {
		const map = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
		};
		return string.replace(/[&<>"']/g, m => map[m]);
	}

	static get(object = {}, path = "", defaultValue = undefined) {
		// translate array case to dot case, then split with .
		// a[0].b -> a.0.b -> ['a', '0', 'b']
		if (!Array.isArray(path)) path = Lodash.toPath(path);

		const result = path.reduce((previousValue, currentValue) => {
			return Object(previousValue)[currentValue]; // null undefined get attribute will throwError, Object() can return a object
		}, object);
		return result === undefined ? defaultValue : result;
	}

	static omit(object = {}, paths = []) {
		if (!Array.isArray(paths)) paths = [paths.toString()];
		paths.forEach(path => Lodash.unset(object, path));
		return object;
	}

	static pick(object = {}, paths = []) {
		if (!Array.isArray(paths)) paths = [paths.toString()];
		const filteredEntries = Object.entries(object).filter(([key, value]) => paths.includes(key));
		return Object.fromEntries(filteredEntries);
	}

	static set(object, path, value) {
		if (!Array.isArray(path)) path = Lodash.toPath(path);
		path.slice(0, -1).reduce((previousValue, currentValue, currentIndex) => (Object(previousValue[currentValue]) === previousValue[currentValue] ? previousValue[currentValue] : (previousValue[currentValue] = /^\d+$/.test(path[currentIndex + 1]) ? [] : {})), object)[path[path.length - 1]] = value;
		return object;
	}

	static toPath(value) {
		return value
			.replace(/\[(\d+)\]/g, ".$1")
			.split(".")
			.filter(Boolean);
	}

	static unescape(string) {
		const map = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": '"',
			"&#39;": "'",
		};
		return string.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, m => map[m]);
	}

	static unset(object = {}, path = "") {
		if (!Array.isArray(path)) path = Lodash.toPath(path);
		const result = path.reduce((previousValue, currentValue, currentIndex) => {
			if (currentIndex === path.length - 1) {
				delete previousValue[currentValue];
				return true;
			}
			return Object(previousValue)[currentValue];
		}, object);
		return result;
	}
}


}),
"./node_modules/@nsnanocat/util/polyfill/StatusTexts.mjs": 
/*!***************************************************************!*\
  !*** ./node_modules/@nsnanocat/util/polyfill/StatusTexts.mjs ***!
  \***************************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  StatusTexts: () => (StatusTexts)
});
const StatusTexts = {
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
	511: "Network Authentication Required",
};


}),
"./node_modules/@nsnanocat/util/polyfill/Storage.mjs": 
/*!***********************************************************!*\
  !*** ./node_modules/@nsnanocat/util/polyfill/Storage.mjs ***!
  \***********************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Storage: () => (Storage)
});
/* ESM import */var _lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/app.mjs */ "./node_modules/@nsnanocat/util/lib/app.mjs");
/* ESM import */var _Lodash_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lodash.mjs */ "./node_modules/@nsnanocat/util/polyfill/Lodash.mjs");



/**
 * Storage
 *
 * @link https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem
 * @export
 * @class Storage
 * @typedef {Storage}
 */
class Storage {
	/**
	 * data
	 *
	 * @static
	 * @type {file}
	 */
	static data = null;
	static dataFile = "box.dat";
	/**
	 * nameRegex
	 *
	 * @static
	 * @type {regexp}
	 */
	static #nameRegex = /^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;

	/**
	 * getItem
	 *
	 * @static
	 * @param {string} keyName
	 * @param {*} [defaultValue]
	 * @returns {*}
	 */
	static getItem(keyName, defaultValue = null) {
		let keyValue = defaultValue;
		// 如果以 @
		switch (keyName.startsWith("@")) {
			case true: {
				const { key, path } = keyName.match(Storage.#nameRegex)?.groups;
				keyName = key;
				let value = Storage.getItem(keyName, {});
				if (typeof value !== "object") value = {};
				keyValue = _Lodash_mjs__WEBPACK_IMPORTED_MODULE_1__.Lodash.get(value, path);
				try {
					keyValue = JSON.parse(keyValue);
				} catch (e) {}
				break;
			}
			default:
				switch (_lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
					case "Surge":
					case "Loon":
					case "Stash":
					case "Egern":
					case "Shadowrocket":
						keyValue = $persistentStore.read(keyName);
						break;
					case "Quantumult X":
						keyValue = $prefs.valueForKey(keyName);
						break;
					case "Node.js":
						Storage.data = Storage.#loaddata(Storage.dataFile);
						keyValue = Storage.data?.[keyName];
						break;
					default:
						keyValue = Storage.data?.[keyName] || null;
						break;
				}
				try {
					keyValue = JSON.parse(keyValue);
				} catch (e) {
					// do nothing
				}
				break;
		}
		return keyValue ?? defaultValue;
	}

	/**
	 * setItem
	 *
	 * @static
	 * @param {string} keyName
	 * @param {*} keyValue
	 * @returns {boolean}
	 */
	static setItem(keyName = new String(), keyValue = new String()) {
		let result = false;
		switch (typeof keyValue) {
			case "object":
				keyValue = JSON.stringify(keyValue);
				break;
			default:
				keyValue = String(keyValue);
				break;
		}
		switch (keyName.startsWith("@")) {
			case true: {
				const { key, path } = keyName.match(Storage.#nameRegex)?.groups;
				keyName = key;
				let value = Storage.getItem(keyName, {});
				if (typeof value !== "object") value = {};
				_Lodash_mjs__WEBPACK_IMPORTED_MODULE_1__.Lodash.set(value, path, keyValue);
				result = Storage.setItem(keyName, value);
				break;
			}
			default:
				switch (_lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
					case "Surge":
					case "Loon":
					case "Stash":
					case "Egern":
					case "Shadowrocket":
						result = $persistentStore.write(keyValue, keyName);
						break;
					case "Quantumult X":
						result = $prefs.setValueForKey(keyValue, keyName);
						break;
					case "Node.js":
						Storage.data = Storage.#loaddata(Storage.dataFile);
						Storage.data[keyName] = keyValue;
						Storage.#writedata(Storage.dataFile);
						result = true;
						break;
					default:
						result = Storage.data?.[keyName] || null;
						break;
				}
				break;
		}
		return result;
	}

	/**
	 * removeItem
	 *
	 * @static
	 * @param {string} keyName
	 * @returns {boolean}
	 */
	static removeItem(keyName) {
		let result = false;
		switch (keyName.startsWith("@")) {
			case true: {
				const { key, path } = keyName.match(Storage.#nameRegex)?.groups;
				keyName = key;
				let value = Storage.getItem(keyName);
				if (typeof value !== "object") value = {};
				keyValue = _Lodash_mjs__WEBPACK_IMPORTED_MODULE_1__.Lodash.unset(value, path);
				result = Storage.setItem(keyName, value);
				break;
			}
			default:
				switch (_lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
					case "Surge":
					case "Loon":
					case "Stash":
					case "Egern":
					case "Shadowrocket":
						result = false;
						break;
					case "Quantumult X":
						result = $prefs.removeValueForKey(keyName);
						break;
					case "Node.js":
						result = false;
						break;
					default:
						result = false;
						break;
				}
				break;
		}
		return result;
	}

	/**
	 * clear
	 *
	 * @static
	 * @returns {boolean}
	 */
	static clear() {
		let result = false;
		switch (_lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
			case "Surge":
			case "Loon":
			case "Stash":
			case "Egern":
			case "Shadowrocket":
				result = false;
				break;
			case "Quantumult X":
				result = $prefs.removeAllValues();
				break;
			case "Node.js":
				result = false;
				break;
			default:
				result = false;
				break;
		}
		return result;
	}

	/**
	 * #loaddata
	 *
	 * @param {string} dataFile
	 * @returns {*}
	 */
	static #loaddata = dataFile => {
		if (_lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app === "Node.js") {
			this.fs = this.fs ? this.fs : require("node:fs");
			this.path = this.path ? this.path : require("node:path");
			const curDirDataFilePath = this.path.resolve(dataFile);
			const rootDirDataFilePath = this.path.resolve(process.cwd(), dataFile);
			const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath);
			const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath);
			if (isCurDirDataFile || isRootDirDataFile) {
				const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath;
				try {
					return JSON.parse(this.fs.readFileSync(datPath));
				} catch (e) {
					return {};
				}
			} else return {};
		} else return {};
	};

	/**
	 * #writedata
	 *
	 * @param {string} [dataFile=this.dataFile]
	 */
	static #writedata = (dataFile = this.dataFile) => {
		if (_lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app === "Node.js") {
			this.fs = this.fs ? this.fs : require("node:fs");
			this.path = this.path ? this.path : require("node:path");
			const curDirDataFilePath = this.path.resolve(dataFile);
			const rootDirDataFilePath = this.path.resolve(process.cwd(), dataFile);
			const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath);
			const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath);
			const jsondata = JSON.stringify(this.data);
			if (isCurDirDataFile) {
				this.fs.writeFileSync(curDirDataFilePath, jsondata);
			} else if (isRootDirDataFile) {
				this.fs.writeFileSync(rootDirDataFilePath, jsondata);
			} else {
				this.fs.writeFileSync(curDirDataFilePath, jsondata);
			}
		}
	};
}


}),
"./node_modules/@nsnanocat/util/polyfill/fetch.mjs": 
/*!*********************************************************!*\
  !*** ./node_modules/@nsnanocat/util/polyfill/fetch.mjs ***!
  \*********************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  fetch: () => (fetch)
});
/* ESM import */var _lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/app.mjs */ "./node_modules/@nsnanocat/util/lib/app.mjs");
/* ESM import */var _Console_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Console.mjs */ "./node_modules/@nsnanocat/util/polyfill/Console.mjs");
/* ESM import */var _Lodash_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lodash.mjs */ "./node_modules/@nsnanocat/util/polyfill/Lodash.mjs");
/* ESM import */var _StatusTexts_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatusTexts.mjs */ "./node_modules/@nsnanocat/util/polyfill/StatusTexts.mjs");





/**
 * fetch
 *
 * @link https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API
 * @export
 * @async
 * @param {object|string} resource
 * @param {object} [options]
 * @returns {Promise<object>}
 */
async function fetch(resource, options = {}) {
	// 初始化参数
	switch (typeof resource) {
		case "object":
			resource = { ...options, ...resource };
			break;
		case "string":
			resource = { ...options, url: resource };
			break;
		case "undefined":
		default:
			throw new TypeError(`${Function.name}: 参数类型错误, resource 必须为对象或字符串`);
	}
	// 自动判断请求方法
	if (!resource.method) {
		resource.method = "GET";
		if (resource.body ?? resource.bodyBytes) resource.method = "POST";
	}
	// 移除请求头中的部分参数, 让其自动生成
	delete resource.headers?.Host;
	delete resource.headers?.[":authority"];
	delete resource.headers?.["Content-Length"];
	delete resource.headers?.["content-length"];
	// 定义请求方法（小写）
	const method = resource.method.toLocaleLowerCase();
	// 转换请求超时时间参数
	if (!resource.timeout) resource.timeout = 5;
	if (resource.timeout) {
		resource.timeout = Number.parseInt(resource.timeout, 10);
		// 转换为秒，大于500视为毫秒，小于等于500视为秒
		if (resource.timeout > 500) resource.timeout = Math.round(resource.timeout / 1000);
	}
	// 判断平台
	switch (_lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
		case "Loon":
		case "Surge":
		case "Stash":
		case "Egern":
		case "Shadowrocket":
		default:
			// 转换请求参数
			if (resource.timeout) {
				switch (_lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
					case "Loon":
						resource.timeout = resource.timeout * 1000;
						break;
					case "Shadowrocket":
					case "Stash":
					case "Egern":
					case "Surge":
					default:
						break;
				}
			}
			if (resource.policy) {
				switch (_lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app) {
					case "Loon":
						resource.node = resource.policy;
						break;
					case "Stash":
						_Lodash_mjs__WEBPACK_IMPORTED_MODULE_2__.Lodash.set(resource, "headers.X-Stash-Selected-Proxy", encodeURI(resource.policy));
						break;
					case "Shadowrocket":
						_Lodash_mjs__WEBPACK_IMPORTED_MODULE_2__.Lodash.set(resource, "headers.X-Surge-Proxy", resource.policy);
						break;
				}
			}
			if (typeof resource.redirection === "boolean") resource["auto-redirect"] = resource.redirection;
			// 转换请求体
			if (resource.bodyBytes && !resource.body) {
				resource.body = resource.bodyBytes;
				resource.bodyBytes = undefined;
			}
			// 判断是否请求二进制响应体
			switch ((resource.headers?.Accept || resource.headers?.accept)?.split(";")?.[0]) {
				case "application/protobuf":
				case "application/x-protobuf":
				case "application/vnd.google.protobuf":
				case "application/vnd.apple.flatbuffer":
				case "application/grpc":
				case "application/grpc+proto":
				case "application/octet-stream":
					resource["binary-mode"] = true;
					break;
			}
			// 发送请求
			return await new Promise((resolve, reject) => {
				$httpClient[method](resource, (error, response, body) => {
					if (error) reject(error);
					else {
						response.ok = /^2\d\d$/.test(response.status);
						response.statusCode = response.status;
						response.statusText = _StatusTexts_mjs__WEBPACK_IMPORTED_MODULE_3__.StatusTexts[response.status];
						if (body) {
							response.body = body;
							if (resource["binary-mode"] == true) response.bodyBytes = body;
						}
						resolve(response);
					}
				});
			});
		case "Quantumult X":
			// 转换请求参数
			resource.timeout = resource.timeout * 1000;
			if (resource.policy) _Lodash_mjs__WEBPACK_IMPORTED_MODULE_2__.Lodash.set(resource, "opts.policy", resource.policy);
			if (typeof resource["auto-redirect"] === "boolean") _Lodash_mjs__WEBPACK_IMPORTED_MODULE_2__.Lodash.set(resource, "opts.redirection", resource["auto-redirect"]);
			// 转换请求体
			if (resource.body instanceof ArrayBuffer) {
				resource.bodyBytes = resource.body;
				resource.body = undefined;
			} else if (ArrayBuffer.isView(resource.body)) {
				resource.bodyBytes = resource.body.buffer.slice(resource.body.byteOffset, resource.body.byteLength + resource.body.byteOffset);
				resource.body = undefined;
			} else if (resource.body) resource.bodyBytes = undefined;
			// 发送请求
			return Promise.race([
				await $task.fetch(resource).then(
					response => {
						response.ok = /^2\d\d$/.test(response.statusCode);
						response.status = response.statusCode;
						response.statusText = _StatusTexts_mjs__WEBPACK_IMPORTED_MODULE_3__.StatusTexts[response.status];
						switch ((response.headers?.["Content-Type"] ?? response.headers?.["content-type"])?.split(";")?.[0]) {
							case "application/protobuf":
							case "application/x-protobuf":
							case "application/vnd.google.protobuf":
							case "application/vnd.apple.flatbuffer":
							case "application/grpc":
							case "application/grpc+proto":
							case "application/octet-stream":
								response.body = response.bodyBytes;
								break;
							case undefined:
							default:
								break;
						}
						response.bodyBytes = undefined;
						return response;
					},
					reason => Promise.reject(reason.error),
				),
				new Promise((resolve, reject) => {
					setTimeout(() => {
						reject(new Error(`${Function.name}: 请求超时, 请检查网络后重试`));
					}, resource.timeout);
				}),
			]);
		case "Node.js": {
			const nodeFetch = globalThis.fetch ? globalThis.fetch : require("node-fetch");
			const fetchCookie = globalThis.fetchCookie ? globalThis.fetchCookie : require("fetch-cookie").default;
			const fetch = fetchCookie(nodeFetch);
			// 转换请求参数
			resource.timeout = resource.timeout * 1000;
			resource.redirect = resource.redirection ? "follow" : "manual";
			const { url, ...options } = resource;
			// 发送请求
			return Promise.race([
				await fetch(url, options)
					.then(async response => {
						const bodyBytes = await response.arrayBuffer();
						let headers;
						try {
							headers = response.headers.raw();
						} catch {
							headers = Array.from(response.headers.entries()).reduce((acc, [key, value]) => {
								acc[key] = acc[key] ? [...acc[key], value] : [value];
								return acc;
							}, {});
						}
						return {
							ok: response.ok ?? /^2\d\d$/.test(response.status),
							status: response.status,
							statusCode: response.status,
							statusText: response.statusText,
							body: new TextDecoder("utf-8").decode(bodyBytes),
							bodyBytes: bodyBytes,
							headers: Object.fromEntries(Object.entries(headers).map(([key, value]) => [key, key.toLowerCase() !== "set-cookie" ? value.toString() : value])),
						};
					})
					.catch(error => Promise.reject(error.message)),
				new Promise((resolve, reject) => {
					setTimeout(() => {
						reject(new Error(`${Function.name}: 请求超时, 请检查网络后重试`));
					}, resource.timeout);
				}),
			]);
		}
	}
}


}),
"./src/WebVTT/WebVTT.mjs": 
/*!*******************************!*\
  !*** ./src/WebVTT/WebVTT.mjs ***!
  \*******************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (WebVTT)
});
// refer: https://www.w3.org/TR/webvtt1/
class WebVTT {
	static name = "WebVTT";
	static version = "2.2.0";
	static about = () => console.log(`\n🟧 ${this.name} v${this.version}\n`);

	static parse(vtt = new String, options = { milliseconds: true, timeStamp: true, line: "single", lineBreak: "\n" }) {
		const WebVTTCueRegex = (options.milliseconds) ? /^((?<index>\d+)(\r\n|\r|\n))?(?<timing>(?<startTime>[0-9:.,]+) --> (?<endTime>[0-9:.,]+)) ?(?<settings>.+)?[^](?<text>[\s\S]*)?$/
			: /^((?<index>\d+)(\r\n|\r|\n))?(?<timing>(?<startTime>[0-9:]+)[0-9.,]+ --> (?<endTime>[0-9:]+)[0-9.,]+) ?(?<settings>.+)?[^](?<text>[\s\S]*)?$/
		const Array = vtt.split(/\r\n\r\n|\r\r|\n\n/);
		const Json = { headers: {}, comments: [], style: "", body: [] };

		Array.forEach(item => {
			item = item.trim();
			switch (item.substring(0, 5).trim()) {
				case "WEBVT": {
					let cues = item.split(/\r\n|\r|\n/);
					Json.headers.type = cues.shift();
					Json.headers.options = cues;
					break;
				};
				case "NOTE": {
					Json.comments.push(item);
					break;
				};
				case "STYLE": {
					let cues = item.split(/\r\n|\r|\n/);
					cues.shift();
					Json.style = cues.join(options.lineBreak);
					break;
				};
				default:
					let cue = item.match(WebVTTCueRegex)?.groups;
					if (cue) {
						if (Json.headers?.type !== "WEBVTT") {
							cue.timing = cue?.timing?.replace?.(",", ".");
							cue.startTime = cue?.startTime?.replace?.(",", ".");
							cue.endTime = cue?.endTime?.replace?.(",", ".");
						}
						if (options.timeStamp) {
							let ISOString = cue?.startTime?.replace?.(/(.*)/, "1970-01-01T$1Z")
							cue.timeStamp = (options.milliseconds) ? Date.parse(ISOString) : Date.parse(ISOString) / 1000;
						}
						cue.text = cue?.text?.trimEnd?.();
						switch (options.line) {
							case "single":
								cue.text = cue?.text?.replace?.(/\r\n|\r|\n/, " ");
								break;
							case "multi":
								cue.text = cue?.text?.split?.(/\r\n|\r|\n/);
								break;
						};
						Json.body.push(cue);
					};
					break;
			}
		});
		return Json;
	};

	static stringify(json = { headers: {}, comments: [], style: "", body: [] }, options = { milliseconds: true, timeStamp: true, line: "single", lineBreak: "\n" }) {
		let vtt = [
			json.headers = [json.headers?.type || "", json.headers?.options || ""].flat(Infinity).join(options.lineBreak),
			json.comments = json?.comments?.join?.(options.lineBreak),
			json.style = (json?.style?.length > 0) ? ["STYLE", json.style].join(options.lineBreak) : "",
			json.body = json.body.map(item => {
				if (Array.isArray(item.text)) item.text = item.text.join(options.lineBreak);
				item = `${(item.index) ? item.index + options.lineBreak : ""}${item.timing} ${item?.settings ?? ""}${options.lineBreak}${item.text}`;
				return item;
			}).join(options.lineBreak + options.lineBreak)
		].join(options.lineBreak + options.lineBreak).trim() + options.lineBreak + options.lineBreak;
		return vtt;
	};
};


}),
"./src/XML/XML.mjs": 
/*!*************************!*\
  !*** ./src/XML/XML.mjs ***!
  \*************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (XML)
});
// refer: https://github.com/Peng-YM/QuanX/blob/master/Tools/XMLParser/xml-parser.js
// refer: https://goessner.net/download/prj/jsonxml/
class XML {
	static name = "XML";
	static version = "0.4.2";
	static about = () => console.log(`\n🟧 ${this.name} v${this.version}\n`);
	
	static #ATTRIBUTE_KEY = "@";
	static #CHILD_NODE_KEY = "#";
	static #UNESCAPE = {
		"&amp;": "&",
		"&lt;": "<",
		"&gt;": ">",
		"&apos;": "'",
		"&quot;": '"'
	};
	static #ESCAPE = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"'": "&apos;",
		'"': "&quot;"
	};

	static parse(xml = new String, reviver = "") {
		const UNESCAPE = this.#UNESCAPE;
		const ATTRIBUTE_KEY = this.#ATTRIBUTE_KEY;
		const CHILD_NODE_KEY = this.#CHILD_NODE_KEY;
		const DOM = toDOM(xml);
		let json = fromXML(DOM, reviver);
		return json;

		/***************** Fuctions *****************/
		function toDOM(text) {
			const list = text.replace(/^[ \t]+/gm, "")
				.split(/<([^!<>?](?:'[\S\s]*?'|"[\S\s]*?"|[^'"<>])*|!(?:--[\S\s]*?--|\[[^\[\]'"<>]+\[[\S\s]*?]]|DOCTYPE[^\[<>]*?\[[\S\s]*?]|(?:ENTITY[^"<>]*?"[\S\s]*?")?[\S\s]*?)|\?[\S\s]*?\?)>/);
			const length = list.length;

			// root element
			const root = { children: [] };
			let elem = root;

			// dom tree stack
			const stack = [];

			// parse
			for (let i = 0; i < length;) {
				// text node
				const str = list[i++];
				if (str) appendText(str);

				// child node
				const tag = list[i++];
				if (tag) parseNode(tag);
			}
			return root;
			/***************** Fuctions *****************/
			function parseNode(tag) {
				const tags = tag.split(" ");
				const name = tags.shift();
				const length = tags.length;
				let child = {};
				switch (name[0]) {
					case "/":
						// close tag
						const closed = tag.replace(/^\/|[\s\/].*$/g, "").toLowerCase();
						while (stack.length) {
							const tagName = elem?.name?.toLowerCase?.();
							elem = stack.pop();
							if (tagName === closed) break;
						}
						break;
					case "?":
						// XML declaration
						child.name = name;
						child.raw = tags.join(" ");
						appendChild(child);
						break;
					case "!":
						if (/!\[CDATA\[(.+)\]\]/.test(tag)) {
							// CDATA section
							child.name = "!CDATA";
							//child.raw = tag.slice(9, -2);
							child.raw = tag.match(/!\[CDATA\[(?<raw>.+)\]\]/)?.groups?.raw;
							//appendText(tag.slice(9, -2));
						} else if (/!--(.+)--/.test(tag)) {
							// Comment section
							child.name = "!--";
							child.raw = tag.match(/!--(?<raw>.+)--/)?.groups?.raw;
						} else {
							// Comment section
							child.name = name;
							child.raw = tags.join(" ");
						};
						appendChild(child);
						break;
					default:
						child = openTag(tag);
						appendChild(child);
						switch ((tags?.[length - 1] ?? name).slice(-1)) {
							case "/":
								//child.hasChild = false; // emptyTag
								delete child.children; // emptyTag
								break;
							default:
								switch (name) {
									case "link":
										//child.hasChild = false; // emptyTag
										delete child.children; // emptyTag
										break;
									default:
										stack.push(elem); // openTag
										elem = child;
										break;
								};
								break;
						};
						break;
				};

				function openTag(tag) {
					const elem = { children: [] };
					tag = tag.replace(/\s*\/?$/, "");
					const pos = tag.search(/[\s='"\/]/);
					if (pos < 0) {
						elem.name = tag;
					} else {
						elem.name = tag.substr(0, pos);
						elem.tag = tag.substr(pos);
					}
					return elem;
				};
			};

			function appendText(str) {
				//str = removeSpaces(str);
				str = removeBreakLine(str);
				//str = str?.trim?.();
				if (str) appendChild(unescapeXML(str));

				function removeBreakLine(str) {
					return str?.replace?.(/^(\r\n|\r|\n|\t)+|(\r\n|\r|\n|\t)+$/g, "");
				}
			}

			function appendChild(child) {
				elem.children.push(child);
			}
		};
		/***************** Fuctions *****************/
		function fromPlist(elem, reviver) {
			let object;
			switch (typeof elem) {
				case "string":
				case "undefined":
					object = elem;
					break;
				case "object":
					//default:
					const name = elem.name;
					const children = elem.children;

					object = {};

					switch (name) {
						case "plist":
							let plist = fromPlist(children[0], reviver);
							object = Object.assign(object, plist)
							break;
						case "dict":
							let dict = children.map(child => fromPlist(child, reviver));
							dict = chunk(dict, 2);
							object = Object.fromEntries(dict);
							break;
						case "array":
							if (!Array.isArray(object)) object = [];
							object = children.map(child => fromPlist(child, reviver));
							break;
						case "key":
							const key = children[0];
							object = key;
							break;
						case "true":
						case "false":
							const boolean = name;
							object = JSON.parse(boolean);
							break;
						case "integer":
							const integer = children[0];
							//object = parseInt(integer);
							object = BigInt(integer);
							break;
						case "real":
							const real = children[0];
							//const digits = real.split(".")[1]?.length || 0;
							object = parseFloat(real)//.toFixed(digits);
							break;
						case "string":
							const string = children[0];
							object = string;
							break;
					};
					if (reviver) object = reviver(name || "", object);
					break;
			}
			return object;

			/** 
			 * Chunk Array
			 * @author VirgilClyne
			 * @param {Array} source - source
			 * @param {Number} length - number
			 * @return {Array<*>} target
			 */
			function chunk(source, length) {
				var index = 0, target = [];
				while (index < source.length) target.push(source.slice(index, index += length));
				return target;
			};
		}

		function fromXML(elem, reviver) {
			let object;
			switch (typeof elem) {
				case "string":
				case "undefined":
					object = elem;
					break;
				case "object":
					//default:
					const raw = elem.raw;
					const name = elem.name;
					const tag = elem.tag;
					const children = elem.children;

					if (raw) object = raw;
					else if (tag) object = parseAttribute(tag, reviver);
					else if (!children) object = { [name]: undefined };
					else object = {};

					if (name === "plist") object = Object.assign(object, fromPlist(children[0], reviver));
					else children?.forEach?.((child, i) => {
						if (typeof child === "string") addObject(object, CHILD_NODE_KEY, fromXML(child, reviver), undefined)
						else if (!child.tag && !child.children && !child.raw) addObject(object, child.name, fromXML(child, reviver), children?.[i - 1]?.name)
						else addObject(object, child.name, fromXML(child, reviver), undefined)
					});
					if (children && children.length === 0) addObject(object, CHILD_NODE_KEY, null, undefined);
					/*
					if (Object.keys(object).length === 0) {
						if (elem.name) object[elem.name] = (elem.hasChild === false) ? null : "";
						else object = (elem.hasChild === false) ? null : "";
					}
					*/

					//if (Object.keys(object).length === 0) addObject(object, elem.name, (elem.hasChild === false) ? null : "");
					//if (Object.keys(object).length === 0) object = (elem.hasChild === false) ? undefined : "";
					if (reviver) object = reviver(name || "", object);
					break;
			}
			return object;
			/***************** Fuctions *****************/
			function parseAttribute(tag, reviver) {
				if (!tag) return;
				const list = tag.split(/([^\s='"]+(?:\s*=\s*(?:'[\S\s]*?'|"[\S\s]*?"|[^\s'"]*))?)/);
				const length = list.length;
				let attributes, val;

				for (let i = 0; i < length; i++) {
					let str = removeSpaces(list[i]);
					//let str = removeBreakLine(list[i]);
					//let str = list[i]?.trim?.();
					if (!str) continue;

					if (!attributes) {
						attributes = {};
					}

					const pos = str.indexOf("=");
					if (pos < 0) {
						// bare attribute
						str = ATTRIBUTE_KEY + str;
						val = null;
					} else {
						// attribute key/value pair
						val = str.substr(pos + 1).replace(/^\s+/, "");
						str = ATTRIBUTE_KEY + str.substr(0, pos).replace(/\s+$/, "");

						// quote: foo="FOO" bar='BAR'
						const firstChar = val[0];
						const lastChar = val[val.length - 1];
						if (firstChar === lastChar && (firstChar === "'" || firstChar === '"')) {
							val = val.substr(1, val.length - 2);
						}

						val = unescapeXML(val);
					}
					if (reviver) val = reviver(str, val);

					addObject(attributes, str, val);
				}

				return attributes;

				function removeSpaces(str) {
					//return str && str.replace(/^\s+|\s+$/g, "");
					return str?.trim?.();
				}
			}

			function addObject(object, key, val, prevKey = key) {
				if (typeof val === "undefined") return;
				else {
					const prev = object[prevKey];
					//const curr = object[key];
					if (Array.isArray(prev)) prev.push(val);
					else if (prev) object[prevKey] = [prev, val];
					else object[key] = val;
				}
			}
		}

		function unescapeXML(str) {
			return str.replace(/(&(?:lt|gt|amp|apos|quot|#(?:\d{1,6}|x[0-9a-fA-F]{1,5}));)/g, function (str) {
				if (str[1] === "#") {
					const code = (str[2] === "x") ? parseInt(str.substr(3), 16) : parseInt(str.substr(2), 10);
					if (code > -1) return String.fromCharCode(code);
				}
				return UNESCAPE[str] || str;
			});
		}

	};

	static stringify(json = new Object, tab = "") {
		const ESCAPE = this.#ESCAPE;
		const ATTRIBUTE_KEY = this.#ATTRIBUTE_KEY;
		const CHILD_NODE_KEY = this.#CHILD_NODE_KEY;
		let XML = "";
		for (let elem in json) XML += toXml(json[elem], elem, "");
		XML = tab ? XML.replace(/\t/g, tab) : XML.replace(/\t|\n/g, "");
		return XML;
		/***************** Fuctions *****************/
		function toXml(Elem, Name, Ind) {
			let xml = "";
			switch (typeof Elem) {
				case "object":
					if (Array.isArray(Elem)) {
						xml = Elem.reduce(
							(prevXML, currXML) => prevXML += `${Ind}${toXml(currXML, Name, `${Ind}\t`)}\n`,
							""
						);
					} else {
						let attribute = "";
						let hasChild = false;
						for (let name in Elem) {
							if (name[0] === ATTRIBUTE_KEY) {
								attribute += ` ${name.substring(1)}=\"${Elem[name].toString()}\"`;
								delete Elem[name];
							} else if (Elem[name] === undefined) Name = name;
							else hasChild = true;
						}
						xml += `${Ind}<${Name}${attribute}${(hasChild || Name === "link") ? "" : "/"}>`;

						if (hasChild) {
							if (Name === "plist") xml += toPlist(Elem, Name, `${Ind}\t`);
							else {
								for (let name in Elem) {
									switch (name) {
										case CHILD_NODE_KEY:
											xml += Elem[name] ?? "";
											break;
										default:
											xml += toXml(Elem[name], name, `${Ind}\t`);
											break;
									};
								};
							};
							xml += (xml.slice(-1) === "\n" ? Ind : "") + `</${Name}>`;
						};
					};
					break;
				case "string":
					switch (Name) {
						case "?xml":
							xml += `${Ind}<${Name} ${Elem.toString()}>`;
							break;
						case "?":
							xml += `${Ind}<${Name}${Elem.toString()}${Name}>`;
							break;
						case "!--":
							xml += `${Ind}<!--${Elem.toString()}-->`;
							break;
						case "!DOCTYPE":
							xml += `${Ind}<${Name} ${Elem.toString()}>`;
							break;
						case "!CDATA":
							xml += `${Ind}<![CDATA[${Elem.toString()}]]>`;
							break;
						case CHILD_NODE_KEY:
							xml += Elem;
							break;
						default:
							xml += `${Ind}<${Name}>${Elem.toString()}</${Name}>`;
							break;
					};
					break;
				case "undefined":
					xml += Ind + `<${Name.toString()}/>`;
					break;
			};
			return xml;
		};

		function toPlist(Elem, Name, Ind) {
			let plist = "";
			switch (typeof Elem) {
				case "boolean":
					plist = `${Ind}<${Elem.toString()}/>`;
					break;
				case "number":
					plist = `${Ind}<real>${Elem.toString()}</real>`;
					break;
				case "bigint":
					plist = `${Ind}<integer>${Elem.toString()}</integer>`;
					break;
				case "string":
					plist = `${Ind}<string>${Elem.toString()}</string>`;
					break;
				case "object":
					let array = "";
					if (Array.isArray(Elem)) {
						for (var i = 0, n = Elem.length; i < n; i++) array += `${Ind}${toPlist(Elem[i], Name, `${Ind}\t`)}`;
						plist = `${Ind}<array>${array}${Ind}</array>`;
					} else {
						let dict = "";
						Object.entries(Elem).forEach(([key, value]) => {
							dict += `${Ind}<key>${key}</key>`;
							dict += toPlist(value, key, Ind);
						});
						plist = `${Ind}<dict>${dict}${Ind}</dict>`;
					};
					break;
			}
			return plist;
		};
	};
}


}),
"./src/class/Composite.mjs": 
/*!*********************************!*\
  !*** ./src/class/Composite.mjs ***!
  \*********************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Composite)
});
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");


/**
 * Composite Subtitles
 * @param {Object} Sub1 - Sub1
 * @param {Object} Sub2 - Sub2
 * @param {Array} Kind - options = ["asr", "captions"]
 * @param {Number} Offset - Offset
 * @param {Number} Tolerance - Tolerance
 * @param {Array} Position - Position = ["Forward", "Reverse"]
 * @return {String} DualSub
 */
class Composite {
	constructor(options = {}) {
		this.Name = "Composite";
		this.Version = "1.0.2";
		this.Offset = 0;
		this.Tolerance = 0;
		this.Position = "Forward";
		Object.assign(this, options);
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log(`🟧 ${this.Name} v${this.Version}`);
	}

	JSON(Sub1 = {}, Sub2 = {}, Kind = "captions", Offset = this.Offset, Tolerance = this.Tolerance, Position = this.Position) {
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Composite JSON Subtitles", `Offset:${Offset}`, `Tolerance:${Tolerance}`, `Position:${Position}`);
		//let DualSub = Position.includes("Reverse") ? Sub2 : Sub1
		let DualSub = Sub1;
		//Console.debug(`let DualSub内容: ${JSON.stringify(DualSub)}`);
		// 有序数列 用不着排序
		//FirstSub.body.sort((x, y) => x - y);
		//SecondSub.body.sort((x, y) => x - y);
		let index0 = 0,
			index1 = 0,
			index2 = 0;
		// 双指针法查找两个数组中的相同元素
		const length1 = Sub1?.events?.length,
			length2 = Sub2?.events?.length;
		switch (Kind) {
			case "asr":
				// 自动生成字幕转普通字幕
				_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("DualSub是自动生成字幕");
				(index0 = 1), (index1 = 1), (index2 = 1);
				Sub1.events = Sub1.events.map(event => {
					if (event?.segs) {
						if (Array.isArray(event?.segs)) event.segs = [{ utf8: event.segs.map(seg => seg.utf8).join("") }];
					}
					delete event.wWinId;
					return event;
				});
				Sub2.events = Sub2.events.map(event => {
					if (event?.segs) {
						if (Array.isArray(event?.segs)) event.segs = [{ utf8: event.segs.map(seg => seg.utf8).join("") }];
					}
					delete event.wWinId;
					return event;
				});
			//break; 不要break，连续处理
			case "captions":
			default:
				// 处理普通字幕
				while (index1 < length1 && index2 < length2) {
					//Console.debug(`index1/length1: ${index1}/${length1}, index2/length2: ${index2}/${length2}`);
					const timeStamp1 = Sub1.events[index1].tStartMs,
						timeStamp2 = Sub2.events[index2].tStartMs;
					//Console.debug(`timeStamp1: ${timeStamp1}, timeStamp2: ${timeStamp2}`);
					const timeStamp1Next = Sub1.events[index1 + 1]?.tStartMs ?? timeStamp1,
						timeStamp2Next = Sub2.events[index2 + 1]?.tStartMs ?? timeStamp2;
					if (Math.abs(timeStamp1 - timeStamp2) <= Tolerance) {
						//index0 = (Position === "Reverse") ? index2 : index1;
						index0 = index1;
						// 处理普通字幕
						const text1 = Sub1.events[index1]?.segs?.[0].utf8 ?? "",
							text2 = Sub2.events[index2]?.segs?.[0].utf8 ?? "";
						//Console.debug(`text1: ${text1}, text2: ${text2}`);
						DualSub.events[index0].segs = [{ utf8: (Position === "Reverse" ? `${text2}\n${text1}` : `${text1}\n${text2}`).trim() }];
						//Console.debug(` DualSub.events[index0].segs[0].utf8: ${DualSub.events[index0].segs[0].utf8}`);
						//DualSub.body[index0].tStartMs = (Position === "Reverse") ? timeStamp2 : timeStamp1;
						//DualSub.body[index0].index = (Position === "Reverse") ? index2 : index1;
					}
					if (Math.abs(timeStamp1Next - timeStamp2Next) <= Tolerance) {
						index1++;
						index2++;
					} else {
						if (timeStamp2 > timeStamp1) index1++;
						else if (timeStamp1 > timeStamp2) index2++;
						else {
							index1++;
							index2++;
						}
					}
				}
		}
		//Console.debug(`DualSub: ${JSON.stringify(DualSub)}`);
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Composite JSON Subtitles");
		return DualSub;
	}

	timedText(Sub1 = {}, Sub2 = {}, Kind = "captions", Offset = this.Offset, Tolerance = this.Tolerance, Position = this.Position) {
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Composite timedText Subtitles", `Offset: ${Offset}`, `Tolerance: ${Tolerance}`, `Position: ${Position}`);
		//let DualSub = Position.includes("Reverse") ? Sub2 : Sub1
		let DualSub = Sub1;
		//Console.debug(`let DualSub内容: ${JSON.stringify(DualSub)}`);
		// 有序数列 用不着排序
		//FirstSub.body.sort((x, y) => x - y);
		//SecondSub.body.sort((x, y) => x - y);
		let index0 = 0,
			index1 = 0,
			index2 = 0;
		// 双指针法查找两个数组中的相同元素
		const length1 = Sub1?.timedtext?.body?.p?.length,
			length2 = Sub2?.timedtext?.body?.p?.length;
		switch (Kind) {
			case "asr":
				// 自动生成字幕转普通字幕
				_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("DualSub是自动生成字幕");
				DualSub.timedtext.head.wp[1]["@rc"] = "1";
				Sub1.timedtext.body.p = Sub1.timedtext.body.p.map(para => {
					if (para?.s) {
						if (Array.isArray(para?.s)) para["#"] = para?.s.map(seg => seg["#"]).join("");
						else para["#"] = para.s?.["#"] ?? "";
						// biome-ignore lint/performance/noDelete: <explanation>
						delete para.s;
					}
					return para;
				});
				Sub2.timedtext.body.p = Sub2.timedtext.body.p.map(para => {
					if (para?.s) {
						if (Array.isArray(para?.s)) para["#"] = para?.s.map(seg => seg["#"]).join("");
						else para["#"] = para.s?.["#"] ?? "";
						// biome-ignore lint/performance/noDelete: <explanation>
						delete para.s;
					}
					return para;
				});
			//break; 不要break，连续处理
			case "captions":
			default:
				// 处理普通字幕
				while (index1 < length1 && index2 < length2) {
					//Console.debug(`index1/length1: ${index1}/${length1}, index2/length2: ${index2}/${length2}`);
					const timeStamp1 = parseInt(Sub1.timedtext.body.p[index1]["@t"], 10),
						timeStamp2 = parseInt(Sub2.timedtext.body.p[index2]["@t"], 10);
					//Console.debug(`timeStamp1: ${timeStamp1}, timeStamp2: ${timeStamp2}`);
					const timeStamp1Next = parseInt(Sub1.timedtext.body.p[index1 + 1]?.["@t"] ?? timeStamp1, 10),
						timeStamp2Next = parseInt(Sub2.timedtext.body.p[index2 + 1]?.["@t"] ?? timeStamp2, 10);
					if (Math.abs(timeStamp1 - timeStamp2) <= Tolerance) {
						//index0 = (Position === "Reverse") ? index2 : index1;
						index0 = index1;
						// 处理普通字幕
						const text1 = Sub1.timedtext.body.p[index1]?.["#"] ?? "",
							text2 = Sub2.timedtext.body.p[index2]?.["#"] ?? "";
						//Console.debug(`text1: ${text1}, text2: ${text2}`);
						DualSub.timedtext.body.p[index0]["#"] = (Position === "Reverse" ? `${text2}&#x000A;${text1}` : `${text1}&#x000A;${text2}`).trim();
						//Console.debug(`DualSub.timedtext.body.p[index0]["#"]: ${DualSub.timedtext.body.p[index0]["#"]}`);
						//DualSub.timedtext.body.p[index0]["@t"] = (Position === "Reverse") ? timeStamp2 : timeStamp1;
						//DualSub.timedtext.body.p[index0].index = (Position === "Reverse") ? index2 : index1;
					}
					if (Math.abs(timeStamp1Next - timeStamp2Next) <= Tolerance) {
						index1++;
						index2++;
					} else {
						if (timeStamp2 > timeStamp1) index1++;
						else if (timeStamp1 > timeStamp2) index2++;
						else {
							index1++;
							index2++;
						}
					}
				}
				break;
		}
		//Console.debug(`DualSub: ${JSON.stringify(DualSub)}`);
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Composite timedText Subtitles");
		return DualSub;
	}

	webVTT(Sub1 = {}, Sub2 = {}, Offset = this.Offset, Tolerance = this.Tolerance, Position = this.Position) {
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Composite webVTT Subtitles", `Offset: ${Offset}`, `Tolerance: ${Tolerance}`, `Position: ${Position}`);
		//let DualSub = Position.includes("Reverse") ? Sub2 : Sub1
		let DualSub = Sub1;
		//Console.debug(`let DualSub内容: ${JSON.stringify(DualSub)}`);
		// 有序数列 用不着排序
		//FirstSub.body.sort((x, y) => x - y);
		//SecondSub.body.sort((x, y) => x - y);
		let index0 = 0,
			index1 = 0,
			index2 = 0;
		// 双指针法查找两个数组中的相同元素
		const length1 = Sub1?.body?.length,
			length2 = Sub2?.body?.length;
		while (index1 < length1 && index2 < length2) {
			//Console.debug(`index1/length1: ${index1}/${length1}, index2/length2: ${index2}/${length2}`);
			const timeStamp1 = Sub1.body[index1].timeStamp,
				timeStamp2 = Sub2.body[index2].timeStamp;
			//Console.debug(`timeStamp1: ${timeStamp1}, timeStamp2: ${timeStamp2}`);
			const timeStamp1Next = Sub1.body[index1 + 1]?.timeStamp ?? timeStamp1,
				timeStamp2Next = Sub2.body[index2 + 1]?.timeStamp ?? timeStamp2;
			// 处理普通字幕
			const text1 = Sub1.body[index1]?.text ?? "",
				text2 = Sub2.body[index2]?.text ?? "";
			//Console.debug(`text1: ${text1}, text2: ${text2}`);
			if (Math.abs(timeStamp1 - timeStamp2) <= Tolerance) {
				//index0 = (Position === "Reverse") ? index2 : index1;
				index0 = index1;
				// 处理普通字幕
				DualSub.body[index0].text = (Position === "Reverse" ? `${text2}\n${text1}` : `${text1}\n${text2}`).trim();
				//Console.debug(`index0: ${index0}, text: ${DualSub.body[index0].text}`);
				//DualSub.body[index0].timeStamp = (Position === "Reverse") ? timeStamp2 : timeStamp1;
				//DualSub.body[index0].index = (Position === "Reverse") ? index2 : index1;
			}
			if (Math.abs(timeStamp1Next - timeStamp2Next) <= Tolerance) {
				index1++;
				index2++;
			} else {
				if (timeStamp2 > timeStamp1) index1++;
				else if (timeStamp1 > timeStamp2) index2++;
				else {
					index1++;
					index2++;
				}
			}
		}
		//Console.debug(`DualSub: ${JSON.stringify(DualSub)}`);
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Composite webVTT Subtitles");
		return DualSub;
	}

	spotifyLyric(Lyric1 = [], Lyric2 = [], Offset = this.Offset, Tolerance = this.Tolerance, Position = this.Position) {
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Composite Spotify Lyrics", `Offset: ${Offset}`, `Tolerance: ${Tolerance}`, `Position: ${Position}`);
		//let Lyric = Position.includes("Reverse") ? Lyric2 : Lyric1
		let Lyric = Lyric1;
		//Console.debug(`let Lyric: ${JSON.stringify(Lyric)}`);
		// 有序数列 用不着排序
		//FirstSub.body.sort((x, y) => x - y);
		//SecondSub.body.sort((x, y) => x - y);
		let index0 = 0,
			index1 = 0,
			index2 = 0;
		// 双指针法查找两个数组中的相同元素
		const length1 = Lyric1?.length,
			length2 = Lyric2?.length;
		while (index1 < length1 && index2 < length2) {
			//Console.debug(`index1/length1: ${index1}/${length1}, index2/length2: ${index2}/${length2}`);
			const timeStamp1 = Lyric1[index1].startTimeMs,
				timeStamp2 = Lyric2[index2].startTimeMs + Offset;
			//Console.debug(`timeStamp1: ${timeStamp1}, timeStamp2: ${timeStamp2}`);
			const timeStamp1Next = Lyric1[index1 + 1]?.startTimeMs ?? timeStamp1,
				timeStamp2Next = Lyric2[index2 + 1]?.startTimeMs + this.Offset ?? timeStamp2;
			// 处理普通字幕
			const text1 = Lyric1[index1]?.words ?? "",
				text2 = Lyric2[index2]?.words ?? "";
			//Console.debug(`text1: ${text1}, text2: ${text2}`);
			if (Math.abs(timeStamp1 - timeStamp2) <= Tolerance) {
				//index0 = (Position === "Reverse") ? index2 : index1;
				index0 = index1;
				// 处理普通字幕
				Lyric[index0].words = (Position === "Reverse" ? `${text2}\n${text1}` : `${text1}\n${text2}`).trim();
				Lyric[index0].owords = text1.trim();
				Lyric[index0].twords = text2.trim();
				//Console.debug(`index0: ${index0}, words: ${Lyric[index0].words}`);
				//Lyric[index0].startTimeMs = (Position === "Reverse") ? timeStamp2 : timeStamp1;
				//Lyric[index0].index = (Position === "Reverse") ? index2 : index1;
			}
			if (Math.abs(timeStamp1Next - timeStamp2Next) <= Tolerance) {
				index1++;
				index2++;
			} else {
				if (timeStamp2 > timeStamp1) index1++;
				else if (timeStamp1 > timeStamp2) index2++;
				else {
					index1++;
					index2++;
				}
			}
		}
		//Console.debug(`Lyric: ${JSON.stringify(Lyric)}`);
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Composite Spotify Lyrics");
		return Lyric;
	}
}


}),
"./src/function/constructSubtitlesQueue.mjs": 
/*!**************************************************!*\
  !*** ./src/function/constructSubtitlesQueue.mjs ***!
  \**************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (constructSubtitlesQueue)
});
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");


/**
 * Construct Subtitles Queue
 * @author VirgilClyne
 * @param {String} fileName - Request URL
 * @param {Array} VTTs1 - Primary (Source) Language Subtitles Array
 * @param {Array} VTTs2 - Second (Target) Language Subtitles Array
 * @return {Array<*>} Subtitles Requests Queue
 */
function constructSubtitlesQueue(request, fileName, VTTs1 = [], VTTs2 = []) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Construct Subtitles Queue", `fileName: ${fileName}`);
	const requests = [];
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`VTTs1.length: ${VTTs1.length}`, `VTTs2.length: ${VTTs2.length}`);
	//Console.debug(`VTTs1: ${JSON.stringify(VTTs1)}`, `VTTs2.length: ${JSON.stringify(VTTs2)}`);
	// 查询当前字幕在原字幕队列中的位置
	const Index1 = VTTs1.findIndex(item => item?.includes(fileName));
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`Index1: ${Index1}`);
	switch (VTTs2.length) {
		case 0: // 长度为0，无须计算
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("长度为 0");
			break;
		case 1: {
			// 长度为1，无须计算
			log("长度为 1");
			const request2 = {
				url: VTTs2[0],
				headers: request.headers,
			};
			requests.push(request2);
			break;
		}
		case VTTs1.length: {
			// 长度相等，一一对应，无须计算
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("长度相等");
			const request2 = {
				url: VTTs2[Index1],
				headers: request.headers,
			};
			requests.push(request2);
			break;
		}
		default: {
			// 长度不等，需要计算
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("长度不等，需要计算");
			// 计算当前字幕在原字幕队列中的百分比
			const Position1 = (Index1 + 1) / VTTs1.length; // 从 0 开始计数，所以要加 1
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`Position1: ${Position1}`, `Index2: ${Index1}/${VTTs1.length}`);
			// 根据百分比计算当前字幕在新字幕队列中的位置
			//let Index2 = VTTs2.findIndex(item => item.includes(fileName));
			const Index2 = Math.round(Position1 * VTTs2.length - 1); // 从 0 开始计数，所以要减 1
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`Position2: ${Position1}`, `Index2: ${Index2}/${VTTs2.length}`);
			// 获取两字幕队列长度差值
			const diffLength = Math.abs(VTTs2.length - VTTs1.length);
			// 获取当前字幕在新字幕队列中的前后1个字幕
			//const BeginIndex = (Index2 - 1 < 0) ? 0 : Index2 - 1, EndIndex = Index2 + 1;
			const BeginIndex = Math.min(Index1, Index2);
			const EndIndex = Math.max(Index1, Index2);
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`diffLength: ${diffLength}`, `BeginIndex: ${BeginIndex}`, `EndIndex: ${EndIndex}`);
			const nearlyVTTs = VTTs2.slice(Math.max(0, BeginIndex - diffLength), Math.max(EndIndex, EndIndex + diffLength) + 1); // slice 不取 EndIndex 本身
			//const nearlyVTTs = VTTs2.slice(BeginIndex, EndIndex + 1); // slice 不取 EndIndex 本身
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`nearlyVTTs: ${JSON.stringify(nearlyVTTs)}`);
			nearlyVTTs.forEach(url => {
				const request2 = {
					url: url,
					headers: request.headers,
				};
				requests.push(request2);
			});
			/*
			requests = nearlyVTTs.map(url => {
				let _request = {
					"url": url,
					"headers": request.headers
				};
				return _request;
			});
			*/
			break;
		}
	}
	//Console.debug(`requests: ${JSON.stringify(requests)}`);
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Construct Subtitles Queue");
	return requests;
}


}),
"./src/function/database.mjs": 
/*!***********************************!*\
  !*** ./src/function/database.mjs ***!
  \***********************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	Universal: {
		Settings: {
			Types: ["Official", "Translate"],
			Languages: ["AUTO", "ZH"],
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
				"YUE-HK": ["yue-Hant", "yue", "zh-HK", "zho"],
			},
		},
	},
	YouTube: {
		Settings: {
			Type: "Official",
			Types: ["Translate", "External"],
			Languages: ["AUTO", "ZH"],
			AutoCC: true,
			ShowOnly: false,
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
				"ZH-TW": "zh-TW",
			},
			translationLanguages: {
				DESKTOP: [
					{ languageCode: "sq", languageName: { simpleText: "Shqip - 阿尔巴尼亚语" } },
					{ languageCode: "ak", languageName: { simpleText: "Ákán - 阿肯语" } },
					{ languageCode: "ar", languageName: { simpleText: "العربية - 阿拉伯语" } },
					{ languageCode: "am", languageName: { simpleText: "አማርኛ - 阿姆哈拉语" } },
					{ languageCode: "as", languageName: { simpleText: "অসমীয়া - 阿萨姆语" } },
					{ languageCode: "az", languageName: { simpleText: "آذربايجان ديلی - 阿塞拜疆语" } },
					{ languageCode: "ee", languageName: { simpleText: "Èʋegbe - 埃维语" } },
					{ languageCode: "ay", languageName: { simpleText: "Aymar aru - 艾马拉语" } },
					{ languageCode: "ga", languageName: { simpleText: "Gaeilge - 爱尔兰语" } },
					{ languageCode: "et", languageName: { simpleText: "Eesti - 爱沙尼亚语" } },
					{ languageCode: "or", languageName: { simpleText: "ଓଡ଼ିଆ - 奥里亚语" } },
					{ languageCode: "om", languageName: { simpleText: "Afaan Oromoo - 奥罗莫语" } },
					{ languageCode: "eu", languageName: { simpleText: "Euskara - 巴斯克语" } },
					{ languageCode: "be", languageName: { simpleText: "Беларуская - 白俄罗斯语" } },
					{ languageCode: "bg", languageName: { simpleText: "Български - 保加利亚语" } },
					{ languageCode: "nso", languageName: { simpleText: "Sesotho sa Leboa - 北索托语" } },
					{ languageCode: "is", languageName: { simpleText: "Íslenska - 冰岛语" } },
					{ languageCode: "pl", languageName: { simpleText: "Polski - 波兰语" } },
					{ languageCode: "bs", languageName: { simpleText: "Bosanski - 波斯尼亚语" } },
					{ languageCode: "fa", languageName: { simpleText: "فارسی - 波斯语" } },
					{ languageCode: "bho", languageName: { simpleText: "भोजपुरी - 博杰普尔语" } },
					{ languageCode: "ts", languageName: { simpleText: "Xitsonga - 聪加语" } },
					{ languageCode: "tt", languageName: { simpleText: "Татарча - 鞑靼语" } },
					{ languageCode: "da", languageName: { simpleText: "Dansk - 丹麦语" } },
					{ languageCode: "de", languageName: { simpleText: "Deutsch - 德语" } },
					{ languageCode: "dv", languageName: { simpleText: "ދިވެހިބަސް - 迪维希语" } },
					{ languageCode: "ru", languageName: { simpleText: "Русский - 俄语" } },
					{ languageCode: "fr", languageName: { simpleText: "français - 法语" } },
					{ languageCode: "sa", languageName: { simpleText: "संस्कृतम् - 梵语" } },
					{ languageCode: "fil", languageName: { simpleText: "Filipino - 菲律宾语" } },
					{ languageCode: "fi", languageName: { simpleText: "suomi - 芬兰语" } },
					{ languageCode: "km", languageName: { simpleText: "ភាសាខ្មែរ - 高棉语" } },
					{ languageCode: "ka", languageName: { simpleText: "ქართული - 格鲁吉亚语" } },
					{ languageCode: "gu", languageName: { simpleText: "ગુજરાતી - 古吉拉特语" } },
					{ languageCode: "gn", languageName: { simpleText: "Avañe'ẽ - 瓜拉尼语" } },
					{ languageCode: "kk", languageName: { simpleText: "Қазақ тілі - 哈萨克语" } },
					{ languageCode: "ht", languageName: { simpleText: "Kreyòl ayisyen - 海地克里奥尔语" } },
					{ languageCode: "ko", languageName: { simpleText: "한국어 - 韩语" } },
					{ languageCode: "ha", languageName: { simpleText: "هَوُسَ - 豪萨语" } },
					{ languageCode: "nl", languageName: { simpleText: "Nederlands - 荷兰语" } },
					{ languageCode: "gl", languageName: { simpleText: "Galego - 加利西亚语" } },
					{ languageCode: "ca", languageName: { simpleText: "català - 加泰罗尼亚语" } },
					{ languageCode: "cs", languageName: { simpleText: "čeština - 捷克语" } },
					{ languageCode: "kn", languageName: { simpleText: "ಕನ್ನಡ - 卡纳达语" } },
					{ languageCode: "ky", languageName: { simpleText: "кыргыз тили - 吉尔吉斯语" } },
					{ languageCode: "xh", languageName: { simpleText: "isiXhosa - 科萨语" } },
					{ languageCode: "co", languageName: { simpleText: "corsu - 科西嘉语" } },
					{ languageCode: "hr", languageName: { simpleText: "hrvatski - 克罗地亚语" } },
					{ languageCode: "qu", languageName: { simpleText: "Runa Simi - 克丘亚语" } },
					{ languageCode: "ku", languageName: { simpleText: "Kurdî - 库尔德语" } },
					{ languageCode: "la", languageName: { simpleText: "lingua latīna - 拉丁语" } },
					{ languageCode: "lv", languageName: { simpleText: "latviešu valoda - 拉脱维亚语" } },
					{ languageCode: "lo", languageName: { simpleText: "ພາສາລາວ - 老挝语" } },
					{ languageCode: "lt", languageName: { simpleText: "lietuvių kalba - 立陶宛语" } },
					{ languageCode: "ln", languageName: { simpleText: "lingála - 林加拉语" } },
					{ languageCode: "lg", languageName: { simpleText: "Luganda - 卢干达语" } },
					{ languageCode: "lb", languageName: { simpleText: "Lëtzebuergesch - 卢森堡语" } },
					{ languageCode: "rw", languageName: { simpleText: "Kinyarwanda - 卢旺达语" } },
					{ languageCode: "ro", languageName: { simpleText: "Română - 罗马尼亚语" } },
					{ languageCode: "mt", languageName: { simpleText: "Malti - 马耳他语" } },
					{ languageCode: "mr", languageName: { simpleText: "मराठी - 马拉地语" } },
					{ languageCode: "mg", languageName: { simpleText: "Malagasy - 马拉加斯语" } },
					{ languageCode: "ml", languageName: { simpleText: "മലയാളം - 马拉雅拉姆语" } },
					{ languageCode: "ms", languageName: { simpleText: "bahasa Melayu - 马来语" } },
					{ languageCode: "mk", languageName: { simpleText: "македонски јазик - 马其顿语" } },
					{ languageCode: "mi", languageName: { simpleText: "te reo Māori - 毛利语" } },
					{ languageCode: "mn", languageName: { simpleText: "Монгол хэл - 蒙古语" } },
					{ languageCode: "bn", languageName: { simpleText: "বাংলা - 孟加拉语" } },
					{ languageCode: "my", languageName: { simpleText: "ဗမာစာ - 缅甸语" } },
					{ languageCode: "hmn", languageName: { simpleText: "Hmoob - 苗语" } },
					{ languageCode: "af", languageName: { simpleText: "Afrikaans - 南非荷兰语" } },
					{ languageCode: "st", languageName: { simpleText: "Sesotho - 南索托语" } },
					{ languageCode: "ne", languageName: { simpleText: "नेपाली - 尼泊尔语" } },
					{ languageCode: "no", languageName: { simpleText: "Norsk - 挪威语" } },
					{ languageCode: "pa", languageName: { simpleText: "ਪੰਜਾਬੀ - 旁遮普语" } },
					{ languageCode: "pt", languageName: { simpleText: "Português - 葡萄牙语" } },
					{ languageCode: "ps", languageName: { simpleText: "پښتو - 普什图语" } },
					{ languageCode: "ny", languageName: { simpleText: "chiCheŵa - 齐切瓦语" } },
					{ languageCode: "ja", languageName: { simpleText: "日本語 - 日语" } },
					{ languageCode: "sv", languageName: { simpleText: "Svenska - 瑞典语" } },
					{ languageCode: "sm", languageName: { simpleText: "Gagana fa'a Samoa - 萨摩亚语" } },
					{ languageCode: "sr", languageName: { simpleText: "Српски језик - 塞尔维亚语" } },
					{ languageCode: "si", languageName: { simpleText: "සිංහල - 僧伽罗语" } },
					{ languageCode: "sn", languageName: { simpleText: "ChiShona - 绍纳语" } },
					{ languageCode: "eo", languageName: { simpleText: "Esperanto - 世界语" } },
					{ languageCode: "sk", languageName: { simpleText: "slovenčina - 斯洛伐克语" } },
					{ languageCode: "sl", languageName: { simpleText: "slovenščina - 斯洛文尼亚语" } },
					{ languageCode: "sw", languageName: { simpleText: "Kiswahili - 斯瓦希里语" } },
					{ languageCode: "gd", languageName: { simpleText: "Gàidhlig - 苏格兰盖尔语" } },
					{ languageCode: "ceb", languageName: { simpleText: "Binisaya - 宿务语" } },
					{ languageCode: "so", languageName: { simpleText: "Soomaaliga - 索马里语" } },
					{ languageCode: "tg", languageName: { simpleText: "тоҷикӣ - 塔吉克语" } },
					{ languageCode: "te", languageName: { simpleText: "తెలుగు - 泰卢固语" } },
					{ languageCode: "ta", languageName: { simpleText: "தமிழ் - 泰米尔语" } },
					{ languageCode: "th", languageName: { simpleText: "ไทย - 泰语" } },
					{ languageCode: "ti", languageName: { simpleText: "ትግርኛ - 提格利尼亚语" } },
					{ languageCode: "tr", languageName: { simpleText: "Türkçe - 土耳其语" } },
					{ languageCode: "tk", languageName: { simpleText: "Türkmen - 土库曼语" } },
					{ languageCode: "cy", languageName: { simpleText: "Cymraeg - 威尔士语" } },
					{ languageCode: "ug", languageName: { simpleText: "ئۇيغۇرچە - 维吾尔语" } },
					{ languageCode: "und", languageName: { simpleText: "Unknown - 未知语言" } },
					{ languageCode: "ur", languageName: { simpleText: "اردو - 乌尔都语" } },
					{ languageCode: "uk", languageName: { simpleText: "українська - 乌克兰语" } },
					{ languageCode: "uz", languageName: { simpleText: "O'zbek - 乌兹别克语" } },
					{ languageCode: "es", languageName: { simpleText: "Español - 西班牙语" } },
					{ languageCode: "fy", languageName: { simpleText: "Frysk - 西弗里西亚语" } },
					{ languageCode: "iw", languageName: { simpleText: "עברית - 希伯来语" } },
					{ languageCode: "el", languageName: { simpleText: "Ελληνικά - 希腊语" } },
					{ languageCode: "haw", languageName: { simpleText: "ʻŌlelo Hawaiʻi - 夏威夷语" } },
					{ languageCode: "sd", languageName: { simpleText: "سنڌي - 信德语" } },
					{ languageCode: "hu", languageName: { simpleText: "magyar - 匈牙利语" } },
					{ languageCode: "su", languageName: { simpleText: "Basa Sunda - 巽他语" } },
					{ languageCode: "hy", languageName: { simpleText: "հայերեն - 亚美尼亚语" } },
					{ languageCode: "ig", languageName: { simpleText: "Igbo - 伊博语" } },
					{ languageCode: "it", languageName: { simpleText: "Italiano - 意大利语" } },
					{ languageCode: "yi", languageName: { simpleText: "ייִדיש - 意第绪语" } },
					{ languageCode: "hi", languageName: { simpleText: "हिन्दी - 印地语" } },
					{ languageCode: "id", languageName: { simpleText: "Bahasa Indonesia - 印度尼西亚语" } },
					{ languageCode: "en", languageName: { simpleText: "English - 英语" } },
					{ languageCode: "yo", languageName: { simpleText: "Yorùbá - 约鲁巴语" } },
					{ languageCode: "vi", languageName: { simpleText: "Tiếng Việt - 越南语" } },
					{ languageCode: "jv", languageName: { simpleText: "Basa Jawa - 爪哇语" } },
					{ languageCode: "zh-Hant", languageName: { simpleText: "中文（繁體）- 中文（繁体）" } },
					{ languageCode: "zh-Hans", languageName: { simpleText: "中文（简体）" } },
					{ languageCode: "zu", languageName: { simpleText: "isiZulu - 祖鲁语" } },
					{ languageCode: "kri", languageName: { simpleText: "Krìì - 克里语" } },
				],
				MOBILE: [
					{ languageCode: "sq", languageName: { runs: [{ text: "Shqip - 阿尔巴尼亚语" }] } },
					{ languageCode: "ak", languageName: { runs: [{ text: "Ákán - 阿肯语" }] } },
					{ languageCode: "ar", languageName: { runs: [{ text: "العربية - 阿拉伯语" }] } },
					{ languageCode: "am", languageName: { runs: [{ text: "አማርኛ - 阿姆哈拉语" }] } },
					{ languageCode: "as", languageName: { runs: [{ text: "অসমীয়া - 阿萨姆语" }] } },
					{ languageCode: "az", languageName: { runs: [{ text: "Azərbaycanca - 阿塞拜疆语" }] } },
					{ languageCode: "ee", languageName: { runs: [{ text: "Eʋegbe - 埃维语" }] } },
					{ languageCode: "ay", languageName: { runs: [{ text: "Aymar - 艾马拉语" }] } },
					{ languageCode: "ga", languageName: { runs: [{ text: "Gaeilge - 爱尔兰语" }] } },
					{ languageCode: "et", languageName: { runs: [{ text: "Eesti - 爱沙尼亚语" }] } },
					{ languageCode: "or", languageName: { runs: [{ text: "ଓଡ଼ିଆ - 奥里亚语" }] } },
					{ languageCode: "om", languageName: { runs: [{ text: "Oromoo - 奥罗莫语" }] } },
					{ languageCode: "eu", languageName: { runs: [{ text: "Euskara - 巴斯克语" }] } },
					{ languageCode: "be", languageName: { runs: [{ text: "Беларуская - 白俄罗斯语" }] } },
					{ languageCode: "bg", languageName: { runs: [{ text: "Български - 保加利亚语" }] } },
					{ languageCode: "nso", languageName: { runs: [{ text: "Sesotho sa Leboa - 北索托语" }] } },
					{ languageCode: "is", languageName: { runs: [{ text: "Íslenska - 冰岛语" }] } },
					{ languageCode: "pl", languageName: { runs: [{ text: "Polski - 波兰语" }] } },
					{ languageCode: "bs", languageName: { runs: [{ text: "Bosanski - 波斯尼亚语" }] } },
					{ languageCode: "fa", languageName: { runs: [{ text: "فارسی - 波斯语" }] } },
					{ languageCode: "bho", languageName: { runs: [{ text: "भोजपुरी - 博杰普尔语" }] } },
					{ languageCode: "ts", languageName: { runs: [{ text: "Xitsonga - 聪加语" }] } },
					{ languageCode: "tt", languageName: { runs: [{ text: "Татарча - 鞑靼语" }] } },
					{ languageCode: "da", languageName: { runs: [{ text: "Dansk - 丹麦语" }] } },
					{ languageCode: "de", languageName: { runs: [{ text: "Deutsch - 德语" }] } },
					{ languageCode: "dv", languageName: { runs: [{ text: "ދިވެހިބަސް - 迪维希语" }] } },
					{ languageCode: "ru", languageName: { runs: [{ text: "Русский - 俄语" }] } },
					{ languageCode: "fr", languageName: { runs: [{ text: "Français - 法语" }] } },
					{ languageCode: "sa", languageName: { runs: [{ text: "संस्कृतम् - 梵语" }] } },
					{ languageCode: "fil", languageName: { runs: [{ text: "Filipino - 菲律宾语" }] } },
					{ languageCode: "fi", languageName: { runs: [{ text: "Suomi - 芬兰语" }] } },
					{ languageCode: "km", languageName: { runs: [{ text: "ភាសាខ្មែរ - 高棉语" }] } },
					{ languageCode: "ka", languageName: { runs: [{ text: "ქართული - 格鲁吉亚语" }] } },
					{ languageCode: "gu", languageName: { runs: [{ text: "ગુજરાતી - 古吉拉特语" }] } },
					{ languageCode: "gn", languageName: { runs: [{ text: "Avañe'ẽ - 瓜拉尼语" }] } },
					{ languageCode: "kk", languageName: { runs: [{ text: "Қазақ тілі - 哈萨克语" }] } },
					{ languageCode: "ht", languageName: { runs: [{ text: "海地克里奥尔语" }] } },
					{ languageCode: "ko", languageName: { runs: [{ text: "한국말 - 韩语" }] } },
					{ languageCode: "ha", languageName: { runs: [{ text: "هَوُسَ - 豪萨语" }] } },
					{ languageCode: "nl", languageName: { runs: [{ text: "Nederlands - 荷兰语" }] } },
					{ languageCode: "gl", languageName: { runs: [{ text: "Galego - 加利西亚语" }] } },
					{ languageCode: "ca", languageName: { runs: [{ text: "Català - 加泰罗尼亚语" }] } },
					{ languageCode: "cs", languageName: { runs: [{ text: "Čeština - 捷克语" }] } },
					{ languageCode: "kn", languageName: { runs: [{ text: "ಕನ್ನಡ - 卡纳达语" }] } },
					{ languageCode: "ky", languageName: { runs: [{ text: "Кыргызча - 吉尔吉斯语" }] } },
					{ languageCode: "xh", languageName: { runs: [{ text: "isiXhosa - 科萨语" }] } },
					{ languageCode: "co", languageName: { runs: [{ text: "Corsu - 科西嘉语" }] } },
					{ languageCode: "hr", languageName: { runs: [{ text: "Hrvatski - 克罗地亚语" }] } },
					{ languageCode: "qu", languageName: { runs: [{ text: "Runa Simi - 克丘亚语" }] } },
					{ languageCode: "ku", languageName: { runs: [{ text: "Kurdî - 库尔德语" }] } },
					{ languageCode: "la", languageName: { runs: [{ text: "lingua latīna - 拉丁语" }] } },
					{ languageCode: "lv", languageName: { runs: [{ text: "Latviešu - 拉脱维亚语" }] } },
					{ languageCode: "lo", languageName: { runs: [{ text: "ລາວ - 老挝语" }] } },
					{ languageCode: "lt", languageName: { runs: [{ text: "Lietuvių - 立陶宛语" }] } },
					{ languageCode: "ln", languageName: { runs: [{ text: "Lingála - 林加拉语" }] } },
					{ languageCode: "lg", languageName: { runs: [{ text: "Luganda - 卢干达语" }] } },
					{ languageCode: "lb", languageName: { runs: [{ text: "Lëtzebuergesch - 卢森堡语" }] } },
					{ languageCode: "rw", languageName: { runs: [{ text: "Kinyarwanda - 卢旺达语" }] } },
					{ languageCode: "ro", languageName: { runs: [{ text: "Română - 罗马尼亚语" }] } },
					{ languageCode: "mt", languageName: { runs: [{ text: "Malti - 马耳他语" }] } },
					{ languageCode: "mr", languageName: { runs: [{ text: "मराठी - 马拉地语" }] } },
					{ languageCode: "mg", languageName: { runs: [{ text: "Malagasy - 马拉加斯语" }] } },
					{ languageCode: "ml", languageName: { runs: [{ text: "മലയാളം - 马拉雅拉姆语" }] } },
					{ languageCode: "ms", languageName: { runs: [{ text: "Bahasa Melayu - 马来语" }] } },
					{ languageCode: "mk", languageName: { runs: [{ text: "македонски - 马其顿语" }] } },
					{ languageCode: "mi", languageName: { runs: [{ text: "Māori - 毛利语" }] } },
					{ languageCode: "mn", languageName: { runs: [{ text: "Монгол - 蒙古语" }] } },
					{ languageCode: "bn", languageName: { runs: [{ text: "বাংলা - 孟加拉语" }] } },
					{ languageCode: "my", languageName: { runs: [{ text: "ဗမာစာ - 缅甸语" }] } },
					{ languageCode: "hmn", languageName: { runs: [{ text: "Hmoob - 苗语" }] } },
					{ languageCode: "af", languageName: { runs: [{ text: "Afrikaans - 南非荷兰语" }] } },
					{ languageCode: "st", languageName: { runs: [{ text: "Sesotho - 南索托语" }] } },
					{ languageCode: "ne", languageName: { runs: [{ text: "नेपाली - 尼泊尔语" }] } },
					{ languageCode: "no", languageName: { runs: [{ text: "Norsk - 挪威语" }] } },
					{ languageCode: "pa", languageName: { runs: [{ text: "ਪੰਜਾਬੀ - 旁遮普语" }] } },
					{ languageCode: "pt", languageName: { runs: [{ text: "Português - 葡萄牙语" }] } },
					{ languageCode: "ps", languageName: { runs: [{ text: "پښتو - 普什图语" }] } },
					{ languageCode: "ny", languageName: { runs: [{ text: "chiCheŵa - 齐切瓦语" }] } },
					{ languageCode: "ja", languageName: { runs: [{ text: "日本語 - 日语" }] } },
					{ languageCode: "sv", languageName: { runs: [{ text: "Svenska - 瑞典语" }] } },
					{ languageCode: "sm", languageName: { runs: [{ text: "Gagana Samoa - 萨摩亚语" }] } },
					{ languageCode: "sr", languageName: { runs: [{ text: "Српски језик - 塞尔维亚语" }] } },
					{ languageCode: "si", languageName: { runs: [{ text: "සිංහල - 僧伽罗语" }] } },
					{ languageCode: "sn", languageName: { runs: [{ text: "ChiShona - 绍纳语" }] } },
					{ languageCode: "eo", languageName: { runs: [{ text: "Esperanto - 世界语" }] } },
					{ languageCode: "sk", languageName: { runs: [{ text: "Slovenčina - 斯洛伐克语" }] } },
					{ languageCode: "sl", languageName: { runs: [{ text: "Slovenščina - 斯洛文尼亚语" }] } },
					{ languageCode: "sw", languageName: { runs: [{ text: "Kiswahili - 斯瓦希里语" }] } },
					{ languageCode: "gd", languageName: { runs: [{ text: "Gàidhlig - 苏格兰盖尔语" }] } },
					{ languageCode: "ceb", languageName: { runs: [{ text: "Cebuano - 宿务语" }] } },
					{ languageCode: "so", languageName: { runs: [{ text: "Soomaaliga - 索马里语" }] } },
					{ languageCode: "tg", languageName: { runs: [{ text: "тоҷикӣ - 塔吉克语" }] } },
					{ languageCode: "te", languageName: { runs: [{ text: "తెలుగు - 泰卢固语" }] } },
					{ languageCode: "ta", languageName: { runs: [{ text: "தமிழ் - 泰米尔语" }] } },
					{ languageCode: "th", languageName: { runs: [{ text: "ไทย - 泰语" }] } },
					{ languageCode: "ti", languageName: { runs: [{ text: "ትግርኛ - 提格利尼亚语" }] } },
					{ languageCode: "tr", languageName: { runs: [{ text: "Türkçe - 土耳其语" }] } },
					{ languageCode: "tk", languageName: { runs: [{ text: "Türkmen - 土库曼语" }] } },
					{ languageCode: "cy", languageName: { runs: [{ text: "Cymraeg - 威尔士语" }] } },
					{ languageCode: "ug", languageName: { runs: [{ text: "ئۇيغۇرچە - 维吾尔语" }] } },
					{ languageCode: "und", languageName: { runs: [{ text: "Unknown - 未知语言" }] } },
					{ languageCode: "ur", languageName: { runs: [{ text: "اردو - 乌尔都语" }] } },
					{ languageCode: "uk", languageName: { runs: [{ text: "Українська - 乌克兰语" }] } },
					{ languageCode: "uz", languageName: { runs: [{ text: "O‘zbek - 乌兹别克语" }] } },
					{ languageCode: "es", languageName: { runs: [{ text: "Español - 西班牙语" }] } },
					{ languageCode: "fy", languageName: { runs: [{ text: "Frysk - 西弗里西亚语" }] } },
					{ languageCode: "iw", languageName: { runs: [{ text: "עברית - 希伯来语" }] } },
					{ languageCode: "el", languageName: { runs: [{ text: "Ελληνικά - 希腊语" }] } },
					{ languageCode: "haw", languageName: { runs: [{ text: "ʻŌlelo Hawaiʻi - 夏威夷语" }] } },
					{ languageCode: "sd", languageName: { runs: [{ text: "سنڌي - 信德语" }] } },
					{ languageCode: "hu", languageName: { runs: [{ text: "Magyar - 匈牙利语" }] } },
					{ languageCode: "su", languageName: { runs: [{ text: "Basa Sunda - 巽他语" }] } },
					{ languageCode: "hy", languageName: { runs: [{ text: "Հայերեն - 亚美尼亚语" }] } },
					{ languageCode: "ig", languageName: { runs: [{ text: "Igbo - 伊博语" }] } },
					{ languageCode: "it", languageName: { runs: [{ text: "Italiano - 意大利语" }] } },
					{ languageCode: "yi", languageName: { runs: [{ text: "ייִדיש - 意第绪语" }] } },
					{ languageCode: "hi", languageName: { runs: [{ text: "हिन्दी - 印地语" }] } },
					{ languageCode: "id", languageName: { runs: [{ text: "Bahasa Indonesia - 印度尼西亚语" }] } },
					{ languageCode: "en", languageName: { runs: [{ text: "English - 英语" }] } },
					{ languageCode: "yo", languageName: { runs: [{ text: "Yorùbá - 约鲁巴语" }] } },
					{ languageCode: "vi", languageName: { runs: [{ text: "Tiếng Việt - 越南语" }] } },
					{ languageCode: "jv", languageName: { runs: [{ text: "Basa Jawa - 爪哇语" }] } },
					{ languageCode: "zh-Hant", languageName: { runs: [{ text: "中文（繁體） - 中文（繁体）" }] } },
					{ languageCode: "zh-Hans", languageName: { runs: [{ text: "中文（简体）" }] } },
					{ languageCode: "zu", languageName: { runs: [{ text: "isiZulu - 祖鲁语" }] } },
					{ languageCode: "kri", languageName: { runs: [{ text: "Krìì - 克里语" }] } },
				],
			},
		},
	},
	Netflix: {
		Settings: {
			Type: "Translate",
			Languages: ["AUTO", "ZH"],
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
				"ZH-HANT": "zh-Hant",
			},
		},
	},
	Spotify: {
		Settings: {
			Types: ["Translate", "External"],
			Languages: ["AUTO", "ZH"],
		},
	},
	Composite: {
		Settings: {
			CacheSize: 20,
			ShowOnly: false,
			Position: "Reverse",
			Offset: 0,
			Tolerance: 1000,
		},
	},
	Translate: {
		Settings: {
			Vendor: "OpenAI",
			ShowOnly: false,
			Position: "Forward",
			CacheSize: 10,
			Method: "Part",
			Times: 3,
			Interval: 500,
			Exponential: true,
		},
	},
	External: {
		Settings: {
			SubVendor: "URL",
			LrcVendor: "NeteaseMusic",
			CacheSize: 50,
		},
	},
	API: {
		Settings: {
			GoogleCloud: {
				Version: "v2",
				Mode: "Key",
				Auth: "",
			},
			Microsoft: {
				Version: "Azure",
				Mode: "Token",
				Region: "",
				Auth: "",
			},
			DeepL: {
				Version: "Free",
				Auth: "",
			},
			DeepLX: {
				Endpoint: "",
				Auth: "",
			},
			OpenAI: {
				Endpoint: "http://192.168.31.203:8317",
				Model: "gemini-3-pro-preview",
				Auth: "dummy-not-used",
			},
			URL: "",
			NeteaseMusic: {
				PhoneNumber: "",
				Password: "",
			},
		},
	},
	Default: {
		Settings: {
			Type: "Translate",
			Types: ["Official", "Translate"],
			Languages: ["EN", "ZH"],
			CacheSize: 50,
			LogLevel: "WARN",
		},
		Configs: {
			breakLine: {
				"text/xml": "&#x000A;",
				"application/xml": "&#x000A;",
				"text/vtt": "\n",
				"application/vtt": "\n",
				"text/json": "\n",
				"application/json": "\n",
			},
		},
	},
});


}),
"./src/function/detectFormat.mjs": 
/*!***************************************!*\
  !*** ./src/function/detectFormat.mjs ***!
  \***************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (detectFormat)
});
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");


/**
 * detect Format
 * @author VirgilClyne
 * @param {Object} url - Parsed URL
 * @param {String} body - response body
 * @return {String} format - format
 */
function detectFormat(url, body, format = undefined) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ detectFormat", `format: ${url.format || url.searchParams.get("fmt") || url.searchParams.get("format")}`);
	switch (url.format || url.searchParams.get("fmt") || url.searchParams.get("format")) {
		case "txt":
			format = "text/plain";
			break;
		case "xml":
		case "srv3":
		case "ttml":
		case "ttml2":
		case "imsc":
			format = "text/xml";
			break;
		case "vtt":
		case "webvtt":
			format = "text/vtt";
			break;
		case "json":
		case "json3":
			format = "application/json";
			break;
		case "m3u":
		case "m3u8":
			format = "application/x-mpegurl";
			break;
		case "plist":
			format = "application/plist";
			break;
		case undefined:
			const HEADER = body?.substring?.(0, 6).trim?.();
			//Console.debug(`HEADER: ${HEADER}`);
			//Console.debug(`HEADER?.substring?.(0, 1): ${HEADER?.substring?.(0, 1)}`);
			switch (HEADER) {
				case "<?xml":
					format = "text/xml";
					break;
				case "WEBVTT":
					format = "text/vtt";
					break;
				default:
					switch (HEADER?.substring?.(0, 1)) {
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
							format = "text/vtt";
							break;
						case "{":
							format = "application/json";
							break;
						default:
							format = format;
							break;
					}
					break;
				case undefined:
					format = undefined;
					break;
			}
			break;
	}
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ detectFormat", `format: ${format}`);
	return format;
}


}),
"./src/function/detectPlatform.mjs": 
/*!*****************************************!*\
  !*** ./src/function/detectPlatform.mjs ***!
  \*****************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (detectPlatform)
});
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");


function detectPlatform(url) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Detect Platform");
	/***************** Platform *****************/
	let Platform = "Universal";
	switch (true) {
		case /\.(netflix\.com|nflxvideo\.net)/i.test(url):
			Platform = "Netflix";
			break;
		case /(\.youtube|youtubei\.googleapis)\.com/i.test(url):
			Platform = "YouTube";
			break;
		case /\.spotify(cdn)?\.com/i.test(url):
			Platform = "Spotify";
			break;
		case /\.apple\.com/i.test(url):
			Platform = "Apple";
			break;
		case /\.(dssott|starott|dssedge)\.com/i.test(url):
			Platform = "Disney+";
			break;
		case /primevideo\.com|(\.(pv-cdn|aiv-cdn|akamaihd|cloudfront)\.net)|s3\.amazonaws\.com\/aiv-prod-timedtext\//i.test(url):
			Platform = "PrimeVideo";
			break;
		case /pro?d\.media\.(h264\.io|max\.com)/i.test(url):
			Platform = "Max";
			break;
		case /\.(api\.hbo|hbomaxcdn)\.com/i.test(url):
			Platform = "HBOMax";
			break;
		case /\.hulu(stream|im)?\.com/i.test(url):
			Platform = "Hulu";
			break;
		case /\.(pplus\.paramount\.tech|cbs(aavideo|cbsivideo)?\.com)/i.test(url):
			Platform = "Paramount+";
			break;
		case /\.uplynk\.com/i.test(url):
			Platform = "Discovery+";
			break;
		case /dplus-ph-/i.test(url):
			Platform = "Discovery+Ph";
			break;
		case /\.peacocktv\.com/i.test(url):
			Platform = "PeacockTV";
			break;
		case /\.fubo\.tv/i.test(url):
			Platform = "FuboTV";
			break;
		case /\.viki\.io/i.test(url):
			Platform = "Viki";
			break;
		case /epix(hls\.akamaized\.net|\.services\.io)/i.test(url):
			Platform = "MGM+";
			break;
		case /\.nebula\.app/i.test(url):
			Platform = "Nebula";
			break;
		case /\.pluto(\.tv|tv\.net)/i.test(url):
			Platform = "PlutoTV";
			break;
		case /\.mubicdn\.net/i.test(url):
			Platform = "MUBI";
			break;
	}
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Detect Platform", `Platform: ${Platform}`);
	return Platform;
}


}),
"./src/function/setCache.mjs": 
/*!***********************************!*\
  !*** ./src/function/setCache.mjs ***!
  \***********************************/
(function (__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) {
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");


/**
 * Set Cache
 * @author VirgilClyne
 * @param {Map} cache - Playlists Cache / Subtitles Cache
 * @param {Number} cacheSize - Cache Size
 * @return {Boolean} isSaved
 */
function setCache(cache, cacheSize = 100) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Set Cache", `cacheSize: ${cacheSize}`);
	cache = Array.from(cache || []); // Map转Array
	cache = cache.slice(-cacheSize); // 限制缓存大小
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Set Cache");
	return cache;
}


}),
"./src/function/setENV.mjs": 
/*!*********************************!*\
  !*** ./src/function/setENV.mjs ***!
  \*********************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (setENV)
});
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");


/**
 * Set Environment Variables
 * @author VirgilClyne
 * @param {String} name - Persistent Store Key
 * @param {Array} platforms - Platform Names
 * @param {Object} database - Default DataBase
 * @return {Object} { Settings, Caches, Configs }
 */
function setENV(name, platforms, database) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Set Environment Variables");
	const { Settings, Caches, Configs } = (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.getStorage)(name, platforms, database);
	/***************** Settings *****************/
	if (!Array.isArray(Settings?.Types)) Settings.Types = Settings.Types ? [Settings.Types] : []; // 只有一个选项时，无逗号分隔
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`typeof Settings: ${typeof Settings}`, `Settings: ${JSON.stringify(Settings, null, 2)}`);
	/***************** Caches *****************/
	if (typeof Caches?.Playlists !== "object" || Array.isArray(Caches?.Playlists)) Caches.Playlists = {}; // 创建Playlists缓存
	Caches.Playlists.Master = new Map(JSON.parse(Caches?.Playlists?.Master || "[]")); // Strings转Array转Map
	Caches.Playlists.Subtitle = new Map(JSON.parse(Caches?.Playlists?.Subtitle || "[]")); // Strings转Array转Map
	if (typeof Caches?.Subtitles !== "object") Caches.Subtitles = new Map(JSON.parse(Caches?.Subtitles || "[]")); // Strings转Array转Map
	if (typeof Caches?.Metadatas !== "object" || Array.isArray(Caches?.Metadatas)) Caches.Metadatas = {}; // 创建Playlists缓存
	if (typeof Caches?.Metadatas?.Tracks !== "object") Caches.Metadatas.Tracks = new Map(JSON.parse(Caches?.Metadatas?.Tracks || "[]")); // Strings转Array转Map
	//Console.debug(`typeof Caches: ${typeof Caches}`, `Caches: ${JSON.stringify(Caches, null, 2)}`);
	/***************** Configs *****************/
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Set Environment Variables");
	return { Settings, Caches, Configs };
}


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {

/*!*************************************************!*\
  !*** ./src/Composite.Subtitles.response.dev.js ***!
  \*************************************************/
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");
/* ESM import */var _nsnanocat_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nsnanocat/url */ "./node_modules/@nsnanocat/url/URL.mjs");
/* ESM import */var _XML_XML_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XML/XML.mjs */ "./src/XML/XML.mjs");
/* ESM import */var _WebVTT_WebVTT_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebVTT/WebVTT.mjs */ "./src/WebVTT/WebVTT.mjs");
/* ESM import */var _function_database_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/database.mjs */ "./src/function/database.mjs");
/* ESM import */var _function_setENV_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function/setENV.mjs */ "./src/function/setENV.mjs");
/* ESM import */var _function_detectFormat_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./function/detectFormat.mjs */ "./src/function/detectFormat.mjs");
/* ESM import */var _function_detectPlatform_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./function/detectPlatform.mjs */ "./src/function/detectPlatform.mjs");
/* ESM import */var _function_setCache_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./function/setCache.mjs */ "./src/function/setCache.mjs");
/* ESM import */var _function_constructSubtitlesQueue_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./function/constructSubtitlesQueue.mjs */ "./src/function/constructSubtitlesQueue.mjs");
/* ESM import */var _class_Composite_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./class/Composite.mjs */ "./src/class/Composite.mjs");











/***************** Processing *****************/
// 解构URL
const url = new _nsnanocat_url__WEBPACK_IMPORTED_MODULE_1__.URL($request.url);
_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`url: ${url.toJSON()}`);
// 获取连接参数
const PATHs = url.pathname.split("/").filter(Boolean);
_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`PATHs: ${PATHs}`);
// 解析格式
let FORMAT = ($response.headers?.["Content-Type"] ?? $response.headers?.["content-type"])?.split(";")?.[0];
if (FORMAT === "application/octet-stream" || FORMAT === "text/plain") FORMAT = (0,_function_detectFormat_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(url, $response?.body, FORMAT);
_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`FORMAT: ${FORMAT}`);
(async () => {
	// 获取平台
	const PLATFORM = (0,_function_detectPlatform_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])($request.url);
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`PLATFORM: ${PLATFORM}`);
	/**
	 * 设置
	 * @type {{Settings: import('./types').Settings}}
	 */
	const { Settings, Caches, Configs } = (0,_function_setENV_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])("DualSubs", [["YouTube", "Netflix", "BiliBili", "Spotify"].includes(PLATFORM) ? PLATFORM : "Universal", "Composite", "API"], _function_database_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]);
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.logLevel = Settings.LogLevel;
	// 获取字幕类型与语言
	const Type = url.searchParams?.get("subtype") ?? Settings.Type,
		Languages = [url.searchParams?.get("lang")?.toUpperCase?.() ?? Settings.Languages[0], (url.searchParams?.get("tlang") ?? Caches?.tlang)?.toUpperCase?.() ?? Settings.Languages[1]];
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`Type: ${Type}`, `Languages: ${Languages}`);
	// 创建空数据
	let body = {};
	// 创建字幕请求队列
	let requests = [];
	// 处理类型
	switch (Type) {
		case "Official":
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("官方字幕");
			switch (PLATFORM) {
				default: {
					// 获取字幕文件地址vtt缓存（map）
					const { subtitlesPlaylistURL } = getSubtitlesCache($request.url, Caches.Playlists.Subtitle, Languages);
					// 获取字幕播放列表m3u8缓存（map）
					const { masterPlaylistURL, subtitlesPlaylistIndex } = getPlaylistCache(subtitlesPlaylistURL, Caches.Playlists.Master, Languages);
					// 获取字幕文件地址vtt缓存（map）
					const { subtitlesURIArray0, subtitlesURIArray1 } = getSubtitlesArray(masterPlaylistURL, subtitlesPlaylistIndex, Caches.Playlists.Master, Caches.Playlists.Subtitle, Languages);
					// 获取官方字幕请求
					if (subtitlesURIArray1.length) {
						_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`subtitlesURIArray1.length: ${subtitlesURIArray1.length}`);
						// 获取字幕文件名
						const fileName = PATHs?.[PATHs?.length - 1] ?? getSubtitlesFileName($request.url, PLATFORM);
						_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`fileName: ${fileName}`);
						// 构造请求队列
						requests = (0,_function_constructSubtitlesQueue_mjs__WEBPACK_IMPORTED_MODULE_9__["default"])($request, fileName, subtitlesURIArray0, subtitlesURIArray1);
					}
					break;
				}
				case "YouTube":
					_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("YouTube");
					switch (url.searchParams.get("tlang")) {
						case undefined:
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("未选择翻译语言，跳过");
							break;
						default:
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("已选择翻译语言");
							// 设置参数
							// Settings.Offset = 0;
							Settings.Tolerance = 100;
							Settings.Position = Settings.Position === "Reverse" ? "Forward" : "Reverse"; // 链接主字幕为翻译字幕，副字幕为原字幕，所以需要翻转一下
							switch (Settings.ShowOnly) {
								case true:
									_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("仅显示翻译后字幕，跳过");
									break;
								case false:
								default: {
									_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("生成双语字幕");
									// 获取字幕
									url.searchParams.set("lang", Caches.Playlists.Subtitle.get(url.searchParams.get("v")) || url.searchParams.get("lang")); // 主语言
									url.searchParams.delete("tlang"); // 原字幕
									const request = {
										url: url.toString(),
										headers: $request.headers,
									};
									requests.push(request);
									break;
								}
							}
					}
					break;
				case "Netflix":
					_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("Netflix");
					break;
				case "Bilibili":
					_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("Bilibili");
					break;
			}
			break;
		case "Translate":
		default:
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("翻译字幕");
			break;
		case "External":
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("外挂字幕");
			switch (Settings.SubVendor) {
				case "URL": {
					const request = {
						url: Settings.URL,
						headers: {
							Accept: "*/*",
							"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1",
						},
					};
					requests.push(request);
					break;
				}
			}
			break;
	}
	// 格式判断
	switch (FORMAT) {
		case undefined: // 视为无body
			break;
		case "application/x-www-form-urlencoded":
		case "text/plain":
		default:
			break;
		case "application/x-mpegURL":
		case "application/x-mpegurl":
		case "application/vnd.apple.mpegurl":
		case "audio/mpegurl":
			//body = M3U8.parse($response.body);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			//$response.body = M3U8.stringify(body);
			break;
		case "text/xml":
		case "text/html":
		case "text/plist":
		case "application/xml":
		case "application/plist":
		case "application/x-plist":
			body = _XML_XML_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].parse($response.body);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			await Promise.all(
				requests.map(async request => {
					const officialSubtitle = await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(request).then(response => _XML_XML_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].parse(response.body));
					//Console.debug(`officialSubtitle: ${JSON.stringify(officialSubtitle)}`);
					body = new _class_Composite_mjs__WEBPACK_IMPORTED_MODULE_10__["default"](Settings).timedText(body, officialSubtitle, url.searchParams.get("kind"));
				}),
			);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			$response.body = _XML_XML_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].stringify(body);
			break;
		case "text/vtt":
		case "application/vtt":
			body = _WebVTT_WebVTT_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].parse($response.body);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			await Promise.all(
				requests.map(async request => {
					const officialSubtitle = await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(request).then(response => _WebVTT_WebVTT_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].parse(response.body));
					//Console.debug(`officialSubtitle: ${JSON.stringify(officialSubtitle)}`);
					body = new _class_Composite_mjs__WEBPACK_IMPORTED_MODULE_10__["default"](Settings).webVTT(body, officialSubtitle);
				}),
			);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			$response.body = _WebVTT_WebVTT_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].stringify(body);
			break;
		case "text/json":
		case "application/json":
			body = JSON.parse($response.body ?? "{}");
			//Console.debug(`body: ${JSON.stringify(body)}`);
			await Promise.all(
				requests.map(async request => {
					const officialSubtitle = await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(request).then(response => JSON.parse(response.body));
					//Console.debug(`officialSubtitle: ${JSON.stringify(officialSubtitle)}`);
					body = new _class_Composite_mjs__WEBPACK_IMPORTED_MODULE_10__["default"](Settings).JSON(body, officialSubtitle, url.searchParams.get("kind"));
				}),
			);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			$response.body = JSON.stringify(body);
			break;
		case "application/protobuf":
		case "application/x-protobuf":
		case "application/vnd.google.protobuf":
		case "application/grpc":
		case "application/grpc+proto":
		case "application/octet-stream": {
			//Console.debug(`$response.body: ${JSON.stringify($response.body)}`);
			//let rawBody = $app === "Quantumult X" ? new Uint8Array($response.bodyBytes ?? []) : ($response.body ?? new Uint8Array());
			//Console.debug(`isBuffer? ${ArrayBuffer.isView(rawBody)}: ${JSON.stringify(rawBody)}`);
			// 写入二进制数据
			//Console.debug(`rawBody: ${JSON.stringify(rawBody)}`);
			//$response.body = rawBody;
			break;
		}
	}
})()
	.catch(e => _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.error(e))
	.finally(() => (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.done)($response));

/***************** Function *****************/
/**
 * Get Playlist Cache
 * @author VirgilClyne
 * @param {String} url - Request URL / Master Playlist URL
 * @param {Map} cache - Playlist Cache
 * @param {Array} languages - Languages
 * @return {Promise<Object>} { masterPlaylistURL, subtitlesPlaylist, subtitlesPlaylistIndex }
 */
function getPlaylistCache(url, cache, languages) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ getPlaylistCache");
	let masterPlaylistURL = "";
	let subtitlesPlaylist = {};
	let subtitlesPlaylistIndex = 0;
	cache?.forEach((Value, Key) => {
		languages?.forEach(language => {
			if (Array.isArray(Value?.[language])) {
				const array = Value?.[language];
				if (
					array?.some((object, index) => {
						if (url.includes(object?.URI || object?.OPTION?.URI || null)) {
							subtitlesPlaylistIndex = index;
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`subtitlesPlaylistIndex: ${subtitlesPlaylistIndex}`);
							return true;
						} else return false;
					})
				) {
					masterPlaylistURL = Key;
					subtitlesPlaylist = Value;
					//Console.debug(`getPlaylistCache`, `masterPlaylistURL: ${masterPlaylistURL}`, `subtitlesPlaylist: ${JSON.stringify(subtitlesPlaylist)}`);
				}
			}
		});
	});
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ getPlaylistCache", `masterPlaylistURL: ${JSON.stringify(masterPlaylistURL)}`);
	return { masterPlaylistURL, subtitlesPlaylist, subtitlesPlaylistIndex };
}

/**
 * Get Subtitles Cache
 * @author VirgilClyne
 * @param {String} url - Request URL / Subtitles URL
 * @param {Map} cache - Subtitles Cache
 * @param {Array} languages - Languages
 * @return {Promise<Object>} { subtitlesPlaylistURL, subtitles, subtitlesIndex }
 */
function getSubtitlesCache(url, cache, languages) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ getSubtitlesCache");
	let subtitlesPlaylistURL = "";
	let subtitles = [];
	let subtitlesIndex = 0;
	cache?.forEach((Value, Key) => {
		if (Array.isArray(Value)) {
			const array = Value;
			if (
				array?.some((string, index) => {
					if (url.includes(string || null)) {
						subtitlesIndex = index;
						_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`subtitlesIndex: ${subtitlesIndex}`);
						return true;
					} else return false;
				})
			) {
				subtitlesPlaylistURL = Key;
				subtitles = Value;
				//Console.debug(`getSubtitlesCache, subtitlesPlaylistURL: ${subtitlesPlaylistURL}`);
			}
		}
	});
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ getSubtitlesCache", `subtitlesPlaylistURL: ${subtitlesPlaylistURL}`);
	return { subtitlesPlaylistURL, subtitles, subtitlesIndex };
}

/**
 * Get Subtitles Array
 * @author VirgilClyne
 * @param {String} url - Request URL / Master Playlist URL
 * @param {Number} index - Subtitles Playlist Index
 * @param {Map} playlistsCache - Playlists Cache
 * @param {Map} subtitlesCache - Subtitles Cache
 * @param {Array} languages - Languages
 * @return {Promise<Object>} { subtitlesURIArray0, subtitlesURIArray1 }
 */
function getSubtitlesArray(url, index, playlistsCache, subtitlesCache, languages) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ getSubtitlesArray");
	const subtitlesPlaylistValue = playlistsCache?.get(url) || {};
	const subtitlesPlaylistURL0 = subtitlesPlaylistValue?.[languages[0]]?.[index]?.URL || subtitlesPlaylistValue?.[languages[0]]?.[0]?.URL;
	const subtitlesPlaylistURL1 = subtitlesPlaylistValue?.[languages[1]]?.[index]?.URL || subtitlesPlaylistValue?.[languages[1]]?.[0]?.URL;
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`subtitlesPlaylistURL0: ${subtitlesPlaylistURL0}, subtitlesPlaylistURL1: ${subtitlesPlaylistURL1}`);
	// 查找字幕文件地址vtt缓存（map）
	const subtitlesURIArray0 = subtitlesCache.get(subtitlesPlaylistURL0) || [];
	const subtitlesURIArray1 = subtitlesCache.get(subtitlesPlaylistURL1) || [];
	//Console.debug(`getSubtitlesArray`, `subtitlesURIArray0: ${JSON.stringify(subtitlesURIArray0)}, subtitlesURIArray1: ${JSON.stringify(subtitlesURIArray1)}`);
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ getSubtitlesArray");
	return { subtitlesURIArray0, subtitlesURIArray1 };
}

/**
 * Get Subtitles FileName
 * @author VirgilClyne
 * @param {String} url - Request URL / Subtitles URL
 * @param {String} platform - Platform Name
 * @return {String<*>} fileName
 */
function getSubtitlesFileName(url, platform) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Get Subtitles FileName", `url: ${url}`);
	let fileName = undefined;
	switch (platform) {
		case "Apple":
			fileName = request.url.match(/.+_(subtitles(_V\d)?-\d+\.webvtt)\?(.*)subtype=/)[1]; // Apple 片段分型序号不同
			break;
		case "Disney+":
			fileName = request.url.match(/([^\/]+\.vtt)\?(.*)subtype=/)[1]; // Disney+ 片段名称相同
			break;
		case "Hulu":
			fileName = request.url.match(/.+_(SEGMENT\d+_.+\.vtt)\?(.*)subtype=/)[1]; // Hulu 片段分型序号相同
			break;
		case "PrimeVideo":
		case "HBOMax":
		default:
			fileName = null; // Amazon Prime Video HBO_Max不拆分字幕片段
			break;
	}
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Get Subtitles FileName", `fileName: ${fileName}`);
	return fileName;
}

})();

})()
;