let currentInput = "";
let inputElement = null;


function showPrompt() {

    const oldCursors = document.querySelectorAll(".cursor");

    oldCursors.forEach(cursor => {
        cursor.remove();
    });


    const prompt = document.createElement("div");

    prompt.innerHTML =
        "kurtisjsmith@portfolio ~ % <span id='input'></span><span class='cursor'>█</span>";

    output.appendChild(prompt);


    inputElement = prompt.querySelector("#input");


    inputElement.textContent = currentInput;

}


// Single keyboard listener
document.addEventListener("keydown", function (event) {


    if (!inputElement) {
        return;
    }


    if (event.key.length === 1) {

        currentInput += event.key;

        inputElement.textContent = currentInput;

    }


    else if (event.key === "Backspace") {

        currentInput = currentInput.slice(0, -1);

        inputElement.textContent = currentInput;

    }


    else if (event.key === "Enter") {

        const command = currentInput;


        inputElement.textContent = command;


        runCommand(command);


        currentInput = "";


        showPrompt();

    }

});


typeCommand(function () {

    printPage(pages.home);

});