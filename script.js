// In js/script.js

// --- Custom Cursor Logic (UPDATED) ---
/*
const cursor = document.getElementById('custom-cursor');

window.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    
    // We offset the cursor slightly to center the caret properly
    cursor.style.transform = `translate(${x - 1}px, ${y - 12.5}px)`;
});


// --- ADD THIS NEW LOGIC FOR THE TEXT CARET ---

// 1. Select all elements that should trigger the text caret
const textElements = document.querySelectorAll('h1, p, a');

// 2. Loop through each of these elements
textElements.forEach(el => {
    // 3. When the mouse enters a text element, add the class
    el.addEventListener('mouseover', () => {
        cursor.classList.add('text-hover');
    });
    // 4. When the mouse leaves, remove the class
    el.addEventListener('mouseout', () => {
        cursor.classList.remove('text-hover');
    });
});
--------------------------------------------------------------------------------------------------------------
*/

/*
// --- Simplified Custom Cursor Logic ---
// 1. Get a reference to the custom cursor div
const cursor = document.getElementById('custom-cursor');

// 2. Listen for the 'mousemove' event
window.addEventListener('mousemove', e => {
    // 3. Get the mouse's X and Y coordinates
    const x = e.clientX;
    const y = e.clientY;

    // 4. Update the cursor's position. We center it by offsetting by half its size (10px).
    cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
});
*/




// In js/script.js

// --- Part 5: Lenis Smooth Scrolling ---
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf);


// In js/script.js

// --- Refined Custom Cursor with Smooth Easing (CORRECTED FOR MOBILE) ---

// This checks if the primary input mechanism is a fine pointer (like a mouse).
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

if (!isTouchDevice) {
    // If it's NOT a touch device, run all our cursor code.
    document.body.style.cursor = 'none'; // Ensure default cursor is hidden on desktop

    const cursor = document.getElementById('custom-cursor');

    let cursorX = 0, cursorY = 0;
    let mouseX = 0, mouseY = 0;
    const easing = 0.1;
    let hasMoved = false;

    window.addEventListener('mousemove', e => {
        if (!hasMoved) {
            cursorX = e.clientX;
            cursorY = e.clientY;
            cursor.classList.add('is-visible');
            hasMoved = true;
        }
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        cursorX += dx * easing;
        cursorY += dy * easing;
        
        // THE FIX WAS HERE: I used 'y' instead of 'cursorY' by mistake. This is now correct.
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`; 
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

} else {
    // If it IS a touch device, hide the custom cursor element completely.
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        cursor.style.display = 'none';
    }
}






// In js/script.js (add to the end)

// --- Part 11: Hamburger Menu Logic ---
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    // This toggles a class on the <nav> element
    nav.classList.toggle('is-open');
});


// --- Part 7: On-Scroll Animation Initialization ---
AOS.init({
    duration: 800, // Animation duration in milliseconds
    easing: 'ease-in-out', // The timing function for the animation
    once: false, // Whether animation should happen only once - This is key for a professional feel
    offset: 100, // Offset (in px) from the original trigger point
});


// --- Back to Top Button Logic ---
const backToTopButton = document.getElementById('back-to-top-button');

if (backToTopButton) {
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the link from jumping instantly
        lenis.scrollTo(0, { duration: 1.5 }); // Use Lenis to scroll to the top smoothly
    });
}