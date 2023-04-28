function evaluateExpression(expression) {
    let result = 0;
    const operators = {'+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b};

    let operator = null;
    let operand = null;

    for (let i = 0; i < expression.length; i++) {
        const c = expression[i];

        if (operators[c]) {
            if (operator) {
                operand = operators[operator](operand, parseInt(expression.substring(i + 1)));
            } else {
                operand = parseInt(expression.substring(0, i));
            }

            operator = c;
        }
    }

    if (operator) {
        result = operators[operator](operand, parseInt(expression.substring(expression.lastIndexOf(operator) + 1)));
    } else {
        result = parseInt(expression);
    }

    return result;
}

function solveExpression (exp) {
    let res = -1
    for(let i = 0; i < 10; i++){
        const value = exp.replace(/\?/g, `${i}`)
        const answer = value.split('=')[1]
        const primer = evaluateExpression(value.split('=')[0])
        console.log(answer,primer.toString())
        if(answer === primer.toString()){
            res = i;
            break;
        }
    }
    return res
}

// console.log(solveExpression('123*45?=5?088'))
console.log(solveExpression('-5?*-1=5?'))
console.log(solveExpression('??+??=??'))