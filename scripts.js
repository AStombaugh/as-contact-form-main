const firstName = document.getElementById("first-name-input")

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