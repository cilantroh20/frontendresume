/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*this is a jquery function that will add info to the html element*/
/*$("#main").append("celeste duncan"); */
var r_name = "Celeste Duncan";
var formattedName = HTMLheaderName.replace("%data%", r_name);

var role = "Jr Front End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

//prepend adds data to the top of the page
//appending the name last so it will show up first
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "contacts": {
        "mobile_phone": "209-405-3818",
        "email": "celesteduncan21@yahoo.com",
        "github": "cilantroh20",
        "location": "Oakley,CA"
    },
    "pic": "images/me.jpg",
    "welcomeMess": "Welcome to my resume!",
    "skills": ["driven", "versatile", "self-efficient"]
};

bio.display = function() {
    //an if statement + while loop that will go over the skills and append to the webpage
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);


        var add_skill = 0;
        while (bio.skills.length > add_skill) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[add_skill]);
            $("#skills").append(formattedSkill);
            add_skill = add_skill + 1;
        }
    }
    //variables for the object bio
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile_phone);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMess);

    //topcontacts is an un order list inside header, it places contact next to eachother
    // appending for the object bio
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGit);
    $("#topcontacts").append(formattedLocation);
    $("#bioPic").append(formattedPic);
    $("#quickMess").append(formattedMessage);
};

//json 
var education = {

    "schools": [{
        "name": "Merritt Community College",
        "location": "Oakland, CA",
        "dates": 2014,
        "url": "http://www.merritt.edu/wp/"
    }],

    "onlineCourses": [{
        "name": "Udacity",
        "title": "Intro to Programming",
        "dates": "In Progress",
        "url": "https://www.udacity.com/#"

    }]
};

education.display = function() {
    //var for education + appending to the page
    for (var school = 0; school < education.schools.length; school++) {
        /*for (var school in education.schools) { */
        $("#education").append(HTMLschoolStart);

        var formattedSchName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.schools[school].url);


        $("#education").append(formattedSchName);
        $("#education").append(formattedLocation);
        $("#education").append(formattedDates);
        $("#education").append(formattedUrl);
    }

    //var online courses + appending to the page 

    for (var course = 0; course < education.onlineCourses.length; course++) {
        $("#education").append(HTMLonlineClasses);

        var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
        var formattedTitle = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].title);
        var formattedDatess = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedUrll = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $("#education").append(formattedName);
        $("#education").append(formattedTitle);
        $("#education").append(formattedDatess);
        $("#education").append(formattedUrll);
    }
};

//json for work (objects and arrays inside an object)
var work = {
    "jobs": [{
        "employer": "Professional Makeup Artisty",
        "title": "Receptionist",
        "dates": "October 2015 - Current",
        "location": "San Francisco, CA",
        "description": ""
    }, {
        "employer": "Starbucks Co.",
        "title": "Barista/ Cashier",
        "dates": "October 2013 - February 2015",
        "location": "San Francisco, CA",
        "description": ""
    }, {
        "employer": "Chipotle",
        "title": "Cashier",
        "dates": "July 2013 - October 2013",
        "location": "San Francisco, CA",
        "description": ""
    }]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        /*appending the added strings to the HTMLworkStart div class .work entry inside
        the helper.js file */
        $(".work-entry:last").append(formattedEmployerTitle);

        //var formattedDescription = HTMLworkDescription.replace("%data%");
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
    }
};

var projects = {
    "project": [{
        "title": "Build a Movie Website",
        "dates": "September 2016",
        "description": "https://github.com/cilantroh20/movieproject",
        "images": "images/movieweb.jpg"
    }, {
        "title": "Build a About You Website",
        "dates": "August 2016",
        "description": "https://github.com/cilantroh20/stage1-makeawebsite",
        "images": "images/aboutmepic.jpg"
    }]
};

projects.display = function() {
    for (var pro = 0; pro < projects.project.length; pro++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[pro].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[pro].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[pro].description);
        var formattedImages = HTMLprojectImage.replace("%data%", projects.project[pro].images);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImages);
    }
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
