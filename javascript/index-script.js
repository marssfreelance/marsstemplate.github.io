const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('scroll-animation');
      }
    });
  });
observer.observe(document.querySelector('.about'));
observer.observe(document.querySelector('.services'));
observer.observe(document.querySelector('.project'));

// function hamburger(){
//   var x = document.getElementByClass('menu__box');
//   if(x.style.display === 'block'){
//     x.style.display === 'none'
//   } else{
//     x.style.display = 'block'
//   }
// }

let valueDisplays = document.querySelectorAll('.num');
let interval = 5000;

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute('data-val'));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function(){
    startValue += 1;
    valueDisplays.textContent = startValue;
    if (startValue == endValue){
      clearInterval(counter);
    }
  }, duration);
});