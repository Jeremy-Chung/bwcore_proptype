const {
    NOT_IN_RANGE,
} = require("../errors");
const Checker = require("../checker");
const BasicHandler = require("./basic");

const Type = "string";

module.exports = class extends BasicHandler {
    constructor(opts) {
        super(Object.assign({ type: Type }, opts));
    }

    test(val, name = "") {
        super.test(val, name);

        const len = (val || "").length;
        const {
            min,
            max,
        } = this.attrs;

        if (!Checker.inRange(len, min || 0, max || Number.MAX_SAFE_INTEGER)) {
            throw new RangeError(NOT_IN_RANGE);
        }

        return true;
    }
};
