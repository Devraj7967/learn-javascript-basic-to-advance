const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnum = mynum.filter((num) => {
    return num>4
})
console.log(newnum)

//different way
// const newnum = mynum.filter((num) => num>4)
// console.log(newnum) 

//same by using forEach
const  newnums = []
mynum.forEach((num) => {
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums)


const books= [
    {
  "title": "1984",
  "author": "George Orwell",
  "published_year": 2005,
  "genre": "fiction"
},
{
  "title": "1984",
  "author": "George Orwell",
  "published_year": 1999,
  "genre": "Dystopian"
},
{
  "title": "1984",
  "author": "George Orwell",
  "published_year": 1949,
  "genre": "history"
},
{
  "title": "1984",
  "author": "George Orwell",
  "published_year": 1998,
  "genre": "fiction"
}

]

let userbooks= books.filter((bkc) => {
    return bkc.genre === "fiction"
})
userbooks = books.filter((bkc) => {
    return bkc.published_year > 2000 && bkc.genre ==="fiction"
})
console.log(userbooks)


//maps

const numbers = [1, 2, 3, 4, 5, 6, 7,8 ,9, 10]

 const plusten = numbers.map((num) => {
    return num + 10
})
console.log(plusten)

//by using foreach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const plusten = [];

// numbers.forEach((num) => {
//   plusten.push(num + 10);
// });

// console.log(plusten); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]



//chaining 

const numers = [1, 2, 3, 4, 5, 6, 7, 8,]
const newnemrs = numers
                .map((num) => num *10)
                .map((num) => num + 1)
                .filter((num) => num >= 30)
                console.log(newnemrs)


