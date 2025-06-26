document.addEventListener('DOMContentLoaded', () => {
    // --- 20th Anniversary Countdown Logic ---
    const anniversaryCountdownElement = document.getElementById('anniversary-countdown');
    const anniversaryDate = new Date('December 1, 2025 00:00:00').getTime(); // Target date for the anniversary

    /**
     * Updates the anniversary countdown display.
     */
    function updateAnniversaryCountdown() {
        const now = new Date().getTime();
        const distance = anniversaryDate - now;

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element
        if (anniversaryCountdownElement) {
            if (distance < 0) {
                // If the countdown is over
                anniversaryCountdownElement.innerHTML = "THE CELEBRATION IS ONGOING!";
            } else {
                // Display remaining time
                anniversaryCountdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }
    }

    // Update the countdown every 1 second
    setInterval(updateAnniversaryCountdown, 1000);
    // Initial call to display countdown immediately
    updateAnniversaryCountdown();

    // --- Children Exam Login Modal Logic ---
    const childrenExamLoginModal = new bootstrap.Modal(document.getElementById('childrenExamLoginModal'));
    const childrenLoginForm = document.getElementById('childrenLoginForm');
    const childUsernameInput = document.getElementById('childUsername');
    const childPasswordInput = document.getElementById('childPassword');

    if (childrenLoginForm) {
        childrenLoginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const username = childUsernameInput.value;
            const password = childPasswordInput.value;

            // Simple hardcoded validation for demonstration
            // In a real application, you would integrate with a backend authentication system (e.g., Firebase Auth)
            const correctUsername = 'child';
            const correctPassword = 'password123'; 

            if (username === correctUsername && password === correctPassword) {
                // Close the modal
                childrenExamLoginModal.hide();
                // Redirect to the CBT portal (now church-cbt.vercel.app)
                window.location.href = 'https://church-cbt.vercel.app/'; 
            } else {
                // Show an error message (using a simple alert for now, could be a custom modal)
                alert('Invalid username or password. Please try again or contact your Sunday School teacher.');
            }
        });
    }
});
