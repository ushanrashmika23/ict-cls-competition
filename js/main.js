// alert()

function SelectRad(radClass, activeRadId) {
    let cRads = document.querySelectorAll(radClass);
    for (let i = 1; i < 5; i++) {
        cRads[i].checked = false;
    }
    document.getElementById(activeRadId).checked = true;
}

function ChangeCard(name = "abc") {
    let allCards = document.querySelectorAll("card-panel");
    for (const element of allCards) {
        console.count("hide");
    }
}