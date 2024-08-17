document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

document.querySelector('.registration-form form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from actually submitting

    // Get the form data
    const courseName = document.getElementById('course').value;
    const userName = document.getElementById('name').value;

    // Simulate submission
    alert(`Thank you, ${userName}, for registering for the ${courseName} course!`);
    
    // Optionally hide the form or reset it for a new entry
    document.querySelector('.registration-form form').reset();
    document.getElementById('registration-form').style.display = 'none';
});
function showDetails(courseId) {
    // Placeholder function for showing course details
    alert('Showing details for ' + courseId);
}

function registerCourse(courseId) {
    // Placeholder function for course registration
    alert('Registering for ' + courseId);
}
