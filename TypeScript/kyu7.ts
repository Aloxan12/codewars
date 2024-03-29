export class Kata {
    static getCount(str: string): number {
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
}

export class Kata1 {
    static squareDigits(num: number): number {
        return +num.toString()
            .split('')
            .map((item) => Math.pow(+item, 2))
            .join('')
    }
}

export class Kata3 {
    static disemvowel(str: string): string {
        return str.replace(/[aeiou]/gi, '');
    }
}

export class Kata4 {
    static highAndLow(numbers: string): string {
        const arr = numbers.split(' ').map(i => +i)
        return `${Math.max(...arr)} ${Math.min(...arr)}`
    }
}

export function descendingOrder(n: number): number {
    return +`${n}`.split('').sort().reverse().join('')
}

export function accum(s: string): string {
    return s.split('')
        .map((item, index) => item.toUpperCase() + item.toLowerCase()) // repeat(index)
        .join('-')
}

export class Challenge {
    static getMiddle(s: string) {
        const arr = s.split("");
        while (arr.length > 2) {
            arr.pop();
            arr.shift();
        }
        return arr.join("");
    }
}

export default function isSquare(n: number): boolean {
    return Math.sqrt(n) % 1 === 0
};

export function findShort(s: string): number {
    return Math.min(...s.split(' ').map(i => i.length))
}

// String.prototype.toJadenCase = function () {
const toJadenCase = function () {
    return this.split(' ').map(i => i[0].toUpperCase() + i.slice(1)).join(' ')
};

export class Kata5 {
    static dnaStrand(dna: string) {
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
}

function maskify(cc: string) {
    return cc.length <= 4 ? cc : cc.slice(0, -4).split('').map(i => '#').join('') + cc.slice(-4)
}

function sumTwoSmallestNumbers(numbers: number[]) {
    return numbers
        .sort((a, b) => (a > b ? 1 : -1))
        .slice(0, 2)
        .reduce((a, b) => a + b, 0)
}

function getSum(a: number, b: number) {
    if (a === b) {
        return a
    } else {
        const smallNum = Math.min(a, b)
        const bigNum = Math.max(a, b)
        return ((bigNum - smallNum + 1) * (bigNum + smallNum)) / 2
    }
}

function longest(s1: string, s2: string) {
    const str = s1 + s2
    //return [...new Set(str.split(''))].sort().join('')
    const arr = str
        .split('')
        .filter((val, ind, arr) => arr.indexOf(val) === ind)
        .sort();
    return arr.join('')
}

function friend(friends: string[]) {
    return friends.filter(i => i.length === 4)
}

export class G964 {

    public static nbYear = (startPopulation, growthPercentage, newBorns, populationToReach) => {
        let currentPopulation = startPopulation;
        let years = 0;

        while (currentPopulation < populationToReach) {
            currentPopulation += Math.floor(currentPopulation * (growthPercentage / 100)) + newBorns;
            years += 1;
        }

        return years;
    }
}

export function isIsogram(str: string): boolean {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; ++i) {
        for (let j = i + 1; j < str.length; ++j) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

export function xo(str: string) {
    return str.split('').filter(i => i.toLowerCase() === 'x').length ===
        str.split('').filter(i => i.toLowerCase() === 'o').length
}

export class Kata6 {
    static validatePin(pin: string): boolean | string[] {
        return pin.length < 4 || pin.length === 5 || pin.length > 6
            ? false
            : pin
                .replace(/[a-z]/gi, ' false ')
                .replace(/[^0-9]/, ' false ')
                .split(' ') // .find((item) => item === 'false') === undefined
    }
}

export function isTriangle(a: number, b: number, c: number): boolean {
    return (a + b > c) && (b + c > a) && (c + a > b)
}

export function rowSumOddNumbers(n: number): number {
    return Math.pow(n, 3)
}

export function number(busStops: [number, number][]): number {
    return busStops.reduce((peoplesInBus, currentBusStop) => peoplesInBus + currentBusStop[0] - currentBusStop[1], 0);
}

export function oddOrEven(array: number[]) {
    return array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd'
}

export function solution(str: string, ending: string): boolean {
    return ending === '' ? true : str.slice(-ending.length) === ending
}

export function reverseWords(str: string): string {
    return str.split(' ').map(i => i.split('').reverse().join('')).join(' ');
}

export function dontGiveMeFive(start: number, end: number): number {
    let count = 0
    for (let i = start; i <= end; i++) {
        if (!/5/.test(`${i}`)) {
            count++
        }
    }
    return count
}

export function breakChocolate(n: number, m: number): number {
    return ((n * m) - 1) > 1 ? ((n * m) - 1) : 0
}

export function divisors(n: number) {
    let output = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            output++;
        }
    }
    return output;
}

export function smallEnough(a: number[], limit: number): boolean {
    return Math.max(...a) <= limit
}

export function solution2(nums: number[]): number[] {
    return nums.sort((a, b) => a - b)
}

export const minValue = (values: number[]): number => {
    //return +[...new Set(values)].sort((a, b) => a - b).join('');
    return +values
        .filter((val, ind, arr) => arr.indexOf(val) === ind)
        .sort((a, b) => a - b)
        .join('');
};

export function solve(s: string) {
    let lowerNum = 0;
    let upperNum = 0;

    for (let i = 0; i <= s.length - 1; i += 1) {

        if (s[i] === s[i].toLowerCase()) {
            lowerNum += 1;
        } else {
            upperNum += 1;
        }
    }

    return lowerNum >= upperNum ? s.toLowerCase() : s.toUpperCase();
}

export class G9644 {

    public static mxdiflg = (a1, a2) => {
        let array = [];
        if (a1.length && a2.length) {
            a1.forEach(str1 => a2.forEach(str2 => array.push(Math.abs(str1.length - str2.length))))
            return Math.max.apply(null, array);
        }
        return -1;
    }
}

export function removeDuplicateWords(s: string): string {
    //return [...new Set(s.split(' '))].join(' ')
    return (s.split(' ').filter((val, ind, arr) => arr.indexOf(val) === ind)).join(' ')
}

export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)
}

export function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1)
}

export function isSortedAndHow(array: number[]): string {
    const sortedArray = array.slice().sort((a, b) => a - b);

    if (JSON.stringify(sortedArray) === JSON.stringify(array)) {
        return 'yes, ascending';
    }
    if (JSON.stringify(sortedArray.reverse()) === JSON.stringify(array)) {
        return 'yes, descending';
    }

    return 'no';
}

export function capitalize(s: string) {
    const even = s.split('').map((item, i) => i % 2 === 0 ? item.toUpperCase() : item).join('')
    const odd = s.split('').map((item, i) => i % 2 === 0 ? item : item.toUpperCase()).join('')
    return [even, odd]
}

export function flattenAndSort(inputArray: number[][]): number[] {
    return inputArray.reduce((acc, curr) => [...acc, ...curr], []).sort((a, b) => a - b);
}

export function twoOldestAges(ages: number[]): number[] {
    return ages.sort((a, b) => b - a).slice(0, 2).reverse();
}

export function maxMultiple(divisor: number, bound: number): number {
    return bound - bound % divisor;
}

export function checkExam(array1: string[], array2: string[]): number {
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

export const getEvenNumbers = (numbersArray: number[]): number[] => {
    return numbersArray.filter((item) => item % 2 === 0)
}

export function adjacentElementsProduct(arr: number[]): number {
    return Math.max(...arr.slice(1).map((x, i) => x * arr[i]))
}

export function bump(x: string): string {
    return x.split('').filter(i => i === 'n').length > 15 ? "Car Dead" : "Woohoo!"
}

export function sumCubes(n: number): number {
    return [...Array(n)]
        .map((i, index) => Math.pow(index + 1, 3))
        .reduce((a, b) => a + b, 0)
}

export function countRedBeads(n: number): number {
    return n < 2 ? 0 : (n * 2) - 2;
}

export function generateShape(int: number): string {
    // @ts-ignore
    return int < 2 ? "+".repeat(int) : "+".repeat(int) + `\n${"+".repeat(int)}`.repeat(int - 1)
}

export class G964_2 {
    public static movie(card: number, ticket: number, perc: number): number {
        let i: number = 0
        while (Math.ceil(card) >= ticket * i) {
            card += ticket * perc ** i
            i++
        }
        return i - 1
    };
}

const factorial2 = (n: number) => (n < 0 ? null : (n === 0 ? 1 : n * factorial(--n)))

export const strongNumber = (num: number): string => {
    return [...String(num).split('')].map(Number).reduce((total, digit) => total + factorial2(digit), 0) === num
        ? 'STRONG!!!!'
        : 'Not Strong !!'
};

export function containAllRots(str: string, arr: string[]): boolean {
    for (let i = 0; i < str.length; i++) {
        if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
            return false
        }
    }
    return true
}

// export function add(num1: number, num2: number): number {
//     if (num1 < num2) return add(num2, num1);
//     // @ts-ignore
//     let a = num1.toString(), b = num2.toString().padStart(a.length, '0');
//     return +[...a].reduce((str, c, i) => str + (+c + +b[i]), '');
// }

export class Kata7 {
    static findLongest(array: number[]): number {
        // @ts-ignore
        return array.find(item => `${item}`.length === Math.max(...array.map(i => `${i}`.length)))!
    }
}

export class G964_3 {
    public static printerError(s: string): string {
        let r = s.replace(/[a-m]/g, '');
        return r.length + '/' + s.length;
    }
}

export class G964_4 {
    public static nbDig(n: number, d: number): number {
        let res = 0;
        for (var g = 0; g <= n; g++) {
            var square = (g * g + "").split("");
            square.forEach((s) => +s == +d ? res++ : null)
        }
        return res;
    }
}

export function angle(n: number): number {
    return (n - 2) * 180;
}

export function rowWeights(arr: number[]) {
    return arr.reduce((a, b, i) => (a[i % 2] += b, a), [0, 0])
}

export function isPowerOfTwo(n: number): boolean {
    // @ts-ignore
    return Number.isInteger(Math.log2(n))
}

export function predictAge(age1: number, age2: number, age3: number, age4: number, age5: number, age6: number, age7: number, age8: number): number {
    return Math.floor(Math.sqrt([age1, age2, age3, age4, age5, age6, age7, age8].map(i => i * i).reduce((a, b) => a + b, 0)) / 2)
}

export function sumTriangularNumbers(n: number): number {
    let sum = 0, total = 0;
    for (let i = 0; i <= n; i++) {
        sum += i * 1
        total += sum
    }
    return total
}

export function SeriesSum(n: number): string {
    let result = 0;
    let reverage = 1;
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result = 1;
        } else {
            reverage += 3;
            result = result + (1 / reverage);
        }
    }
    return result.toFixed(2);
}

export function vowelIndices(word: string): number[] {
    return word
        .split('')
        .map((item, index) => (item.toLowerCase() === 'a' || item.toLowerCase() === 'e' || item.toLowerCase() === 'u' || item.toLowerCase() === 'o' || item.toLowerCase() === 'i' || item.toLowerCase() === 'u' || item.toLowerCase() === 'o' || item.toLowerCase() === 'y' ? index + 1 : -1))
        .filter((item) => item >= 0)
}

export function noOdds(values: number[]): number[] {
    return values.filter(item => item % 2 === 0)
}

export class G964_8 {
    public static gps = (s, x) => {
        if (x.length <= 1) {
            return 0;
        }
        let output = [];
        for (let i = 0; i < x.length - 1; i++) {
            output.push((x[i + 1] - x[i]) * 3600 / s);
        }
        return Math.max(...output);
    }
}

export function evenNumbers(array: number[], n: number): number[] {
    return array.filter(item => item % 2 === 0).reverse().slice(0, n).reverse()
}

export function averages(numbers: number[] | null): number[] {
    return numbers ? numbers
            .map((number, index, array) => (number + array[index + 1]) / 2)
            .slice(0, -1)
        : []
}

export function evaporator(content: number, evapPerDay: number, threshold: number): number {
    let result = 0;
    let percentage = 100;
    while (percentage > threshold) {
        percentage = percentage - percentage * (evapPerDay / 100);
        result += 1;
    }
    return result;
}

export function repeater(str: string, n: number): string {
    // @ts-ignore
    return str.repeat(n);
}

export function vertMirror(string: string) {
    return string.split('\n').map(item => item.split('').reverse().join('')).join('\n')
}

export function horMirror(string: string) {
    return string.split('\n').reverse().join('\n')
}

export function oper(fct: (s: string) => string, s: string) {
    return fct(s)
}

export function addLetters(...letters: string[]) {
    if (letters.length == 0) {
        return 'z';
    }
    let sum = letters.reduce(
        (acc, val) => {
            let newAcc = acc + val.charCodeAt(0) - 96;
            return newAcc > 26 ? newAcc - 26 : newAcc;
        },
        0
    );
    return String.fromCharCode(sum + 96);
}

export function inviteMoreWomen(L: number[]): boolean {
    const m = L.filter(item => item > 0).reduce((a, b) => a + b, 0)
    const w = L.filter(item => item < 0).reduce((a, b) => a + b, 0)
    return m + w > 0
}

export function automorphic(n: number): string {
    return Number(`${Math.pow(n, 2)}`.split('').slice(-`${n}`.length).join('')) === n
        ? 'Automorphic'
        : 'Not!!'
}

export const calc = (str: string): number => {
    return [...str.split('')].map(x => x.charCodeAt(0)).join('').split('').filter(x => x === '7').length * 6
}

export class Kata_1 {
    static isNice(arr: number[]) {
        if (arr.length <= 0) {
            return false;
        }
        return arr.every(item => {
            return arr.some(current => {
                return item === current + 1 || item === current - 1;
            });
        });
    }
}

export function sumDigits(n: number): number {
    return `${Math.abs(n)}`.split('').reduce((a, b) => a + +b, 0)
}

export class G964_5 {
    public static partlist(arr: string[]): string[][] {
        return arr.map((item, index, arr) => {
            return [arr.slice(0, index).join(' '), arr.slice(index).join(' ')]
        }).slice(1)
    }
}

function diffBig2(arr: number[]): number {
    const result = arr.reduce((o, v) => {
        // @ts-ignore
        let index = o.findIndex(el => el > v);
        return ((index > -1) ? o.splice(index, 0, v) : o.push(v)), o;
    }, []).reverse();
    return result.slice(0, 2).reduce((acc, el) => acc - el)
}

function diffBig2_02(arr: number[]): number {
    return arr.sort((a, b) => b - a).slice(0, 2).reduce((acc, el) => acc - el)
}

export class G964_6 {
    public static longest = (s1, s2) => {
        const str = s1 + s2
        const arr = str
            .split('')
            .filter((val, ind, arr) => arr.indexOf(val) === ind)
            .sort();
        return arr.join('')
    }
}

function filter_list(l: (string | number | boolean)[]) {
    return l.filter(item => typeof item === 'number')
}

function binaryArrayToNumber_for_4_length(arr: number[]): number {
    return arr
        .map((item, index) => {
            switch (index) {
                case 0: {
                    return item * 8
                }
                case 1: {
                    return item * 4
                }
                case 2: {
                    return item * 2
                }
                case 3: {
                    return item
                }
                default: {
                    return 0
                }
            }
        })
        .reduce((acc, ell) => acc + ell, 0)
}


export class Warrior {
    private name: string
    public health: number

    constructor(name: string) {
        this.name = name
        this.health = 100
    }

    strike(enemy: Warrior, swings: number) {
        enemy.health = Math.max(0, enemy.health - swings * 10)
    }
}

export class Kata_19 {
    public static head = a => a[0];
    public static tail = a => a.slice(1);
    public static init = a => a.slice(0, -1);
    public static last = a => a[a.length - 1];
}

export function tidyNumber(num: number) {
    let s = '' + num;
    for (let i = 1; i < s.length; i++) {
        if (s[i] < s[i - 1]) {
            return false;
        }
    }
    return true;
}

export function bigToSmall(arr: number[][]): string {
    return arr.reduce((acc, el) => [...acc, ...el], []).sort((a, b) => b - a).join('>')
}

export function finalGrade(exam: number, projects: number): number {
    return exam > 90 || projects > 10 ? 100 : exam > 75 && projects > 4 ? 90 : exam > 50 && projects > 1 ? 75 : 0
}

export function number_2(array: string[]): string[] {
    return array.map((item, index) => `${index + 1}: ${item}`)
}

const MORSE_CODE = { // Библиотека
    'a': 'b'
}

export function decodeMorse(morseCode: string): string {
    return morseCode.trim().split('   ').map(word => word.split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ')
}

function findNextSquare(sq: number) {
    return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;
}

function removeSmallest(numbers: number[]) {
    const min = Math.min(...numbers)
    // @ts-ignore
    const minIndex = numbers.findIndex(item => item === min)
    return numbers.filter((item, index) => index !== minIndex);
}

function helloWorld() {
    return String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);
}

function minMax(arr:number[]){
    return [Math.min(...arr),Math.max(...arr)];
}

function dominator(arr: number[]): number{
    const repeats:{[key: number]: number} = {};
    for (let x = 0; x < arr.length; x++) {
        repeats[arr[x]] = repeats[arr[x]] ? repeats[arr[x]] + 1: 1;
        if (repeats[arr[x]] > arr.length / 2) return arr[x];
    }

    return -1;
}
// console.log(dominator([3,4,3,2,3,1,3,3])) // 3
// console.log(dominator([1,2,3,4,5])) // -1