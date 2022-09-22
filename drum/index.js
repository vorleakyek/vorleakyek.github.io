
let numDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonText = this.innerHTML;
        makeSound(buttonText);
        buttonAnimation(buttonText);
    });  
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(char) {
    switch (char) {
        case "w": 
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;

        case "a":
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break; 

        case "s":
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;

        case "d":
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break;

        case "j":
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;

        case "k":
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;

        case "l":
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
            break;

        default: 
            console.log(char);
        }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey); 
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}

