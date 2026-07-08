const command = "kurtisjsmith";

function typeCommand(onComplete) {

    const commandSpan = document.getElementById("command");

    let index = 0;

    function type() {

        if (index < command.length) {

            commandSpan.textContent += command[index];

            index++;

            setTimeout(type, 100);

        } else {

            setTimeout(onComplete, 500);

        }

    }

    type();

}