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



/*"#portfolio-tab a").click(function (e) {
    
    e.preventDefault();
   $(this).tab("show");
   
});*/

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

// Handle Contact Form Submission and Redirect
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevents the default Formspree redirect
        
        const formData = new FormData(contactForm);
        const submitButton = document.getElementById('submitButton');
        
        // 1. Create a loading state (Spinner + Text)
        const originalContent = submitButton.innerHTML;
        submitButton.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> SENDING...`;
        submitButton.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // 2. SUCCESS: Redirect to your specific GitHub URL
                window.location.href = "https://iancarl0716.github.io/iancarlgimenez/thanks.html";
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            // 3. ERROR: Reset button so they can try again
            alert("Oops! There was a problem. Please try again.");
            submitButton.innerHTML = originalContent;
            submitButton.disabled = false;
        }
    });
}

// This triggers the fade-in for any page with the .thanks-page class
window.addEventListener('DOMContentLoaded', () => {
    const thanksBody = document.querySelector('.thanks-page');
    if (thanksBody) {
        thanksBody.classList.add('fade-in');
    }
});

// Close the responsive menu when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
    // Paste the burger menu auto-close code here!
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navToggler = document.querySelector('.navbar-toggler');
            const navCollapse = document.querySelector('#navbarResponsive');
            
            if (window.getComputedStyle(navToggler).display !== 'none' && navCollapse.classList.contains('show')) {
                navToggler.click();
            }
        });
    });
});

$(document).ready(function() {
  // Select all links with hashes
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-bs-toggle="pill"]').click(function(event) {
   // 🔥 FIX: Only run this custom jQuery animation on Desktop screens!
    if (window.innerWidth > 991) {
      
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 70 // This stays for desktop!
          }, 800, function() { 
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
              return false;
            } else {
              $target.attr('tabindex','-1'); 
              $target.focus(); 
            };
          });
        }
      }
      
    } 
    // On mobile, doing nothing here lets the browser read your CSS "scroll-padding-top" natively!
  });
});

// ==========================================
// 3. PORTFOLIO TABS: CUSTOM CROSS-FADE
// ==========================================
$(document).ready(function() {
    $('#portfolio-tab .nav-link').click(function(e) {
        e.preventDefault();
        
        // 1. Get target div ID
        var target = $(this).attr('data-bs-target');
        
        // 2. Remove active class from all pills and add to this one
        $('#portfolio-tab .nav-link').removeClass('active');
        $(this).addClass('active');
        
        // 3. Fade out the visible pane, then fade in the new target pane
        $('#pills-tabContent .tab-pane:visible').animate({ opacity: 0 }, 200, function() {
            $(this).hide(); // Hide the old one completely
            $(target).css('opacity', 0).show().animate({ opacity: 1 }, 300); // Fade in the new one!
        });
    });
});

const keepBookIDs = ['4', '6', '9'];

document.querySelectorAll('.portfolio-item[data-type="book-cover"]').forEach(el => {
  const id = el.dataset.id;

  if (!keepBookIDs.includes(id)) {
    el.closest('.col-md-6').style.display = 'none';
  }
});