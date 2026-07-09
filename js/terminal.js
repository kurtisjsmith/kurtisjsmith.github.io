const output = document.getElementById("output");
const cursor = document.querySelector(".cursor");

function printLine(text = "") {
    const line = document.createElement("div");

    line.textContent = text;

    output.appendChild(line);

    output.scrollTop = output.scrollHeight;

}

function printPage(lines) {

    cursor.style.display = "none";

    let line = 0;

    function print() {

        if (line < lines.length) {

            printLine(lines[line]);

            line++;

            setTimeout(print, 120);

        } else {

            console.log("printPage finished");

            setTimeout(() => {

                printLine("");
                
                showPrompt();

            }, 500);

        }

    }

    print();

}