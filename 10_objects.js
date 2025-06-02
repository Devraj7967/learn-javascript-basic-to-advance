//JavaScript Objects - An object in JavaScript is a collection of key-value pairs where values can be any data type, including functions.
//1. Creating an Object
//1.1 Object Literal (Most Common)
let person = {
    name : "Devraj",
    age : 19,
    city : "vadodara"
}
console.log(person)

//1.2 Using new Object()
let car = new Object();
car.name = "BMW";
car.model = "X5";
console.log(car.model) //X5

//1.3 Using Constructor Function
function person0(name, age){
    this.name = name;
    this.age = age;
}
let person1 = new person0("alice" , 18)
console.log(person1.name) //alice

//2. Accessing Object Properties
//2.1 Dot Notation (.)
console.log(person.name) //Devraj

//2.2 Bracket Notation ([])
console.log(person["age"]) //19

//3. Modifying an Object
person.name = "DEV" // Update existing property
person.country = "India" // Add new property
delete person.city // Remove property
console.log(person) // { name: 'DEV', age: 19, country: 'India

//4. Freezing & Sealing Objects
//4.1 Object.freeze() - Prevents all modifications
let students = {
    fullname : "Devraj",
    age : 19,
    rollno : 64
}
students.age = 24
Object.freeze(students) 
students.age = 26 // No effect
console.log(students) //{ fullname: 'Devraj', age: 24, rollno: 64 }

//4.2 Object.seal() (Allows Modification but No Addition/Deletion)
let obj = {a: 1, b:2}
Object.seal(obj)
obj.a = 3 // Allowed
obj.b = 4 // Allowed
obj.c = 5 // Not Allowed
delete obj.a // Not Allowed
console.log(obj) // { a: 3, b: 4 }

//4.3 Object Methods (this Keyword)
let user = {
    name: "Devraj",
    greet(){
        console.log("hello " + this.name)
    }
}
user.greet()


let instauser = { }
instauser.name = "Devraj"
instauser.id = "dev46"
instauser.followers = 1000
instauser.isloggedin = true
console.log(instauser)

const regularuser = {
    userid : "dev90",
    username : {
        fullname : {
            firstname : "Dev",
            lastname : "Raj"
        }
    }
}
console.log(regularuser.username.fullname.firstname) 

//The Object.assign(target, source) method copies all properties from the source object (o2) to the target object (o1).
const o1 = {1 : "a" , 2 : "b"}
const o2 = {3:"c" , 4 : "d"}
const o3 = Object.assign(o1 , o2)
console.log(o3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(o1) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//How to Keep o11 Unchanged? (Shallow Copy)
//If you don’t want to modify o1, use an empty object {} as the target:
const o11 = { 1: "a", 2: "b" };
const o22 = { 3: "c", 4: "d" };

const o33 = Object.assign({}, o11, o22); // Creates a new object instead of modifying o1

console.log(o33); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(o11); // { '1': 'a', '2': 'b' } (unchanged)


//we can aslo use the spread operator (...): for above program
const o12 = { 1: "a", 2: "b" };
const o23 = { 3: "c", 4: "d" };
const o34 = { ...o12, ...o23 };
console.log(o34); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//use of Object.keys(), Object.values(), Object.entries()
const  student = {
    name : "Devraj",
    age : 19,
    city : "vadodara"
}
//Object.keys()	Returns an array of keys
console.log(Object.keys(student)) // ['name', 'age', 'city']
//Object.values() Returns an array of values
console.log(Object.values(student)) //[ 'Devraj', 19, 'vadodara' ]
//Object.entries() : Returns an array of key-value pairs
console.log(Object.entries(student)) //[ [ 'name', 'Devraj' ], [ 'age', 19 ], [ 'city', 'vadodara' ] ]

// Checking if a Property Exists
console.log("name" in student) //true
console.log(student.hasOwnProperty("umar")) //false 

//JavaScript Object Destructuring : Object destructuring allows you to extract properties from an object and assign them to variables in a shorter, cleaner way.
const course = {
    coursename : "java script",
    duration : "2 months",
    courseinstructor : "hitesh",
    price : 5000
}
const {coursename , duration , price , courseinstructor : instructor} = course
console.log(price)
console.log(instructor) //hitesh
