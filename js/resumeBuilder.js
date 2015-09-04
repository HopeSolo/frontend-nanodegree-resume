var bio = {
	"name" : "Tura Satana",
	"role" : "The Deadliest Pussycat of Them All",
	"contact_info" : "Tura@hell.guru",
	"picture_url" : "images/TuraSatana3.jpg",
	"welcome_message" : "Hey handsome! How is my favorite samurai?",
	"skills" : ["Baammm!!!",
				"Juhu"]
};

var work = {
	"jobs" : [
		{
			"employer"		: "Babestation",
			"title"			: "Just a babe",
			"dates"			: "a short time",
			"location"		: "UK",
			"description"	: "made the website for all the horny bastards"},
			
		{
			"employer"		: "Georg Geller",
			"title"			: "Doofkopp",
			"dates"			: "much too long",
			"location"		: "Hell",			
			"description"	: "I was the dumbass for everything"},
		
		{
			"employer"		: "Me",
			"title"			: "not yet, working on it",
			"dates"			: "now and the future",
			"location"		: "bei Oche",
			"description"	: "programming and having fun"}
	]
	
};

var projects = {
	"projects" : [
		{
			"title"			: "Javascript Basics",
			"date"			: "the time is now",
			"description"	: "learning the bascis of Javascript",
			"image"			: "images/javascript.jpg"
		},
		
		{
			"title"			: "Webdesign",
			"date"			: "since 2015",
			"description"	: "doing some websites",
			"image"			: "images/wonder-woman.jpg"
		},
		
		{
			"title"			: "HTML",
			"date"			: "ever and ever",
			"description"	: "Hello web!!!!",
			"image"			: "images/html.jpg"
		}
	]	
};

projects.display = function() {
		for (var entity in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[entity].title);
			var formattedprojectDate = HTMLprojectTitle.replace("%data%", projects.projects[entity].date);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[entity].description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[entity].image);
			
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedprojectDate);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImage);
		}
};

projects.display();
// adding properties to an object with brackets notation	
var education = {};
	education["name of last school"] = "Buena Vista";
	 education["schools city"]= "Maracaibo";

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contact_info);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture_url);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);

$("#header").prepend(formattedbioPic);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills) {
	$("#header").append(HTMLskillsStart);
	$("#skills").append(formattedSkills);
}

function displayWork() {
	for (var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedWorkDescription);
};	};

displayWork();
function inName(name){
	var finalName = name;
    
	var spaceSeparator = " ";
	var nameArray = finalName.split(spaceSeparator);
    
    nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    
    finalName = nameArray.join(" ");
    //console.log(nameArray);
    // Don't delete this line!
    return finalName;
}

// Code for the Internationalize Names Quiz
$("#main").append(internationalizeButton);
// console.log(inName("sebastian Thrun"));

