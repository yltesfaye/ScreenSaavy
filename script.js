const APILINK = 'https://api.themoviedb.org/3/movie/550?api_key=75f0206d7036783608a4098849ac6f5c';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=75f0206d7036783608a4098849ac6f5c&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data)) {
        console.log(data.results);
        data.results.forEach(element => {
            const div = document.createElement('div');
        })
    }
}
