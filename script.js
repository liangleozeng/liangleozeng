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

  // 2. Role Filter Functionality (Inside Experiences Page)
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

  // 3. Download Resume Trigger
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