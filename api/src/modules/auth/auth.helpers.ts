import config from "../config/config.main"
import { ValidationError } from "apollo-server-express"

export const checkPassword = (password = '') => {
  const minimumPasswordLength = config.auth.password.minimumLength

  if (password.length < minimumPasswordLength) {
    throw new ValidationError(
      `Password too small. Please provide a password with a minimum of ${minimumPasswordLength} characters.`,
    )
  }
  
  if (!/\d/.test(password)) {
    throw new ValidationError(
      `Password must contain a number`,
    )
  }

  if (!/([A-Za-z]+)/.test(password)) {
    throw new ValidationError(
      `Password must contain a character`,
    )
  }
}
