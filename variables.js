var movieTitle = "Amadeus";
movieTitle.toUpperCase();
var numCatLives = 9;
numCatLives++;
// numCatLives = 'zero'
var gameOver = false;
gameOver = true;
// gameOver = "true"
// Type Inference
var tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false
var isFunny = false;
isFunny = true;
// the any type
// let thing = "hello"
//
// thing = 42
// thing = false
//
// thing()
var movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
        break;
    }
}
