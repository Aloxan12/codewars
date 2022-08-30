export class Challenge {
    static solution(number: number) {
        let result = []
        for (let i = 0; i < number; i++) {
            (i % 3 === 0 && result.push(i)) || (i % 5 === 0 && result.push(i))
        }
        return result.reduce((a, b) => a + b, 0)
    }
}

export const findOdd = (xs: number[]): number => {
    const result = xs
        .map((item) => xs.filter((i) => i === item))
        .find((item) => item.length % 2 !== 0)
    return result ? result[0] : 0
}