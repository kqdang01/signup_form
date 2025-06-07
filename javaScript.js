let passwordField = document.querySelector(".pass");
let confirmPasswordField = document.querySelector(".confirm");

passwordField.addEventListener("input", () => {
    if (passwordField.value !== confirmPasswordField.value)
    {
        passwordField.setCustomValidity("invalid");
        confirmPasswordField.setCustomValidity("invalid");
    }
    else
    {
        passwordField.setCustomValidity("");
        confirmPasswordField.setCustomValidity("");
    }
})

confirmPasswordField.addEventListener("input", () => {
    if (passwordField.value !== confirmPasswordField.value)
    {
        passwordField.setCustomValidity("invalid");
        confirmPasswordField.setCustomValidity("invalid");
    }
    else
    {
        passwordField.setCustomValidity("");
        confirmPasswordField.setCustomValidity("");
    }
})