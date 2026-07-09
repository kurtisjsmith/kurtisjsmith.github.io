const output = document.getElementById("output");


function printLine(text = "") {

    const line = document.createElement("div");

    line.textContent = text;

    output.appendChild(line);

    // Keep the latest output visible
    output.parentElement.scrollTop = output.parentElement.scrollHeight;

}


// Print multiple lines with animation
function printLines(lines, callback) {

    console.log("printLines called");

    let index = 0;

    function next() {

        if (index >= lines.length) {

            if (callback) {
                callback();
            }

            return;

        }

        printLine(lines[index]);

        index++;

        setTimeout(next, 120);

    }

    next();

}


// Startup page
function printPage(lines) {

    printLines(lines, function () {

        setTimeout(function () {

            printLine("");

            showPrompt();

        }, 500);

    });

}