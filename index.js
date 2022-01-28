
document.addEventListener('keydown', (event)=>
{
    var key=event.key;
     makeSound(key);
     buttonAnimation(key);
});

  n=document.querySelectorAll(".drum").length;
  for(let i=0;i<n;i++)
  {
document.querySelectorAll(".drum")[i].addEventListener('click',function()
{
      var key=this.innerHTML;
    makeSound(key);
    buttonAnimation(key);
});
}
function makeSound(key){

  switch(key)
  {
    case 'w':
    var audio= new Audio('sounds/tom-1.mp3');
    audio.play();
    case 'a':
    var audio= new Audio('sounds/tom-2.mp3');
    audio.play();
    case 's':
    var audio= new Audio('sounds/tom-3.mp3');
    audio.play();
    case 'd':
    var audio= new Audio('sounds/tom-4.mp3');
    audio.play();
    case 'j':
    var audio= new Audio('sounds/snare.mp3');
    audio.play();
    case 'k':
    var audio= new Audio('sounds/crash.mp3');
    audio.play();
    case 'l':
    var audio= new Audio('sounds/kick-bass.mp3');
    audio.play();
  }
}
function buttonAnimation(key)
{
     var activeButton=document.querySelector("."+key);
     activeButton.classList.add("pressed");
      setTimeout(function(){
             activeButton.classList.remove("pressed");
      },100);
}

// var audio =new Audio('sounds/tom-1.mp3');
// audio.play();
