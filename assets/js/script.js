// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function() {

});

function openNav() {
  document.getElementById("mySidenav").style.width = "570px";
  document.getElementById("main").style.marginRight = "10px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}

$( function() {
  $( ".draggable" ).draggable();
});

document.addEventListener('DOMContentLoaded', function() {
  var closeButtons = document.querySelectorAll('.lightbox-close');
  closeButtons.forEach(function(button) {
    button.addEventListener('close', function(event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      var targetId = this.getAttribute('href'); // Get the target ID from the href attribute
      var targetElement = document.querySelector(targetId); // Find the target element
      targetElement.style.visibility = 'hidden'; // Hide the target element
    });
  });
})
