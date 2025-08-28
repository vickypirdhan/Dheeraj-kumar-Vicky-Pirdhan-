const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slide').length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % total;
  slides.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + total) % total;
  slides.style.transform = `translateX(${-index * 100}%)`;
});

// Auto-play (optional)
let autoplay = setInterval(()=>{
  index = (index + 1) % total;
  slides.style.transform = `translateX(${-index * 100}%)`;
}, 4000);

// Pause on hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', ()=> clearInterval(autoplay));
slider.addEventListener('mouseleave', ()=> { autoplay = setInterval(()=>{ index = (index + 1) % total; slides.style.transform = `translateX(${-index * 100}%)`; }, 4000); });
