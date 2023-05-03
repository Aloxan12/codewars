
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
// console.log(solveExpression('1+1=?'))
// console.log(solveExpression('?*11=??'))
// console.log(solveExpression('?*123?45=?'))
// console.log(solveExpression('?24564+997177=1?21741'))
// console.log(solveExpression('-7715?5--484?00=-28?9?5'))

function exemple(){
    for (let i = 0; i< 10; i++){
        console.log('попали')
        if(i === 2) {
            console.log('выход')
            return 2;
        }
    }
}

console.log('exemple', exemple())