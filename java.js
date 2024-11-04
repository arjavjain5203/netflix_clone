document.addEventListener('DOMContentLoaded', () => {
    const scrollList = document.getElementById('scroll-list');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    const scrollAmount = 1000; // Adjust scroll distance as needed

    // Scroll left
    scrollLeftBtn.addEventListener('click', () => {
        scrollList.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Scroll right
    scrollRightBtn.addEventListener('click', () => {
        scrollList.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});

//for answer box
document.querySelectorAll('.faqbox').forEach(box => {
    box.addEventListener('click', () => {
      // Close any currently open faqbox
      document.querySelectorAll('.faqbox').forEach(otherBox => {
        if (otherBox !== box && otherBox.classList.contains('active')) {
          otherBox.classList.remove('active');
          otherBox.querySelector('.answer').style.maxHeight = '0';
          otherBox.querySelector('.icon').classList.remove('rotate');
        }
      });
  
      // Toggle the clicked faqbox
      box.classList.toggle('active');
      const answer = box.querySelector('.answer');
      const icon = box.querySelector('.icon');
  
      if (box.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.classList.add('rotate');
      } else {
        answer.style.maxHeight = '0';
        icon.classList.remove('rotate');
      }
    });
  });
  
  