const {
    NOT_IN_RANGE,
    WRONG_TYPE,
} = require("../errors");
const Checker = require("../checker");
const BasicHandler = require("./basic");

const Type = "date";

module.exports = class extends BasicHandler {
    constructor(opts) {
        super(Object.assign({ type: Type }, opts));
    }

    min(val) {
        return super.min(new Date(val));
    }
    max(val) {
        return super.max(new Date(val));
    }

    test(val, name = "") {
        let realDate = new Date(val);

        super.test(realDate, name);

        const {
            min,
            max,
        } = this.attrs;

        if (min && max && !Checker.inRange(
            realDate,
            min,
            max
        )) {
            throw new RangeError(NOT_IN_RANGE);
        }

        return true;
    }
};
