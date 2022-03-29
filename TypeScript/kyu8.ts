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