//var name ="Erika";
var awesomeThoughts = "I'm " + name + " and I am awesome";
var funThoughts = awesomeThoughts.replace("awesome", "fun");

var bio = {
	"name" : "Tura Satana",
	"role" : "The Deadliest Pussycat of Them All",
	"contact_info" : "Tura@hell.guru",
	"picture_url" : "images/TuraSatana3.jpg",
	"welcome_message" : "Hey handsome! How is my favorite samurai?",
	"skills" : "Baammm!!!"
};

// adding properties to an object with dot notation
var work = {};
	work.job_position = "Femme Fatale";
	work.employer = "none";

// adding properties to an object with brackets notation	
var education = {};
	education["name of last school"] = "Buena Vista";
	 education["schools city"]= "Maracaibo";

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contact_info);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture_url);


$("#header").prepend(formattedbioPic);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);