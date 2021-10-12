const dinevalg = document.getElementById("dinevalg");
const modelnavn = document.getElementById("modelnavn");
const totalprisnu = document.getElementById("totalprisnu");
const prisforbilen = document.getElementById("prisforbilen");
const udstyrvalgt = document.getElementById("udstyrvalgt");
const udstyrliste = JSON.parse(sessionStorage.getItem("udstyr"));
const afhentingogaflevering = document.getElementById("afhentningogaflevering");


for(const udstyr of udstyrliste){
    udstyrvalgt.insertAdjacentHTML("beforeend", `${udstyr}<br>`);
}

modelnavn.innerHTML = sessionStorage.getItem("modelnavn");
prisforbilen.innerHTML = "Prisen for udlejning af bilen er " + sessionStorage.getItem("biludlejning");
afhentingogaflevering.innerHTML = "Du har valgt at afhente bilen den: " + sessionStorage.getItem("afhentningen") + 
"<br> og du vil aflevere bilen den: " + sessionStorage.getItem("afleveringen") + "<br>Antal lejedage: " + sessionStorage.getItem("lejedagene");


const formular = document.getElementById("dineoplysninger");

formular.addEventListener("submit", function (e){
    e.preventDefault();
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
