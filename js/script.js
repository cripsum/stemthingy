async function play() {
    let json = await (await fetch("https://danebidev.github.io/data/characters.json")).json();
    if (json.question == undefined) return;

    let question = document.getElementById("question");
    let answers = document.getElementById("answers");

    change(json, question, answers);
}

function change(json, question, answers) {
    if (json.answer != undefined) {
        document.getElementById("answer").innerHTML = "Il tuo personaggio è " + json.answer;
        question.innerHTML = "";
        answers.innerHTML = "";
        return;
    }

    question.innerHTML = json.question;
}

play();
