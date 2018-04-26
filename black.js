function getRandom(num){
  var my_num = Math.floor(Math.random()*num);
  return my_num;
}

function deal() {
  var index = getRandom(52);
  //alert(index);
  sorter(index);
}

function sorter(num) {
  var number = Math.floor(num / 4) + 1;
  var type = number % 4;

  if(number == 11) {
    number = "J";
  }
  else if(number == 12) {
    number = "Q";
  }
  else if(number == 1) {
    number = "A"
  }
  else {
    number = "K"
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

  var img = cardName.concat(".png");



  //alert(img);
}
