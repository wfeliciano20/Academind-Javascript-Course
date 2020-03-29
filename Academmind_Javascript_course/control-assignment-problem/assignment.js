const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    alert("Big number");
}

let nums = [1, 2, 3, 4, 5];

for (const num of nums) {
    console.log(num);
}

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

for (let i = nums.length - 1; i >= 0; i--) {
    console.log(nums[i])
}

const randomNumber2 = Math.random();

if (randomNumber > 0.7 && randomNumber2 > 0.7 || randomNumber < 0.2 || randomNumber2 < 0.2) {
    alert("second condition");
}