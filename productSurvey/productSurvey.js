function submitfeedback() {
    const username = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const job = document.getElementById("job").value;
    const designation = document.getElementById("designation").value;
    const productType = document.getElementById("productType").value;
    const feedbackText = document.getElementById("feedbackText").value;

    if (!username || !age || !job || !designation || !productType || !feedbackText) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    alert("Thank you for your feedback, " + username + "! We appreciate your input on our " + productType + ".");

    // Display user information
    document.getElementById("userName").textContent = username;
    document.getElementById("userAge").textContent = age;
    document.getElementById("userJob").textContent = job;
    document.getElementById("userDesignation").textContent = designation;
    document.getElementById("userProductChoice").textContent = productType;
    document.getElementById("userFeedback").textContent = feedbackText;

    // Show user information div
    document.getElementById("userInfo").style.display = "block";
}

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", submitfeedback);

// If user is in an input in this page and hits Enter, run submit.
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submitfeedback();
    }
});
