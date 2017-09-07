//window.onload says dont run any JS until all html and css has loaded

window.onload = function() {

const ButtonOne = document.querySelector(".ButtonOne")
ButtonOne.addEventListener("click", function(){
    alert("You have clicked button one")
});

const ButtonTwo = document.querySelector(".ButtonTwo")
ButtonTwo.addEventListener("click", function(){
    const paragraph = document.getElementById("information");
    paragraph.innerText = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback)."

});
//
const ButtonThree = document.querySelector(".ButtonThree")
ButtonThree.addEventListener("click", function() {
document.getElementsByTagName("div")[1].innerHTML = "";

});
}