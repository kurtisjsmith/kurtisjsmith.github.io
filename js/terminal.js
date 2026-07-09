const output = document.getElementById("output");

function printLine(text = "") {

    const line = document.createElement("div");

    line.textContent = text;

    output.appendChild(line);

    // Scroll the terminal body, not the <pre>
    output.parentElement.scrollTop = output.parentElement.scrollHeight;

}


function printPage(lines) {

    let line = 0;

    function print() {

        if (line < lines.length) {

            printLine(lines[line]);

            line++;

            setTimeout(print, 120);

        } else {

            setTimeout(() => {

                printLine("");

                showPrompt();

            }, 500);

        }

    }

    print();

}