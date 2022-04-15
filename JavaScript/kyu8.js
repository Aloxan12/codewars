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

function smash (words) {
    return words.join(' ')
}

function getAge(inputString){
    return Number(inputString.replace(/([a-z])/gi, ''))
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let result = 0
    for (let i = 0; i < fuelLeft; i++) {
        result += mpg
    }
    return result >= distanceToPump
}