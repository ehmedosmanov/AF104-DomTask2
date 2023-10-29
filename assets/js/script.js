const burgerMenu = document.querySelector('.burger')
const barsIcon = document.querySelector('.fa-bars')
const closeIcon = document.querySelector('.fa-x')
const navbarDrop = document.querySelector('.navbar-items')
const accordionHeaders = document.querySelectorAll('.accordion-header')

//Burger Menu
burgerMenu.addEventListener('click', e => {
  barsIcon.classList.toggle('active')
  closeIcon.classList.toggle('active')
  navbarDrop.classList.toggle('is-active')
})

//Accordion
accordionHeaders.forEach(header => {
  header.addEventListener('click', e => {
    const accordionTitle = header.nextElementSibling
    const accordionIcon = header.querySelector('.fa-arrow-up')
    accordionTitle.classList.toggle('show')
    accordionIcon.classList.toggle('rotate')
    console.log(accordionTitle)
    accordionHeaders.forEach(otherHeader => {
      const otherTitle = otherHeader.nextElementSibling
      const otherIcon = otherHeader.querySelector('.fa-arrow-up')
      if (otherTitle !== accordionTitle) {
        otherTitle.classList.remove('show')
        otherIcon.classList.remove('rotate')
      }
    })
  })
})
