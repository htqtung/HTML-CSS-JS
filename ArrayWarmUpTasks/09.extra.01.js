// 09.08 JavasScript code


// Define the array variable inside the script element, but NOT inside the function. 
// Then they will be global and thus available for all functions to read from or write to.

function generateNumber() {
    var divOutput = "";
    var ramdomValue;
    // clear the answer div before generate new values
    document.getElementById("divOutput").value = "";
    // get the number of numbers to generate
    var txtNumOfNums = document.getElementById("txtNumber").value;
    var numOfNums = Number(txtNumOfNums),
        numArray = [];
    
    //generate number and add to the array
    for (var i = 0; i < numOfNums; i++) {
        var duplicate = false;
        ramdomValue = Math.floor(Math.random() * 39) + 1;
        for (var j = 0; j < numArray.length; j++) {
            if (ramdomValue === numArray[j]) {
                duplicate = true;
                break;
            }            
        }
        if (duplicate === false) {
            numArray.push(ramdomValue);
        }
        else
            i--;
    }
    //sort the array
    numArray.sort(function(a, b){return a-b});
    //write the array to the div variable
    for (var i = 0; i < numArray.length; i++) {
        if(i < numArray.length-1)
            divOutput += (numArray[i] + " ");
        else
            divOutput += numArray[i];
    }
    
    // Write the array to the browser
    document.getElementById("divOutput").innerHTML = divOutput;
    // Empty the input field
    document.getElementById("txtNumber").value = "";
}
