const movies = document.querySelector("#movieList");
const ships = document.querySelector("#shipList");
const characters = document.querySelector("#characterList");

let movieData;
let shipData;
let characterData;
let planetData;
const SWAPI_URL = "https://swapi.co/api"

InfoDisplay.logMe();

const createLI = (list, text) => {
    const newLI = document.createElement("li");
    newLI.appendChild(document.createTextNode(text));
    list.appendChild(newLI);
}

const fetchMovies = () => {
    fetch(`${SWAPI_URL}/films/`)
        .then(response => response.json())
        .then(apiData => {
            apiData.results.forEach(element => {
                createLI(movies, element.title);
            });
            movieData = apiData;
        })
        .catch(error => console.log(error));
}

const fetchShips = () => {
    fetch(`${SWAPI_URL}/starships/`)
        .then(response => response.json())
        .then(apiData => {
            apiData.results.forEach(element => {
                createLI(ships, element.name);
            });
            shipData = apiData;
        })
        .catch(error => console.log(error));
}

const fetchCharacters = () => {
    fetch(`${SWAPI_URL}/people/`)
        .then(response => response.json())
        .then(apiData => {
            apiData.results.forEach(element => {
                createLI(characters, element.name);
            });
            characterData = apiData;
        })
        .catch(error => console.log(error));
}

const callSWAPI = function () {
    fetchMovies();
    fetchShips();
    fetchCharacters();
}
    

callSWAPI();




