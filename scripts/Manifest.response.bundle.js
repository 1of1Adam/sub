/*! https://DualSubs.github.io/guide/universal */
console.log('🍿️ DualSubs: 🔣 Universal β');
console.log('Manifest.response.bundle.js');
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
  Storage: () => (/* reexport safe */ _polyfill_Storage_mjs__WEBPACK_IMPORTED_MODULE_9__.Storage),
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
"./src/EXTM3U/EXTM3U.mjs": 
/*!*******************************!*\
  !*** ./src/EXTM3U/EXTM3U.mjs ***!
  \*******************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (EXTM3U)
});
// refer: https://datatracker.ietf.org/doc/html/draft-pantos-http-live-streaming-08
class EXTM3U {
	static name = "EXTM3U";
	static version = "0.8.8";
	static about = () => console.log(`\n🟧 ${this.name} v${this.version}\n`);
	static #EXTM3URegex = /^(?:(?<TAG>#(?:EXT|AIV)[^#:\s\r\n]+)(?::(?<OPTION>[^\r\n]+))?(?:(?:\r\n|\r|\n)(?<URI>[^#\s\r\n]+))?|(?<NOTE>#[^\r\n]+)?)(?:\r\n|\r|\n)?$/gm;
	static #OPTIONValueRegex = /^((-?\d+[x.\d]+)|[0-9A-Z-]+)$/;

	static parse(m3u8 = new String) {
		let json = [...m3u8.matchAll(this.#EXTM3URegex)].map(item => {
			item = item?.groups || item;
			if (/=/.test(item?.OPTION)) item.OPTION = Object.fromEntries(`${item.OPTION}\,`.split(/,\s*(?![^"]*",)/).slice(0, -1).map(option => {
				option = option.split(/=(.*)/);
				option[1] = (isNaN(option[1])) ? option[1].replace(/^"(.*)"$/, "$1") : parseFloat(option[1]);
				return option;
			}));
			return item
		});
		return json;
	};

	static stringify(json = new Array, options = { lineBreak: "\n" }) {
		if (json?.[0]?.TAG !== "#EXTM3U") json.unshift({ "TAG": "#EXTM3U" })
		let m3u8 = json.map(item => {
			if (typeof item?.OPTION === "object") item.OPTION = Object.entries(item.OPTION).map(option => {
				if (item?.TAG === "#EXT-X-SESSION-DATA") option[1] = `"${option[1]}"`;
				else if (!isNaN(option[1])) option[1] = (typeof option[1] === "number") ? option[1] : `"${option[1]}"`;
				else if (option[0] === "ID" || option[0] === "INSTREAM-ID" || option[0] === "KEYFORMAT") option[1] = `"${option[1]}"`;
				else if (!this.#OPTIONValueRegex.test(option[1])) option[1] = `"${option[1]}"`;
				return option.join("=");
			}).join(",");
			return item = (item?.URI) ? item.TAG + ":" + item.OPTION + options.lineBreak + item.URI
				: (item?.OPTION) ? item.TAG + ":" + item.OPTION
					: (item?.TAG) ? item.TAG
						: (item?.NOTE) ? item.NOTE
							: "";
		}).join(options.lineBreak);
		return m3u8;
	};
};


}),
"./src/class/AttrList.mjs": 
/*!********************************!*\
  !*** ./src/class/AttrList.mjs ***!
  \********************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (AttrList)
});
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");
/* ESM import */var _function_setOption_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../function/setOption.mjs */ "./src/function/setOption.mjs");
/* ESM import */var _function_aPath_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../function/aPath.mjs */ "./src/function/aPath.mjs");




class AttrList {
	constructor(format = "application/x-mpegURL", platform = "Universal") {
		this.Name = "AttrList";
		this.Version = "1.0.7";
		this.format = format;
		this.platform = platform;
		//Object.assign(this, options)
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log(`🟧 ${this.Name} v${this.Version}`, `format: ${this.format}`, `platform: ${this.platform}`);
	}

	/**
	 * Get Attribute List
	 * @author VirgilClyne
	 * @param {String} url - Request URL
	 * @param {Array} file - Parsed M3U8/JSON
	 * @param {String} type - Content Type
	 * @param {Array} langCodes - Language Codes Array
	 * @return {Array} datas
	 */
	get(url = "", file = [], type = "", langCodes = []) {
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Get Attribute List", `type: ${type}`, `langCodes: ${langCodes}`);
		let matchList = [];
		// 格式判断
		switch (this.format) {
			case "application/x-mpegURL":
			case "application/x-mpegurl":
			case "application/vnd.apple.mpegurl":
			case "audio/mpegurl": {
				const attrList = file
					.filter(item => item?.TAG === "#EXT-X-MEDIA") // 过滤标签
					.filter(item => item?.OPTION?.TYPE === type) // 过滤类型
					.filter(item => item?.OPTION?.FORCED !== "YES"); // 过滤强制内容
				//Console.debug(`attrList: ${JSON.stringify(attrList)}`);
				//查询是否有符合语言的内容
				for (const langcode of langCodes) {
					_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`for (let ${langcode} of langcodes)`);
					matchList = attrList.filter(item => item?.OPTION?.LANGUAGE?.toLowerCase() === langcode?.toLowerCase());
					if (matchList.length !== 0) break;
				}
				matchList = matchList.map(data => {
					data.URL = (0,_function_aPath_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(url, data?.OPTION?.URI ?? null);
					return data;
				});
				break;
			}
			case "text/json":
			case "application/json": {
				switch (this.platform) {
					case "PrimeVideo": {
						const attrList = file?.[type] ?? [];
						//查询是否有符合语言的内容
						for (const langcode of langCodes) {
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`for (let ${langcode} of langcodes)`);
							matchList = attrList.filter(item => item?.languageCode?.toLowerCase() === langcode?.toLowerCase());
							if (matchList.length !== 0) break;
						}
						matchList = matchList.map(data => {
							data.URL = data.url;
							return data;
						});
						break;
					}
				}
				break;
			}
		}
		//Console.debug(`matchList: ${JSON.stringify(matchList)}`);
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Get Attribute List");
		return matchList;
	}

	/**
	 * Set Attribute List
	 * @author VirgilClyne
	 * @param {Array} file - Parsed M3U8/JSON
	 * @param {Object} playlists - Playlists
	 * @param {Array} types - Types
	 * @param {Array} languages - Languages
	 * @param {Boolean} Standard - Standard
	 * @return {Object} m3u8
	 */
	set(file = [], playlists = {}, types = [], languages = [], standard = true, device = "iPhone") {
		//types = standard === true ? types : ["Translate"];
		//types = standard === true ? types : [types.at(-1)];
		types = standard === true ? types : types.reverse(); // 反转数组，先找翻译字幕，后找官方字幕
		const playlists1 = playlists?.[languages?.[0]];
		const playlists2 = playlists?.[languages?.[1]];
		//if (playlists1?.length !== 0) Console.debug(`有主字幕语言（源语言）字幕`);
		//else types = types.filter(e => e !== "Translate"); // 无源语言字幕时删除翻译字幕选项
		//if (playlists2?.length !== 0) Console.debug(`有副字幕语言（目标语言）字幕`);
		//else types = types.filter(e => e !== "Official"); // 无目标语言字幕时删除官方字幕选项
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Set Attribute List", `types: ${types}`);
		// 格式判断
		switch (this.format) {
			case "application/x-mpegURL":
			case "application/x-mpegurl":
			case "application/vnd.apple.mpegurl":
			case "audio/mpegurl": {
				playlists1?.forEach(playlist1 => {
					const index1 = file.findIndex(item => item?.OPTION?.URI === playlist1.OPTION.URI); // 主语言（源语言）字幕位置
					types.forEach(type => {
						_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`type: ${type}`);
						let option;
						switch (type) {
							case "Official":
								playlists2?.forEach(playlist2 => {
									//const index2 = file.findIndex(item => item?.OPTION?.URI === playlist2.OPTION.URI); // 副语言（源语言）字幕位置
									if (playlist1?.OPTION?.["GROUP-ID"] === playlist2?.OPTION?.["GROUP-ID"]) {
										// 兼容性修正
										switch (this.platform) {
											case "Apple":
											case "Max":
												// 只生成属性相同
												if (playlist1?.OPTION.CHARACTERISTICS === playlist2?.OPTION.CHARACTERISTICS) {
													option = (0,_function_setOption_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(playlist1, playlist2, type, this.platform, standard, device);
													// option.OPTION.URI += `&lang=${languages[0]}`;
												}
												break;
											default:
												option = (0,_function_setOption_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(playlist1, playlist2, type, this.platform, standard, device);
												// option.OPTION.URI += `&lang=${languages[0]}`;
												break;
										}
									}
								});
								break;
							case "Translate":
							case "External": {
								const playlist2 = {
									OPTION: {
										TYPE: "SUBTITLES",
										//"GROUP-ID": playlist?.OPTION?.["GROUP-ID"],
										NAME: playlists2?.[0]?.OPTION?.NAME ?? languages[1].toLowerCase(),
										LANGUAGE: playlists2?.[0]?.OPTION?.LANGUAGE ?? languages[1].toLowerCase(),
										//"URI": playlist?.URI,
									},
								};
								option = (0,_function_setOption_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(playlist1, playlist2, type, this.platform, standard, device);
								option.OPTION.URI += `&lang=${playlist1?.OPTION?.LANGUAGE?.toUpperCase()}`;
								break;
							}
						}
						if (option) {
							if (standard) file.splice(index1 + 1, 0, option);
							else file.splice(index1, 1, option);
							//file.splice(index1 + (standard ? 1 : 0), 0, option);
						}
					});
				});
				break;
			}
			case "text/json":
			case "application/json": {
				switch (this.platform) {
					case "PrimeVideo": {
						playlists1?.forEach(playlist1 => {
							const index1 = file.findIndex(item => item?.timedTextTrackId === playlist1.timedTextTrackId); // 主语言（源语言）字幕位置
							types.forEach(type => {
								_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`type: ${type}`);
								let option;
								switch (type) {
									case "Official":
										playlists2?.forEach(playlist2 => {
											if (playlist1.trackGroupId === playlist2.trackGroupId) {
												option = JSON.parse(JSON.stringify(playlist1));
												option.displayName = `${type} (${playlist1.displayName}/${playlist2.displayName})`;
												option.languageCode = `${playlist1.languageCode}/${playlist2.languageCode}_${type}`;
												option.timedTextTrackId = `${playlist1.timedTextTrackId}_${type}`;
												const symbol = option.url.includes("?") ? "&" : "?";
												option.url += `${symbol}subtype=${type}`;
												option.url += `&lang=${languages[0]}`;
												//Console.debug(`option: ${JSON.stringify(option)}`);
											}
										});
										break;
									case "Translate":
									case "External": {
										option = JSON.parse(JSON.stringify(playlist1));
										option.displayName = `${type} (${playlist1.displayName}/${languages[1]})`;
										option.languageCode = `${playlist1.languageCode}/${languages[1].toLowerCase()}_${type}`;
										option.timedTextTrackId = `${playlist1.timedTextTrackId}_${type}`;
										const symbol = playlist1.url.includes("?") ? "&" : "?";
										option.url += `${symbol}subtype=${type}`;
										option.url += `&lang=${playlist1.languageCode.toUpperCase()}`;
										//Console.debug(`option: ${JSON.stringify(option)}`);
										break;
									}
								}
								if (option) file.splice(index1 + (standard ? 1 : 0), 0, option);
							});
						});
						break;
					}
				}
				break;
			}
		}
		//Console.debug(`file: ${JSON.stringify(file)}`);
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Set Attribute List");
		return file;
	}
}


}),
"./src/function/aPath.mjs": 
/*!********************************!*\
  !*** ./src/function/aPath.mjs ***!
  \********************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (aPath)
});
// Get Absolute Path
function aPath(URL = "", URI = "") {
	let url = "";
	switch (true) {
		case URI.startsWith("https://") || URI.startsWith("http://"):
			url = URI;
			break;
		case URI.startsWith("/"):
			url = URL.match(/^(https?:\/\/(?:[^/]+))/i)?.[0] + URI;
			break;
		default:
			url = URL.match(/^(https?:\/\/(?:[^?]+)\/)/i)?.[0] + URI;
			break;
	}
	return url;
	//return /^https?:\/\//i.test(URI) ? URI : URL.match(/^(https?:\/\/(?:[^?]+)\/)/i)?.[0] + URI;
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
"./src/function/detectPlaylist.mjs": 
/*!*****************************************!*\
  !*** ./src/function/detectPlaylist.mjs ***!
  \*****************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (detectPlaylist)
});
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");


/**
 * detect Format
 * @author VirgilClyne
 * @param {Object} m3u8 - Parsed M3U8
 * @return {String} type - type
 */
function detectPlaylist(m3u8 = {}) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ detectPlaylist");
	let type = undefined;
	m3u8.forEach(item => {
		switch (item.TAG) {
			case "#EXT-X-MEDIA":
			case "#EXT-X-STREAM-INF":
				type = "Multivariant Playlist";
				break;
			case "#EXT-X-PLAYLIST-TYPE":
			case "EXT-X-TARGETDURATION":
			case "#EXTINF":
				type = "Media Playlist";
				break;
			default:
				break;
		}
	});
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ detectPlaylist", `type: ${type}`);
	return type;
}


}),
"./src/function/isStandard.mjs": 
/*!*************************************!*\
  !*** ./src/function/isStandard.mjs ***!
  \*************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (isStandard)
});
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");


/**
 * is Standard?
 * Determine whether Standard Media Player
 * @author VirgilClyne
 * @param {String} url - Parsed Request URL
 * @param {Object} headers - Request Headers
 * @param {String} platform - Steaming Media Platform
 * @return {Promise<*>}
 */
function isStandard(url = new URL(), headers = {}, platform = "Universal") {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ is Standard?");
	// 判断设备类型
	const UA = headers["user-agent"] ?? headers["User-Agent"];
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`UA: ${UA}`);
	let device = UA.includes("Mozilla/5.0") ? "Web" : UA.includes("iPhone") ? "iPhone" : UA.includes("iPad") ? "iPad" : UA.includes("Macintosh") ? "Macintosh" : UA.includes("AppleTV") ? "AppleTV" : UA.includes("Apple TV") ? "AppleTV" : "iPhone";
	switch (platform) {
		case "Max":
		case "HBOMax":
			if (headers["x-hbo-device-name"]?.includes("ios")) device = "iPhone";
			else if (url.searchParams.get("device-code") === "iphone") device = "iPhone";
			break;
		case "PeacockTV":
			if (UA.includes("PeacockMobile")) device = "iPhone";
			break;
	}
	// 判断是否标准播放器
	let standard = true;
	switch (device) {
		case "iPhone":
		case "iPad":
		case "Macintosh":
			switch (platform) {
				case "Max":
				case "HBOMax":
				case "Viki":
				case "PeacockTV":
				case "FuboTV":
				case "MUBI":
					standard = false;
					break;
				case "TED":
				default:
					standard = true;
					break;
			}
			break;
		case "Web":
			switch (platform) {
				case "Max":
				case "HBOMax":
				case "FuboTV":
				case "TED":
				case "MUBI":
					standard = false;
					break;
				case "Viki":
				case "PeacockTV":
				default:
					standard = true;
					break;
			}
			break;
		case "AppleTV":
		default:
			switch (platform) {
				case "Max":
				case "HBOMax":
					standard = false;
					break;
				case "Viki":
				case "PeacockTV":
				case "FuboTV":
				case "TED":
				case "MUBI":
				default:
					standard = true;
					break;
			}
			break;
	}
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ is Standard?", `standard: ${standard}`, `device: ${device}`);
	return { standard, device };
}


}),
"./src/function/setCache.mjs": 
/*!***********************************!*\
  !*** ./src/function/setCache.mjs ***!
  \***********************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (setCache)
});
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
"./src/function/setOption.mjs": 
/*!************************************!*\
  !*** ./src/function/setOption.mjs ***!
  \************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  "default": () => (setOption)
});
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");


/**
 * Set DualSubs Subtitle Options
 * @author VirgilClyne
 * @param {String} platform - platform
 * @param {Array} playlist1 - Subtitles Playlist (Languages 0)
 * @param {Array} playlist2 - Subtitles Playlist (Languages 1)
 * @param {Array} enabledTypes - Enabled Types
 * @param {Array} translateTypes - Translate Types
 * @param {String} Standard - Standard
 * @param {String} device - Device
 * @return {Promise<*>}
 */
function setOption(playlist1 = {}, playlist2 = {}, type = "", platform = "", standard = true, device = "iPhone") {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Set DualSubs Subtitle Option", `type: ${type}`);
	const NAME1 = playlist1?.OPTION?.NAME.trim(),
		NAME2 = playlist2?.OPTION?.NAME.trim();
	const LANGUAGE1 = playlist1?.OPTION?.LANGUAGE.trim(),
		LANGUAGE2 = playlist2?.OPTION?.LANGUAGE.trim();
	// 复制此语言选项
	const newOption = JSON.parse(JSON.stringify(playlist1));
	// 修改名称
	switch (type) {
		case "Official":
			newOption.OPTION.NAME = `官方字幕 (${NAME1}/${NAME2})`;
			break;
		case "Translate":
			newOption.OPTION.NAME = `翻译字幕 (${NAME1}/${NAME2})`;
			break;
		case "External":
			newOption.OPTION.NAME = `外挂字幕 (${NAME1})`;
			break;
	}
	// 修改语言代码
	switch (platform) {
		case "Apple": // AVKit 语言列表名称显示为LANGUAGE字符串 自动映射LANGUAGE为本地语言NAME 不按LANGUAGE区分语言
		case "MGM+": // AVKit 语言列表名称显示为LANGUAGE字符串 自动映射LANGUAGE为本地语言NAME
			switch (device) {
				case "Web":
				case "Macintosh":
					newOption.OPTION.LANGUAGE = LANGUAGE1;
					break;
				default:
					//newOption.OPTION.LANGUAGE = `${NAME1}/${NAME2} [${type}]`;
					newOption.OPTION.LANGUAGE = `${type} (${LANGUAGE1}/${LANGUAGE2})`;
					break;
			}
			break;
		case "Disney+": // AppleCoreMedia 语言列表名称显示为NAME字符串 自动映射NAME为本地语言NAME 按LANGUAGE区分语言
		case "PrimeVideo": // AppleCoreMedia 语言列表名称显示为NAME字符串 按LANGUAGE区分语言
		case "Hulu": // AppleCoreMedia 语言列表名称显示为LANGUAGE字符串 自动映射LANGUAGE为本地语言NAME 空格分割
		case "Nebula": // AppleCoreMedia 语言列表名称显示为LANGUAGE字符串 自动映射LANGUAGE为本地语言NAME
		case "PlutoTV": // AppleCoreMedia 语言列表名称显示为NAME字符串 按LANGUAGE区分语言
			newOption.OPTION.LANGUAGE = `${type} (${LANGUAGE1}/${LANGUAGE2})`;
			break;
		case "Max": // AppleCoreMedia
		case "HBOMax": // AppleCoreMedia
		case "Viki":
			//if (!standard) newOption.OPTION.NAME = NAME1;
			newOption.OPTION.LANGUAGE = LANGUAGE1;
			//if (!standard) delete newOption.OPTION["ASSOC-LANGUAGE"];
			break;
		case "Paramount+":
		case "Discovery+Ph":
			//newOption.OPTION.NAME = `${NAME1} / ${NAME2} [${type}]`;
			newOption.OPTION.LANGUAGE = `${type} (${LANGUAGE1}/${LANGUAGE2})`;
			//newOption.OPTION["ASSOC-LANGUAGE"] = `${LANGUAGE2} [${type}]`;
			break;
		case "MUBI":
			newOption.OPTION.LANGUAGE = `${type} (${LANGUAGE1}/${LANGUAGE2})`;
			if (!standard) newOption.OPTION.NAME = NAME1;
			break;
		default:
			newOption.OPTION.LANGUAGE = LANGUAGE1;
			break;
	}
	// 增加/修改类型参数
	//const separator = (newOption?.OPTION?.CHARACTERISTICS) ? "," : "";
	//newOption.OPTION.CHARACTERISTICS += `${separator ?? ""}DualSubs.${type}`;
	// 增加副语言
	newOption.OPTION["ASSOC-LANGUAGE"] = LANGUAGE2;
	// 修改链接
	const symbol = newOption.OPTION.URI.includes("?") ? "&" : "?";
	newOption.OPTION.URI += `${symbol}subtype=${type}`;
	//if (!standard) newOption.OPTION.URI += `&lang=${LANGUAGE1}`;
	// 自动选择
	newOption.OPTION.AUTOSELECT = "YES";
	// 兼容性修正
	if (!standard) newOption.OPTION.DEFAULT = "YES";
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Set DualSubs Subtitle Option", `newOption: ${JSON.stringify(newOption)}`);
	return newOption;
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

/*!**************************************!*\
  !*** ./src/Manifest.response.dev.js ***!
  \**************************************/
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");
/* ESM import */var _nsnanocat_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nsnanocat/url */ "./node_modules/@nsnanocat/url/URL.mjs");
/* ESM import */var _EXTM3U_EXTM3U_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EXTM3U/EXTM3U.mjs */ "./src/EXTM3U/EXTM3U.mjs");
/* ESM import */var _class_AttrList_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/AttrList.mjs */ "./src/class/AttrList.mjs");
/* ESM import */var _function_database_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/database.mjs */ "./src/function/database.mjs");
/* ESM import */var _function_detectPlatform_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function/detectPlatform.mjs */ "./src/function/detectPlatform.mjs");
/* ESM import */var _function_setENV_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./function/setENV.mjs */ "./src/function/setENV.mjs");
/* ESM import */var _function_isStandard_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./function/isStandard.mjs */ "./src/function/isStandard.mjs");
/* ESM import */var _function_detectPlaylist_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./function/detectPlaylist.mjs */ "./src/function/detectPlaylist.mjs");
/* ESM import */var _function_setCache_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./function/setCache.mjs */ "./src/function/setCache.mjs");
/* ESM import */var _function_aPath_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./function/aPath.mjs */ "./src/function/aPath.mjs");











/***************** Processing *****************/
// 解构URL
const url = new _nsnanocat_url__WEBPACK_IMPORTED_MODULE_1__.URL($request.url);
_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`url: ${url.toJSON()}`);
// 获取连接参数
const PATHs = url.pathname.split("/").filter(Boolean);
_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`PATHs: ${PATHs}`);
// 解析格式
const FORMAT = ($response.headers?.["Content-Type"] ?? $response.headers?.["content-type"])?.split(";")?.[0];
_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`FORMAT: ${FORMAT}`);
// 获取平台
const PLATFORM = (0,_function_detectPlatform_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])($request.url);
_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`PLATFORM: ${PLATFORM}`);
(async () => {
	/**
	 * 设置
	 * @type {{Settings: import('./types').Settings}}
	 */
	const { Settings, Caches, Configs } = (0,_function_setENV_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])("DualSubs", [["YouTube", "Netflix", "BiliBili", "Spotify"].includes(PLATFORM) ? PLATFORM : "Universal", "Composite"], _function_database_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]);
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.logLevel = Settings.LogLevel;
	// 创建属性列表
	const attrList = new _class_AttrList_mjs__WEBPACK_IMPORTED_MODULE_3__["default"](FORMAT, PLATFORM);
	// 获取字幕类型与语言
	const Type = url.searchParams?.get("subtype") ?? Settings.Type,
		Languages = [url.searchParams?.get("lang")?.toUpperCase?.() ?? Settings.Languages[0], (url.searchParams?.get("tlang") ?? Caches?.tlang)?.toUpperCase?.() ?? Settings.Languages[1]];
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`Type: ${Type}`, `Languages: ${Languages}`);
	// 兼容性判断
	const { standard: STANDARD, device: DEVICE } = (0,_function_isStandard_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])(url, $request.headers, PLATFORM);
	// 创建空数据
	let body = {};
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
		case "audio/x-mpegurl":
		case "audio/mpegurl":
			// 序列化M3U8
			body = _EXTM3U_EXTM3U_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].parse($response.body);
			//Console.debug(`M3U8.parse($response.body): ${JSON.stringify(body)}`);
			// 获取播放列表类型
			switch ((0,_function_detectPlaylist_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(body)) {
				case "Multivariant Playlist": {
					// 读取已存数据
					const playlistCache = Caches.Playlists.Master.get($request.url) || {};
					// 获取特定语言的字幕
					playlistCache[Languages[0]] = attrList.get($request.url, body, "SUBTITLES", Configs.Languages[Languages[0]]);
					playlistCache[Languages[1]] = attrList.get($request.url, body, "SUBTITLES", Configs.Languages[Languages[1]]);
					// 写入选项
					body = attrList.set(body, playlistCache, Settings.Types, Languages, STANDARD, DEVICE);
					// 写入数据
					Caches.Playlists.Master.set($request.url, playlistCache);
					// 格式化缓存
					Caches.Playlists.Master = (0,_function_setCache_mjs__WEBPACK_IMPORTED_MODULE_9__["default"])(Caches.Playlists.Master, Settings.CacheSize);
					// 写入持久化储存
					_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Storage.setItem(`@DualSubs.${"Composite"}.Caches.Playlists.Master`, Caches.Playlists.Master);
					break;
				}
				case "Media Playlist":
					// 处理类型
					switch (Type) {
						case "Official": {
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("官方字幕");
							// 获取字幕播放列表m3u8缓存（map）
							const { subtitlesPlaylist, subtitlesPlaylistIndex } = getPlaylistCache($request.url, Caches.Playlists.Master, Languages[0]) ?? getPlaylistCache($request.url, Caches.Playlists.Master, Languages[1]);
							// 写入字幕文件地址vtt缓存（map）
							Caches.Playlists.Subtitle = await setSubtitlesCache(Caches.Playlists.Subtitle, subtitlesPlaylist, Languages[0], subtitlesPlaylistIndex, PLATFORM);
							Caches.Playlists.Subtitle = await setSubtitlesCache(Caches.Playlists.Subtitle, subtitlesPlaylist, Languages[1], subtitlesPlaylistIndex, PLATFORM);
							// 格式化缓存
							Caches.Playlists.Subtitle = (0,_function_setCache_mjs__WEBPACK_IMPORTED_MODULE_9__["default"])(Caches?.Playlists.Subtitle, Settings.CacheSize);
							// 写入缓存
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Storage.setItem(`@DualSubs.${"Composite"}.Caches.Playlists.Subtitle`, Caches.Playlists.Subtitle);
							break;
						}
						case "Translate":
						default:
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("翻译字幕");
							break;
						case "External":
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info("外挂字幕");
							break;
					}
					// WebVTT.m3u8加参数
					body = body.map((item, i) => {
						if (/^.+\.((web)?vtt|ttml2?|xml|smi)(\?.+)?$/.test(item?.URI)) {
							const symbol = item.URI.includes("?") ? "&" : "?";
							if (!/empty|blank|default/.test(item.URI)) {
								item.URI += `${symbol}subtype=${Type}`;
								if (url.searchParams?.has("lang")) item.URI += `&lang=${url.searchParams.get("lang")}`;
							}
							if (item.TAG === "#EXT-X-BYTERANGE")
								body[i - 1].URI = item.URI; // 删除BYTERANGE
							else return item;
						} else if (item?.URI && PLATFORM === "MGM+") {
							item.URI += `?subtype=${Type}`;
							if (url.searchParams?.has("lang")) item.URI += `&lang=${url.searchParams.get("lang")}`;
							return item;
						} else return item;
					});
					break;
			}
			// 字符串M3U8
			$response.body = _EXTM3U_EXTM3U_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].stringify(body);
			break;
		case "text/xml":
		case "text/html":
		case "text/plist":
		case "application/xml":
		case "application/plist":
		case "application/x-plist":
			//body = XML.parse($response.body);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			//$response.body = XML.stringify(body);
			break;
		case "text/vtt":
		case "application/vtt":
			//body = VTT.parse($response.body);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			//$response.body = VTT.stringify(body);
			break;
		case "text/json":
		case "application/json": {
			body = JSON.parse($response.body ?? "{}");
			//Console.debug(`body: ${JSON.stringify(body)}`);
			// 读取已存数据
			const playlistCache = Caches.Playlists.Master.get($request.url) || {};
			// 判断平台
			switch (PLATFORM) {
				case "PrimeVideo":
					if (body?.subtitleUrls) {
						// 获取特定语言的字幕
						playlistCache[Languages[0]] = attrList.get($request.url, body, "subtitleUrls", Configs.Languages[Languages[0]]);
						playlistCache[Languages[1]] = attrList.get($request.url, body, "subtitleUrls", Configs.Languages[Languages[1]]);
						//Console.debug(`playlistCache[Languages[0]]: ${JSON.stringify(playlistCache[Languages[0]])}`);
						body.subtitleUrls = attrList.set(body.subtitleUrls, playlistCache, Settings.Types, Languages, STANDARD, DEVICE);
					}
					break;
			}
			// 写入数据
			Caches.Playlists.Master.set($request.url, playlistCache);
			// 格式化缓存
			Caches.Playlists.Master = (0,_function_setCache_mjs__WEBPACK_IMPORTED_MODULE_9__["default"])(Caches.Playlists.Master, Settings.CacheSize);
			// 写入持久化储存
			_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Storage.setItem(`@DualSubs.${"Composite"}.Caches.Playlists.Master`, Caches.Playlists.Master);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			$response.body = JSON.stringify(body);
			break;
		}
		case "application/protobuf":
		case "application/x-protobuf":
		case "application/vnd.google.protobuf":
		case "application/grpc":
		case "application/grpc+proto":
		case "application/octet-stream":
			break;
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
 * @param {String} language - Language
 * @return {Promise<Object>} { masterPlaylistURL, subtitlesPlaylist, subtitlesPlaylistIndex }
 */
function getPlaylistCache(url, cache, language) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ getPlaylistCache", `language: ${language}`);
	let masterPlaylistURL = "";
	let subtitlesPlaylist = {};
	let subtitlesPlaylistIndex = 0;
	cache?.forEach((Value, Key) => {
		//Console.debug(`Key: ${Key}, Value: ${JSON.stringify(Value)}`);
		if (Array.isArray(Value?.[language])) {
			const array = Value?.[language];
			//Console.debug(`array: ${JSON.stringify(array)}`);
			if (
				array?.some((object, index) => {
					if (url.includes(object?.URI ?? object?.OPTION?.URI ?? null)) {
						subtitlesPlaylistIndex = index;
						_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`subtitlesPlaylistIndex: ${subtitlesPlaylistIndex}`);
						return true;
					} else return false;
				})
			) {
				masterPlaylistURL = Key;
				subtitlesPlaylist = Value;
				//Console.debug(`masterPlaylistURL: ${masterPlaylistURL}`, `subtitlesPlaylist: ${JSON.stringify(subtitlesPlaylist)}`);
			}
		}
	});
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ getPlaylistCache", `masterPlaylistURL: ${JSON.stringify(masterPlaylistURL)}`);
	return { masterPlaylistURL, subtitlesPlaylist, subtitlesPlaylistIndex };
}

/**
 * Set Subtitles Cache
 * @author VirgilClyne
 * @param {Map} cache - Subtitles Cache
 * @param {Object} playlist - Subtitles Playlist Cache
 * @param {Array} language - Language
 * @param {Number} index - Subtitles Playlist Index
 * @param {String} platform - Steaming Media Platform
 * @return {Promise<Object>} { masterPlaylistURL, subtitlesPlaylist, subtitlesPlaylistIndex }
 */
async function setSubtitlesCache(cache, playlist, language, index = 0, platform = "Universal") {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ setSubtitlesCache", `language: ${language}, index: ${index}`);
	await Promise.all(
		playlist?.[language]?.map(async (val, ind, arr) => {
			//Console.debug(`setSubtitlesCache, ind: ${ind}, val: ${JSON.stringify(val)}`);
			if ((arr[index] && ind === index) || !arr[index]) {
				// 查找字幕文件地址vtt缓存（map）
				let subtitlesURLarray = cache.get(val.URL) ?? [];
				//Console.debug(`setSubtitlesCache`, `subtitlesURLarray: ${JSON.stringify(subtitlesURLarray)}`);
				//Console.debug(`setSubtitlesCache`, `val?.URL: ${val?.URL}`);
				// 获取字幕文件地址vtt/ttml缓存（按语言）
				if (subtitlesURLarray.length === 0) subtitlesURLarray = await getSubtitles(val?.URL, $request.headers, platform);
				//Console.debug(`setSubtitlesCache`, `subtitlesURLarray: ${JSON.stringify(subtitlesURLarray)}`);
				// 写入字幕文件地址vtt/ttml缓存到map
				if (subtitlesURLarray.length !== 0) cache = cache.set(val.URL, subtitlesURLarray);
				//Console.debug(`subtitlesURLarray: ${JSON.stringify(cache.get(val?.URL))}`);
				_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ setSubtitlesCache", `val?.URL: ${val?.URL}`);
			}
		}),
	);
	return cache;
}

/**
 * Get Subtitle *.vtt URLs
 * @author VirgilClyne
 * @param {String} url - VTT URL
 * @param {String} headers - Request Headers
 * @param {String} platform - Steaming Media Platform
 * @return {Promise<*>}
 */
async function getSubtitles(url, headers, platform) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Get Subtitle *.vtt *.ttml URLs");
	let subtitles = await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(url, { headers: headers }).then((response, error) => {
		//Console.debug(`Get Subtitle *.vtt *.ttml URLs`, `response: ${JSON.stringify(response)}`);
		const subtitlePlayList = _EXTM3U_EXTM3U_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].parse(response.body);
		return subtitlePlayList
			.filter(({ URI }) => /^.+\.((web)?vtt|ttml2?|xml|smi)(\?.+)?$/.test(URI))
			.filter(({ URI }) => !URI.includes("empty"))
			.filter(({ URI }) => !URI.includes("blank"))
			.filter(({ URI }) => !URI.includes("default"))
			.map(({ URI }) => (0,_function_aPath_mjs__WEBPACK_IMPORTED_MODULE_10__["default"])(url, URI));
	});
	switch (platform) {
		case "Disney+":
			if (subtitles.some(item => /\/.+-MAIN\//.test(item))) subtitles = subtitles.filter(item => /\/.+-MAIN\//.test(item));
			break;
		case "PrimeVideo":
			if (subtitles.some(item => /\/aiv-prod-timedtext\//.test(item))) subtitles = subtitles.filter(item => /\/aiv-prod-timedtext\//.test(item));
			//Array.from(new Set(subtitles));
			subtitles = subtitles.filter((item, index, array) => {
				// 当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
				return array.indexOf(item, 0) === index;
			}); // 数组去重
			break;
		default:
			break;
	}
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Get Subtitle *.vtt *.ttml URLs", `subtitles: ${subtitles}`);
	return subtitles;
}

})();

})()
;