// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function() {

});

function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("main").style.marginRight = "10px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}

$( function() {
  $( ".draggable" ).draggable();
});

window.addEventListener('scroll', function() {
  var element = document.getElementById('h1 ');
  if (window.scrollY > 40) { // Change 100 to the scroll position at which you want the color to change
    element.style.backgroundColor = 'whitesmoke'; // Change to the desired color
  } else {
    element.style.backgroundColor = 'yellow'; // Change back to the original color
  }
});
