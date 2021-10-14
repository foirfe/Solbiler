const dinevalg = document.getElementById("dinevalg");
const modelnavn = document.getElementById("modelnavn");
const totalprisnu = document.getElementById("totalprisnu");
const prisforbilen = document.getElementById("prisforbilen");
const udstyrvalgt = document.getElementById("udstyrvalgt");
const udstyrliste = JSON.parse(sessionStorage.getItem("udstyr"));
const afhentingogaflevering = document.getElementById("afhentningogaflevering");
const personaloutput = document.getElementById("personaloutput");
const sentinfo = document.getElementById("sentinfo")

for(const udstyr of udstyrliste){
    udstyrvalgt.insertAdjacentHTML("beforeend", `${udstyr}<br>`);
}

modelnavn.innerHTML = sessionStorage.getItem("modelnavn");//Tager fra sessionstorage og udskriver valgte info om bil
prisforbilen.innerHTML = "Prisen for udlejning af bilen er " + sessionStorage.getItem("biludlejning") + "og med valgte udstyr ligger totalprisen nu på " + sessionStorage.getItem("totalpris")
afhentingogaflevering.innerHTML = "Du har valgt at afhente bilen den: " + sessionStorage.getItem("afhentningen") + 
"<br> og du vil aflevere bilen den: " + sessionStorage.getItem("afleveringen") + "<br>Antal lejedage: " + sessionStorage.getItem("lejedagene");

personaloutput.innerHTML = "Tak for din bestilling " + sessionStorage.getItem("fornavn") + " " + sessionStorage.getItem("efternavn") + 
"<br>Om ikke så længe modtager du en kvittering på din bestilling på  " + sessionStorage.getItem("email"); //Sessionstorage og besked om kvittering

sentinfo.innerHTML = "Tjek om du har indsendt de rigtige oplysninger her:<br> " + "<br>Navn: " + sessionStorage.getItem("fornavn") + " " + sessionStorage.getItem("efternavn") + 
"<br>Adresse: " + sessionStorage.getItem("adresse") + "<br>Postnummer: " + sessionStorage.getItem("zip") + "<br>Email: " + sessionStorage.getItem("email") + "<br>Mobilnummer: "
+ sessionStorage.getItem("tel"); //Oplysninger fra tidligere bliver taget fra session storage
    