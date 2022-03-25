function sumDigPow(a, b) {
    const result = []
    for (let i = a; i <= b; i++) {
        const num = i.toString().split('')
        if (
            i ===
            num.reduce((acc, item, index) => {
                return acc + Number(item) ** (index + 1)
            }, 0)
        ) {
            result.push(i)
        }
    }
    return result
}

function solve(s) {
    const result = s
        .split('')
        .map((item) =>
            item === 'a' ||
            item === 'e' ||
            item === 'i' ||
            item === 'o' ||
            item === 'u'
                ? '/'
                : item,
        )
        .join('')
        .split('/')
        .map((item) => item.split('').map((item) => item.charCodeAt(0) - 96))
        .map((item) =>
            item.length > 1
                ? item.reduce((a, b) => a + b)
                : Number(item.join('')),
        )
    return Math.max(...result)
}

function findOdd(A) {
    const result = A
        .map((item) => A.filter((i) => i === item))
        .find((item) => item.length % 2 !== 0)

    return result ? result[0] : 0
}

function encode(string) {
    return string
        .split('')
        .map((item) => {
            return item === 'a'
                ? '1'
                : item === 'e'
                    ? '2'
                    : item === 'i'
                        ? '3'
                        : item === 'o'
                            ? '4'
                            : item === 'u'
                                ? '5'
                                : item
        })
        .join('')
}

function decode(string) {
    return string
        .split('')
        .map((item) => {
            return item === '1'
                ? 'a'
                : item === '2'
                    ? 'e'
                    : item === '3'
                        ? 'i'
                        : item === '4'
                            ? 'o'
                            : item === '5'
                                ? 'u'
                                : item
        })
        .join('')
}