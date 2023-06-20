const values = {
    CM: 900,
    XC: 90,
    IV: 4,
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
    console.log('result', result)
    return result.split(' ').map(rome => values[rome]).reduce((acc, el) => acc + +el, 0)
};

console.log(romanToInt('III'))
console.log(romanToInt('MCMXCIV'))