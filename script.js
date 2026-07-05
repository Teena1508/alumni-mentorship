function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "student" && password === "1234") {
        window.location.href = "index.html";
    } else {
        alert("Invalid Username or Password");
    }
}

function searchMentor() {
    let input = document.getElementById("search").value.toLowerCase();
    let mentors = document.getElementsByClassName("mentor");

    for (let i = 0; i < mentors.length; i++) {
        let text = mentors[i].querySelector("h2").innerText.toLowerCase();

        if (text.includes(input)) {
            mentors[i].style.display = "block";
        } else {
            mentors[i].style.display = "none";
        }
    }
}

function requestMentorship(name){
    alert("Mentorship request sent to " + name + "!");
}

function viewProfile(name){
    alert("Opening profile of " + name);
}