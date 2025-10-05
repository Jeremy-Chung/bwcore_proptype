const {
    NOT_IN_RANGE,
} = require("../errors");
const Checker = require("../checker");
const BasicHandler = require("./basic");

const Type = "number";

module.exports = class extends BasicHandler {
    constructor(opts) {
        super(Object.assign({ type: Type }, opts));
    }

    test(val, name = "") {
        super.test(val, name);

        const {
            min,
            max,
        } = this.attrs;

        if (!Checker.inRange(
            val || 0,
            min || -Number.MAX_SAFE_INTEGER,
            max || Number.MAX_SAFE_INTEGER
        )) {
            throw new RangeError(NOT_IN_RANGE);
        }

        return true;
    }
};
