const values = {
    IX: 9,
    CM: 900,
    XC: 90,
    CD: 400,
    IV: 4,
    XL: 40,
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

var romanToInt = function (s) {
    let result = s
    for (let value in values) {
        result = result.replace(value, ` ${values[value]} `)
    }
    const newRes = result.trim().split(' ').map(item => isNaN(+item) ? item.split('').map(i => values[i]).reduce((acc, el) => acc + el, 0) : item)
    return newRes.reduce((acc, el) => acc + +el, 0)
};

// console.log(romanToInt('III'))
// console.log(romanToInt('MCMXCIV'))

var plusOne = function(digits) {
    return String(BigInt(digits.join('')) + BigInt('1')).split('').map(Number)
};
console.log('plusOne', plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))