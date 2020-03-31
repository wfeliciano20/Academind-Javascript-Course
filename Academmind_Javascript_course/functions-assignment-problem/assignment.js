const sayHello = (name) => console.log('Hi ' + name);
const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi ');
const sayHello4 = (name) => ('Hi ' + name);
const sayHello5 = (name, phrase = 'hi') => console.log(phrase + ' ' + name);


sayHello();
sayHello2('max', 'hello');
sayHello3();
console.log(sayHello4('max'));

function checkInput(callback, ...strings) {
    let hasEmptyText = false;
    for (const text of strings) {
        if (!text) {
            hasEmptyText = true;
            break;
        }
    }
    if (!hasEmptyText) {
        callback();
    }
}

checkInput(
    () => {
        console.log('All not empty!');
    },
    'Hello',
    '12',
    'adsfa',
    'Not empty');