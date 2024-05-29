const values = {
    IX: 9,
    CM: 900,
    XC: 90,
    CD: 400,
    IV: 4,
    XL: 40,
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

var romanToInt = function (s) {
    let result = s
    for (let value in values) {
        result = result.replace(value, ` ${values[value]} `)
    }
    const newRes = result.trim().split(' ').map(item => isNaN(+item) ? item.split('').map(i => values[i]).reduce((acc, el) => acc + el, 0) : item)
    return newRes.reduce((acc, el) => acc + +el, 0)
};

// console.log(romanToInt('III'))
// console.log(romanToInt('MCMXCIV'))

var plusOne = function(digits) {
    return String(BigInt(digits.join('')) + BigInt('1')).split('').map(Number)
};
// console.log('plusOne', plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))


// крч нужно разбить строку на массив, где разделитель знак '\n'
// важно! если встречается этот разделительный знак в массив должен добавиться пустая строка как элемент.
// вот пример текста и правильный результат:

// '(Job) ALERT! Vermitteln zahlt sich aus!\n\nHolt talentierte Freund:innen & Familie ins VERKEHRSBUERO und sichert euch eine 400€ Vermittlungsprämie. \n\nEure Empfehlungen stärken unser Team. \n\nAlle Details im Intranet unter "Mitarbeiter:innenangebote".'

// ["(Job) ALERT! Vermitteln zahlt sich aus!",
//  "",
//  "",
//  "Holt talentierte Freund:innen &amp; Familie",
//  " ins VERKEHRSBUERO und sichert euch eine 400€ Vermittlungsprämie. ",
//  "",
//  "",
//  "Eure Empfehlungen stärken unser Team. ",
// "",
//  "",
//  "Alle Details im Intranet unter \&quot;Mitarbeiter:innenangebote\&quot;."]

function cutFn (string) {
    return string.replace(/\n\n/g, 'разделительстрокаразделительстрокаразделитель').replace(/\n/g, 'разделительстрокаразделитель').split('разделитель').map(item => item === 'строка' ? "" : item)
}
const res = cutFn('(Job) ALERT! Vermitteln zahlt sich aus!\n\nHolt talentierte Freund:innen & Familie ins VERKEHRSBUERO und sichert euch eine 400€ Vermittlungsprämie. \n\nEure Empfehlungen stärken unser Team. \n\nAlle Details im Intranet unter "Mitarbeiter:innenangebote".')
// console.log('res', res )

