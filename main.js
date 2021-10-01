'use strict';

const modalBtn = document.querySelector('.modalbtn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.clsbtn');

modalBtn.addEventListener('click', openModal);
//modal.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal() {
    modal.style.display ='block';   
}


function closeModal() {
    modal.style.display = 'none';
}

const rollBtn = document.querySelector('.btnClick');
rollBtn.addEventListener('click', DiceRoll);


function DiceRoll(roll1, roll2) {

    var roll1 = Math.trunc(Math.random() * 6) + 1
    var roll2 = Math.trunc(Math.random() * 6) + 1

    document.querySelector(".dice_img_1").setAttribute("src",
        "dice" + roll1 + ".png");

    document.querySelector(".dice_img_2").setAttribute("src",
        "dice" + roll2 + ".png");

    if (roll1 === roll2) {
        document.querySelector(".score").innerHTML = "Draw!";

    } else if (roll1 < roll2) {
        document.querySelector(".score").innerHTML = (" Morgan wins!");

    } else {
        document.querySelector(".score").innerHTML = (" You win!");

        //document.querySelector("h4").innerHTML = score;
    }

    function scoreAdd(roll1, roll2) {
        let score = 0;
        if (roll1 > roll2) {
            score++;
            //document.querySelector("h4").innerHTML = score;
        } else if (roll1 < roll2) {
            score--;
            // document.querySelector("h4").innerHTML = score;
        } else {
            score = score;
            // document.querySelector("h4").innerHTML = score;
        }



    }





}