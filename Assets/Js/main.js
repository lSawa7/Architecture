//menu button
let menu = document.querySelector(".toggle");
menu.onclick = () => {
  document.querySelectorAll(".toggle span").forEach((e) => {
    e.classList.toggle("tog");
  });
  document.querySelector(".links").classList.toggle("height");
  document.querySelector(".links ul").style.opacity = "1";
};

// let drop = document.querySelectorAll('header .links .drop-M');
// drop.forEach((e)=>{
//   e.addEventListener('click',()=>{
//     this.style.height = 'auto'
//   })
//   document.querySelector('header .links .drop-M li').style.opacity = '1'
// })

//Right Bar
let settingBox = document.querySelector(".setting-box i");
settingBox.onclick = () => {
  document.querySelector(".setting-box").classList.toggle("open");
};
//custsome color
let colors = document.querySelectorAll(".setting-box .lists ul li");
colors.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});

//Counter
let idS = document.querySelector(".section-count");
let counter = document.querySelectorAll(".section-count p");
let started = false;
function counterF(el) {
  var goal = el.dataset.goal;
  let countF = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(countF);
    }
  }, 10000 / goal);
}

window.onscroll = () => {
  if (this.scrollY >= idS.offsetTop - 200) {
    if (!started) {
      counter.forEach((e) => counterF(e));
    }
    started = true;
  }
  if (window.pageYOffset >= 100) {
    document.querySelector("header").style.cssText =
      "background-color:#686868;position:fixed; top:0;transition:1.3s;animation: head 1s forwards;";
  } else {
    document.querySelector("header").style.cssText =
      "background-color:transparent;transition:.3s; position:absoulote";
  }
};

// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
setInterval(plusSlides, 8000, slideIndex);
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
