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
    return array.length === 0 ? 0 : array.reduce((a, b)=> a + b,0) / array.length;
}

export function greet3(name) {
    if(name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}