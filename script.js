let totalSlides = document.querySelector('.slider-item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider-width').style.width =
`calc(100vw * ${totalSlides})`;
document.querySelector('.slider-controls').style.height= 
`${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
  currentSlide--;
  if(currentSlide < 0){
      currentSlide = totalSlides - 1
  }
  updateMargin();
}

function goNext(){
  currentSlide++;
  if(currentSlide > (totalSlides-1)){
      currentSlide = 0;
  }
  updateMargin();
}

function updateMargin(){
  let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
   let newMargin = (currentSlide * sliderItemWidth);
document.querySelector('.slider-width').style.marginLeft = 
   `-${newMargin}px`;
}

//setInterval(goNext, 2000);