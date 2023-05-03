
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
    let res = -1
    for (let i = 0; i < 10; i++) {
        const value = exp.replace(/\?/g, `${i}`)
        const answer = value.split('=')[1]
        const primer = eval(value.split('=')[0])
        if (answer === primer.toString()) {
            res = i;
            break;
        }
    }
    return res
}

console.log(customEval('-51*-1'))
//console.log(solveExpression('-5?*-1=5?'))
//console.log(solveExpression('??+??=??'))