document.addEventListener("DOMContentLoaded", function () {
  const maleButton = document.getElementById("male-btn");
  const femaleButton = document.getElementById("female-btn");
  const heightRangeEl = document.getElementById("height-range");
  const heightDisplay = document.getElementById("height-cm");
  const weightInputEl = document.getElementById("weight-input");
  const ageInputEl = document.getElementById("age-input");
  const calculateBtn = document.getElementById("calculate-btn");
  const bmrResultsEl = document.getElementById("BMR-results");

  //add event listeners to the gender buttons
  maleButton.addEventListener("click", function () {
    console.log("male-btn clicked");
  });

  femaleButton.addEventListener("click", function () {
    console.log("female-btn clicked");
  });

  // update the height display based on the range input value
  heightRangeEl.addEventListener("input", (event) => {
    heightDisplay.textContent = event.target.value + " cm";
  });

  // add validation for the weight and age values entered by the user
  weightInputEl.addEventListener("input", function () {
    // Validate the input (only allow numeric characters)
    this.value = this.value.replace(/[^0-9]/g, "");
  });

  ageInputEl.addEventListener("input", function () {
    // Validate the input (only allow numeric characters)
    this.value = this.value.replace(/[^0-9]/g, "");
  });
  // ... (Calculate the BMR and pass the results to the results page)
  calculateBtn.addEventListener("click", () => {
    //Get the user's input
    const height = heightRangeEl.value / 100; //convert the height into meters
    const weight = weightInputEl.textContent;
    const age = ageInputEl.textContent;
    const gender = maleButton.checked ? "male" : "female"; //get the selected gender

    //calculate the BMR
    let BMR;
    if (gender === "male") {
      BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }
    console.log("Your BMR is: " + BMR.toFixed(2) + " calories/day");
    //display the BMR in the BMR-results div
    // bmrResultsEl.textContent =
    //   "Your BMR is: " + BMR.toFixed(2) + " calories/day";
  });
});
