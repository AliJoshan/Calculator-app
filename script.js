// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}


function calculate() {
    let expression = display.value;

    if (!expression) return;

    if (/^[0-9.]+$/.test(expression)) {
        return;
    }

    // If last char is an operator, remove it
    if (/[-+*/.]$/.test(expression)) {
        expression = expression.slice(0, -1);
    }

    try {
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key);
    }

    if (key === "Enter" || key === "=") {
        calculate();
    }

    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (key === "Escape") {
        clearDisplay();
    }
});
