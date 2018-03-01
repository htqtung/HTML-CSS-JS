// 08.04 JavasScript code

var count;
// Randomize the pips1 and pips2 once
var pips1 = Math.round((Math.random() * 5) + 1);
var pips2 = Math.round((Math.random() * 5) + 1);
// Set the count to be one (now you have randomized once)
count = 1;
// Repeat as long as (pips are not equal) 
while(pips1 !== pips2) {
    // Randomize again
    // Increment counter by one
    pips1 = Math.round((Math.random() * 5) + 1);
    pips2 = Math.round((Math.random() * 5) + 1); 
    count++;
}

// Write the answer (including the count) to the html page with the document.write() method
document.write("Same dice pips: " + pips1 + " and " + pips2);
document.write("</br>");
document.write("There were " + count + " randomization rounds until we got the same pips.");


