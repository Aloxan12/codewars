// function solveExpression(exp) {
//     let res = -1
//     for(let i = 0; i < 10; i++){
//         const value = exp.replace(/\?/g, `${i}`)
//         const answer = value.split('=')[1]
//         const primer = eval(value.split('=')[0])
//         if(answer === primer.toString()){
//             res = i;
//             break;
//         }
//     }
//     return res
// }

function solveExpression(exp) {
    let res = -1
    for (let i = 0; i < 10; ) {
        const value = exp.replace(/\?/g, `${i}`)
        const answer = value.split('=')[1]
        const primer = eval(value.split('=')[0])
        if (answer === primer.toString()) {
            res = i
            break
        }
        i = (primer > answer) ? i + 1 : (primer < answer) ? i + 1 : i;
    }
    return res
}

// console.log(solveExpression('123*45?=5?088'))
// console.log(solveExpression('-5?*-1=5?'))
console.log(solveExpression('??+??=??'))