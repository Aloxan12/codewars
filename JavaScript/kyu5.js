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
    const whole = value / 16
    const decimal = value % 16
    return [obj[whole] || whole, obj[whole] ||decimal]
}

function rgb(r, g, b){
    if(r >= 255 && g >= 255 && b >= 255) return 'FFFFFF'
    if(r <= 0 && g <= 0 && b <= 0) return '000000'
    const rValue = colorFormatItem(r)
    const gValue = colorFormatItem(g)
    const bValue = colorFormatItem(b)
    return `${rValue}${gValue}${bValue}`
}