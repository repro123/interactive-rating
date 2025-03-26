"use strict";
// slect all the necessary elements
const form = document.querySelector("form");
const ratingInputs = document.getElementsByName("rating");
const errorMessage = document.querySelector("#errorMessage");
const sumbitButton = document.querySelector("#submit");
const thankYouCard = document.querySelector("#thankYou");
const ratingCard = document.querySelector("#ratingCard");
const selectedRating = document.querySelector("#selectedRating");

// add event listener to all the radio buttons taht clears the error whenever a radio button is checked
for (let ratingValue of ratingInputs) {
  ratingValue.addEventListener("change", function () {
    if (ratingValue.checked) errorMessage.classList.add("sr-only");
  });
}

// function to submit the form
function sumbitForm() {
  // check if any of the radio buttons is checked
  const isRatingChecked = Array.from(ratingInputs).some(
    (ratingValue) => ratingValue.checked
  ); // if none of the radio buttons is checked, show an error message and return from the function
  if (!isRatingChecked) {
    handleError();
    return;
  }

  // get the value of the checked radio button
  let rating = 0;

  for (let ratingValue of ratingInputs) {
    if (ratingValue.checked) {
      rating = ratingValue.value;
      selectedRating.textContent = rating;
      break;
    }

    showThankYouCard(thankYouCard);
    hideRatingCard(ratingCard);
  }
}

// function to handle error
function handleError() {
  errorMessage.classList.remove("sr-only");
}

// function to hide the rating card
function hideRatingCard(element) {
  element.classList.add("hidden");
  element.classList.remove("flex");
}

// function to show the thank you card
function showThankYouCard(element) {
  element.classList.remove("hidden");
  element.classList.add("flex");
}

// add event listener to the form to submit the form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  sumbitForm();
});
