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

function highestRank(arr) {
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

function upArray(arr) {
    if (arr.some(e => e > 10 || e < 0) || !arr.length) return null;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === arr.length - 1) {
            if (arr[i] === 9) {
                arr[i] = 0;
            } else {
                arr[i] = arr[i] + 1;
            }
        }
        if (arr[i] === 0 || arr[i] === 10) {
            arr[i] = 0;
            arr[i - 1] = arr[i - 1] + 1;
        }
        if (arr[i - 1] <= 9) break;
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

//регулярка
// function solution(string) {
//    return str.replace(/([A-Z])/g, ' $1')
// }


function count(string) {
    if (string === '') {
        return {}
    } else {
        const unique = Array.from(new Set(string))
        const obj = {}
        for (let i = 0; i < unique.length; i++) {
            let sum = 0
            obj[unique[i]] = sum
            for (let j = 0; j < string.length; j++) {
                if (unique[i] === string[j]) {
                    sum++
                    obj[unique[i]] = sum
                }
            }
        }
        return obj
    }
}

function decipherThis(str) {
    const result = str
        .split(' ')
        .map((item) =>
            item
                .replace(/([a-z])/, ' $1')
                .split(' ')
                .map((item, i) =>
                    i === 0
                        ? String.fromCharCode(+item)
                        : item.length <= 1
                            ? item
                            : item.replace(/(\S)(\S*)(\S)/g, '$3$2$1'),
                )
                .join(''),
        )
        .join(' ')

    return result
}

function abbreviate(str) {
    return str
        .replace(/([,])/g, ' , ')
        .replace(/([-])/g, ' - ')
        .split(' ')
        .map((item) =>
            item.length >= 4
                ? item[0] + item.slice(1, -1).length + item.slice(-1)
                : item,
        )
        .join(' ')
        .replace(/ , /g, ',')
        .replace(/ - /g, '-')
}

function expandedForm(num) {
    const result = num
        .toString()
        .split('')
        .reverse()
        .map((item, i, arr) => {
            if (+item === 0) {
                return
            } else if (i === arr.length - 1) {
                return `${+item * Math.pow(10, arr.length - 1)}`
            } else {
                return `${+item * Math.pow(10, i)}`
            }
        })
        .reverse()
        .filter((item) => item)
        .join(' + ')
    return result
}

function duplicateEncode(word) {
    const lower = word.toLowerCase()

    let result = []
    for (let i = 0; i < lower.length; i++) {
        result[lower[i]] = 0
        for (let j = 0; j < lower.length; j++) {
            if (lower[i] === lower[j]) {
                result[lower[i]]++
            }
        }
    }
    return lower
        .split('')
        .map((item, i) => (result[item] > 1 ? ')' : '('))
        .join('')
}

var countBits = function (n) {
    const result = n
        .toString(2)
        .split('')
        .reduce((sum, num) => sum + Number(num), 0)
    return result
}

function likes(names) {
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

function duplicateCount(text) {
    if (text === '') {
        return 0
    } else {
        const unique = Array.from(new Set(text.toLowerCase()))
        const obj = {}
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
        return Object.values(obj).filter((item) => Number(item) > 1).length
    }
}

function balance(left, right) {
    const leftResult = left
        .split('')
        .map((item) => (item === '!' ? 2 : 3))
        .reduce((a, b) => a + b, 0)
    const rightResult = right
        .split('')
        .map((item) => (item === '!' ? 2 : 3))
        .reduce((a, b) => a + b, 0)
    return leftResult > rightResult
        ? 'Left'
        : leftResult < rightResult
            ? 'Right'
            : leftResult === rightResult && 'Balance'
}

function letterCount(text) {
    const unique = Array.from(new Set(text.toLowerCase()))
    const obj = {}
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
    return obj
}

function evilTwin(obj) {
    const result = Object.create(obj)
    result.hasGoatee = () => true
    return result
}

const uniqueInOrder = (iterable) => {
    const result = String(iterable)
        .replace(/([,])/g, '')
        .split('')
        .filter((item, i, arr) => arr[i] !== arr[i + 1] && item)
    return typeof iterable[0] === 'string' ? result : result.map((item) => +item)
}

function persistence(num) {
    return `${num}`.length > 1
        ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * b))
        : 0;
}

function order(words) {
    return words
        .split(' ')
        .map((item) => item.replace(/([a-z])/gi, '') + item)
        .sort()
        .map((item) => item.slice(1))
        .join(' ')
}

function findOutlier(integers) {
    const evenArr = integers.filter((item) => item % 2 === 0)
    const oddArr = integers.filter((item) => item % 2 !== 0)

    return evenArr.length < oddArr.length ? evenArr[0] : oddArr[0]
}

function arrayDiff(a, b) {
    const result = []
    for (let i = 0; i < a.length; i++) {
        const find = b.find((item) => item === a[i])
        find === undefined && result.push(a[i])
    }
    return result
}

function spinWords(string) {
    return string.split(' ')
        .map(item => item.length > 4 ? item
            .split('')
            .reverse()
            .join('') : item)
        .join(' ')
}

function digital_root(n) {
    if (n < 10) {
        return n
    } else {
        const result = String(n)
            .split('')
            .reduce((a, b) => a + +b, 0)
        return digital_root(result)
    }
}

function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers
        .slice(3, 6)
        .join('')}-${numbers.slice(6).join('')}`
}

function solution(number) {
    let result = []
    for (let i = 0; i < number; i++) {
        ;(i % 3 === 0 && result.push(i)) || (i % 5 === 0 && result.push(i))
    }
    return result.reduce((a, b) => a + b, 0)
}

function decodeMorse(morseCode) {
    const alphabet = {
        '.-': 'a',     '-...': 'b',   '-.-.':'c',  '-..':'d',
         '.': 'e',      '..-.': 'f',   '--.':'g',   '....':'h',
         '..': 'i',     '.---': 'j',   '-.-':'k',   '.-..':'l',
         '--': 'm',     '-.': 'n',     '---':'o',   '.--.':'p',
         '--.-': 'q',   '.-.': 'r',    '...':'s',   '-':'t',
         '..-': 'u',    '...-': 'v',   '.--':'w',   '-..-':'x',
         '-.--': 'y',   '--..': 'z',  '/': ' ',
         '.----': '1',  '..---': '2',  '...--':'3',  '....-':'4',
         '.....': '5',  '-....': '6',  '--...':'7',  '---..':'8',
         '----.': '9',  '-----': '0'
    }

    return morseCode.trim().replace(/···−−−···/g,'SOS   ').split('   ').map(word => word === 'SOS' ? 'SOS' : word.split(' ').map(letter => alphabet[letter]).join('').toUpperCase()).join(' ')
}

const arr = ['ban', 'ora', 'grepf', 'ban', 'ban', 'ora']

const mySuperSort =(arr)=>{
    const obj = arr.reduce((acc,el)=> {
        acc[el] = (acc[el] || 0) + 1
        return acc
    },{})

    const newArr = Object.entries(obj).sort((a,b)=> a[1] < b[1] ? 1 : -1).map((item) => item[0] )
    return newArr
}