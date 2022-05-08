function pigIt(str) {

    const arr = str.split(' ');
    let finish = [];
    for (newArr of arr) {
        if (!newArr.match(/^[.,:!?]/)) {
            const [char, n] = [newArr[0], newArr.substr(1)];
            finish.push(n + char + 'ay');
        } else finish.push(newArr)

    }

    return finish.join(' ');
}


// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !
