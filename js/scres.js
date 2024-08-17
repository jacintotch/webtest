document.addEventListener("DOMContentLoaded", function() {
    // Toggle FAQ answers
    const faqs = document.querySelectorAll('.faq h4');
    faqs.forEach(faq => {
        faq.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    // Add any additional JavaScript for interactivity here
});
