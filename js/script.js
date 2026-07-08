const command = "kurtisjsmith";

const manPage = [
    "",
    "kurtisjsmith(1)          User Commands          kurtisjsmith(1)",
    "",
    "NAME",
    "     Kurtis Smith — Data Analyst",
    "",
    "SYNOPSIS",
    "     Python • SQL • Power BI • Tableau",
    "",
    "DESCRIPTION",
    "     Data Analyst building data-driven",
    "     solutions with Python, SQL, and Power BI.",
    "",
    "AUTHOR",
    "     Kurtis Jackson Smith"
];

const output = document.getElementById("output");
const commandSpan = document.getElementById("command");
const cursor = document.querySelector(".cursor");

let index = 0;

function typeCommand() {
    if (index < command.length) {
        commandSpan.textContent += command[index];
        index++;
        setTimeout(typeCommand, 100);
    } else {
        setTimeout(printManPage, 500);
    }
}

let line = 0;

function printManPage() {

    cursor.style.display = "none";

    if (line < manPage.length) {

        output.innerHTML += "\n" + manPage[line];

        line++;

        setTimeout(printManPage, 120);

    }
}

typeCommand();