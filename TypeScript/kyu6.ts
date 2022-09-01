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