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
  // displayList(test_movie_list);
});
function displayMovieDetails(data) {

  console.log("--displayMovieDetails--");
  if (!data) {
    return;
  }
  let str = ` <div class="details_card flex">
  <div class="details_poster" style="background:url('${data.Poster}')  center center / cover no-repeat">
   
   
  </div>
  <div class="container">
  <div class="details_header">
  <div class="details_title">
  <span>${data.Title}</span>
  <span class="details_year">(${data.Year})</span></div>
  <div class="details_sub"><span class="">${data.Rated}</span><span class="">${data.Runtime}</span><span class="">${data.Genre}</span><span class="">${data.Released}</span><span class="">${data.imdbRating}/10</span></div>
  </div>

 
    <div class="sec">
    <span class="sec_type"></span>
    <span class="sec_data">  ${data.Plot}</span>
   
    </div>

    <div class="sec">
    <span class="sec_type">Director : </span>
    <span class="sec_data"> ${data.Director}</span>
   
   </div>

   <div class="sec">
   <span class="sec_type">Writers : </span>
   <span class="sec_data"> ${data.Writer}</span>
  
  </div>

  <div class="sec">
  <span class="sec_type">Actors : </span>
  <span class="sec_data">  ${data.Actors}</span>

 </div>

 <div class="sec">
 <span class="sec_type">Awards : </span>
 <span class="sec_data">${data.Awards}</span>
 
</div>
   
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
    
    <div class='imgCarousel' style="background:url('${arr[count].Poster}')  center center / cover no-repeat"></div>
   
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
    // displayMovieDetails(test_movie_details1);
  });
}
