/*
 * stmnts-02.js
 * Language: JavaScript
 * Test: tests/stmnts-02.test.js
 * Path: src/stmnts-02.js
 *
 * Arithmetic Operators Assignment:
 * Implement the following functions to perform more advanced arithmetic
 * operations. These challenges build upon the basics from stmnts-01.
 * Your implementations should pass all tests defined in the test file.
 *
 * Note: Review operator precedence carefully to ensure your calculations
 * are performed in the intended order.
 */

/**
 * Calculates the absolute difference between two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - The absolute (non-negative) difference between a and b.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 */
function absoluteDifference(a, b) {
  if (a - b < 0) {
    return (-(a - b));
  }
  else {
    return (a - b);
  }
}

/**
 * Calculates the result of raising a base to an exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of base raised to the power of exponent.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
 */
function power(base, exponent) {
  let result = base ** exponent;
  return (result);
}

/**
 * Converts minutes to seconds.
 * @param {number} minutes - The number of minutes.
 * @returns {number} - The equivalent seconds.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 */
function convertMinutesToSeconds(minutes) {
  let seconds = minutes * 60;
  return (seconds);
}

/**
 * Converts hours to seconds.
 * @param {number} hours - The number of hours.
 * @returns {number} - The equivalent seconds.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 */
function convertHoursToSeconds(hours) {
  let hSeconds = hours * 3600;
  return (hSeconds);
}

// DO NOT MODIFY THE EXPORTS BELOW.
module.exports = {
  absoluteDifference,
  power,
  convertMinutesToSeconds,
  convertHoursToSeconds,
};
