import fslightbox from "fslightbox";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";


if (document.querySelector(".js-hero-slider")) {
  const heroSlider = new Swiper(".js-hero-slider", {
    slidesPerView: 'auto',
    spaceBetween: 10,
  });
}

if (document.querySelector(".js-categories-slider")) {
  const categoriesSlider = new Swiper(".js-categories-slider", {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      768: {
        lidesPerView: 'auto',
        spaceBetween: 0
      }
    }
  });
}

if (document.querySelector(".js-similar-slider")) {
  const similarSlider = new Swiper(".js-similar-slider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".js-similar-slider-next",
      prevEl: ".js-similar-slider-prev",
    },
    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 14,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 20,
      }
    }
  });
}

const menu = document.querySelector(".js-menu");

if (menu) {
  const menuOpenBtn = document.querySelector('.js-menu-open');
  const menuCloseBtn = document.querySelector('.js-menu-close');

  menuOpenBtn.addEventListener("click", openMenu);
  menuCloseBtn.addEventListener("click", closeMenu);
}

function openMenu() {
  menu.classList.add("is-open");
}

function closeMenu() {
  menu.classList.remove("is-open");
}


const modalBtn = document.querySelectorAll('.js-modal-open');

if(modalBtn.length) {
  const modals = document.querySelectorAll('.js-modal')
  const modalBtnClose = document.querySelectorAll('.js-modal-close');
  const modalOverlay = document.querySelectorAll('.js-modal-overlay');

  modalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      let modalId = btn.dataset.modal;
      document.querySelector(`.js-modal[data-modal="${modalId}"]`).classList.add('is-open');
    });
  });

  modalBtnClose.forEach((btn) => {
    btn.addEventListener('click', () => {
      modals.forEach((modal) => {
        modal.classList.remove('is-open');
      })
    });
  });
  modalOverlay.forEach((overlay) => {
    overlay.addEventListener('click', () => {
      modals.forEach((modal) => {
        modal.classList.remove('is-open');
      })
    });
  });
}

const productMoreBlock = document.querySelector('.js-product-more-info');

if(productMoreBlock) {
  const productMoreBtn = document.querySelector('.js-product-more-toggle');

  productMoreBtn.addEventListener('click', () => {
    productMoreBtn.classList.toggle('is-show')
    productMoreBlock.classList.toggle('is-open');
  });
}

const categoriesBlock = document.querySelectorAll('.js-categories-block');

if(categoriesBlock || window.matchMedia("(max-width: 992px)").matches) {
  categoriesBlock.forEach((block) => {
    block.addEventListener('click', function() {
      block.classList.toggle('is-open');
    })
  });
}

const map = document.querySelector('.js-map');

if(map) {

  const mapScript = document.createElement("script");
  mapScript.src = 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU';
  document.body.appendChild(mapScript);

  mapScript.addEventListener("load", () => {
    ymaps.ready(function () {
      var myMap = new ymaps.Map(map, {
        center: [59.938049, 30.318556], // Координаты метки в Санкт-Петербурге
        zoom: 13
      });
    
      var myPlacemark = new ymaps.Placemark([59.938049, 30.318556], {
        hintContent: 'Метка в Санкт-Петербурге'
      }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/map-pin.svg',
        iconImageSize: [28, 32],
        iconImageOffset: [-14, -14]
      });
    
      myMap.geoObjects.add(myPlacemark);
    }); 
  });
}

