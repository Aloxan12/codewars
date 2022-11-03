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

// setTimeout(()=>{
//     console.log('set')
// },0)
// console.log('log1')
// Promise.resolve('promise').then(r=> console.log(r))
// console.log('log2')
//
// function User(){}
// User.prototype = {admin: false}
// let user = new User()
// User.prototype = {admin: true}
// console.log(user.admin)
console.log(typeof 1 === "number")

