$(document).ready(function(){

    $("button").on("click", function() {
    
    var topics = $(this).attr("data-person");

   
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=JT79XbCoVPYb4TngsPrwWVTKFMuxtAnC&q=" + topics + "&limit=10&offset=0&rating=PG-13&lang=en"
    $.ajax({
      url: queryURL,
      method: "GET"
    })
     
      .then(function(response) {
     
        var results = response.data;

       
        for (var i = 0; i < results.length; i++) {

          
          if (results[i].rating !== "r") {
            
            var gifDiv = $("<div class='item'>");

            
            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");

      
            personImage.attr("src", results[i].images.fixed_height.url);

          
            gifDiv.append(p);
            gifDiv.append(personImage);

           
            $("#gifHere").prepend(gifDiv);
          }
        }
      });
  })});

  $("button").on("click", function() {
    
    var searchAct = $(this).attr("data-person");

   
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=JT79XbCoVPYb4TngsPrwWVTKFMuxtAnC&q=" + searchAct + "&limit=10&offset=0&rating=PG-13&lang=en"
    $.ajax({
      url: queryURL,
      method: "GET"
    })
     
      .then(function(response) {
     
        var results = response.data;

       
        for (var i = 0; i < results.length; i++) {

          
          if (results[i].rating !== "r") {
            
            var gifDiv = $("<div class='item'>");

            
            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");

      
            personImage.attr("src", results[i].images.fixed_height.url);

          
            gifDiv.append(p);
            gifDiv.append(personImage);

           
            $("#gifHere").prepend(gifDiv);
          }
        }
      });
  });