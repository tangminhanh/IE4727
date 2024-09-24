// Error messages
const errorName = document.getElementById('error-name')
const errorEmail = document.getElementById('error-mail')
const errorDate = document.getElementById('error-date')
const errorExp = document.getElementById('error-exp')
const errorForm = document.getElementById('error-form')
//input field form
const form = document.getElementById('jobForm')
const nameContent = document.getElementById('myName');
const emailContent = document.getElementById('myEmail');
const dateContent = document.getElementById('startDate');
const expContent = document.getElementById('myExp');
const submitButton = document.getElementById('submitBtn');

nameContent.addEventListener('blur', (event) => {
    if (nameContent.value === '') {
        errorName.textContent = 'This field is compulsory!'
    } else if (isValidName(nameContent.value)) {
        errorName.textContent = ''
    } else {
        errorName.textContent = 'Enter characters and whitespaces only!'
    }
})

/**
 * Listens to the <email> field and show error message on blur, if applicable.
 */
emailContent.addEventListener('blur', (event) => {
    if (emailContent.value === '') {
        errorEmail.textContent = 'This field is compulsory!'
    } else if (isValidEmail(emailContent.value)) {
        errorEmail.textContent = ''
    } else {
        errorEmail.textContent = 'Your email contains invalid symbols!'
    }
})

/**
 * Listens to the <date> field and show error message on blur, if applicable.
 */
dateContent.addEventListener('blur', (event) => {
    if (isValidStartDate(dateContent.value)) {
        errorDate.textContent = ''
    } else {
        errorDate.textContent = 'You cannot start before today!'
    }
})

/**
 * Listens to the <experience> field and show error message on blur, if
 * applicable.
 */
expContent.addEventListener('blur', (event) => {
    if (expContent.value === '') {
        errorExp.textContent = 'This field is compulsory!'
    } else if (isValidExperience(expContent.value)) {
        errorExp.textContent = ''
    } else {
        errorExp.textContent = 'You need to indicate your work experience!'
    }
})

/**
 * Validate everything before submission just in case prof asks
 */
submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    if (!isValidName(nameContent.value) ||
        !isValidEmail(emailContent.value) ||
        !isValidStartDate(dateContent.value) ||
        !isValidExperience(expContent.value)) {
        errorForm.textContent = 'Fields contain invalid data!'
    } else {
        nameContent.value = nameContent.value.trim()
        emailContent.value = emailContent.value.trim()
        expContent.value = expContent.value.trim()
        form.submit()
    }
})

// // Clear error messages
// function clearErrors() {
//     errorName.textContent = '';
//     errorEmail.textContent = '';
//     errorDate.textContent = '';
//     errorExp.textContent = '';
// }

// Validation functions
function isValidName(value) {
    const rule = /^[a-zA-Z ]+$/
    value.trim()
    return (rule.test(value))
}

function isValidEmail(value) {
    const rule = /^[\w][\w.-]*@([\w][\w-]*\.){1,3}[a-zA-Z]{2,3}$/
    value.trim()
    return (rule.test(value))
}

function isValidStartDate(value) {
    if (value !== '') {
        const date = Date.parse(value)
        const today = new Date()
        return (date > today)
    } else {
        return true
    }
}

function isValidExperience(value) {
    return value.length > 0;
}



// Main form validation
// function formCheck() {
//     var nameContent = document.getElementById('myName');
//     var emailContent = document.getElementById('myEmail');
//     var dateContent = document.getElementById('startDate');
//     var expContent = document.getElementById('myExp');

//     if (!chkName({ currentTarget: nameContent }) ||
//         !chkEmail({ currentTarget: emailContent }) ||
//         !chkDate({ currentTarget: dateContent }) ||
//         !chkExp({ currentTarget: expContent })) {
//         return false;
//     }
//     return true;
// }
