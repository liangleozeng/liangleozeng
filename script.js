@ -18,42 +18,7 @@ document.addEventListener('DOMContentLoaded', () => {
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
  // 2. Role Filter Functionality (Home Page)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const timelineCards = document.querySelectorAll('.timeline-card');

@ -78,6 +43,33 @@ document.addEventListener('DOMContentLoaded', () => {
    });
  });

  // 3. Modals Logic (Deep Dives)
  const modalBtns = document.querySelectorAll('.open-modal-btn');
  const closeBtns = document.querySelectorAll('.close-modal');

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.style.display = 'block';
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentModal = btn.closest('.modal');
      if (parentModal) parentModal.style.display = 'none';
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });

  // 4. Download Resume Trigger
  const downloadBtn = document.getElementById('downloadResumeBtn');
  if (downloadBtn) {
