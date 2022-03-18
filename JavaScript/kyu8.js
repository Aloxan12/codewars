function multiply(a, b){
    return a * b
}

function even_or_odd(number) {
    if(number % 2 === 0){
        return 'Even'
    }else{
        return 'Odd'
    }
}

function DNAtoRNA(dna) {
    return dna.split('')
        .map((item) => (item.toUpperCase() === 'T' ? 'U' : item))
        .join('')
        .replace(/[\s.,%]/g, '')
}

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m
}

function solution(str){
    return str.split("").reverse().join("");
}

function boolToWord( bool ){
    return bool ? 'Yes' : 'No'
}

function boolToWord2( bool ){
    return `${bool}`
}

function lovefunc(flower1, flower2){
    if( flower1 % 2 === 0 && flower2 % 2 !== 0){
        return true
    }else if( flower1 % 2 !== 0 && flower2 % 2 === 0){
        return true
    }else{
        return false
    }
}