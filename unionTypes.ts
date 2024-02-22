let age: number | string = 28;
age = '24';

type Point = {
    x: number,
    y: number
}

type Loc = {
    lat: number,
    long: number
}

let coordinates: Point | Loc = {x: 0, y: 0}
coordinates = {lat: 1, long: 1}

function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number): number {
    if (typeof price === 'string') {
        price = parseFloat(price.replace("$", ''));
    }
    return price * tax;
}
