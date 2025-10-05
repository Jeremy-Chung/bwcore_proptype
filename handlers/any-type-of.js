const {
    WRONG_TYPE,
    NOT_ONE_TYPE_OF,
} = require("../errors");
const Checker = require("../checker");
const BasicHandler = require("./basic");

const Type = "array";

module.exports = class extends BasicHandler {
    constructor(opts) {
        super(Object.assign({ type: Type }, opts));

        return typeList => {
            if (!Checker.isSameType(typeList, Type)) {
                throw this.error(WRONG_TYPE);
            }

            this.setAttrs("typeList", typeList);

            return this;
        };
    }

    test(val) {
        const {
            typeList = [],
            isRequired = false,
        } = this.attrs;
        const exists = -1 < typeList.findIndex(item => {
            return Checker.isSameType(val, item.type);
        });

        const types = typeList.map(item => item.type).join(", ");

        if (!exists) {
            const error = new Error(NOT_ONE_TYPE_OF);
            error.description = `${ NOT_ONE_TYPE_OF }: [${ types }] `;

            if (isRequired) {
                throw error;
            }
            else {
                console.warn(error.description);
            }
        }

        return true;
    }
};
