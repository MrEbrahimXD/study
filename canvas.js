const intro = document.getElementById("swup");

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function rfAudio() {
    let num = random(1,14);
    document.getElementsByClassName('audio')[num].play();
    document.getElementsByClassName('audio')[num].addEventListener('ended',function() {
    });
}
