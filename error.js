class MessageDecodeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MessageDecodeError';
    }
}

class MessageChecksumError extends MessageDecodeError {
    constructor(message) {
        super(message);
        this.name = 'MessageChecksumError';
    }
}

class MessageSerializationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MessageSerializationError';
    }
}

module.exports = {MessageDecodeError, MessageChecksumError, 
    MessageSerializationError};
