//function to show ,hide nav bar
navbar.onclick = function myFunction(){
  var x = document.getElementById('navig');

  if(x.className ==="navigation"){
    x.className+=" responsive";
  } else{
    x.className = 'navigation'
  }
}

var myIndex = 0;
carousel();
//function for slider (auto)
function carousel() {
  var i;
  var x = document.getElementsByClassName("rewiew");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 9000);
}
//animation for transition fro one part of page to another

$(document).ready(function(){
    $("#navig").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('index,html').animate({scrollTop: top}, 3000);
    });
});
