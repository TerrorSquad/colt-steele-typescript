let movieTitle: string = "Amadeus"
movieTitle.toUpperCase()

let numCatLives: number = 10

numCatLives++

// numCatLives = 'zero'

let gameOver = false

gameOver = true

// gameOver = "true"

// Type Inference
let tvShow = "Olive Kitteridge"
tvShow = "The Other Two"
// tvShow = false

let isFunny = false;

isFunny = true

// the any type
// let thing = "hello"
//
// thing = 42
// thing = false
//
// thing()

const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];

let foundMovie: string;

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
        break;
    }
}
