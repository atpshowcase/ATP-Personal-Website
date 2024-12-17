'use strict';

$(window).on("load", function () {
  setInterval(function () {
    $(".avatar-box").css("animation", "flip-avatar 1s ease-in-out"); // Apply flip animation

    // After the animation is done, reset it to be ready for the next flip
    setTimeout(function () {
      $(".avatar-box").css("animation", ""); // Reset the animation
    }, 1000); // Reset after 1 second (same as the animation duration)
  }, 10000); // Trigger the flip every 10 seconds

  setTimeout(function () {
    // Open section1 with a smooth "rise" transition
    $("#section1").addClass("open"); // Add the class to trigger the rise effect
    
    $(".section2").fadeIn(2000, function () {
      // Once section2 is visible, trigger the rise animation for section2
      $(this).addClass("loaded"); // Add the "loaded" class to trigger the "rise"
      
      // Slide up section1 and remove it from the DOM
      $("#section1").slideUp(1000, function () {
        $(this).remove(); // Remove section1 after slide-up
      });
    });

    // Dynamically load the main style.css and remove preloader.css
    if (!$('link[href="./assets/css/style.css"]').length) {
      $("head").append('<link rel="stylesheet" href="./assets/css/style.css" type="text/css">');
    }

    $("#particles-js").fadeIn(100, function () {
      particlesJS.load('particles-js', '', function () {
        console.log('particles.js loaded');
      });

      // Force a redraw by resizing the canvas after particles are loaded
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    });
    
    $('link[href="./assets/css/preloader.css"]').remove();
  }, 1000); // Delay before starting section transition (increased for smoothness)

  // Smoothly load and show particles.js and section3
  setTimeout(function () {

    $(".section3").fadeIn(2000); // Smooth fade in for section3
    $(".section3").addClass("loaded"); // Trigger the "rise" animation for section3
  }, 2500); // Adjust delay to ensure smooth flow
});




// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


