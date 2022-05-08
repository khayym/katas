function sumStrings(a, b) {

    if (a) a = BigInt(a)
    if (b) b = BigInt(b)



    return (a + b).toString()
}


console.log(sumStrings('22', '12'))