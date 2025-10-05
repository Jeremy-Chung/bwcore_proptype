const {
    WRONG_TYPE,
    MISS_ATTRIBUTE,
} = require("../errors");
const Checker = require("../checker");
const BasicHandler = require("./basic");

const Type = "object";

module.exports = class extends BasicHandler {
    constructor(opts) {
        super(Object.assign({ type: Type }, opts));

        return (map = {}) => {
            if (!Checker.isSameType(map, Type)) {
                throw this.error(WRONG_TYPE);
            }

            this.setAttrs("elemType", map);

            return this;
        };
    }

    test(val, name) {
        super.test(val, name);

        const {
            elemType,
        } = this.attrs;
        const keys = Object.keys(elemType);

        keys.forEach(key => {
            if (elemType[key]) {
                elemType[key].test(val[key], key);
            }
            else {
                throw this.error(MISS_ATTRIBUTE, key);
            }
        });

        return true;
    }
};
