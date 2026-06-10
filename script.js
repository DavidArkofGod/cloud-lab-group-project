// ======================================
// Cloud Computing Group Project
// script.js
// ======================================

// Welcome message 
window.onload = function () {
    alert("Welcome to the Cloud Innovators Website!");
};

// Project information
function showProjectInfo() {
    document.getElementById("projectInfo").innerHTML =
        "This website was created by Group 4  for the Introduction to Cloud Computing course. The project demonstrates a simple static website built with HTML, CSS, and JavaScript and deployed using GitHub Pages.";
}

// Current date and time
function showDateTime() {
    const currentDate = new Date();

    document.getElementById("dateTime").innerHTML =
        "Current Date and Time: " + currentDate.toLocaleString();
}

// Validate contact form
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// Display group members
function showMembers() {

    let members =
        "Group Members:<br>" +
        "1. David Dumashie Dzidepo Ahiaku<br>" +
        "2. Chrisford KuukuEssuman<br>" +
        "3. Fredrick Amofah Gyimah<br>" +
        "4. Lawrence Kazabil Tindan<br>" +
        "5. Member Five";

    document.getElementById("members").innerHTML = members;
}