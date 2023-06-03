
function interleave() {
    if (arguments.length === 0) {
        return []
    }
    let result = []
    let maxLength = [...arguments].sort((b, a) => a.length - b.length)[0]
        .length
    for (let i = 0; i < maxLength; i++) {
        for (let j = 0; j < arguments.length; j++) {
            result.push(arguments[j][i] === undefined ? null : arguments[j][i])
        }
    }
    return result
}

function incrementString(str) {
    let num = str.match(/\d+/) === null ? 0 : str.match(/\d+/)[0];
    const length = `${num}`.length

    num = (parseInt(num) + 1).toString();

    while (num.length < length) {
        num = "0" + num;
    }

    return str.replace(/[0-9]/g, '').concat(num);
}

function domainName(url) {
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0].split('.')[0]
}

function moveZeros(arr) {
    const arrZero = arr.filter(item => item === 0)
    return [...arr.filter(item => item !== 0), ...arrZero]
}

function pigIt(str){
    return str.split(' ').map(item => {
        if(/[A-Za-z]/g.test(item)){
            return item.slice(1) + item[0] + 'ay'
        }
        return item
    }).join(' ')
}

const obj = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
}

const colorFormatItem =(value)=>{
    value = value > 255 ? 255 : value
    value = value < 0 ? 0 : value
    const whole = Math.floor(value / 16)
    const decimal = value % 16
    return `${obj[whole] || whole}${obj[decimal] ||decimal}`
}

function rgb(r, g, b){
    const rValue = colorFormatItem(r)
    const gValue = colorFormatItem(g)
    const bValue = colorFormatItem(b)
    return `${rValue}${gValue}${bValue}`
}

let arr_en = {'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q', 'e': 'r', 'f': 's', 'g': 't', 'h': 'u', 'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y', 'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c', 'q': 'd', 'r': 'e', 's': 'f', 't': 'g', 'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k', 'y': 'l', 'z': 'm'};
function rot13(message){
    return message.replace(/[A-Za-z]/g, (letter)=> letter === letter.toLowerCase() ? arr_en[letter] : arr_en[letter.toLowerCase()].toUpperCase())
}
// console.log(rot13('test'))
// console.log(rot13('Grfg'))

function zero(operator) {
    if(operator)return Math.floor(eval(0 + operator))
    else return 0
}
function one(operator) {
    if(operator)return Math.floor(eval(1 + operator))
    else return 1
}
function two(operator) {
    if(operator)return Math.floor(eval(2 + operator))
    else return 2
}
function three(operator) {
    if(!!operator)return Math.floor(eval(3 + operator))
    return 3
}
function four(operator) {
    if(!!operator)return Math.floor(eval(4 + operator))
    else return 4
}
function five(operator) {
    if(!!operator)return Math.floor(eval(5 + operator))
    else return 5
}
function six(operator) {
    if(!!operator)return Math.floor(eval(6 + operator))
    else return 6
}
function seven(operator ) {
    if(!!operator)return Math.floor(eval(7 + operator))
    else return 7
}
function eight(operator ) {
    if(!!operator)return Math.floor(eval(8 + operator))
    else return 8
}
function nine(operator) {
    if(!!operator)return Math.floor(eval(9 + operator))
    else return 9
}

const plus = (number) => ` + ${number}`
const minus = (number) => ` - ${number}`
const times = (number) => ` * ${number}`
const dividedBy = (number) => ` / ${number}`

// console.log(three(plus(five())))
// console.log(five(minus(two())))
// console.log(three(times(five())))
// console.log(eight(dividedBy(two())))