const numbers = [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]

for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    // console.log(number)
}
let sum = 0
for (const number of numbers) {
    sum += number
}
// console.log(sum)

const products = [
    {id: 1, name: 'Walton phone', price: 19000},
    {id: 2, name: 'Oppo phone', price: 45000},
    {id: 3, name: 'Vivo phone', price: 44000},
    {id: 4, name: 'Realme phone', price: 14000},
    {id: 5, name: 'Redmi Note 12', price: 17000},
    {id: 6, name: 'Nokia phone', price: 2100},
    {id: 7, name: 'Symphony phone', price: 14500},
    {id: 8, name: 'Samsung note 8', price: 17400},
]

function matchProducts (products, search) {
    const matched = []
    for(product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched
}

console.log(matchProducts(products, 'phone'))