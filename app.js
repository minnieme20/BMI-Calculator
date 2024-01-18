document.addEventListener("DOMContentLoaded", function () {
  let selectedGender = ""; // Initialize selectedGender
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
    if (selectedGender === "female") {
      femaleButton.classList.remove("selected");
    }
    selectedGender = "male";
    maleButton.classList.add("selected");
  });

  femaleButton.addEventListener("click", function () {
    if (selectedGender === "male") {
      maleButton.classList.remove("selected");
    }
    selectedGender = "female";
    femaleButton.classList.add("selected");
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
    calculateBMR();
  });

  function calculateBMR() {
    // Get the user's input
    const height = heightRangeEl.value;
    const weight = parseInt(weightInputEl.innerText.trim(), 10);
    const age = parseInt(ageInputEl.innerText.trim(), 10);

    // Check if a gender is selected
    if (selectedGender) {
      let BMR;

      if (selectedGender === "male") {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (selectedGender === "female") {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      // Display the BMR in the BMR-results div
      bmrResultsEl.textContent =
        "Your BMR is: " + BMR.toFixed(2) + " calories/day";
    } else {
      console.error("Please select a gender.");
      bmrResultsEl.textContent = "Please select a gender.";
    }
  }
});
