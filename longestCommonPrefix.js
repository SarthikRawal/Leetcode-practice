var longestCommonPrefix = function (strs) {
    let res = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(res) !== 0) {
            res = res.substr(0, res.length - 1)
            if (res.length === 0) {
                return '';
            }
        }
    }
    return res;
};

let arr1 = ['flow', 'flowers', 'flight'];
let arr2 = ['cars', 'carpenter', 'cartoon'];

console.log(longestCommonPrefix(arr1));
console.log(longestCommonPrefix(arr2));