// Validate Name
function chkName(event) {
    var myName = event.currentTarget;
    var pos = myName.value.search(/^[A-Za-z ]+$/);

    if (pos !== 0) {
        alert("The name you entered (" + myName.value +
            ") is not in the correct form. \n" +
            "Name should contain alphabet characters and spaces only.");
        myName.focus();
        myName.select();
        return false;
    }
    return true;
}

// Validate Email
function chkEmail(event) {
    var myEmail = event.currentTarget;
    var pos = myEmail.value.search(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (pos !== 0) {
        alert("The email you entered (" + myEmail.value + ") is not in the correct form.");
        myEmail.focus();
        myEmail.select();
        return false;
    }
    return true;
}

// Validate Start Date
function chkDate(event) {
    var startDate = event.currentTarget;
    var now = new Date();

    var dateFormatted = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    var monthFormatted = (now.getMonth() + 1) < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
    var nowDate = now.getFullYear() + "-" + monthFormatted + "-" + dateFormatted;

    if (startDate.value <= nowDate) {
        alert("The start date cannot be from today or the past.");
        startDate.focus();
        startDate.select();
        return false;
    }
    return true;
}

// Validate Experience
function chkExp(event) {
    var myExp = event.currentTarget;
    if (myExp.value.length === 0) {
        alert("Experience cannot be empty.");
        myExp.focus();
        myExp.select();
        return false;
    }
    return true;
}

// Main form validation
function formCheck() {
    var nameField = document.getElementById('myName');
    var emailField = document.getElementById('myEmail');
    var dateField = document.getElementById('startDate');
    var expField = document.getElementById('myExp');

    if (!chkName({ currentTarget: nameField }) ||
        !chkEmail({ currentTarget: emailField }) ||
        !chkDate({ currentTarget: dateField }) ||
        !chkExp({ currentTarget: expField })) {
        return false;
    }
    return true;
}
