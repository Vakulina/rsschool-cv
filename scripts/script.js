const links = document.querySelectorAll('.header__link');
const anchors = document.querySelectorAll('section[id]');
const closeNav = document.querySelector('.nav__toggle');
const buttonLeft = document.querySelector('.arrow_left');
const buttonRight = document.querySelector('.arrow_right');
let curruntIndex = 1;

var once = false;
const changeCollage = () => {
  if ((!once) && (window.screen.width <= 700)) {

    printSlideMob();
    once = true;
  }
}



window.addEventListener('touchstart', changeCollage);
window.addEventListener('resize', (evt) => {

  if ((evt.target.innerWidth > 700) && (!document.querySelector('.study-projects__link'))) {
    console.log('sdfsdf');
    if (document.querySelector('.study-project__main-screen_mob')) {
      document.querySelector('.study-project__main-screen_mob').remove();
    }
    printSlide2(myProgect[curruntIndex]);
    window.addEventListener('touchstart', changeCollage);
    document.querySelector('.buttons').style.display = 'flex';
  }
});
const printSlide2 = (a) => {

  const activeSlide = templateSlide.cloneNode(true);
  activeSlide.querySelector('.study-projects__link').href = a.linkProject;
  activeSlide.querySelector('.study-projects__link').style.backgroundImage = `url(${a.linkImg})`;
  activeSlide.querySelector('.study-projects__title').textContent = a.title;
  activeSlide.querySelector('.study-projects__paragraf').textContent = a.paragraf;
  document.querySelector('.code-example__title').append(activeSlide);

}
function highlight(arr) {
  arr.forEach((element, index) => {
    element.onclick = function () {
      anchors[index].classList.add('active-section');
      setTimeout(function () { anchors[index].classList.remove('active-section'); }, 1600);
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
const mobileCollage = document.getElementById('place-card_mob').content;
const popupTemplate = document.getElementById('image-popup_mob').content;

function printSlide(a) {
  const activeSlide = templateSlide.cloneNode(true);
  activeSlide.querySelector('.study-projects__link').href = a.linkProject;
  activeSlide.querySelector('.study-projects__link').style.backgroundImage = `url(${a.linkImg})`;
  activeSlide.querySelector('.study-projects__title').textContent = a.title;
  activeSlide.querySelector('.study-projects__paragraf').textContent = a.paragraf;
  document.querySelector('.study-projects__link').replaceWith(activeSlide);
}


const openPopup = (a, str) => {
  const popup = popupTemplate.cloneNode(true);
  popup.querySelector('.popup-paragraf').href = a.linkProject;
  popup.querySelector('.popup-img').style.backgroundImage = `url(${a.linkImg})`;
  popup.querySelector('.popup-paragraf').textContent = `Открыть проект:  ${a.title}`;
  document.querySelector(str).after(popup);
  swipedetect();
  const btnBack = document.querySelector('.button-back');
  btnBack.addEventListener('click', () => {

    document.querySelector('.popup-container').remove();
    document.querySelector('.button-back').remove();
  });
}

const listNavLinks = document.querySelectorAll('.header__item');
listNavLinks.forEach((el) => {
  el.addEventListener('click', () => {
    if (document.querySelector('.study-project__main-screen_mob')) {
      document.querySelector('.popup-container').remove();
      document.querySelector('.button-back').remove();
    }
  })
})


const changeSlideMob = (a, str) => {
  const popup = popupTemplate.cloneNode(true);
  popup.querySelector('.popup-paragraf').href = a.linkProject;
  popup.querySelector('.popup-img').style.backgroundImage = `url(${a.linkImg})`;
  popup.querySelector('.popup-paragraf').textContent = `Открыть проект:  ${a.title}`;
  document.querySelector(str).replaceWith(popup);
  swipedetect();
}


function printSlideMob() {
  const activeSlide = mobileCollage.cloneNode(true);
  document.querySelector('.buttons').style.display = 'none';
  document.querySelector('.study-projects__link').replaceWith(activeSlide);
  const collage = document.querySelector('.study-project__main-screen_mob');
  collage.addEventListener('click', () => {
    openPopup(myProgect[curruntIndex], '.study-project__main-screen_mob');
  });
}

function changeCurrentSlide(n) {
  curruntIndex = (n + myProgect.length) % myProgect.length;
}

printSlide(myProgect[curruntIndex]);
buttonLeft.addEventListener('click', function () {
  curruntIndex--;

  changeCurrentSlide(curruntIndex);
  printSlide(myProgect[curruntIndex]);
});

buttonRight.addEventListener('click', function () {
  curruntIndex++;

  changeCurrentSlide(curruntIndex);
  printSlide(myProgect[curruntIndex]);
});



const swipedetect = () => {
  var el = document.querySelector('.popup-img');

  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 80;
  let restraint = 50;
  let allowedTime = 300;



  el.addEventListener('touchstart', function (e) {
    {
      startX = e.changedTouches[e.changedTouches.length - 1].pageX;
      startY = e.changedTouches[e.changedTouches.length - 1].pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    }
  }, false);

  el.addEventListener('touchend', function (e) {

    distX = e.changedTouches[e.changedTouches.length - 1].pageX - startX;
    distY = e.changedTouches[e.changedTouches.length - 1].pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if ((distX > 0)) {
          changeCurrentSlide(curruntIndex + 1);
          changeSlideMob(myProgect[curruntIndex], '.popup-container');
        }
        else {
          {
            changeCurrentSlide(curruntIndex - 1);
            changeSlideMob(myProgect[curruntIndex], '.popup-container');
          }
        }
      }
      if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
        document.querySelector('.popup-container').remove();
      }
    }


    e.preventDefault();
  }, false);

}

