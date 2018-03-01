// 09.08 JavasScript code


// Define the array variable inside the script element, but NOT inside the function. 
// Then they will be global and thus available for all functions to read from or write to.

var names = [];
var txtNameList = "";

function addName() {
    // Assign name from the input field to the array
    names.push(document.getElementById("txtName").value);
    // Go through the array in a for loop adding each name at the end of the namesText
    txtNameList += " " + document.getElementById("txtName").value;
    // Write the names on the page, to the names div, as content of the div
    document.getElementById("divNameList").innerHTML = txtNameList;
    // Empty the input field of name as that name was just put in the array
    document.getElementById("txtName").value = "";
    // Empty the answer text
    document.getElementById("divOutput").innerHTML = "";
}

function makeDraw() {

    // Randomize the index of the winner
    var randomIndex = Math.floor(Math.random()*names.length);
    var x = 0;
    while(x < 50) {
        console.log(randomIndex = Math.floor(Math.random()*names.length));
        x++;
    }
    
    // Write the answer on the page
    document.getElementById("divOutput").innerHTML = names[randomIndex];

}
