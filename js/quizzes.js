/*
	Code used to resolve the quizzes, which are coded in the Udacity browser.
*/

// LESSON 1 - Data Types

//*************String Manipulation Quiz 1******************
var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
    
    return s.charAt(1).toUpperCase() + s.slice(2);
};

// Did your code work? The line below will tell you!
//console.log(udacityizer(s));

//************Array Manipulation Quiz****************
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array;
	newArray[newArray.length - 1] = newArray[(newArray.length - 1)] + 1;
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
//console.log(incrementLastArrayElement(sampleArray));

//***************String Manipulation Quiz 2 **********************
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
	var spaceSeparator = " ";
	var nameArray = finalName.split(spaceSeparator);
    
    nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    
    finalName = nameArray.join(" ");
    //console.log(nameArray);
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
//console.log(nameChanger(name));

//*************** Protecting the Resume Quiz ********************** 
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = newHTML.replace(/</g, "&lt;" );
    newHTML = newHTML.replace(/>/g, "&gt;" );
    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
//console.log(charEscape(html));

//*************** Dot vs Bracket Notation Quiz ********************** 

var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
 console.log(weirdObject.property[];
 console.log(weirdObject["property[]"]);

// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!
