document.addEventListener('DOMContentLoaded', function () {
    // Error messages
    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-mail');
    const errorDate = document.getElementById('error-date');
    const errorExp = document.getElementById('error-exp');
    const errorForm = document.getElementById('error-form');

    // Input fields and form
    const form = document.getElementById('jobForm');
    const nameContent = document.getElementById('myName');
    const emailContent = document.getElementById('myEmail');
    const dateContent = document.getElementById('startDate');
    const expContent = document.getElementById('myExp');
    const submitButton = document.getElementById('submitBtn');

    // Validate Name on blur
    nameContent.addEventListener('blur', () => {
        if (nameContent.value.trim() === '') {
            errorName.textContent = 'This field is compulsory!';
        } else if (isValidName(nameContent.value)) {
            errorName.textContent = '';
        } else {
            errorName.textContent = 'Enter characters and whitespaces only!';
        }
    });

    // Validate Email on blur
    emailContent.addEventListener('blur', () => {
        if (emailContent.value.trim() === '') {
            errorEmail.textContent = 'This field is compulsory!';
        } else if (isValidEmail(emailContent.value)) {
            errorEmail.textContent = '';
        } else {
            errorEmail.textContent = 'Your email contains invalid symbols!';
        }
    });

    // Validate Start Date on blur
    dateContent.addEventListener('blur', () => {
        if (isValidStartDate(dateContent.value)) {
            errorDate.textContent = '';
        } else {
            errorDate.textContent = 'You cannot start before today!';
        }
    });

    // Validate Experience on blur
    expContent.addEventListener('blur', () => {
        if (expContent.value.trim() === '') {
            errorExp.textContent = 'This field is compulsory!';
        } else {
            errorExp.textContent = '';
        }
    });

    // Validate on form submit
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission initially

        let valid = true; // Assume the form is valid

        // Validate Name
        if (!isValidName(nameContent.value)) {
            valid = false;
            if (nameContent.value.trim() === '') {
                errorName.textContent = 'This field is compulsory!';
            } else {
                errorName.textContent = 'Enter characters and whitespaces only!';
            }
        }

        // Validate Email
        if (!isValidEmail(emailContent.value)) {
            valid = false;
            if (emailContent.value.trim() === '') {
                errorEmail.textContent = 'This field is compulsory!';
            } else {
                errorEmail.textContent = 'Your email contains invalid symbols!';
            }
        }

        // Validate Start Date
        if (!isValidStartDate(dateContent.value)) {
            valid = false;
            errorDate.textContent = 'You cannot start before today!';
        }

        // Validate Experience
        if (!isValidExperience(expContent.value)) {
            valid = false;
            if (expContent.value.trim() === '') {
                errorExp.textContent = 'This field is compulsory!';
            }
        }

        if (!valid) {
            errorForm.textContent = 'Fields contain invalid data! Please fix the errors.';
        } else {
            errorForm.textContent = '';
            nameContent.value = nameContent.value.trim();
            emailContent.value = emailContent.value.trim();
            expContent.value = expContent.value.trim();

            alert('Form submitted successfully'); // Display success message
            form.submit(); // Submit the form
        }
    });

    // Validation functions
    function isValidName(value) {
        value = value.trim();
        const rule = /^[a-zA-Z ]+$/;
        return rule.test(value);
    }

    function isValidEmail(value) {
        value = value.trim();
        const rule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return rule.test(value);
    }

    function isValidStartDate(value) {
        if (value !== '') {
            const inputDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Zero out the time portion
            return inputDate > today;
        }
        return false; // Invalid if the date is empty
    }

    function isValidExperience(value) {
        return value.trim().length > 0;
    }
});
