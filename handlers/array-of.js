const {
    NOT_IN_RANGE,
} = require("../errors");
const Checker = require("../checker");
const BasicHandler = require("./basic");

const Type = "array";

module.exports = class extends BasicHandler {
    constructor(opts) {
        super(Object.assign({ type: Type }, opts));

        return type => {
            this.setAttrs("elemType", type);

            return this;
        };
    }

    test(val, name = "") {
        super.test(val);

        const len = val.length;
        const {
            min,
            max,
            elemType,
        } = this.attrs;

        val.forEach(item => {
            elemType.test(item, name);
        });

        if (!Checker.inRange(len, min || 0, max || Number.MAX_SAFE_INTEGER)) {
            throw new RangeError(NOT_IN_RANGE);
        }

        return true;
    }
};
