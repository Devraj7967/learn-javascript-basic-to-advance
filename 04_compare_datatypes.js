//comparison of Datatypes

console.log( 2 == 2);  //true (Values are equal, type doesn't matter).
console.log( 2 === 2); //true (Values and types are equal)
console.log(2 < 1); //false (2 is not less than 1).
console.log(2 > 1); //true (2 is greater than 1).
console.log(2 <= 1); //false (2 is not less than or equal to 1).
console.log(2 >= 1); //true (2 is greater than or equal to 1).
 
console.log("2" == 2); //"2" == 2 → true (type conversion makes them equal).
console.log("2" > 1); //"2" > 1 → true ("2" converts to number 2, and 2 > 1).
console.log(2 > "1"); //2 > "1" → true ("1" converts to number 1, and 2 > 1).
console.log("2" === 2); // "2" === 2 → false (strict equality fails because types are different)

console.log(null > 0); //null > 0 → false (null is not greater than 0; it’s treated as 0 in comparisons but not here).
console.log(null == 0); //null == 0 → false (null only loosely equals undefined, not 0).
console.log(null === 0); //null === 0 → false (strict equality fails because null and 0 are different types).
console.log(null >= 0); //null >= 0 → true (null is treated as 0 in >=, so 0 >= 0 is true).

console.log(undefined == 0); //undefined == 0 → false (undefined only equals null, not numbers).
console.log(undefined > 0); //undefined > 0 → false (undefined cannot be compared with numbers).
console.log(undefined == null); //undefined == null → true (both are falsy values, so
console.log(undefined < 0);  //undefined < 0 → false (same reason, undefined cannot be compared with numbers).

console.log(null == undefined); // null == undefined → true (loose equality treats them as equal).
console.log(null === undefined); // null === undefined → false (strict equality checks types, which are different).
console.log(null >= undefined); // null >= undefined → false (Relational comparisons with undefined (like >=, <, etc.) return false.)








