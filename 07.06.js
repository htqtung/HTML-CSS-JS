// 07.06 JavasScript code

// Define a function (1.) 
function calculateKelaReimbursement(txtLengthOfVisit) {
    var lengthOfVisit = parseInt(txtLengthOfVisit),
        reimbursement;
    if(lengthOfVisit <= 10)
        reimbursement = 8;
    else if(lengthOfVisit <= 20)
        reimbursement = 11;
    else if(lengthOfVisit <= 30)
        reimbursement = 13.50;
    else if(lengthOfVisit <= 45)
        reimbursement = 16.50;
    else if(lengthOfVisit <= 60)
        reimbursement = 21;
    else
        reimbursement = 0;
    return reimbursement;
}

// Define a function (2.) 
function calculateCustomerBilling(txtDoctorFee, txtKelaReimbursement) {
    var doctorFee = parseFloat(txtDoctorFee),
        keraReimbursement = parseFloat(txtKelaReimbursement),
        result = doctorFee - keraReimbursement;
    return result;
}

// Define a function (3.) 


// Complete the code of the function calculate.
function calculate() {

    // 1. Get values from the input fields
    var txtLengthOfVisit = document.getElementById("txtLength").value,
        lengthOfVisit = Number(txtLengthOfVisit),
        txtDoctorFee = document.getElementById("txtDoctorsFee").value,
        doctorsFee = (Number(txtDoctorFee)).toFixed(2),
        kelaReimbursement,
        customerBilling,
        pAnswer;

    // 2. Call the function (1.) which calculates Kela reimbursement 
    kelaReimbursement = (calculateKelaReimbursement(lengthOfVisit)).toFixed(2);

    // 3. Call the function (2.) which calculates amount left for the customer to pay
    customerBilling = (calculateCustomerBilling(doctorsFee,kelaReimbursement) + 15.9).toFixed(2);
    pAnswer = "Doctor's Fee is " + doctorsFee + "&#8364;. </br> Kela reimbursement is " + kelaReimbursement + "&#8364;. </br> Office Fee is 15.90&#8364;</br>Customer needs to pay " + customerBilling + "&#8364;.";
    // 4. Display the answer
    document.getElementById("divOutput").innerHTML = pAnswer;
}