
const signUpBtn = document.querySelector(".signup-btn");
console.log("hiya");

function validatePassword () {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    if (password != confirmPassword) {
        alert("Password doesn't match. Please try again.");
        return false;
    }
    return true;
};


