function multiply(a, b) {
    return a * b
}

function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

function DNAtoRNA(dna) {
    return dna.split('')
        .map((item) => (item.toUpperCase() === 'T' ? 'U' : item))
        .join('')
        .replace(/[\s.,%]/g, '')
}

function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m
}

function solution(str) {
    return str.split("").reverse().join("");
}

function boolToWord(bool) {
    return bool ? 'Yes' : 'No'
}

function boolToWord2(bool) {
    return `${bool}`
}

function lovefunc(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true
    } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
        return true
    } else {
        return false
    }
}

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

function positiveSum(arr) {
    return arr.map((item) => (item > 0 ? item : 0)).reduce((a, b) => a + b, 0)
}

function century(year) {
    let century = 100
    let count = 1
    while (century < year) {
        count++
        century += 100
    }
    return year > century ? 0 : count
}

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}

function wrap(value1) {
    const result = {
        value: null,
    }
    result.value = value1
    return result
}

function removeChar(str) {
    return str.split('').splice(1, str.length - 2).join('')
}

function powersOfTwo(n) {
    const result = []
    for (let i = 0; i <= n; i++) {
        result[i] = Math.pow(2, i)
    }
    return result
}

function opposite(number) {
    return number * -1
}

function multiply(a, b) {
    return a * b
}

function repeatStr(n, s) {
    return s.repeat(n);
}

function isToday(date) {
    return new Date().toDateString() === date.toDateString()
}

function squareSum(numbers) {
    return numbers.reduce((a, b) => a + b ** 2, 0)
}

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
}

function litres(time) {
    return Math.floor(time * 0.5)
}

function isDivisible(n, x, y) {
    return (n / x) % 1 === 0 && (n / y) % 1 === 0
}

function noSpace(x) {
    return x.replace(/([' '])/g, '')
}

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(i => i).length
}

function smash(words) {
    return words.join(' ')
}

function getAge(inputString) {
    return Number(inputString.replace(/([a-z])/gi, ''))
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let result = 0
    for (let i = 0; i < fuelLeft; i++) {
        result += mpg
    }
    return result >= distanceToPump
}

function switchItUp(number) {
    return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number]
}

function divisibleBy(numbers, divisor) {
    return numbers.filter((item) => item % divisor === 0)
}

function sameCase(a, b) {
    if (!/[A-Za-z]/.test(a) || !/[A-Za-z]/.test(b)) {
        return -1
    } else if (/[A-Z]/.test(a) && /[A-Z]/.test(b)) {
        return 1
    } else if (/[a-z]/.test(a) && /[a-z]/.test(b)) {
        return 1
    } else {
        return 0
    }
}

function finalGrade(exam, projects) {
    return exam > 90 || projects > 10 ? 100 : exam > 75 && projects > 4 ? 90 : exam > 50 && projects > 1 ? 75 : 0
}

function pillars(numPill, dist, width) {
    return numPill > 1 ? (numPill - 1) * dist * 100 + (numPill - 2) * width : 0;
}

function countBy(x, n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i * x)
    }
    return result;
}

const mass = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    return (((givenMass1 / molarMass1) + (givenMass2 / molarMass2)) * (0.082 * (temp + 273.15))) / volume
}

function logs(x, a, b) {
    return (Math.log(a) / Math.log(x)) + (Math.log(b) / Math.log(x))
}

function drawStairs(n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        if (i === n) result += 'I'
        if (i !== n) result += `I\n${' '.repeat(i)}`
    }
    return result
}

const STRANGE_STRING = 'oß';

const areaOrPerimeter = function (l, w) {
    if (l === w) return l * w
    return 2 * (l + w)
};
// console.log(areaOrPerimeter(3, 3)) // 9
// console.log(areaOrPerimeter(6, 10)) // 32

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}

function sumMul(n, m) {
    if (n >= m) return 'INVALID'
    let result = []
    while (n < m) {
        result.push(n)
        m -= n
    }
    return result.map((num, index) => num * (index + 1)).reduce((acc, el) => acc + el, 0)
}

// console.log('sumMul', sumMul(2 , 9)) // 20

const isNewWeight = (newWeight, oldWeight) => {
    return newWeight >= oldWeight + 0.005 || newWeight <= oldWeight - 0.005
}

// console.log('isNewWeight', isNewWeight(0.009, 0))
// console.log('isNewWeight', isNewWeight(0.003, 0))
// console.log('isNewWeight', isNewWeight(1.023, 1.027))