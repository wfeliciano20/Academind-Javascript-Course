const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);
// splice copies the array into a new array
console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5));
// Index Of does not work with objects
const personData = [{
    name: 'Max'
}, {
    name: 'Manuel'
}];
console.log(personData.indexOf({
    name: 'Max'
}));

const manuel = personData.find((person, index, persons) => {
    return person.name === "Manuel";
});

console.log(manuel, personData);