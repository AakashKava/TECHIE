// ***********FOR SCROLL UP BTN******
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// FOR NAVIGATION
window.addEventListener("scroll", function () {
  var nav = document.querySelector("#navigation");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// FOR TESTIMONIALS
$(".owl-carousel").owlCarousel({
  loop: false,
  autoPlay: true,
  margin: 10,
  nav: false,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1024: {
      items: 1,
    },
  },
});

// FOR COUNTER
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// FOR ACCORDIAN / FAQ
let toggles = document.getElementsByClassName("faq-toggle");
let contentDiv = document.getElementsByClassName("faq-content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      // toggles[i].style.color = "#5846f9";
      icons[i].classList.remove("fa-angle-up");
      icons[i].classList.add("fa-chevron-down");
    } else {
      contentDiv[i].style.height = "0px";
      // toggles[i].style.color = "#5846f9";
      icons[i].classList.remove("fa-chevron-down");
      icons[i].classList.add("fa-angle-up");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        // toggles[j].style.color = "#5846f9";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-angle-up");
      }
    }
  });
}
