document.addEventListener('DOMContentLoaded', () => {
    const scrollList = document.getElementById('scroll-list');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    const scrollAmount = 150; // Adjust scroll distance as needed

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