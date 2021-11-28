let taulukko = ["one", "two", "three", "four", "five"]
let func = function(n) {
    console.log(n)
}
taulukko.forEach(func)

let prices = [20, 33, 123, 12, 99,]
let discount = prices.map( price => Math.round(price * 0.8))
console.log(discount)


let names = ["John", "Lennon", "John", "Jahmon", "Joohn"]
let johns = names.map( item => {
    if (item === "John") {
        item = "Matti"
        return item;
    }
return item;
} )
//console.log(johns)


let numbers = [-2, 123, -23, -33, 34, 31123, 43];
let pos = numbers.filter(item => item > 0);
//console.log(pos);

let names2 = ['Taavettii', 'Tuomaliina', 'Kalle', 'Kalleliina', "Juho"]

let filteredNames = names2.filter( item => item.length<8 && item[0] === "T")

console.log(filteredNames)
