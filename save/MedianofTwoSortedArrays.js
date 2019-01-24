a = [1, 3];
b = [2, 4];
const insert = (arr, num) => {
    if (!(arr instanceof Array)) { return }
    let hasInserted = false;
    for (let index = 0; index < arr.length; index += 1) {
        const element = arr[index];
        if (element > num) {
            arr.splice(index, 0, num);
            hasInserted = true;
            break;
        }
    }
    if (!hasInserted) {
        arr.push(num);
    }
    return arr;
}

var findMedianSortedArrays = function (nums1, nums2) {
    let arr;
    if (nums1.length < 1 || nums2.length < 1) {
        arr = (nums1.length > 0) ? nums1 : nums2;
    } else {
        arr = nums1.slice(0, nums1.length);
        nums2.forEach(num2 => {
            insert(arr, num2);
        });
    }
    let flag = (arr.length + 1) / 2 - 1;
    let res;
    if (Number.isSafeInteger(flag)) {
        res = arr[flag];
    } else {
        console.log(arr, flag);
        res = (arr[Math.trunc(flag)] + arr[Math.ceil(flag)]) / 2;
    }
    return res;
};

const res = findMedianSortedArrays(a, b);
console.log(a, b, res);