const omdbapiUrl = "http://www.omdbapi.com/";
const apiKey = "adf1f2d7";

// Here is 2 other API key if the one above doesn't work anymore:
// - 48727053
// - 8691812a

// Your turn to code!

// add listeners to enter keyup? / submit
// retrieve search keywords

const form = document.querySelector("form");
const searchTag = document.querySelector("#movie-name");
const displayMovies = document.querySelector("#movie-cards");

// form.addEventListener("submit", () => {
document.addEventListener("keyup", () => {
  const search = encodeURI(searchTag.value);
  const url = `http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const movies = data.Search;
      console.log(movies);
      movies.forEach((movie) => {
        const imageUrl = movie.Poster;
        const year = movie.Year;
        const title = movie.Title;
        displayMovies.insertAdjacentHTML("beforeend", `
          <div class="col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card mb-2">
              <img src="${imageUrl}" class="card-img-top" alt="Harry Potter and the Half-Blood Prince">
              <div class="card-body">
                <span class="badge bg-primary mb-2">${year}</span>
                <h5 class="card-title">${title}</h5>
              </div>
            </div>
          </div>
        `);
      });
    });
});

//
