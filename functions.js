function square(num) {
    return num * num;
}
var res1 = square(3);
// let res2 = square('hey');
// let res3 = square(false);
console.log(res1);
function greet(person) {
    return "Hi there, ".concat(person, "!");
}
console.log(greet('Goran'));
var doSomething = function (person, age, isFunny) {
    if (isFunny === void 0) { isFunny = false; }
    console.log("".concat(person, " is ").concat(age, " old and is ").concat(isFunny ? '' : 'not', " funny"));
};
doSomething('ChickenFace', 76);
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
var colors = ["red", "blue", "white"];
colors.map(function (color) { return color.toUpperCase(); });
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("Game loop running");
    }
}
