
const customEval = (value)=>{
    const regex = /(?<first>[-\d\?]*)(?<symbol>[*\-\+])(?<second>[-\d\?]*)/;
    const matches = value.match(regex);
    const first = matches?.groups.first; // '2'
    const symbol = matches?.groups.symbol; // '+'
    const second = matches?.groups.second; // '2'
    switch (symbol){
        case '+': return Number(first) + Number(second)
        case '*': return Number(first) * Number(second)
        case '/': return Number(first) / Number(second)
        default : return Number(first) - Number(second)
    }
}
function solveExpression(exp) {
    const numbers = [0,1,2,3,4,5,6,7,8,9].filter(item => !exp.split('').some(str => Number(str) === item))
    let res = -1
    for (let i = 0; i < numbers.length; i++) {
        const value = exp.replace(/\?/g, `${numbers[i]}`)
        const answer = value.split('=')[1]
        const primer = customEval(value.split('=')[0])
        if (answer === primer.toString()) {
            res = numbers[i];
            break;
        }
    }
    return res
}

// console.log(solveExpression('-5?*-1=5?'))
// console.log(solveExpression('??+??=??'))
// console.log(solveExpression('1+1=?'))
// console.log(solveExpression('?*11=??'))
console.log(solveExpression('-7715?5--484?00=-28?9?5'))