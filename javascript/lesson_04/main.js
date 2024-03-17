// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangleArea = (a, b) => a * b;

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circleArea = (r) => Math.PI * (r ** 2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinderArea = (h, r) => 2 * Math.PI * r * h;

// - створити функцію яка приймає масив та виводить кожен його елемент

const arrFun = (arr) => arr.map(x => console.log(x));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const textFun = (str) => document.write(`<p>${str}</p>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const listFun1 = (item) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const listFun2 = (item, count) => {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const listFun3 = (arr) => {
    document.write('<ul>');
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const objArrFun = (users) => {
    for (let user of users) {
        document.write(`
            <div>User ID: ${user.id}. User name: ${user.name}. User age: ${user.age}</div>
        `);
    }
}

// - створити функцію яка повертає найменьше число з масиву

const arrMin = (arr) => Math.min(...arr);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => arr.reduce((a, b) => a + b);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

function swap(arr,index1,index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

console.log(swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return Math.floor(sumUAH / currencyValue.value);
        }
    }
    return 'Sorry, we do not exchange this currency';
}

// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));