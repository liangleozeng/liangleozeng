document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Safe Interactive Role Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterableItems = document.querySelectorAll('.timeline-item, .project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedRole = button.getAttribute('data-role');

      filterableItems.forEach(item => {
        const categoryAttr = item.getAttribute('data-category');
        if (!categoryAttr) return;

        const categories = categoryAttr.split(' ');
        if (selectedRole === 'all' || categories.includes(selectedRole)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // 2. Interactive Modals
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

  // 3. Download Resume Trigger Simulator
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