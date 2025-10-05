const { assert } = require("chai");
const propTypes = require("../index.js");
const { WRONG_TYPE, IS_REQUIRED, NOT_IN_RANGE } = require("../errors.js");

describe("Boolean validation", () => {
    it("is not a boolean", () => {
        assert.throws(() => {
            propTypes.Bool.test("true");
        }, Error, WRONG_TYPE);
    });

    it("is a boolean", () => {
        assert.equal(true, propTypes.Bool.test(true));
    });
});
