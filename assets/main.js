
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  //dark mode 

  let newsBoxP = document.querySelector('.news__card-wrapper')

  document.querySelector('#btn').addEventListener('click', () => {
      document.body.classList.toggle("dark-mode");
      newsBoxP.classList.toggle("dark-mode");
  })

  //cookies popup 

  const cookieWrap = document.querySelector('.cookies__wrapper'),
    buttons = document.querySelectorAll ('.cookie__button')

  function execCode () {
    cookieWrap.classList.add('show');
  }
  
  window.addEventListener('load', execCode);