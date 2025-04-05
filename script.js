



document.addEventListener('DOMContentLoaded', function() {
  
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const faqItem = btn.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
    
        
        answer.classList.toggle('show');
    
        const icon = btn.querySelector('.icon');
        const verticalLine = icon.querySelector('line[x1="12"][y1="5"]');
    
        if (answer.classList.contains('show')) {
          verticalLine.style.display = 'none'; 
        } else {
          verticalLine.style.display = 'block'; 
        }
      });
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMobile.classList.remove('active');
        }
    });
});