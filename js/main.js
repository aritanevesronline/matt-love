function showGalleryTab() {
    const workTab = document.querySelector('.gallery-tab');
    workTab.style.display = 'block';
}

function hideGalleryTab() {
    const workTab = document.querySelector('.gallery-tab');
    workTab.style.display = 'none';
}

function showNoteTab() {
    const workTab = document.querySelector('.note-tab');
    workTab.style.display = 'block';
}

function hideNoteTab() {
    const workTab = document.querySelector('.note-tab');
    workTab.style.display = 'none';
}

function showCaseTab() {
    const workTab = document.querySelector('.case-tab');
    workTab.style.display = 'block';
}

function hideCaseTab() {
    const workTab = document.querySelector('.case-tab');
    workTab.style.display = 'none';
}

function showGermanTab() {
    const workTab = document.querySelector('.german-tab');
    workTab.style.display = 'block';
}

function hideGermanTab() {
    const workTab = document.querySelector('.german-tab');
    workTab.style.display = 'none';
}

function showCountTab() {
    const workTab = document.querySelector('.count-tab');
    workTab.style.display = 'block';
}

function hideCountTab() {
    const workTab = document.querySelector('.count-tab');
    workTab.style.display = 'none';
}

//FADE IN

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})


//COUNTDOWN

var countDownDate = new Date("July 12, 2025 22:45:00").getTime();
var togetherCount = new Date("July 20, 2025 6:15:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    var togetherTime = togetherCount - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0 & togetherTime > 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = "FINALLY!!";
    } else if (distance < 0 & togetherTime < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = "Awaiting new date..."
    }

    console.log(distance);
    console.log(togetherTime);
}, 1000);
