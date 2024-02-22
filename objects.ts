function printName(person: { firstName: string; lastName: string }): void {
    console.log(`${person.firstName} ${person.lastName}`);
}


let coordinate: { x: number, y: number } = {x: 42, y: 42};

function randomCoordinate(): { x: number, y: number } {
    return {x: Math.random(), y: Math.random()}
}

// printName({fist: 'Mick', last: 'Jagger', age: 473});


// let coordinate: { x: number, y: number } = {x: 42, y: 42};

type Point = {
    x: number
    y: number
    z?: number
};

function doublePoint(point: Point): Point {
    point.x *= 2;
    point.y *= 2;

    return point;
}

type Credits = {
    producer: string
    writer: string
}

type Song =
    {
        title: string
        artist: string
        numberOfStreams: number
        credits: Credits
    }

function calculatePayout(song: Song) {
    return song.numberOfStreams * 0.0033;
}

function printSong(song: Song) {
    console.dir(song);
}

const song = {
    numberOfStreams: 114251,
    artist: "Eminem",
    credits: {
        producer: "Rick Rubin",
        writer: "Eminem"
    },
    title: "Berzerk"
};
console.log(`Payout: ` + calculatePayout(song))
printSong(song)

const myPoint: Point = {
    x: 1, y: 3
}

type User = {
    readonly id: number
    username: string
}

const user1: User = {
    id: 42,
    username: "warhawk"
}

// user1.id = 41;

type Circle = {
    radius: number
}

type Colorful = {
    color: string
}

type ColorfulCircle = Colorful & Circle

const happyFace: ColorfulCircle = {
    color: 'yellow',
    radius: 4
}

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type _CatDog = Cat & Dog

type CatDog = _CatDog & {
    age: number
}


const christy: CatDog = {
    numLives: 7,
    breed: 'husky',
    age: 9
}
