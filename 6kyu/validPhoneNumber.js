function validPhoneNumber(phoneNumber) {
    const regex = /^(\()?\d{3}(\)) (-|\s)?\d{3}(-)\d{4}$/;
    if (phoneNumber.match(regex)) return true;
    else return false;

}

console.log(validPhoneNumber("(098) 123 4567"))