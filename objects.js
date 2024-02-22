function printName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var coordinate = { x: 42, y: 42 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    point.x *= 2;
    point.y *= 2;
    return point;
}
function calculatePayout(song) {
    return song.numberOfStreams * 0.0033;
}
function printSong(song) {
    console.dir(song);
}
var song = {
    numberOfStreams: 114251,
    artist: "Eminem",
    credits: {
        producer: "Rick Rubin",
        writer: "Eminem"
    },
    title: "Berzerk"
};
console.log("Payout: " + calculatePayout(song));
printSong(song);
