const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if (myText.value === "") {
        result.textContent = "Please enter your age!";
    }

    else if (age >= 100) {
        result.textContent = "You are TOO OLD to enter this site";
    }

    else if (age < 0) {
        result.textContent = "Age can't be below 0";
    }

    else if (age == 0) {
        result.textContent = "You were just born!";
    }

    else if (age >= 18) {
        result.textContent = "You are old enough to enter this site";
    }

    else {
        result.textContent = "You are TOO YOUNG to enter this site";
    }

}