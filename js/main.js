document.addEventListener('DOMContentLoaded', function () {

  // Define variables and determine winner function
  var square = document.getElementsByClassName('square');
  var counter = 0;
  var message = document.createElement('div');

  function winMessage(move){
    if(move.className === 'square x'){
      message.innerText = "We have a winner! Player 'X' has won";
    }else if (move.className === 'square o'){
      message.innerText = "We have a winner! Player 'O' has won";
    };
    document.body.appendChild(message);
  };

  // Start click event Loop
  for (var i=0; square.length>i; i++){
    square[i].className = 'square '+i;
    square[i].addEventListener('click', function(e){
      if(message.innerText === "");
      if (this.classList.contains('o') === false && this.classList.contains('x') === false){ // Determine if square is blank
        var img = document.createElement('img');
        if (counter%2===1){
          img.src = "img/0.png";
          this.className = 'square o';
        }else if (counter%2===0){
          img.src = "img/x.png";
          this.className = 'square x';
        };
        this.appendChild(img);
        counter ++; // Alternate between 'X' and 'O'
      };

  // Win Conditions
      if(square[0].className === square[1].className && square[0].className === square[2].className){
        var win = [square[0],square[1],square[2]];
        win.forEach(function(box){box.style.backgroundColor = 'yellow'});
        winMessage(win[0]);
      }else if(square[3].className === square[4].className && square[3].className === square[5].className){
        var win = [square[3],square[4],square[5]];
        win.forEach(function(box){box.style.backgroundColor = 'yellow'});
        winMessage(win[0]);
      }else if(square[6].className === square[7].className && square[6].className === square[8].className){
        var win = [square[6],square[7],square[8]];
        win.forEach(function(box){box.style.backgroundColor = 'yellow'});
        winMessage(win[0]);
      }else if(square[0].className === square[3].className && square[0].className === square[6].className){
        var win = [square[0],square[3],square[6]];
        win.forEach(function(box){box.style.backgroundColor = 'yellow'});
        winMessage(win[0]);
      }else if(square[1].className === square[4].className && square[1].className === square[7].className){
        var win = [square[1],square[4],square[7]];
        win.forEach(function(box){box.style.backgroundColor = 'yellow'});
        winMessage(win[0]);
      }else if(square[2].className === square[5].className && square[2].className === square[8].className){
        var win = [square[2],square[5],square[8]];
        win.forEach(function(box){box.style.backgroundColor = 'yellow'});
        winMessage(win[0]);
      }else if(square[0].className === square[4].className && square[0].className === square[8].className){
        var win = [square[0],square[4],square[8]];
        win.forEach(function(box){box.style.backgroundColor = 'yellow'});
        winMessage(win[0]);
      }else if(square[2].className === square[4].className && square[2].className === square[6].className){
        var win = [square[2],square[4],square[6]];
        win.forEach(function(box){box.style.backgroundColor = 'yellow'});
        winMessage(win[0]);
      };

  // Tie checker
      if (message.innerText === "");
      var tie = 0;
      for (var i=0; square.length>i; i++){
        if (square[i].classList.contains(i) === false){ // count how many squares have been used if class has changed
          tie ++;
          if (tie === 9){
            message.innerText = "We have a tie";
            document.body.appendChild(message);
          };
        };
      };
    });
  };
  
});
