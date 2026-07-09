let currentInput = "";

function showPrompt() {

    const oldCursors = document.querySelectorAll(".cursor");

    oldCursors.forEach(cursor => {
        cursor.remove();
    });

    const prompt = document.createElement("div");

    prompt.innerHTML =
        "kurtisjsmith@portfolio ~ % <span id='input'></span><span class='cursor'>█</span>";

    output.appendChild(prompt);

    const input = prompt.querySelector("#input");

    document.addEventListener("keydown", function (event) {

        if (event.key.length === 1) {

            currentInput += event.key;

            input.textContent = currentInput;

        }

        else if (event.key === "Backspace") {

            currentInput = currentInput.slice(0, -1);

            input.textContent = currentInput;

        }

        else if (event.key === "Enter") {

            const command = currentInput;

            input.textContent = command;

            runCommand(command);

            currentInput = "";

            showPrompt();

        }

    });

}


typeCommand(function () {

    printPage(pages.home);

});