const API_KEY = "fa8dd961";
const URL_OMDB = "http://www.omdbapi.com/";
$("#btnSearch").click((e) => {
  e.stopPropagation();
  console.log("--search clicked--");
  let search = $("#txtSearch").val().trim();
  if (search != "") {
    let url = URL_OMDB + "?s=" + search + "&apikey=" + API_KEY;
    jQuery.get(url, (response) => {
      console.log("--response : ", response);
      displayList(response);
    });
  }
});
function displayMovieDetails(data) {
  console.log("--displayMovieDetails--");
  if (!data) {
    return;
  }
  let str = ` <div class="card flex">
  <div>
    <img
      src="${data.Poster}"
    />
  </div>
  <div class="container">
    <div class="title">${data.Title} (${data.Year})</div>
    <div class="plot">
     ${data.Plot}
    </div>
    <div class="rating">${data.imdbRating}/10</div>
  </div>
</div>
</div>`;
  $("#details").html(str);
}
function displayList(data) {
  console.log("--data", data);
  if (!data) {
    return;
  }
  let arr = data.Search;
  if (!arr) {
    return;
  }
  let str = ``;
  for (let count = 0; count < arr.length; count++) {
    str += `  <div class="card" data-imdbid=${arr[count].imdbID}>
    <div>
      <img
        src="${arr[count].Poster}"
      />
    </div>
    <div class="container" >
      <span class="title">${arr[count].Title}</span>
      <span class="year">(${arr[count].Year})</span>
    </div>
  </div>`;
  }
  $("#list").html(str);

  $(".card").click(function (e) {
    e.stopPropagation();
    let imdbid = $(this).attr("data-imdbid");
    let url = URL_OMDB + "?i=" + imdbid + "&apikey=" + API_KEY;
    $.get(url, (data) => {
      console.log("--movie details : ", data);
      displayMovieDetails(data);
    });
  });
}
