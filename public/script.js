// Function to add product to cart
function addToCart(productName) {
    const quantity = parseInt(prompt(`Enter quantity for ${productName}:`, '1'));
    if (quantity > 0) {
        alert(`Added ${quantity} ${productName}(s) to cart.`);
        // You can implement further logic here, like sending data to a server or updating a cart display
    } else {
        alert('Invalid quantity.');
    }
}

// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop - document.querySelector('.navbar').offsetHeight,
            behavior: 'smooth'
        });
    });
});

