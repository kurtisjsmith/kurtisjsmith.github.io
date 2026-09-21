// =========================================================
// TRAFFIC LIGHT CONTROLS
// =========================================================

const terminalWindow = document.querySelector(".terminal-window");

const redButton = document.getElementById("terminal-reset");
const yellowButton = document.getElementById("terminal-minimize");
const greenButton = document.getElementById("terminal-expand");


// =========================================================
// GREEN — EXPAND WINDOW
// =========================================================

greenButton.addEventListener("click", () => {

    terminalWindow.classList.toggle("expanded");

});