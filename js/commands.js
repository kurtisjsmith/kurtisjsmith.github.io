/* =========================================================
   COMMAND SYSTEM
   ========================================================= */


/* =========================================================
   RUN COMMAND
   ========================================================= */

function runCommand(command, callback) {

    const cleanCommand = command.toLowerCase().trim();


    switch (cleanCommand) {

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
            clearPage(callback);
            break;


        default:

            showPage(`
                <div class="man-page">

                    <pre>
command not found: ${command}

Type 'help' to see available commands.
                    </pre>

                </div>
            `, callback);

            break;

    }

}


/* =========================================================
   DISPLAY PAGE
   ========================================================= */

function showPage(content, callback) {

    const contentBody = document.getElementById("content-body");

    if (!contentBody) {
        console.error("content-body not found.");
        return;
    }

    contentBody.innerHTML = content;


    if (callback) {
        callback();
    }

}


/* =========================================================
   HELP
   ========================================================= */

function showHelp(callback) {

    showPage(`
        <div class="man-page">

            <pre>
KURTISJSMITH(1)          User Commands          KURTISJSMITH(1)

NAME
    help — display available commands

SYNOPSIS
    help

DESCRIPTION
    Available commands:

        about
        projects
        skills
        experience
        resume
        contact
        github
        clear
            </pre>

        </div>
    `, callback);

}


/* =========================================================
   ABOUT
   ========================================================= */

function showAbout(callback) {

    showPage(`
        <div class="man-page">

            <pre>
KURTISJSMITH(1)          User Commands          KURTISJSMITH(1)

NAME
    about — information about Kurtis Jackson Smith

DESCRIPTION
    I'm Kurtis Smith, a data analytics student and
    aspiring data analyst based in Japan.

    I work with Python, SQL, Excel, Power BI,
    Tableau, and R to explore data, solve problems,
    and build practical projects.

    This portfolio is a place to share my projects,
    skills, experience, and work in data analytics.

            </pre>

        </div>
    `, callback);

}


/* =========================================================
   PROJECTS
   ========================================================= */

function showProjects(callback) {

    showPage(`
        <div class="man-page">

            <pre>
KURTISJSMITH(1)          User Commands          KURTISJSMITH(1)

NAME
    projects — data analytics projects

DESCRIPTION
    Projects page coming soon...
            </pre>

        </div>
    `, callback);

}


/* =========================================================
   SKILLS
   ========================================================= */

function showSkills(callback) {

    showPage(`
        <div class="man-page">

            <pre>
KURTISJSMITH(1)          User Commands          KURTISJSMITH(1)

NAME
    skills — technical skills

DESCRIPTION
    Skills page coming soon...
            </pre>

        </div>
    `, callback);

}


/* =========================================================
   EXPERIENCE
   ========================================================= */

function showExperience(callback) {

    showPage(`
        <div class="man-page">

            <pre>
KURTISJSMITH(1)          User Commands          KURTISJSMITH(1)

NAME
    experience — professional experience

DESCRIPTION
    Experience page coming soon...
            </pre>

        </div>
    `, callback);

}


/* =========================================================
   RESUME
   ========================================================= */

function openResume(callback) {

    showPage(`
        <div class="man-page">

            <pre>
KURTISJSMITH(1)          User Commands          KURTISJSMITH(1)

NAME
    resume — professional resume

DESCRIPTION
    Opening resume...
            </pre>

        </div>
    `, callback);

}


/* =========================================================
   CONTACT
   ========================================================= */

function showContact(callback) {

    showPage(`
        <div class="man-page">

            <pre>
KURTISJSMITH(1)          User Commands          KURTISJSMITH(1)

NAME
    contact — contact information

DESCRIPTION
    Contact page coming soon...
            </pre>

        </div>
    `, callback);

}


/* =========================================================
   GITHUB
   ========================================================= */

function openGithub(callback) {

    showPage(`
        <div class="man-page">

            <pre>
KURTISJSMITH(1)          User Commands          KURTISJSMITH(1)

NAME
    github — GitHub portfolio

DESCRIPTION
    Opening GitHub...
            </pre>

        </div>
    `, callback);

}


/* =========================================================
   CLEAR
   ========================================================= */

function clearPage(callback) {

    const contentBody = document.getElementById("content-body");

    if (!contentBody) {
        return;
    }

    contentBody.innerHTML = "";


    if (callback) {
        callback();
    }

}