// 07.07 JavasScript code

// Complete the code of the function processName
function processName() {

    // 1. Read value of name from the input field
    var txtName = document.getElementById("txtName").value,

    // 2. Show it with "ALL CAPS" using toUpperCase()
    allCaps = txtName.toUpperCase(),

    // 3. Show it with  "all small letters" using toLowerCase()
    allLows = txtName.toLowerCase(),

    // 4. Tell how many characters are there (length, includes also all spaces) 
    lengthOfText = txtName.length,

    // 5. Tell, whether the input string contains the word 'muumi'
    indexOfMuumi = allLows.indexOf("muumi"),

    // 6. Tell the first character using charAt()
    firstChar = txtName.charAt(0),

    // 7. Tell which ones are the first three characters using substr().
    firstThreeChar = txtName.substr(0,3);
    var containMuumi;
    if(indexOfMuumi === -1)
        containMuumi = false;
    else
        containMuumi = true;
    document.getElementById(    "divUpperCase").innerHTML = "With upper case letters: " + allCaps;
    document.getElementById("divLowerCase").innerHTML = "With lower case letters: " + allLows;
    document.getElementById("divLength").innerHTML = "Character count: " + lengthOfText;
    if(containMuumi)
        document.getElementById("divContains").innerHTML = "Contain the text muumi";
    else
        document.getElementById("divContains").innerHTML = "Doesn't contain the text muumi";
    document.getElementById("divFirstCharacter").innerHTML = "First character: " + firstChar;
    document.getElementById("divManyCharacters").innerHTML = "First three characters: " + firstThreeChar;
        
}