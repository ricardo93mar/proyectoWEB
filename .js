var myKitties = [ { title: "First Project", pic: "https://www.petfinder.com/wp-content/uploads/2012/09/Blog-Kitty-Cam-solo.jpg" }, { title: "Second Project", pic: "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg" },
{ title: "Third Project", pic: "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg" },
{ title: "Fourth Project", pic: "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg" }
];

$("textarea").css("background-color", "pink");

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 29.8171779, lng: -95.4012915},
    zoom: 10
  });
}

$(document).ready(function(){
	$(".message-box").on("keyup", function() {
        console.log("keyup happened");
        var charCount = $(".message-box").val().length;
		console.log(charCount);

	$("#char-count").html(charCount);

	if(charCount > 50){
		$("#char-count").css("color", "red");
	}else {
		$("#char-count").css("color", "black");
	};
	
              
	});
	var rows = $(".my-row");
	console.log(rows);
	for(var i=0; i<rows.length; ++i) {
        if (i%2===0) {
            $(rows[i]).css("background-color", "#84D9F3");
        };
	};
});

$(document).ready(function(){
	for(var i=0; i<myKitties.length; ++i) {
      $( "#" + i ).css("background-image", "url(" + myKitties[i].pic + ")" );
};

});

$(document).ready(function() {
	$(".image").mouseenter( function() {
      console.log(this);
      $(this).html("<p class='info'><span class='proj-title'>Title:</span>" + myKitties[this.id].title + "</p>");
	}).mouseleave( function() {
      $("p.info").html("");
	});
});





