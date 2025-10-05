const { assert } = require("chai");
const propTypes = require("../index.js");
const { WRONG_TYPE, IS_REQUIRED } = require("../errors.js");

describe("Shape validation", () => {
    it("is not even a shape", () => {
        assert.throws(() => {
            propTypes.Shape().test("100");
        }, Error, WRONG_TYPE);
    });

    it("is a shape", () => {
        propTypes.Shape({
            foo: propTypes.String,
            boo: propTypes.Number,
        }).test({ foo: "100" });
    });

    it("is a shape with the specific required property", () => {
        assert.throws(() => {
            propTypes.Shape({
                foo: propTypes.String,
                boo: propTypes.Number.isRequired(),
            }).test({ foo: "100" });
        }, Error, IS_REQUIRED);
    });

    it("deep shape of proper format", () => {
        propTypes.Shape({
            foo: propTypes.String.isRequired(),
            boo: propTypes.Shape({
                a: propTypes.String.isRequired(),
            }),
        }).test({
            foo: "100",
            boo: {
                a: "abc",
            },
        });
    });
});
