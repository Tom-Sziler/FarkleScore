function Player(name){
  this.name = name;
  this.points= 0;
  this.currentTurn = 0;
  this.currentRoll = 0;
}

function Game(){
  this.playerArr = [];
}

var turnTracker=0;

Game.prototype.addPlayer = function(name){
  this.playerArr.push(new Player(name));
}

Player.prototype.one = function(){
  this.currentRoll += 100;
};

Player.prototype.five = function(){
  this.currentRoll += 50;
};

Player.prototype.threeOnes = function(){
  this.currentRoll += 300;
};

Player.prototype.threeTwos = function(){
  this.currentRoll += 200;
};

Player.prototype.threeThrees = function(){
  this.currentRoll += 300;
};

Player.prototype.threeFours = function(){
  this.currentRoll += 400;
};

Player.prototype.threeFives = function(){
  this.currentRoll += 500;
};

Player.prototype.threeSixes = function(){
  this.currentRoll += 600;
};

Player.prototype.threePairs = function(){
  this.currentRoll += 1500;
};

Player.prototype.fourKind = function(){
  this.currentRoll += 1000;
};

Player.prototype.fiveKind = function(){
  this.currentRoll += 2000;
};

Player.prototype.sixKind = function(){
  this.currentRoll += 3000;
};

Player.prototype.twoTriplets = function(){
  this.currentRoll += 2500;
};


Player.prototype.fourAndTwo = function(){
  this.currentRoll += 1500;
};

Player.prototype.straight = function(){
  this.currentRoll += 1500;
};

Player.prototype.finishRoll = function(){
  this.currentTurn += this.currentRoll;
  this.currentRoll = 0;
};

Player.prototype.finishTurn = function(){
  this.currentTurn += this.currentRoll;
  this.currentRoll = 0;
  
  if(this.points===0 && this.currentTurn < 500){
    alert("Keep Rolling, you need 500 points to get on the board!")
    return false;
  } else {
    this.points += this.currentTurn;
    this.currentTurn = 0;
    if(this.points >= 10000){
      return this.name+ " Wins!";
    } 
  }
  return true;
};

Player.prototype.farkle = function(){
  this.currentTurn = 0;
  this.currentRoll = 0;
 
};

function advanceTurn(playerCount){
  if(turnTracker < playerCount-1){
    turnTracker++;
  } else {
    turnTracker=0;
  }
}




$(document).ready(function(){

 var farkle = new Game();
 
 var playerCount;
 $('#gameScreen').hide();

 $('#enterPlayer').on('click', function(){
  farkle.addPlayer($('#playerNameInput').val());
  var num = farkle.playerArr.length-1;
  $('#playerList').append('<li>' + farkle.playerArr[num].name + ": " + '<span>' + farkle.playerArr[num].points+ '</span>' + '</li>');
  $('#playerNameInput').val("").focus();
 });

 $('#startButton').on('click', function(){
   $('#startScreen').hide();
   $('#gameScreen').show();
   $('#currentPlayer').text(farkle.playerArr[turnTracker].name + "'s Turn");
   $('#currentPlayerPoints').text(farkle.playerArr[turnTracker].points)
   playerCount = farkle.playerArr.length;
 });

$('#one').on('click', function(){
  farkle.playerArr[turnTracker].one();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});

$('#five').on('click', function(){
  farkle.playerArr[turnTracker].five();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#threeOnes').on('click', function(){
  farkle.playerArr[turnTracker].threeOnes();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#threeTwos').on('click', function(){
  farkle.playerArr[turnTracker].threeTwos();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#threeThrees').on('click', function(){
  farkle.playerArr[turnTracker].threeThrees();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#threeFours').on('click', function(){
  farkle.playerArr[turnTracker].threeFours();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#threeFives').on('click', function(){
  farkle.playerArr[turnTracker].threeFives();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#threeSixes').on('click', function(){
  farkle.playerArr[turnTracker].threeSixes();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#threePairs').on('click', function(){
  farkle.playerArr[turnTracker].threePairs();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#twoTriplets').on('click', function(){
  farkle.playerArr[turnTracker].twoTriplets();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#fourKind').on('click', function(){
  farkle.playerArr[turnTracker].fourKind();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#fiveKind').on('click', function(){
  farkle.playerArr[turnTracker].fiveKind();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#sixKind').on('click', function(){
  farkle.playerArr[turnTracker].sixKind();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#fourAndTwo').on('click', function(){
  farkle.playerArr[turnTracker].fourAndTwo();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#straight').on('click', function(){
  farkle.playerArr[turnTracker].straight();
 $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
});


$('#rollAgain').on('click', function(){
  farkle.playerArr[turnTracker].finishRoll();
  $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
  $('#currentTurnPoints').text(farkle.playerArr[turnTracker].currentTurn);
});



$('#endTurn').on('click', function(){
  var check = farkle.playerArr[turnTracker].finishTurn();
  if(check){
    $('#playerList li:nth-child('+ (turnTracker+1) +')').text(farkle.playerArr[turnTracker].name+ ": " + farkle.playerArr[turnTracker].points);
    advanceTurn(playerCount);
    $('#currentPlayer').text(farkle.playerArr[turnTracker].name + "'s Turn");
    $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
    $('#currentTurnPoints').text(farkle.playerArr[turnTracker].currentTurn);
  } else {
     $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
    $('#currentTurnPoints').text(farkle.playerArr[turnTracker].currentTurn);
  }
});

$('#farkle').on('click', function(){
  farkle.playerArr[turnTracker].farkle();
  $('#currentRollPoints').text(farkle.playerArr[turnTracker].currentRoll);
  $('#currentTurnPoints').text(farkle.playerArr[turnTracker].currentTurn);
  advanceTurn(playerCount);
  $('#currentPlayer').text(farkle.playerArr[turnTracker].name + "'s Turn");
});





});


