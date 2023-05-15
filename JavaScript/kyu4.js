const customEval = (value)=>{
    const regex = /(?<first>[-]?[\d\?]*)(?<symbol>[*\-\+])(?<second>[-]?[\d\?]*)/;
    const matches = value.match(regex);
    if(matches && matches.groups){
        const first = matches.groups.first;
        const symbol = matches.groups.symbol;
        const second = matches.groups.second;
        if(first.length !== 1 && first[0] === '0') return null
        switch (symbol){
            case '+': return Number(first) + Number(second)
            case '*': return Number(first) * Number(second)
            case '/': return Number(first) / Number(second)
            default : return Number(first) - Number(second)
        }
    }
    return -1
}
function solveExpression(exp) {
    const numbers = [0,1,2,3,4,5,6,7,8,9,0].filter(item => !exp.split('').some(str => Number(str) === item))
    let res = -1
    for (let i = 0; i < numbers.length; i++) {
        const value = exp.replace(/\?/g, `${numbers[i]}`)
        const [primerText, answer] = value.split('=')
        const primer = customEval(primerText)
        if ((primer || primer === 0) && (answer === primer.toString())) {
            res = numbers[i];
            break;
        }
    }
    return res
}

// console.log(solveExpression('-5?*-1=5?'))
// console.log(solveExpression('??+??=??'))
// console.log(solveExpression('?*123?45=?'))
// console.log(solveExpression('?24564+997177=1?21741'))
// console.log(solveExpression('-7715?5--484?00=-28?9?5'))




// Snail Sort

snail = function(array) {
    if(array.length < 3){
        return array.reduce((acc, el)=> [...acc, ...el], [])
    }
    if(array.length === 3){
        const [arr1, arr2, arr3] = array
        return [...arr1, arr2.reverse()[0], ...arr3.reverse(), ...arr2.reverse().slice(0, -1)]
    }
    const result = []
    array.map((item, index, arr) => {
        const lastInd = arr.length - 1
        if(index === 0){
            result.push(...item)
        }
        if(index !== 0 && index !== lastInd){
            result.push(item.reverse()[0])
            item.shift()
        }
        if(index === lastInd){
            result.push(...item.reverse())
        }
    })
    array.reverse().map((item, index, arr) => {
        const lastInd = arr.length - 1
        if(index === 0)return item
        if(index !== 0 && index !== lastInd){
            result.push(item.reverse()[0])
            item.shift()
        }
        if(index === lastInd)return item
    })
    array.reverse()
    const trimmedArray = array.slice(1, -1);
    return [...result, ...snail(trimmedArray)]
}

console.log(snail([[1]]))
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))

// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 35 ]
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ]