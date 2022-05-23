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

export function sumMix(x: any[]): number {
    return x.reduce((a, b) => a + +b, 0)
}

export function rps(p1: string, p2: string): string {
    if (p1 === p2) {
        return 'Draw!'
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!'
    } else if (p1 === 'rock' && p2 === 'scissors') {
        return 'Player 1 won!'
    } else if (p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won!'
    } else {
        return 'Player 2 won!'
    }
}

export function stringToArray(s: string): string[] {
    return s.split(' ')
}

export function firstNonConsecutive(arr: number[]): null | number {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i + 1];
        }
    }
    return null;
}

export function doubleInteger(i: number): number {
    return i * 2
}

export function greet4(name: string, owner: string): string {
    return name !== owner ? 'Hello guest' : 'Hello boss';
}

export function rentalCarCost(d: number): number {
    let day = d >= 3 && d < 7 ? 20 : 0;
    let week = d >= 7 ? 50 : 0;
    return (d * 40) - day - week;
}

export function feast(beast: string, dish: string): boolean {
    const one = beast[0] + beast[beast.length - 1]
    const two = dish[0] + dish[dish.length - 1]
    return one === two
}

// export function setAlarm(employed: boolean, vacation: boolean) {
//     return employed && !vacation ? true : false
// }

export function setAlarm(employed: boolean, vacation: boolean) {
    return employed && !vacation
}

export function doubleChar(str: string): string {
    return str.split('').map(i => i + i).join('')
}

export function enough(cap: number, on: number, wait: number): number {
    const res = cap - on
    return res - wait > 0 ? 0 : -(res - wait)
}

export function oddCount(n: number) {
    return Math.floor(n / 2)
}

export function toAlternatingCase(s: string): string {
    return s.split('').map(i => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()).join('')
}

export {get_age};

function get_age(age: string): number {
    return parseInt(age)
}

function greetLanguage(language: string | null) {
    const obj = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    return obj[language] || obj.english
}

export function switchItUp(intNumber: number): string {
    return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][intNumber]
}

export function checkForFactor(base: number, factor: number) {
    return base % factor === 0
}

export function findDifference(a: [number, number, number], b: [number, number, number]): number {
    const result = (a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b))
    return result > 0 ? result : -result
}

export function twoSort(s: string[]): string {
    return s.sort()[0].split('').join('***')
}

export const multiply2 = (a: number, b: number) => a * b


export function howMuchILoveYou(petals: number): string {
    return [
        'not at all',
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
    ][petals % 6]
}


export function squareOrSquareRoot(array: number[]): number[] {
    return array.map(n => Math.sqrt(n) % 1 === 0 ? Math.sqrt(n) : Math.pow(n, 2));
}

export function well(x: string[]): string {
    const len = x.filter(i => i === 'good').length
    return len < 1 ? 'Fail!' : len < 3 ? 'Publish!' : 'I smell a series!'
}

export function index(array: number[], n: number): number {
    return Math.pow(array[n], n) || -1;
}

export function fixTheMeerkat(arr: string[]): string[] {
    return arr.reverse();
}

export function goals(laLigaGoals: number, copaDelReyGoals: number, championsLeagueGoals: number): number {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

export const testEven = (n: number): boolean => {
    return n % 2 === 0
}

export function move(pos: number, roll: number): number {
    return pos + roll * 2
}

export function getRealFloor(n: number): number {
    return n <= 0 ? n : n < 13 ? n - 1 : n - 2
}

export function shortLongShort(a: string, b: string) {
    return a.length > b.length ? b + a + b : a + b + a
}

export function isUpperCase(str: string) {
    return str === str.toUpperCase()
}

export function saleHotdogs(n: number): number {
    return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : n >= 10 ? 90 * n : 0;
}

export function between(a: number, b: number): number[] {
    let result: number[] = []
    for (let i = a; i <= b; i++) {
        result.push(i)
    }
    return result;
}

var a = "code";
var b = "wa.rs";
export var name = a + b;

export function sayHello(name: string): string {
    return `Hello, ${name}`
}

export const square = (n: number): number => {
    return Math.pow(n, 2)
}

export function helloOrWorld(name = ''): string {
    return `Hello, ${name ? name.split('')
        .map((w, i) => i === 0 ? w.toUpperCase() : w.toLowerCase())
        .join('') : 'World'}!`;
}

export function remove(s: string): string {
    return s[s.length - 1] === '!' ? s.slice(0, -1) : s
}

export function findMultiples(integer: number, limit: number): number[] {
    let result = []
    for (let i = integer; i <= limit; i++) {
        if (i % integer === 0) {
            result.push(i)
        }
    }
    return result
}

export function hexToDec(hexString: string): number {
    return parseInt(hexString, 16);
}

export class XOR {
    public static xor(a: boolean, b: boolean): boolean {
        return a !== b
    }
}

export function weatherInfo(temp: number): string {
    const c = (temp - 32) * (5 / 9)
    if (c < 0)
        return (Math.round(c * 1e5) / 1e5 + " is freezing temperature")
    else
        return (Math.round(c * 1e5) / 1e5 + " is above freezing temperature")
}

export function convertToCelsius(temperature: number): number {
    const celsius = Math.round(((temperature - 32) + (5 / 9)))
    return celsius
}

export function mouthSize(animal: string): string {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

export function warnTheSheep(queue: string[]): string {
    const index = queue.indexOf('wolf')
    return index === queue.length - 1 ? "Pls go away and stop eating my sheep"
        : `Oi! Sheep number ${queue.length - 1 - index}! You are about to be eaten by a wolf!`
}

export const addFive = (num: number): number => {
    return num + 5;
}

export function dutyFree(normPrice: number, discount: number, hol: number): number {
    return Math.floor(hol / normPrice / discount * 100)
}

export class Kata2 {
    public static buildString(...template: string[]): string {
        return `I like ${template.join(', ')}!`;
    }
}

export function apple(x: number | string): string {
    return Math.pow(+x, 2) > 1000
        ? 'It\'s hotter than the sun!!'
        : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

export function flip(dir: string, arr: number[]): number[] {
    return dir === 'R'
        ? arr.sort((a, b) => a > b ? 1 : -1)
        : arr.sort((a, b) => a > b ? -1 : 1);
}

export function getDrinkByProfession(profession: string) {
    const obj = {
        "jabroni": "Patron Tequila",
        "school counselor": "Anything with Alcohol",
        "programmer": "Hipster Craft Beer",
        "bike gang member": "Moonshine",
        "politician": "Your tax dollars",
        "rapper": "Cristal",
    }
    return obj[profession.toLowerCase()] || 'Beer'
}

export function main(verb: string, noun: string): string {
    return verb + noun
}

export function stringToNumber2(str: string): number {
    return +str
}

export function updateLight(current: string): string {
    return current === 'green'
        ? 'yellow'
        : current === 'yellow'
            ? 'red'
            : 'green'
}

export function correct(s: string): string {
    return s
        .replace(/0/g, 'O')
        .replace(/5/g, 'S')
        .replace(/1/g, 'I')
}

export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

export function hoopCount(n: number): string {
    return n >= 10
        ? "Great, now move on to tricks"
        : "Keep at it until you get it"
}

export function expressionsMatter(a: number, b: number, c: number): number {
    return Math.max(a + b + c, (a + b) * c, a * (b + c), a * b * c);
}

export function cockroachSpeed(s: number): number {
    return Math.floor(s / 0.036);
}

export function isDivideBy(number: number, a: number, b: number): boolean {
    return number / a % 1 === 0 && number / b % 1 === 0
}

// Sum Numbers
function sum(numbers) {
    "use strict";
    return numbers.reduce((a, b) => a + b, 0)
}

export function plural(n: number): boolean {
    return n !== 1
}

// @ts-ignore
export const arr = (n: number = 0): number[] => Array.from({length: n}, (_, i) => i);

export function gooseFilter(birds: string[]): string[] {
    const geese = {"African": 1, "Roman Tufted": 2, "Toulouse": 3, "Pilgrim": 4, "Steinbacher": 5};
    return birds.filter(x => !geese[x]);
}

export function findNeedle(haystack: any[]): string {
    return `found the needle at position ${haystack.indexOf('needle')}`
}

export const distinct = (a: number[]): number[] => {
    // @ts-ignore
    return [...new Set(a)]
}

export function maps(x: number[]): number[]{
    return x.map(i=>i*2);
}