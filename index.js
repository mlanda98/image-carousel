document.addEventListener("DOMContentLoaded", function(){
  let slideIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide img");
  const dotsContainer = document.querySelector(".carousel-dots");
  const dots = [];

  for (let i = 0; i < slides.length; i++){
    const dot = document.createElement("span");
    dot.classList.add("carousel-dot");
    dotsContainer.appendChild(dot);
    dots.push(dot);
    dot.addEventListener("click", function(){
      goToSlide(i);
    })
  }

  function goToSlide(n){
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));
    slideIndex = n;
    slides[n].style.display = "block";
    dots[n].classList.add("active");
  }

  function nextSlide(){
    slideIndex++;
    if (slideIndex >=  slides.length){
      slideIndex = 0;
    }
    goToSlide(slideIndex);
  }

  function prevSlide(){
    slideIndex--;
    if (slideIndex < 0){
      slideIndex = slide.length -1;
    }
    goToSlide(slideIndex);
  }

  setInterval(nextSlide, 5000);

  document.querySelector(".prev").addEventListener("click", prevSlide);
  document.querySelector(".next").addEventListener("click", nextSlide);
})