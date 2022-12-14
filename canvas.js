const nasheeds = document.getElementsByClassName('audio');
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const canvas = document.getElementById('canvas');

function rfAudio() {
    for (let a = 0; a < nasheeds.length; a++ ) {
        nasheeds[a].pause();
        nasheeds[a].currentTime = 0;
    }
    // canvas.style.display = "block";
    
    let num = random(1,14);
    document.getElementsByClassName('audio')[num].play();
    // document.getElementsByClassName('audio')[num].addEventListener('ended',function() {
    //     // canvas.style.display = "none";
    // });
}





