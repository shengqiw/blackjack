//Number of cards on screen
var playerCardCount = 0;
var dealerCardCount = 0;

//Total score of cards on screen
var totalDealerScore = 0;
var totalPlayerScore = 0;

function getRandom(num){
  var my_num = Math.floor(Math.random()*num);
  return my_num;
}

function deal() {
  playerCardCount = 0;
  dealerCardCount = 0;

  totalPlayerScore = 0;
  totalDealerScore = 0;

  var index = getRandom(52);
  var index2 = getRandom(52);
  var index3 = getRandom(52);
  //alert(index);
  dealer_sorter(index);
  player_sorter(index2);
  player_sorter(index3);

  document.getElementById("deal_btn").style.display = "none";
}

function dealer_sorter(num) {
  var number = Math.floor(num / 4) + 1;
  var type = number % 4;

  //Adding Scores
  if(number > 10) {
    totalDealerScore += 10;
  }
  else if(number == 1) {
    totalDealerScore += 11;
  }
  else {
    totalDealerScore += number;
  }

  if(number == 11) {
    number = "J";
  }
  else if(number == 12) {
    number = "Q";
  }
  else if(number == 1) {
    number = "A";
  }
  else if (number == 13) {
    number = "K";
  }

  var cardName = "".concat(number);
  //alert(cardName);

  if(type == 0) {
    cardName = cardName.concat("C");
  }
  else if(type == 1) {
    cardName = cardName.concat("D");
  }
  else if (type == 2) {
    cardName = cardName.concat("H");
  }
  else if (type == 3) {
    cardName = cardName.concat("S");
  }

  var img_src = cardName.concat(".png");

  var image = document.createElement("img");

  image.src = "Cards/".concat(img_src);

  image.style.width = '164px';
  image.style.height = '164px;'

  dealer_hand.appendChild(image);

  dealerCardCount++;

  //alert(img);
}

function player_sorter(num) {
  var number = Math.floor(num / 4) + 1;
  var type = number % 4;

  //Adding Scores
  if(number > 10) {
    totalPlayerScore += 10;
  }
  else if(number == 1) {
    totalPlayerScore += 11;
  }
  else {
    totalPlayerScore += number;
  }


  if(number == 11) {
    number = "J";
  }
  else if(number == 12) {
    number = "Q";
  }
  else if(number == 1) {
    number = "A";
  }
  else if (number == 13) {
    number = "K";
  }

  var cardName = "".concat(number);
  //alert(cardName);

  if(type == 0) {
    cardName = cardName.concat("C");
  }
  else if(type == 1) {
    cardName = cardName.concat("D");
  }
  else if (type == 2) {
    cardName = cardName.concat("H");
  }
  else if (type == 3) {
    cardName = cardName.concat("S");
  }


  var img_src = cardName.concat(".png");

  var image = document.createElement("img");

  image.src = "Cards/".concat(img_src);

  image.style.width = '164px';
  image.style.height = '164px;'

  player_hand.appendChild(image);

  playerCardCount++;



}

function hit() {

  if(playerCardCount >= 5) {
    alert("Max number of cards dealt");
    return;
  }
  else {
    var index = getRandom(52);
    player_sorter(index);
    
    //Over 21 == lose
    if(totalPlayerScore > 21) {

        alert("You got busted");
        return;
      }
  }
}

function stay() {
  //If dealer is still in 17 bounds
  if(totalDealerScore <= 17) {
    dealerHit();
    return;
  }

  //Compare logic
  if(totalDealerScore > 21) {
    alert("You Win!");
    return;
  }
  else if(totalDealerScore < totalPlayerScore) {
    alert("You Win!");
    return;
  }


}

function dealerHit() {
  var index = getRandom(52);
  dealer_sorter(index);
}
