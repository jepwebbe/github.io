// Eventlisteners for the 2 forms and a variable for the error message text box
document.querySelector("#bill-form").addEventListener("submit", validateBilling);
document.querySelector("#card-form").addEventListener("submit", validateCard);
const messageFieldBill = document.querySelector("#error-message");
const messageFieldCard = document.querySelector("#error-message-card")

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
}
    /******* For the creditcard form ***********/

    function validateCard(evt) {
    if (isNaN(this.creditcard.value)) {
        evt.preventDefault();
        error = "Dit kreditkortnummer er ikke udfyldt korrekt";
        messageFieldCard.textContent = error;
        this.email.focus();
        return false;
    }
    if (isNaN(this.expiration.value)) {
        evt.preventDefault();
        error = "Din udløbsdato er ikke udfyldt korrekt";
        messageFieldCard.textContent = error;
        this.email.focus();
        return false;
    }
    if (isNaN(this.cvv.value)) {
        evt.preventDefault();
        error = "Dit cvv er ikke udfyldt korrekt";
        messageFieldCard.textContent = error;
        this.email.focus();
        return false;
    }
    if (this.name.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst dit navn";
        messageFieldCard.textContent = error;
        this.email.focus();
        return false;
    }

}
/* if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.email.value.length) {
    evt.preventDefault();
    error = "Din email-adresse skal være et gyldigt format (f.eks funny@johnny.com)";
    messageFieldCard.textContent = error;
    this.email.focus();
    return false;
} */

/*  */
/*     // test if email correct format
    if (this.email.value != /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) {
        evt.preventDefault();
        error = "";
        messageField.textContent = error;
        this.email.focus();
        return false;
    } */

    /*     // test if address cpntaint letters and numbers
        if (this.address.value !== /^[0-9a-zA-Z]+$/) {
            evt.preventDefault();
            error = "En adresse indeholder både tal og bogstaver";
            messageField.textContent = error;
            this.address.focus();
            return false;
        } */
    // test if address cpntaint letters and numbers
    /* let addExpress = /^[0-9a-zA-Z]+$/;
    if(address.value.match(addExpress)){
        alert("valid email");
        return true;
    }else{
        evt.preventDefault();
        error = "En adresse indeholder både tal og bogstaver";
        messageField.textContent = error;
        this.address.focus();
        return false;
    
    }
     */
    // for the billing form
    // test if city