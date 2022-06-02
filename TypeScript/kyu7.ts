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