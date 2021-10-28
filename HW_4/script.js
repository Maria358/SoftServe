// Task 1

const condition = [
    [0, 0, 1],

    [0, 1, 2],

    [2, 1, 0]
];

function checker(condition) {
    if (isEmpty()) return -1;
    return isWinner(1) ? 1 : isWinner(2) ? 2 : 0;
}
function isWinner(character) {
    if (character === 1) {
        if (horizontal(1) || vertical(1) || diagonal(1)) {
            return true;
        }
    } else if (character === 2) {
        if (horizontal(2) || vertical(2) || diagonal(2)) {
            return true;
        }
    }
    return false;
}
function horizontal(character) {
    let isEqual = false;
    for (let i = 0; i < condition.length; i++) {
        isEqual = condition[i].every(cell => cell === character)
        if (isEqual) {
            return true;
        }
    }
    return false;
}
function vertical(character) {
    const getColumn = (arr, num) => arr.map(row => row[num]);
    const column1 = getColumn(condition, 0);
    const column2 = getColumn(condition, 1);
    const column3 = getColumn(condition, 2);
    if (column1.every(cell => cell === character)) {
        return true;
    }
    if (column2.every(cell => cell === character)) {
        return true;
    }
    if (column3.every(cell => cell === character)) {
        return true;
    }
    return false;
}
function diagonal(character) {
    let isEqual = [];
    for (let i = 0; i < condition.length; i++) {
        for (let j = 0; j < condition.length; j++) {
            if (i === j) {
                isEqual[i] = condition[i][j] === character;
            }
        }
    }
    isEqual = isEqual.every(el => el === true)
    if (isEqual) {
        return true;
    }
    return false;
}
function isEmpty() {
    for (let i = 0; i < condition.length; i++) {
        isEqual = condition[i].some(el => el === 0)
        if (isEqual) {
            return true;
        }
    }
    return false;
}

console.log(checker(condition));

// Task 2
const text = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'

function findMessage(string) {
    string = string.replace(/,/g, '');
    let sentences = string.split('.');
    let wordsOfSentences = [];
    let hiddenMsg = [];

    sentences.forEach(sentence => {
        wordsOfSentences.push(sentence.trim().split(' '))
    });

    for (let i = 1, j = 0, k = 0; i < sentences.length - 1; i++, k++) {
        hiddenMsg.push(wordsOfSentences[i][wordsOfSentences[j][k].length - 1])
    }

    let newStr = hiddenMsg.join(' ').trim();
    newStr = newStr.replace(/$/g, '.');
    newStr = newStr[0].toUpperCase() + newStr.slice(1);
    return newStr;
}

console.log(findMessage(text));

// Task 3

function ipsBetween(start, end) {
    // (a * (256*3)) + (b * (256*2)) + (c * 256)) + d + 1

    return calcAddress(end) - calcAddress(start);
}
function calcAddress(address) {
    let addressArray = address.split('.'); // разбиваем на массив

    let result = addressArray.reduce(function (tot, cur, i) {
        return tot + cur * Math.pow(256, 3 - i)  // приводим к 32-битному формату
    }, 0);

    return result;
}
console.log(ipsBetween("10.0.0.0", "10.0.0.50"))
console.log(ipsBetween("10.0.0.0", "10.0.1.0"))
