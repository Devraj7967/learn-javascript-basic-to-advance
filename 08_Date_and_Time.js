//JavaScript provides the Date object to work with date and time. 
//1. Creating a Date Object : To create a new date, use the new Date() constructor.

//(A) Get the Current Date & Time
let now = new Date();
console.log(now)

 //By default, new Date() gives the current date and time in the browser's time zone.

 //(B) Create a Specific Date : You can create a specific date using different formats.
// (YYYY, MM, DD, HH, MM, SS, MS)
 let date1 = new Date(2024, 0 ,15, 10 , 30 ,10)
 console.log(date1)
 // Note: Month starts from 0 (January = 0, February = 1, ..., December = 11).

 //2. Getting Date Components : You can extract parts of a date using built-in methods.
 // Important Notes:
//getMonth() starts from 0 (January) to 11 (December).
//getDay() returns the weekday index (0 = Sunday, 1 = Monday, etc.).
 
let today = new Date();
console.log(today.getFullYear());  // 2025
console.log(today.getMonth())
console.log(today.getDay()) //getDay() returns the weekday index (0 = Sunday, 1 = Monday, etc.).
console.log(today.getDate()) //(Day of the month)
console.log(today.getHours());     //  (Hours in 24-hour format)
console.log(today.getMinutes());   //  (Minutes)
console.log(today.getSeconds());   //  (Seconds)
console.log(today.getMilliseconds()); //  (Milliseconds)

//3. Setting Date Components : You can change the date/time using setter methods.
// These methods modify the original date object.
let newDate = new Date();
newDate.setFullYear(2025);
newDate.setMonth(5);  // June (Remember, months start from 0)
newDate.setDate(20);  // 20th day of the month
newDate.setHours(15); // 3 PM
console.log(newDate);

//4. To display a readable date format, use toLocaleString().

let Day = new Date();
console.log(Day.toDateString());       // "Tue Jan 09 2024"
console.log(Day.toTimeString());       // "14:30:00 GMT+0530 (IST)"
console.log(Day.toISOString());        // "2024-01-09T09:00:00.000Z"
console.log(Day.toLocaleString());     // "1/9/2024, 2:30:00 PM"
console.log(Day.toLocaleDateString()); // "1/9/2024"
console.log(Day.toLocaleTimeString()); // "2:30:00 PM"

//5. Date Calculations

//(A) Find Difference Between Two Dates
let divas1 = new Date("2024-01-01");
let divas2 = new Date("2024-02-01");

let diff = divas2 - divas1;  // Difference in milliseconds
console.log(diff / (1000 * 60 * 60 * 24)); // 31 days , This converts milliseconds into days.

//(B) Add or Subtract Days from a Date
let today1 = new Date();
today.setDate(today1.getDate() ); // Add 7 days
console.log(today1);

//6. Timestamp (Milliseconds Since 1970) : A timestamp is the number of milliseconds since January 1, 1970 (Unix Epoch Time).
let timestamp = Date.now();
console.log(timestamp); // Example (milliseconds)

//🔥 Interview Tips
//1.Difference Between Date() & new Date()
//Date() → Returns a string.
//new Date() → Returns a Date object.

//2. How to get the timestamp?
//Date.now(); // Gives current timestamp in milliseconds
console.log(Date.now())
console.log(Date.now() / (1000 * 60 * 60 * 24)); // 31 days , This converts milliseconds into days.

//3. what is timestamp ?
//Timestamp is the number of milliseconds since January 1, 1970 (Unix Epoch Time).



