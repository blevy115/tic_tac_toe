document.addEventListener('DOMContentLoaded', function () {
  var square = document.getElementsByClassName('square')
  var counter = 0
  var message = document.createElement('div');

  for (var i=0; square.length>i; i++){
    square[i].className = 'square '+i
    square[i].addEventListener('click', function(e){
      if (this.classList.contains('o') === false &&
          this.classList.contains('x') === false){
        var img = document.createElement('img')
        if (counter%2===1){
        img.src = "img/0.png"
        this.className = 'square o'
      }else if (counter%2===0){
        img.src = "img/x.png"
        this.className = 'square x'
      }
      this.appendChild(img)
      counter ++
    };


// Win Conditions
      if(square[0].className === square[1].className && square[0].className === square[2].className ||
        square[3].className === square[4].className && square[3].className === square[5].className ||
        square[6].className === square[7].className && square[6].className === square[8].className ||
        square[0].className === square[3].className && square[0].className === square[6].className ||
        square[1].className === square[4].className && square[1].className === square[7].className ||
        square[2].className === square[5].className && square[2].className === square[8].className ||
        square[0].className === square[4].className && square[0].className === square[8].className ||
        square[2].className === square[4].className && square[2].className === square[8].className)
        {
          message.innerText = "We have a winner!!";
          document.body.appendChild(message)
        }

        // Find a better way to do this
      else{
        var tie = 0
        for (var i=0; square.length>i; i++){
          if (square[i].classList.contains(i) === false)
          {tie ++;
            if (tie === 9){
              message.innerText = "We have a tie";
              document.body.appendChild(message)
            }
          }
        }
      }
    });
  };
});
