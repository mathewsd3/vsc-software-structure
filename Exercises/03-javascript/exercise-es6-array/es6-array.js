/*
'use strict'

const USER_ARRAY1 = [
    { id: 1, name: 'Martin', age: 45 },
    { id: 2, name: 'Pierre', age: 15 },
    { id: 3, name: 'Josee', age: 14 },
    { id: 4, name: 'Melanie', age: 32 },
    { id: 5, name: 'Sonia', age: 24 }
    ]

console.log("User Array 1: ")
console.log(USER_ARRAY1);

let result1 = USER_ARRAY1.filter(function (UARRAY) {
        delete UARRAY.age;
        return true;
    });
console.log("Result 1: ")
console.log(result1);

const USER_ARRAY2 = [
    { id: 1, name: 'Martin', age: 45 },
    { id: 2, name: 'Pierre', age: 15 },
    { id: 3, name: 'Josee', age: 14 },
    { id: 4, name: 'Melanie', age: 32 },
    { id: 5, name: 'Sonia', age: 24 }
    ]
console.log("User Array 2: ")
console.log(USER_ARRAY2);

function checkAge(userArray)
{
    return userArray.age > 15
}

let result2 = USER_ARRAY2.filter(checkAge)

console.log("Result 2: ")
console.log(result2)

const USER_ARRAY3 = [
    { id: 1, name: 'Martin', age: 45 },
    { id: 2, name: 'Pierre', age: 15 },
    { id: 3, name: 'Josee', age: 14 },
    { id: 4, name: 'Melanie', age: 32 },
    { id: 5, name: 'Sonia', age: 24 }
    ]
console.log("User Array 3: ")
console.log(USER_ARRAY3);

const ageSum = USER_ARRAY3.reduce((total, USER_ARRAY3)=>{
    return total + USER_ARRAY3.age
},0)

console.log("Average age of all objects is : " + ageSum/USER_ARRAY3.length);
*/

const USER_ARRAY = [
    { id: 1, name: 'Martin', age: 45 },
    { id: 2, name: 'Pierre', age: 15 },
    { id: 3, name: 'Josee', age: 14 },
    { id: 4, name: 'Melanie', age: 32 },
    { id: 5, name: 'Sonia', age: 24 }
    ]

const mapResult = USER_ARRAY.map(function(item){
    return {
        id: item.id,
        name: item.name
    }
})

console.log(mapResult)

const filterResult = USER_ARRAY.filter(function (item){
    return item.age > 15
})

console.log(filterResult)

const initialValue = 0
const reduceResult = USER_ARRAY.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.age
}, initialValue)

console.log(reduceResult / USER_ARRAY.length)
