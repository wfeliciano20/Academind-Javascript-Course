const nameFragments = ['Max', 'Schwarz'];
const copiedNameFragments = [...nameFragments];
nameFragments.push('Mr');
console.log(nameFragments, copiedNameFragments);

const persons = [{
    name: 'Max',
    age: 30
}, {
    name: 'Manuel',
    age: 31
}];
const copiedPersons = [...persons.map(person => ({
    name: person.name,
    age: person.age
}))];

console.log(persons, copiedPersons);