
const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

textInput.addEventListener("keyup", function() {
    output.textContent = textInput.value;
});
