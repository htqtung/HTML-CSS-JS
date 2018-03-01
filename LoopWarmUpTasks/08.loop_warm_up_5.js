// 08.loop_warm_up_5.js JavasScript code

// Task 1 (easy): Modify the JavaScript code so that it shows a multiplication table 1-9 by 1-9. 
// Task 2 (challenging): 
//         Modify the JavaScript code again so that it shows a multiplication table 5-10 by 5-10. 

function writeMultiplicationTable(small, big) {
    document.write("<table>");

    for (var x = small; x <= big; x++ ) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        if(x === small) {
            for (var y = small + 1; y <= big; y += 1) {
                document.write("<td>" + (y) + "</td>");
            }
        }
        if(x > small) {
            for (var z = small + 1; z <= big; z += 1) {
                document.write("<td>" + (z * x) + "</td>");
            }
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

writeMultiplicationTable(1,4);
document.write("</br>");
writeMultiplicationTable(1,9);
document.write("</br>");
writeMultiplicationTable(5,10);
document.write("</br>");
// End
/*
document.write("<table>");

for (var x = 1; x <= 4; x++ ) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");

    for (var y = 2; y <= 4; y++ ) {
        document.write("<td>" + (x * y) + "</td>");
    }

    document.write("</tr>");
}

document.write("</table>"); 

document.write("</br>")

document.write("<table>");

for (var x = 1; x <= 9; x++ ) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");

    for (var y = 2; y <= 9; y++ ) {
        document.write("<td>" + (x * y) + "</td>");
    }

    document.write("</tr>");
}

document.write("</table>");

document.write("</br>")

document.write("<table>");

for (var x = 5; x <= 10; x++ ) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    if(x === 5) {
        for (var y = 6; y <= 10; y += 1) {
            document.write("<td>" + (y) + "</td>");
        }
    }
    if(x > 5) {
        for (var z = 6; z <= 10; z += 1) {
            document.write("<td>" + (z * x) + "</td>");
        }
    }
    document.write("</tr>");
}

document.write("</table>");
*/