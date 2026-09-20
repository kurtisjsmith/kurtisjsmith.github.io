/* =========================================================
   TERMINAL / COMMAND PROMPT
   ========================================================= */


/* ---------------------------------------------------------
   INPUT STATE
   --------------------------------------------------------- */

let currentInput = "";
let inputElement = null;


/* ---------------------------------------------------------
   SHOW PROMPT
   --------------------------------------------------------- */

function showPrompt() {

    const prompt = document.querySelector(".command-prompt");

    if (!prompt) {
        return;
    }

    const input = prompt.querySelector("#input");

    if (!input) {
        return;
    }

    inputElement = input;

    inputElement.textContent = currentInput;

}


/* ---------------------------------------------------------
   KEYBOARD INPUT
   --------------------------------------------------------- */

document.addEventListener("keydown", function (event) {

    if (!inputElement) {
        return;
    }


    /* NORMAL CHARACTER */

    if (event.key.length === 1) {

        currentInput += event.key;

        inputElement.textContent = currentInput;

        return;
    }


    /* BACKSPACE */

    if (event.key === "Backspace") {

        currentInput = currentInput.slice(0, -1);

        inputElement.textContent = currentInput;

        return;
    }


    /* ENTER */

    if (event.key === "Enter") {

        const command = currentInput.trim();

        inputElement.textContent = command;

        inputElement = null;


        if (typeof runCommand === "function") {

            runCommand(command, function () {

                currentInput = "";

                showPrompt();

            });

        } else {

            console.error("runCommand() is not available.");

            currentInput = "";

            showPrompt();

        }

    }

});


/* ---------------------------------------------------------
   INITIALIZE PROMPT
   --------------------------------------------------------- */

showPrompt();