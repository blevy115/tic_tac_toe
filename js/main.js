document.addEventListener('DOMContentLoaded', function () {
  var square = document.getElementsByClassName('square')
  var counter = 0
  for (var i=0; square.length>i; i++){
    square[i].addEventListener('click', function(e){
        var img = document.createElement('img')
        if (counter%2===1){
        img.src = "img/0.png"
      }else if (counter%2===0){
        img.src = "img/x.png"
      }
      this.appendChild(img)
      counter ++
        // this.style.backgroundColor = "red";
    });
  };
})
