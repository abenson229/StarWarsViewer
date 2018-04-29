const ul = document.querySelector("#theList");

const data = [];

const createLI = (text) => {
    const newLI = document.createElement("li");
    newLI.appendChild(document.createTextNode(text));
    ul.appendChild(newLI);
}

const callSWAPI = function () {
    fetch("https://swapi.co/api/films")
    .then(response => response.json())
    .then(apiData => {
        apiData.results.forEach(element => {
            data.push(element);
            createLI(element.title);
        });
    })
    .catch(error => console.log(error));
}

callSWAPI();




