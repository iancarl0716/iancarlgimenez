var i = 0;
var txt = 'Graphic Artist - Web Designer - UI/UX Designer'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("my-roles").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    
}

setInterval(typeWriter,3000);