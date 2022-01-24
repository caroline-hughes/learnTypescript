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
var id = 5;
var company = 'Chewy';
var isPublic = true;
var x = 'Caroline';
var strOrNum = 'imma string';
var ids = [1, 2, 3, 4, 5];
var list = [1, 'blub', false];
// Tuple
var caroline = [22, 'sagittarius', 69];
// Tuple with arrays
var employee;
employee = [
    [1, 'kate'],
    [2, 'sarah'],
    [3, 'grace']
];
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["North"] = 0] = "North";
    Direction1[Direction1["South"] = 1] = "South";
    Direction1[Direction1["East"] = 2] = "East";
    Direction1[Direction1["West"] = 3] = "West";
})(Direction1 || (Direction1 = {}));
// prints out 0
console.log(Direction1.North);
// prints out 1
console.log(Direction1.South);
var Direction2;
(function (Direction2) {
    Direction2["North"] = "north";
    Direction2["South"] = "south";
    Direction2["East"] = "east";
    Direction2["West"] = "west";
})(Direction2 || (Direction2 = {}));
// prints out 0
console.log(Direction2.North);
// prints out 1
console.log(Direction2.South);
// Objects
// can do this... define what the obj needs and then what it is 
var user = {
    id: 69,
    name: 'carol'
};
var user2 = {
    id: 69,
    name: 'carol'
};
// Type assertion
var x = 1;
var y = x; // this 
// var y = x as number    // or this. they do same thing
// y = true               // gives an error
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
var user1 = {
    id: 69,
    name: 'carol'
};
var add = function (x, y) { return x + y; };
// const add: MathFunc = (x: number, y: string): number => x + y // errors
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + ' is now registered';
    };
    return Person;
}());
// instantiate a Person, which calls the constructure
var brad = new Person(1, 'brad');
console.log(brad);
// if the id property is public (as by deafult) I can do this
brad.id = 5;
console.log(brad);
console.log(brad.register());
// Subclasses
// An Employee is a Person, so it has all Person props plus some of its own
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, jobTitle) {
        var _this = _super.call(this, id, name) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    return Employee;
}(Person));
var james = new Employee(4, 'james', 'CEO');
console.log(james.register());
