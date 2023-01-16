const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signUpBtn = document.querySelector(".signup-btn");
console.log("hiya");

signUpBtn.addEventListener('click', () => {
    if (password.textContent !== confirmPassword.textContent) {
        alert("Password doesn't match. Please try again.")
        password.textContent="";
        confirmPassword.textContent="";

    }
});


