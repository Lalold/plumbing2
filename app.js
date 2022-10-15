  $('.categories__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 857,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
  
  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 857,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
    ]
  })


const faqItem = document.querySelectorAll('.faq__item')
const burgerIcon = document.querySelector('.burger__icon_block')
const burgerMenu = document.querySelector('.burger__menu')
const burgerLink = document.querySelectorAll('.burger__link')

for (let i = 0; i < faqItem.length; i++) {
  faqItem[i].addEventListener('click', function () {
    faqItem[i].classList.toggle('active')
  })
}

for (let i = 0; i < burgerLink.length; i++) {
  burgerLink[i].addEventListener('click', function () {
    burgerIcon.classList.toggle('active')
    burgerMenu.classList.toggle('active')
  })
}

burgerIcon.addEventListener('click', function () {
  burgerIcon.classList.toggle('active')
  burgerMenu.classList.toggle('active')
})
