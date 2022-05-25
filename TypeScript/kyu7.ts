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