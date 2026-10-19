
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function() {
    message.textContent = "The text has been changed using JavaScript!";
});
