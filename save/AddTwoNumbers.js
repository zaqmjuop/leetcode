
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

ListNode.prototype.addNum = function (num) {
    this.next = new ListNode(num);
    return this.next;
}

const list1 = new ListNode(2);
list1.addNum(4).addNum(3);
const list2 = new ListNode(5);
list2.addNum(6).addNum(4);

const toArray = (list) => {
    const arr = [];
    let flag = list;
    do {
        arr.push(flag.val);
        flag = flag.next;
    } while (flag instanceof ListNode && Number.isSafeInteger(flag.val));
    return arr;
}
const toListNode = (arr) => {
    if (!(arr instanceof Array)) { return }
    let list = new ListNode(arr[0]);
    let flag = list;
    for (let index = 1; index < arr.length; index += 1) {
        const num = parseInt(arr[index]);
        if (Number.isSafeInteger(num)) {
            flag.next = new ListNode(num);
            flag = flag.next;
        }
    }
    return list;
}

const computedNum = (arr) => {
    if (!(arr instanceof Array)) { return; }
    const a = arr.reverse().join('');
    return parseInt(a);
}
var addTwoNumbers = function (l1, l2) {
    let root, flag, val1, val2;
    let flag1 = l1;
    let flag2 = l2;
    let hasTen = 0;
    while (flag1 instanceof ListNode || flag2 instanceof ListNode || hasTen) {
        // 取同位值，然后更改位置
        if (flag1) {
            val1 = parseInt(flag1.val);
            flag1 = flag1.next;
        } else {
            val1 = 0;
        }
        if (flag2) {
            val2 = parseInt(flag2.val);
            flag2 = flag2.next;
        } else {
            val2 = 0;
        }
        // 计算
        let sum = val1 + val2 + hasTen;
        // 进位归0；
        hasTen = 0;
        if (sum > 9) {
            hasTen = 1;
            sum -= 10;
        }
        // 设置next
        if (flag instanceof ListNode) {
            flag.next = new ListNode(sum);
            flag = flag.next;
        } else {
            root = new ListNode(sum);
            flag = root;
        }
    }
    return root;
};

// addTwoNumbers(list1, list2);
a = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
b = [5, 6, 4];
aa = toListNode(a);
bb = toListNode(b);
console.log('start')
console.log(aa, bb)
const res = addTwoNumbers(aa, bb);
console.log(toArray(res))
console.log('end')