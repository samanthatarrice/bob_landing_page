const menu = document.querySelector('.fa-bars');
const dropdown = document.querySelector('.nav-links');
const hide = document.querySelector('.hide');

document.body.addEventListener('click', function(e) {
  if (e.target === menu) {
    dropdown.classList.toggle('hide');
  } else {
    dropdown.classList.add('hide');
  } 
})

window.addEventListener('load', function() {
  dropdown.classList.add('hide');
})

window.addEventListener('resize', function() {
  dropdown.classList.add('hide');
})