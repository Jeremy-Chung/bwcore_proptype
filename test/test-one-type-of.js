const { assert } = require("chai");
const propTypes = require("../index.js");
const { NOT_ONE_TYPE_OF } = require("../errors.js");

describe("One-Type-Of validation", () => {
    it("is not in the zone", () => {
        assert.throws(() => {
            propTypes.AnyTypeOf([
                propTypes.Number,
                propTypes.String,
            ]).test([]);
        }, Error, NOT_ONE_TYPE_OF);
    });

    it("is in the zone", () => {
        propTypes.AnyTypeOf([
            propTypes.Number,
            propTypes.String,
        ]).test("100");
    });


    it("should be array or object", () => {
        propTypes.AnyTypeOf([
            propTypes.Array,
            propTypes.Shape(),
        ]).test({});
    });
});
