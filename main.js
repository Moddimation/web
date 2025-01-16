window.addEventListener("load", () => {
    document.body.classList.add("loaded");
}); // Für Zustände und Übergänge

function loadPage(name) {
    const url = name + ".html";
    window.location.href = url;
} // Abkürzung Seite zu laden

function loadPageFull(name) {
    window.location.href = url;
} // Abkürzung Seite zu laden

function btnSetPage(nameButton, namePage) {
    document.getElementById(nameButton).addEventListener('click', function() {
        loadPage(namePage);
    });
} // Abkürzung Knopf zu Seite binden

function btnPlaySnd(nameButton, nameSound) {
    document.getElementById(nameButton).addEventListener('click', function() {
        document.getElementById(nameSound).play()
    })
} // Abkürzung Knopf zu Sound binden

function elementToggleVisible(nameElement) {
    var x = document.getElementById(nameElement);
    if(x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} // Sichtbarkeit von Element ändern

btnSetPage("btn-back", "index");