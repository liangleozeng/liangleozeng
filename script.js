document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Navigation Tab Switching
  const navTabs = document.querySelectorAll('.nav-tab');
  const pageContents = document.querySelectorAll('.page-content');

  navTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      navTabs.forEach(t => t.classList.remove('active'));
      pageContents.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPage = document.getElementById(tab.getAttribute('data-tab'));
      if (targetPage) {
        targetPage.classList.add('active');
      }
    });
  });

  // 2. Technical Skills Carousel Logic
  const slides = document.querySelectorAll('.skill-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevSkillBtn');
  const nextBtn = document.getElementById('nextSkillBtn');
  let currentSlide = 0;

  function showSlide(index) {
    if (slides.length === 0) return;

    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIdx = parseInt(dot.getAttribute('data-slide'));
      showSlide(slideIdx);
    });
  });

  // 3. Role Filter Functionality (Inside Experiences Page)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const timelineCards = document.querySelectorAll('.timeline-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedRole = button.getAttribute('data-role');

      timelineCards.forEach(card => {
        const categoryAttr = card.getAttribute('data-category');
        if (!categoryAttr) return;

        const categories = categoryAttr.split(' ');
        if (selectedRole === 'all' || categories.includes(selectedRole)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 4. Download Resume Trigger
  const downloadBtn = document.getElementById('downloadResumeBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      downloadBtn.innerText = 'Downloading...';
      setTimeout(() => {
        downloadBtn.innerText = 'Downloaded!';
        setTimeout(() => {
          downloadBtn.innerText = 'Download PDF Resume';
        }, 2000);
      }, 1000);
    });
  }

});