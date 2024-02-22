// create an empty array of numbers
const ages: number[] = [];
// create an array variable called gameBoard that starts as an empty array
// it should be typed to hold a 2-dimensional array of strings

const gameBoard: string[][] = [];

// create a Product type that contains a name and a price
type Product = {
    name: string
    price: number
}
// write a function getTotal that accepts an array of products
// it should return a sum of all product prices

function getTotal(products: Product[]): number {
    let sum = 0;
    products.forEach((product) => {
        sum += product.price;
    })
    return sum;
}
