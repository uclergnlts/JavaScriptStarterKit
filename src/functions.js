function addToCart(quantity, productName = "Elma") {
    console.log("Sepete Eklendi : ürün : " + productName + " adet : "+ quantity)
}

addToCart(10)
//--------------------------------------------------------------//
let products1 = {productName:"Elma" , unitPrice:10, quantity:5}
let products2 = {productName:"Armut" , unitPrice:20, quantity:6}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}

addToCart3(products1)
addToCart3(products2)

//Birden Fazla Ürünü Sepete Ekleme

function addToCart4(product) {
    console.log(product)
}

let products =  [
    {productName:"Elma" , unitPrice:10, quantity:5},
    {productName:"Armut" , unitPrice:10, quantity:5},
    {productName:"Karpuz" , unitPrice:10, quantity:5}
]
addToCart4(products)

function add(...numbers) {      
    let total = 0;              //rest operatörü
 for (let i = 0; i< numbers.length; i++) {
     console.log(numbers[i])
     total = total +numbers[i]
     
 }
 console.log(total)
}
add(20,30)
add(20,30,40)


let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]= [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
    = {productName:"Elma" , unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

