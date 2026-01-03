const scrollContainer = document.getElementById('myScrollContainer');

scrollContainer.addEventListener('wheel', (event) => {
    // Prevent default vertical scrolling
    event.preventDefault(); 
    
    // Scroll the container horizontally
    scrollContainer.scrollBy({
        left: event.deltaY, // Scrolls based on the vertical delta
        behavior: 'smooth'  // Optional: adds a smooth transition
    });
});
