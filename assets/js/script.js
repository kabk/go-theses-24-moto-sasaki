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
