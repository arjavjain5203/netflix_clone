# 🎬 Netflix Clone  

This project is a **Netflix Clone**, designed to replicate the look and feel of Netflix's homepage. It includes a scrolling carousel and a functional FAQ section, built using HTML, CSS, and JavaScript.  

## Features  

### 1. **Homepage Layout**  
- Replicates Netflix's clean and modern design.  
- Responsive and visually appealing layout for various devices.  

### 2. **Interactive Carousel**  
- Smooth horizontal scrolling of content using left and right buttons.  
- Dynamically controlled via JavaScript for a user-friendly experience.  

### 3. **FAQ Section**  
- Collapsible FAQ boxes to expand and view answers.  
- Smooth animations for content expansion and rotation of icons for visual feedback.  

---

## JavaScript Functionality  

The JavaScript enhances the interactivity of the Netflix Clone with the following features:  

### Carousel Scrolling  
- Smooth scrolling for horizontal carousels using the `scrollBy` method.  
- Buttons (`scroll-left` and `scroll-right`) to navigate left and right.  

### FAQ Boxes  
- Expandable and collapsible FAQ boxes for better usability.  
- Automatically closes other open FAQ boxes when a new one is clicked.  
- Adds rotation animation to icons for a polished effect.  

Here's the JavaScript code used:  

```javascript  
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

// FAQ Box Toggle Functionality
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
```

---

## Getting Started  

### Prerequisites  
- A web browser (e.g., Chrome, Firefox, Edge).  
- Optional: A text editor (e.g., VS Code, Sublime Text) to explore or modify the code.  

### Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/arjavjain5203/netflix_clone.git  
   ```  
2. Navigate to the project folder:  
   ```bash  
   cd netflix_clone  
   ```  
3. Open the `index.html` file in your browser.  

---

## File Structure  
- **index.html**: The main structure of the Netflix Clone.  
- **style.css**: Contains all the styles for layout and design.  
- **script.js**: JavaScript for interactivity (carousel scrolling and FAQ).  
- **assets/**: Contains images and other resources used in the project.  

---

## Contributing  

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.  

---
