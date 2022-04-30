function moveZeros(arr) {
    const elems = arr.filter(e => e !== 0)
    const zeros = arr.filter(e => e === 0)

    return elems.concat(zeros)
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]


// best

// var moveZeros = function (arr) {
//     return [
//       ...(arr.filter(n => n !== 0)),
//       ...(arr.filter(n => n === 0))
//     ];
//   }