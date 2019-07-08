// Inside the curly braces below is the code that runs when someone clicks the
// single 6-sided die.
function rollD6() {
    const roll = 5;


    // No need to alter the rest of this function!
   
    // Make a relative path to the correct image based on what the roll was.
    const newSrc = `./images/d6/${roll}.png`;

    // Grab the DOM node that corresponds to the image we want to change.
    const rollImage = document.querySelector('.d6-roll');
    
    // Set that image's `src` attribute to our new path!
    rollImage.src = newSrc;
}

// Inside the curly braces below is the code that runs when someone clicks the
// 12-sided die.
function rollD12() {
    const roll = 11;


    // No need to alter the rest of this function!
   
    // Make a relative path to the correct image based on what the roll was.
    const newSrc = `./images/numbers/${roll}.png`;

    // Grab the DOM node that corresponds to the image we want to change.
    const rollImage = document.querySelector('.d12-roll');
    
    // Set that image's `src` attribute to our new path!
    rollImage.src = newSrc;
}

// Inside the curly braces below is the code that runs when someone clicks the
// 20-sided die.
function rollD20() {
    const roll = 19;


    // No need to alter the rest of this function!
   
    // Make a relative path to the correct image based on what the roll was.
    const newSrc = `./images/numbers/${roll}.png`;

    // Grab the DOM node that corresponds to the image we want to change.
    const rollImage = document.querySelector('.d20-roll');
    
    // Set that image's `src` attribute to our new path!
    rollImage.src = newSrc;
}

// Inside the curly braces below is the code that runs when someone clicks
// EITHER of the two six-sided dice in their own section.
function rollDoubleD6() {
    const roll1 = 5;
    const roll2 = 5;


    // No need to alter the rest of this function!
   
    // Make relative paths to the correct images based on what the roll was.
    const newSrc1 = `./images/d6/${roll1}.png`;
    const newSrc2 = `./images/d6/${roll2}.png`;

    // Grab the DOM nodes that corresponds to the images we want to change.
    const rollImage1 = document.querySelector('.double-d6-roll-1');
    const rollImage2 = document.querySelector('.double-d6-roll-2');
    
    // Set those images' `src` attributes to our new paths!
    rollImage1.src = newSrc1;
    rollImage2.src = newSrc2;
}



// This section grabs the images using the same selectors CSS uses to target the
// html (in this case, they are classes, but they could be tags or ids or more
// complex selectors) and assigns a function to run when they're clicked.

// No need to touch this section at all!

document.querySelector('.d6-roll').onclick = rollD6;
document.querySelector('.double-d6-roll-1').onclick = rollDoubleD6;
document.querySelector('.double-d6-roll-2').onclick = rollDoubleD6;
document.querySelector('.d12-roll').onclick = rollD12;
document.querySelector('.d20-roll').onclick = rollD20;


// For the random image stretch goal, uncommnet the following line.
// document.querySelector('.stretch-goal').onclick = chooseRandomImageForStretchGoal;

// For the double d6 separate-behavior stretch goal, uncomment the following line.
// document.querySelector('.double-d6-roll-2').onclick = rollSecondDoubleD6;