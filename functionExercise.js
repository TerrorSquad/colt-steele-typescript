function twoFer(name) {
    if (name === void 0) { name = 'you'; }
    return "One for me, one for ".concat(name);
}
function isLeapYear(year) {
    var multipleOfFour = year % 4 === 0;
    var multipleOfHundred = year % 100 === 0;
    var multipleOfFourHundred = year % 400 === 0;
    if (multipleOfFour && !multipleOfHundred) {
        return true;
    }
    return multipleOfFourHundred;
}
