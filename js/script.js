const nameOutput = document.getElementById("name")
const distance = document.getElementById("distance") 
const age = document.getElementById("age")
const genera = document.getElementById("genera")
const annulla = document.getElementById("annulla")
const priceForKm = 0.21;
const passengerOutput = document.getElementById("passenger")
const offerOutput = document.getElementById("offer")
const carrozzaOutput = document.getElementById("carrozza")
const cod_cp_output = document.getElementById("cod_cp")
const price_ticketOutput = document.getElementById("price_ticket")
const personal_ticketOutput = document.getElementById("personal_ticket")

// Funzione calcolo sconto
genera.addEventListener("click", function(){
  const carrozza = Math.floor(Math.random() * 13)
  const cod_cp = Math.floor(Math.random() * 100000) + 90000;
  carrozzaOutput.innerHTML = carrozza
  cod_cp_output.innerHTML = cod_cp
  passengerOutput.innerHTML = nameOutput.value
  offerOutput.innerHTML = "Biglietto standard"
  const finalTicket = personal_ticketOutput.classList.remove("d-none")

  let price = distance.value * priceForKm;
  if (age.value === "opzione2") {
    price -= price * 0.20; 
    offerOutput.innerHTML = "Biglietto under 18"
  }
  if (age.value === "opzione3"){
      price -= price * 0.40;
      offerOutput.innerHTML = "Biglietto over 65"
  }
  price_ticketOutput.innerHTML = price.toFixed(2)
  });

  annulla.addEventListener("click", function(){
    const finalTicket = personal_ticketOutput.classList.add("d-none")
  })
