//Detecting button press

var numberofbuttons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberofbuttons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHtml = this.innerHTML;

    makesound(buttonInnerHtml);
    buttonanimation(buttonInnerHtml);
});
 }

//Detecting Keyboard Press

 document.addEventListener("keypress",function(event){
   makesound(event.key);
   buttonanimation(event.key);
 });


function makesound(key){
    switch (key)
    {
       case "w":
           var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
           break;
       case "a":
           var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
           break;
           case "s":
           var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
           break;
           case "d":
           var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
           break;
           case "j":
           var crash=new Audio('sounds/crash.mp3');
            crash.play();
           break;
           case "k":
           var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
           break;
           case "l":
           var snare=new Audio('sounds/snare.mp3');
            snare.play();
           break;
       default: console.log(buttonInnerHtml);
           break;
   }
}

function buttonanimation(currentkey){
  var activeButton= document.querySelector("."+ currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}
// var audio=new Audio('sounds/tom-1.mp3');
//     audio.play();
// this.style.color="white"
