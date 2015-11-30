var players = ["player1", "player2"];
var player1_total = 501;
var player2_total = 501;
var playing = "";
var total_thrown = 0;
var message = "";
var darts = [];
var dart1 = "";
var dart2 = "";
var dart3 = "";


var valid = [180, 177, 174, 171, 170, 168, 167, 165, 164, 162];
var outs = [170, 167, 164, 161, 160];
var dart1_value = 0;
var dart2_value = 0;
var dart3_value = 0;
var player1_shot_total = 0;
var player2_shot_total = 0;
var round_total = 0;
var temptotal = 0;
var list = "";

var showHideForms = function(player) {
  if (player == "player1") {
    $("#player1_form").show();
    $("#player2_form").hide();
  }else {
    $("#player2_form").show();
    $("#player1_form").hide();
  };
};



playing = players[Math.floor(Math.random() * 2)];
message = playing + " to throw first";
$('#instructions').text(message);
showHideForms(playing);




$('input[type="checkbox"]').on('change', function() {
 $(this).siblings('input[type="checkbox"]').prop('checked', false);
});






function isInArray(array, search) {
  return (array.indexOf(search) >= 0) ? true : false; 
}

var checkMessages = function(player){

 if(isInArray(outs, player + "_total")){
   alert("you are on a finish");
 }


}


var takeRound = function(player){
    $('#' + player + '_submit').off('click');

  // checkMessages(player);

  // alert(player + " throw your first dart");
  $('#' + player + '_info').text(player + ": Enter the value of your three darts below in the order they were thrown and click submit - select 0 for a miss");
  
  $('#' + player + '_submit').click(function(){
    dart1_value = parseInt($('#' + player + '_dart1').val());
    dart2_value = parseInt($('#' + player + '_dart2').val());
    dart3_value = parseInt($('#' + player + '_dart3').val());
    
    

    if (checkDarts()){
      takeRound();

    }else{
      calculateTotal();
      checkWinner();


      updateScores(player);

      clearRound();

      changePlayer(player);
      showHideForms(playing);


      game();
    }
    

    


  }); 
  
};


var checkDarts = function(){
  checkDart(dart1_value);
  checkDart(dart2_value);
  checkDart(dart3_value);
}

var game = function(){
  // e.preventDefault();
  // select_first_player();
  takeRound(playing);
};



var changePlayer = function(player){
  if (player === "player1") {
    playing = "player2";
  } else {
    playing = "player1";
  };
  return playing;

  
};






var checkDart = function(dart){

  if (dart > 20 ) {
    alert("The highest you can score with one dart is 20 - please select again");
    // clearRound();
      return false;
  } else
  if (dart < 0 ) {
    alert("a dart cannot have a negative value");
    return false;
  }else {
    return true;
  }
};





var updateScores = function(player){


  if (player == "player1"){
        // alert("Player one - three dart total: " + player_shot_total);
        player1_total = player1_total - round_total;

    // temptotal = player1_total;
    list = $('#player1_total li').last();
    list.after('<li>' + player1_total + '</li>');
    return false;
    
  }else {
        // alert("Player one - three dart total: " + player_shot_total);
        player2_total = player2_total - round_total;
    // temptotal = player2_total;
    list = $('#player2_total li').last();
    list.after('<li>' + player2_total + '</li>');
    return false;
  };
        // alert(player1_total);

    // var listItem = $( '#my-unordered-list li' ).first();
    // listItem.appendTo( '#my-unordered-list' );
    // list = $('#' + player + '_total li').last();
    // list.append('<li>' + temptotal + '</li>');

    list = "";


  };

  var clearRound = function() {
  // e.preventDefault();
  dart1_value = 0;
  dart2_value = 0;
  dart3_value = 0;
  round_total = 0;
  list = "";
  player1_shot_total = 0;
  player2_shot_total = 0;
  temptotal = 0;
  darts = [];




};


var calculateTotal = function(){
    // e.preventDefault();

// PLAYER 1

if (playing == "player1"){

 // DART 1     
  if (dart1_value == 0) {
  // darts.push("miss");
  } else

  if ($('#1double1').is(':checked')){
  dart1_value = 2 * (dart1_value);
  darts.push("double");
  }else

  if ($('#1triple1').is(':checked')){
  dart1_value = 3 * (dart1_value);
  darts.push("triple");
  }else {
  darts.push("single");
  }
// DART 2

  if (dart2_value == 0) {
  // darts.push("miss");
  }else
  if ($('#1double2').is(':checked')){
  dart2_value = 2 * (dart2_value);
  darts.push("double") ;
  }else
  if ($('#1triple2').is(':checked')){
  dart2_value = 3 * (dart2_value);
  darts.push("triple");
  }else  {
  darts.push("single");
  };
// DART 3

  if (dart3_value == 0) {
  // darts.push("miss");
  }else

  if ($('#1double3').is(':checked')){
  dart1_value = 2 * (dart1_value);
  darts.push("double");
  }else
  if ($('#1triple3').is(':checked')){
  dart3_value = 3 * (dart3_value);
  darts.push("triple");
  }else{
  darts.push("single");
  };

round_total = parseInt(dart1_value + dart2_value + dart3_value);
alert(darts);
if (round_total == player1_total){
  checkWinner();
} else 
if (( player1_total - round_total) <= 1) {
  alert("bust");
  clearRound();
  $('#player1_submit').off('click');
  player = "player2";

  takeRound(playing);
};





} else {

// DART1
  if (dart1_value == 0) {
    // darts.push("miss");
  }else

  if ($('#2double1').is(':checked')){
    dart1_value = 2 * (dart1_value);
    darts.push("double");
  }else

  if ($('#2triple1').is(':checked')){
    dart1_value = 3 * (dart1_value);
    darts.push("triple");
  }else {
    darts.push("single");
  };

  // DART 2

  if (dart2_value == 0) {
    // darts.push("miss");
  }else
  if ($('#2double2').is(':checked')){
    dart2_value = 2 * (dart2_value);
    darts.push("double");
  }else
  if ($('#2triple2').is(':checked')){
    dart2_value = 3 * (dart2_value);
    darts.push("triple");
  }else {
    darts.push("single");
  };

// };  
// DART 3


  if (dart3_value == 0) {
  // darts.push("miss");
  }else


  if ($('#2double3').is(':checked')){
  dart3_value = 2 * (dart3_value);
  darts.push("double");

  }else
  if ($('#2triple3').is(':checked')){
  dart3_value = 3 * (dart3_value);
  darts.push("triple");
  }else {
  darts.push("single");

  };

};

round_total = parseInt(dart1_value + dart2_value + dart3_value);
alert(darts);
if (round_total == player2_total){
  checkWinner();
  } else if (( player2_total - round_total) <= 1) {
  alert("bust");
  clearRound();
  $('#player2_submit').off('click');
  player = "player1";

  takeRound(playing);
  // } else {
  //   return round_total;
};

// }; 

};

var checkWinner = function(){
  // alert('checking the winner');
  if (darts[darts.length-1] == "double") {
    winner();
  };

  

};

var winner = function(){
  alert("We have a winner");

};

game();












