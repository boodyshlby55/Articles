// confirm password
document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("repeatpassword");
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (event) {
        if (passwordField.value !== confirmPasswordField.value) {
            event.preventDefault(); // Prevent form submission
            alert("Passwords do not match!");
        }
    });
});