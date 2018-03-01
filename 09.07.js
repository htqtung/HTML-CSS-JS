// 09.07 JavasScript code
	
// Create an array with file names of images
var imageNames = ["face.png", "heart.png", "sun.png", "moon.png", "cloud.png"];

// Use a for loop to show all the images. 

    // Use the document.write() method to write one new image element to the web page per each image.
for (var i = 0; i < imageNames.length; i++) {
    document.write('<img src="' + imageNames[i] + '" alt="Funny shape"/>');
}




