var text = ["I like Coffee ☕", "I like Trading 💙", "I like  Travelling 🚘"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(slideit, 2000);

function slideit() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

var submit =document.getElementById('btn-submit');
submit.addEventListener('click', function(){
    alert("Sorry !!!Form is not working ");
});
