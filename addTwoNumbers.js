class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }

}

const l1 = new Node(2, new Node(4, new Node(5)));
const l2 = new Node(7, new Node(3, new Node(6)));


var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    let carry = 0;

    let tempList = new Node();
    let result = tempList;

    while (l1 || l2 || carry) {
        sum = carry;

        if (l1) {
            sum += l1.data;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.data;
            l2 = l2.next;
        }
        let num = sum % 10;
        carry = Math.floor(sum / 10);
        tempList.next = new Node(num);
        tempList = tempList.next;
    }
    return result.next;
};

function printList(sol) {
    let res = []
    while (sol) {
        res.push(sol.data);
        sol = sol.next;
    }
    return res;
}

console.log(printList(addTwoNumbers(l1, l2)));