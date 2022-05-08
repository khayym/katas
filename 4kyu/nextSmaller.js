function nextSmaller(n) {
    const dig = n.toString().split("");
    const len = dig.length

    if (dig[len - 2] > dig[len - 1]) {
        const nee = dig.splice(len - 2)
        return parseInt(dig.concat(nee.reverse()).join(''))
    } else if (dig[0] > dig[len - 1] && len == 3 && dig[1] == 0) {
        return parseInt(dig.reverse().join(''))
    } else if (len == 3 && dig[1] < dig[0]) {
        const nee = dig.splice(1)
        return parseInt(nee.concat(dig).join(''))
    }
    else return -1
}

nextSmaller(414) //2017