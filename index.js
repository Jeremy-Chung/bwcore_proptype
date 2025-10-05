/**
 * validation
 */
const NumberValidator = require("./handlers/number");
const StringValidator = require("./handlers/string");
const BoolValidator = require("./handlers/bool");
const DateValidator = require("./handlers/date");
const ArrayValidator = require("./handlers/array");
const ArrayOfValidator = require("./handlers/array-of");
const OneOfValidator = require("./handlers/one-of");
const ShapeValidator = require("./handlers/shape");
const AnyTypeOfValidator = require("./handlers/any-type-of");

module.exports = class {
    static get Number() {
        return new NumberValidator();
    }

    static get String() {
        return new StringValidator();
    }

    static get Bool() {
        return new BoolValidator();
    }

    static get Date() {
        return new DateValidator();
    }

    static get Array() {
        return new ArrayValidator();
    }

    static get ArrayOf() {
        return new ArrayOfValidator();
    }

    static get OneOf() {
        return new OneOfValidator();
    }

    static get Shape() {
        return new ShapeValidator();
    }

    static get AnyTypeOf() {
        return new AnyTypeOfValidator();
    }
};
