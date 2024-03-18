// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга

let dirtyStr = ' dirty string   ';

// Почистити її від зайвих пробілів.

console.log(dirtyStr.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str = 'Ревуть воли як ясла повні';

const stringToArray = (str) => str.split(' ');

let arr = stringToArray(str); // ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log(arr);

// - є масив чисел

const array = [10,8,-7,55,987,-1011,0,1050,0]

//за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const strArray = array.map(n => n.toString());
console.log(strArray);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];

const sortNums = (array, direction) => {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    } else {
        return 'Incorrect direction';
    }
}

console.log(sortNums(nums,'ascending')) // [3,11,21]
console.log(sortNums(nums,'descending')) // [21,11,3]



// ==========================
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

const monthDescending = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(monthDescending);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const durationFilter = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(durationFilter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const transformArray = coursesAndDurationArray.map((course, i) => ({id: i + 1, title: course.title, monthDuration: course.monthDuration}));
console.log(transformArray);



// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const cardValue = ['6', '7', '8', '9', '10', 'jack','queen','king', 'ace'];
const cardSuit = ['spade', 'diamond','heart', 'clubs'];
const cardColor = ['red','black'];

let cardDeck = [];
for (let value of cardValue) {
    for (let suit of cardSuit) {
        cardDeck.push({
            value: value,
            suit: suit,
            color: suit === 'diamond' || suit === 'heart' ? cardColor[0] : cardColor[1]
        });
    }
}
console.log(cardDeck);

// - знайти піковий туз

const aceSpade = cardDeck.filter(card => card.value === 'ace' && card.suit === 'spade');
console.log(aceSpade);

// - всі шістки

const sixes = cardDeck.filter(card => card.value === '6');
console.log(sixes);

// - всі червоні карти

const reds = cardDeck.filter(card => card.color === 'red');
console.log(reds);

// - всі буби

const diamonds = cardDeck.filter(card => card.suit === 'diamond');
console.log(diamonds);

// - всі трефи від 9 та більше

const clubs = cardDeck.filter((card, i) => card.suit === 'clubs' && i >= 12);
console.log(clubs);



// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const suits = cardDeck.reduce((a, b) => {
    a[b.suit] ? a[b.suit].push(b) : a[b.suit] = [b];
    return a;
}, {});
console.log(suits);



// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

const sassModule = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sassModule);

// --написати пошук всіх об'єктів, в який в modules є docker

const dockerModule = coursesArray.filter(course => course.modules.includes('docker'));
console.log(dockerModule);