var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    Person.prototype.greeting = function () {
        console.log("Hello i'am Person and my name is ".concat(this._firstName));
    };
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return console.log("LastName is ".concat(this._lastName, " and my name is ").concat(this._firstName));
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName, lastName, age, level, language) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.level = level;
        _this.language = language;
        return _this;
    }
    return Developer;
}(Person));
var person = new Person("Person", "Human", 20);
person.greeting;
var developer = new Developer("Name", "Developer", 19, "3", "middle");
console.log(developer.greeting());
console.log(person.greeting());
