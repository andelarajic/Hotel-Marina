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
        const email = document.contactForm.email.value;
        ValidateEmail(email);
        validateEmailFormat(email);
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

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid character in your email address!")
    return (false)
}

