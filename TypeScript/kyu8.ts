export function numberToString(num: number): string {
    return String(num)
}

export const summation = (num: number) => {
    let result: number = 0
    for (let i = 0; i <= num; i++) {
        result += i
    }
    return result
}

export function simpleMultiplication(num: number): number {
    return num % 2 === 0 ? num * 8 : num * 9;
}

export function stringToNumber(str: string): number {
    return Number(str)
}

export const makeNegative = (num: number): number => {
    return num > 0 ? -num : num
};

export const digitize = (n: number): number[] => {
    return `${n}`
        .split('')
        .reverse()
        .map((item) => +item)
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function even_or_odd(n: number): string {
    return n % 2 === 0 ? 'Even' : 'Odd'
}

export function positiveSum(arr: number[]): number {
    return arr.filter(i => i > 0).reduce((a, b) => a + b, 0);
}

export class Kata {
    static opposite(n: number) {
        return n > 0 ? -n : n * -1
    }
}

export function removeChar(str: string): string {
    return str.slice(1, str.length - 1)
}

export const boolToWord = (bool: boolean): string => {
    return bool ? 'Yes' : 'No'
};

export function numberToString2(num: number): string {
    return `${num}`
}

// export function repeatStr(n: number, s: string): string {
//     return s.repeat(n);
// }
export function repeatStr(n: number, s: string): string {
    return s["repeat"](n);
}

export function findSmallestInt(args: number[]): number {
    return Math.min(...args)
}

export function noSpace(x: string): string {
    return x.split(' ').join('')
}

export function squareSum(numbers: number[]): number {
    return numbers.map(num => Math.pow(num, 2)).reduce((a, b) => a + b, 0);
}

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    return arrayOfSheep.filter(i => !!i).length
}

export function isDivisible(n: number, x: number, y: number): boolean {
    return (n / x) % 1 === 0 && (n / y) % 1 === 0
}

export const centuryFromYear = (year: number): number => {
    let century = 100
    let count = 1
    while (century < year) {
        count++
        century += 100
    }
    return year > century ? 0 : count
};

export function litres(time: number): number {
    return Math.floor(time * 0.5);
}

export function basicOp(operation: string, value1: number, value2: number): number {
    if (operation === '+') {
        return value1 + value2
    } else if (operation === '-') {
        return value1 - value2
    } else if (operation === '*') {
        return value1 * value2
    } else {
        return value1 / value2
    }
}

export function abbrevName(name: string): string {
    return name.split(' ').map(item => item[0].toUpperCase()).join('.')
}

export function greet(name: string): string {
    return `Hello, ${name} how are you doing today?`
}

export const greet2 = () => "hello world!"

export function invert(array: number[]): number[] {
    return array.map(i => -i);
}

export function countPositivesSumNegatives(input: number[] | null) {
    if (input === null) {
        return []
    } else {
        const neg = input.filter(i => i < 0).reduce((acc, elem) => acc + elem, 0)
        const pos = input.filter(i => i > 0).length
        return neg === 0 && pos === 0 ? [] : [pos, neg]
    }
}

export function reverseWords(str: string): string {
    return str.split(' ').reverse().join(' ')
}

export const check = (a: (number | string)[], x: number | string): boolean => {
    return //`${a.find(item => item === x)}` !== 'undefined' ? true : false
}

export function findAverage(array: number[]): number {
    return array.length === 0 ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
}

export function greet3(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

export const reverseSeq = (n: number): number[] => {
    let result = [];
    for (let i = n; i > 0; i--) {
        result.push(i)
    }
    return result
};

export const fakeBin = (x: string): string => {
    const splitString = x.split('')
    const joinInt = []
    for (let index = 0; index < splitString.length; index++) {
        if (parseInt(splitString[index]) < 5) {
            joinInt.push(0)
        } else if (parseInt(splitString[index]) >= 5) {
            joinInt.push(1)
        }
    }
    return joinInt.join('')
}

export function getAverage(marks: number[]): number {
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

export function paperwork(n: number, m: number): number {
    return n <= 0 || m <= 0 ? 0 : n * m;
}

export const booleanToString = (b: boolean): string => {
    return `${b}`
};

export function bmi(weight: number, height: number): string {
    const bmi = weight / Math.pow(height, 2)
    return bmi <= 18.5 ? 'Underweight'
        : bmi <= 25.0 ? "Normal"
            : bmi <= 30.0 ? "Overweight"
                : bmi > 30 ? "Obese" : ''
}

export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
    return [...arr1, ...arr2].reduce((a, b) => a + b, 0)
}

export function hero(bullets: number, dragons: number): boolean {
    return bullets / dragons >= 2;
}

export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
    return yourPoints > classPoints.reduce((a, b) => a + b, yourPoints) / (classPoints.length + 1);
}

export function grow(arr: number[]): number {
    return arr.reduce((a, b) => a * b, 1)
}

export function lovefunc(flower1: number, flower2: number): boolean {
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true
    } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
        return true
    } else {
        return false
    }
}

export function makeUpperCase(str: string): string {
    return str.toUpperCase();
}

export function DNAtoRNA(dna: string): string {
    let result = ''
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'U') {
            result += 'T'
        } else if (dna[i] === 'T') {
            result += 'U'
        } else {
            result += dna[i]
        }
    }
    return result
}

export class Kata1 {
    public static bonusTime(salary: number, bonus: boolean): string {
        let result = salary;
        if (bonus) result *= 10;
        return "£" + result;
    }
}

export function monkeyCount(n: number) {
    let res = []
    for (let i = 1; i <= n; i++) {
        res.push(i)
    }
    return res
}

export function sumArray(array: number[] | null): number {
    if (array !== null) {
        return array.sort((a, b) => a > b ? 1 : -1).slice(1, -1).reduce((a, b) => a + b, 0);
    } else {
        return 0
    }
}

export const max = (list: number[]): number => {
    return Math.max(...list)
}

export const min = (list: number[]): number => {
    return Math.min(...list)
};

export function areYouPlayingBanjo(name: string): string {
    return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}

export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
    return distance / mpg <= fuelLeft
};

export function countSheep(num: number): string {
    if (num === 0) {
        return ''
    } else {
        let result = ''
        for (let i = 1; i <= num; i++) {
            result += `${i} sheep...`
        }
        return result
    }
}

export function smash(words: string[]): string {
    return words.join(' ')
}










