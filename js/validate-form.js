<<<<<<< HEAD
document.querySelector("#bill form").addEventListener("submit", validateBilling);
const messageFieldBill = document.querySelector("#error-message");
// variables for testing email format
const atpos = this.email.value.indexOf("@");
const dotpos = this.email.value.lastIndexOf(".");
function validateBilling(evt) {
    let error;

    // test if address
    if (this.address.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst din adresse";
        messageFieldBill.textContent = error;
        this.address.focus();
        return false;
    }
    console.log(this);

    if (this.city.value == "") {
        evt.preventDefault();
        error = "Angiv venligst din by";
        messageFieldBill.textContent = error;
        this.city.focus();
        return false;
    }
    // test if zipcode
    if (isNaN(this.zipcode.value)) {
        evt.preventDefault();
        error = "Postnummer skal angives med tal";
        messageFieldBill.textContent = error;
        this.zipcode.focus();
        return false;
    }
    // test if email
    if (this.email.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst din email-adresse";
        messageFieldBill.textContent = error;
        this.email.focus();
        return false;
    }
  if (this.email.value != /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) {
        evt.preventDefault();
        error = "Din email-adresse skal være et gyldigt format (f.eks funny@johnny.com)";
        messageFieldBill.textContent = error;
        this.email.focus();
        return false;
    }
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.email.value.length) {
    evt.preventDefault();
    error = "Din email-adresse skal være et gyldigt format (f.eks funny@johnny.com)";
    messageFieldBill.textContent = error;
    this.email.focus();
    return false;
}
=======
document.querySelector("#bill form").addEventListener("submit", validateBilling);
const messageFieldBill = document.querySelector("#error-message");
// variables for testing email format
const atpos = this.email.value.indexOf("@");
const dotpos = this.email.value.lastIndexOf(".");
function validateBilling(evt) {
    let error;

    // test if address
    if (this.address.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst din adresse";
        messageFieldBill.textContent = error;
        this.address.focus();
        return false;
    }
    console.log(this);

    if (this.city.value == "") {
        evt.preventDefault();
        error = "Angiv venligst din by";
        messageFieldBill.textContent = error;
        this.city.focus();
        return false;
    }
    // test if zipcode
    if (isNaN(this.zipcode.value)) {
        evt.preventDefault();
        error = "Postnummer skal angives med tal";
        messageFieldBill.textContent = error;
        this.zipcode.focus();
        return false;
    }
    // test if email
    if (this.email.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst din email-adresse";
        messageFieldBill.textContent = error;
        this.email.focus();
        return false;
    }
  if (this.email.value != /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) {
        evt.preventDefault();
        error = "Din email-adresse skal være et gyldigt format (f.eks funny@johnny.com)";
        messageFieldBill.textContent = error;
        this.email.focus();
        return false;
    }
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.email.value.length) {
    evt.preventDefault();
    error = "Din email-adresse skal være et gyldigt format (f.eks funny@johnny.com)";
    messageFieldBill.textContent = error;
    this.email.focus();
    return false;
}
>>>>>>> 8dbbb38e22a6547b5ad8139c16fbc09b536f8157
}