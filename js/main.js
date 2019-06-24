document.addEventListener('DOMContentLoaded', function(){

    // Getting some handles to the elements
    const body = document.querySelector('body');
    const button = document.querySelector('button');
    const status = document.querySelector('.status');
    const lightSwitch = document.querySelector('.switch');

    // Set up lister
    lightSwitch.addEventListener('click', function(event) {
        let elm = event.target;

        // Choose a div to define our on/off state by
        let switchIsOn = elm.classList.contains("on");

        if (switchIsOn) {
            // Turn off off
            console.log("It's on, turning off");

            elm.classList.remove("on");
            elm.classList.add("off");

            body.classList.remove("light");
            body.classList.add("dark");

            status.innerText = "Hey, who turned off the lights?";

        } else {
            // Turn it on
            console.log("It's off, turning on");

            elm.classList.remove("off");
            elm.classList.add("on");

            body.classList.remove("dark");
            body.classList.add("light");

            status.innerText = "It's so bright in here!";
        }

    });

    // When someone hits the button in the switch,
        // remove the current state class (on/off),
        // and apply the opposite class (on/off)

    // when it's on,
    //     Lastly, change the text in box to say "It's so bright in here!"
    // when it's off
    //     and "Hey, who turned off the lights?"


    // Swap the colors of the body's background and text
    // by adding or removing the dark/light class

})