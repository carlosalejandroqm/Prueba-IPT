const apiKey = "ed930bf7528cba28ad54ac3e2b52a13e";
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
const containerCatalogo = document.getElementById("catalogo");

let info = [];
const fetchingData = async () => {
  const data = await fetch(apiUrl);
  const response = await data.json();
  info = response.results;
  paintData(info);
};
fetchingData();

const paintData = (info) => {
  console.log(info);
  let html = "";
  info.forEach((movies) => {
    html += "<section class='container'>";
    html += "<div class='container__mod'>";
    html += `<img src=${movies.poster_path} />`;
    html += "<h4> " + movies.title + "</h4>";
    html += "<p> " + movies.overview + "</p>";

    html += "</div>";
    html += "</section>";
  });
  console.log(html);
  containerCatalogo.innerHTML = html;
};
