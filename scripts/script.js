const links = document.querySelectorAll('.header__link');
const anchors = document.querySelectorAll('section[id]');
const closeNav = document.querySelector('.nav__toggle');
const buttonLeft =document.querySelector('.arrow_left');
const buttonRight =document.querySelector('.arrow_right');
let curruntIndex = 1;

var once = false;
const changeCollage=()=>{
  if ((!once)&&(window.screen.width<=770)) {
    console.log('dsdf');
      printSlideMob();
      once=true;
  }
}


 
  window.addEventListener('touchstart', changeCollage );





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
const mobileCollage= document.getElementById('place-card_mob').content;
const popupTemplate =document.getElementById('image-popup_mob').content;


function printSlide(a) {
  const activeSlide = templateSlide.cloneNode(true);
  activeSlide.querySelector('.study-projects__link').href = a.linkProject;
  activeSlide.querySelector('.study-projects__link').style.backgroundImage = `url(${a.linkImg})`;
  activeSlide.querySelector('.study-projects__title').textContent = a.title;
  activeSlide.querySelector('.study-projects__paragraf').textContent =a.paragraf;
  document.querySelector('.study-projects__link').replaceWith(activeSlide);
}


const openPopup = (a)=> {
  const popup = popupTemplate.cloneNode(true);
  popup.querySelector('.popup-paragraf').href = a.linkProject;
  popup.querySelector('.popup-img').style.backgroundImage = `url(${a.linkImg})`;
  popup.querySelector('.popup-paragraf').textContent =`Открыть проект:  ${a.title}`;
  document.querySelector('.study-project__main-screen_mob').replaceWith(popup);
  popup.addEventListener()

}

function printSlideMob() {
  const activeSlide = mobileCollage.cloneNode(true);
  document.querySelector( '.buttons').remove();
  document.querySelector('.study-projects__link').replaceWith(activeSlide);
  const collage= document.querySelector('.study-project__main-screen_mob');
  collage.addEventListener('click', () =>{
    openPopup(myProgect[curruntIndex]);
  });
}




function changeCurrentSlide(n) {
	curruntIndex = (n + myProgect.length) % myProgect.length;
}

printSlide(myProgect[curruntIndex]);


buttonLeft.addEventListener('click', function () {
  curruntIndex --;
 
  changeCurrentSlide(curruntIndex);
  printSlide(myProgect[curruntIndex]);
});
buttonRight.addEventListener('click', function () {
  curruntIndex ++;

  changeCurrentSlide(curruntIndex);
  printSlide(myProgect[curruntIndex]);
});
if (once) {
  
}

