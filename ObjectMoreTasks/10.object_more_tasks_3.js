// 10.object_more_tasks_3.js JavasScript code
// Complete this program so that it allows the user to add new courses and list courses.

// INSERT YOUR CODE HERE
// (1) Define an object constructor function here
function Course(courseCode, courseName) {
    this.code = courseCode;
    this.name = courseName;
}


function addCourse() {
    var courseCode = document.getElementById("txtCourseCode").value;
    var courseName = document.getElementById("txtCourseName").value;
    
    if (courseCode === "" || courseName === "") {
        return;
    }
    
    // INSERT YOUR CODE HERE
    // (2) Create a new Course object here and insert it into the course array
    else {
        courseArray.push(new Course(courseCode, courseName));
    }
        
    document.getElementById("txtCourseCode").value = "";
    document.getElementById("txtCourseName").value = "";
    document.getElementById("txtCourseCode").focus();
    document.getElementById("pOutput").innerHTML = "";
}

function listCourses() {
    var outputText = "";
    
    // INSERT YOUR CODE HERE
    // (3) Build the output text here. You need to write a loop.
    for(var i = 0; i < courseArray.length; i++) {
        outputText += courseArray[i].name + " (" + courseArray[i].code + ")<br/>";
    }
    document.getElementById("pOutput").innerHTML = outputText;
}

function sortCourseArray() {
    function compareTwoCourses(a, b) {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
        } else {
            return -1;
        }
    }
    courseArray.sort(compareTwoCourses);
}

// This array is created when the page is loaded
var courseArray = [];

// End
