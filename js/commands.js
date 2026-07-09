function runCommand(command) {

    printLine("");

    switch (command.toLowerCase()) {


        case "help":

            printLine("Available commands:");

            printLine("");

            printLine("about");
            printLine("projects");
            printLine("skills");
            printLine("experience");
            printLine("resume");
            printLine("contact");
            printLine("github");
            printLine("clear");

            break;


        default:

            printLine("command not found: " + command);

            printLine("Type 'help' to see available commands.");

            break;

    }

}