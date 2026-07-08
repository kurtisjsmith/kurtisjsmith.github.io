const output = document.getElementById("output");

const cursor = document.querySelector(".cursor");

function printPage(lines) {

    cursor.style.display = "none";

    let line = 0;

    function print() {

        if (line < lines.length) {

            output.innerHTML += "\n" + lines[line];

            line++;

            setTimeout(print, 120);

        }

    }

    print();

}