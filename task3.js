
const styleBox = document.getElementById("styleBox");
const boxText = document.getElementById("boxText");

const colorBtn = document.getElementById("colorBtn");
const fontBtn = document.getElementById("fontBtn");


colorBtn.addEventListener("click", function() {
    styleBox.style.backgroundColor = "#d8b4fe";
});


fontBtn.addEventListener("click", function() {
    boxText.style.fontSize = "30px";
});
