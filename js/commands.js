function runCommand(command) {

    console.log("Running command:", command);

    if (command === "") {
        return;
    }

    printLine("");

    printLine("You typed: " + command);

}