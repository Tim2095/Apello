const header = document.querySelector('.header')
const mobBtnOpen = document.querySelector('.mobile-btn-open')
const mobBtnClose = document.querySelector('.mobile-btn-close')

mobBtnOpen.addEventListener('click', () => {
  header.classList.add('nav-open')
})

mobBtnClose.addEventListener('click', () => {
  header.classList.remove('nav-open')
})