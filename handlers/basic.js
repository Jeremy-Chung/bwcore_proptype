/**
 * basic handler
 */
const {
    WRONG_TYPE,
    INVALID_TYPE,
    IS_REQUIRED,
} = require("../errors");
const Checker = require("../checker");

module.exports = class {
    constructor(opts) {
        const { type } = opts;

        if (!type) {
            throw this.error(INVALID_TYPE, type);
        }

        this.attributes = {
            type,
        };
    }

    get attrs() {
        return this.attributes;
    }

    get type() {
        return this.attributes.type;
    }

    setAttrs(name, val) {
        this.attributes[name] = val;
    }

    max(val) {
        this.setAttrs("max", val);

        return this;
    }

    min(val) {
        this.setAttrs("min", val);

        return this;
    }

    isRequired() {
        this.setAttrs("isRequired", true);

        return this;
    }

    checkType(val) {
        const {
            type,
        } = this.attrs;

        return Checker.isSameType(val, type);
    }

    error(message, name = "") {
        const err = new Error(message);

        err.name = name;

        return err;
    }

    test(val, name = "") {
        const {
            isRequired = false,
        } = this.attrs;
        const existed = isRequired && Checker.isRequired(val);

        if (isRequired && !existed) {
            throw this.error(IS_REQUIRED, name);
        }

        if (!!val && !this.checkType(val)) {
            throw this.error(WRONG_TYPE, name);
        }

        return true;
    }

    toString() {
        return "Validator";
    }
};
