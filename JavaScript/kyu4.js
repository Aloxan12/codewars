function solveExpression(exp) {
    const regex = /(?<first>[-\d\?]*)(?<symbol>[*-\+])(?<second>[-\d\?]*)=(?<third>[-\d\?]*)/;
    const str = '2+2=4';
    const matches = str.match(regex);

    const first = matches.groups.first; // '2'
    const symbol = matches.groups.symbol; // '+'
    const second = matches.groups.second; // '2'
    const third = matches.groups.third;

    const resultEval = eval(`${first} ${symbol} ${second}`);
}

console.log(solveExpression('123*45?=5?088'))
console.log(solveExpression('-123*45?=5?088'))