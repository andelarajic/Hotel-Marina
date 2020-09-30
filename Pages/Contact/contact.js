function validateForm() {
    if(document.contactForm.fname.value.length <= 0) {
        alert("First name must be filled out");
        return false;
    }
    if(document.contactForm.lname.value.length <= 0) {
        alert("Last name must be filled out");
        return false;
    }
    if(document.contactForm.email.value.length <= 0) {
        alert("Email must be filled out");
        return false;

    } else {
        if (document.contactForm.email.validity.typeMismatch) {
            alert("I am expecting an e-mail address!");
            return false;
        }
    }
    if(document.contactForm.phone.value.length <= 0) {
        alert("Phonenumber must be filled out");
        return false;
    }
    if(document.contactForm.policyBox.checked == false) {
        alert("Please accept the Privacy Policy");
        return false;
    }
}

