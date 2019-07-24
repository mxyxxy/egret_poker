type Long = protobuf.Long;

/** Namespace com. */
declare namespace com {

    /** Properties of a user_loagin_c2s. */
    interface Iuser_loagin_c2s {

        /** user_loagin_c2s accid */
        accid: number;

        /** user_loagin_c2s tstamp */
        tstamp: number;

        /** user_loagin_c2s ticket */
        ticket: string;
    }

    /** Represents a user_loagin_c2s. */
    class user_loagin_c2s implements Iuser_loagin_c2s {

        /**
         * Constructs a new user_loagin_c2s.
         * @param [properties] Properties to set
         */
        constructor(properties?: com.Iuser_loagin_c2s);

        /** user_loagin_c2s accid. */
        public accid: number;

        /** user_loagin_c2s tstamp. */
        public tstamp: number;

        /** user_loagin_c2s ticket. */
        public ticket: string;

        /**
         * Creates a new user_loagin_c2s instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_loagin_c2s instance
         */
        public static create(properties?: com.Iuser_loagin_c2s): com.user_loagin_c2s;

        /**
         * Encodes the specified user_loagin_c2s message. Does not implicitly {@link com.user_loagin_c2s.verify|verify} messages.
         * @param message user_loagin_c2s message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: com.Iuser_loagin_c2s, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified user_loagin_c2s message, length delimited. Does not implicitly {@link com.user_loagin_c2s.verify|verify} messages.
         * @param message user_loagin_c2s message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: com.Iuser_loagin_c2s, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a user_loagin_c2s message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_loagin_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.user_loagin_c2s;

        /**
         * Decodes a user_loagin_c2s message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_loagin_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.user_loagin_c2s;

        /**
         * Verifies a user_loagin_c2s message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a user_loagin_s2c. */
    interface Iuser_loagin_s2c {

        /** user_loagin_s2c accid */
        accid: number;
    }

    /** Represents a user_loagin_s2c. */
    class user_loagin_s2c implements Iuser_loagin_s2c {

        /**
         * Constructs a new user_loagin_s2c.
         * @param [properties] Properties to set
         */
        constructor(properties?: com.Iuser_loagin_s2c);

        /** user_loagin_s2c accid. */
        public accid: number;

        /**
         * Creates a new user_loagin_s2c instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_loagin_s2c instance
         */
        public static create(properties?: com.Iuser_loagin_s2c): com.user_loagin_s2c;

        /**
         * Encodes the specified user_loagin_s2c message. Does not implicitly {@link com.user_loagin_s2c.verify|verify} messages.
         * @param message user_loagin_s2c message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: com.Iuser_loagin_s2c, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified user_loagin_s2c message, length delimited. Does not implicitly {@link com.user_loagin_s2c.verify|verify} messages.
         * @param message user_loagin_s2c message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: com.Iuser_loagin_s2c, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a user_loagin_s2c message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_loagin_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.user_loagin_s2c;

        /**
         * Decodes a user_loagin_s2c message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_loagin_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.user_loagin_s2c;

        /**
         * Verifies a user_loagin_s2c message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
