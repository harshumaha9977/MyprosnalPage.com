// Scroll reveal for sections on load
const observerOptions = {
  root: null,
  threshold: 0.1
};
const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(revealCallback, observerOptions);
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Scroll progress bar
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrolled + '%';

  // Show scroll to top button after scrolling 300px
  if(scrollTop > 300){
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

// Scroll to top button functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

