function countChange(money, coins) {
    if(!money) return 0
    let result = 0

    for(let i = 0; i < coins.length; i++){
        if(coins[i] === money){
            result += 1
        }
    }
    return result
}

console.log(countChange(4, [1, 2]))