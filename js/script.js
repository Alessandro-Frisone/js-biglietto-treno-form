const name = document.getElementById("name")
const distance = document.getElementById("distance") 
const age = document.getElementById("age")
const genera = document.getElementById("genera")
const annulla = document.getElementById("annulla")
const priceForKm = 0.21;

genera.addEventListener("click", function(){
let price = distance.value * priceForKm;
if (age.value === "opzione2") {
  price -= price * 0.20; 
}
 if (age.value === "opzione3"){
    price -= price * 0.40;
}
console.log(price)
});
