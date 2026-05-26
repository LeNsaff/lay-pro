//carousel-image intro

let currentIndex = 0;
const images = document.querySelectorAll('.intro-image');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
}

function goToPrevious() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function goToNext() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Initialize the carousel
showImage(currentIndex);
setInterval(goToNext, 3000);

//carousel-image realisation1 
let currentIndex2 = 0;
const images2 = document.querySelectorAll('.pimg');
const visibleImages2 = 4; // Number of images visible at a time

function showImage2(index) {
  images2.forEach((img, i) => {
    img.classList.remove('active');
    let isvisible = false;
    for (let j = 0; j < visibleImages2; j++) {
      if ((index + j) % images2.length === i) {
        isvisible = true;
        break;
      }
    }
    if (isvisible) {
      img.classList.add('active');
    }
  });
}


function goToPrevious2() {
  currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
  showImage2(currentIndex2);
}

function goToNext2() {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  showImage2(currentIndex2);
}

// Initialize the carousel
showImage2(currentIndex2);
setInterval(goToNext2, 3000);

//navbar scroll
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navdivv');
  if (window.scrollY > 220) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});


function mail() {
  let parms = {
      nom: document.getElementById('nom').value,
      prenom: document.getElementById('prenom').value,
      email: document.getElementById('email').value,
      tel: document.getElementById('tel').value,
      pays: document.getElementById('ville').value,
      eta: document.getElementById('pres').value,
      pres: document.getElementById('expl').value,
  };
  if (parms.nom == "") {
      alert("Inscription incomplete");
  }
  if(parms.prenom == ""){
      alert("Inscription incomplete");
  }
  if(parms.email==""){
      alert("Inscription incomplete");
  }
  if(parms.tel==""){
      alert("Inscription incomplete");
  }
  if(parms.ville==""){
      alert("Inscription incomplete");
  }
  if(parms.pres==""){
      alert("Inscription incomplete");
  }
  if(parms.expl==""){
      alert("Inscription incomplete");
  }
  else {
      emailjs.send("service_lebiwhy", "template_nxqphdw", parms)
      .then(function() {
          alert("Inscription envoyée");
      })
  } 
}