// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: May 2025
// This file contains the JS functions for index.html
function checkEligibility() {
  // Get input values
  const ageInput = document.getElementById("age").value.trim();
  const day = document.getElementById("day").value;
  const result = document.getElementById("result");

  // Check if age is entered
  if (ageInput === "") {
    result.textContent = "Please enter your age.";
    return;
  }

  // Check if day is selected
  if (day === "") {
    result.textContent = "Please select a day.";
    return;
  }

  // Convert age input to number
  const age = Number(ageInput);

  // Validate if age is a whole number
  if (isNaN(age) || !Number.isInteger(age)) {
    result.textContent = "Please enter a valid whole number for age.";
    return;
  }

  // Validate if age is non-negative
  if (age < 0) {
    result.textContent = "Please enter a valid non-negative age.";
    return;
  }

  // Define which days are discount days
  const discountDays = ["Tuesday", "Thursday"];

  // Apply discount rules
  if (age < 5) {
    result.textContent = "Eligible: Age less than 5.";
  } else if (age > 95) {
    result.textContent = "Eligible: Age over 95.";
  } else if (age >= 12 && age <= 21) {
    result.textContent = "Eligible: Student age group (12 to 21).";
  } else if ((age < 12 || age > 21) && !discountDays.includes(day)) {
    result.textContent = "Not eligible: Not a student and it's not a discount day.";
  } else if ((age < 12 || age > 21) && discountDays.includes(day)) {
    result.textContent = "Eligible: It's a discount day.";
  } else {
    result.textContent = "Standard pricing applies.";
  }
}