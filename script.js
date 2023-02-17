/*header menu*/
function headerMenu() {
  const headerMenuButton = document.querySelector('.header__menu-btn');
  const body = document.querySelector('body');
  const menu = document.querySelector('.menu');

  headerMenuButton.addEventListener('click', function () {
    headerMenuButton.classList.toggle('active');
    body.classList.toggle('active');
    menu.classList.toggle('active');
  })
}

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    /* autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },*/
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}


function preguntasItemTitles() {
  const preguntasItemTitles = document.querySelectorAll(".preguntas__item-title");
  preguntasItemTitles.forEach((preguntasItemTitle) => {
    preguntasItemTitle.addEventListener("click", () => {
      preguntasItemTitle.parentElement.classList.toggle("preguntas__list-item_active");
      const preguntasItemText = preguntasItemTitle.nextElementSibling
      if (preguntasItemText.style.maxHeight) {
        document.querySelectorAll(".preguntas__item-text ").forEach((preguntasItemText) => preguntasItemText.style.maxHeight = null)
      } else {
        document.querySelectorAll(".preguntas__item-text ").forEach((preguntasItemText) => preguntasItemText.style.maxHeight = null)
        preguntasItemText.style.maxHeight = preguntasItemText.scrollHeight + 'px'
      }
    });
  })
}

headerMenu()
swiper()
preguntasItemTitles()







