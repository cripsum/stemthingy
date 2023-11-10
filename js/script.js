let json;

async function play() {
    json = await (await fetch("https://danebidev.github.io/data/characters.json")).json();

    await change();
}

function change(key = undefined) {
    if (key != undefined) json = json.answers[key];

    let question = document.getElementById("question");
    let answers = document.getElementById("answers");

    question.innerHTML = "";
    answers.innerHTML = "";

    if (typeof json == "string") {
        document.getElementById("answer").innerHTML = "Il tuo personaggio è " + json;
        return;
    }

    question.innerHTML = json.question;

    for (const key in json.answers) {
        let button = document.createElement("button");
        button.innerHTML = key;
        button.setAttribute("onclick", "change(this.innerHTML)");

        answers.appendChild(button);
    }
}

play();
