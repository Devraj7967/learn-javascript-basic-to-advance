// a string is a sequence of characters used to represent text. Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
let str1 = "Hello, World!";  // Double quotes
let str2 = 'JavaScript';     // Single quotes
let str3 = `Template Literal`; // Backticks

//String Properties & Methods

//1. Length
// The length property returns the number of characters in a string.
let text = "Hello";
console.log(text.length); // Output: 5

//2. Indexing (Accessing Characters)
console.log(text[1])  // 'e'
console.log(text.charAt(1)) // 'e'

// What Happens If Index is Out of Range?
//1️⃣ Using text1[index]
// If the index is out of range, it returns undefined.
let text1 = "Hello";
console.log(text1[10]); // Output: undefined

//2️⃣ Using charAt(index)
// If the index is out of range, it returns an empty string.
console.log(text.charAt(10)); // Output: ''

//3. Changing Case
console.log(text.toUpperCase())  //"HELLO"
console.log(text.toLowerCase()) //"hello"

//4. Find the Position of a Word : Use .indexOf() to find where a word starts.
let sentence = "i love javascript"
console.log(sentence.indexOf("love")) // Output: 2
console.log(sentence.indexOf("javascript")) //output: 7

//If the word is not found, it returns -1.
console.log(sentence.indexOf("python")) // Output: -1

//5️. Extract Part of a String : Use .slice(start, end) to get a part of a string.
let name = "JavaScript";
console.log(name.slice(0, 4)); // Output: "Java"
console.log(name.slice(4)); // Output: "Script"

// substring(start, end) - Another way to extract, Works like slice(), but does not accept negative values.
console.log(name.substring(4, 10)); // Output: "Script"

//6. Replace a Word in a String : Use .replace(oldWord, newWord).
let text2 = "I love Python";
console.log(text2.replace("Python", "JavaScript")); // Output: "I love JavaScript"

//7️. Check if a Word Exists in a String : Use .includes().
let sentence1 = "JavaScript is fun!";
console.log(sentence1.includes("JavaScript")); // Output: true
console.log(sentence1.includes("Python")); // Output: false

//7️ trim() - Remove spaces from both sides

let text3 = "    hello  "
console.log(text3.trim()) // Output: "hello"

//9️ split(separator) - Convert a string to an array
let text4 = "tata, tesla, thar, lexus";
console.log(text4.split(",")); //[ 'tata', ' tesla', ' thar', ' lexus' ]




