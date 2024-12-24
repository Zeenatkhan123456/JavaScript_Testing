// Password validator

// min 6 character
// at least 1 small case
// at least 1 capital case
// at least 1 number
// TDD: Test Driven Development

/**
 *
 * @param {string} pass
 * @returns  boolean
 */
const validate = (pass) => {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCase = lowerCase.map((e) => e.toUpperCase());
  const digit = "1234567890".split("");
//   let flag = true;
  if (pass.length < 0) {
    return{
        status: false,
        message: "min 8 char required"
    }
  }
  if (!pass.split("").every((c) => lowerCase.includes(c))) {
    return{
        status: false,
        message: "At least 1 lowerCase char required"
    }
  }

  if (!pass.split("").every((c) => upperCase.includes(c))) {
    return{
        status: false,
        message: "At least 1 upperCase char required"
    }
  }
  if (!pass.split("").every((c) => digit.includes(c))) {
    return{
        status: false,
        message: "At least 1 digit required"
    }
  }

  return{
    status: false,
    message: "password is valid"
}
};
module.exports = validate;
