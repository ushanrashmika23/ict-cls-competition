// alert()

function SelectRad(radClass, activeRadId) {
    let cRads = document.querySelectorAll(radClass);
    for (let i = 1; i < 5; i++) {
        cRads[i].checked = false;
    }
    document.getElementById(activeRadId).checked = true;
}

function ChangeCard(page) {
    $("#c-panel").load(page);

}