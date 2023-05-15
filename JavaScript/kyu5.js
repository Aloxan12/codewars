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

function pigIt_2(str){
    return str.replace(/\w+/g, (word)=> word.slice(1) + word[0] + 'ay')
}

console.log(pigIt_2('Pig latin is cool !'))