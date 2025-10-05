const BasicHandler = require("./basic");

const Type = "boolean";

module.exports = class extends BasicHandler {
    constructor(opts) {
        super(Object.assign({ type: Type }, opts));
    }

    min() {
        return this;
    }
    max() {
        return this;
    }

    test(val, name = "") {
        return super.test(val, name);
    }
};
