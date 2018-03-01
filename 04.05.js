/*jslint browser:true*/
/*global console*/
/*global window*/
/* The lines above are for the www.jslint.com JavaScript "validator" */
/* Just keep them like they are. Also start your functions with "use strict"; */
/* And remove extra spaces after every code or comment line. */

// A. Creating/defining a function. Note the body within curly brackets {  }
function addImg() {
    "use strict";

    //Create a new img element and save it to a variable
    var img = document.createElement("img");
    
    // Img source to HH logo
    img.src="http://www.haaga-helia.fi/sites/all/themes/haagahelia/images/logo.png";
    
    // append img to the img div
    document.getElementById("images").appendChild(img);
}

// B. Calling the function created above. Note semicolon at the end.
//helloWorld();
