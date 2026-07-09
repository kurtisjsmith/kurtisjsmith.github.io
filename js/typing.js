const startupCommand = "kurtisjsmith";

function typeCommand(onComplete) {

    // Startup prompt
    const prompt = document.createElement("div");

    prompt.innerHTML =
        "Last login: Wed Jul 8 14:36:18 on ttys000<br><br>" +
        "kurtisjsmith@portfolio ~ % <span id='command'></span><span class='cursor'>█</span>";

    output.appendChild(prompt);

    const commandSpan = prompt.querySelector("#command");

    let index = 0;

    function type() {

        if (index < startupCommand.length) {

            commandSpan.textContent += startupCommand[index];

            index++;

            // Keep the newest line visible
            output.parentElement.scrollTop = output.parentElement.scrollHeight;

            setTimeout(type, 100);

        } else {

            // Remove the startup cursor
            prompt.querySelector(".cursor").remove();

            setTimeout(onComplete, 500);

        }

    }

    type();

}