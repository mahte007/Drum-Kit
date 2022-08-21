
//EventHandler
//Detect Button Press
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        handleClick(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


//Detect Keyboard Press
document.addEventListener("keydown", function(){
    var keyPressed = event.key;
    handleClick(keyPressed);
    buttonAnimation(keyPressed);
});



//Checking Which key/button was clicked
function handleClick(key){
    switch (key) {
        case "w":
            playSound("tom-1");
            break;

        case "a":
            playSound("tom-2");
            break;

        case "s":
            playSound("tom-3");
            break;  
            
        case "d":
            playSound("tom-4");
            break;

        case "j":
            playSound("crash");
            break;
            
        case "k":
            playSound("kick-bass");
            break; 

        case "l":
            playSound("snare");
            break;    

    
        default: console.log(this.innerHTML);
            break;
    }
    
}


//Play sound
function playSound(instrument){
    var instrument = new Audio("sounds/"+ instrument +".mp3");
    instrument.play();
}

    
//Animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}