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
observer.observe(document.querySelector('#row1'));
observer.observe(document.querySelector('#row2'));
observer.observe(document.querySelector('#row3'));

