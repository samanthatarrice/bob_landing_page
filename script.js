const menu = document.querySelector('.fa-bars');
const dropdown = document.querySelector('.nav-links');
const hide = document.querySelector('.hide');
const header = document.querySelector('header');

document.body.addEventListener('click', function(e) {
  if (e.target === menu) {
    dropdown.classList.toggle('hide');
    header.classList.toggle('header-big-margin');
  } else {
    dropdown.classList.add('hide');
    header.classList.remove('header-big-margin');
  } 
})

document.addEventListener('scroll', function() {
  dropdown.classList.add('hide');
  header.classList.remove('header-big-margin');
})

window.addEventListener('load', function() {
  dropdown.classList.add('hide');
  header.classList.remove('header-big-margin');
})

window.addEventListener('resize', function() {
  dropdown.classList.add('hide');
  header.classList.remove('header-big-margin');
})