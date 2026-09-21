let currentInput = "";
let inputElement = null;

function showPrompt() {

    // Remove any previous blinking cursor
    document
        .querySelectorAll(".cursor")
        .forEach(cursor => cursor.remove());

    const prompt = document.createElement("div");

    prompt.innerHTML =
        "kurtisjsmith@portfolio ~ % <span id='input'></span><span class='cursor'>█</span>";

    output.appendChild(prompt);

    inputElement = prompt.querySelector("#input");

    inputElement.textContent = currentInput;

    // Keep the prompt visible
    output.parentElement.scrollTop =
        output.parentElement.scrollHeight;
}


// =========================================================
// KEYBOARD INPUT
// =========================================================

document.addEventListener("keydown", function (event) {

    if (!inputElement) return;


    // Regular characters
    if (event.key.length === 1) {

        currentInput += event.key;

        inputElement.textContent = currentInput;

    }


    // Backspace
    else if (event.key === "Backspace") {

        currentInput = currentInput.slice(0, -1);

        inputElement.textContent = currentInput;

    }


    // Enter / Run command
    else if (event.key === "Enter") {

        const command = currentInput.trim();

        inputElement.textContent = command;

        // Disable typing while command is running
        inputElement = null;

        runCommand(command, function () {

            currentInput = "";

            showPrompt();

        });

    }

});


// =========================================================
// TERMINAL INITIALIZATION
// =========================================================

terminal.classList.add("command-bar");

showPrompt();