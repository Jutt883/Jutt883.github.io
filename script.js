document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector(".form input");
    const verifyButton = document.querySelector(".form button");

    verifyButton.addEventListener("click", () => {
        const verificationCode = inputField.value.trim();

        if (verificationCode === "") {
            alert("Please enter a verification code.");
            return;
        }

        // Simulated verification logic
        if (verificationCode === "123456") {
            alert("Verification successful!");
            // Redirect or show success message
        } else {
            alert("Invalid verification code. Please try again.");
        }
    });
});
