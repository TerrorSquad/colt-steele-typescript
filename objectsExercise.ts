// create type alias based on variables

type BoxOffice = {
    budget: number
    grossUS: number
    grossWorldwide: number
}

type Movie = {
    readonly title: string
    originalTitle?: string
    director: string
    boxOffice: BoxOffice
}

function getProfit(movie: Movie): number {
    const boxOffice = movie.boxOffice;
    return boxOffice.grossWorldwide - boxOffice.budget;
}
