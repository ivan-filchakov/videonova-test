function validateLogin(login) {
  if (!login) return "noLogin"
  if (login.indexOf("  ") >= 0) {
    return "twoSpaces"
  }
  if (/^[a-zA-Z0-9\s]+$/.test(login)) {
    return true
  }
  return "loginSymbols"
}

function validatePassword(pass) {
  if (!pass) return "noPassword"
  if (pass.indexOf(" ") >= 0) {
    return "passwordSpaces"
  }
  if (/^[a-zA-Z0-9\s]+$/.test(pass)) {
    return true
  }
  return "passwordSymbols"
}

function validateRepeat(pass1, pass2) {
  return pass1 === pass2 ? true : "noMatch"
}

export default function validateForm(state) {
  const { login, password, passwordRepeat, registered } = state
  const validLogin = validateLogin(login)
  const validPassword = validatePassword(password)
  const validRepeat = validateRepeat(password, passwordRepeat)

  if (registered && validLogin + validPassword === 2) return false
  if (validLogin + validPassword + validRepeat === 3) return false

  return [validLogin, validPassword, validRepeat].find(
    (el) => typeof el === "string"
  )
}
