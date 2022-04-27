// Return the output array, and ignore all non-op characters
function parse(data) {
    let outputValue = [];
    let num = 0

    data.split('').filter(a => {
        if (a === 'i') num += 1;
        else if (a === 's') num **= 2;
        else if (a === 'd') num -= 1;
        else if (a === 'o') outputValue.push(num);
        else return
    })

    return outputValue
}


// => [ 8, 64 ]

console.log(parse("iiiisdoso"))
