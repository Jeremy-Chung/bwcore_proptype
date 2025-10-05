const { assert } = require("chai");
const propTypes = require("../index.js");
const { WRONG_TYPE, NOT_IN_RANGE } = require("../errors.js");

describe("Array-Of validation", () => {
    it("is not even a array", () => {
        assert.throws(() => {
            propTypes.ArrayOf(propTypes.String).test("100");
        }, Error, WRONG_TYPE);
    });

    it("is not a string-array", () => {
        assert.throws(() => {
            propTypes.ArrayOf(propTypes.String).test([100]);
        }, Error, WRONG_TYPE);
    });

    it("is an array with the proper type", () => {
        assert.equal(true, propTypes.ArrayOf(propTypes.String).test(["abc"]));
    });

    it("is an array with the proper type that is in the range", () => {
        assert.equal(true, propTypes.ArrayOf(propTypes.Number.min(100)).test([100]));
    });

    it("is an array with the proper type that is out of the range", () => {
        assert.equal(
            true,
            propTypes.ArrayOf(propTypes.Number.min(100)).test([100])
        );
    });
});
