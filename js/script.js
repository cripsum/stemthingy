fetch("https://danebidev.github.io/data/characters.json")
    .then((response) => response.json())
    .then((json) => console.log(json));
