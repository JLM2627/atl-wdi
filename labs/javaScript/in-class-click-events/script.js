//window.onload says dont run any JS until all html and css has loaded

window.onload = function() {

const ButtonOne = Document.querySelector(".ButtonOne")
ButtonOne.addeventListener("click", function() {
    alert("You have clicked button one")
});

const ButtonTwo = Document.querySelector("ButtonTwo")
ButtonTwo.addeventListener("click", function(){
    const paragraph = document.getElement("information");
    paragraph.innerText = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback)."

});
  const ButtonThree = Document.querySelector("ButtonThree")
  ButtonThree.addeventListener("click", function() {
    const remove = document.getElementByClass("Information");
    element.parentNode.removeChild("p");
});

