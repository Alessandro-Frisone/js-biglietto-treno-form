const name = document.getElementById("name")
const distance = Number(document.getElementById("distance")) 
const age = document.getElementById("age")
const genera = document.getElementById("genera")
const annulla = document.getElementById("annulla")
const priceForKm = 0.21;


genera.addEventListener("click", function(){
let price = distance * priceForKm;
if (age <= 18) {
  price -= price * 0.20; 
}
 if (age >= 65){
    price -= price * 0.40;
}
return price;
});
console.log(price)