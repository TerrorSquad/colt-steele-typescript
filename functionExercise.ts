function twoFer(name: string = 'you'): string {
    return `One for me, one for ${name}`
}

function isLeapYear(year: number): boolean {
    const multipleOfFour = year % 4 === 0;
    const multipleOfHundred = year % 100 === 0;
    const multipleOfFourHundred = year % 400 === 0;
    if (multipleOfFour && !multipleOfHundred) {
        return true;
    }
    return multipleOfFourHundred;
}
