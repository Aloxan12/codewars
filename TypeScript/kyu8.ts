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