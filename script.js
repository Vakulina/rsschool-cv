const links = document.querySelectorAll('.header__link');
const anchors = document.querySelectorAll('section[id]');

function highlight(arr) {
  arr.forEach((element,index) => {
    element.onclick = function() {
     anchors[index].classList.add('active-section');
     setTimeout( function() { anchors[index].classList.remove('active-section');}, 1600);
    }
  })
}
highlight(links);