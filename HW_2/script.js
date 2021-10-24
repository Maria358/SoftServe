// Task 1

let array = [21, 14, 55, 23, 9, 1, 190];
let array2 = [98, 111, 22, 67];

function isChecked(arg) {
    if (arg === null) {
        throw new Error('The array isn`t iterate!');
    } else if (arg.length === 0) {
        throw new Error('Invalid length of array!');
    } else {
        return true;
    }
}

Array.prototype.pop2 = function () {
    if (isChecked(this)) {
        const lastEl = this[this.length - 1];
        this.length -= 1;
        return lastEl;
    }
}

// console.log(array.pop2());
// console.log(array.length);

Array.prototype.push2 = function (...arg) {
    if (isChecked(this)) {
        let oldLength = this.length;
        this.length = this.length + arg.length;

        for (let i = oldLength, j = 0; i < this.length; i++, j++) {
            this[i] = arg[j];
        }

        return this.length;
    }
}

// console.log(array.push2(1, 2, 3, 4));
// console.log(array);

Array.prototype.shift2 = function () {
    if (isChecked(this)) {
        let length = this.length;
        const firstEl = this[0];

        for (let i = 0; i < length; i++) {
            this[i] = this[i + 1];
        }
        this.length -= 1

        return firstEl;
    }
}

// console.log(array.shift2());
// console.log(array);

Array.prototype.unshift2 = function (...arg) {
    if (isChecked(this)) {
        let array = [...this];
        let argLength = arg.length;
        this.length = this.length + argLength;

        for (let i = 0, j = 0; i < argLength; i++, j++) {
            this[i] = arg[j];
        }
        for (let i = argLength, j = 0; i < this.length; i++, j++) {
            this[i] = array[j];
        }

        return this.length;
    }
}

// console.log(array.unshift2(1, 2, 3, 4));
// console.log(array);

Array.prototype.concat2 = function (array) {
    if (isChecked(this)) {
        const newArray = [...this, ...array];
        return newArray;
    }
}

// console.log(array.concat2(array2));

// Task 2

const array3 = ['Яблоко', 'Банан', 'Ананас'];


const result = array3.reduce(function (acum, current) {
    acum.push(current[0]);
    return acum;
}, []);

console.log(result)

const result2 = array3.reduce(function (acum, current) {
    if (current[0].toLowerCase() === 'а') {
        acum.push(current);
    }
    return acum;
}, []);

console.log(result2)

const result3 = array3.reduce(function (acum, current, i) {
    console.log(`${i + 1}: ${current}`);

    return `${i + 1}${current}`
}, []);
