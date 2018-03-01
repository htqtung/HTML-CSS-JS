// 07.05 JavasScript code

// (1) Write below a new function called calculateSalary
function calculateSalary(hours, hourlySalary) {
    return (hours * hourlySalary).toFixed(2);
}


// (2) Complete the code of the function showGrossSalary
function showGrossSalary() {

    // 1. Get values from the input fields
    var txtHours = document.getElementById("txtHours").value,
        txtHourlySalary = document.getElementById("txtHourlySalary").value,
        hours = Number(txtHours),
        hourlySalary = Number(txtHourlySalary),
        

    // 2. Call the calculateSalary function
        grossSalary = calculateSalary(hours, hourlySalary);

    // 3. Display the answer
    document.getElementById("divOutput").innerHTML = "Gross salary is " + grossSalary + "&#8364;";
}