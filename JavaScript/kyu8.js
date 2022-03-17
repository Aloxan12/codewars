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