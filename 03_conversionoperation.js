//Datatype conversion

 let score = "33abc"
 console.log(typeof score)

 let convert_in_num = Number(score)
 console.log(typeof convert_in_num)
 console.log(convert_in_num)  //NaN (Not a Number) because it can't be converted to a number

 let isLoggedIn = "" //empty string  if there is no value in the string then it will be converted to 0 (false) , and if there is a value in the string then it will be converted to 1 (true) like " "=> 1 (true)
 console.log(typeof islogin) //undefined

 let booleanislogin = Boolean(isLoggedIn)
 console.log(booleanislogin) //false
 console.log(typeof booleanislogin) //boolean

//33abc => NaN (Not a Number) because it can't be converted to a number
// "" => 0 (false) because it is an empty string
// "33" => 33 (true) because it is a string that can be converted to a number

 //in boolean:
 // 0 => false,  1 => true
 // "" => false , "Devraj" => true

 //string conversion

 let num = 123
 let stringnum = String(num)
 console.log(stringnum)
 console.log(typeof stringnum) 

 //operation in js
 //Arithmetic operation
 let a = 10
 let b = 5
 console.log(a + b)
 console.log(a - b)
 console.log(a * b)
 console.log(a / b)
 console.log(a % b)
 //Modulus operator returns the remainder of the division of the dividend by the divisor.
 console.log(a ** b) //exponentiation operator
 //Increment and Decrement operator
 let c = 10
 console.log(c++) //post increment
 console.log(c) //post increment
 console.log(--c) //post decrement
 console.log(c) //post decrement

 str1 = "dev"
 str2 = "raj"
 console.log(str1 + str2)

 console.log("1" + 2)
 console.log(1 + "2")
 console.log(1 + 2 + "3") //starts with numeric addition and only converts to a string later. ans: "33"
 console.log("1" + 2 + 3) // starts with a string concatenation, and everything becomes part of the string chain. ans: "123"

 //prefix and postfix are used with increment (++) and decrement (--) operators. These operators increase or decrease a number by 1

 //prefix
 let x = 5;
console.log(++x); // Increments x first, so x becomes 6. Then prints 6.
console.log(x);   // x is still 6.

//postfix
let y = 5;
console.log(y++); // Prints 5 (uses the current value), then increments y to 6.
console.log(y);   // Now y is 6.













