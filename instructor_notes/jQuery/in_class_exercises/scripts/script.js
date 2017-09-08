
// 1. Use jQuery to fetch all `h1` tags and save them to a variable called $h1
//const $h1 = $( "h1" );
//console.log($h1)
// 2. Grab the HTML element that is both an H1 and has an ID of "second"
const second = $( "h1#second" );
// 3. Select the div with an ID of 'myDiv' and change the text to say "jQuery makes JS easy!"
$( "#myDiv").text("Goodnight World with jQuery");
//console.log() .text(shows on) vs .html(updates html text)
//4. Append this image to end of the body. http://www.fillmurray.com/200/200
 $("#container").append("<p>This is Great!</p>");
  $("body").append('<img src="http://www.fillmurray.com/200/200"/>');
// 5. Change the background color of the page to green.
$("body").css("backgroundColor", "green");
// 6. Remove the div with and ID of 'myDiv'
// $("#myDiv").remove();
// alternatively there is one called hide. It is hdden from GUI but shows up on DOM
 $("#myDiv").hide();

