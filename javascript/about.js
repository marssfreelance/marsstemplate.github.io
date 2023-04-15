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


// function hamburger(){
//   var x = document.getElementByClass('menu__box');
//   if(x.style.display === 'block'){
//     x.style.display === 'none'
//   } else{
//     x.style.display = 'block'
//   }
// }

