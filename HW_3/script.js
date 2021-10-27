// Task 1
const list = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function meeting(str) {
    let array = str.split(';');

    for (let i = 0; i < array.length; i++) {     // получаем двумерный масив
        array[i] = array[i].split(":");
    }

    array.sort(function (a, b) {                // сортируем по фамилии и в случае необходимости - по имени
        if (a[1] < b[1]) { return -1; }
        if (a[1] > b[1]) { return 1; }
        if (a[1] === b[1]) {
            if (a[0] < b[0]) { return -1; }
            if (a[0] > b[0]) { return 1; }
        }
        return 0;
    });

    array.map(item => item.join(';'));

    for (let i in array) {
        array[i] = array[i].join(", ").toUpperCase(); // соединяем по запятой и приводим к верхнему регистру
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = `(${array[i]})`                 // оборачиваем в скобки
    }

    return array.join(' ')
};

console.log(meeting(list));

// Task 2

function getChairs(array, num) {
    let isEquel = false;
    let arr = [];
    let result = 0;

    if (num !== 0) {
        let count = 0;
        let difference = 0;

        array.forEach((element) => {
            if (element[0].length === element[1]) {
                count = 0;
            } else if (element[0].length < element[1]) {
                difference = element[1] - element[0].length;
            }
            arr.push(difference) // пушим разницу длины строки и второго параметра каждого подмассива в arr

            let sum = arr.reduce((acum, current) => { // считаем суму
                return acum + current;
            });

            if (sum === num) {
                isEquel = true;      // так как мы не можем выйти намеренно из цикла, ввожу дополнительную переменную
                result = [...arr];   // если сумма равна, то копируем ее в массив окончательного результата
            }
        });
    } else {
        return 'Game on!'
    }
    if (isEquel) {
        return result;
    }
}

console.log(getChairs([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(getChairs([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(getChairs([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));

// Task 3

const matrix = [

    [2, 2], // A

    [3, 8], // B

    [5, 5], // C

    [6, 3], // D

    [6, 7], // E

    [7, 4], // F

    [7, 9]  // G

];

function findTheSmallestDistance(array) {      // |(x2 - x1)| + |(y2-y1)|
    console.log(array) //[2, 8]
    let distance = 0;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {

            // console.log('array[j][i]', array[j][i])
            // console.log('array[i][i]', array[i][i])
            // console.log('array[j][j]', array[j][j])
            // console.log('array[i][j]', array[i][j]) 

            distance = Math.abs((array[j][i] - array[i][i])) + Math.abs((array[j][j] - array[i][j]));
            console.log('distan ', distance)
        }
    }
}
console.log(findTheSmallestDistance(matrix));