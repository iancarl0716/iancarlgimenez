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
clearInterval(3000);


// $("#submitButton").click( function (){

//     console.log("hello");
// });

$("#portfolio-tab a").click(function (e) {
    
    e.preventDefault();
   $(this).tab("show");
   
});

$(".portfolio-modal").on("hidden.bs.modal", function() {

    // var _this = this, 
    // youtubeSrc = $(_this).find("iframe").attr("src");

    // if($(_this).find("iframe").length > 0) {
    //     $(_this).find("iframe").attr("src","");
    //     $(_this).dind("iframe").attr("src", youtubeSrc);
    // }

    var memory = $(this).html();
    $(this).html(memory); 
})