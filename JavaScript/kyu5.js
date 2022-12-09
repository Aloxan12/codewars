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



function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
        return '0';
    } else {
        let k = 1024;
        let dm = decimals < 0 ? 0 : decimals;
        let sizes = ['байт', 'КБ', 'МБ', 'ГБ', 'ТБ'];
        let i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}

console.log(formatBytes(203194818));