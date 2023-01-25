let nums = [5,0,3,7,9,10,2,8];
let count = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
        count++;
    }
}
console.log(count);