(function () {
    console.log('xeyyam');
})



const isEven = (num) => {
    return num % 2 == 0;
}

const higOrder = (func, number) => {
    const check = func(number);
    return console.log(`${number} is even? : ${check}`);
}
higOrder(isEven, 5)




function doSomething() {
    console.log(this);
}

doSomething();

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
console.log(curryUnaryFunction(1)) // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6


const greet = name => {
    return "Merhaba" + name;
};

const greetAll = names => {
    return console.log(names.map(greet));
};



function multipleSum(sum) {
    return sum * 2;
}

function operation(a, b, callback) {
    const sum = a + b;
    return callback(sum);
}

console.log(operation(2, 3, multipleSum));


function start(name) {
    const message = 'Hello';

    function greeting() {
        console.log(message + " " + name);
    }

    greeting()
}

start('xeyyam')


function memo() {
    var cache = {};

    return function (number) {
        if (number in cache) {
            console.log('cache')
            return cache[number];
        } else {
            cache[number] = number + 10;
            console.log('new');
            return cache[number]
        }
    }
}

const m = memo();

m(12);

const sep = (a, b, c) => a + b + c

const arr = [1, 2, 3];
console.log(sep(...arr));

