  document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Scroll Animations Setup using Intersection Observer
  const scrollElements = document.querySelectorAll(".scroll-anim");

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= 
      (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("is-visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 90)) {
        displayScrollElement(el);
      }
    })
  }

  // Initial check on load
  handleScrollAnimation();

  // Listen for scroll events
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  // 2. Simple Portfolio Filter Logic (Visual toggle only)
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add to clicked
      btn.classList.add('active');
    });
  });

});

