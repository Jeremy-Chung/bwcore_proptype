const { assert } = require("chai");
const propTypes = require("../index.js");
const { NOT_ONE_OF } = require("../errors.js");

describe("One-Of validation", () => {
    it("is not in the zone", () => {
        assert.throws(() => {
            propTypes.OneOf([1, 2, 3]).test("100");
        }, Error, NOT_ONE_OF);
    });

    it("is in the zone", () => {
        propTypes.OneOf([1, 2, 3]).test(1);
    });
});
