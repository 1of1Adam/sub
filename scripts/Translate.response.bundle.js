/*! https://DualSubs.github.io/guide/universal */
console.log('🍿️ DualSubs: 🔣 Universal β');
console.log('Translate.response.bundle.js');
console.log('Version: undefined');
console.log('Date: 2025/12/16 00:11:13');
(() => { // webpackBootstrap
var __webpack_modules__ = ({
"./node_modules/@protobuf-ts/runtime/build/es2015/assert.js": 
/*!******************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/assert.js ***!
  \******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  assert: () => (assert),
  assertFloat32: () => (assertFloat32),
  assertInt32: () => (assertInt32),
  assertUInt32: () => (assertUInt32)
});
/**
 * assert that condition is true or throw error (with message)
 */
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
/**
 * assert that value cannot exist = type `never`. throw runtime error if it does.
 */
function assertNever(value, msg) {
    throw new Error(msg !== null && msg !== void 0 ? msg : 'Unexpected object: ' + value);
}
const FLOAT32_MAX = 3.4028234663852886e+38, FLOAT32_MIN = -3.4028234663852886e+38, UINT32_MAX = 0xFFFFFFFF, INT32_MAX = 0X7FFFFFFF, INT32_MIN = -0X80000000;
function assertInt32(arg) {
    if (typeof arg !== "number")
        throw new Error('invalid int 32: ' + typeof arg);
    if (!Number.isInteger(arg) || arg > INT32_MAX || arg < INT32_MIN)
        throw new Error('invalid int 32: ' + arg);
}
function assertUInt32(arg) {
    if (typeof arg !== "number")
        throw new Error('invalid uint 32: ' + typeof arg);
    if (!Number.isInteger(arg) || arg > UINT32_MAX || arg < 0)
        throw new Error('invalid uint 32: ' + arg);
}
function assertFloat32(arg) {
    if (typeof arg !== "number")
        throw new Error('invalid float 32: ' + typeof arg);
    if (!Number.isFinite(arg))
        return;
    if (arg > FLOAT32_MAX || arg < FLOAT32_MIN)
        throw new Error('invalid float 32: ' + arg);
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/base64.js": 
/*!******************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/base64.js ***!
  \******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  base64decode: () => (base64decode),
  base64encode: () => (base64encode)
});
// lookup table from base64 character to byte
let encTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
// lookup table from base64 character *code* to byte because lookup by number is fast
let decTable = [];
for (let i = 0; i < encTable.length; i++)
    decTable[encTable[i].charCodeAt(0)] = i;
// support base64url variants
decTable["-".charCodeAt(0)] = encTable.indexOf("+");
decTable["_".charCodeAt(0)] = encTable.indexOf("/");
/**
 * Decodes a base64 string to a byte array.
 *
 * - ignores white-space, including line breaks and tabs
 * - allows inner padding (can decode concatenated base64 strings)
 * - does not require padding
 * - understands base64url encoding:
 *   "-" instead of "+",
 *   "_" instead of "/",
 *   no padding
 */
function base64decode(base64Str) {
    // estimate byte size, not accounting for inner padding and whitespace
    let es = base64Str.length * 3 / 4;
    // if (es % 3 !== 0)
    // throw new Error('invalid base64 string');
    if (base64Str[base64Str.length - 2] == '=')
        es -= 2;
    else if (base64Str[base64Str.length - 1] == '=')
        es -= 1;
    let bytes = new Uint8Array(es), bytePos = 0, // position in byte array
    groupPos = 0, // position in base64 group
    b, // current byte
    p = 0 // previous byte
    ;
    for (let i = 0; i < base64Str.length; i++) {
        b = decTable[base64Str.charCodeAt(i)];
        if (b === undefined) {
            // noinspection FallThroughInSwitchStatementJS
            switch (base64Str[i]) {
                case '=':
                    groupPos = 0; // reset state when padding found
                case '\n':
                case '\r':
                case '\t':
                case ' ':
                    continue; // skip white-space, and padding
                default:
                    throw Error(`invalid base64 string.`);
            }
        }
        switch (groupPos) {
            case 0:
                p = b;
                groupPos = 1;
                break;
            case 1:
                bytes[bytePos++] = p << 2 | (b & 48) >> 4;
                p = b;
                groupPos = 2;
                break;
            case 2:
                bytes[bytePos++] = (p & 15) << 4 | (b & 60) >> 2;
                p = b;
                groupPos = 3;
                break;
            case 3:
                bytes[bytePos++] = (p & 3) << 6 | b;
                groupPos = 0;
                break;
        }
    }
    if (groupPos == 1)
        throw Error(`invalid base64 string.`);
    return bytes.subarray(0, bytePos);
}
/**
 * Encodes a byte array to a base64 string.
 * Adds padding at the end.
 * Does not insert newlines.
 */
function base64encode(bytes) {
    let base64 = '', groupPos = 0, // position in base64 group
    b, // current byte
    p = 0; // carry over from previous byte
    for (let i = 0; i < bytes.length; i++) {
        b = bytes[i];
        switch (groupPos) {
            case 0:
                base64 += encTable[b >> 2];
                p = (b & 3) << 4;
                groupPos = 1;
                break;
            case 1:
                base64 += encTable[p | b >> 4];
                p = (b & 15) << 2;
                groupPos = 2;
                break;
            case 2:
                base64 += encTable[p | b >> 6];
                base64 += encTable[b & 63];
                groupPos = 0;
                break;
        }
    }
    // padding required?
    if (groupPos) {
        base64 += encTable[p];
        base64 += '=';
        if (groupPos == 1)
            base64 += '=';
    }
    return base64;
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/binary-format-contract.js": 
/*!**********************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/binary-format-contract.js ***!
  \**********************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  UnknownFieldHandler: () => (UnknownFieldHandler),
  WireType: () => (WireType)
});
/**
 * This handler implements the default behaviour for unknown fields.
 * When reading data, unknown fields are stored on the message, in a
 * symbol property.
 * When writing data, the symbol property is queried and unknown fields
 * are serialized into the output again.
 */
var UnknownFieldHandler;
(function (UnknownFieldHandler) {
    /**
     * The symbol used to store unknown fields for a message.
     * The property must conform to `UnknownFieldContainer`.
     */
    UnknownFieldHandler.symbol = Symbol.for("protobuf-ts/unknown");
    /**
     * Store an unknown field during binary read directly on the message.
     * This method is compatible with `BinaryReadOptions.readUnknownField`.
     */
    UnknownFieldHandler.onRead = (typeName, message, fieldNo, wireType, data) => {
        let container = is(message) ? message[UnknownFieldHandler.symbol] : message[UnknownFieldHandler.symbol] = [];
        container.push({ no: fieldNo, wireType, data });
    };
    /**
     * Write unknown fields stored for the message to the writer.
     * This method is compatible with `BinaryWriteOptions.writeUnknownFields`.
     */
    UnknownFieldHandler.onWrite = (typeName, message, writer) => {
        for (let { no, wireType, data } of UnknownFieldHandler.list(message))
            writer.tag(no, wireType).raw(data);
    };
    /**
     * List unknown fields stored for the message.
     * Note that there may be multiples fields with the same number.
     */
    UnknownFieldHandler.list = (message, fieldNo) => {
        if (is(message)) {
            let all = message[UnknownFieldHandler.symbol];
            return fieldNo ? all.filter(uf => uf.no == fieldNo) : all;
        }
        return [];
    };
    /**
     * Returns the last unknown field by field number.
     */
    UnknownFieldHandler.last = (message, fieldNo) => UnknownFieldHandler.list(message, fieldNo).slice(-1)[0];
    const is = (message) => message && Array.isArray(message[UnknownFieldHandler.symbol]);
})(UnknownFieldHandler || (UnknownFieldHandler = {}));
/**
 * Merges binary write or read options. Later values override earlier values.
 */
function mergeBinaryOptions(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
/**
 * Protobuf binary format wire types.
 *
 * A wire type provides just enough information to find the length of the
 * following value.
 *
 * See https://developers.google.com/protocol-buffers/docs/encoding#structure
 */
var WireType;
(function (WireType) {
    /**
     * Used for int32, int64, uint32, uint64, sint32, sint64, bool, enum
     */
    WireType[WireType["Varint"] = 0] = "Varint";
    /**
     * Used for fixed64, sfixed64, double.
     * Always 8 bytes with little-endian byte order.
     */
    WireType[WireType["Bit64"] = 1] = "Bit64";
    /**
     * Used for string, bytes, embedded messages, packed repeated fields
     *
     * Only repeated numeric types (types which use the varint, 32-bit,
     * or 64-bit wire types) can be packed. In proto3, such fields are
     * packed by default.
     */
    WireType[WireType["LengthDelimited"] = 2] = "LengthDelimited";
    /**
     * Used for groups
     * @deprecated
     */
    WireType[WireType["StartGroup"] = 3] = "StartGroup";
    /**
     * Used for groups
     * @deprecated
     */
    WireType[WireType["EndGroup"] = 4] = "EndGroup";
    /**
     * Used for fixed32, sfixed32, float.
     * Always 4 bytes with little-endian byte order.
     */
    WireType[WireType["Bit32"] = 5] = "Bit32";
})(WireType || (WireType = {}));


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/binary-reader.js": 
/*!*************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/binary-reader.js ***!
  \*************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  BinaryReader: () => (BinaryReader),
  binaryReadOptions: () => (binaryReadOptions)
});
/* ESM import */var _binary_format_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary-format-contract */ "./node_modules/@protobuf-ts/runtime/build/es2015/binary-format-contract.js");
/* ESM import */var _pb_long__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pb-long */ "./node_modules/@protobuf-ts/runtime/build/es2015/pb-long.js");
/* ESM import */var _goog_varint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goog-varint */ "./node_modules/@protobuf-ts/runtime/build/es2015/goog-varint.js");



const defaultsRead = {
    readUnknownField: true,
    readerFactory: bytes => new BinaryReader(bytes),
};
/**
 * Make options for reading binary data form partial options.
 */
function binaryReadOptions(options) {
    return options ? Object.assign(Object.assign({}, defaultsRead), options) : defaultsRead;
}
class BinaryReader {
    constructor(buf, textDecoder) {
        this.varint64 = _goog_varint__WEBPACK_IMPORTED_MODULE_0__.varint64read; // dirty cast for `this`
        /**
         * Read a `uint32` field, an unsigned 32 bit varint.
         */
        this.uint32 = _goog_varint__WEBPACK_IMPORTED_MODULE_0__.varint32read; // dirty cast for `this` and access to protected `buf`
        this.buf = buf;
        this.len = buf.length;
        this.pos = 0;
        this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
        this.textDecoder = textDecoder !== null && textDecoder !== void 0 ? textDecoder : new TextDecoder("utf-8", {
            fatal: true,
            ignoreBOM: true,
        });
    }
    /**
     * Reads a tag - field number and wire type.
     */
    tag() {
        let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
        if (fieldNo <= 0 || wireType < 0 || wireType > 5)
            throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
        return [fieldNo, wireType];
    }
    /**
     * Skip one element on the wire and return the skipped data.
     * Supports WireType.StartGroup since v2.0.0-alpha.23.
     */
    skip(wireType) {
        let start = this.pos;
        // noinspection FallThroughInSwitchStatementJS
        switch (wireType) {
            case _binary_format_contract__WEBPACK_IMPORTED_MODULE_1__.WireType.Varint:
                while (this.buf[this.pos++] & 0x80) {
                    // ignore
                }
                break;
            case _binary_format_contract__WEBPACK_IMPORTED_MODULE_1__.WireType.Bit64:
                this.pos += 4;
            case _binary_format_contract__WEBPACK_IMPORTED_MODULE_1__.WireType.Bit32:
                this.pos += 4;
                break;
            case _binary_format_contract__WEBPACK_IMPORTED_MODULE_1__.WireType.LengthDelimited:
                let len = this.uint32();
                this.pos += len;
                break;
            case _binary_format_contract__WEBPACK_IMPORTED_MODULE_1__.WireType.StartGroup:
                // From descriptor.proto: Group type is deprecated, not supported in proto3.
                // But we must still be able to parse and treat as unknown.
                let t;
                while ((t = this.tag()[1]) !== _binary_format_contract__WEBPACK_IMPORTED_MODULE_1__.WireType.EndGroup) {
                    this.skip(t);
                }
                break;
            default:
                throw new Error("cant skip wire type " + wireType);
        }
        this.assertBounds();
        return this.buf.subarray(start, this.pos);
    }
    /**
     * Throws error if position in byte array is out of range.
     */
    assertBounds() {
        if (this.pos > this.len)
            throw new RangeError("premature EOF");
    }
    /**
     * Read a `int32` field, a signed 32 bit varint.
     */
    int32() {
        return this.uint32() | 0;
    }
    /**
     * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
     */
    sint32() {
        let zze = this.uint32();
        // decode zigzag
        return (zze >>> 1) ^ -(zze & 1);
    }
    /**
     * Read a `int64` field, a signed 64-bit varint.
     */
    int64() {
        return new _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbLong(...this.varint64());
    }
    /**
     * Read a `uint64` field, an unsigned 64-bit varint.
     */
    uint64() {
        return new _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbULong(...this.varint64());
    }
    /**
     * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
     */
    sint64() {
        let [lo, hi] = this.varint64();
        // decode zig zag
        let s = -(lo & 1);
        lo = ((lo >>> 1 | (hi & 1) << 31) ^ s);
        hi = (hi >>> 1 ^ s);
        return new _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbLong(lo, hi);
    }
    /**
     * Read a `bool` field, a variant.
     */
    bool() {
        let [lo, hi] = this.varint64();
        return lo !== 0 || hi !== 0;
    }
    /**
     * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
     */
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
     */
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
     */
    fixed64() {
        return new _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbULong(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
     */
    sfixed64() {
        return new _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbLong(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `float` field, 32-bit floating point number.
     */
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `double` field, a 64-bit floating point number.
     */
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
    }
    /**
     * Read a `bytes` field, length-delimited arbitrary data.
     */
    bytes() {
        let len = this.uint32();
        let start = this.pos;
        this.pos += len;
        this.assertBounds();
        return this.buf.subarray(start, start + len);
    }
    /**
     * Read a `string` field, length-delimited data converted to UTF-8 text.
     */
    string() {
        return this.textDecoder.decode(this.bytes());
    }
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/binary-writer.js": 
/*!*************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/binary-writer.js ***!
  \*************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  binaryWriteOptions: () => (binaryWriteOptions)
});
/* ESM import */var _pb_long__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pb-long */ "./node_modules/@protobuf-ts/runtime/build/es2015/pb-long.js");
/* ESM import */var _goog_varint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goog-varint */ "./node_modules/@protobuf-ts/runtime/build/es2015/goog-varint.js");
/* ESM import */var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "./node_modules/@protobuf-ts/runtime/build/es2015/assert.js");



const defaultsWrite = {
    writeUnknownFields: true,
    writerFactory: () => new BinaryWriter(),
};
/**
 * Make options for writing binary data form partial options.
 */
function binaryWriteOptions(options) {
    return options ? Object.assign(Object.assign({}, defaultsWrite), options) : defaultsWrite;
}
class BinaryWriter {
    constructor(textEncoder) {
        /**
         * Previous fork states.
         */
        this.stack = [];
        this.textEncoder = textEncoder !== null && textEncoder !== void 0 ? textEncoder : new TextEncoder();
        this.chunks = [];
        this.buf = [];
    }
    /**
     * Return all bytes written and reset this writer.
     */
    finish() {
        this.chunks.push(new Uint8Array(this.buf)); // flush the buffer
        let len = 0;
        for (let i = 0; i < this.chunks.length; i++)
            len += this.chunks[i].length;
        let bytes = new Uint8Array(len);
        let offset = 0;
        for (let i = 0; i < this.chunks.length; i++) {
            bytes.set(this.chunks[i], offset);
            offset += this.chunks[i].length;
        }
        this.chunks = [];
        return bytes;
    }
    /**
     * Start a new fork for length-delimited data like a message
     * or a packed repeated field.
     *
     * Must be joined later with `join()`.
     */
    fork() {
        this.stack.push({ chunks: this.chunks, buf: this.buf });
        this.chunks = [];
        this.buf = [];
        return this;
    }
    /**
     * Join the last fork. Write its length and bytes, then
     * return to the previous state.
     */
    join() {
        // get chunk of fork
        let chunk = this.finish();
        // restore previous state
        let prev = this.stack.pop();
        if (!prev)
            throw new Error('invalid state, fork stack empty');
        this.chunks = prev.chunks;
        this.buf = prev.buf;
        // write length of chunk as varint
        this.uint32(chunk.byteLength);
        return this.raw(chunk);
    }
    /**
     * Writes a tag (field number and wire type).
     *
     * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
     *
     * Generated code should compute the tag ahead of time and call `uint32()`.
     */
    tag(fieldNo, type) {
        return this.uint32((fieldNo << 3 | type) >>> 0);
    }
    /**
     * Write a chunk of raw bytes.
     */
    raw(chunk) {
        if (this.buf.length) {
            this.chunks.push(new Uint8Array(this.buf));
            this.buf = [];
        }
        this.chunks.push(chunk);
        return this;
    }
    /**
     * Write a `uint32` value, an unsigned 32 bit varint.
     */
    uint32(value) {
        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assertUInt32)(value);
        // write value as varint 32, inlined for speed
        while (value > 0x7f) {
            this.buf.push((value & 0x7f) | 0x80);
            value = value >>> 7;
        }
        this.buf.push(value);
        return this;
    }
    /**
     * Write a `int32` value, a signed 32 bit varint.
     */
    int32(value) {
        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assertInt32)(value);
        (0,_goog_varint__WEBPACK_IMPORTED_MODULE_1__.varint32write)(value, this.buf);
        return this;
    }
    /**
     * Write a `bool` value, a variant.
     */
    bool(value) {
        this.buf.push(value ? 1 : 0);
        return this;
    }
    /**
     * Write a `bytes` value, length-delimited arbitrary data.
     */
    bytes(value) {
        this.uint32(value.byteLength); // write length of chunk as varint
        return this.raw(value);
    }
    /**
     * Write a `string` value, length-delimited data converted to UTF-8 text.
     */
    string(value) {
        let chunk = this.textEncoder.encode(value);
        this.uint32(chunk.byteLength); // write length of chunk as varint
        return this.raw(chunk);
    }
    /**
     * Write a `float` value, 32-bit floating point number.
     */
    float(value) {
        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assertFloat32)(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setFloat32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `double` value, a 64-bit floating point number.
     */
    double(value) {
        let chunk = new Uint8Array(8);
        new DataView(chunk.buffer).setFloat64(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
     */
    fixed32(value) {
        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assertUInt32)(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setUint32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
     */
    sfixed32(value) {
        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assertInt32)(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setInt32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
     */
    sint32(value) {
        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assertInt32)(value);
        // zigzag encode
        value = ((value << 1) ^ (value >> 31)) >>> 0;
        (0,_goog_varint__WEBPACK_IMPORTED_MODULE_1__.varint32write)(value, this.buf);
        return this;
    }
    /**
     * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
     */
    sfixed64(value) {
        let chunk = new Uint8Array(8);
        let view = new DataView(chunk.buffer);
        let long = _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbLong.from(value);
        view.setInt32(0, long.lo, true);
        view.setInt32(4, long.hi, true);
        return this.raw(chunk);
    }
    /**
     * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
     */
    fixed64(value) {
        let chunk = new Uint8Array(8);
        let view = new DataView(chunk.buffer);
        let long = _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbULong.from(value);
        view.setInt32(0, long.lo, true);
        view.setInt32(4, long.hi, true);
        return this.raw(chunk);
    }
    /**
     * Write a `int64` value, a signed 64-bit varint.
     */
    int64(value) {
        let long = _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbLong.from(value);
        (0,_goog_varint__WEBPACK_IMPORTED_MODULE_1__.varint64write)(long.lo, long.hi, this.buf);
        return this;
    }
    /**
     * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
     */
    sint64(value) {
        let long = _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbLong.from(value), 
        // zigzag encode
        sign = long.hi >> 31, lo = (long.lo << 1) ^ sign, hi = ((long.hi << 1) | (long.lo >>> 31)) ^ sign;
        (0,_goog_varint__WEBPACK_IMPORTED_MODULE_1__.varint64write)(lo, hi, this.buf);
        return this;
    }
    /**
     * Write a `uint64` value, an unsigned 64-bit varint.
     */
    uint64(value) {
        let long = _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbULong.from(value);
        (0,_goog_varint__WEBPACK_IMPORTED_MODULE_1__.varint64write)(long.lo, long.hi, this.buf);
        return this;
    }
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/goog-varint.js": 
/*!***********************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/goog-varint.js ***!
  \***********************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  int64fromString: () => (int64fromString),
  int64toString: () => (int64toString),
  varint32read: () => (varint32read),
  varint32write: () => (varint32write),
  varint64read: () => (varint64read),
  varint64write: () => (varint64write)
});
// Copyright 2008 Google Inc.  All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
// * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Code generated by the Protocol Buffer compiler is owned by the owner
// of the input file used when generating it.  This code is not
// standalone and requires a support library to be linked with it.  This
// support library is itself covered by the above license.
/**
 * Read a 64 bit varint as two JS numbers.
 *
 * Returns tuple:
 * [0]: low bits
 * [0]: high bits
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L175
 */
function varint64read() {
    let lowBits = 0;
    let highBits = 0;
    for (let shift = 0; shift < 28; shift += 7) {
        let b = this.buf[this.pos++];
        lowBits |= (b & 0x7F) << shift;
        if ((b & 0x80) == 0) {
            this.assertBounds();
            return [lowBits, highBits];
        }
    }
    let middleByte = this.buf[this.pos++];
    // last four bits of the first 32 bit number
    lowBits |= (middleByte & 0x0F) << 28;
    // 3 upper bits are part of the next 32 bit number
    highBits = (middleByte & 0x70) >> 4;
    if ((middleByte & 0x80) == 0) {
        this.assertBounds();
        return [lowBits, highBits];
    }
    for (let shift = 3; shift <= 31; shift += 7) {
        let b = this.buf[this.pos++];
        highBits |= (b & 0x7F) << shift;
        if ((b & 0x80) == 0) {
            this.assertBounds();
            return [lowBits, highBits];
        }
    }
    throw new Error('invalid varint');
}
/**
 * Write a 64 bit varint, given as two JS numbers, to the given bytes array.
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/writer.js#L344
 */
function varint64write(lo, hi, bytes) {
    for (let i = 0; i < 28; i = i + 7) {
        const shift = lo >>> i;
        const hasNext = !((shift >>> 7) == 0 && hi == 0);
        const byte = (hasNext ? shift | 0x80 : shift) & 0xFF;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    const splitBits = ((lo >>> 28) & 0x0F) | ((hi & 0x07) << 4);
    const hasMoreBits = !((hi >> 3) == 0);
    bytes.push((hasMoreBits ? splitBits | 0x80 : splitBits) & 0xFF);
    if (!hasMoreBits) {
        return;
    }
    for (let i = 3; i < 31; i = i + 7) {
        const shift = hi >>> i;
        const hasNext = !((shift >>> 7) == 0);
        const byte = (hasNext ? shift | 0x80 : shift) & 0xFF;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    bytes.push((hi >>> 31) & 0x01);
}
// constants for binary math
const TWO_PWR_32_DBL = (1 << 16) * (1 << 16);
/**
 * Parse decimal string of 64 bit integer value as two JS numbers.
 *
 * Returns tuple:
 * [0]: minus sign?
 * [1]: low bits
 * [2]: high bits
 *
 * Copyright 2008 Google Inc.
 */
function int64fromString(dec) {
    // Check for minus sign.
    let minus = dec[0] == '-';
    if (minus)
        dec = dec.slice(1);
    // Work 6 decimal digits at a time, acting like we're converting base 1e6
    // digits to binary. This is safe to do with floating point math because
    // Number.isSafeInteger(ALL_32_BITS * 1e6) == true.
    const base = 1e6;
    let lowBits = 0;
    let highBits = 0;
    function add1e6digit(begin, end) {
        // Note: Number('') is 0.
        const digit1e6 = Number(dec.slice(begin, end));
        highBits *= base;
        lowBits = lowBits * base + digit1e6;
        // Carry bits from lowBits to highBits
        if (lowBits >= TWO_PWR_32_DBL) {
            highBits = highBits + ((lowBits / TWO_PWR_32_DBL) | 0);
            lowBits = lowBits % TWO_PWR_32_DBL;
        }
    }
    add1e6digit(-24, -18);
    add1e6digit(-18, -12);
    add1e6digit(-12, -6);
    add1e6digit(-6);
    return [minus, lowBits, highBits];
}
/**
 * Format 64 bit integer value (as two JS numbers) to decimal string.
 *
 * Copyright 2008 Google Inc.
 */
function int64toString(bitsLow, bitsHigh) {
    // Skip the expensive conversion if the number is small enough to use the
    // built-in conversions.
    if ((bitsHigh >>> 0) <= 0x1FFFFF) {
        return '' + (TWO_PWR_32_DBL * bitsHigh + (bitsLow >>> 0));
    }
    // What this code is doing is essentially converting the input number from
    // base-2 to base-1e7, which allows us to represent the 64-bit range with
    // only 3 (very large) digits. Those digits are then trivial to convert to
    // a base-10 string.
    // The magic numbers used here are -
    // 2^24 = 16777216 = (1,6777216) in base-1e7.
    // 2^48 = 281474976710656 = (2,8147497,6710656) in base-1e7.
    // Split 32:32 representation into 16:24:24 representation so our
    // intermediate digits don't overflow.
    let low = bitsLow & 0xFFFFFF;
    let mid = (((bitsLow >>> 24) | (bitsHigh << 8)) >>> 0) & 0xFFFFFF;
    let high = (bitsHigh >> 16) & 0xFFFF;
    // Assemble our three base-1e7 digits, ignoring carries. The maximum
    // value in a digit at this step is representable as a 48-bit integer, which
    // can be stored in a 64-bit floating point number.
    let digitA = low + (mid * 6777216) + (high * 6710656);
    let digitB = mid + (high * 8147497);
    let digitC = (high * 2);
    // Apply carries from A to B and from B to C.
    let base = 10000000;
    if (digitA >= base) {
        digitB += Math.floor(digitA / base);
        digitA %= base;
    }
    if (digitB >= base) {
        digitC += Math.floor(digitB / base);
        digitB %= base;
    }
    // Convert base-1e7 digits to base-10, with optional leading zeroes.
    function decimalFrom1e7(digit1e7, needLeadingZeros) {
        let partial = digit1e7 ? String(digit1e7) : '';
        if (needLeadingZeros) {
            return '0000000'.slice(partial.length) + partial;
        }
        return partial;
    }
    return decimalFrom1e7(digitC, /*needLeadingZeros=*/ 0) +
        decimalFrom1e7(digitB, /*needLeadingZeros=*/ digitC) +
        // If the final 1e7 digit didn't need leading zeros, we would have
        // returned via the trivial code path at the top.
        decimalFrom1e7(digitA, /*needLeadingZeros=*/ 1);
}
/**
 * Write a 32 bit varint, signed or unsigned. Same as `varint64write(0, value, bytes)`
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/1b18833f4f2a2f681f4e4a25cdf3b0a43115ec26/js/binary/encoder.js#L144
 */
function varint32write(value, bytes) {
    if (value >= 0) {
        // write value as varint 32
        while (value > 0x7f) {
            bytes.push((value & 0x7f) | 0x80);
            value = value >>> 7;
        }
        bytes.push(value);
    }
    else {
        for (let i = 0; i < 9; i++) {
            bytes.push(value & 127 | 128);
            value = value >> 7;
        }
        bytes.push(1);
    }
}
/**
 * Read an unsigned 32 bit varint.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L220
 */
function varint32read() {
    let b = this.buf[this.pos++];
    let result = b & 0x7F;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7F) << 7;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7F) << 14;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7F) << 21;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    // Extract only last 4 bits
    b = this.buf[this.pos++];
    result |= (b & 0x0F) << 28;
    for (let readBytes = 5; ((b & 0x80) !== 0) && readBytes < 10; readBytes++)
        b = this.buf[this.pos++];
    if ((b & 0x80) != 0)
        throw new Error('invalid varint');
    this.assertBounds();
    // Result can have 32 bits, convert it to unsigned
    return result >>> 0;
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/json-format-contract.js": 
/*!********************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/json-format-contract.js ***!
  \********************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  jsonReadOptions: () => (jsonReadOptions),
  jsonWriteOptions: () => (jsonWriteOptions)
});
const defaultsWrite = {
    emitDefaultValues: false,
    enumAsInteger: false,
    useProtoFieldName: false,
    prettySpaces: 0,
}, defaultsRead = {
    ignoreUnknownFields: false,
};
/**
 * Make options for reading JSON data from partial options.
 */
function jsonReadOptions(options) {
    return options ? Object.assign(Object.assign({}, defaultsRead), options) : defaultsRead;
}
/**
 * Make options for writing JSON data from partial options.
 */
function jsonWriteOptions(options) {
    return options ? Object.assign(Object.assign({}, defaultsWrite), options) : defaultsWrite;
}
/**
 * Merges JSON write or read options. Later values override earlier values. Type registries are merged.
 */
function mergeJsonOptions(a, b) {
    var _a, _b;
    let c = Object.assign(Object.assign({}, a), b);
    c.typeRegistry = [...((_a = a === null || a === void 0 ? void 0 : a.typeRegistry) !== null && _a !== void 0 ? _a : []), ...((_b = b === null || b === void 0 ? void 0 : b.typeRegistry) !== null && _b !== void 0 ? _b : [])];
    return c;
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/json-typings.js": 
/*!************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/json-typings.js ***!
  \************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  isJsonObject: () => (isJsonObject),
  typeofJsonValue: () => (typeofJsonValue)
});
/**
 * Get the type of a JSON value.
 * Distinguishes between array, null and object.
 */
function typeofJsonValue(value) {
    let t = typeof value;
    if (t == "object") {
        if (Array.isArray(value))
            return "array";
        if (value === null)
            return "null";
    }
    return t;
}
/**
 * Is this a JSON object (instead of an array or null)?
 */
function isJsonObject(value) {
    return value !== null && typeof value == "object" && !Array.isArray(value);
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/lower-camel-case.js": 
/*!****************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/lower-camel-case.js ***!
  \****************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  lowerCamelCase: () => (lowerCamelCase)
});
/**
 * Converts snake_case to lowerCamelCase.
 *
 * Should behave like protoc:
 * https://github.com/protocolbuffers/protobuf/blob/e8ae137c96444ea313485ed1118c5e43b2099cf1/src/google/protobuf/compiler/java/java_helpers.cc#L118
 */
function lowerCamelCase(snakeCase) {
    let capNext = false;
    const sb = [];
    for (let i = 0; i < snakeCase.length; i++) {
        let next = snakeCase.charAt(i);
        if (next == '_') {
            capNext = true;
        }
        else if (/\d/.test(next)) {
            sb.push(next);
            capNext = true;
        }
        else if (capNext) {
            sb.push(next.toUpperCase());
            capNext = false;
        }
        else if (i == 0) {
            sb.push(next.toLowerCase());
        }
        else {
            sb.push(next);
        }
    }
    return sb.join('');
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/message-type-contract.js": 
/*!*********************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/message-type-contract.js ***!
  \*********************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  MESSAGE_TYPE: () => (MESSAGE_TYPE)
});
/**
 * The symbol used as a key on message objects to store the message type.
 *
 * Note that this is an experimental feature - it is here to stay, but
 * implementation details may change without notice.
 */
const MESSAGE_TYPE = Symbol.for("protobuf-ts/message-type");


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/message-type.js": 
/*!************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/message-type.js ***!
  \************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  MessageType: () => (MessageType)
});
/* ESM import */var _message_type_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-type-contract */ "./node_modules/@protobuf-ts/runtime/build/es2015/message-type-contract.js");
/* ESM import */var _reflection_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reflection-info */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");
/* ESM import */var _reflection_type_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reflection-type-check */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-type-check.js");
/* ESM import */var _reflection_json_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reflection-json-reader */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-json-reader.js");
/* ESM import */var _reflection_json_writer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reflection-json-writer */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-json-writer.js");
/* ESM import */var _reflection_binary_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reflection-binary-reader */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-binary-reader.js");
/* ESM import */var _reflection_binary_writer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reflection-binary-writer */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-binary-writer.js");
/* ESM import */var _reflection_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reflection-create */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-create.js");
/* ESM import */var _reflection_merge_partial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reflection-merge-partial */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-merge-partial.js");
/* ESM import */var _json_typings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./json-typings */ "./node_modules/@protobuf-ts/runtime/build/es2015/json-typings.js");
/* ESM import */var _json_format_contract__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./json-format-contract */ "./node_modules/@protobuf-ts/runtime/build/es2015/json-format-contract.js");
/* ESM import */var _reflection_equals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reflection-equals */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-equals.js");
/* ESM import */var _binary_writer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./binary-writer */ "./node_modules/@protobuf-ts/runtime/build/es2015/binary-writer.js");
/* ESM import */var _binary_reader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./binary-reader */ "./node_modules/@protobuf-ts/runtime/build/es2015/binary-reader.js");














const baseDescriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({}));
const messageTypeDescriptor = baseDescriptors[_message_type_contract__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_TYPE] = {};
/**
 * This standard message type provides reflection-based
 * operations to work with a message.
 */
class MessageType {
    constructor(name, fields, options) {
        this.defaultCheckDepth = 16;
        this.typeName = name;
        this.fields = fields.map(_reflection_info__WEBPACK_IMPORTED_MODULE_1__.normalizeFieldInfo);
        this.options = options !== null && options !== void 0 ? options : {};
        messageTypeDescriptor.value = this;
        this.messagePrototype = Object.create(null, baseDescriptors);
        this.refTypeCheck = new _reflection_type_check__WEBPACK_IMPORTED_MODULE_2__.ReflectionTypeCheck(this);
        this.refJsonReader = new _reflection_json_reader__WEBPACK_IMPORTED_MODULE_3__.ReflectionJsonReader(this);
        this.refJsonWriter = new _reflection_json_writer__WEBPACK_IMPORTED_MODULE_4__.ReflectionJsonWriter(this);
        this.refBinReader = new _reflection_binary_reader__WEBPACK_IMPORTED_MODULE_5__.ReflectionBinaryReader(this);
        this.refBinWriter = new _reflection_binary_writer__WEBPACK_IMPORTED_MODULE_6__.ReflectionBinaryWriter(this);
    }
    create(value) {
        let message = (0,_reflection_create__WEBPACK_IMPORTED_MODULE_7__.reflectionCreate)(this);
        if (value !== undefined) {
            (0,_reflection_merge_partial__WEBPACK_IMPORTED_MODULE_8__.reflectionMergePartial)(this, message, value);
        }
        return message;
    }
    /**
     * Clone the message.
     *
     * Unknown fields are discarded.
     */
    clone(message) {
        let copy = this.create();
        (0,_reflection_merge_partial__WEBPACK_IMPORTED_MODULE_8__.reflectionMergePartial)(this, copy, message);
        return copy;
    }
    /**
     * Determines whether two message of the same type have the same field values.
     * Checks for deep equality, traversing repeated fields, oneof groups, maps
     * and messages recursively.
     * Will also return true if both messages are `undefined`.
     */
    equals(a, b) {
        return (0,_reflection_equals__WEBPACK_IMPORTED_MODULE_9__.reflectionEquals)(this, a, b);
    }
    /**
     * Is the given value assignable to our message type
     * and contains no [excess properties](https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks)?
     */
    is(arg, depth = this.defaultCheckDepth) {
        return this.refTypeCheck.is(arg, depth, false);
    }
    /**
     * Is the given value assignable to our message type,
     * regardless of [excess properties](https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks)?
     */
    isAssignable(arg, depth = this.defaultCheckDepth) {
        return this.refTypeCheck.is(arg, depth, true);
    }
    /**
     * Copy partial data into the target message.
     */
    mergePartial(target, source) {
        (0,_reflection_merge_partial__WEBPACK_IMPORTED_MODULE_8__.reflectionMergePartial)(this, target, source);
    }
    /**
     * Create a new message from binary format.
     */
    fromBinary(data, options) {
        let opt = (0,_binary_reader__WEBPACK_IMPORTED_MODULE_10__.binaryReadOptions)(options);
        return this.internalBinaryRead(opt.readerFactory(data), data.byteLength, opt);
    }
    /**
     * Read a new message from a JSON value.
     */
    fromJson(json, options) {
        return this.internalJsonRead(json, (0,_json_format_contract__WEBPACK_IMPORTED_MODULE_11__.jsonReadOptions)(options));
    }
    /**
     * Read a new message from a JSON string.
     * This is equivalent to `T.fromJson(JSON.parse(json))`.
     */
    fromJsonString(json, options) {
        let value = JSON.parse(json);
        return this.fromJson(value, options);
    }
    /**
     * Write the message to canonical JSON value.
     */
    toJson(message, options) {
        return this.internalJsonWrite(message, (0,_json_format_contract__WEBPACK_IMPORTED_MODULE_11__.jsonWriteOptions)(options));
    }
    /**
     * Convert the message to canonical JSON string.
     * This is equivalent to `JSON.stringify(T.toJson(t))`
     */
    toJsonString(message, options) {
        var _a;
        let value = this.toJson(message, options);
        return JSON.stringify(value, null, (_a = options === null || options === void 0 ? void 0 : options.prettySpaces) !== null && _a !== void 0 ? _a : 0);
    }
    /**
     * Write the message to binary format.
     */
    toBinary(message, options) {
        let opt = (0,_binary_writer__WEBPACK_IMPORTED_MODULE_12__.binaryWriteOptions)(options);
        return this.internalBinaryWrite(message, opt.writerFactory(), opt).finish();
    }
    /**
     * This is an internal method. If you just want to read a message from
     * JSON, use `fromJson()` or `fromJsonString()`.
     *
     * Reads JSON value and merges the fields into the target
     * according to protobuf rules. If the target is omitted,
     * a new instance is created first.
     */
    internalJsonRead(json, options, target) {
        if (json !== null && typeof json == "object" && !Array.isArray(json)) {
            let message = target !== null && target !== void 0 ? target : this.create();
            this.refJsonReader.read(json, message, options);
            return message;
        }
        throw new Error(`Unable to parse message ${this.typeName} from JSON ${(0,_json_typings__WEBPACK_IMPORTED_MODULE_13__.typeofJsonValue)(json)}.`);
    }
    /**
     * This is an internal method. If you just want to write a message
     * to JSON, use `toJson()` or `toJsonString().
     *
     * Writes JSON value and returns it.
     */
    internalJsonWrite(message, options) {
        return this.refJsonWriter.write(message, options);
    }
    /**
     * This is an internal method. If you just want to write a message
     * in binary format, use `toBinary()`.
     *
     * Serializes the message in binary format and appends it to the given
     * writer. Returns passed writer.
     */
    internalBinaryWrite(message, writer, options) {
        this.refBinWriter.write(message, writer, options);
        return writer;
    }
    /**
     * This is an internal method. If you just want to read a message from
     * binary data, use `fromBinary()`.
     *
     * Reads data from binary format and merges the fields into
     * the target according to protobuf rules. If the target is
     * omitted, a new instance is created first.
     */
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create();
        this.refBinReader.read(reader, message, options, length);
        return message;
    }
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/oneof.js": 
/*!*****************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/oneof.js ***!
  \*****************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  isOneofGroup: () => (isOneofGroup)
});
/**
 * Is the given value a valid oneof group?
 *
 * We represent protobuf `oneof` as algebraic data types (ADT) in generated
 * code. But when working with messages of unknown type, the ADT does not
 * help us.
 *
 * This type guard checks if the given object adheres to the ADT rules, which
 * are as follows:
 *
 * 1) Must be an object.
 *
 * 2) Must have a "oneofKind" discriminator property.
 *
 * 3) If "oneofKind" is `undefined`, no member field is selected. The object
 * must not have any other properties.
 *
 * 4) If "oneofKind" is a `string`, the member field with this name is
 * selected.
 *
 * 5) If a member field is selected, the object must have a second property
 * with this name. The property must not be `undefined`.
 *
 * 6) No extra properties are allowed. The object has either one property
 * (no selection) or two properties (selection).
 *
 */
function isOneofGroup(any) {
    if (typeof any != 'object' || any === null || !any.hasOwnProperty('oneofKind')) {
        return false;
    }
    switch (typeof any.oneofKind) {
        case "string":
            if (any[any.oneofKind] === undefined)
                return false;
            return Object.keys(any).length == 2;
        case "undefined":
            return Object.keys(any).length == 1;
        default:
            return false;
    }
}
/**
 * Returns the value of the given field in a oneof group.
 */
function getOneofValue(oneof, kind) {
    return oneof[kind];
}
function setOneofValue(oneof, kind, value) {
    if (oneof.oneofKind !== undefined) {
        delete oneof[oneof.oneofKind];
    }
    oneof.oneofKind = kind;
    if (value !== undefined) {
        oneof[kind] = value;
    }
}
function setUnknownOneofValue(oneof, kind, value) {
    if (oneof.oneofKind !== undefined) {
        delete oneof[oneof.oneofKind];
    }
    oneof.oneofKind = kind;
    if (value !== undefined && kind !== undefined) {
        oneof[kind] = value;
    }
}
/**
 * Removes the selected field in a oneof group.
 *
 * Note that the recommended way to modify a oneof group is to set
 * a new object:
 *
 * ```ts
 * message.result = { oneofKind: undefined };
 * ```
 */
function clearOneofValue(oneof) {
    if (oneof.oneofKind !== undefined) {
        delete oneof[oneof.oneofKind];
    }
    oneof.oneofKind = undefined;
}
/**
 * Returns the selected value of the given oneof group.
 *
 * Not that the recommended way to access a oneof group is to check
 * the "oneofKind" property and let TypeScript narrow down the union
 * type for you:
 *
 * ```ts
 * if (message.result.oneofKind === "error") {
 *   message.result.error; // string
 * }
 * ```
 *
 * In the rare case you just need the value, and do not care about
 * which protobuf field is selected, you can use this function
 * for convenience.
 */
function getSelectedOneofValue(oneof) {
    if (oneof.oneofKind === undefined) {
        return undefined;
    }
    return oneof[oneof.oneofKind];
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/pb-long.js": 
/*!*******************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/pb-long.js ***!
  \*******************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  PbLong: () => (PbLong),
  PbULong: () => (PbULong)
});
/* ESM import */var _goog_varint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goog-varint */ "./node_modules/@protobuf-ts/runtime/build/es2015/goog-varint.js");

let BI;
function detectBi() {
    const dv = new DataView(new ArrayBuffer(8));
    const ok = globalThis.BigInt !== undefined
        && typeof dv.getBigInt64 === "function"
        && typeof dv.getBigUint64 === "function"
        && typeof dv.setBigInt64 === "function"
        && typeof dv.setBigUint64 === "function";
    BI = ok ? {
        MIN: BigInt("-9223372036854775808"),
        MAX: BigInt("9223372036854775807"),
        UMIN: BigInt("0"),
        UMAX: BigInt("18446744073709551615"),
        C: BigInt,
        V: dv,
    } : undefined;
}
detectBi();
function assertBi(bi) {
    if (!bi)
        throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support");
}
// used to validate from(string) input (when bigint is unavailable)
const RE_DECIMAL_STR = /^-?[0-9]+$/;
// constants for binary math
const TWO_PWR_32_DBL = 0x100000000;
const HALF_2_PWR_32 = 0x080000000;
// base class for PbLong and PbULong provides shared code
class SharedPbLong {
    /**
     * Create a new instance with the given bits.
     */
    constructor(lo, hi) {
        this.lo = lo | 0;
        this.hi = hi | 0;
    }
    /**
     * Is this instance equal to 0?
     */
    isZero() {
        return this.lo == 0 && this.hi == 0;
    }
    /**
     * Convert to a native number.
     */
    toNumber() {
        let result = this.hi * TWO_PWR_32_DBL + (this.lo >>> 0);
        if (!Number.isSafeInteger(result))
            throw new Error("cannot convert to safe number");
        return result;
    }
}
/**
 * 64-bit unsigned integer as two 32-bit values.
 * Converts between `string`, `number` and `bigint` representations.
 */
class PbULong extends SharedPbLong {
    /**
     * Create instance from a `string`, `number` or `bigint`.
     */
    static from(value) {
        if (BI)
            // noinspection FallThroughInSwitchStatementJS
            switch (typeof value) {
                case "string":
                    if (value == "0")
                        return this.ZERO;
                    if (value == "")
                        throw new Error('string is no integer');
                    value = BI.C(value);
                case "number":
                    if (value === 0)
                        return this.ZERO;
                    value = BI.C(value);
                case "bigint":
                    if (!value)
                        return this.ZERO;
                    if (value < BI.UMIN)
                        throw new Error('signed value for ulong');
                    if (value > BI.UMAX)
                        throw new Error('ulong too large');
                    BI.V.setBigUint64(0, value, true);
                    return new PbULong(BI.V.getInt32(0, true), BI.V.getInt32(4, true));
            }
        else
            switch (typeof value) {
                case "string":
                    if (value == "0")
                        return this.ZERO;
                    value = value.trim();
                    if (!RE_DECIMAL_STR.test(value))
                        throw new Error('string is no integer');
                    let [minus, lo, hi] = (0,_goog_varint__WEBPACK_IMPORTED_MODULE_0__.int64fromString)(value);
                    if (minus)
                        throw new Error('signed value for ulong');
                    return new PbULong(lo, hi);
                case "number":
                    if (value == 0)
                        return this.ZERO;
                    if (!Number.isSafeInteger(value))
                        throw new Error('number is no integer');
                    if (value < 0)
                        throw new Error('signed value for ulong');
                    return new PbULong(value, value / TWO_PWR_32_DBL);
            }
        throw new Error('unknown value ' + typeof value);
    }
    /**
     * Convert to decimal string.
     */
    toString() {
        return BI ? this.toBigInt().toString() : (0,_goog_varint__WEBPACK_IMPORTED_MODULE_0__.int64toString)(this.lo, this.hi);
    }
    /**
     * Convert to native bigint.
     */
    toBigInt() {
        assertBi(BI);
        BI.V.setInt32(0, this.lo, true);
        BI.V.setInt32(4, this.hi, true);
        return BI.V.getBigUint64(0, true);
    }
}
/**
 * ulong 0 singleton.
 */
PbULong.ZERO = new PbULong(0, 0);
/**
 * 64-bit signed integer as two 32-bit values.
 * Converts between `string`, `number` and `bigint` representations.
 */
class PbLong extends SharedPbLong {
    /**
     * Create instance from a `string`, `number` or `bigint`.
     */
    static from(value) {
        if (BI)
            // noinspection FallThroughInSwitchStatementJS
            switch (typeof value) {
                case "string":
                    if (value == "0")
                        return this.ZERO;
                    if (value == "")
                        throw new Error('string is no integer');
                    value = BI.C(value);
                case "number":
                    if (value === 0)
                        return this.ZERO;
                    value = BI.C(value);
                case "bigint":
                    if (!value)
                        return this.ZERO;
                    if (value < BI.MIN)
                        throw new Error('signed long too small');
                    if (value > BI.MAX)
                        throw new Error('signed long too large');
                    BI.V.setBigInt64(0, value, true);
                    return new PbLong(BI.V.getInt32(0, true), BI.V.getInt32(4, true));
            }
        else
            switch (typeof value) {
                case "string":
                    if (value == "0")
                        return this.ZERO;
                    value = value.trim();
                    if (!RE_DECIMAL_STR.test(value))
                        throw new Error('string is no integer');
                    let [minus, lo, hi] = (0,_goog_varint__WEBPACK_IMPORTED_MODULE_0__.int64fromString)(value);
                    if (minus) {
                        if (hi > HALF_2_PWR_32 || (hi == HALF_2_PWR_32 && lo != 0))
                            throw new Error('signed long too small');
                    }
                    else if (hi >= HALF_2_PWR_32)
                        throw new Error('signed long too large');
                    let pbl = new PbLong(lo, hi);
                    return minus ? pbl.negate() : pbl;
                case "number":
                    if (value == 0)
                        return this.ZERO;
                    if (!Number.isSafeInteger(value))
                        throw new Error('number is no integer');
                    return value > 0
                        ? new PbLong(value, value / TWO_PWR_32_DBL)
                        : new PbLong(-value, -value / TWO_PWR_32_DBL).negate();
            }
        throw new Error('unknown value ' + typeof value);
    }
    /**
     * Do we have a minus sign?
     */
    isNegative() {
        return (this.hi & HALF_2_PWR_32) !== 0;
    }
    /**
     * Negate two's complement.
     * Invert all the bits and add one to the result.
     */
    negate() {
        let hi = ~this.hi, lo = this.lo;
        if (lo)
            lo = ~lo + 1;
        else
            hi += 1;
        return new PbLong(lo, hi);
    }
    /**
     * Convert to decimal string.
     */
    toString() {
        if (BI)
            return this.toBigInt().toString();
        if (this.isNegative()) {
            let n = this.negate();
            return '-' + (0,_goog_varint__WEBPACK_IMPORTED_MODULE_0__.int64toString)(n.lo, n.hi);
        }
        return (0,_goog_varint__WEBPACK_IMPORTED_MODULE_0__.int64toString)(this.lo, this.hi);
    }
    /**
     * Convert to native bigint.
     */
    toBigInt() {
        assertBi(BI);
        BI.V.setInt32(0, this.lo, true);
        BI.V.setInt32(4, this.hi, true);
        return BI.V.getBigInt64(0, true);
    }
}
/**
 * long 0 singleton.
 */
PbLong.ZERO = new PbLong(0, 0);


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-binary-reader.js": 
/*!************************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-binary-reader.js ***!
  \************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  ReflectionBinaryReader: () => (ReflectionBinaryReader)
});
/* ESM import */var _binary_format_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binary-format-contract */ "./node_modules/@protobuf-ts/runtime/build/es2015/binary-format-contract.js");
/* ESM import */var _reflection_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reflection-info */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");
/* ESM import */var _reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reflection-long-convert */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-long-convert.js");
/* ESM import */var _reflection_scalar_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reflection-scalar-default */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-scalar-default.js");




/**
 * Reads proto3 messages in binary format using reflection information.
 *
 * https://developers.google.com/protocol-buffers/docs/encoding
 */
class ReflectionBinaryReader {
    constructor(info) {
        this.info = info;
    }
    prepare() {
        var _a;
        if (!this.fieldNoToField) {
            const fieldsInput = (_a = this.info.fields) !== null && _a !== void 0 ? _a : [];
            this.fieldNoToField = new Map(fieldsInput.map(field => [field.no, field]));
        }
    }
    /**
     * Reads a message from binary format into the target message.
     *
     * Repeated fields are appended. Map entries are added, overwriting
     * existing keys.
     *
     * If a message field is already present, it will be merged with the
     * new data.
     */
    read(reader, message, options, length) {
        this.prepare();
        const end = length === undefined ? reader.len : reader.pos + length;
        while (reader.pos < end) {
            // read the tag and find the field
            const [fieldNo, wireType] = reader.tag(), field = this.fieldNoToField.get(fieldNo);
            if (!field) {
                let u = options.readUnknownField;
                if (u == "throw")
                    throw new Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.info.typeName}`);
                let d = reader.skip(wireType);
                if (u !== false)
                    (u === true ? _binary_format_contract__WEBPACK_IMPORTED_MODULE_0__.UnknownFieldHandler.onRead : u)(this.info.typeName, message, fieldNo, wireType, d);
                continue;
            }
            // target object for the field we are reading
            let target = message, repeated = field.repeat, localName = field.localName;
            // if field is member of oneof ADT, use ADT as target
            if (field.oneof) {
                target = target[field.oneof];
                // if other oneof member selected, set new ADT
                if (target.oneofKind !== localName)
                    target = message[field.oneof] = {
                        oneofKind: localName
                    };
            }
            // we have handled oneof above, we just have read the value into `target[localName]`
            switch (field.kind) {
                case "scalar":
                case "enum":
                    let T = field.kind == "enum" ? _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32 : field.T;
                    let L = field.kind == "scalar" ? field.L : undefined;
                    if (repeated) {
                        let arr = target[localName]; // safe to assume presence of array, oneof cannot contain repeated values
                        if (wireType == _binary_format_contract__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited && T != _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING && T != _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BYTES) {
                            let e = reader.uint32() + reader.pos;
                            while (reader.pos < e)
                                arr.push(this.scalar(reader, T, L));
                        }
                        else
                            arr.push(this.scalar(reader, T, L));
                    }
                    else
                        target[localName] = this.scalar(reader, T, L);
                    break;
                case "message":
                    if (repeated) {
                        let arr = target[localName]; // safe to assume presence of array, oneof cannot contain repeated values
                        let msg = field.T().internalBinaryRead(reader, reader.uint32(), options);
                        arr.push(msg);
                    }
                    else
                        target[localName] = field.T().internalBinaryRead(reader, reader.uint32(), options, target[localName]);
                    break;
                case "map":
                    let [mapKey, mapVal] = this.mapEntry(field, reader, options);
                    // safe to assume presence of map object, oneof cannot contain repeated values
                    target[localName][mapKey] = mapVal;
                    break;
            }
        }
    }
    /**
     * Read a map field, expecting key field = 1, value field = 2
     */
    mapEntry(field, reader, options) {
        let length = reader.uint32();
        let end = reader.pos + length;
        let key = undefined; // javascript only allows number or string for object properties
        let val = undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    if (field.K == _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL)
                        key = reader.bool().toString();
                    else
                        // long types are read as string, number types are okay as number
                        key = this.scalar(reader, field.K, _reflection_info__WEBPACK_IMPORTED_MODULE_1__.LongType.STRING);
                    break;
                case 2:
                    switch (field.V.kind) {
                        case "scalar":
                            val = this.scalar(reader, field.V.T, field.V.L);
                            break;
                        case "enum":
                            val = reader.int32();
                            break;
                        case "message":
                            val = field.V.T().internalBinaryRead(reader, reader.uint32(), options);
                            break;
                    }
                    break;
                default:
                    throw new Error(`Unknown field ${fieldNo} (wire type ${wireType}) in map entry for ${this.info.typeName}#${field.name}`);
            }
        }
        if (key === undefined) {
            let keyRaw = (0,_reflection_scalar_default__WEBPACK_IMPORTED_MODULE_2__.reflectionScalarDefault)(field.K);
            key = field.K == _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL ? keyRaw.toString() : keyRaw;
        }
        if (val === undefined)
            switch (field.V.kind) {
                case "scalar":
                    val = (0,_reflection_scalar_default__WEBPACK_IMPORTED_MODULE_2__.reflectionScalarDefault)(field.V.T, field.V.L);
                    break;
                case "enum":
                    val = 0;
                    break;
                case "message":
                    val = field.V.T().create();
                    break;
            }
        return [key, val];
    }
    scalar(reader, type, longType) {
        switch (type) {
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32:
                return reader.int32();
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING:
                return reader.string();
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL:
                return reader.bool();
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.DOUBLE:
                return reader.double();
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FLOAT:
                return reader.float();
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT64:
                return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__.reflectionLongConvert)(reader.int64(), longType);
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT64:
                return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__.reflectionLongConvert)(reader.uint64(), longType);
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FIXED64:
                return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__.reflectionLongConvert)(reader.fixed64(), longType);
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FIXED32:
                return reader.fixed32();
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BYTES:
                return reader.bytes();
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT32:
                return reader.uint32();
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SFIXED32:
                return reader.sfixed32();
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SFIXED64:
                return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__.reflectionLongConvert)(reader.sfixed64(), longType);
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SINT32:
                return reader.sint32();
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SINT64:
                return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__.reflectionLongConvert)(reader.sint64(), longType);
        }
    }
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-binary-writer.js": 
/*!************************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-binary-writer.js ***!
  \************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  ReflectionBinaryWriter: () => (ReflectionBinaryWriter)
});
/* ESM import */var _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binary-format-contract */ "./node_modules/@protobuf-ts/runtime/build/es2015/binary-format-contract.js");
/* ESM import */var _reflection_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reflection-info */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");
/* ESM import */var _assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assert */ "./node_modules/@protobuf-ts/runtime/build/es2015/assert.js");
/* ESM import */var _pb_long__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pb-long */ "./node_modules/@protobuf-ts/runtime/build/es2015/pb-long.js");




/**
 * Writes proto3 messages in binary format using reflection information.
 *
 * https://developers.google.com/protocol-buffers/docs/encoding
 */
class ReflectionBinaryWriter {
    constructor(info) {
        this.info = info;
    }
    prepare() {
        if (!this.fields) {
            const fieldsInput = this.info.fields ? this.info.fields.concat() : [];
            this.fields = fieldsInput.sort((a, b) => a.no - b.no);
        }
    }
    /**
     * Writes the message to binary format.
     */
    write(message, writer, options) {
        this.prepare();
        for (const field of this.fields) {
            let value, // this will be our field value, whether it is member of a oneof or not
            emitDefault, // whether we emit the default value (only true for oneof members)
            repeated = field.repeat, localName = field.localName;
            // handle oneof ADT
            if (field.oneof) {
                const group = message[field.oneof];
                if (group.oneofKind !== localName)
                    continue; // if field is not selected, skip
                value = group[localName];
                emitDefault = true;
            }
            else {
                value = message[localName];
                emitDefault = false;
            }
            // we have handled oneof above. we just have to honor `emitDefault`.
            switch (field.kind) {
                case "scalar":
                case "enum":
                    let T = field.kind == "enum" ? _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT32 : field.T;
                    if (repeated) {
                        (0,_assert__WEBPACK_IMPORTED_MODULE_1__.assert)(Array.isArray(value));
                        if (repeated == _reflection_info__WEBPACK_IMPORTED_MODULE_0__.RepeatType.PACKED)
                            this.packed(writer, T, field.no, value);
                        else
                            for (const item of value)
                                this.scalar(writer, T, field.no, item, true);
                    }
                    else if (value === undefined)
                        (0,_assert__WEBPACK_IMPORTED_MODULE_1__.assert)(field.opt);
                    else
                        this.scalar(writer, T, field.no, value, emitDefault || field.opt);
                    break;
                case "message":
                    if (repeated) {
                        (0,_assert__WEBPACK_IMPORTED_MODULE_1__.assert)(Array.isArray(value));
                        for (const item of value)
                            this.message(writer, options, field.T(), field.no, item);
                    }
                    else {
                        this.message(writer, options, field.T(), field.no, value);
                    }
                    break;
                case "map":
                    (0,_assert__WEBPACK_IMPORTED_MODULE_1__.assert)(typeof value == 'object' && value !== null);
                    for (const [key, val] of Object.entries(value))
                        this.mapEntry(writer, options, field, key, val);
                    break;
            }
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u === true ? _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.UnknownFieldHandler.onWrite : u)(this.info.typeName, message, writer);
    }
    mapEntry(writer, options, field, key, value) {
        writer.tag(field.no, _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.LengthDelimited);
        writer.fork();
        // javascript only allows number or string for object properties
        // we convert from our representation to the protobuf type
        let keyValue = key;
        switch (field.K) {
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.FIXED32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.UINT32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SFIXED32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SINT32:
                keyValue = Number.parseInt(key);
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BOOL:
                (0,_assert__WEBPACK_IMPORTED_MODULE_1__.assert)(key == 'true' || key == 'false');
                keyValue = key == 'true';
                break;
        }
        // write key, expecting key field number = 1
        this.scalar(writer, field.K, 1, keyValue, true);
        // write value, expecting value field number = 2
        switch (field.V.kind) {
            case 'scalar':
                this.scalar(writer, field.V.T, 2, value, true);
                break;
            case 'enum':
                this.scalar(writer, _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT32, 2, value, true);
                break;
            case 'message':
                this.message(writer, options, field.V.T(), 2, value);
                break;
        }
        writer.join();
    }
    message(writer, options, handler, fieldNo, value) {
        if (value === undefined)
            return;
        handler.internalBinaryWrite(value, writer.tag(fieldNo, _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.LengthDelimited).fork(), options);
        writer.join();
    }
    /**
     * Write a single scalar value.
     */
    scalar(writer, type, fieldNo, value, emitDefault) {
        let [wireType, method, isDefault] = this.scalarInfo(type, value);
        if (!isDefault || emitDefault) {
            writer.tag(fieldNo, wireType);
            writer[method](value);
        }
    }
    /**
     * Write an array of scalar values in packed format.
     */
    packed(writer, type, fieldNo, value) {
        if (!value.length)
            return;
        (0,_assert__WEBPACK_IMPORTED_MODULE_1__.assert)(type !== _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BYTES && type !== _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.STRING);
        // write tag
        writer.tag(fieldNo, _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.LengthDelimited);
        // begin length-delimited
        writer.fork();
        // write values without tags
        let [, method,] = this.scalarInfo(type);
        for (let i = 0; i < value.length; i++)
            writer[method](value[i]);
        // end length delimited
        writer.join();
    }
    /**
     * Get information for writing a scalar value.
     *
     * Returns tuple:
     * [0]: appropriate WireType
     * [1]: name of the appropriate method of IBinaryWriter
     * [2]: whether the given value is a default value
     *
     * If argument `value` is omitted, [2] is always false.
     */
    scalarInfo(type, value) {
        let t = _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.Varint;
        let m;
        let i = value === undefined;
        let d = value === 0;
        switch (type) {
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT32:
                m = "int32";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.STRING:
                d = i || !value.length;
                t = _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.LengthDelimited;
                m = "string";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BOOL:
                d = value === false;
                m = "bool";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.UINT32:
                m = "uint32";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.DOUBLE:
                t = _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.Bit64;
                m = "double";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.FLOAT:
                t = _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.Bit32;
                m = "float";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT64:
                d = i || _pb_long__WEBPACK_IMPORTED_MODULE_3__.PbLong.from(value).isZero();
                m = "int64";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.UINT64:
                d = i || _pb_long__WEBPACK_IMPORTED_MODULE_3__.PbULong.from(value).isZero();
                m = "uint64";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.FIXED64:
                d = i || _pb_long__WEBPACK_IMPORTED_MODULE_3__.PbULong.from(value).isZero();
                t = _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.Bit64;
                m = "fixed64";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BYTES:
                d = i || !value.byteLength;
                t = _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.LengthDelimited;
                m = "bytes";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.FIXED32:
                t = _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.Bit32;
                m = "fixed32";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SFIXED32:
                t = _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.Bit32;
                m = "sfixed32";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SFIXED64:
                d = i || _pb_long__WEBPACK_IMPORTED_MODULE_3__.PbLong.from(value).isZero();
                t = _binary_format_contract__WEBPACK_IMPORTED_MODULE_2__.WireType.Bit64;
                m = "sfixed64";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SINT32:
                m = "sint32";
                break;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SINT64:
                d = i || _pb_long__WEBPACK_IMPORTED_MODULE_3__.PbLong.from(value).isZero();
                m = "sint64";
                break;
        }
        return [t, m, i || d];
    }
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-create.js": 
/*!*****************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-create.js ***!
  \*****************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  reflectionCreate: () => (reflectionCreate)
});
/* ESM import */var _reflection_scalar_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reflection-scalar-default */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-scalar-default.js");
/* ESM import */var _message_type_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-type-contract */ "./node_modules/@protobuf-ts/runtime/build/es2015/message-type-contract.js");


/**
 * Creates an instance of the generic message, using the field
 * information.
 */
function reflectionCreate(type) {
    /**
     * This ternary can be removed in the next major version.
     * The `Object.create()` code path utilizes a new `messagePrototype`
     * property on the `IMessageType` which has this same `MESSAGE_TYPE`
     * non-enumerable property on it. Doing it this way means that we only
     * pay the cost of `Object.defineProperty()` once per `IMessageType`
     * class of once per "instance". The falsy code path is only provided
     * for backwards compatibility in cases where the runtime library is
     * updated without also updating the generated code.
     */
    const msg = type.messagePrototype
        ? Object.create(type.messagePrototype)
        : Object.defineProperty({}, _message_type_contract__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_TYPE, { value: type });
    for (let field of type.fields) {
        let name = field.localName;
        if (field.opt)
            continue;
        if (field.oneof)
            msg[field.oneof] = { oneofKind: undefined };
        else if (field.repeat)
            msg[name] = [];
        else
            switch (field.kind) {
                case "scalar":
                    msg[name] = (0,_reflection_scalar_default__WEBPACK_IMPORTED_MODULE_1__.reflectionScalarDefault)(field.T, field.L);
                    break;
                case "enum":
                    // we require 0 to be default value for all enums
                    msg[name] = 0;
                    break;
                case "map":
                    msg[name] = {};
                    break;
            }
    }
    return msg;
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-equals.js": 
/*!*****************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-equals.js ***!
  \*****************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  reflectionEquals: () => (reflectionEquals)
});
/* ESM import */var _reflection_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reflection-info */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");

/**
 * Determines whether two message of the same type have the same field values.
 * Checks for deep equality, traversing repeated fields, oneof groups, maps
 * and messages recursively.
 * Will also return true if both messages are `undefined`.
 */
function reflectionEquals(info, a, b) {
    if (a === b)
        return true;
    if (!a || !b)
        return false;
    for (let field of info.fields) {
        let localName = field.localName;
        let val_a = field.oneof ? a[field.oneof][localName] : a[localName];
        let val_b = field.oneof ? b[field.oneof][localName] : b[localName];
        switch (field.kind) {
            case "enum":
            case "scalar":
                let t = field.kind == "enum" ? _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT32 : field.T;
                if (!(field.repeat
                    ? repeatedPrimitiveEq(t, val_a, val_b)
                    : primitiveEq(t, val_a, val_b)))
                    return false;
                break;
            case "map":
                if (!(field.V.kind == "message"
                    ? repeatedMsgEq(field.V.T(), objectValues(val_a), objectValues(val_b))
                    : repeatedPrimitiveEq(field.V.kind == "enum" ? _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT32 : field.V.T, objectValues(val_a), objectValues(val_b))))
                    return false;
                break;
            case "message":
                let T = field.T();
                if (!(field.repeat
                    ? repeatedMsgEq(T, val_a, val_b)
                    : T.equals(val_a, val_b)))
                    return false;
                break;
        }
    }
    return true;
}
const objectValues = Object.values;
function primitiveEq(type, a, b) {
    if (a === b)
        return true;
    if (type !== _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BYTES)
        return false;
    let ba = a;
    let bb = b;
    if (ba.length !== bb.length)
        return false;
    for (let i = 0; i < ba.length; i++)
        if (ba[i] != bb[i])
            return false;
    return true;
}
function repeatedPrimitiveEq(type, a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (!primitiveEq(type, a[i], b[i]))
            return false;
    return true;
}
function repeatedMsgEq(type, a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (!type.equals(a[i], b[i]))
            return false;
    return true;
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js": 
/*!***************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js ***!
  \***************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  LongType: () => (LongType),
  RepeatType: () => (RepeatType),
  ScalarType: () => (ScalarType),
  normalizeFieldInfo: () => (normalizeFieldInfo)
});
/* ESM import */var _lower_camel_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lower-camel-case */ "./node_modules/@protobuf-ts/runtime/build/es2015/lower-camel-case.js");

/**
 * Scalar value types. This is a subset of field types declared by protobuf
 * enum google.protobuf.FieldDescriptorProto.Type The types GROUP and MESSAGE
 * are omitted, but the numerical values are identical.
 */
var ScalarType;
(function (ScalarType) {
    // 0 is reserved for errors.
    // Order is weird for historical reasons.
    ScalarType[ScalarType["DOUBLE"] = 1] = "DOUBLE";
    ScalarType[ScalarType["FLOAT"] = 2] = "FLOAT";
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
    // negative values are likely.
    ScalarType[ScalarType["INT64"] = 3] = "INT64";
    ScalarType[ScalarType["UINT64"] = 4] = "UINT64";
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
    // negative values are likely.
    ScalarType[ScalarType["INT32"] = 5] = "INT32";
    ScalarType[ScalarType["FIXED64"] = 6] = "FIXED64";
    ScalarType[ScalarType["FIXED32"] = 7] = "FIXED32";
    ScalarType[ScalarType["BOOL"] = 8] = "BOOL";
    ScalarType[ScalarType["STRING"] = 9] = "STRING";
    // Tag-delimited aggregate.
    // Group type is deprecated and not supported in proto3. However, Proto3
    // implementations should still be able to parse the group wire format and
    // treat group fields as unknown fields.
    // TYPE_GROUP = 10,
    // TYPE_MESSAGE = 11,  // Length-delimited aggregate.
    // New in version 2.
    ScalarType[ScalarType["BYTES"] = 12] = "BYTES";
    ScalarType[ScalarType["UINT32"] = 13] = "UINT32";
    // TYPE_ENUM = 14,
    ScalarType[ScalarType["SFIXED32"] = 15] = "SFIXED32";
    ScalarType[ScalarType["SFIXED64"] = 16] = "SFIXED64";
    ScalarType[ScalarType["SINT32"] = 17] = "SINT32";
    ScalarType[ScalarType["SINT64"] = 18] = "SINT64";
})(ScalarType || (ScalarType = {}));
/**
 * JavaScript representation of 64 bit integral types. Equivalent to the
 * field option "jstype".
 *
 * By default, protobuf-ts represents 64 bit types as `bigint`.
 *
 * You can change the default behaviour by enabling the plugin parameter
 * `long_type_string`, which will represent 64 bit types as `string`.
 *
 * Alternatively, you can change the behaviour for individual fields
 * with the field option "jstype":
 *
 * ```protobuf
 * uint64 my_field = 1 [jstype = JS_STRING];
 * uint64 other_field = 2 [jstype = JS_NUMBER];
 * ```
 */
var LongType;
(function (LongType) {
    /**
     * Use JavaScript `bigint`.
     *
     * Field option `[jstype = JS_NORMAL]`.
     */
    LongType[LongType["BIGINT"] = 0] = "BIGINT";
    /**
     * Use JavaScript `string`.
     *
     * Field option `[jstype = JS_STRING]`.
     */
    LongType[LongType["STRING"] = 1] = "STRING";
    /**
     * Use JavaScript `number`.
     *
     * Large values will loose precision.
     *
     * Field option `[jstype = JS_NUMBER]`.
     */
    LongType[LongType["NUMBER"] = 2] = "NUMBER";
})(LongType || (LongType = {}));
/**
 * Protobuf 2.1.0 introduced packed repeated fields.
 * Setting the field option `[packed = true]` enables packing.
 *
 * In proto3, all repeated fields are packed by default.
 * Setting the field option `[packed = false]` disables packing.
 *
 * Packed repeated fields are encoded with a single tag,
 * then a length-delimiter, then the element values.
 *
 * Unpacked repeated fields are encoded with a tag and
 * value for each element.
 *
 * `bytes` and `string` cannot be packed.
 */
var RepeatType;
(function (RepeatType) {
    /**
     * The field is not repeated.
     */
    RepeatType[RepeatType["NO"] = 0] = "NO";
    /**
     * The field is repeated and should be packed.
     * Invalid for `bytes` and `string`, they cannot be packed.
     */
    RepeatType[RepeatType["PACKED"] = 1] = "PACKED";
    /**
     * The field is repeated but should not be packed.
     * The only valid repeat type for repeated `bytes` and `string`.
     */
    RepeatType[RepeatType["UNPACKED"] = 2] = "UNPACKED";
})(RepeatType || (RepeatType = {}));
/**
 * Turns PartialFieldInfo into FieldInfo.
 */
function normalizeFieldInfo(field) {
    var _a, _b, _c, _d;
    field.localName = (_a = field.localName) !== null && _a !== void 0 ? _a : (0,_lower_camel_case__WEBPACK_IMPORTED_MODULE_0__.lowerCamelCase)(field.name);
    field.jsonName = (_b = field.jsonName) !== null && _b !== void 0 ? _b : (0,_lower_camel_case__WEBPACK_IMPORTED_MODULE_0__.lowerCamelCase)(field.name);
    field.repeat = (_c = field.repeat) !== null && _c !== void 0 ? _c : RepeatType.NO;
    field.opt = (_d = field.opt) !== null && _d !== void 0 ? _d : (field.repeat ? false : field.oneof ? false : field.kind == "message");
    return field;
}
/**
 * Read custom field options from a generated message type.
 *
 * @deprecated use readFieldOption()
 */
function readFieldOptions(messageType, fieldName, extensionName, extensionType) {
    var _a;
    const options = (_a = messageType.fields.find((m, i) => m.localName == fieldName || i == fieldName)) === null || _a === void 0 ? void 0 : _a.options;
    return options && options[extensionName] ? extensionType.fromJson(options[extensionName]) : undefined;
}
function readFieldOption(messageType, fieldName, extensionName, extensionType) {
    var _a;
    const options = (_a = messageType.fields.find((m, i) => m.localName == fieldName || i == fieldName)) === null || _a === void 0 ? void 0 : _a.options;
    if (!options) {
        return undefined;
    }
    const optionVal = options[extensionName];
    if (optionVal === undefined) {
        return optionVal;
    }
    return extensionType ? extensionType.fromJson(optionVal) : optionVal;
}
function readMessageOption(messageType, extensionName, extensionType) {
    const options = messageType.options;
    const optionVal = options[extensionName];
    if (optionVal === undefined) {
        return optionVal;
    }
    return extensionType ? extensionType.fromJson(optionVal) : optionVal;
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-json-reader.js": 
/*!**********************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-json-reader.js ***!
  \**********************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  ReflectionJsonReader: () => (ReflectionJsonReader)
});
/* ESM import */var _json_typings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json-typings */ "./node_modules/@protobuf-ts/runtime/build/es2015/json-typings.js");
/* ESM import */var _base64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base64 */ "./node_modules/@protobuf-ts/runtime/build/es2015/base64.js");
/* ESM import */var _reflection_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reflection-info */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");
/* ESM import */var _pb_long__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pb-long */ "./node_modules/@protobuf-ts/runtime/build/es2015/pb-long.js");
/* ESM import */var _assert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assert */ "./node_modules/@protobuf-ts/runtime/build/es2015/assert.js");
/* ESM import */var _reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reflection-long-convert */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-long-convert.js");






/**
 * Reads proto3 messages in canonical JSON format using reflection information.
 *
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 */
class ReflectionJsonReader {
    constructor(info) {
        this.info = info;
    }
    prepare() {
        var _a;
        if (this.fMap === undefined) {
            this.fMap = {};
            const fieldsInput = (_a = this.info.fields) !== null && _a !== void 0 ? _a : [];
            for (const field of fieldsInput) {
                this.fMap[field.name] = field;
                this.fMap[field.jsonName] = field;
                this.fMap[field.localName] = field;
            }
        }
    }
    // Cannot parse JSON <type of jsonValue> for <type name>#<fieldName>.
    assert(condition, fieldName, jsonValue) {
        if (!condition) {
            let what = (0,_json_typings__WEBPACK_IMPORTED_MODULE_0__.typeofJsonValue)(jsonValue);
            if (what == "number" || what == "boolean")
                what = jsonValue.toString();
            throw new Error(`Cannot parse JSON ${what} for ${this.info.typeName}#${fieldName}`);
        }
    }
    /**
     * Reads a message from canonical JSON format into the target message.
     *
     * Repeated fields are appended. Map entries are added, overwriting
     * existing keys.
     *
     * If a message field is already present, it will be merged with the
     * new data.
     */
    read(input, message, options) {
        this.prepare();
        const oneofsHandled = [];
        for (const [jsonKey, jsonValue] of Object.entries(input)) {
            const field = this.fMap[jsonKey];
            if (!field) {
                if (!options.ignoreUnknownFields)
                    throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${jsonKey}`);
                continue;
            }
            const localName = field.localName;
            // handle oneof ADT
            let target; // this will be the target for the field value, whether it is member of a oneof or not
            if (field.oneof) {
                if (jsonValue === null && (field.kind !== 'enum' || field.T()[0] !== 'google.protobuf.NullValue')) {
                    continue;
                }
                // since json objects are unordered by specification, it is not possible to take the last of multiple oneofs
                if (oneofsHandled.includes(field.oneof))
                    throw new Error(`Multiple members of the oneof group "${field.oneof}" of ${this.info.typeName} are present in JSON.`);
                oneofsHandled.push(field.oneof);
                target = message[field.oneof] = {
                    oneofKind: localName
                };
            }
            else {
                target = message;
            }
            // we have handled oneof above. we just have read the value into `target`.
            if (field.kind == 'map') {
                if (jsonValue === null) {
                    continue;
                }
                // check input
                this.assert((0,_json_typings__WEBPACK_IMPORTED_MODULE_0__.isJsonObject)(jsonValue), field.name, jsonValue);
                // our target to put map entries into
                const fieldObj = target[localName];
                // read entries
                for (const [jsonObjKey, jsonObjValue] of Object.entries(jsonValue)) {
                    this.assert(jsonObjValue !== null, field.name + " map value", null);
                    // read value
                    let val;
                    switch (field.V.kind) {
                        case "message":
                            val = field.V.T().internalJsonRead(jsonObjValue, options);
                            break;
                        case "enum":
                            val = this.enum(field.V.T(), jsonObjValue, field.name, options.ignoreUnknownFields);
                            if (val === false)
                                continue;
                            break;
                        case "scalar":
                            val = this.scalar(jsonObjValue, field.V.T, field.V.L, field.name);
                            break;
                    }
                    this.assert(val !== undefined, field.name + " map value", jsonObjValue);
                    // read key
                    let key = jsonObjKey;
                    if (field.K == _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL)
                        key = key == "true" ? true : key == "false" ? false : key;
                    key = this.scalar(key, field.K, _reflection_info__WEBPACK_IMPORTED_MODULE_1__.LongType.STRING, field.name).toString();
                    fieldObj[key] = val;
                }
            }
            else if (field.repeat) {
                if (jsonValue === null)
                    continue;
                // check input
                this.assert(Array.isArray(jsonValue), field.name, jsonValue);
                // our target to put array entries into
                const fieldArr = target[localName];
                // read array entries
                for (const jsonItem of jsonValue) {
                    this.assert(jsonItem !== null, field.name, null);
                    let val;
                    switch (field.kind) {
                        case "message":
                            val = field.T().internalJsonRead(jsonItem, options);
                            break;
                        case "enum":
                            val = this.enum(field.T(), jsonItem, field.name, options.ignoreUnknownFields);
                            if (val === false)
                                continue;
                            break;
                        case "scalar":
                            val = this.scalar(jsonItem, field.T, field.L, field.name);
                            break;
                    }
                    this.assert(val !== undefined, field.name, jsonValue);
                    fieldArr.push(val);
                }
            }
            else {
                switch (field.kind) {
                    case "message":
                        if (jsonValue === null && field.T().typeName != 'google.protobuf.Value') {
                            this.assert(field.oneof === undefined, field.name + " (oneof member)", null);
                            continue;
                        }
                        target[localName] = field.T().internalJsonRead(jsonValue, options, target[localName]);
                        break;
                    case "enum":
                        if (jsonValue === null)
                            continue;
                        let val = this.enum(field.T(), jsonValue, field.name, options.ignoreUnknownFields);
                        if (val === false)
                            continue;
                        target[localName] = val;
                        break;
                    case "scalar":
                        if (jsonValue === null)
                            continue;
                        target[localName] = this.scalar(jsonValue, field.T, field.L, field.name);
                        break;
                }
            }
        }
    }
    /**
     * Returns `false` for unrecognized string representations.
     *
     * google.protobuf.NullValue accepts only JSON `null` (or the old `"NULL_VALUE"`).
     */
    enum(type, json, fieldName, ignoreUnknownFields) {
        if (type[0] == 'google.protobuf.NullValue')
            (0,_assert__WEBPACK_IMPORTED_MODULE_2__.assert)(json === null || json === "NULL_VALUE", `Unable to parse field ${this.info.typeName}#${fieldName}, enum ${type[0]} only accepts null.`);
        if (json === null)
            // we require 0 to be default value for all enums
            return 0;
        switch (typeof json) {
            case "number":
                (0,_assert__WEBPACK_IMPORTED_MODULE_2__.assert)(Number.isInteger(json), `Unable to parse field ${this.info.typeName}#${fieldName}, enum can only be integral number, got ${json}.`);
                return json;
            case "string":
                let localEnumName = json;
                if (type[2] && json.substring(0, type[2].length) === type[2])
                    // lookup without the shared prefix
                    localEnumName = json.substring(type[2].length);
                let enumNumber = type[1][localEnumName];
                if (typeof enumNumber === 'undefined' && ignoreUnknownFields) {
                    return false;
                }
                (0,_assert__WEBPACK_IMPORTED_MODULE_2__.assert)(typeof enumNumber == "number", `Unable to parse field ${this.info.typeName}#${fieldName}, enum ${type[0]} has no value for "${json}".`);
                return enumNumber;
        }
        (0,_assert__WEBPACK_IMPORTED_MODULE_2__.assert)(false, `Unable to parse field ${this.info.typeName}#${fieldName}, cannot parse enum value from ${typeof json}".`);
    }
    scalar(json, type, longType, fieldName) {
        let e;
        try {
            switch (type) {
                // float, double: JSON value will be a number or one of the special string values "NaN", "Infinity", and "-Infinity".
                // Either numbers or strings are accepted. Exponent notation is also accepted.
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.DOUBLE:
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FLOAT:
                    if (json === null)
                        return .0;
                    if (json === "NaN")
                        return Number.NaN;
                    if (json === "Infinity")
                        return Number.POSITIVE_INFINITY;
                    if (json === "-Infinity")
                        return Number.NEGATIVE_INFINITY;
                    if (json === "") {
                        e = "empty string";
                        break;
                    }
                    if (typeof json == "string" && json.trim().length !== json.length) {
                        e = "extra whitespace";
                        break;
                    }
                    if (typeof json != "string" && typeof json != "number") {
                        break;
                    }
                    let float = Number(json);
                    if (Number.isNaN(float)) {
                        e = "not a number";
                        break;
                    }
                    if (!Number.isFinite(float)) {
                        // infinity and -infinity are handled by string representation above, so this is an error
                        e = "too large or small";
                        break;
                    }
                    if (type == _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FLOAT)
                        (0,_assert__WEBPACK_IMPORTED_MODULE_2__.assertFloat32)(float);
                    return float;
                // int32, fixed32, uint32: JSON value will be a decimal number. Either numbers or strings are accepted.
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32:
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FIXED32:
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SFIXED32:
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SINT32:
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT32:
                    if (json === null)
                        return 0;
                    let int32;
                    if (typeof json == "number")
                        int32 = json;
                    else if (json === "")
                        e = "empty string";
                    else if (typeof json == "string") {
                        if (json.trim().length !== json.length)
                            e = "extra whitespace";
                        else
                            int32 = Number(json);
                    }
                    if (int32 === undefined)
                        break;
                    if (type == _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT32)
                        (0,_assert__WEBPACK_IMPORTED_MODULE_2__.assertUInt32)(int32);
                    else
                        (0,_assert__WEBPACK_IMPORTED_MODULE_2__.assertInt32)(int32);
                    return int32;
                // int64, fixed64, uint64: JSON value will be a decimal string. Either numbers or strings are accepted.
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT64:
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SFIXED64:
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SINT64:
                    if (json === null)
                        return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__.reflectionLongConvert)(_pb_long__WEBPACK_IMPORTED_MODULE_4__.PbLong.ZERO, longType);
                    if (typeof json != "number" && typeof json != "string")
                        break;
                    return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__.reflectionLongConvert)(_pb_long__WEBPACK_IMPORTED_MODULE_4__.PbLong.from(json), longType);
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FIXED64:
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT64:
                    if (json === null)
                        return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__.reflectionLongConvert)(_pb_long__WEBPACK_IMPORTED_MODULE_4__.PbULong.ZERO, longType);
                    if (typeof json != "number" && typeof json != "string")
                        break;
                    return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_3__.reflectionLongConvert)(_pb_long__WEBPACK_IMPORTED_MODULE_4__.PbULong.from(json), longType);
                // bool:
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL:
                    if (json === null)
                        return false;
                    if (typeof json !== "boolean")
                        break;
                    return json;
                // string:
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING:
                    if (json === null)
                        return "";
                    if (typeof json !== "string") {
                        e = "extra whitespace";
                        break;
                    }
                    try {
                        encodeURIComponent(json);
                    }
                    catch (e) {
                        e = "invalid UTF8";
                        break;
                    }
                    return json;
                // bytes: JSON value will be the data encoded as a string using standard base64 encoding with paddings.
                // Either standard or URL-safe base64 encoding with/without paddings are accepted.
                case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BYTES:
                    if (json === null || json === "")
                        return new Uint8Array(0);
                    if (typeof json !== 'string')
                        break;
                    return (0,_base64__WEBPACK_IMPORTED_MODULE_5__.base64decode)(json);
            }
        }
        catch (error) {
            e = error.message;
        }
        this.assert(false, fieldName + (e ? " - " + e : ""), json);
    }
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-json-writer.js": 
/*!**********************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-json-writer.js ***!
  \**********************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  ReflectionJsonWriter: () => (ReflectionJsonWriter)
});
/* ESM import */var _base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base64 */ "./node_modules/@protobuf-ts/runtime/build/es2015/base64.js");
/* ESM import */var _pb_long__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pb-long */ "./node_modules/@protobuf-ts/runtime/build/es2015/pb-long.js");
/* ESM import */var _reflection_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reflection-info */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");
/* ESM import */var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "./node_modules/@protobuf-ts/runtime/build/es2015/assert.js");




/**
 * Writes proto3 messages in canonical JSON format using reflection
 * information.
 *
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 */
class ReflectionJsonWriter {
    constructor(info) {
        var _a;
        this.fields = (_a = info.fields) !== null && _a !== void 0 ? _a : [];
    }
    /**
     * Converts the message to a JSON object, based on the field descriptors.
     */
    write(message, options) {
        const json = {}, source = message;
        for (const field of this.fields) {
            // field is not part of a oneof, simply write as is
            if (!field.oneof) {
                let jsonValue = this.field(field, source[field.localName], options);
                if (jsonValue !== undefined)
                    json[options.useProtoFieldName ? field.name : field.jsonName] = jsonValue;
                continue;
            }
            // field is part of a oneof
            const group = source[field.oneof];
            if (group.oneofKind !== field.localName)
                continue; // not selected, skip
            const opt = field.kind == 'scalar' || field.kind == 'enum'
                ? Object.assign(Object.assign({}, options), { emitDefaultValues: true }) : options;
            let jsonValue = this.field(field, group[field.localName], opt);
            (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(jsonValue !== undefined);
            json[options.useProtoFieldName ? field.name : field.jsonName] = jsonValue;
        }
        return json;
    }
    field(field, value, options) {
        let jsonValue = undefined;
        if (field.kind == 'map') {
            (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == "object" && value !== null);
            const jsonObj = {};
            switch (field.V.kind) {
                case "scalar":
                    for (const [entryKey, entryValue] of Object.entries(value)) {
                        const val = this.scalar(field.V.T, entryValue, field.name, false, true);
                        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(val !== undefined);
                        jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                    }
                    break;
                case "message":
                    const messageType = field.V.T();
                    for (const [entryKey, entryValue] of Object.entries(value)) {
                        const val = this.message(messageType, entryValue, field.name, options);
                        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(val !== undefined);
                        jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                    }
                    break;
                case "enum":
                    const enumInfo = field.V.T();
                    for (const [entryKey, entryValue] of Object.entries(value)) {
                        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(entryValue === undefined || typeof entryValue == 'number');
                        const val = this.enum(enumInfo, entryValue, field.name, false, true, options.enumAsInteger);
                        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(val !== undefined);
                        jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                    }
                    break;
            }
            if (options.emitDefaultValues || Object.keys(jsonObj).length > 0)
                jsonValue = jsonObj;
        }
        else if (field.repeat) {
            (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(Array.isArray(value));
            const jsonArr = [];
            switch (field.kind) {
                case "scalar":
                    for (let i = 0; i < value.length; i++) {
                        const val = this.scalar(field.T, value[i], field.name, field.opt, true);
                        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(val !== undefined);
                        jsonArr.push(val);
                    }
                    break;
                case "enum":
                    const enumInfo = field.T();
                    for (let i = 0; i < value.length; i++) {
                        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(value[i] === undefined || typeof value[i] == 'number');
                        const val = this.enum(enumInfo, value[i], field.name, field.opt, true, options.enumAsInteger);
                        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(val !== undefined);
                        jsonArr.push(val);
                    }
                    break;
                case "message":
                    const messageType = field.T();
                    for (let i = 0; i < value.length; i++) {
                        const val = this.message(messageType, value[i], field.name, options);
                        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(val !== undefined);
                        jsonArr.push(val);
                    }
                    break;
            }
            // add converted array to json output
            if (options.emitDefaultValues || jsonArr.length > 0 || options.emitDefaultValues)
                jsonValue = jsonArr;
        }
        else {
            switch (field.kind) {
                case "scalar":
                    jsonValue = this.scalar(field.T, value, field.name, field.opt, options.emitDefaultValues);
                    break;
                case "enum":
                    jsonValue = this.enum(field.T(), value, field.name, field.opt, options.emitDefaultValues, options.enumAsInteger);
                    break;
                case "message":
                    jsonValue = this.message(field.T(), value, field.name, options);
                    break;
            }
        }
        return jsonValue;
    }
    /**
     * Returns `null` as the default for google.protobuf.NullValue.
     */
    enum(type, value, fieldName, optional, emitDefaultValues, enumAsInteger) {
        if (type[0] == 'google.protobuf.NullValue')
            return !emitDefaultValues && !optional ? undefined : null;
        if (value === undefined) {
            (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(optional);
            return undefined;
        }
        if (value === 0 && !emitDefaultValues && !optional)
            // we require 0 to be default value for all enums
            return undefined;
        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == 'number');
        (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(Number.isInteger(value));
        if (enumAsInteger || !type[1].hasOwnProperty(value))
            // if we don't now the enum value, just return the number
            return value;
        if (type[2])
            // restore the dropped prefix
            return type[2] + type[1][value];
        return type[1][value];
    }
    message(type, value, fieldName, options) {
        if (value === undefined)
            return options.emitDefaultValues ? null : undefined;
        return type.internalJsonWrite(value, options);
    }
    scalar(type, value, fieldName, optional, emitDefaultValues) {
        if (value === undefined) {
            (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(optional);
            return undefined;
        }
        const ed = emitDefaultValues || optional;
        // noinspection FallThroughInSwitchStatementJS
        switch (type) {
            // int32, fixed32, uint32: JSON value will be a decimal number. Either numbers or strings are accepted.
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SFIXED32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SINT32:
                if (value === 0)
                    return ed ? 0 : undefined;
                (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assertInt32)(value);
                return value;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FIXED32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT32:
                if (value === 0)
                    return ed ? 0 : undefined;
                (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assertUInt32)(value);
                return value;
            // float, double: JSON value will be a number or one of the special string values "NaN", "Infinity", and "-Infinity".
            // Either numbers or strings are accepted. Exponent notation is also accepted.
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FLOAT:
                (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assertFloat32)(value);
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.DOUBLE:
                if (value === 0)
                    return ed ? 0 : undefined;
                (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == 'number');
                if (Number.isNaN(value))
                    return 'NaN';
                if (value === Number.POSITIVE_INFINITY)
                    return 'Infinity';
                if (value === Number.NEGATIVE_INFINITY)
                    return '-Infinity';
                return value;
            // string:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING:
                if (value === "")
                    return ed ? '' : undefined;
                (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == 'string');
                return value;
            // bool:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL:
                if (value === false)
                    return ed ? false : undefined;
                (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == 'boolean');
                return value;
            // JSON value will be a decimal string. Either numbers or strings are accepted.
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT64:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FIXED64:
                (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == 'number' || typeof value == 'string' || typeof value == 'bigint');
                let ulong = _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbULong.from(value);
                if (ulong.isZero() && !ed)
                    return undefined;
                return ulong.toString();
            // JSON value will be a decimal string. Either numbers or strings are accepted.
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT64:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SFIXED64:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SINT64:
                (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == 'number' || typeof value == 'string' || typeof value == 'bigint');
                let long = _pb_long__WEBPACK_IMPORTED_MODULE_2__.PbLong.from(value);
                if (long.isZero() && !ed)
                    return undefined;
                return long.toString();
            // bytes: JSON value will be the data encoded as a string using standard base64 encoding with paddings.
            // Either standard or URL-safe base64 encoding with/without paddings are accepted.
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BYTES:
                (0,_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(value instanceof Uint8Array);
                if (!value.byteLength)
                    return ed ? "" : undefined;
                return (0,_base64__WEBPACK_IMPORTED_MODULE_3__.base64encode)(value);
        }
    }
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-long-convert.js": 
/*!***********************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-long-convert.js ***!
  \***********************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  reflectionLongConvert: () => (reflectionLongConvert)
});
/* ESM import */var _reflection_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reflection-info */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");

/**
 * Utility method to convert a PbLong or PbUlong to a JavaScript
 * representation during runtime.
 *
 * Works with generated field information, `undefined` is equivalent
 * to `STRING`.
 */
function reflectionLongConvert(long, type) {
    switch (type) {
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.LongType.BIGINT:
            return long.toBigInt();
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.LongType.NUMBER:
            return long.toNumber();
        default:
            // case undefined:
            // case LongType.STRING:
            return long.toString();
    }
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-merge-partial.js": 
/*!************************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-merge-partial.js ***!
  \************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  reflectionMergePartial: () => (reflectionMergePartial)
});
/**
 * Copy partial data into the target message.
 *
 * If a singular scalar or enum field is present in the source, it
 * replaces the field in the target.
 *
 * If a singular message field is present in the source, it is merged
 * with the target field by calling mergePartial() of the responsible
 * message type.
 *
 * If a repeated field is present in the source, its values replace
 * all values in the target array, removing extraneous values.
 * Repeated message fields are copied, not merged.
 *
 * If a map field is present in the source, entries are added to the
 * target map, replacing entries with the same key. Entries that only
 * exist in the target remain. Entries with message values are copied,
 * not merged.
 *
 * Note that this function differs from protobuf merge semantics,
 * which appends repeated fields.
 */
function reflectionMergePartial(info, target, source) {
    let fieldValue, // the field value we are working with
    input = source, output; // where we want our field value to go
    for (let field of info.fields) {
        let name = field.localName;
        if (field.oneof) {
            const group = input[field.oneof]; // this is the oneof`s group in the source
            if ((group === null || group === void 0 ? void 0 : group.oneofKind) == undefined) { // the user is free to omit
                continue; // we skip this field, and all other members too
            }
            fieldValue = group[name]; // our value comes from the the oneof group of the source
            output = target[field.oneof]; // and our output is the oneof group of the target
            output.oneofKind = group.oneofKind; // always update discriminator
            if (fieldValue == undefined) {
                delete output[name]; // remove any existing value
                continue; // skip further work on field
            }
        }
        else {
            fieldValue = input[name]; // we are using the source directly
            output = target; // we want our field value to go directly into the target
            if (fieldValue == undefined) {
                continue; // skip further work on field, existing value is used as is
            }
        }
        if (field.repeat)
            output[name].length = fieldValue.length; // resize target array to match source array
        // now we just work with `fieldValue` and `output` to merge the value
        switch (field.kind) {
            case "scalar":
            case "enum":
                if (field.repeat)
                    for (let i = 0; i < fieldValue.length; i++)
                        output[name][i] = fieldValue[i]; // not a reference type
                else
                    output[name] = fieldValue; // not a reference type
                break;
            case "message":
                let T = field.T();
                if (field.repeat)
                    for (let i = 0; i < fieldValue.length; i++)
                        output[name][i] = T.create(fieldValue[i]);
                else if (output[name] === undefined)
                    output[name] = T.create(fieldValue); // nothing to merge with
                else
                    T.mergePartial(output[name], fieldValue);
                break;
            case "map":
                // Map and repeated fields are simply overwritten, not appended or merged
                switch (field.V.kind) {
                    case "scalar":
                    case "enum":
                        Object.assign(output[name], fieldValue); // elements are not reference types
                        break;
                    case "message":
                        let T = field.V.T();
                        for (let k of Object.keys(fieldValue))
                            output[name][k] = T.create(fieldValue[k]);
                        break;
                }
                break;
        }
    }
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-scalar-default.js": 
/*!*************************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-scalar-default.js ***!
  \*************************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  reflectionScalarDefault: () => (reflectionScalarDefault)
});
/* ESM import */var _reflection_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reflection-info */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");
/* ESM import */var _reflection_long_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reflection-long-convert */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-long-convert.js");
/* ESM import */var _pb_long__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pb-long */ "./node_modules/@protobuf-ts/runtime/build/es2015/pb-long.js");



/**
 * Creates the default value for a scalar type.
 */
function reflectionScalarDefault(type, longType = _reflection_info__WEBPACK_IMPORTED_MODULE_0__.LongType.STRING) {
    switch (type) {
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BOOL:
            return false;
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.UINT64:
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.FIXED64:
            return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_1__.reflectionLongConvert)(_pb_long__WEBPACK_IMPORTED_MODULE_2__.PbULong.ZERO, longType);
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.INT64:
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SFIXED64:
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.SINT64:
            return (0,_reflection_long_convert__WEBPACK_IMPORTED_MODULE_1__.reflectionLongConvert)(_pb_long__WEBPACK_IMPORTED_MODULE_2__.PbLong.ZERO, longType);
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.DOUBLE:
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.FLOAT:
            return 0.0;
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.BYTES:
            return new Uint8Array(0);
        case _reflection_info__WEBPACK_IMPORTED_MODULE_0__.ScalarType.STRING:
            return "";
        default:
            // case ScalarType.INT32:
            // case ScalarType.UINT32:
            // case ScalarType.SINT32:
            // case ScalarType.FIXED32:
            // case ScalarType.SFIXED32:
            return 0;
    }
}


}),
"./node_modules/@protobuf-ts/runtime/build/es2015/reflection-type-check.js": 
/*!*********************************************************************************!*\
  !*** ./node_modules/@protobuf-ts/runtime/build/es2015/reflection-type-check.js ***!
  \*********************************************************************************/
(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  ReflectionTypeCheck: () => (ReflectionTypeCheck)
});
/* ESM import */var _reflection_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reflection-info */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");
/* ESM import */var _oneof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oneof */ "./node_modules/@protobuf-ts/runtime/build/es2015/oneof.js");


// noinspection JSMethodCanBeStatic
class ReflectionTypeCheck {
    constructor(info) {
        var _a;
        this.fields = (_a = info.fields) !== null && _a !== void 0 ? _a : [];
    }
    prepare() {
        if (this.data)
            return;
        const req = [], known = [], oneofs = [];
        for (let field of this.fields) {
            if (field.oneof) {
                if (!oneofs.includes(field.oneof)) {
                    oneofs.push(field.oneof);
                    req.push(field.oneof);
                    known.push(field.oneof);
                }
            }
            else {
                known.push(field.localName);
                switch (field.kind) {
                    case "scalar":
                    case "enum":
                        if (!field.opt || field.repeat)
                            req.push(field.localName);
                        break;
                    case "message":
                        if (field.repeat)
                            req.push(field.localName);
                        break;
                    case "map":
                        req.push(field.localName);
                        break;
                }
            }
        }
        this.data = { req, known, oneofs: Object.values(oneofs) };
    }
    /**
     * Is the argument a valid message as specified by the
     * reflection information?
     *
     * Checks all field types recursively. The `depth`
     * specifies how deep into the structure the check will be.
     *
     * With a depth of 0, only the presence of fields
     * is checked.
     *
     * With a depth of 1 or more, the field types are checked.
     *
     * With a depth of 2 or more, the members of map, repeated
     * and message fields are checked.
     *
     * Message fields will be checked recursively with depth - 1.
     *
     * The number of map entries / repeated values being checked
     * is < depth.
     */
    is(message, depth, allowExcessProperties = false) {
        if (depth < 0)
            return true;
        if (message === null || message === undefined || typeof message != 'object')
            return false;
        this.prepare();
        let keys = Object.keys(message), data = this.data;
        // if a required field is missing in arg, this cannot be a T
        if (keys.length < data.req.length || data.req.some(n => !keys.includes(n)))
            return false;
        if (!allowExcessProperties) {
            // if the arg contains a key we dont know, this is not a literal T
            if (keys.some(k => !data.known.includes(k)))
                return false;
        }
        // "With a depth of 0, only the presence and absence of fields is checked."
        // "With a depth of 1 or more, the field types are checked."
        if (depth < 1) {
            return true;
        }
        // check oneof group
        for (const name of data.oneofs) {
            const group = message[name];
            if (!(0,_oneof__WEBPACK_IMPORTED_MODULE_0__.isOneofGroup)(group))
                return false;
            if (group.oneofKind === undefined)
                continue;
            const field = this.fields.find(f => f.localName === group.oneofKind);
            if (!field)
                return false; // we found no field, but have a kind, something is wrong
            if (!this.field(group[group.oneofKind], field, allowExcessProperties, depth))
                return false;
        }
        // check types
        for (const field of this.fields) {
            if (field.oneof !== undefined)
                continue;
            if (!this.field(message[field.localName], field, allowExcessProperties, depth))
                return false;
        }
        return true;
    }
    field(arg, field, allowExcessProperties, depth) {
        let repeated = field.repeat;
        switch (field.kind) {
            case "scalar":
                if (arg === undefined)
                    return field.opt;
                if (repeated)
                    return this.scalars(arg, field.T, depth, field.L);
                return this.scalar(arg, field.T, field.L);
            case "enum":
                if (arg === undefined)
                    return field.opt;
                if (repeated)
                    return this.scalars(arg, _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32, depth);
                return this.scalar(arg, _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32);
            case "message":
                if (arg === undefined)
                    return true;
                if (repeated)
                    return this.messages(arg, field.T(), allowExcessProperties, depth);
                return this.message(arg, field.T(), allowExcessProperties, depth);
            case "map":
                if (typeof arg != 'object' || arg === null)
                    return false;
                if (depth < 2)
                    return true;
                if (!this.mapKeys(arg, field.K, depth))
                    return false;
                switch (field.V.kind) {
                    case "scalar":
                        return this.scalars(Object.values(arg), field.V.T, depth, field.V.L);
                    case "enum":
                        return this.scalars(Object.values(arg), _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32, depth);
                    case "message":
                        return this.messages(Object.values(arg), field.V.T(), allowExcessProperties, depth);
                }
                break;
        }
        return true;
    }
    message(arg, type, allowExcessProperties, depth) {
        if (allowExcessProperties) {
            return type.isAssignable(arg, depth);
        }
        return type.is(arg, depth);
    }
    messages(arg, type, allowExcessProperties, depth) {
        if (!Array.isArray(arg))
            return false;
        if (depth < 2)
            return true;
        if (allowExcessProperties) {
            for (let i = 0; i < arg.length && i < depth; i++)
                if (!type.isAssignable(arg[i], depth - 1))
                    return false;
        }
        else {
            for (let i = 0; i < arg.length && i < depth; i++)
                if (!type.is(arg[i], depth - 1))
                    return false;
        }
        return true;
    }
    scalar(arg, type, longType) {
        let argType = typeof arg;
        switch (type) {
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT64:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FIXED64:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT64:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SFIXED64:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SINT64:
                switch (longType) {
                    case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.LongType.BIGINT:
                        return argType == "bigint";
                    case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.LongType.NUMBER:
                        return argType == "number" && !isNaN(arg);
                    default:
                        return argType == "string";
                }
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL:
                return argType == 'boolean';
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING:
                return argType == 'string';
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BYTES:
                return arg instanceof Uint8Array;
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.DOUBLE:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FLOAT:
                return argType == 'number' && !isNaN(arg);
            default:
                // case ScalarType.UINT32:
                // case ScalarType.FIXED32:
                // case ScalarType.INT32:
                // case ScalarType.SINT32:
                // case ScalarType.SFIXED32:
                return argType == 'number' && Number.isInteger(arg);
        }
    }
    scalars(arg, type, depth, longType) {
        if (!Array.isArray(arg))
            return false;
        if (depth < 2)
            return true;
        if (Array.isArray(arg))
            for (let i = 0; i < arg.length && i < depth; i++)
                if (!this.scalar(arg[i], type, longType))
                    return false;
        return true;
    }
    mapKeys(map, type, depth) {
        let keys = Object.keys(map);
        switch (type) {
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.FIXED32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SFIXED32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.SINT32:
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.UINT32:
                return this.scalars(keys.slice(0, depth).map(k => parseInt(k)), type, depth);
            case _reflection_info__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL:
                return this.scalars(keys.slice(0, depth).map(k => k == 'true' ? true : k == 'false' ? false : k), type, depth);
            default:
                return this.scalars(keys, type, depth, _reflection_info__WEBPACK_IMPORTED_MODULE_1__.LongType.STRING);
        }
    }
}


}),
"./node_modules/crypto-js/core.js": 
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
(function (module, exports, __webpack_require__) {
;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.crypto) {
	        crypto = __webpack_require__.g.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && 'function' === 'function') {
	        try {
	            crypto = __webpack_require__(/*! crypto */ "?f97c");
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

}),
"./node_modules/crypto-js/md5.js": 
/*!***************************************!*\
  !*** ./node_modules/crypto-js/md5.js ***!
  \***************************************/
(function (module, exports, __webpack_require__) {
;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

}),
"?f97c": 
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
(function () {
"use strict";
/* (ignored) */

}),
"./node_modules/@nsnanocat/url/URL.mjs": 
/*!*********************************************!*\
  !*** ./node_modules/@nsnanocat/url/URL.mjs ***!
  \*********************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
__webpack_require__.d(__webpack_exports__, {
  $app: () => (/* reexport safe */ _lib_app_mjs__WEBPACK_IMPORTED_MODULE_0__.$app),
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"./src/class/Translate.mjs": 
/*!*********************************!*\
  !*** ./src/class/Translate.mjs ***!
  \*********************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Translate)
});
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");
/* ESM import */var crypto_js_md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js/md5.js */ "./node_modules/crypto-js/md5.js");



class Translate {
	constructor(options = {}) {
		this.Name = "Translate";
		this.Version = "1.0.7";
		_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log(`🟧 ${this.Name} v${this.Version}`);
		this.Source = "AUTO";
		this.Target = "ZH";
		this.API = {};
		Object.assign(this, options);
	}

	#LanguagesCode = {
		Google: {
			AUTO: "auto",
			AF: "af",
			AM: "am",
			AR: "ar",
			AS: "as",
			AY: "ay",
			AZ: "az",
			BG: "bg",
			BE: "be",
			BM: "bm",
			BN: "bn",
			BHO: "bho",
			CS: "cs",
			DA: "da",
			DE: "de",
			EL: "el",
			EU: "eu",
			EN: "en",
			"EN-GB": "en",
			"EN-US": "en",
			"EN-US SDH": "en",
			ES: "es",
			"ES-419": "es",
			"ES-ES": "es",
			ET: "et",
			FI: "fi",
			FR: "fr",
			"FR-CA": "fr",
			HU: "hu",
			ID: "id",
			IS: "is",
			IT: "it",
			JA: "ja",
			KM: "km",
			KO: "ko",
			LT: "lt",
			LV: "lv",
			NL: "nl",
			NO: "no",
			PL: "pl",
			PT: "pt",
			"PT-PT": "pt",
			"PT-BR": "pt",
			PA: "pa",
			RO: "ro",
			RU: "ru",
			SK: "sk",
			SL: "sl",
			SQ: "sq",
			ST: "st",
			SV: "sv",
			TH: "th",
			TR: "tr",
			UK: "uk",
			UR: "ur",
			VI: "vi",
			ZH: "zh",
			"ZH-HANS": "zh-CN",
			"ZH-HK": "zh-TW",
			"ZH-HANT": "zh-TW",
		},
		Microsoft: {
			AUTO: "",
			AF: "af",
			AM: "am",
			AR: "ar",
			AS: "as",
			AY: "ay",
			AZ: "az",
			BG: "bg",
			BE: "be",
			BM: "bm",
			BN: "bn",
			BHO: "bho",
			CS: "cs",
			DA: "da",
			DE: "de",
			EL: "el",
			EU: "eu",
			EN: "en",
			"EN-GB": "en",
			"EN-US": "en",
			"EN-US SDH": "en",
			ES: "es",
			"ES-419": "es",
			"ES-ES": "es",
			ET: "et",
			FI: "fi",
			FR: "fr",
			"FR-CA": "fr-ca",
			HU: "hu",
			ID: "id",
			IS: "is",
			IT: "it",
			JA: "ja",
			KM: "km",
			KO: "ko",
			LT: "lt",
			LV: "lv",
			NL: "nl",
			NO: "no",
			PL: "pl",
			PT: "pt",
			"PT-PT": "pt-pt",
			"PT-BR": "pt",
			PA: "pa",
			RO: "ro",
			RU: "ru",
			SK: "sk",
			SL: "sl",
			SQ: "sq",
			ST: "st",
			SV: "sv",
			TH: "th",
			TR: "tr",
			UK: "uk",
			UR: "ur",
			VI: "vi",
			ZH: "zh-Hans",
			"ZH-HANS": "zh-Hans",
			"ZH-HK": "yue",
			"ZH-HANT": "zh-Hant",
		},
		DeepL: { AUTO: "", BG: "BG", CS: "CS", DA: "DA", DE: "de", EL: "el", EN: "EN", ES: "ES", ET: "ET", FI: "FI", FR: "FR", HU: "HU", ID: "ID", IT: "IT", JA: "JA", KO: "ko", LT: "LT", LV: "LV", NL: "NL", PL: "PL", PT: "PT", RO: "RO", RU: "RU", SK: "SK", SL: "SL", SV: "SV", TR: "TR", ZH: "ZH" },
		Baidu: {
			AUTO: "auto",
			AR: "ara",
			CS: "cs",
			DA: "dan",
			DE: "de",
			EL: "el",
			EN: "en",
			ES: "spa",
			ET: "est",
			FI: "fin",
			FR: "fra",
			HU: "hu",
			IT: "it",
			JA: "jp",
			KO: "kor",
			NL: "nl",
			PL: "pl",
			PT: "pt",
			RO: "RO",
			RU: "rom",
			SL: "slo",
			SV: "swe",
			TH: "th",
			VI: "vie",
			ZH: "zh",
			"ZH-HANS": "zh",
			"ZH-HK": "cht",
			"ZH-HANT": "cht",
		},
	};

	#UAPool = [
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36", // 13.5%
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36", // 6.6%
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0", // 6.4%
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0", // 6.2%
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36", // 5.2%
		"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36", // 4.8%
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134",
		"Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
		"Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
		"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0",
	];

	#Length = {
		Google: 120,
		GoogleCloud: 120,
		Microsoft: 99,
		Azure: 99,
		DeepL: 49,
		OpenAI: 50,
	};

	async Google(text = [], source = this.Source, target = this.Target) {
		text = Array.isArray(text) ? text : [text];
		source = this.#LanguagesCode.Google[source] ?? this.#LanguagesCode.Google[source?.split?.(/[-_]/)?.[0]] ?? source.toLowerCase();
		target = this.#LanguagesCode.Google[target] ?? this.#LanguagesCode.Google[target?.split?.(/[-_]/)?.[0]] ?? target.toLowerCase();
		const BaseRequest = [
			{
				// Google API
				url: "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t",
				headers: {
					Accept: "*/*",
					"User-Agent": this.#UAPool[Math.floor(Math.random() * this.#UAPool.length)], // 随机UA
					Referer: "https://translate.google.com",
				},
			},
			{
				// Google Dictionary Chrome extension https://chrome.google.com/webstore/detail/google-dictionary-by-goog/mgijmajocgfcbeboacabfgobmjgjcoja
				url: "https://clients5.google.com/translate_a/t?client=dict-chrome-ex",
				headers: {
					Accept: "*/*",
					"User-Agent": this.#UAPool[Math.floor(Math.random() * this.#UAPool.length)], // 随机UA
				},
			},
			{
				// Google Translate App
				url: "https://translate.google.com/translate_a/single?client=it&dt=qca&dt=t&dt=rmt&dt=bd&dt=rms&dt=sos&dt=md&dt=gt&dt=ld&dt=ss&dt=ex&otf=2&dj=1&hl=en&ie=UTF-8&oe=UTF-8",
				headers: {
					Accept: "*/*",
					"User-Agent": "GoogleTranslate/6.29.59279 (iPhone; iOS 15.4; en; iPhone14,2)",
				},
			},
			{
				// Google Translate App
				url: "https://translate.googleapis.com/translate_a/single?client=gtx&dj=1&source=bubble&dt=t&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at",
				headers: {
					Accept: "*/*",
					"User-Agent": "GoogleTranslate/6.29.59279 (iPhone; iOS 15.4; en; iPhone14,2)",
				},
			},
		];
		const request = BaseRequest[Math.floor(Math.random() * (BaseRequest.length - 2))]; // 随机Request, 排除最后两项
		request.url = `${request.url}&sl=${source}&tl=${target}&q=${encodeURIComponent(text.join("\r"))}`;
		return await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(request)
			.then(response => {
				const body = JSON.parse(response.body);
				if (Array.isArray(body)) {
					if (Array.isArray(body?.[0])) {
						if (body.length === 1) {
							body[0].pop();
							text = body[0] ?? `翻译失败, vendor: ${"google"}`;
						} else text = body?.[0]?.map(item => item?.[0] ?? `翻译失败, vendor: ${"google"}`);
					} else text = body ?? `翻译失败, vendor: ${"google"}`;
				} else if (body?.sentences) text = body?.sentences?.map(item => item?.trans ?? `翻译失败, vendor: ${"google"}`);
				return text?.join("")?.split(/\r/);
			})
			.catch(error => Promise.reject(error));
	}

	async GoogleCloud(text = [], source = this.Source, target = this.Target, api = this.API) {
		text = Array.isArray(text) ? text : [text];
		source = this.#LanguagesCode.Google[source] ?? this.#LanguagesCode.Google[source?.split?.(/[-_]/)?.[0]] ?? source.toLowerCase();
		target = this.#LanguagesCode.Google[target] ?? this.#LanguagesCode.Google[target?.split?.(/[-_]/)?.[0]] ?? target.toLowerCase();
		const request = {};
		const BaseURL = "https://translation.googleapis.com";
		switch (api?.Version) {
			case "v2":
			default:
				request.url = `${BaseURL}/language/translate/v2`;
				request.headers = {
					//"Authorization": `Bearer ${api?.Token ?? api?.Auth}`,
					"User-Agent": "DualSubs",
					"Content-Type": "application/json; charset=utf-8",
				};
				request.body = JSON.stringify({
					q: text,
					source: source,
					target: target,
					format: "html",
					//"key": api?.Key
				});
				switch (api?.Mode) {
					case "Token":
						request.headers.Authorization = `Bearer ${api?.Token ?? api?.Auth}`;
						break;
					case "Key":
					default:
						request.url += `?key=${api?.Key ?? api?.Auth}`;
						break;
				}
				break;
			case "v3":
				request.url = `${BaseURL}/v3/projects/${api?.ID}`;
				request.headers = {
					Authorization: `Bearer ${api?.Token ?? api?.Auth}`,
					"x-goog-user-project": api?.ID,
					"User-Agent": "DualSubs",
					"Content-Type": "application/json; charset=utf-8",
				};
				request.body = JSON.stringify({
					sourceLanguageCode: source,
					targetLanguageCode: target,
					contents: Array.isArray(text) ? text : [text],
					mimeType: "text/html",
				});
				break;
		}
		return await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(request)
			.then(response => {
				const body = JSON.parse(response.body);
				return body?.data?.translations?.map(item => item?.translatedText ?? `翻译失败, vendor: ${"GoogleCloud"}`);
			})
			.catch(error => Promise.reject(error));
	}

	async Microsoft(text = [], source = this.Source, target = this.Target, api = this.API) {
		text = Array.isArray(text) ? text : [text];
		source = this.#LanguagesCode.Microsoft[source] ?? this.#LanguagesCode.Microsoft[source?.split?.(/[-_]/)?.[0]] ?? source.toLowerCase();
		target = this.#LanguagesCode.Microsoft[target] ?? this.#LanguagesCode.Microsoft[target?.split?.(/[-_]/)?.[0]] ?? target.toLowerCase();
		const request = {};
		let BaseURL = "https://api.cognitive.microsofttranslator.com";
		switch (api?.Version) {
			case "Azure":
			default:
				BaseURL = "https://api.cognitive.microsofttranslator.com";
				break;
			case "AzureCN":
				BaseURL = "https://api.translator.azure.cn";
				break;
			case "AzureUS":
				BaseURL = "https://api.cognitive.microsofttranslator.us";
				break;
		}
		request.url = `${BaseURL}/translate?api-version=3.0&textType=html&${source ? `from=${source}` : ""}&to=${target}`;
		request.headers = {
			"Content-Type": "application/json; charset=UTF-8",
			Accept: "application/json, text/javascript, */*; q=0.01",
			"Accept-Language": "zh-hans",
			//"Authorization": `Bearer ${api?.Auth}`,
			//"Ocp-Apim-Subscription-Key": api?.Auth,
			//"Ocp-Apim-Subscription-Region": api?.Region, // chinanorth, chinaeast2
			//"X-ClientTraceId": uuidv4().toString()
		};
		switch (api?.Mode) {
			case "Token":
			default:
				request.headers.Authorization = `Bearer ${api?.Token ?? api?.Auth}`;
				break;
			case "Key":
				request.headers["Ocp-Apim-Subscription-Key"] = api?.Key ?? api?.Auth;
				request.headers["Ocp-Apim-Subscription-Region"] = api?.Region;
				break;
		}
		text = text.map(item => {
			return { text: item };
		});
		request.body = JSON.stringify(text);
		return await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(request)
			.then(response => {
				const body = JSON.parse(response.body);
				return body?.map(item => item?.translations?.[0]?.text ?? `翻译失败, vendor: ${"Microsoft"}`);
			})
			.catch(error => Promise.reject(error));
	}

	async DeepL(text = [], source = this.Source, target = this.Target, api = this.API) {
		text = Array.isArray(text) ? text : [text];
		source = this.#LanguagesCode.DeepL[source] ?? this.#LanguagesCode.DeepL[source?.split?.(/[-_]/)?.[0]] ?? source.toLowerCase();
		target = this.#LanguagesCode.DeepL[target] ?? this.#LanguagesCode.DeepL[target?.split?.(/[-_]/)?.[0]] ?? target.toLowerCase();
		const request = {};
		let BaseURL = "https://api-free.deepl.com";
		switch (api?.Version) {
			case "Free":
			default:
				BaseURL = "https://api-free.deepl.com";
				break;
			case "Pro":
				BaseURL = "https://api.deepl.com";
				break;
		}
		request.url = `${BaseURL}/v2/translate`;
		request.headers = {
			//"Accept": "*/*",
			"User-Agent": "DualSubs",
			"Content-Type": "application/json",
			Authorization: `DeepL-Auth-Key ${api?.Token ?? api?.Auth}`,
		};
		const body = {
			text: text,
			//"source_lang": source,
			target_lang: target,
			tag_handling: "html",
		};
		if (source) body.source_lang = source;
		request.body = JSON.stringify(body);
		return await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(request)
			.then(response => {
				const body = JSON.parse(response.body);
				return body?.translations?.map(item => item?.text ?? `翻译失败, vendor: ${"DeepL"}`);
			})
			.catch(error => Promise.reject(error));
	}

	async BaiduFanyi(text = [], source = this.Source, target = this.Target, api = this.API) {
		text = Array.isArray(text) ? text : [text];
		source = this.#LanguagesCode.Baidu[source] ?? this.#LanguagesCode.Baidu[source?.split?.(/[-_]/)?.[0]] ?? source.toLowerCase();
		target = this.#LanguagesCode.Baidu[target] ?? this.#LanguagesCode.Baidu[target?.split?.(/[-_]/)?.[0]] ?? target.toLowerCase();
		const request = {};
		// https://fanyi-api.baidu.com/doc/24
		const BaseURL = "https://fanyi-api.baidu.com";
		request.url = `${BaseURL}/api/trans/vip/language`;
		request.headers = {
			"User-Agent": "DualSubs",
			"Content-Type": "application/x-www-form-urlencoded",
		};
		const salt = new Date().getTime();
		request.body = `q=${encodeURIComponent(text.join("\n"))}&from=${source}&to=${target}&appid=${api.id}&salt=${salt}&sign=${crypto_js_md5_js__WEBPACK_IMPORTED_MODULE_1__(api.id + text + salt + api.key)}`;
		return await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(request)
			.then(response => {
				const body = JSON.parse(response.body);
				return body?.trans_result?.map(item => item?.dst ?? `翻译失败, vendor: ${"BaiduFanyi"}`);
			})
			.catch(error => Promise.reject(_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.error(error)));
	}

	async YoudaoAI(text = [], source = this.Source, target = this.Target, api = this.API) {
		text = Array.isArray(text) ? text : [text];
		source = this.#LanguagesCode.Youdao[source] ?? this.#LanguagesCode.Youdao[source?.split?.(/[-_]/)?.[0]];
		target = this.#LanguagesCode.Youdao[target] ?? this.#LanguagesCode.Youdao[target?.split?.(/[-_]/)?.[0]];
		const request = {};
		// https://ai.youdao.com/docs
		// https://ai.youdao.com/DOCSIRMA/html/自然语言翻译/API文档/文本翻译服务/文本翻译服务-API文档.html
		const BaseURL = "https://openapi.youdao.com";
		request.url = `${BaseURL}/api`;
		request.headers = {
			"User-Agent": "DualSubs",
			"Content-Type": "application/json; charset=utf-8",
		};
		request.body = {
			q: text,
			from: source,
			to: target,
			appKey: api?.Key,
			salt: new Date().getTime(),
			signType: "v3",
			sign: "",
			curtime: Math.floor(+new Date() / 1000),
		};
		return await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(request)
			.then(response => {
				const body = JSON.parse(response.body);
				return body?.data ?? `翻译失败, vendor: ${"DeepL"}`;
			})
			.catch(error => Promise.reject(error));
		}

		/**
		 * 支持所有 OpenAI API 兼容的服务，包括：
		 * - OpenAI
		 * - Gemini (通过 OpenAI 兼容端点)
		 * - 本地部署的 LLM (如 Ollama, LMStudio, vLLM 等)
		 * - 其他 OpenAI 兼容服务
		 * @author DualSubs Modified
		 */
		async OpenAI(text = [], source = this.Source, target = this.Target, api = this.API) {
			text = Array.isArray(text) ? text : [text];
			// 语言代码转换为自然语言名称
		const languageNames = {
			AUTO: "the same language as the source",
			ZH: "Chinese", "ZH-HANS": "Simplified Chinese", "ZH-HANT": "Traditional Chinese", "ZH-HK": "Traditional Chinese (Hong Kong)",
			EN: "English", "EN-US": "American English", "EN-GB": "British English",
			JA: "Japanese", KO: "Korean", DE: "German", FR: "French", ES: "Spanish",
			PT: "Portuguese", IT: "Italian", RU: "Russian", AR: "Arabic", TH: "Thai",
			VI: "Vietnamese", ID: "Indonesian", TR: "Turkish", PL: "Polish", NL: "Dutch",
			DA: "Danish", FI: "Finnish", SV: "Swedish", NO: "Norwegian", CS: "Czech",
			HU: "Hungarian", EL: "Greek", RO: "Romanian", SK: "Slovak", UK: "Ukrainian",
			BG: "Bulgarian", HR: "Croatian", LT: "Lithuanian", SL: "Slovenian", ET: "Estonian", LV: "Latvian",
		};
			const targetLang = languageNames[target] ?? languageNames[target?.split?.(/[-_]/)?.[0]] ?? target;
			const sourceLang = source === "AUTO" ? "" : (languageNames[source] ?? languageNames[source?.split?.(/[-_]/)?.[0]] ?? source);
			
			// 构建请求
			const request = {};
			const separator = "\n[LINE_BREAK]\n";
			const baseURL = (api?.BaseURL ?? api?.Endpoint ?? "https://api.openai.com").replace(/\/+$/, "");
			request.url = `${baseURL}/v1/chat/completions`;
			request.headers = {
				"Content-Type": "application/json",
				"User-Agent": "DualSubs",
			};
			// 添加认证头
			if (api?.Auth) {
				request.headers["Authorization"] = `Bearer ${api.Auth}`;
			}
			
			// 构建翻译提示
			const systemPrompt = `You are a professional subtitle translator. Translate the user's subtitles to ${targetLang}.
Rules:
1. Keep the translation natural and fluent.
2. Maintain the original meaning and tone.
3. Preserve HTML tags and special formatting exactly.
4. Preserve line breaks and DO NOT merge/split lines.
5. Output ONLY the translated text: no explanations, no numbering, no quotes, no code fences.
6. Keep the separator "[LINE_BREAK]" exactly unchanged.
${sourceLang ? `7. The source language is ${sourceLang}.` : ""}`;

			const userContent = text.join(separator);
			
			request.body = JSON.stringify({
				model: api?.Model ?? "gemini-3-pro-preview",
				messages: [
					{ role: "system", content: systemPrompt },
					{ role: "user", content: userContent }
				],
				temperature: 0.3,
				max_tokens: 4096,
			});
			
			return await (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.fetch)(request)
				.then(response => {
					const body = JSON.parse(response.body);
					if (body?.error) {
						_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.error(`OpenAI API Error: ${body.error.message}`);
						return text.map(() => `翻译失败: ${body.error.message}`);
					}
					const translatedText = body?.choices?.[0]?.message?.content;
					if (!translatedText) {
						return text.map(() => `翻译失败, vendor: OpenAI`);
					}
					let translatedLines = [];
					if (translatedText.includes("[LINE_BREAK]")) {
						translatedLines = translatedText.split(/\s*\[LINE_BREAK\]\s*/).map(line => line.trim());
					} else {
						// 回退：按行分割翻译结果
						translatedLines = translatedText.trim().split(/\n/).map(line => line.trim());
					}
					// 确保返回的行数与输入相同
					if (translatedLines.length === text.length) {
						return translatedLines;
					} else if (translatedLines.length > text.length) {
						// 如果返回行数多，截取
						return translatedLines.slice(0, text.length);
					} else {
						// 如果返回行数少，用原文补齐
						return text.map((original, i) => translatedLines[i] ?? original);
					}
				})
				.catch(error => {
					_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.error(`OpenAI Translation Error: ${error}`);
					return Promise.reject(error);
				});
		}
	}


}),
"./src/function/database.mjs": 
/*!***********************************!*\
  !*** ./src/function/database.mjs ***!
  \***********************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
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
			OpenAI: {
				BaseURL: "http://192.168.31.203:8317/v1",
				Model: "gemini-3-pro-preview",
				Auth: "dummy-not-used",
			},
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
"use strict";
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
"use strict";
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
"use strict";
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
"use strict";
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
"./src/protobuf/google/protos/youtube/api/innertube/BrowseResponse.js": 
/*!****************************************************************************!*\
  !*** ./src/protobuf/google/protos/youtube/api/innertube/BrowseResponse.js ***!
  \****************************************************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  BrowseResponse: () => (BrowseResponse)
});
/* ESM import */var _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @protobuf-ts/runtime */ "./node_modules/@protobuf-ts/runtime/build/es2015/message-type.js");
/* ESM import */var _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @protobuf-ts/runtime */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");


/**
 * 说明：
 * - 这里并不追求完整还原 YouTube 的 proto schema，只实现 DualSubs 目前用到的字段树。
 * - 依赖 protobuf-ts 的 unknown field 机制，未声明的字段会被保留并在 toBinary() 时写回。
 * - `contents.renderer` 是一个兼容层：历史版本直接在 contents 下挂各类 renderer，
 *   近期代码改为 `contents.renderer.xxx` 访问。这里通过 getter 让两种写法都能工作。
 */

// ---- Leaf ----
class N13F1$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("n13F1", [{ no: 1, name: "f1", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING }]);
	}
}
const N13F1 = new N13F1$Type();

class N12F4$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("n12F4", [
			{ no: 1, name: "n13F1", kind: "message", repeat: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.RepeatType.UNPACKED, T: () => N13F1 },
			{ no: 2, name: "originText", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
		]);
	}
}
const N12F4 = new N12F4$Type();

class N11F465160965$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("n11F465160965", [{ no: 4, name: "n12F4", kind: "message", T: () => N12F4 }]);
	}
}
const N11F465160965 = new N11F465160965$Type();

class N10F5$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("n10F5", [{ no: 465160965, name: "n11F465160965", kind: "message", T: () => N11F465160965 }]);
	}
}
const N10F5 = new N10F5$Type();

class N9F168777401$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("n9F168777401", [{ no: 5, name: "n10F5", kind: "message", T: () => N10F5 }]);
	}
}
const N9F168777401 = new N9F168777401$Type();

class N8F1$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("n8F1", [{ no: 168777401, name: "n9F168777401", kind: "message", T: () => N9F168777401 }]);
	}
}
const N8F1 = new N8F1$Type();

class N7F172660663$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("n7F172660663", [{ no: 1, name: "n8F1", kind: "message", T: () => N8F1 }]);
	}
}
const N7F172660663 = new N7F172660663$Type();

class ElementRenderer$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("elementRenderer", [{ no: 172660663, name: "n7F172660663", kind: "message", T: () => N7F172660663 }]);
	}
}
const ElementRenderer = new ElementRenderer$Type();

// ---- Music description (lyrics) ----
class Runs$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("Runs", [{ no: 1, name: "text", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING }]);
	}
}
const Runs = new Runs$Type();

class Description$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("Description", [{ no: 1, name: "runs", kind: "message", repeat: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.RepeatType.UNPACKED, T: () => Runs }]);
	}
}
const Description = new Description$Type();

class Footer$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("Footer", [{ no: 1, name: "runs", kind: "message", repeat: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.RepeatType.UNPACKED, T: () => Runs }]);
	}
}
const Footer = new Footer$Type();

class MusicDescriptionShelfRenderer$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("MusicDescriptionShelfRenderer", [
			{ no: 3, name: "description", kind: "message", T: () => Description },
			{ no: 10, name: "footer", kind: "message", T: () => Footer },
		]);
	}
}
const MusicDescriptionShelfRenderer = new MusicDescriptionShelfRenderer$Type();

// ---- Section list ----
class SectionListRenderer$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("SectionListRenderer", [
			{ no: 1, name: "contents", kind: "message", repeat: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.RepeatType.UNPACKED, T: () => Contents },
			{ no: 6, name: "header", kind: "message", T: () => Contents },
		]);
	}
}
const SectionListRenderer = new SectionListRenderer$Type();

class Contents$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("Contents", [
			{ no: 49399797, name: "sectionListRenderer", kind: "message", T: () => SectionListRenderer },
			{ no: 153515154, name: "elementRenderer", kind: "message", T: () => ElementRenderer },
			{ no: 221496734, name: "musicDescriptionShelfRenderer", kind: "message", T: () => MusicDescriptionShelfRenderer },
		]);

		// `contents.renderer === contents`，让 `contents.renderer.xxx` 与 `contents.xxx` 两种写法都可用
		Object.defineProperty(this.messagePrototype, "renderer", {
			get() {
				return this;
			},
		});
	}
}
const Contents = new Contents$Type();

class BrowseResponse$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("BrowseResponse", [
			{ no: 9, name: "contents", kind: "message", T: () => Contents },
			{ no: 10, name: "continuationContents", kind: "message", T: () => Contents },
		]);
	}
}

const BrowseResponse = new BrowseResponse$Type();



}),
"./src/protobuf/spotify/lyrics/Lyrics.js": 
/*!***********************************************!*\
  !*** ./src/protobuf/spotify/lyrics/Lyrics.js ***!
  \***********************************************/
(function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  ColorLyricsResponse: () => (ColorLyricsResponse)
});
/* ESM import */var _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @protobuf-ts/runtime */ "./node_modules/@protobuf-ts/runtime/build/es2015/message-type.js");
/* ESM import */var _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @protobuf-ts/runtime */ "./node_modules/@protobuf-ts/runtime/build/es2015/reflection-info.js");


// Spotify Lyrics Protobuf (精简实现：覆盖 DualSubs 需要访问/改写的字段)

const SyncType = {
	UNSYNCED: 0,
	LINE_SYNCED: 1,
	SYLLABLE_SYNCED: 2,
};

class Syllable$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("Syllable", [
			{ no: 1, name: "startTimeMs", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT64 },
			{ no: 2, name: "numChars", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT64 },
		]);
	}
}
const Syllable = new Syllable$Type();

class LyricsLine$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("LyricsLine", [
			{ no: 1, name: "startTimeMs", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT64 },
			{ no: 2, name: "words", kind: "scalar", opt: true, T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 3, name: "syllables", kind: "message", repeat: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.RepeatType.UNPACKED, T: () => Syllable },
		]);
	}
}
const LyricsLine = new LyricsLine$Type();

class ColorData$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("ColorData", [
			{ no: 1, name: "background", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32 },
			{ no: 2, name: "text", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32 },
			{ no: 3, name: "highlightText", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32 },
		]);
	}
}
const ColorData = new ColorData$Type();

class AndroidIntent$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("AndroidIntent", [
			{ no: 1, name: "provider", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 2, name: "providerAndroidAppId", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 3, name: "action", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 4, name: "data", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 5, name: "contentType", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
		]);
	}
}
const AndroidIntent = new AndroidIntent$Type();

class Alternative$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("Alternative", [
			{ no: 1, name: "language", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 2, name: "lines", kind: "scalar", repeat: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.RepeatType.UNPACKED, T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
		]);
	}
}
const Alternative = new Alternative$Type();

class LyricsResponse$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("LyricsResponse", [
			{ no: 1, name: "syncType", kind: "enum", T: () => ["SyncType", SyncType] },
			{ no: 2, name: "lines", kind: "message", repeat: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.RepeatType.UNPACKED, T: () => LyricsLine },
			{ no: 3, name: "provider", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 4, name: "providerLyricsId", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 5, name: "providerDisplayName", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 6, name: "syncLyricsAndroidIntent", kind: "message", T: () => AndroidIntent },
			{ no: 7, name: "syncLyricsUri", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 8, name: "isDenseTypeface", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL },
			{ no: 9, name: "alternatives", kind: "message", repeat: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.RepeatType.UNPACKED, T: () => Alternative },
			{ no: 10, name: "language", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.STRING },
			{ no: 11, name: "isRtlLanguage", kind: "scalar", opt: true, T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL },
			{ no: 12, name: "fullscreenAction", kind: "scalar", T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.INT32 },
			{ no: 13, name: "showUpsell", kind: "scalar", opt: true, T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL },
		]);
	}
}
const LyricsResponse = new LyricsResponse$Type();

class ColorLyricsResponse$Type extends _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_0__.MessageType {
	constructor() {
		super("ColorLyricsResponse", [
			{ no: 1, name: "lyrics", kind: "message", T: () => LyricsResponse },
			{ no: 2, name: "colors", kind: "message", T: () => ColorData },
			{ no: 3, name: "hasVocalRemoval", kind: "scalar", opt: true, T: _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_1__.ScalarType.BOOL },
			{ no: 4, name: "vocalRemovalColors", kind: "message", T: () => ColorData },
		]);
	}
}

const ColorLyricsResponse = new ColorLyricsResponse$Type();



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
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

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
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

/*!***************************************!*\
  !*** ./src/Translate.response.dev.js ***!
  \***************************************/
/* ESM import */var _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nsnanocat/util */ "./node_modules/@nsnanocat/util/index.js");
/* ESM import */var _nsnanocat_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nsnanocat/url */ "./node_modules/@nsnanocat/url/URL.mjs");
/* ESM import */var _XML_XML_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XML/XML.mjs */ "./src/XML/XML.mjs");
/* ESM import */var _WebVTT_WebVTT_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebVTT/WebVTT.mjs */ "./src/WebVTT/WebVTT.mjs");
/* ESM import */var _function_database_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/database.mjs */ "./src/function/database.mjs");
/* ESM import */var _function_setENV_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function/setENV.mjs */ "./src/function/setENV.mjs");
/* ESM import */var _function_detectFormat_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./function/detectFormat.mjs */ "./src/function/detectFormat.mjs");
/* ESM import */var _function_detectPlatform_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./function/detectPlatform.mjs */ "./src/function/detectPlatform.mjs");
/* ESM import */var _function_setCache_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./function/setCache.mjs */ "./src/function/setCache.mjs");
/* ESM import */var _class_Translate_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./class/Translate.mjs */ "./src/class/Translate.mjs");
/* ESM import */var _protobuf_google_protos_youtube_api_innertube_BrowseResponse_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./protobuf/google/protos/youtube/api/innertube/BrowseResponse.js */ "./src/protobuf/google/protos/youtube/api/innertube/BrowseResponse.js");
/* ESM import */var _protobuf_spotify_lyrics_Lyrics_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./protobuf/spotify/lyrics/Lyrics.js */ "./src/protobuf/spotify/lyrics/Lyrics.js");
/* ESM import */var _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @protobuf-ts/runtime */ "./node_modules/@protobuf-ts/runtime/build/es2015/binary-format-contract.js");
/* ESM import */var _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @protobuf-ts/runtime */ "./node_modules/@protobuf-ts/runtime/build/es2015/binary-reader.js");













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
	const { Settings, Caches, Configs } = (0,_function_setENV_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])("DualSubs", [["YouTube", "Netflix", "BiliBili", "Spotify"].includes(PLATFORM) ? PLATFORM : "Universal", "Translate", "API"], _function_database_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]);
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.logLevel = Settings.LogLevel;
	// 获取字幕类型与语言
	const Type = url.searchParams?.get("subtype") ?? Settings.Type,
		Languages = [url.searchParams?.get("lang")?.toUpperCase?.() ?? Settings.Languages[0], (url.searchParams?.get("tlang") ?? Caches?.tlang)?.toUpperCase?.() ?? Settings.Languages[1]];
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.info(`Type: ${Type}`, `Languages: ${Languages}`);
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
		case "application/x-plist": {
			body = _XML_XML_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].parse($response.body);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			const breakLine = body?.tt ? "<br />" : body?.timedtext ? "&#x000A;" : "&#x000A;";
			if (body?.timedtext?.head?.wp?.[1]?.["@rc"]) body.timedtext.head.wp[1]["@rc"] = "1";
			let paragraph = body?.tt?.body?.div?.p ?? body?.timedtext?.body?.p;
			const fullText = [];
			paragraph = paragraph.map(para => {
				if (para?.s) {
					if (Array.isArray(para.s)) para["#"] = para.s.map(seg => seg["#"]).join(" ");
					else para["#"] = para.s?.["#"] ?? "";
					// biome-ignore lint/performance/noDelete: <explanation>
					delete para.s;
				}
				const span = para?.span ?? para;
				const sentences = Array.isArray(span) ? span?.map(span => span?.["#"] ?? "\u200b").join(breakLine) : span?.["#"];
				fullText.push(sentences ?? "\u200b");
				/*
				const spans = para?.span ?? para?.s ?? para;
				if (Array.isArray(span)) spans["#"] = spans?.map(span => span?.["#"] ?? "").join(" ");
				else spans["#"] = spans?.["#"] ?? "";
				if (para?.s) para = spans;
				if (spans?.["#"]) fullText.push(spans["#"]);
				*/
				return para;
			});
			const translation = await Translator(Settings.Vendor, Settings.Method, fullText, Languages, Settings?.[Settings?.Vendor], Settings?.Times, Settings?.Interval, Settings?.Exponential);
			paragraph = paragraph.map((para, i) => {
				const span = para?.span ?? para;
				if (Array.isArray(span))
					translation?.[i]?.split(breakLine).forEach((text, j) => {
						if (span[j]?.["#"]) span[j]["#"] = combineText(span[j]["#"], text, Settings?.ShowOnly, Settings?.Position, " ");
						//else if (span[j + 1]?.["#"]) span[j + 1]["#"] = combineText(span[j + 1]["#"], text, Settings?.ShowOnly, Settings?.Position, ' ');
					});
				else if (span?.["#"]) span["#"] = combineText(span["#"], translation?.[i], Settings?.ShowOnly, Settings?.Position, breakLine);
				return para;
			});
			//Console.debug(`body: ${JSON.stringify(body)}`);
			$response.body = _XML_XML_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].stringify(body);
			break;
		}
		case "text/vtt":
		case "application/vtt": {
			body = _WebVTT_WebVTT_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].parse($response.body);
			//Console.debug(`body: ${JSON.stringify(body)}`);
			const fullText = body?.body.map(item => (item?.text ?? "\u200b")?.replace(/<\/?[^<>]+>/g, ""));
			const translation = await Translator(Settings.Vendor, Settings.Method, fullText, Languages, Settings?.[Settings?.Vendor], Settings?.Times, Settings?.Interval, Settings?.Exponential);
			body.body = body.body.map((item, i) => {
				item.text = combineText(item?.text ?? "\u200b", translation?.[i], Settings?.ShowOnly, Settings?.Position);
				return item;
			});
			//Console.debug(`body: ${JSON.stringify(body)}`);
			$response.body = _WebVTT_WebVTT_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].stringify(body);
			break;
		}
		case "text/json":
		case "application/json": {
			body = JSON.parse($response.body ?? "{}");
			//Console.debug(`body: ${JSON.stringify(body)}`);
			switch (PLATFORM) {
				case "YouTube": {
					if (body?.events) {
						const fullText = [];
						body.events = body.events.map(event => {
							if (event?.segs?.[0]?.utf8) event.segs = [{ utf8: event.segs.map(seg => seg.utf8).join("") }];
							fullText.push(event?.segs?.[0]?.utf8 ?? "\u200b");
							event.wWinId = undefined;
							return event;
						});
						const translation = await Translator(Settings.Vendor, Settings.Method, fullText, Languages, Settings?.[Settings?.Vendor], Settings?.Times, Settings?.Interval, Settings?.Exponential);
						body.events = body.events.map((event, i) => {
							if (event?.segs?.[0]?.utf8) event.segs[0].utf8 = combineText(event.segs[0].utf8, translation?.[i], Settings?.ShowOnly, Settings?.Position);
							return event;
						});
					} else if (body?.contents?.sectionListRenderer?.contents) {
						let musicDescriptions = body.contents.sectionListRenderer.contents;
						musicDescriptions = await Promise.all(
							musicDescriptions.map(async musicDescription => {
								if (musicDescription?.musicDescriptionShelfRenderer?.description?.runs) {
									let lyrics = musicDescription.musicDescriptionShelfRenderer.description.runs;
									lyrics = await Promise.all(
										lyrics.map(async run => {
											let fullText = run?.text?.split?.("\n")?.map(text => text?.trim() ?? "\u200b");
											const translation = await Translator(Settings.Vendor, Settings.Method, fullText, Languages, Settings?.[Settings?.Vendor], Settings?.Times, Settings?.Interval, Settings?.Exponential);
											fullText = fullText.map((line, i) => {
												if (line) return combineText(line, translation?.[i], Settings?.ShowOnly, Settings?.Position, "\n  └ ");
											});
											run.text = fullText.join("\n");
											return run;
										}),
									);
								}
								return musicDescription;
							}),
						);
					}
					break;
				}
				case "Spotify": {
					Languages[0] = body?.lyrics?.language === "z1" ? "ZH-HANT" : body?.lyrics?.language ? body?.lyrics?.language.toUpperCase() : "AUTO";
					const fullText = body.lyrics.lines.map(line => line?.words ?? "\u200b");
					const translation = await Translator(Settings.Vendor, Settings.Method, fullText, Languages, Settings?.[Settings?.Vendor], Settings?.Times, Settings?.Interval, Settings?.Exponential);
					_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`$request.headers["app-platform"]: ${$request?.headers?.["app-platform"]}`);
					switch ($request?.headers?.["app-platform"] ?? $request?.headers?.["App-Platform"]) {
						case "OSX": // macOS App 暂不支持翻译功能
						case "Win32_x86_64": // Windows App 暂不支持翻译功能
						case "WebPlayer": // Web App
						case undefined:
						// biome-ignore lint/suspicious/noFallthroughSwitchClause: <explanation>
						default:
							/*
							body.lyrics.lines = body.lyrics.lines.map((line, i) => {
								if (line?.words) line.words = combineText(line.words, translation?.[i], Settings?.ShowOnly, Settings?.Position);
								return line;
							});
							*/
							body.lyrics.lines = body.lyrics.lines
								.map((line, i) => {
									const line1 = {
										startTimeMs: line.startTimeMs.toString(),
										words: line?.words ?? "",
										syllables: line?.syllables ?? [],
										endTimeMs: "0",
									};
									const line2 = {
										startTimeMs: line.startTimeMs.toString(),
										words: translation?.[i] ?? "",
										syllables: [],
										endTimeMs: "0",
									};
									return [line1, line2];
								})
								.flat(Number.POSITIVE_INFINITY);
						//break; 不中断，继续处理
						case "iOS":
							if (!body?.lyrics?.alternatives) body.lyrics.alternatives = [];
							body.lyrics.alternatives.unshift({
								language: Languages[1].toLowerCase(),
								lines: translation,
							});
							break;
					}
					break;
				}
			}
			//Console.debug(`body: ${JSON.stringify(body)}`);
			$response.body = JSON.stringify(body);
			break;
		}
		case "application/protobuf":
		case "application/x-protobuf":
		case "application/vnd.google.protobuf":
		case "application/grpc":
		case "application/grpc+proto":
		case "application/octet-stream": {
			//Console.debug(`$response.body: ${JSON.stringify($response.body)}`);
			let rawBody = _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.$app === "Quantumult X" ? new Uint8Array($response.bodyBytes ?? []) : ($response.body ?? new Uint8Array());
			//Console.debug(`isBuffer? ${ArrayBuffer.isView(rawBody)}: ${JSON.stringify(rawBody)}`);
			switch (FORMAT) {
				case "application/protobuf":
				case "application/x-protobuf":
				case "application/vnd.google.protobuf":
					switch (PLATFORM) {
						case "YouTube": {
							body = _protobuf_google_protos_youtube_api_innertube_BrowseResponse_js__WEBPACK_IMPORTED_MODULE_10__.BrowseResponse.fromBinary(rawBody);
							//Console.debug(`body: ${JSON.stringify(body)}`);
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`contents: ${JSON.stringify(body?.contents)}`);
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`continuationContents: ${JSON.stringify(body?.continuationContents)}`);
							let UF = _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_12__.UnknownFieldHandler.list(body);
							//Console.debug(`UF: ${JSON.stringify(UF)}`);
							if (UF) {
								UF = UF.map(uf => {
									//uf.no; // 22
									//uf.wireType; // WireType.Varint
									// use the binary reader to decode the raw data:
									const reader = new _protobuf_ts_runtime__WEBPACK_IMPORTED_MODULE_13__.BinaryReader(uf.data);
									const addedNumber = reader.int32(); // 7777
									_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`no: ${uf.no}, wireType: ${uf.wireType}, reader: ${reader}, addedNumber: ${addedNumber}`);
								});
							}
							Languages[0] = "AUTO";
							if (body?.contents?.renderer?.elementRenderer?.n7F172660663?.n8F1?.n9F168777401?.n10F5?.n11F465160965?.n12F4?.n13F1) {
								const fullText = body.contents.renderer.elementRenderer.n7F172660663.n8F1.n9F168777401.n10F5.n11F465160965.n12F4.n13F1.map(line => line?.f1 ?? "\u200b");
								const translation = await Translator(Settings.Vendor, Settings.Method, fullText, Languages, Settings?.[Settings?.Vendor], Settings?.Times, Settings?.Interval, Settings?.Exponential);
								body.contents.renderer.elementRenderer.n7F172660663.n8F1.n9F168777401.n10F5.n11F465160965.n12F4.n13F1 = body.contents.renderer.elementRenderer.n7F172660663.n8F1.n9F168777401.n10F5.n11F465160965.n12F4.n13F1.map((line, i) => {
									if (line?.f1) line.f1 = combineText(line.f1, translation?.[i], Settings?.ShowOnly, Settings?.Position);
									return line;
								});
							} else if (body?.contents?.renderer?.sectionListRenderer?.contents) {
								let musicDescriptions = body.contents.renderer.sectionListRenderer.contents;
								musicDescriptions = await Promise.all(
									musicDescriptions.map(async musicDescription => {
										if (musicDescription?.musicDescriptionShelfRenderer?.description?.runs) {
											let lyrics = musicDescription.musicDescriptionShelfRenderer.description.runs;
											lyrics = await Promise.all(
												lyrics.map(async run => {
													let fullText = run?.text?.split?.("\n")?.map(text => text?.trim() ?? "\u200b");
													const translation = await Translator(Settings.Vendor, Settings.Method, fullText, Languages, Settings?.[Settings?.Vendor], Settings?.Times, Settings?.Interval, Settings?.Exponential);
													fullText = fullText.map((line, i) => {
														if (line) return combineText(line, translation?.[i], Settings?.ShowOnly, Settings?.Position, "\n  └ ");
													});
													run.text = fullText.join("\n");
													return run;
												}),
											);
										}
										return musicDescription;
									}),
								);
							}
							//Console.debug(`body: ${JSON.stringify(body)}`);
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`contents: ${JSON.stringify(body?.contents)}`);
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`continuationContents: ${JSON.stringify(body?.continuationContents)}`);
							rawBody = _protobuf_google_protos_youtube_api_innertube_BrowseResponse_js__WEBPACK_IMPORTED_MODULE_10__.BrowseResponse.toBinary(body);
							break;
						}
						case "Spotify": {
							body = _protobuf_spotify_lyrics_Lyrics_js__WEBPACK_IMPORTED_MODULE_11__.ColorLyricsResponse.fromBinary(rawBody);
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`body: ${JSON.stringify(body)}`);
							/*
							let UF = UnknownFieldHandler.list(body);
							//Console.debug(`UF: ${JSON.stringify(UF)}`);
							if (UF) {
								UF = UF.map(uf => {
									//uf.no; // 22
									//uf.wireType; // WireType.Varint
									// use the binary reader to decode the raw data:
									let reader = new BinaryReader(uf.data);
									let addedNumber = reader.int32(); // 7777
									Console.debug(`no: ${uf.no}, wireType: ${uf.wireType}, reader: ${reader}, addedNumber: ${addedNumber}`);
								});
							};
							*/
							Languages[0] = body?.lyrics?.language === "z1" ? "ZH-HANT" : body?.lyrics?.language ? body?.lyrics?.language.toUpperCase() : "AUTO";
							const fullText = body.lyrics.lines.map(line => line?.words ?? "\u200b");
							const translation = await Translator(Settings.Vendor, Settings.Method, fullText, Languages, Settings?.[Settings?.Vendor], Settings?.Times, Settings?.Interval, Settings?.Exponential);
							/*
							body.lyrics.alternatives = [{
								"language": Languages[1].toLowerCase(),
								"lines": translation
							}];
							*/
							if (!body?.lyrics?.alternatives) body.lyrics.alternatives = [];
							body.lyrics.alternatives.unshift({
								language: Languages[1].toLowerCase(),
								lines: translation,
							});
							_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.debug(`body: ${JSON.stringify(body)}`);
							rawBody = _protobuf_spotify_lyrics_Lyrics_js__WEBPACK_IMPORTED_MODULE_11__.ColorLyricsResponse.toBinary(body);
							break;
						}
					}
					break;
				case "application/grpc":
				case "application/grpc+proto":
					break;
			}
			// 写入二进制数据
			$response.body = rawBody;
			break;
		}
	}
})()
	.catch(e => _nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.error(e))
	.finally(() => (0,_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.done)($response));

/***************** Function *****************/
/**
 * Translator
 * @author VirgilClyne
 * @param {Array} text - full text
 * @param {String} method - method
 * @param {String} vendor - translate service vendor
 * @param {String} source - source language
 * @param {String} target - target language
 * @param {Object} api - translate service API
 * @param {Object} database - languages database
 * @param {Number} times - retry times
 * @param {Number} interval - retry interval
 * @param {Boolean} exponential - retry Exponential
 *
 * @return {Promise<*>}
 */
async function Translator(vendor = "OpenAI", method = "Part", text = [], [source = "AUTO", target = "ZH"], API = {}, times = 3, interval = 100, exponential = true) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Translator", `vendor: ${vendor}`, `method: ${method}`, `[source, target]: ${[source, target]}`);
	// 翻译长度设置
	let length = 127;
	switch (vendor) {
		case "Google":
		case "GoogleCloud":
		default:
			length = 120;
			break;
		case "Microsoft":
		case "Azure":
			length = 99;
			break;
		case "DeepL":
			length = 49;
			break;
		case "DeepLX":
			length = 20;
			break;
		case "OpenAI":
			length = 50; // OpenAI/Gemini 可以处理更长的文本，但为了稳定性设置为50
			break;
	}
	let Translation = [];
	switch (method) {
		default:
		case "Part": {
			// Part 逐段翻译
			const parts = chunk(text, length);
			Translation = await Promise.all(parts.map(async part => await retry(() => new _class_Translate_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]({ Source: source, Target: target, API: API })[vendor](part), times, interval, exponential))).then(part => part.flat(Number.POSITIVE_INFINITY));
			break;
		}
		case "Row": // Row 逐行翻译
			Translation = await Promise.all(text.map(async row => await retry(() => new _class_Translate_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]({ Source: source, Target: target, API: API })[vendor](row), times, interval, exponential)));
			break;
	}
	//Console.debug(`Translation: ${JSON.stringify(Translation)}`);
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("✅ Translator");
	return Translation;
}

/**
 * combine two text
 * @author VirgilClyne
 * @param {String} originText - original text
 * @param {String} transText - translate text
 * @param {Boolean} ShowOnly - only show translate text
 * @param {String} position - position
 * @param {String} lineBreak - line break
 * @return {String} combined text
 */
function combineText(originText, transText, ShowOnly = false, position = "Forward", lineBreak = "\n") {
	let text = "";
	switch (ShowOnly) {
		case true:
			text = transText;
			break;
		case false:
		default:
			switch (position) {
				case "Forward":
				default:
					text = `${originText}${lineBreak}${transText}`;
					break;
				case "Reverse":
					text = `${transText}${lineBreak}${originText}`;
					break;
			}
	}
	return text;
}

/**
 * Chunk Array
 * @author VirgilClyne
 * @param {Array} source - source
 * @param {Number} length - number
 * @return {Array<*>} target
 */
function chunk(source, length) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ Chunk Array");
	let index = 0,
		target = [];
	while (index < source.length) target.push(source.slice(index, (index += length)));
	//Console.log("✅ Chunk Array", `target: ${JSON.stringify(target)}`);
	return target;
}

/**
 * Retries the given function until it succeeds given a number of retries and an interval between them. They are set
 * by default to retry 5 times with 1sec in between. There's also a flag to make the cooldown time exponential
 * @link https://gitlab.com/-/snippets/1775781
 * @author Daniel Iñigo <danielinigobanos@gmail.com>
 * @param {Function} fn - Returns a promise
 * @param {Number} retriesLeft - Number of retries. If -1 will keep retrying
 * @param {Number} interval - Millis between retries. If exponential set to true will be doubled each retry
 * @param {Boolean} exponential - Flag for exponential back-off mode
 * @return {Promise<*>}
 */
async function retry(fn, retriesLeft = 5, interval = 1000, exponential = false) {
	_nsnanocat_util__WEBPACK_IMPORTED_MODULE_0__.Console.log("☑️ retry", `剩余重试次数:${retriesLeft}`, `时间间隔:${interval}ms`);
	try {
		const val = await fn();
		return val;
	} catch (error) {
		if (retriesLeft) {
			await new Promise(r => setTimeout(r, interval));
			return retry(fn, retriesLeft - 1, exponential ? interval * 2 : interval, exponential);
		} else throw new Error("❌ retry, 最大重试次数");
	}
}

})();

})()
;