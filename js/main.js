// 1. When the h1 is clicked
	// a) Fade in the image

function homework(){

$("h1").on("click", function(){
  $("h1").text("I'm learning a new method");
  $("img").fadeIn(5000);
  $(".box").addClass("party");
  $("body").addClass("color")
});
}

homework();



	// b) Change the text of the h1 to "Let's Party!"


	// c) Add the party class to the div with the class .box
	// BONUS: Add your own class to the CSS file and add it to the body when the event occurs.
