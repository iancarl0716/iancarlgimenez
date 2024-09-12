// var i = 0;
// var txt = 'Graphic Artist - Web Designer - UI/UX Designer'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

/* function typeWriter() {
    if (i < txt.length) {
        document.getElementById("my-roles").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    
} */

/* setInterval(typeWriter,3000);
clearInterval(3000); */



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

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};