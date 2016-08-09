// initialize the document..
$(document).ready(function(){
// get the JSON data from ropspots.json... (url, callback,(anything you want to call this function))
	$.getJSON("topspots.json", function(topspots){
// take in an array, and pass in a callback
		$.each(topspots, function(index, spot){

			$("#tableTopSpots tbody").append('<tr><td>' + spot.name + '</td><td>' + spot.description + '</td><td><a href="https://www.google.com/maps?q=' + spot.location + '">Click here to open in google maps</a></td></tr>');


		});

	});

});
