
// var userClickedPattern =[];

// var gamePattern=[];

// var buttonColours =["red", "blue", "green", "yellow" ];

// var level = 0;

// var started = false;

// $("document").keypress(function(){

//      if(!started){
//        $("#level-title").text("Level " + level);
//        started = true;
        
//      }


// });



// $(".btn").click(function(){

//     var userChosenColour= $(this).attr("id");

//     userClickedPattern.push(userChosenColour);

       

//      playSound(userChosenColour);
// });

// function newSequence(randomnumber){

//      level++;

//      $("#level-title").text("Level " + level);

//     var randomnumber=Math.floor(Math.random()*4);
   
//     var randomChosenColour = buttonColours[randomnumber];

//     gamePattern.push(randomChosenColour);

//     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//     playsound(randomChosenColour);
// }
//     function playsound(name)
//     {
//         var audio = new Audio("sounds/" + name + ".mp3");
//         audio.play();
//     }   
// function animatePress(currentColour){
//     $("#" + currentColour).addClass("pressed");
//     setTimeout(function(){
//         $("#" + currentColour).removeClass("pressed");
//     },100);
// }



var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){
  
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("Succeed");

        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game over,Press any key to Restart");
        startover();
    }
}
function startover()
{
  level=0;
  gamePattern=[];
  started=false;
}
function nextSequence() {

    userClickedPattern=[];

  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
