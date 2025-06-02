//An array in JavaScript is a special type of object used to store multiple values in a single variable.
//1. Creating an Array
//(A) Using [] (Recommended)
let fruit = ["orange" , "banana", "mango"];
console.log(fruit); // Output: ["orange", "banana", "mango"]
console.log(typeof fruit); //object
console.log(typeof fruit[1]); //string

//(B) Using new Array()
let number = new Array(10, 20, 30)
console.log(typeof number); // Output: object
console.log(typeof number[0]); // Output: number


//2. Accessing Array Elements
//(A) Using Index
console.log(number[0]); // Output: 10
console.log(fruit[1]); // Output: banana

//Tip: [] is the preferred way to create arrays.

//3. Modifying an Array
let cars = ["BMW" , "Audi", "Tesla"];
console.log(cars); // Output: ["BMW", "Audi", "Tesla"]
cars[0] = "Mercedes";                                 
console.log(cars); // Output: ["Mercedes", "Audi", "Tesla"]

//4. Array Methods
//1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
let arr = [1,2,3,4]
arr.push(5,6)
console.log(arr)

//2. pop() : Removes the last element of an array and returns that element.
let arr1 = [1,2,3,4]
arr1.pop()
console.log(arr1)

//3. shift(): Removes the first element of an array and returns baki rahela element.
let arr2 = [4, 5 ,6,7,8]
arr2.shift()
console.log(arr2)

//4. unshift() : Adds one or more elements to the beginning of an array and returns the new length.
let arr3 = [3,4,5]
arr3.unshift(0,1,2)
console.log(arr3)

//5. slice() :Returns a shallow copy of a portion of an array into a new array without modifying the original array.
let arr4 = [1,2,3,4,5]
let part = arr4.slice(1,3)
console.log(part) //[ 2, 3 ]
console.log(arr4) //[1, 2, 3, 4, 5] (original array remains unchanged)

//6. splice() : Adds or removes elements in an array by modifying the original array.
//Syntax: array.splice(startIndex, deleteCount, item1, item2, ...);
//startIndex: The index to begin modifying the array.
//deleteCount: Number of elements to remove.
//item1, item2, ...: Items to add (optional).
let arr5 = [1,2,3,4,5]
arr5.splice(1,1,"a","b")  //[ 1, 'a', 'b', 3, 4, 5 ]
console.log(arr5)

//Remove elements:
arr5.splice(1, 2) //[ 1, 3, 4, 5 ]
console.log(arr5) 

//Add elements:
arr5.splice(1, 0, "a", "b") //[ 1, 'a', 'b', 3, 4, 5 ]
console.log(arr5) 

//Replace elements:
arr.splice(1, 2, 'x', 'y'); //[ 1, 'x', 'y', 4, 5, 6 ]
console.log(arr);

//7. indexOf() : Returns the first index at which a given element is found in the array, or -1 if it is not present.
let arr6 = [1,2,3,4,5]
console.log(arr6.indexOf(3)) // 2 (first occurrence)
console.log(arr6.indexOf(6)) //-1 (not found)

//8. includes() : Checks if an array contains a specific value. Returns true if found, otherwise false.
let arr7 = [1,2,3,4,5]
console.log(arr7.includes(7)) //false    
console.log(arr7.includes(3)) //true              

//The join() method in JavaScript is used to convert an array into a single string, with a specified separator between the elements.

//Examples
//1. Basic Usage
let arr8 = ["red", "blue", "orange"]
let result = arr8.join(",")
console.log(result);

//2. Default Separator (Comma)
let arr9 = ["mango", "banana", "apple"]
let fruits = arr9.join()
console.log(fruits); // Output: mango,banana,apple

//3. Using a Custom Separator
let arr10 = [1, 2, 3 ,4]
let numbers = arr10.join("-")
console.log(numbers); // Output: 1-2-3-4

//4. Joining Without a Separator To create a string without any separator, pass an empty string:
let arr11 = ['h' , 'e', 'l', 'l', 'o']
console.log(arr11.join('')) // Output: "hello"

let arr12 = [1,2,3,4]
console.log(arr12.join('')) // Output:  1234     To create a string without any separator, pass an empty string

//5. Empty Array If the array is empty, join() returns an empty string:
let arr13 = []
console.log(arr13.join('')) // Output: ""

//Common Use Cases OF join
//1. Creating Readable Strings :Example: Joining an array of words into a sentence.
let arr14 = ["i", "love" ,"JavaScript"]
console.log(arr14.join(" ")) //'I love JavaScript'

//2. Formatting Data Example: Converting an array into a comma-separated list.
let arr15 = [10, 20 ,30, 40]
console.log(arr15.join(",")) //10,20,30,40
console.log(arr15) //[ 10, 20, 30, 40 ]

//3. Generating URLs or File Paths
let path = ["home" , "user" , "documents" , "file.txt"]
console.log(path.join("/")) //// 'home/user/documents/file.txt'

//The join() method is simple yet very powerful for working with arrays and generating strings. 


//1. push() : The push() method adds one or more elements to the end of an array and returns the new length of the array.
let arr01 = [1, 2, 3];
arr01.push(4, 5); 
console.log(arr01); // [1, 2, 3, 4, 5]

//2. concat() : The concat() method merges two or more arrays into a new array. It does not modify the original arrays.
let num1 = [1,2,3]
let num2 = [4,5,6]
let finalnum = num1.concat(num2 , [7,8])
console.log(finalnum); //[1, 2, 3, 4,5, 6, 7, 8]
console.log(num1);   // [1, 2 , 3] (original array remains unchanged)

//3. Spread Operator (...) : The spread operator (...) expands an array into individual elements, which can be used to create a new array or pass elements into a function.

//1. Merging Arrays
let num01 = [1, 2, 3]
let num02 = [4, 5,6]
let merged = [...num01 , ...num02]
console.log(merged) //[ 1, 2, 3, 4, 5, 6 ]

//2. Copying Arrays
let copy = [...num02]  
console.log(copy) //[ 4, 5, 6 ]

//3. Adding New Elements
let newnum = [0 , ...num01 ,4 , 5]
console.log(newnum) //[ 0, 1, 2, 3, 4, 5 ] 

//4. flat() : The flat() method creates a new array by flattening nested arrays up to a specified depth.

//1. Default Depth:
let nested1 = [1 ,2 , [3, [4]]]
let flatted = nested1.flat();
console.log(flatted); // [1, 2, 3, Array(1)]

//2. Flattening to a Specific Depth:
let nested2 = [1, [2, [3, [4]]]]
let flat2 = nested2.flat(3)
console.log(flat2) //[ 1, 2, 3, 4 ]

//3. Removing Empty Slots:
let emptyslot = [1, 2, , 4];
console.log(emptyslot.flat()); // [1, 2, 4]

//5. Array.from() : The Array.from() method creates a new array from an array-like or iterable object (like strings, sets, or NodeLists).

//1. Converting a String to an Array:
let str = "hello"
let strarr = Array.from(str)
console.log(strarr) //[ 'h', 'e', 'l', 'l', 'o' ]

//2. Creating an Array from a Set:
let set = new Set([1, 2, 3]);
let setarr = Array.from(set);
console.log(setarr); // [1, 2, 3]

//6. Array.of() The Array.of() method creates a new array from the provided arguments, regardless of their type.
//1. Creating Arrays with Different Types:
let array = Array.of(1, "one" , "two" , true)
console.log(array) //[ 1, 'one', 'two', true ]

//2. Difference Between Array() and Array.of():
let array1 = Array(3); // Creates an array with 3 empty slots
console.log(array1); // [ <3 empty items> ]

let array2 = Array.of(3); // Creates an array with the single value 3
console.log(array2); // [3]
