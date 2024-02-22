function square(num: number): number {
    return num * num;
}

let res1 = square(3);
// let res2 = square('hey');
// let res3 = square(false);
console.log(res1);


function greet(person: string): string {
    return `Hi there, ${person}!`
}

console.log(greet('Goran'));

const doSomething = (person: string, age: number, isFunny: boolean = false): void => {
    console.log(`${person} is ${age} old and is ${isFunny ? '' : 'not'} funny`);
}

doSomething('ChickenFace', 76);

function rando(num: number) {
    if (Math.random() < 0.5) {
        return num.toString()
    }

    return num;
}


const colors = ["red", "blue", "white"]

colors.map(color => color.toUpperCase())

function printTwice(msg: string): void {
    console.log(msg)
    console.log(msg)
}

function makeError(msg: string) {
    throw new Error(msg);
}


function gameLoop(): never {
    while (true) {
        console.log("Game loop running");
    }
}
