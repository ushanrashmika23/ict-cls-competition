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


function LoadDescription(id) {
    let url = "description.html " + id;
    $(".description").load(url);
}

function LoadContent(page) {
    $("#place-content").load(page);
}