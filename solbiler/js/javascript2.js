const URL = window.location.search; //Til at finde url data til udstyr siden
const URLDATA = new URLSearchParams(URL);

const valgtebilnavn = document.getElementById("valgtebilnavn");
const ekstraoutput = document.getElementById("ekstraoutput");
const valgtebilbillede = document.getElementById("valgtebilbillede")



valgtebilnavn.innerHTML = URLDATA.get('bil');// Navn på bil efter hvad der står i URL
ekstraoutput.innerHTML = "Du henter bilen den: " + URLDATA.get("afhentning") + "<br>og du aflever bilen den: " // Mere url data der bliver printet ud efter valg fra forrige side
 + URLDATA.get("aflevering") + "<br>Antal lejedage: " + URLDATA.get("lejedage") + "<br>Lejepris for bilen er: " + URLDATA.get("lejeudgift");

 if (URLDATA.get('bil') == "Citroen C1") {valgtebilbillede.innerHTML = `<img src="images/citroen.png" alt="Citroen 1">`} // Viser billede af bilen med
  else if (URLDATA.get('bil') == "Renault Megane") {valgtebilbillede.innerHTML = `<img src="images/megane.png" alt="Renault Megane">`}
  else   {valgtebilbillede.innerHTML = `<img src="images/multivan.png" alt="Multivan">`};

let lejeudgiften = URLDATA.get("lejeudgift"); //Total fra URL fra tidligere side
let currenttotal = parseInt(lejeudgiften);//Skifter det fra string til integer så det kan pluses til sidst.
  let total = 0.00;
  visTotal();

  const checkbokse = document.getElementsByClassName("checkpoint");
  for (const checkboks of checkbokse) {
      checkboks.addEventListener("change", function(){
          if (this.checked===true){//Hvis en checkboks er checked så tilføjer den pris  
            total = Math.abs(total+parseFloat(this.value));
          } 
          else {//Hvis en checkboks er ikke checked, så tager den det fra prisen
              total = Math.abs(total-parseFloat(this.value));
          }
          visTotal();
      })
  }

  function visTotal() {
      const totalpris = document.getElementById("totalprisplusudstyr");
      totalpris.innerHTML = `Total pris <br> inkl. moms: ${(total+currenttotal).toLocaleString("da-DK", {style: "currency", currency: "DKK"})}`;
  }
  

  let modelnavn = URLDATA.get('bil');
  let afhentning = URLDATA.get("afhentning");
  let aflevering = URLDATA.get("aflevering");
  let lejedage = URLDATA.get("lejedage");


  const formular = document.getElementById("formular");
  formular.addEventListener("submit", gemValgteUdstyr);
  function gemValgteUdstyr(){
      let udstyrliste = []; //Udstyrlisten bliver nulstillet
      for (const checkboks of checkbokse){
          if (checkboks.checked === true){//Hvis udstyret er valgt, så bliver det tilføjet til udstyrslisten
              udstyrliste.push(checkboks.dataset.udstyr);
          }
      }

      
      sessionStorage.setItem("udstyr", JSON.stringify(udstyrliste));
      sessionStorage.setItem("totalpris", (total+currenttotal).toLocaleString("da-DK", {style: "currency", currency: "DKK"}));
      sessionStorage.setItem("biludlejning", currenttotal.toLocaleString("da-DK", {style: "currency", currency: "DKK"}));
      sessionStorage.setItem("udstyrpris", total.toLocaleString("da-DK", {style: "currency", currency: "DKK"}));
      sessionStorage.setItem("modelnavn", modelnavn);
      sessionStorage.setItem("afhentningen", afhentning);
      sessionStorage.setItem("afleveringen", aflevering);
      sessionStorage.setItem("lejedagene", lejedage);
  }
