export class Challenge {
    static solution(number: number) {
        let result = []
        for (let i = 0; i < number; i++) {
            (i % 3 === 0 && result.push(i)) || (i % 5 === 0 && result.push(i))
        }
        return result.reduce((a, b) => a + b, 0)
    }
}

// export const findOdd = (xs: number[]): number => {
//     const result = xs
//         .map((item) => xs.filter((i) => i === item))
//         .find((item) => item.length % 2 !== 0)
//     return result ? result[0] : 0
// }

export function spinWords(words: string): string {
    return words.split(' ')
        .map(item => item.length > 4 ? item
            .split('')
            .reverse()
            .join('') : item)
        .join(' ')
}

export const digitalRoot = (n: number): number => {
    return `${n}`.length === 1 ? n : digitalRoot(Number(`${n}`.split('').reduce((a, b) => a + +b, 0)))
};

export function arrayDiff(a: number[], b: number[]): number[] {
    const result = []
    for (let i = 0; i < a.length; i++) {
        // @ts-ignore
        const find = b.find((item) => item === a[i])
        find === undefined && result.push(a[i])
    }
    return result
}

export const likes = (names: string[]): string => {
    return names.length === 1
        ? `${names.join('')} likes this`
        : names.length === 2
            ? `${names.join(' and ')} like this`
            : names.length === 3
                ? `${names[0]}, ${names.slice(1).join(' and ')} like this`
                : names.length > 3
                    ? `${names.slice(0, 2).join(', ')} and ${
                        names.length - 2
                    } others like this`
                    : 'no one likes this'
}

export function findOutlier(integers: number[]): number {
    const evenArr = integers.filter((item) => item % 2 === 0)
    const oddArr = integers.filter((item) => item % 2 !== 0)
    return evenArr.length < oddArr.length ? evenArr[0] : oddArr[0]
}

export function duplicateEncode(word: string) {
    return word.toLowerCase().split('').map(letter => {
        if (word.toLowerCase().split('').filter(l => l === letter).length > 1) {
            return ')';
        }
        return '(';
    }).join('')
}

export function countBits(n: number): number {
    return n
        .toString(2)
        .split('')
        .reduce((sum, num) => sum + Number(num), 0)
}

export function duplicateCount(text: string): number {
    if (text === '') return 0
    else {
        // @ts-ignore
        const unique = Array.from(new Set(text.toLowerCase()))
        const obj: { [key in string]: number } = {}
        for (let i = 0; i < unique.length; i++) {
            let sum = 0
            obj[unique[i]] = sum
            for (let j = 0; j < text.length; j++) {
                if (unique[i] === text[j].toLowerCase()) {
                    sum++
                    obj[unique[i]] = sum
                }
            }
        }
        // @ts-ignore
        return Object.values(obj).filter((item) => Number(item) > 1).length
    }
}

export function order(words: string): string {
    return words
        .split(' ')
        .map((item) => item.replace(/([a-z])/gi, '') + item)
        .sort()
        .map((item) => item.slice(1))
        .join(' ')
}

export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    if (n <= 3) {
        return [a, b, c].slice(0, n);
    } else {
        const s = tribonacci([a, b, c], n - 1);
        return [...s, s[s.length - 1] + s[s.length - 2] + s[s.length - 3]];
    }
}

function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers
        .slice(3, 6)
        .join('')}-${numbers.slice(6).join('')}`
}

export function persistence(num: number): number {
    return `${num}`.length > 1
        ? 1 +
        persistence(
            Number(`${num}`.split('').map(item => +item).reduce((a, b) => a * b)),
        )
        : 0
}

export const isPangram = (phrase: string): boolean => {
    let result: string[] = []
    for (let str of phrase.replace(/[^A-Za-z]/g, '').split('').map(item => item.toLowerCase())) {
        // @ts-ignore
        if (!result.includes(str)) {
            result.push(str)
        }
    }
    return result.length >= 26
}

export function findUniq(arr: number[]): number | undefined {
    let obj: { [key in number]: number } = {}
    arr.forEach((item) => (obj[item] = (obj[item] || 0) + 1))
    for (let item in obj) {
        if (obj[item] === 1) {
            return +item
        }
    }
}

export function camelCase(str: string): string {
    return str
        .split(' ')
        .map(
            (item) =>
                item.substring(0, 1).toUpperCase() + item.substring(1),
        )
        .join('')
}

export function bouncingBall(h: number, bounce: number, window: number): number {
    if (h > 0 && (bounce > 0 && bounce < 1) && window < h) {
        return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
    } else {
        return -1;
    }
}

export const towerBuilder = (nFloors: number): string[] => {
    const result: string[] = []
    for (let i = 0; i < nFloors; i++) {
        result.push(
            // @ts-ignore
            ' '.repeat(nFloors - i - 1) +
            // @ts-ignore
            '*'.repeat(i * 2 + 1) +
            // @ts-ignore
            ' '.repeat(nFloors - i - 1),
        )
    }
    return result
}

export function grabscrab(anagram: string, dictionary: string[]): string[] {
    return dictionary.filter(
        (item) =>
            item.split('').sort().join('') === anagram.split('').sort().join(''),
    )
}

export function findMissingLetter(array: string[]): string {
    let string = array.join("");
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
            return String.fromCharCode(string.charCodeAt(i) + 1);
        }
    }
    return ''
}

export class G964 {
    public static digPow = (a: number, b: number) => {
        let string = a.toString()
        let len = string.length
        let result = 0
        for (let i = 0; i < len; i++) {
            let numberser = parseInt(string.charAt(i), 10)
            result += Math.pow(numberser, b + i)
        }
        let x = Math.pow(a, b)
        if (result === x) {
            return b
        } else if (result % a === 0) {
            return result / a
        } else {
            return -1
        }
    }
}

export function validBraces(braces: string): boolean {
    let tracer = []
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
            tracer.push(braces[i])
        } else {
            if (tracer.length === 0) return false
            let lastValue = tracer[tracer.length - 1]
            if ((braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '(')) {
                tracer.pop()
            } else {
                break;
            }
        }
    }
    return tracer.length === 0
}

export const high = (str: string): string => {
    const resArr = str.split(' ').map(
        (item) =>
            item
                .split('')
                .map((letter) => `${letter}`.charCodeAt(0) - 96)
                .reduce((a, b) => a + b, 0) +
            ' ' +
            item,
    )
    const max = Math.max(
        ...resArr.map(
            (item) =>
                +item
                    .split(' ')
                    .filter((item) => !!+item)
                    .join(''),
        ),
    )
    // @ts-ignore
    return resArr.find((item) => item.includes(`${max}`))!.split(' ')[1]
}

export function solution(number: number): string {
    let lookup = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1},
        roman = '', i;
    for (i in lookup) {
        while (number >= lookup[i]) {
            roman += i;
            number -= lookup[i];
        }
    }
    return roman;
}

export function narcissistic(value: number): boolean {
    const newValue = `${value}`.split('').map(item => Math.pow(+item, 3)).reduce((acc, el)=> acc + el, 0)
    console.log('newValue', newValue)
    return value === newValue
}

console.log(narcissistic(7))