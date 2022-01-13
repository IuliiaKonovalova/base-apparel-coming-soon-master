// Variables
const submissionForm = document.getElementById("form");
const emailInput = document.getElementById("email");

/**
 * Content onLoad
 */
document.addEventListener('DOMContentLoaded', function () {
  // Listen for submit button click
  submissionForm.addEventListener('submit', function (e) {
    submission(e);
  });
  // Listen for Enter press down on submission
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      submission(e);
    }
  });
});


/**
 * Check if the email is valid.
 * If it is valid it displays a thank you message.
 * If it is nat valid, displays an error message.
 */
const submission = function (e) {
  e.preventDefault();
  const email = emailInput.value;
  if (!validateEmail(email)) {
    submissionForm.classList.add("email__error");
    submissionForm.classList.remove("validated");
  } else {
    submissionForm.classList.remove("email__error");
    emailInput.value = "";
    submissionForm.classList.add("validated");
  }
}


/**
 * Function to validate email input
 * Posted on Stack overflow:
 * https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};