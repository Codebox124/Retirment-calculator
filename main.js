/**
 * Define a function to navigate betweens form steps.
 * It accepts one parameter. That is - step number.
 */
const navigateToFormStep = (stepNumber) => {
    /**
     * Hide all form steps.
     */
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("d-none");
    });
    /**
     * Mark all form steps as unfinished.
     */
    document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
    });
    /**
     * Show the current form step (as passed to the function).
     */
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
    /**
     * Mark the current form step as active.
     */
    formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
    formStepCircle.classList.add("form-stepper-active");
    /**
     * Loop through each form step circles.
     * This loop will continue up to the current step number.
     * Example: If the current step is 3,
     * then the loop will perform operations for step 1 and 2.
     */
    for (let index = 0; index < stepNumber; index++) {
        /**
         * Select the form step circle (progress bar).
         */
        const formStepCircle = document.querySelector('li[step="' + index + '"]');
        /**
         * Check if the element exist. If yes, then proceed.
         */
        if (formStepCircle) {
            /**
             * Mark the form step as completed.
             */
            formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
            formStepCircle.classList.add("form-stepper-completed");
        }
    }
};
/**
 * Select all form navigation buttons, and loop through them.
 */
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
    /**
     * Add a click event listener to the button.
     */
    formNavigationBtn.addEventListener("click", () => {
      
        /**
         * Get the value of the step.
         */
        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
        /**
         * Call the function to navigate to the target form step.
         */
        navigateToFormStep(stepNumber);
      
    });
});

function isUSAZipCode(str) 
{
  return /^\d{5}(-\d{4})?$/.test(str);
}

function validateInput() 
{
  console.log("validateInput");
  let zipCode = document.getElementById("zipCode").value;
  let message = "";
  if (isUSAZipCode(zipCode)) 
  {
    message = "Valid Zip Code";
    
  } else {
    message = "Invalid Zip Code";
  }
  document.getElementById("msg").innerHTML = message;
}
var currentAgeInput = document.getElementById("current-age");
currentAgeInput.addEventListener("keyup", validateCurrentAge);

var retirementAgeInput = document.getElementById("retirement-age");
retirementAgeInput.addEventListener("keyup", validateRetirementAge);

// Repeat for each input field
function validateCurrentAge() {
  var currentAgeInput = document.getElementById("current-age");
  var currentAge = parseInt(currentAgeInput.value);

  if (currentAge < 18 || currentAge > 100 || isNaN(currentAge)) {
    // Show an error message
    currentAgeInput.setCustomValidity("Please enter a valid age between 18 and 100");
  } else {
    // Clear the error message
    currentAgeInput.setCustomValidity("");
  }
}

function validateRetirementAge() {
  var retirementAgeInput = document.getElementById("retirement-age");
  var retirementAge = parseInt(retirementAgeInput.value);

  if (retirementAge < 18 || retirementAge > 100 || isNaN(retirementAge)) {
    // Show an error message
    retirementAgeInput.setCustomValidity("Please enter a valid retirement age between 18 and 100");
  } else {
    // Clear the error message
    retirementAgeInput.setCustomValidity("");
  }
}


function sendEmail() {
  var currentAge = document.getElementById("current-age").value;
  var retirmentAge = document.getElementById("retirement-age").value;
  var Name = document.getElementById("name").value;
  var anuualSalary = document.getElementById("annual-salary").value;
  var monthlySavings = document.getElementById('monthly-savings').value;

  var yearsToRetirement = retirmentAge - currentAge;
  var retirementSavings = 0 ;

  for (var i = 1; i <= yearsToRetirement; i++){
    var savingsThisYear = (i / yearsToRetirement) * anuualSalary;
    retirementSavings += savingsThisYear;
  }
  var output = document.getElementById("result");
output.innerHTML = "Hello " + Name + ", based on your current age, your desire retirment date, and other information you provided, -Total savings of " + retirementSavings.toFixed(2) + " in retirement at age " + retirmentAge + "- To be saving $" + monthlySavings + " each month to meet your retirment goals" + " Disclaimer: it is also worth nothing that this is just a basic calculation and does not consider other important factors. To get a comprehensive and personalized retirement plan tailored to your specific circumstances, please schedule a free consultation with one of our licensed financial professionals to discuss your retirment planning needs.";

}


// Email.send({
// 	Host: "smtp.gmail.com",
// 	Username : "No reply",
// 	Password : "Raji@olalekan1234",
// 	To : 'adedejir76@gmail.com',
// 	From : "rajcodes733@gmail.com",
// 	Subject : "how far guy",
// 	Body : "heeeeee",
// 	}).then(
// 		message => alert("mail sent successfully")
// 	);