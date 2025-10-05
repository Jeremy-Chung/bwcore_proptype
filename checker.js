/**
 * checker
 */
module.exports = class {
    construntor() {}

    static isSameType(val, type) {
        const valType = typeof val;
        let sameType = false;

        switch (type) {
        case "array": {
            sameType = this.isArray(val);
            break;
        }
        case "object": {
            sameType = this.isObject(val);
            break;
        }
        case "date": {
            sameType = this.isDate(val);
            break;
        }
        default: {
            sameType = (type === valType);
            break;
        }
        }

        return sameType;
    }

    static isArray(val) {
        return val instanceof Array;
    }

    static isDate(val) {
        return (val instanceof Date && !Number.isNaN(val.getTime()));
    }

    static isObject(val) {
        return "object" === typeof val && "[object Object]" === val.toString();
    }

    static inRange(val, min, max) {
        return min <= val && max >= val;
    }

    static isRequired(val) {
        return !(null === val || undefined === val);
    }
};
