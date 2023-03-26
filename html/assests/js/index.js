// Menu fade in/out
const overlay = document.querySelector('.overlay')
const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.sidebar-close')
const wrap = document.querySelector('.wrap')

menuBtn.addEventListener('click', showMenu)
closeBtn.addEventListener('click', hideMenu)

function showMenu () {
  overlay.classList.add('overlay-open')
  overlay.classList.remove('overlay-close')
}

function hideMenu () {
  overlay.classList.remove('overlay-open')
  overlay.classList.add('overlay-close')
}

wrap.addEventListener ('click', hideMenu)

// scroll
const reason = document.querySelector('.section-reason');
const reliable = document.querySelector('.section-reliable');
const repair = document.querySelector('.section-repair');
const service = document.querySelector('.section-service');
const inside = document.querySelector('.section-inside');
const message = document.querySelector('.section-message');
const professional = document.querySelector('.section-professional');
const expert = document.querySelector('.section-expert');
const contact = document.querySelector('.section-contact');

window.addEventListener("scroll", function(event) {
  var scrolldown = window.pageYOffset 
  if (scrolldown >= 200) {
    reason.classList.add('fade-in')
  }
  else  reason.classList.remove('fade-in')
  console.log(scrolldown)

  if (scrolldown >= 1100) {
    reliable.classList.add('fade-in')
  }
  else  reliable.classList.remove('fade-in')
  console.log(scrolldown)

  if (scrolldown >= 1700) {
    repair.classList.add('fade-in')
  }
  else  repair.classList.remove('fade-in')
  console.log(scrolldown)
  
  if (scrolldown >= 3300) {
    service.classList.add('fade-in')
  }
  else  service.classList.remove('fade-in')
  console.log(scrolldown)

  if (scrolldown >= 3900) {
    inside.classList.add('fade-in')
  }
  else  inside.classList.remove('fade-in')
  console.log(scrolldown)

  if (scrolldown >= 4500) {
    message.classList.add('fade-in')
  }
  else  message.classList.remove('fade-in')
  console.log(scrolldown)

  if (scrolldown >= 5500) {
    professional.classList.add('fade-in')
  }
  else  professional.classList.remove('fade-in')
  console.log(scrolldown)

  if (scrolldown >= 6200) {
    expert.classList.add('fade-in')
  }
  else  expert.classList.remove('fade-in')
  console.log(scrolldown)

  if (scrolldown >= 7000) {
    contact.classList.add('fade-in')
  }
  else  contact.classList.remove('fade-in')
  console.log(scrolldown)
})



