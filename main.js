document.querySelector('.d6-roll').onclick = rollD6;
document.querySelector('.double-d6-roll-1').onclick = rollDoubleD6;
document.querySelector('.double-d6-roll-2').onclick = rollDoubleD6;
document.querySelector('.d12-roll').onclick = rollD12;
document.querySelector('.d20-roll').onclick = rollD20;

function rollD6() {
    const roll = 5;
   
    const newSrc = `./images/d6/${roll}.png`;
    const rollImage = document.querySelector('.d6-roll');
    rollImage.src = newSrc;
}

function rollD12() {
    const roll = 11;
   
    const newSrc = `./images/numbers/${roll}.png`;
    const rollImage = document.querySelector('.d12-roll');
    rollImage.src = newSrc;
}

function rollD20() {
    const roll = 19;
   
    const newSrc = `./images/numbers/${roll}.png`;
    const rollImage = document.querySelector('.d20-roll');
    rollImage.src = newSrc;
}

function rollDoubleD6() {
    const roll1 = 5;
    const roll2 = 5;
   
    const newSrc1 = `./images/d6/${roll1}.png`;
    const newSrc2 = `./images/d6/${roll2}.png`;
    const rollImage1 = document.querySelector('.double-d6-roll-1');
    const rollImage2 = document.querySelector('.double-d6-roll-2');
    rollImage1.src = newSrc1;
    rollImage2.src = newSrc2;
}