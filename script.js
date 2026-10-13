
function showMessage() {
    alert("Welcome to JP Website! Thank you for visiting.");
}

const myForm = document.getElementById("myForm");

if (myForm) {
    myForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const response = document.getElementById("form-response");

        response.textContent =
            "Thank you, " + name +
            "! Your form has been completed successfully.";

        myForm.reset();
    });
}
