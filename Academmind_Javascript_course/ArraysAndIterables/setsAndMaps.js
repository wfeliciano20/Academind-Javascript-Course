const ids = new Set([1, 2, 3]);

ids.add(2);

for (const entry of ids.values()) {
    console.log(entry);
}

const person1 = {
    name: 'Max'
};
const person2 = {
    name: 'Manuel'
};

const personData = new Map([
    [person1, [{
        date: 'yesterday',
        price: 10
    }]]
]);

personData.set(person2, [{
    date: 'two weeks ago',
    price: 100
}]);

console.log(personData);
console.log(personData.get(person1));

// returns the key value pair
for (const entry of personData.entries()) {
    console.log(entry);
}

//Explicitly recover the key and the value
for (const [key, value] of personData.entries()) {
    console.log(key, value);
}
// get only the key
for (const key of personData.keys()) {
    console.log(key);
}