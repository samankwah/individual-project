var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Select all elements with the class 'card-container'
const cardContainers = document.querySelectorAll(".card-container");

// Iterate over each element and add event listeners for mouseover and mouseout
cardContainers.forEach((cardContainer) => {
  cardContainer.addEventListener("mouseover", () => {
    cardContainer.style.backgroundColor = "#d6ffff"; // change to the desired color on hover
    const h3 = cardContainer.querySelector("h3");
    if (h3) {
      h3.style.color = "#007A5C"; // change to the desired text color on hover
    }
    const arrow = cardContainer.querySelector(".card-arrow");
    if (arrow) {
      arrow.style.backgroundColor = "#007A5C";
    }
    const arrowIcon = cardContainer.querySelector("i");
    if (arrowIcon) {
      arrowIcon.style.color = "#fff";
    }
  });

  cardContainer.addEventListener("mouseout", () => {
    cardContainer.style.backgroundColor = "#fff"; // revert to the original color
    const h3 = cardContainer.querySelector("h3");
    if (h3) {
      h3.style.color = "#000"; // revert to the original text color
    }
    const arrow = cardContainer.querySelector(".card-arrow");
    if (arrow) {
      arrow.style.backgroundColor = "#fff";
    }
    const arrowIcon = cardContainer.querySelector("i");
    if (arrowIcon) {
      arrowIcon.style.color = "#000";
    }
  });
});

$(document).ready(function () {
  $(".clientele-slideshow").slick({
    dots: true, // Display dots for navigation
    infinite: true, // Infinite looping
    speed: 800, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
  });
});
