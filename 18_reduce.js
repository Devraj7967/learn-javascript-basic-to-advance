const mynum = [1,2,3,4,5]

const totalnum = mynum.reduce(function (acc, currvalue){
    console.log(`acc: ${acc} , currvalue: ${currvalue}`)
    return acc + currvalue
}, 0)
console.log(totalnum)


const shopping_cart = [
    {
        moviename: "mission_imp",
        price: 200
    },
    {
        foodname: "popcourn",
        price: 250
    }
]

const totaltopay = shopping_cart.reduce((acc, currvalue) => acc + currvalue.price , 0)
console.log(totaltopay) //450