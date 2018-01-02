document.addEventListener('DOMContentLoaded', function () {
  var square = document.getElementsByClassName('square')

  for (var i=0; square.length>i; i++){
    square[i].addEventListener('click', function(e){
        this.style.backgroundColor = "red";
    });
  };
})
