// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Get Started Button Interaction
const getStartedButton = document.getElementById('get-started');
getStartedButton.addEventListener('click', () => {
    alert('Redirecting to sign-up page...');
    // window.location.href = 'https://example.com/signup'; // Uncomment to redirect
});

// Dynamic Content (Example: Fetch Doctors)
fetch('https://api.example.com/doctors')
    .then(response => response.json())
    .then(data => {
        console.log('Doctors:', data);
        // You can dynamically populate the "Appointments" section with this data
    })
    .catch(error => console.error('Error fetching doctors:', error));