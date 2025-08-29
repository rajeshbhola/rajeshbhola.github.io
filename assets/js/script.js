// Get the button
const backToTop = document.getElementById('backToTop');

// Show button when the user scrolls down 100px from the top
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
};

// Scroll to the top when the user clicks the button
backToTop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});
