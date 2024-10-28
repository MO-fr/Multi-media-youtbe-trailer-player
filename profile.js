
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorElement = document.getElementById('profileError');

    // Validation: Check if name is at least 4 characters
    if (name.length < 4) {
        errorElement.textContent = '⚠️ Name must be at least 4 characters long!';
        errorElement.style.display = 'block';
        return;
    }

    // Validation: Check if password is at least 6 characters
    if (password.length < 6) {
        errorElement.textContent = '⚠️ Password must be at least 6 characters long!';
        errorElement.style.display = 'block';
        return;
    }

    // Clear error message if all validations pass
    errorElement.textContent = '';
    errorElement.style.display = 'none';

    // Save data to localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Provide feedback to the user
    alert('Profile saved successfully!');

    // Optionally, redirect to the homepage after saving
    window.location.href = 'index.html';
});
// Check localStorage for the saved theme
const savedTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on profile page
applyTheme(savedTheme);


