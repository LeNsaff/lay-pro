//nav
function showSection(sectionClass) {
    const sections = document.querySelectorAll('.page-section');

    sections.forEach(section => {
            document.querySelector(".accueil").style.display = "none";
            document.querySelector(".service").style.display = "none";
            document.querySelector(".projet").style.display = "none";
            document.querySelector(".intro").style.display = "none";
            });

    document.querySelector('.' + sectionClass).style.display = 'flex';
}

//caroussel img
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