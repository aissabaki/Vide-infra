const myNav = document.getElementById('nav-bar'),
     myNavLink = document.querySelectorAll('#navLink'),
     openBtn = document.getElementById('open'),
     closeBtn = document.getElementById('close');

openBtn.addEventListener('click', function () {
  myNav.classList.add('show');
});
closeBtn.addEventListener('click', function () {
  myNav.classList.remove('show');
});
myNavLink.forEach((link) => {
  link.addEventListener('click', function () {
    myNav.classList.remove('show');
  });
});

document.addEventListener('click', function (e) {
  if (e.target.id !== 'open') {
    myNav.classList.remove('show');
  }
})

/* collapsible */

const coll = document.getElementsByClassName('collapsible');

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    const arrow = this.lastElementChild;
    const content = this.nextElementSibling;
    
    if (content.style.display == 'block') {
      content.style.display = 'none'
      arrow.classList.remove('fa-arrow-up');
      arrow.classList.add('fa-arrow-down');
    } else {
      content.style.display = 'block'
      arrow.classList.remove('fa-arrow-down');
      arrow.classList.add('fa-arrow-up');
    }
  });
}


/* home title */
const homeTitle = document.querySelector('.home-sec-title')


/* Drop down list */

const expertiseDetails = document.querySelector('.expertise-details'),
      listItems = document.querySelectorAll('.expertise-item'),
      expertiseImage = document.querySelector('#expertiseImg'),
      expertiseBtn = document.querySelector('#expertiseBtn'),
      expertiseList = document.querySelector('.expertise-list');

expertiseBtn.addEventListener('mouseover', function () {
  expertiseDetails.classList.add('show-exp');
  expertiseList.classList.add('fadeIn');
});
expertiseDetails.addEventListener('mouseover', function () {
  expertiseDetails.classList.add('show-exp');
});
expertiseDetails.addEventListener('mouseout', function () {
  expertiseDetails.classList.remove('show-exp');
  expertiseList.classList.remove('fadeIn');
});

/* render deffrent image on each hover */
listItems.forEach((item) => {
  item.addEventListener('mouseover', function () {
    let randomNum = Math.floor(Math.random() * 9);
    expertiseImage.src = `assets/media/images/expertise/0${randomNum}.png`;
  });
});


/* change header color relative to the section color */

const sections = document.querySelectorAll('.section'),
      header = document.querySelector('.header'),
      logo = document.querySelector('.logo a span'),
      links = document.querySelectorAll('.nav-links a');

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  const headerRect = header.getBoundingClientRect();
  return (
    (rect.top <= headerRect.bottom  &&
    rect.bottom >= headerRect.bottom )
  );
}

window.addEventListener('scroll', function () {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      
      header.style.backgroundColor = `${section.dataset.color}`
      if (section.dataset.color == '#191b1d') {
        header.style.color = "white"
        logo.style.color = "white"
        expertiseList.style.color = "black"
        links.forEach((link) => link.style.color = "white")
        openBtn.style.backgroundColor = 'white'
      } else {
        header.style.color = "#191b1d"
        links.forEach((link) => link.style.color = "black")
        openBtn.style.backgroundColor = ''
        logo.style.color = "black"
      }
  }
  })
  
})

/* video zoom */

const myVideo = document.querySelector('.home-section-video video'),
      myVideoZoom = document.querySelector('.video-zoom'),
      CloseVideo = document.querySelector('.close-video');


myVideo.addEventListener('click', function () {
  myVideoZoom.style.display = 'block'
})
CloseVideo.addEventListener('click', function () {
  myVideoZoom.style.display = 'none'
})

/* slider */
const slider = document.querySelector('.slider-content'),
      sliderBtn = document.querySelector('.slider-btns');


/* drag to slide */
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

/* click to slide */
sliderBtn.addEventListener('click', function (e) {
  let id = e.target.id
  if (id == 'left') {
      slider.scrollLeft -= 300
  }
  else {
    slider.scrollLeft += 300
  }
})



