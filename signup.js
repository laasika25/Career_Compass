// Handle sign up form submission
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Check if the username already exists
    if (localStorage.getItem(newUsername)) {
        alert("Username already exists!");
        return;
    }

    // Save the new user to localStorage
    localStorage.setItem(newUsername, newPassword);
    alert("Sign Up successful!");
    window.location.href = "login.html"; // Redirect to login page after successful signup
});