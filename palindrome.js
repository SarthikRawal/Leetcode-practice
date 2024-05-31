var isPalindrome = function (x) {
    if (x <= 0) {
        return false
    } else {
        let temp = x
        let reverse = 0
        while (x > 0) {
            reverse = (reverse * 10) + (x % 10)
            x = Math.floor(x / 10)
        }
        if (reverse === temp) {
            return true
        } else {
            return false
        }
    }
};
console.log(isPalindrome(15351));