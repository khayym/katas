function count(string) {
    // The function code should be here
    const newString = string.split('');
    const toFindDuplicates = arry => arry.filter((item, index) => newString.indexOf(item) !== index)
    const duplicateElementa = toFindDuplicates(newString);
    console.log(duplicateElementa)
}
