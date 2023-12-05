document.addEventListener("DOMContentLoaded", function () {
    const urlInput = document.getElementById("url");
    const getPasswordButton = document.getElementById("getPassword");
    const retrievedPassword = document.getElementById("retrievedPassword");
    const backButton = document.getElementById("back");

    getPasswordButton.addEventListener("click", getPassword);
    backButton.addEventListener("click", goBack);

    function getPassword() {
        // Implement password retrieval logic
        // Update the 'retrievedPassword' element with the retrieved password
    }

    function goBack() {
        window.location.href = "index.html"; // Navigate back to the home page
    }
});
