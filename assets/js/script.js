// Variables
const submissionForm = document.getElementById("form");
const emailInput = document.getElementById("email");

/**
 * Content onLoad
 */
document.addEventListener('DOMContentLoaded', function () {
  submissionForm.addEventListener('submit', function (e) {
    submission(e);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      submission(e);
    }
  });
});

const submission = function (e) {
  e.preventDefault();
  const email = emailInput.value;
  console.log(email)

}