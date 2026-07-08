const command = "kurtisjsmith";

let i = 0;

const target = document.getElementById("command");

function type(){

    if(i < command.length){

        target.textContent += command.charAt(i);

        i++;

        setTimeout(type,120);

    }

}

type();
