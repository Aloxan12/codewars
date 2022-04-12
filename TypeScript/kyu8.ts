export function numberToString(num: number): string {
    return String(num)
}

export const summation = (num:number)=> {
    let result: number = 0
    for(let i = 0; i<=num; i++){
        result +=i
    }
    return result
}

export function simpleMultiplication(num: number): number{
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