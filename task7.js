
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operator) {
    if (num1.value === "" || num2.value === "") {
        result.textContent = "Please enter both numbers";
        return;
    }

    const a = Number(num1.value);
    const b = Number(num2.value);
    let answer;

    if (operator === "+") {
        answer = a + b;
    } else if (operator === "-") {
        answer = a - b;
    } else if (operator === "*") {
        answer = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero";
            return;
        }
        answer = a / b;
    }

    result.textContent = answer;
}

document.getElementById("addBtn").addEventListener("click", function() {
    calculate("+");
});

document.getElementById("subtractBtn").addEventListener("click", function() {
    calculate("-");
});

document.getElementById("multiplyBtn").addEventListener("click", function() {
    calculate("*");
});

document.getElementById("divideBtn").addEventListener("click", function() {
    calculate("/");
});
