const prices = [8.99, 4.99, 2.49, 10.99];

const filteresArray = prices.filter(p => p > 6);

console.log(filteresArray);

// not using reduce
let sum = 0;

prices.forEach((price) => {
    sum += price;
});

const sum2 = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum2);

const data = 'new york;10.99;2000';

const transformedData = data.split(';');

const nameFragments = ['Max', 'Scharz'];

const name = nameFragments.join(' ');

console.log(name);