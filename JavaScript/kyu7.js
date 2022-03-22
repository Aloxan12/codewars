String.prototype.toJadenCase = function () {
    let result = this;

    if (this.length !== 0) {
        result = this.split(" ").map(function (word) {
            return word.substring(0, 1).toUpperCase() + word.substring(1);
        }).join(" ");
    }

    return result;
};

function squareDigits(num) {
    return +num.toString()
        .split('')
        .map((item) => Math.pow(+item, 2))
        .join('')
}

function roundToNext5(n) {
    return Math.ceil(n / 5) * 5
}

function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}

function filter_list(l) {
    const newArr = []
    l.map(item => typeof (item) === "number" ? newArr.push(item) : false)
    return newArr
}

function DNAStrand(dna) {
    return dna.split('')
        .map((item) =>
            item === 'A'
                ? 'T'
                : item === 'T'
                    ? 'A'
                    : item === 'C'
                        ? 'G'
                        : item === 'G'
                            ? 'C'
                            : '',
        )
        .join('')
}

function getMiddle(str) {
    const arr = str.split("");
    while (arr.length > 2) {
        arr.pop();
        arr.shift();
    }
    return arr.join("");
}

const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2)

function highAndLow(numbers) {
    const newArr = numbers.split(' ').map(item => +item)
    return `${Math.max(...newArr)} ${Math.min(...newArr)}`
}

function smallEnough(a, limit) {
    return Math.max(...a) <= limit ? true : false
}

const checkExam = (array1, array2) => {
    let result = 0
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] !== '') {
            if (array1[i] === array2[i]) {
                result = result + 4
            } else if (array1[i] !== array2[i]) {
                result = result - 1
            }
        }
    }
    return result > 0 ? result : 0
}