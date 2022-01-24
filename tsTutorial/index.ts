var id: number = 5
var company: string = 'Chewy'
var isPublic: boolean = true
var x: any = 'Caroline'
var strOrNum: string | number = 'imma string'

var ids: number[] = [1, 2, 3, 4, 5]
var list: any[] = [1, 'blub', false] 

// Tuple
var caroline: [number, string, number] = [22, 'sagittarius', 69]

// Tuple with arrays
var employee: [number, string][]

employee = [
    [1, 'kate'],
    [2, 'sarah'],
    [3, 'grace']
]


// Enum
enum Direction1 {
    North,
    South,
    East,
    West,
}

// prints out 0
console.log(Direction1.North)
// prints out 1
console.log(Direction1.South)

enum Direction2 {
    North = 'north',
    South = 'south',
    East = 'east',
    West = 'west',
}

// prints out 0
console.log(Direction2.North)
// prints out 1
console.log(Direction2.South)




// Objects

// can do this... define what the obj needs and then what it is 
const user: {
    id: number,
    name: string
} = {
    id: 69,
    name: 'carol'
}

// or can define the type and the object separately
type User = {
    id: number,
    name: string
}

const user2: User = {
    id: 69,
    name: 'carol'
}



// Type assertion
var x: any = 1

var y = <number>x         // this 
// var y = x as number    // or this. they do same thing

// y = true               // gives an error




// Functions
function addNum(x: number, y: number): number {
    return x + y
}

function log(message: number | string): void {
    console.log(message)
}


// Interfaces

// every single one of an interfaces properties must be defined when you declare an instance of it
// unless you include a question mark to make it optional
// or if you include readonly, meaning you cant assign it
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 69,
    name: 'carol',
}

// they are kind of the same thing as Types, but there are some diffs

// Types can be used with primitives and unions:
type Point = number
type Point2 = number | string

// Whereas this doesn't work
// interface Point3 = number
// interface Point4 = number | string


// An example of using interfaces

interface MathFunc {
    // a function
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
// const add: MathFunc = (x: number, y: string): number => x + y // errors
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonInterface {
    readonly id: number,
    name: string,
    register(): string
}

// Classes
class Person implements PersonInterface{
    // private id: number
    id: number
    name: string

    constructor(id: number,  name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return this.name + ' is now registered'
    }
}

// instantiate a Person, which calls the constructure
const brad = new Person(1, 'brad')
console.log(brad)

// if the id property is public (as by deafult) I can do this
brad.id = 5
console.log(brad)

console.log(brad.register())


// Subclasses

// An Employee is a Person, so it has all Person props plus some of its own
class Employee extends Person {
    jobTitle: string

    constructor(id: number,  name: string, jobTitle: string) {
        super(id, name)
        this.jobTitle = jobTitle
    }
}

const james = new Employee(4, 'james', 'CEO')
console.log(james.register())

// Generics

// notice how using the T is different than using any
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let pplArray = getArray<string>(['john', 'mary', 'joseph'])

