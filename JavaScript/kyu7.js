String.prototype.toJadenCase = function () {
    let result = this;

    if (this.length !== 0) {
        result = this.split(" ").map(function (word) {
            return word.substring(0, 1).toUpperCase() + word.substring(1);
        }).join(" ");
    }

    return result;
};

function squareDigits(num) {
    return +num.toString()
        .split('')
        .map((item) => Math.pow(+item, 2))
        .join('')
}

function roundToNext5(n) {
    return Math.ceil(n / 5) * 5
}

function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}

function filter_list(l) {
    const newArr = []
    l.map(item => typeof (item) === "number" ? newArr.push(item) : false)
    return newArr
}

function DNAStrand(dna) {
    return dna.split('')
        .map((item) =>
            item === 'A'
                ? 'T'
                : item === 'T'
                    ? 'A'
                    : item === 'C'
                        ? 'G'
                        : item === 'G'
                            ? 'C'
                            : '',
        )
        .join('')
}

function getMiddle(str) {
    const arr = str.split("");
    while (arr.length > 2) {
        arr.pop();
        arr.shift();
    }
    return arr.join("");
}

const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2)

function highAndLow(numbers) {
    const newArr = numbers.split(' ').map(item => +item)
    return `${Math.max(...newArr)} ${Math.min(...newArr)}`
}

function smallEnough(a, limit) {
    return Math.max(...a) <= limit ? true : false
}

const checkExam = (array1, array2) => {
    let result = 0
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] !== '') {
            if (array1[i] === array2[i]) {
                result = result + 4
            } else if (array1[i] !== array2[i]) {
                result = result - 1
            }
        }
    }
    return result > 0 ? result : 0
}

function rowWeights(array) {
    const arrOdd = array
        .filter((item, i) => i % 2 === 0)
        .reduce((a, b) => a + b, 0)
    const arrEven = array
        .filter((item, i) => i % 2 !== 0)
        .reduce((a, b) => a + b, 0)

    return array.length > 1 ? [arrOdd, arrEven] : [...array, 0]
}

function vaporcode(string) {
    return string.toUpperCase().replace(' ', '').split('').filter(item => item !== ' ').join('  ')
}

function getCount(str) {
    let vowelsCount = 0

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === 'a' ||
            str[i] === 'e' ||
            str[i] === 'i' ||
            str[i] === 'o' ||
            str[i] === 'u'
        ) {
            vowelsCount++
        }
    }

    return vowelsCount
}

function removeSmallest(numbers) {
    const min = Math.min(...numbers)
    let minIndex = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === min) {
            minIndex = i
            break
        }
    }
    const newArr = numbers.filter((item, i) => i !== minIndex)
    return newArr
}

function gimme(triplet) {
    const max = Math.max(...triplet)
    const min = Math.min(...triplet)
    return +triplet
        .map((item, i) =>
            item !== max && item !== min ? triplet.indexOf(item) : '',
        )
        .join('')
}

const sequenceSum = (begin, end, step) => {
    let result = 0
    for (let i = begin; i <= end; i += step) {
        result += i
    }
    return result
}

function minValue(values) {
    let unique = [];
    for (let str of values) {
        if (!unique.includes(str)) {
            unique.push(str);
        }
    }
    let result = unique.sort().join('')
    return +result
}

function sumTwoSmallestNumbers(numbers) {
    return numbers
        .sort((a, b) => (a > b ? 1 : -1))
        .slice(0, 2)
        .reduce((a, b) => a + b, 0)
}

function dotCalculator(equation) {
    const newArr = equation.split(' ')
    const num1 = newArr[0].length
    const sign = newArr[1]
    const num2 = newArr[2].length
    let result = 0
    if (sign === '*') {
        result = num1 * num2
    } else if (sign === '+') {
        result = num1 + num2
    } else if (sign === '-') {
        result = num1 - num2
    } else if (sign === '//') {
        result = num1 / num2
    }
    return `${'.'.repeat(result)}`
}

function wallpaper(l, w, h) {
    const numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
    ]
    return w * h * l === 0
        ? numbers[0]
        : numbers[Math.ceil(((l * h * 2 + w * h * 2) * 1.15) / 5.2)]
}

function friend(friends) {
    return friends.filter(item => item.length === 4 && item)
}

function tetration(x, y) {
    return y === 0
        ? 1
        : y === 1
            ? x
            : y === 2
                ? Math.pow(x, x)
                : y === 3 && x ** Math.pow(x, x)
}

function findSum(n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0) {
            arr.push(i)
        } else if (i % 5 === 0) {
            arr.push(i)
        }
    }
    return arr.reduce((a, b) => a + b, 0)
}

function counter() {
    let count = 0;

    function countUp() {
        count++;
        return count;
    }

    return countUp;
}

function getSum(a, b) {
    if (a === b) {
        return a
    } else {
        const smallNum = Math.min(a, b)
        const bigNum = Math.max(a, b)
        return ((bigNum - smallNum + 1) * (bigNum + smallNum)) / 2
    }
}

function descendingOrder(n) {
    return Number(String(n).split('').sort().reverse().join(''))
}

var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n))
}

function addBinary(a, b) {
    let sum = a + b
    return sum.toString(2);
}

function unusedDigits() {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const argument = [...arguments].join('').split('').map((a) => a.toString())

    return numbers.filter((a) => !argument.includes(a.toString())).join('')
}

function battle(x, y) {
    const one = x
        .split('')
        .map((item, i) => item.charCodeAt(0) - 64)
        .reduce((a, b) => a + b, 0)
    const two = y
        .split('')
        .map((item, i) => item.charCodeAt(0) - 64)
        .reduce((a, b) => a + b, 0)
    return one === two ? 'Tie!' : one > two ? x : y
}


function center(strng, width, fill = ' ') {
    if (strng.length >= width) return strng
    const widthStr = Math.ceil((width - strng.length) / 2)

    let result = ''
    result += fill.repeat(widthStr)
    result += strng
    result += fill.repeat(width - strng.length - widthStr)

    return result
}

function evenAndOdd(num) {
    const even = String(num)
        .split('')
        .filter((item) => +item % 2 === 0)
        .join('')
    const odd = String(num)
        .split('')
        .filter((item) => +item % 2 !== 0)
        .join('')

    return [+even || 0, +odd || 0]
}

function isNice(arr) {
    if (arr.length === 0) {
        return false
    } else {
        let result = []

        for (let i = 0; i < arr.length; i++) {
            if (arr.some((item) => arr[i] + 1 === item || arr[i] - 1 === item)) {
                result.push(arr[i])
            }
        }
        return result.length === arr.length
    }
}

function maskify(cc) {
    return cc.length < 5
        ? cc
        : cc
            .split('')
            .map((item, i, arr) => (i < arr.length - 4 ? '#' : item))
            .join('')
}

function findShort(s) {
    return Math.min(...s.split(' ').map((item) => item.length))
}

function nthChar(words) {
    return words.map((item, i) => item[i]).join('') || ''
}

function hydrate(s) {
    const result = s
        .replace(/[(a-z)]/gi, '')
        .split('')
        .filter((item) => parseInt(item) && parseInt(item))
        .reduce((a, b) => a + +b, 0)
    return result === 1
        ? `${result} glass of water`
        : `${result} glasses of water`
}

function XO(str) {
    const o = str
        .toLowerCase()
        .split('')
        .filter((item) => item === 'o')
    const x = str
        .toLowerCase()
        .split('')
        .filter((item) => item === 'x')
    return x.length === o.length
}

function isIsogram(str) {
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i), i + 1) !== -1) {
            return false;
        }
    }

    return true;
}

function sumOfMinimums(arr) {
    return arr.map((item) => Math.min(...item)).reduce((a, b) => a + b, 0)
}

function accum(s) {
    return s
        .split('')
        .map(
            (item, i) => item[0].toUpperCase() + item[0].toLowerCase().repeat(i),
        )
        .join('-')
}

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

function fourSeven(n) {
    const result = {
        4: '7',
        7: '4',
    }
    return result[n] || 0
}

function validatePIN(pin) {
    return pin.length < 4 || pin.length === 5 || pin.length > 6
        ? false
        : pin
            .replace(/[a-z]/gi, ' false ')
            .replace(/[^0-9]/, ' false ')
            .split(' ')
            .find((item) => item === 'false') === undefined
            ? true
            : false
}

function solve(eq) {
    return eq
        .split(/([*+-/])/)
        .reverse()
        .join('')
}

function getLargerNumbers(a, b) {
    const result = []
    for (let i = 0; i < a.length; i++) {
        result.push(a[i] >= b[i] ? a[i] : b[i])
    }
    return result
}

function spacify(str) {
    return str.split('').join(' ')
}








