const {
    WRONG_TYPE,
    NOT_ONE_OF,
} = require("../errors");
const Checker = require("../checker");
const BasicHandler = require("./basic");

const Type = "array";

module.exports = class extends BasicHandler {
    constructor(opts) {
        super(Object.assign({ type: Type }, opts));

        return (enumList) => {
            if (!Checker.isSameType(enumList, Type)) {
                throw this.error(WRONG_TYPE);
            }

            this.setAttrs("enumList", enumList);

            return this;
        };
    }

    test(val) {
        const {
            enumList = [],
        } = this.attrs;

        const exists = -1 < enumList.findIndex(item => item === val);

        if (!exists) {
            const error = new Error(NOT_ONE_OF);
            error.description = `${ NOT_ONE_OF }: [${ enumList.join(", ") }] `;

            throw error;
        }

        return true;
    }
};
