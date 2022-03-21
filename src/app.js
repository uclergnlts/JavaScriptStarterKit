console.log("Merhaba")


let dolarDun = 12.5;
let dolarBugun = 13.5;

if(dolarDun > dolarBugun);
{
    let dolarDun = 9.10
}

console.log(dolarDun);

//Array - Diziler
let konutKredileri = ["Konut Kredisi" , "Emlak Konut Kredisi" , "Kamu Konut Kredisi", "Yabancı Uyruklu Emlak Konut Kredisi" , "Büyük Fonlu Emlak Konut Kredisi"]


for (let i =  0; i<konutKredileri.length; i++) {
    console.log(konutKredileri[i])
}
//rest
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts)
//showProducts(10, "elma", "armut","karpuz")

//spread - ayrıştırmak
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points)) //araydeki en büyük sayıyı yazar


//Destructuring - Elimizdeki Arraylerin elemanlarını değişkenlere atamak için kullanılır
let population = [10000,20000,30000]
let [small,medium,high] = population //Yukarıdaki arrayleri buradaki arrraylere sırasıyla aktar
console.log(small)
console.log(medium)
console.log(high)