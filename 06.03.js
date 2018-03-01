// 06.03 JavasScript code

function comparePackages() {
    'use strict';
    // assign input field values into a variables
    var txtMessagesFee = 0.069,
        callFee = 0.069,
        allInclusivePackage = (29.90).toFixed(2),
        monthlyFee = 19.90,
        pAnswer,
        
        txtMessages = document.getElementById("txtMessages").value,
        numMessages = Number(txtMessages),
        txtCallTime = document.getElementById("txtCallTime").value,
        numCallTime = Number(txtCallTime),
        // calculate the costs of the Special Package
        specialPackage = (monthlyFee + numMessages * txtMessagesFee + numCallTime * callFee).toFixed(2);

    // If the Special package is cheaper than the All-inclusive package
    if (specialPackage < allInclusivePackage)
        // assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)" to a variable
        pAnswer = "The Special package (" + specialPackage + ") is cheaper than the All-inclusive package (" + allInclusivePackage + ").";
    // otherwise
    else
        // assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)" to a variable
        pAnswer = "The All-inclusive package (" + allInclusivePackage + ") is better than the Special package (" + specialPackage + ").";
		// write the answer to the web page DOM, in the answer div, as the content
	document.getElementById("divAnswer").innerHTML = pAnswer;
    // clear the input box
    document.getElementById("txtMessages").value = "";
    document.getElementById("txtCallTime").value = "";
}