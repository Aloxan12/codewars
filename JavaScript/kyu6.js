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

function highestRank(arr){
    const sortArr = arr
        .map((item) => arr.filter((i) => i === item))
        .sort((a, b) => (a.length < b.length ? 1 : -1))

    const array = Array.from(new Set(sortArr)).slice(0, 2)
    const one = array[0]
    const two = array[1]
    const result =
        one.length === two.length ? Math.max(...one, ...two) : one[0]
    return result
}

function alphabetPosition(text) {
    return text
        .replace(/[^a-zA-ZА-Яа-яЁё]/gi, '')
        .toLowerCase()
        .split('')
        .map((item) => item.charCodeAt(0) - 96)
        .join(' ')
}

function getOrder(input) {
    const result = input
        .replace(/burger/gi, '1burger ')
        .replace(/milkshake/gi, '7milkshake ')
        .replace(/fries/gi, '2fries ')
        .replace(/chicken/gi, '3chicken ')
        .replace(/pizza/gi, '4pizza ')
        .replace(/sandwich/gi, '5sandwich ')
        .replace(/onionrings/gi, '6onionrings ')
        .replace(/coke/gi, '8coke ')

    return result
        .split(' ')
        .sort()
        .map((item) => item && item[1].toUpperCase() + item.slice(2))
        .join(' ')
        .slice(1)
}

function upArray(arr){
    if (arr.some(e=>e>10||e<0)||!arr.length) return null;
    for (let i=arr.length-1; i>=0; i--) {
        if (i===arr.length-1) {
            if (arr[i] === 9) {
                arr[i] = 0;
            } else {
                arr[i] = arr[i]+1;
            }
        }
        if (arr[i] === 0 || arr[i]===10) {
            arr[i] = 0;
            arr[i-1] = arr[i-1]+1;
        }
        if (arr[i-1] <= 9) break;
    }
    if (arr[0] === 0) {
        arr.unshift(1);
    }
    return arr;
}

// function upArray(arr){ //не работает с длинными числами
//       let result = 0
//       const resultReturn = arr.find((item) => item <= -1 || item > 9)
//       if (resultReturn || arr.length === 0) {
//         return null
//       } else {
//         result = Number(+arr.join('') + 1)
//         return result
//           .toString()
//           .split('')
//           .map((item) => Number(item))
//       }
//     }

function solution(string) {
    return string
        .split('')
        .map((item) => (item === item.toUpperCase() ? ' ' + item : item))
        .join('')
}