const dinevalg = document.getElementById("dinevalg");
const modelnavn = document.getElementById("modelnavn");
const totalprisnu = document.getElementById("totalprisnu");
const prisforbilen = document.getElementById("prisforbilen");
const udstyrvalgt = document.getElementById("udstyrvalgt");
const udstyrliste = JSON.parse(sessionStorage.getItem("udstyr"));
const afhentingogaflevering = document.getElementById("afhentningogaflevering");
const bilbillede = document.getElementById("bilbillede") //Tilknytter alt til javascripten fra html
const prisforudstyr = document.getElementById("prisforudstyr")

for(const udstyr of udstyrliste){
    udstyrvalgt.insertAdjacentHTML("beforeend", `${udstyr}<br>`);

}
prisforudstyr.innerHTML =  "Pris for udstyr: " + sessionStorage.getItem("udstyrpris")
modelnavn.innerHTML = sessionStorage.getItem("modelnavn");
prisforbilen.innerHTML = "Prisen for udlejning af bilen er " + sessionStorage.getItem("biludlejning");
afhentingogaflevering.innerHTML = "Du har valgt at afhente bilen den: " + sessionStorage.getItem("afhentningen") + 
"<br> og du vil aflevere bilen den: " + sessionStorage.getItem("afleveringen") + "<br>Antal lejedage: " + sessionStorage.getItem("lejedagene");
totalprisnu.innerHTML = "Totalpris: " + sessionStorage.getItem("totalpris")


const formular = document.getElementById("dineoplysninger");

formular.addEventListener("submit", function (e){
    e.preventDefault(); //Her er der event handler der skal sende data alt efter hvad der kommer til at stå i form felterne
const fornavn = document.getElementById("firstname").value;
const efternavn = document.getElementById("lastname").value;
    const adresse = document.getElementById("address").value;
    const zip = document.getElementById("zip").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;

    sessionStorage.setItem("fornavn", fornavn);
    sessionStorage.setItem("efternavn", efternavn);
    sessionStorage.setItem("adresse", adresse);
    sessionStorage.setItem("zip", zip);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("tel", tel);
    document.location.href = "confirm.html";
}
)

if (sessionStorage.getItem('modelnavn') == "Citroen C1") {bilbillede.innerHTML = `<img src="images/citroen.png" alt="Citroen 1">`} // Viser billede af bilen med
else if (sessionStorage.getItem('modelnavn') == "Renault Megane") {bilbillede.innerHTML = `<img src="images/megane.png" alt="Renault Megane">`}
else   {bilbillede.innerHTML = `<img src="images/multivan.png" alt="Multivan">`};

var slideIndex = 0; //Lånte lidt af denne kode fra W3Schools og rettede lidt i den efter hvad jeg havde brug for
showSlides();

function showSlides() { 
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} //Gør at den går tilbage til første slide
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Skifter billede ud hvert 5sekund
}