const links = document.querySelectorAll('.header__link');
const anchors = document.querySelectorAll('section[id]');
const closeNav = document.querySelector('.nav__toggle');
const buttonLeft =document.querySelector('')
let curruntIndex =0;

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


const templateSlide = document.getElementById('place-card').content;
const activeSlide = templateSlide.cloneNode(true);

function printSlide(a) {
  activeSlide.querySelector('.study-projects__link').href = a.linkProject;
  activeSlide.querySelector('.study-projects__link').style.backgroundImage = `url(${a.linkImg})`;
  activeSlide.querySelector('.study-projects__title').textContent = a.title;
  activeSlide.querySelector('.study-projects__paragraf').textContent =a.paragraf;
  console.log(`url(${a.linkImg})`);
  document.querySelector('.study-projects__link').replaceWith(activeSlide);
}


printSlide(myProgect[curruntIndex]);