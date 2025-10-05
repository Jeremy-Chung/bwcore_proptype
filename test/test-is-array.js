const { assert } = require("chai");
const propTypes = require("../index.js");
const { WRONG_TYPE, NOT_IN_RANGE } = require("../errors.js");

describe("Array validation", () => {
    it("is not a array", () => {
        assert.throws(() => {
            propTypes.Array.test(100);
        }, Error, WRONG_TYPE);
    });

    it("is a array", () => {
        assert.equal(true, propTypes.Array.test(["true", {}, 1]));
    });

    it("within the range", () => {
        assert.equal(true, propTypes.Array.min(1).max(2).test(["true", 1]));
    });

    it("out of the range", () => {
        assert.throws(() => {
            propTypes.Array.min(1).max(2).test(["true", 1, true]);
        }, Error, NOT_IN_RANGE);
    });
});
