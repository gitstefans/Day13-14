// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

var iFB = document.getElementById("iframeBox");

var imgTitle = document.getElementsByClassName("img-title");

for (i = 0; i < imgTitle.length; i++) {
  imgTitle[i].addEventListener("click", function () {
    var Title = this.getAttribute("data-iframe");

    modal.style.display = "block";
    iFB.innerHTML ='<iframe src="' + Title + '" width="100%" height="600"></iframe>';
  });
}

//var img = document.getElementById("imageDiv");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
