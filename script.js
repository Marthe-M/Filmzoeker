const movieList = document.getElementById("movie-list");

function addMoviesToDom (object){
  object.map(
    function addPosters({Poster, imdbID}) {
    const newLi = document.createElement("li");
    movieList.appendChild(newLi); 
    const newImage = document.createElement("img");
    newImage.src = Poster;
    const newLink = document.createElement("a");
    newLink.href ="http://www.imdb.com/title/" + imdbID;
    newLi.appendChild(newLink); 
    newLi.appendChild(newImage); 
         }
  );
};

addMoviesToDom(movies);

const princessMovies = movies.filter( h => h.Title.includes("Princess"));
const avengerMovies = movies.filter( h => h.Title.includes("Avengers"));
const batmanMovies = movies.filter( h => h.Title.includes("Batman"));
const xmenMovies = movies.filter( h => h.Title.includes("X-Men"));
const newMovies = movies.filter( h => h.Year <= 2014);

const buttons = document.getElementsByName("filmzoeker");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('change', function handleOnChangeEvent(element) {
        console.log(element.target.value);
        switch(element.target.value) {
            case "nieuw":
              movieList.innerHTML = "";
              addMoviesToDom(newMovies);
              break;
            case "avengers":
              movieList.innerHTML = "";
              addMoviesToDom(avengerMovies);
              break;
            case "xmen":
              movieList.innerHTML = "";
              addMoviesToDom(xmenMovies);
              break;
            case "princess":
              movieList.innerHTML = "";
              addMoviesToDom(princessMovies);
              break;
            case "batman":
              movieList.innerHTML = "";
              addMoviesToDom(batmanMovies);
              break;
            }
    });
}

