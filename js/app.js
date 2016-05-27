$(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});
function getRequest(searchTerm){
  var params = {
    t: searchTerm,
    plot: 'short',
    Season: '1',
    r: 'json'
  };

  url = 'http://www.omdbapi.com/?'
  $.getJSON(url, params, function(data){
    for (var i = 0; i < data.Episodes.length; i++){ 
    var episode = data.Episodes[i]
    console.log("Episode:" + " " + episode.Episode + "," + " " + "Title:" + " " + episode.Title + "," +  " " + "Rating:" + " " + episode.imdbRating);
    }
  });
}