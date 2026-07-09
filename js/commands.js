function runCommand(command, callback) {

    printLine("");

    switch (command.toLowerCase()) {

        case "help":
            showHelp(callback);
            break;

        case "about":
            showAbout(callback);
            break;

        case "projects":
            showProjects(callback);
            break;

        case "skills":
            showSkills(callback);
            break;

        case "experience":
            showExperience(callback);
            break;

        case "resume":
            openResume(callback);
            break;

        case "contact":
            showContact(callback);
            break;

        case "github":
            openGithub(callback);
            break;

        case "clear":
            clearTerminal(callback);
            break;

        default:

            printLines([
                "command not found: " + command,
                "Type 'help' to see available commands."
            ], callback);

            break;

    }

}


// HELP

function showHelp(callback) {

    const lines = [

        "Available commands:",
        "",
        "about",
        "projects",
        "skills",
        "experience",
        "resume",
        "contact",
        "github",
        "clear"

    ];

    printLines(lines, callback);

}


// ABOUT

function showAbout(callback) {

    printLines([
        "About page coming soon..."
    ], callback);

}


// PROJECTS

function showProjects(callback) {

    printLines([
        "Projects page coming soon..."
    ], callback);

}


// SKILLS

function showSkills(callback) {

    printLines([
        "Skills page coming soon..."
    ], callback);

}


// EXPERIENCE

function showExperience(callback) {

    printLines([
        "Experience page coming soon..."
    ], callback);

}


// RESUME

function openResume(callback) {

    printLines([
        "Opening resume..."
    ], callback);

}


// CONTACT

function showContact(callback) {

    printLines([
        "Contact page coming soon..."
    ], callback);

}


// GITHUB

function openGithub(callback) {

    printLines([
        "Opening GitHub..."
    ], callback);

}


// CLEAR

function clearTerminal(callback) {

    output.innerHTML = "";

    if (callback) {

        callback();

    }

}