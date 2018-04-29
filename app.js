const movies = document.querySelector("#movieList");

let movieData;
let shipData;
let characterData;
let planetData;

const createLI = (text) => {
    const newLI = document.createElement("li");
    newLI.appendChild(document.createTextNode(text));
    movies.appendChild(newLI);
}

const callSWAPI = function () {
    fetch("https://swapi.co/api/films")
    .then(response => response.json())
    .then(apiData => {
        apiData.results.forEach(element => {
            createLI(element.title);
        });
        movieData = apiData;
    })
    .catch(error => console.log(error));
}

callSWAPI();




