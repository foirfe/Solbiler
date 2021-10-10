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
  const soegbil = document.getElementById("soegbil")

  
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

    billedetag.src = bil.billedefil;
    model.textContent += bil.model;
    kategori.textContent += bil.kategori;
    personer.textContent += bil.personer;
    kufferter.textContent += bil.kufferter;
    pris.textContent += beregnLejeudgift(antaldage, bil.pris);
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