const { assert } = require("chai");
const propTypes = require("../index.js");
const { WRONG_TYPE, IS_REQUIRED, NOT_IN_RANGE } = require("../errors.js");

describe("Number validation", () => {
    it("is not a number", () => {
        assert.throws(() => {
            propTypes.Number.test("100");
        }, Error, WRONG_TYPE);
    });

    it("is a number", () => {
        assert.equal(true, propTypes.Number.test(100));
    });

    it("required but empty", () => {
        assert.throws(() => {
            propTypes.Number.isRequired().test();
        }, Error, IS_REQUIRED);
    });
});
