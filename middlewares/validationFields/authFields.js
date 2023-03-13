const { body } = require('express-validator')

const locale = ['es-ES']

const email = () => {
  return body('email')
    .exists()
    .withMessage("Email param doesn't exist!")
    .trim()
    .isEmail()
    .withMessage('Incorrect email param format!')
    .notEmpty()
    .withMessage('Email param is empty')
    .normalizeEmail()
}

const password = () => {
  return body('password')
    .exists()
    .withMessage("Password param doesn't exist!")
    .notEmpty()
    .withMessage('Password param is empty')
    .isLength({ min: 0, max: 40 })
    .withMessage('Password must contain at least 8 characters')
    .isStrongPassword()
    .withMessage(
      'Password must include: upper and lower case letters, numbers and special characters',
    )
}

const accountType = () => {
  return body('accountType')
    .exists()
    .withMessage("Account type param doesn't exist!")
    .notEmpty()
    .withMessage('Account type param is empty!')
    .isAlpha()
    .withMessage('Account type only admits alphabetic characters')
}

const firstName = () => {
  return body('firstName')
    .exists()
    .withMessage("First name param doesn't exist!")
    .notEmpty()
    .withMessage('First name param is empty!')
    .isAlpha(locale, { ignore: ' ' })
    .withMessage('First name only admits alphabetic characters')
    .trim()
}

const lastName = () => {
  return body('lastName')
    .exists()
    .withMessage("Last name param doesn't exist!")
    .notEmpty()
    .withMessage('Last name param is empty!')
    .isAlpha(locale, { ignore: ' ' })
    .withMessage('Last name only admits alphabetic characters')
    .trim()
}

const phone = () => {
  return body('phone')
    .exists()
    .withMessage("Phone param doesn't exist!")
    .notEmpty()
    .withMessage('Phone param is empty!')
    .isInt()
    .withMessage('Phone field must be a number')
    .trim()
}

const birthDate = () => {
  return body('birthDate')
    .exists()
    .withMessage("Birth date param doesn't exist!")
    .notEmpty()
    .withMessage('Birth date param is empty!')
    .isDate()
    .withMessage('Birth date must be a valid date format')
}

const address = () => {
  return body('address')
    .exists()
    .withMessage("Address param doesn't exist!")
    .notEmpty()
    .withMessage('Address param is empty!')
    .trim()
}

const city = () => {
  return body('city')
    .exists()
    .withMessage("City param doesn't exist!")
    .notEmpty()
    .withMessage('City param is empty!')
    .isAlphanumeric(locale, { ignore: ' ' })
    .withMessage('Address only accept alphabetic characters and numbers')
    .trim()
}

const timeZone = () => {
  return body('timeZone')
    .exists()
    .withMessage("Time zone param doesn't exist!")
    .notEmpty()
    .withMessage('Time zone param is empty!')
    .isInt()
    .withMessage('Time zone must be a number')
}

const securityQuestion = () => {
  return body('securityQuestion')
    .exists()
    .withMessage("Security question param doesn't exist!")
    .notEmpty()
    .withMessage('Security question param is empty!')
    .isAlpha(locale, { ignore: '? ' })
    .withMessage('Security question only admits alphabetic characters')
    .trim()
}

const securityQuestionAnswer = () => {
  return body('securityQuestionAnswer')
    .exists()
    .withMessage("Security question answer param doesn't exist!")
    .notEmpty()
    .withMessage('Security question answer param is empty!')
    .isAlpha(locale, { ignore: '? ' })
    .withMessage('Security question answer only admits alphabetic characters')
}

module.exports = {
  email,
  password,
  accountType,
  firstName,
  lastName,
  phone,
  birthDate,
  address,
  city,
  timeZone,
  securityQuestion,
  securityQuestionAnswer,
}
