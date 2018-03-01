// 06.01 JavasScript code

function calculateFee() {
    'use strict';
    // Read value from the input field
    var txtSellingPrice = document.getElementById("txtPrice").value,
        numSellingPrice = Number(txtSellingPrice),
        // Calculate fee, save the result to a variable
        agentFee = (numSellingPrice * 3.44 / 100).toFixed(2);
    // If the fee is under minimum, change the fee
    if (agentFee < 2400) {
        agentFee = (2400).toFixed(2);
    }
    // Write the answer on the page, to the fee div, as content of the div
    document.getElementById("divAnswer").innerHTML = ('Real estate agent&apos;s fee is ' + agentFee + '&#8364;');
    document.getElementById("txtPrice").value = "";
}


