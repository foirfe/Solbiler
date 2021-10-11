const URL = window.location.search; //Til at finde url data til udstyr siden
const URLDATA = new URLSearchParams(URL);

const valgtebilnavn = document.getElementById("valgtebilnavn");
const ekstraoutput = document.getElementById("ekstraoutput");
const valgtebilbillede = document.getElementById("valgtebilbillede")

valgtebilnavn.innerHTML = URLDATA.get('bil');// Navn på bil efter hvad der står i URL
ekstraoutput.innerHTML = "Du henter bilen den: " + URLDATA.get("afhentning") + "<br>og du aflever bilen den: " // Mere url data der bliver printet ud efter valg fra forrige side
 + URLDATA.get("aflevering") + "<br>Antal lejedage: " + URLDATA.get("lejedage") + "<br>Lejepris for bilen er: " + URLDATA.get("lejeudgift")

 if (URLDATA.get('bil') == "Citroen C1") {valgtebilbillede.innerHTML = `<img src="images/citroen.png" alt="Citroen 1">`} // Viser billede af bilen med
  else if (URLDATA.get('bil') == "Renault Megane") {valgtebilbillede.innerHTML = `<img src="images/megane.png" alt="Renault Megane">`}
  else {valgtebilbillede.innerHTML = `<img src="images/multivan.png" alt="Renault Megane">`};