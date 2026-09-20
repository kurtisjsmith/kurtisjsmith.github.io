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

const terminal = document.querySelector('.terminal');

const resetButton = document.getElementById('terminal-reset');
const minimizeButton = document.getElementById('terminal-minimize');
const expandButton = document.getElementById('terminal-expand');

console.log("Attaching button listeners");


// RED — reset / logout
resetButton.addEventListener('click', async () => {

    try {

        const { supabase } = await import('../lifequest/js/supabase.js');

        await supabase.auth.signOut();

    } catch (error) {

        console.error('Logout error:', error);

    }

    window.location.reload();

});


// YELLOW — completely collapse
minimizeButton.addEventListener('click', () => {

    terminal.classList.add('collapsed');

});


// GREEN — restore
expandButton.addEventListener('click', () => {

    terminal.classList.remove('collapsed');

});


console.log("Terminal JavaScript loaded");