/*
Create an array of numbers and perform three array operations on it:
filter for numbers greater than 5, map every number to an object 
which holds the number on some property('num') and reduce the array to
a single number(the multiplication of all numbers)
*/

const numbers = [4, 6, 5, 2, 3, 1];

const greaterThanFive = numbers.filter(number => number > 5);

const mappedNumbers = numbers.map(val => ({
    num: val
}));

const multiplication = numbers.reduce((acumulator, currentValue) => acumulator * currentValue, 1);

console.log(mappedNumbers);

console.log(multiplication);

/*
Write a function('findMax') which executes some logic that finds the 
largest number in a list of arguments. Pass the array from task1 split
up into multiple arguments to that function
*/

function findMax(...numbers) {
    let curMax = numbers[0];
    for (const num of numbers) {
        if (num > curMax) {
            curMax = num;
        }
    }
    return curMax;
}

console.log(findMax(...numbers));

/*
Tweak the findMax function such that it finds both the minimum and the 
maximum and returns those as an array.Then use destructuring when calling
the function to store the two results in separate constants.
*/

function findMinMax(...numbers) {
    let curMax = numbers[0];
    let curMin = numbers[0];
    for (const num of numbers) {
        if (num > curMax) {
            curMax = num;
        }
        if (num < curMin) {
            curMin = num;
        }
    }
    return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

/*
Create a list where you ensure that NO duplicate values can be added. Use
whichever approach seems appropriate to you.
*/

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);