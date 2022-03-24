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

function rowWeights(array){
    const arrOdd = array
        .filter((item, i) => i % 2 === 0)
        .reduce((a, b) => a + b, 0)
    const arrEven = array
        .filter((item, i) => i % 2 !== 0)
        .reduce((a, b) => a + b, 0)

    return array.length > 1 ? [arrOdd, arrEven] : [...array, 0]
}

function vaporcode(string) {
    return string.toUpperCase().replace(' ', '').split('').filter(item=> item !== ' ').join('  ')
}

function getCount(str) {
    let vowelsCount = 0

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === 'a' ||
            str[i] === 'e' ||
            str[i] === 'i' ||
            str[i] === 'o' ||
            str[i] === 'u'
        ) {
            vowelsCount++
        }
    }

    return vowelsCount
}

function removeSmallest(numbers) {
    const min = Math.min(...numbers)
    let minIndex = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === min) {
            minIndex = i
            break
        }
    }
    const newArr = numbers.filter((item, i) => i !== minIndex)
    return newArr
}

function gimme (triplet) {
    const max = Math.max(...triplet)
    const min = Math.min(...triplet)
    return +triplet
        .map((item, i) =>
            item !== max && item !== min ? triplet.indexOf(item) : '',
        )
        .join('')
}

const sequenceSum = (begin, end, step) => {
    let result = 0
    for (let i = begin; i <= end; i += step) {
        result += i
    }
    return result
}