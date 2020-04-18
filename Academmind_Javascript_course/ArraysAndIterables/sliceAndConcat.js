const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice(0, 2);
const storedResults2 = testResults.slice(-3, -1);
const storedResults3 = testResults.concat([3.99, 2]);

testResults.push(5.91);
// splice copies the array into a new array
console.log(storedResults3, testResults);