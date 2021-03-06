// function incrementString(strng) {
//     if (strng) {
//         const [word, digits] = strng.match(/\D+|\d+/g);
//         if (!digits && parseInt(word)) {
//             const int = (parseInt(word) + 1).toString();
//             return int.padStart(word.length, '0');
//         } else if (!word) {
//             return '1'
//         } else if (!digits) {
//             return word + '1';
//         } else {
//             const int = (parseInt(digits) + 1).toString();
//             return word + int.padStart(digits.length, '0');
//         }

//     }
//     else return '1'
// }

function incrementString(str) {
    const lastLetter = str.slice(-1);
    if (isNaN(parseInt(lastLetter))) {
        str += 1;
    } else {
        let digit = parseInt(str.match(/([\d]+)$/gi)[0]);
        let startIndex = str.indexOf(digit++);
        str = str.slice(0, startIndex) + digit;
    }
    return str;
}

console.log(incrementString("ss"))