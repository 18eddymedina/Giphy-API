var topics=["cat","dog","chicken"];

for(var x=0;x<topics.length;x++){
  console.log("go");
    var p = $("<button>");
  p.text(topics[x]);
  p.addClass("btn btn-info");
  $("#buttons").append(p);
p.on("click",function(){
  $("#gifs").empty();
var word=$(this).text();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  word + "&api_key=RzDjg5cmVgUFdEMqH6icHCVhh1V1LVWf&limit=10";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var results = response.data;

    for (var i = 0; i < results.length; i++) {
//var rating = results[i].rating;
var d = $("<div>");
var p = $("<p>").text("Rating: " + results[i].rating);

//p.attr("onclick","console.log('yay')");
var image = $("<img>");
//image.attr("src", results[i].images.fixed_height.url);
image.attr("src", response.data[i].images.original_still.url)
image.attr("data-still", response.data[i].images.original_still.url)
image.attr("data-moving", response.data[i].images.original.url)
image.on("click", function(){
      if ($(this).attr("data-still") == $(this).attr("src")) {
        $(this).attr("src", $(this).attr("data-moving"))
      }
      else { 
        $(this).attr("src", $(this).attr("data-still"))
      }
    })
image.attr("id","pics");
$(d).prepend(image);
$(d).prepend(p);
d.attr("class","yay");
d.attr("style","display: inline-block");

//$("#gifs").prepend(p);

$("#gifs").prepend(d);


}


});



})
}

$("#search").on("click", function() {
    var search = $("#q").val();
    $("#q").val("");
 topics.push(search);
$("#buttons").empty();
 for(var x=0; x<topics.length;x++){
  var p = $("<button>");
  p.text(topics[x]);
  p.addClass("btn btn-info");
  $("#buttons").append(p);
p.on("click",function(){
  $("#gifs").empty();
var word=$(this).text();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  word + "&api_key=RzDjg5cmVgUFdEMqH6icHCVhh1V1LVWf&limit=10";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var results = response.data;

    for (var i = 0; i < results.length; i++) {
//var rating = results[i].rating;
var d = $("<div>");
var p = $("<p>").text("Rating: " + results[i].rating);

p.attr("onclick","console.log('yay')");
var image = $("<img>");
//image.attr("src", results[i].images.fixed_height.url);
image.attr("src", response.data[i].images.original_still.url)
image.attr("data-still", response.data[i].images.original_still.url)
image.attr("data-moving", response.data[i].images.original.url)
image.on("click", function(){
      if ($(this).attr("data-still") == $(this).attr("src")) {
        $(this).attr("src", $(this).attr("data-moving"))
      }
      else { 
        $(this).attr("src", $(this).attr("data-still"))
      }
    })
image.attr("id","pics");
$(d).prepend(image);
$(d).prepend(p);
d.attr("class","yay");
d.attr("style","display: inline-block");

//$("#gifs").prepend(p);

$("#gifs").prepend(d);


}


});



})

}

    var btn=$("<button>").text(search);
   
  
  });