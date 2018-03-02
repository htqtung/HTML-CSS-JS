/*jslint browser:true*/
/*global console*/
/*global window*/

const SMALL_BAG_VOLUME = 16*23*2;
const MEDIUM_BAG_VOLUME = 22*26*2;
const LARGE_BAG_VOLUME = 14*26*10;


function run() {
    "use strict";

    // assign input value to variables
    var txtSmallBag = document.getElementById("inputSmallBag").value,
        txtMediumBag = document.getElementById("inputMediumBag").value,
        txtLargeBag = document.getElementById("inputLargeBag").value,
        txtBoxSize = document.getElementById("inputBoxSize").value,
        smallBag = Number(txtSmallBag),
        mediumBag = Number(txtMediumBag),
        largeBag = Number(txtLargeBag),
        boxSize = Number(txtBoxSize),
        numOfBox,
        divAnswer;
    
    // Log values
    console.log(smallBag + ' ' + mediumBag + ' ' + largeBag + ' ' + boxSize );

    // error checking
    if(smallBag < 0 || mediumBag < 0 || largeBag < 0 || boxSize < 30 || boxSize > 100) {
        console.log("Invalid Input");
        divAnswer = "Please enter valid number, for coffee bags, they should not be smaller than 0 </br> and valid box sizes are from 30cm to 100cm.";
    }
    else if(smallBag == 0 && mediumBag == 0 && largeBag == 0) {
        console.log("The order is invalid. All three coffee bag fields are entered with 0.");
        divAnswer = "All three fields of coffee bag cannot be 0.";
    }
    // calculate number of boxes needed
    else {
        numOfBox = calculateNumberOfBox(smallBag, mediumBag, largeBag, boxSize);
        if(numOfBox <= 1) {
            divAnswer = "You need " + numOfBox + " box of size " + boxSize + "cm to fit all the bags.";
        }
        else {
            divAnswer = "You need " + numOfBox + " boxes of size " + boxSize + "cm to fit all the bags.";
        }
    }

    
    // set answer to the div Answer
    document.getElementById("divAnswer").innerHTML = divAnswer;
    // clear input boxes
    document.getElementById("inputSmallBag").value = "";
    document.getElementById("inputMediumBag").value = "";
    document.getElementById("inputLargeBag").value = "";
    document.getElementById("inputBoxSize").value = "";
}

//This function returns the minimum number of boxes needed to fit all the bags
//The function will return float number and I use Math.ceil() to return the number of box instead of round() because we need room also for the odd part.
function calculateNumberOfBox(smallBag, mediumBag, largeBag, boxSize) {
    var numOfBox, temp;
    const BOX_VOLUME = boxSize*boxSize*boxSize;
    temp = (smallBag*SMALL_BAG_VOLUME + mediumBag*MEDIUM_BAG_VOLUME + largeBag*LARGE_BAG_VOLUME)/BOX_VOLUME;
    console.log("Calculation result: " + ((smallBag * SMALL_BAG_VOLUME + mediumBag * MEDIUM_BAG_VOLUME + largeBag * LARGE_BAG_VOLUME) / BOX_VOLUME).valueOf());
    numOfBox = Math.ceil(temp);
    return numOfBox;
}