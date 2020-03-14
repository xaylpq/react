let a = 0;
console.log(a);

let obj = {
    number: 5,
    sayNumber: function() {
        say = () => {
            console.log(this)
        }
        say();
    }
}

obj.sayNumber();


// Метод фильтр
let names = ['Ivan', 'Anna', 'Ksenia', 'Voldemar'];

let shortNames = names.filter((name) => {
    return name.length < 5
});

console.log(shortNames);


// метод map
let answers = ['IvAn', 'AnnA', 'HeLLo'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);


// Интерполяция
console.log(`Пользователь ${name}, ${name} лет`);

function fetchData(data,count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`)
}
fetchData('something')


// rest параметр
function max (a, ...numbers) {
    console.log(numbers);
} 

max(3, 4, 67);


// spread оператор
const arr1 = [1, 2, 5],
    arr2 = [43, 2 ,6];

const res = Math.max(...arr1,300, ...arr2);
console.log(res);


const avatar = 'Photo';

const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
}
//const result = Object.assign({}, user,admin);
const result = {...user, ...admin, avatar}; // в 2018
console.log(result);


const x = 25, y = 10;
const coords = {x, y, 
    calcSquare() {
        console.log(this.x * this.y);
    }
}
coords.calcSquare();
console.log(coords);


// деструктуризация
const user1 = {
    name: {
        first: 'Stan',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

const {name: {first, second}, pass, rights} = user1;
console.log(first, second);

// патерн
function connect({
    host = 'localhost',
    port =  3000,
    user = 'default'} = {}) {
        console.log(`host: ${host}, port: ${port}, user: ${user}`)
}
connect()


const numbers = [[3, 5], [6, 6]];
const [[a, b], [c, d]] = numbers;
console.log(a, b, c ,d)


const country = {
    name: 'England',
    population: 200000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}
const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;
console.log(maleAdult, maleUnder18, femAdult, femUnder18);