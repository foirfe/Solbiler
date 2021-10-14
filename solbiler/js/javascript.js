fetch("js/billiste.json")
 .then(function (data) {
   return data.json();
 })
 .then(function (post) {
   visBiler(post);
 });

 function visBiler(post) {
  const biliste = post.billiste;


  const output = document.getElementById("output");
  const bileroutput = document.getElementById("biler_output");
  const persons = document.getElementById("persons");
  const baggage = document.getElementById("baggage");
  const startdato = document.getElementById('start');
  const slutdato = document.getElementById('slut');
  const soegbil = document.getElementById("soegbil");
  const bookknap = document.getElementsByClassName("bookknap"); 



 soegbil.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validDatoer(startdato.value, slutdato.value)) {
       output.innerHTML = "";

      
for (const bil of biliste) 
  if (baggage.value <= bil.kufferter && persons.value <= bil.personer) {
    const klon = bileroutput.content.cloneNode(true);
    const antaldage = beregnAntalLejedage(startdato.value, slutdato.value);
    const billedetag = klon.querySelector(".bilbillede");
    const model = klon.querySelector(".model");
    const kategori = klon.querySelector(".kategori");
    const personer = klon.querySelector(".personer");
    const kufferter = klon.querySelector(".kufferter");
    const pris = klon.querySelector(".pris");
    const link = klon.querySelector(".bookknap")
    const modullink = klon.querySelector(".infoknap")
    
let modalselect = bil.modal
    billedetag.src = bil.billedefil;
    model.textContent += bil.model;
    kategori.textContent += bil.kategori;
    personer.textContent += bil.personer;
    kufferter.textContent += bil.kufferter;
    pris.textContent += beregnLejeudgift(antaldage, bil.pris);
    link.href = `ekstra.html?bil=${bil.model}&afhentning=${startdato.value}&aflevering=${slutdato.value}&lejedage=${antaldage}&lejeudgift=${beregnLejeudgift(antaldage, bil.pris)}`;
    modullink.setAttribute("data-target", modalselect);//gør så den dynamisk skifter data-target på hver bil så der kan åbnes forskellige modal
    output.appendChild(klon);
}
    } else {alert("Der var du lige for hurtig! Afhentingsdato kan ikke ligge senere end afleveringsdato");}
  })}

  function validDatoer(startdato, slutdato) {
    const rejsestart = new Date(startdato);
    const rejseslut = new Date(slutdato);
    if (rejsestart > rejseslut) {
        return false;
    } else {
        return true;
    }
}

function beregnAntalLejedage(startdato, slutdato){
    const rejsestart = new Date(startdato);
    const rejseslut = new Date(slutdato);
    const forskelitid = rejseslut.getTime() - rejsestart.getTime();
    const forskelidage = forskelitid / (1000 * 3600 * 24) + 1;
    return forskelidage;
}

function beregnLejeudgift(antaldage, pris){
const moms = 0.25;
const grundloeb = 495;
const prisprdag = 100;
const prisialt = (grundloeb + (antaldage * prisprdag) + (antaldage * pris)) * (1 + moms);
return prisialt.toFixed(2);}

var today = new Date().toISOString().split('T')[0]; // Gør at man ikke kan gå længere tilbage end i dag.
document.getElementsByName("trip-start")[0].setAttribute('min', today);
document.getElementsByName("trip-end")[0].setAttribute('min', today);


var reviewIndex = 0; //Lånte lidt af denne kode fra W3Schools og rettede lidt i den efter hvad jeg havde brug for
showReviews();

function showReviews() { 
  var i;
  var reviews = document.getElementsByClassName("myReviews");
  for (i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";  
  }
  reviewIndex++;
  if (reviewIndex > reviews.length) {reviewIndex = 1} //Gør at den går tilbage til første slide
  reviews[reviewIndex-1].style.display = "block";  
  setTimeout(showReviews, 8000); // Skifter billede ud hvert 5sekund
}



//Var begyndt på at prøve at køre forskellige modaler efter hvilken bil blev valgt men fik ikke så meget ud af det, rester af koden ligger tilbage, og i CSS hvis jeg skulle
//få lyst til at kigge på det senere

var btns = document.querySelectorAll("[data-target]");

btns.forEach(function(btn){
  btn.onClick(function(){
    var modal = btn.getAttribute('data-target');
    document.getElementById(modal).style.display = "block";
  })
})

