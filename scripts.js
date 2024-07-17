const firstName = document.getElementById("first-name-input");
console.log(firstName);

const lastName = document.getElementById("last-name-input");
console.log(lastName);

const emailAddress = document.getElementById("email-input");
console.log(emailAddress);

const generalEnquiry = document.getElementById("general-enquiry-input");
console.log(generalEnquiry);

const supportRequest = document.getElementById("support-request-input");
console.log(supportRequest);

const messageInput = document.getElementById("message-input");
console.log(messageInput);

const consentInput = document.getElementById("consent");
console.log(consentInput);

const submitCTA = document.getElementById("submitCTA");
console.log(submitCTA);

/*
firstName.addEventListener("input", () => {
  firstName.checkValidity();
  if (firstName.validity.typeMismatch) {
    firstName.setCustomValidity("This field is required");
    console.log("Invalid")
  } else {
    firstName.setCustomValidity("")
    console.log("Valid")
  }
});
*/