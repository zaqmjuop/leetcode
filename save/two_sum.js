var twoSum = function (nums, target) {
    const result = new Array(2);
    for (let index = 0; index < nums.length; index += 1) {
        const num = nums[index];
        const minus = target - num;
        const indexOf = nums.lastIndexOf(minus);
        if (indexOf && indexOf > index) {
            result[0] = index;
            result[1] = indexOf;
            break;
        }
    }
    return result;
};

const test = twoSum([2, 7, 11, 15], 9);
console.log(test);