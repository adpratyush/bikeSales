const images = document.querySelectorAll('.slideshow img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

prevBtn.addEventListener('click', () => {
  images[index].classList.remove('active');
  index = (index - 1 + images.length) % images.length;
  images[index].classList.add('active');
});

nextBtn.addEventListener('click', () => {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
});

images[index].classList.add('active');
