document.addEventListener('DOMContentLoaded', () => {
    // --- Children Exam Login Modal Logic ---
    const loginModalElement = document.getElementById('childrenExamLoginModal');
    const childrenLoginForm = document.getElementById('childrenLoginForm');
    const childUsernameInput = document.getElementById('childUsername');
    const childPasswordInput = document.getElementById('childPassword');

    // Initialize the Bootstrap Modal instance
    let childrenExamLoginModal;
    if (loginModalElement) {
        childrenExamLoginModal = new bootstrap.Modal(loginModalElement);
    }

    if (childrenLoginForm) {
        childrenLoginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const username = childUsernameInput.value;
            const password = childPasswordInput.value;

            // Simple hardcoded validation for demonstration
            // Note: Replace with a secure backend system for production
            const correctUsername = 'child';
            const correctPassword = 'password123'; 

            if (username === correctUsername && password === correctPassword) {
                // Close the modal
                if (childrenExamLoginModal) {
                    childrenExamLoginModal.hide();
                }
                // Redirect to the CBT portal
                window.location.href = 'https://church-cbt.vercel.app/'; 
            } else {
                // Show an error message
                alert('Invalid username or password. Please try again or contact your Sunday School teacher.');
            }
        });
    }
});
