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

let arr_en = {'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v', 'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q', 'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l', 'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g', 'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b', 'z': 'a'};
let arr_EN = {'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V', 'F': 'U', 'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q', 'K': 'P', 'L': 'O', 'M': 'N', 'N': 'M', 'O': 'L', 'P': 'K', 'Q': 'J', 'R': 'I', 'S': 'H', 'T': 'G', 'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C', 'Y': 'B', 'Z': 'A'};
function rot13(message){
    return message.replace(/[A-Za-z]/g, '1')
}

console.log(rot13('test'))