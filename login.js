// Add event listener to login form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Capture username and password input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Log username and password to console for debugging
    console.log("Username:", username);
    console.log("Password:", password);

    // Proceed to the dashboard without checking username or password
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to dashboard
});