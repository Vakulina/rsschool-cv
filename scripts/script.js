const links = document.querySelectorAll('.header__link');
const anchors = document.querySelectorAll('section[id]');
const closeNav = document.querySelector('.nav__toggle')

function highlight(arr) {
  arr.forEach((element,index) => {
    element.onclick = function() {
     anchors[index].classList.add('active-section');
     setTimeout( function() { anchors[index].classList.remove('active-section');}, 1600);
    }
  })
}
highlight(links);
links.forEach(element => {
  element.addEventListener('click', function () {
  closeNav.checked = false;

})
});
