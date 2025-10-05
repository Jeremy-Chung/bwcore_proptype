const { assert } = require("chai");
const propTypes = require("../index.js");
const { WRONG_TYPE, NOT_IN_RANGE } = require("../errors.js");

describe("Date validation", () => {
    it("is not a date", () => {
        assert.throws(() => {
            propTypes.Date.test("");
        }, Error, WRONG_TYPE);
    });

    it("is a date", () => {
        assert.equal(true, propTypes.Date.test("2018-01-01"));
    });

    it("within the range", () => {
        assert.equal(true, propTypes.Date.min("2018-01-01").max("2018-01-10").test("2018-01-01"));
    });

    it("out of the range", () => {
        assert.throws(() => {
            assert.equal(true, propTypes.Date.min("2018-01-01").max("2018-01-10").test("2018-01-11"));
        }, Error, NOT_IN_RANGE);
    });
});
