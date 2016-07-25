function greeter(person: number) {
    return "Hello, " + person;
}

var user: number = 5;

console.log(greeter(user));

var isDone: boolean  = true;
var lines: number = 5;
var name: string = "Nick";

interface Person {
    name: string;
    age?: number;
}

var Ken: Person = {name: "Ken"};
var Nick: Person = {name: "Nick", age: 23};
var Chad: Person = {name: "Chad"};
