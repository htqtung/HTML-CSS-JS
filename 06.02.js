// 06.02 JavasScript code

function checkAge() {

    // assign the age input field value into a variable
    var txtAge = document.getElementById("txtAge").value,
        age = Number(txtAge),
        txtResponse;

    //if age smaller than 18
    if (age < 18) {
        // assign text "Adolescents are not allowed to play." to a variable
        txtResponse = "Adolescents are not allowed to play.";
    }
    // otherwise
    else
        // assign text "Old enough to play." to a variable
        txtResponse = "Old enough to play.";
		
    // write the answer to the web page DOM, in the answer div, as the content
	document.getElementById("divAnswer").innerHTML = txtResponse;
    document.getElementById("txtAge").value = "";
}