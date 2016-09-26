/*this is a jquery function that will add info to the html element*/
/*$("#main").append("celeste duncan"); */
var bio = {
    "name": "Celeste Duncan",
    "role": "Jr Front End Web Developer",
    "contacts": {
        "mobile": "209-405-3818",
        "email": "celesteduncan21@yahoo.com",
        "twitter": "celeste@duncan",
        "github": "cilantroh20",
        "location": "Oakley,CA"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Welcome to my resume!",
    "skills": ["driven", "versatile", "self-efficient"]
};

bio.display = function() {
    //an if statement + while loop that will go over the skills and append to the webpage
    if (bio.skills.length > 0) {
        $("#skills").append(HTMLskillsStart);


        var add_skill = 0;
        while (bio.skills.length > add_skill) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[add_skill]);
            $("#skills-h3").append(formattedSkill);
            add_skill = add_skill + 1;
        }
    }
    //variables for the object bio
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitt = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    //topcontacts is an un order list inside header, it places contact next to eachother
    // appending for the object bio
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitt);
    $("#topContacts").append(formattedGit);
    $("#topcontacts").append(formattedLocation);
    $("#bioPic").append(formattedPic);
    $("#quickMess").append(formattedMessage);

    //append to the footer of the page
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitt);
    $("#footerContacts").append(formattedGit);
    $("#footerContacts").append(formattedLocation);
};

//json 
var education = {

    "schools": [{
        "name": "Merritt Community College",
        "location": "Oakland, CA",
        "degree": "No degree",
        "majors": "Just attending school",
        "dates": "2014",
        "url": "http://www.merritt.edu/wp/"
    }],

    "onlineCourses": [{
        "school": "Udacity",
        "title": "Intro to Programming",
        "dates": "In Progress",
        "url": "https://www.udacity.com/#"

    }]
};

education.display = function() {
    //var for education + appending to the page
    $("#education").append(HTMLschoolStart);
    for (var school = 0; school < education.schools.length; school++) {
        /*for (var school in education.schools) { */

        var formattedSchName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.schools[school].url);

        $(".education-entry:last").append(formattedSchName);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedMajors);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedUrl);
    }

    //var online courses + appending to the page 

    $("#education").append(HTMLonlineClasses);
    for (var course = 0; course < education.onlineCourses.length; course++) {
        var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].school);
        var formattedTitle = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].title);
        var Online_formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var Online_formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $("#education").append(formattedName);
        $("#education").append(formattedTitle);
        $("#education").append(Online_formattedDates);
        $("#education").append(Online_formattedUrl);
    }
};

//json for work (objects and arrays inside an object)
var work = {
    "jobs": [{
        "employer": "Professional Makeup Artisty",
        "title": "Receptionist",
        "dates": "October 2015 - Current",
        "location": "San Francisco, CA",
        "description": "Schedule client appointments, inventory, answer emails."
    }, {
        "employer": "Starbucks Co.",
        "title": "Barista/ Cashier",
        "dates": "October 2013 - February 2015",
        "location": "San Francisco, CA",
        "description": "Make coffee for customers."
    }, {
        "employer": "Chipotle",
        "title": "Cashier",
        "dates": "July 2013 - October 2013",
        "location": "San Francisco, CA",
        "description": "Ring Customers up."
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

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $(".work-entry:last").append(formattedDescription);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
    }
};

var projects = {
    "projects": [{
        "title": "Build a Movie Website",
        "dates": "September 2016",
        "description": "https://github.com/cilantroh20/movieproject",
        "images": ["images/movieweb.jpg"]
    }, {
        "title": "Build a About You Website",
        "dates": "August 2016",
        "description": "https://github.com/cilantroh20/stage1-makeawebsite",
        "images": ["images/aboutmepic.jpg"]
    }]
};

projects.display = function() {
    for (var pro = 0; pro < projects.projects.length; pro++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[pro].images);

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
