// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
debugger;
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("addActivityModal");
    var ActivityBtn = document.getElementById("AddActivity");
    var ActivityFormClose = document.getElementsByClassName("close")[0];

    ActivityBtn.onclick = function() {
        console.log("clicked");
        modal.style.display = "block";
    }
    
    ActivityFormClose.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});





// Get the <span> element that closes the modal

// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it