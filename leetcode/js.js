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
    const newRes = result.trim().split(' ').map(item => isNaN(+item) ? item.split('').map(i => values[i]).reduce((acc, el)=> acc + el, 0) : item)
    return newRes.reduce((acc, el) => acc + +el, 0)
};

console.log(romanToInt('III'))
console.log(romanToInt('MCMXCIV'))