var winScore = 0;
var lossScore = 0;
var rNumber = Math.floor(Math.random() * 101) + 19;
$("#randomNumber").text(rNumber);



var C1 = Math.floor(Math.random() * 11) + 1;
var C2 = Math.floor(Math.random() * 11) + 1;
var C3 = Math.floor(Math.random() * 11) + 1;
var C4 = Math.floor(Math.random() * 11) + 1;


$("#scoreWins").html(winScore);
$("#scoreLosses").html(lossScore);

var counter = 0;
$("#scoreTotal").text(counter);

function restartGame() {

rNumber = Math.floor(Math.random() * 101) + 19;
$("#randomNumber").text(rNumber);
C1 = Math.floor(Math.random() * 11) + 1;
C2 = Math.floor(Math.random() * 11) + 1;
C3 = Math.floor(Math.random() * 11) + 1;
C4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#scoreTotal").text(counter);

}

function win() {

  alert("You win!");
  winScore ++;
  $("#scoreWins").text(winScore);
  restartGame();
}

function lose() {

  alert("You lose!");
  lossScore ++;
  $("#scoreLosses").text(lossScore);
  restartGame();
}

$('#C1').on ('click', function(){
    counter = counter + C1;
    
    $('#scoreTotal').text(counter); 
          
        if (counter == rNumber){
          win();
        }
        else if (counter > rNumber){
          lose();
        }   
  });  

$('#C2').on ('click', function(){
    counter = counter + C2;
    
    $('#scoreTotal').text(counter); 
         
        if (counter == rNumber){
          win();
        }
        else if (counter > rNumber){
          lose();
        }   
  });  

$('#C3').on ('click', function(){
    counter = counter + C3;
    
    $('#scoreTotal').text(counter); 
          
        if (counter == rNumber){
          win();
        }
        else if (counter > rNumber){
          lose();
        }   
  });  

$('#C4').on ('click', function(){
    counter = counter + C4;
    
    $('#scoreTotal').text(counter); 
         
        if (counter == rNumber){
          win();
        }
        else if (counter > rNumber){
          lose();
        }   
  });  

