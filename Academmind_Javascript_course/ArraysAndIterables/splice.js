const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
console.log(hobbies, hobbies[4]);

hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(hobbies);