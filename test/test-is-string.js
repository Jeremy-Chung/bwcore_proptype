const { assert } = require("chai");
const propTypes = require("../index.js");
const { WRONG_TYPE, NOT_IN_RANGE } = require("../errors.js");

describe("String validation", () => {
    it("is not a string", () => {
        assert.throws(() => {
            propTypes.String.test(100);
        }, Error, WRONG_TYPE);
    });

    it("is a string", () => {
        assert.equal(true, propTypes.String.test("true"));
    });

    it("out of the length", () => {
        assert.throws(() => {
            propTypes.String.min(1).max(2).test("true");
        }, Error, NOT_IN_RANGE);
    });
});
