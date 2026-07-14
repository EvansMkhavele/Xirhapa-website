// Question 1.5 
function showWelcomeMessage(){
    alert("Welcome to Xirhapa Xa Mabindzu Hub!!");
}

function changeColor() {
    document.body.style.backgroundColor = "#dbeafe";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function showDate() {
    let today = new Date();
    let output = "Today's date is: " + today.toDateString();

    let dateBox = document.getElementById("dateOutput");

    if (dateBox) {
        dateBox.innerHTML = output;
    } else {
        alert(output);
    }
}

function addCourse() {
    let course = document.getElementById("newCourse").value.trim();

    if (course === "") {
        alert("Enter course name");
        return;
    }

    let li = document.createElement("li");
    li.textContent = course;

    document.getElementById("courseList").appendChild(li);
    document.getElementById("newCourse").value = "";
}

function searchStudent() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#studentTable tr");

    for (let i = 1; i < rows.length; i++) {
        let name = rows[i].cells[0].textContent.toLowerCase();
        rows[i].style.display = name.includes(input) ? "" : "none";
    }
}

function validateForm() {

	// write code for Question 4.3a here
	
	
    let course = document.getElementById("course").value;
    let year = document.getElementById("studyYear").value.trim();

    let genders = document.getElementsByName("gender");
    let genderSelected = "";

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            genderSelected = genders[i].value;
        }
    }
	
	// complete the if ststement for Question 4.3b 
    if (){
        document.getElementById("formMessage").innerHTML = "Please fill in all fields.";
        return false;
    }

    let today = new Date();

    document.getElementById("formMessage").innerHTML =
        "Registration successful!<br>" +
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Course: " + course + "<br>" +
        "Year: " + year + "<br>" +
        "Gender: " + genderSelected + "<br>" +
        "Date: " + today.toDateString();

    return false;
}