//--------------------------------HOW TO CALL EVENT LISTENER-----------------------------------------------------------------------------------------------------------------------------------

//choosed the first button
//Event listener will listen to the event which you will tell it
//to know more about even listener, got to mdn
//even listener will have two parameters, first one is event which you want the function to listen
//second parameter is the name of the funcion which will be called when this event listener will be executed
//now handleClick function doesnt have parameter like this addEventListener(), because if there will be a parameter
//then it will be triggered just before everything happens but we want it to be triggered when click happens
//you can try by putting parantheis

// document.querySelector("button").addEventListener("click", handleClick);
//
// //this function will be called when first button will be clicked and it will give the below alert
// function handleClick(){
//     alert("I got clicked");
// }

//--------------------------------------MODIFIED : HOW TO CALL ANONYMOUS FUNCTION------------------------------------------------------------------------------------------------------------------------



//this whole thing can be written in another way, i.e instead of calling handleClick function
//we can call anonymous function i.e function without a name
//something like this
//the function is defined inside paranthesis i.e all instructions you want to happen will be inside paranthesis

// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked");
// });

//-------------------------------------MODIFIED : USE FOR LOOP TO SELELCT ALL DRUMS--------------------------------------------------------------------------------------------------------------------
//we will use for loop for all the drums

// DETECTING BUTTON PRESS

var numberOfDrumButtons = document.querySelectorAll(".drum").length; //this  will select all those having class drum and will return the length
for (var i = 0; i < numberOfDrumButtons; i++) { //used limit as numberOfDrumButtons instead of number 7 so that later if we would want to add more drums
    document.querySelectorAll(".drum")[i].addEventListener("click", function() { //use class drums in place of buttons to being more specific

        // var audio = new Audio('sounds/crash.mp3');
        // audio.play();
        // the above is the syntax for playing the Audio

        // we will use switch statement to play the sound of the key which is pressed
        var buttonInnerHTML = this.innerHTML;
        //if a button will  be pressed, we will take it's inner html and send it to function
        makeSound(buttonInnerHTML); //i've called this function for button press in screen
        buttonAnimation(buttonInnerHTML);
    });
}

// DETECTING KEY PRESS

document.addEventListener("keydown", function(event){
    //if a key will be pressed then we will send the event.key i.e the key property of the event
    makeSound(event.key); //i've called this function for kty press in keyboard
    buttonAnimation(event.key);
});

//this function will work for both button as well as key depending on parameter
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;


        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;


        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;



        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;


        //now the default may not occur in this case but it is always good practice to
        //include it, because you don't know what is going to happen in future
        //the console.log will log the button html which triggered the default case
        default:console.log();

    }

}

//let us create an animation for the buttons
//as we want to create this for both button press and key press therefore, we will create a function
function buttonAnimation(currentKey){ //let us pass the current key as parameter
    var activeButton = document.querySelector("." + currentKey)
    //we are concatinating it with do because to find the letter we have to write document.querySelector(".name of the button(e.g .w)");

    activeButton.classList.add("pressed");

    //now when we will press the button it will be little transparent and this will represent that the button got clicked
    //but that button will not chang eagain it will remain same
    // but to give the effect of animation, we want to change it again to it's original color and structure
    //so we'll use timeout function which will change it to the original state after certain time
    setTimeout(function(){
        activeButton.classList.remove("pressed");//now we have specified what we want to happen, i.e we wnat to remove the pressed class so that t goes back to it's original state
    }, 100) //second parameter would be the waiting time in milisecond
}
