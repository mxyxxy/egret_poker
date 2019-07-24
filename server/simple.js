/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.user_loagin_c2s = (function() {

        /**
         * Properties of a user_loagin_c2s.
         * @memberof com
         * @interface Iuser_loagin_c2s
         * @property {number} accid user_loagin_c2s accid
         * @property {number} tstamp user_loagin_c2s tstamp
         * @property {string} ticket user_loagin_c2s ticket
         */

        /**
         * Constructs a new user_loagin_c2s.
         * @memberof com
         * @classdesc Represents a user_loagin_c2s.
         * @implements Iuser_loagin_c2s
         * @constructor
         * @param {com.Iuser_loagin_c2s=} [properties] Properties to set
         */
        function user_loagin_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_loagin_c2s accid.
         * @member {number} accid
         * @memberof com.user_loagin_c2s
         * @instance
         */
        user_loagin_c2s.prototype.accid = 0;

        /**
         * user_loagin_c2s tstamp.
         * @member {number} tstamp
         * @memberof com.user_loagin_c2s
         * @instance
         */
        user_loagin_c2s.prototype.tstamp = 0;

        /**
         * user_loagin_c2s ticket.
         * @member {string} ticket
         * @memberof com.user_loagin_c2s
         * @instance
         */
        user_loagin_c2s.prototype.ticket = "";

        /**
         * Creates a new user_loagin_c2s instance using the specified properties.
         * @function create
         * @memberof com.user_loagin_c2s
         * @static
         * @param {com.Iuser_loagin_c2s=} [properties] Properties to set
         * @returns {com.user_loagin_c2s} user_loagin_c2s instance
         */
        user_loagin_c2s.create = function create(properties) {
            return new user_loagin_c2s(properties);
        };

        /**
         * Encodes the specified user_loagin_c2s message. Does not implicitly {@link com.user_loagin_c2s.verify|verify} messages.
         * @function encode
         * @memberof com.user_loagin_c2s
         * @static
         * @param {com.Iuser_loagin_c2s} message user_loagin_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_loagin_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tstamp);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.ticket);
            return writer;
        };

        /**
         * Encodes the specified user_loagin_c2s message, length delimited. Does not implicitly {@link com.user_loagin_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof com.user_loagin_c2s
         * @static
         * @param {com.Iuser_loagin_c2s} message user_loagin_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_loagin_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_loagin_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof com.user_loagin_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {com.user_loagin_c2s} user_loagin_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_loagin_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.user_loagin_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accid = reader.int32();
                    break;
                case 2:
                    message.tstamp = reader.int32();
                    break;
                case 3:
                    message.ticket = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("accid"))
                throw $util.ProtocolError("missing required 'accid'", { instance: message });
            if (!message.hasOwnProperty("tstamp"))
                throw $util.ProtocolError("missing required 'tstamp'", { instance: message });
            if (!message.hasOwnProperty("ticket"))
                throw $util.ProtocolError("missing required 'ticket'", { instance: message });
            return message;
        };

        /**
         * Decodes a user_loagin_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof com.user_loagin_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {com.user_loagin_c2s} user_loagin_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_loagin_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_loagin_c2s message.
         * @function verify
         * @memberof com.user_loagin_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_loagin_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.accid))
                return "accid: integer expected";
            if (!$util.isInteger(message.tstamp))
                return "tstamp: integer expected";
            if (!$util.isString(message.ticket))
                return "ticket: string expected";
            return null;
        };

        return user_loagin_c2s;
    })();

    com.user_loagin_s2c = (function() {

        /**
         * Properties of a user_loagin_s2c.
         * @memberof com
         * @interface Iuser_loagin_s2c
         * @property {number} accid user_loagin_s2c accid
         */

        /**
         * Constructs a new user_loagin_s2c.
         * @memberof com
         * @classdesc Represents a user_loagin_s2c.
         * @implements Iuser_loagin_s2c
         * @constructor
         * @param {com.Iuser_loagin_s2c=} [properties] Properties to set
         */
        function user_loagin_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_loagin_s2c accid.
         * @member {number} accid
         * @memberof com.user_loagin_s2c
         * @instance
         */
        user_loagin_s2c.prototype.accid = 0;

        /**
         * Creates a new user_loagin_s2c instance using the specified properties.
         * @function create
         * @memberof com.user_loagin_s2c
         * @static
         * @param {com.Iuser_loagin_s2c=} [properties] Properties to set
         * @returns {com.user_loagin_s2c} user_loagin_s2c instance
         */
        user_loagin_s2c.create = function create(properties) {
            return new user_loagin_s2c(properties);
        };

        /**
         * Encodes the specified user_loagin_s2c message. Does not implicitly {@link com.user_loagin_s2c.verify|verify} messages.
         * @function encode
         * @memberof com.user_loagin_s2c
         * @static
         * @param {com.Iuser_loagin_s2c} message user_loagin_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_loagin_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accid);
            return writer;
        };

        /**
         * Encodes the specified user_loagin_s2c message, length delimited. Does not implicitly {@link com.user_loagin_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof com.user_loagin_s2c
         * @static
         * @param {com.Iuser_loagin_s2c} message user_loagin_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_loagin_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_loagin_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof com.user_loagin_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {com.user_loagin_s2c} user_loagin_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_loagin_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.user_loagin_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("accid"))
                throw $util.ProtocolError("missing required 'accid'", { instance: message });
            return message;
        };

        /**
         * Decodes a user_loagin_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof com.user_loagin_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {com.user_loagin_s2c} user_loagin_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_loagin_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_loagin_s2c message.
         * @function verify
         * @memberof com.user_loagin_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_loagin_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.accid))
                return "accid: integer expected";
            return null;
        };

        return user_loagin_s2c;
    })();

    return com;
})();

module.exports = $root;
