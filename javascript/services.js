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
observer.observe(document.querySelector('.choose-us'));
observer.observe(document.querySelector('.team'));
observer.observe(document.querySelector('.content'));

// For progress bar
const observerProgress = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('progress-scroll-animation');
    }
  });
});
observerProgress.observe(document.querySelector('#first-bar'));
observerProgress.observe(document.querySelector('#second-bar'));
observerProgress.observe(document.querySelector('#third-bar'));
