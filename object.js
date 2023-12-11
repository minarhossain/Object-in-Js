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

console.log("Output is here => ", person.fullName())