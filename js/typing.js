function getLastLogin() {

    const now = new Date();

    const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];

    const date = String(now.getDate()).padStart(2, " ");

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");

    return `Last login: ${day} ${month} ${date} ${hour}:${minute}:${second} on ttys000`;

}


const startupCommand = "kurtisjsmith";


function typeCommand(onComplete) {

    // Startup prompt
    const prompt = document.createElement("div");

    prompt.innerHTML =
        `${getLastLogin()}<br><br>` +
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