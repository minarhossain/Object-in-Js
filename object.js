// In real life objects 
// In real life a car is an object 
// A car has properties like weight and color and method like start and stop
// Objects are variable too but objects can contain many values


// Object declaration and Object literal

const honda = {
    name: "Honda",
    brand:"Jampanies",
    model:"Trigger",
    color:"Red"
}

// the values are written as name:value pairs (name and values are seperated by a colon)

// always use object with const keyword

// Object properties (the name:value pairs in JavaScript objects are called properties)
const obj ={
    property:"value" // both are properties
}

// Accessing Object Properties in two ways

// ObjectName.PropertyName   honda.name
// ObjectName["PropertyName"] honda["name"]


// JavaScript Objects are container for named values called properties


// Object can also have a methods // Methods are stored in properties as function definitions

const person ={
    firstName : "Minar ",
    lastName : "Hossain",
    id:55698,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

// Accessing object methods objectName.methodName()
// name = ObjectName.methodName()
// If you access a method without the () parentheses, it will return the function definition
console.log("Output is here => ", person.fullName()) // Must invoke this 

// In JavaScript
// this keyword refers to an object
// which object depends on how this is being invoked (used or called)
// The this keyword refers to different objects depending on how it is used:
// In an object method this refers to the object
// Alone this refers to the global object
// In a function this refers to the global object
// In a functin, in strict mode, this refers to undefined
// In an event, this refers to the element that received the event
/// Methods like call(), apply(), and bind() can refer this to any object

