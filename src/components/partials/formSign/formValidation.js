function validateLogin(login) {
  if (!login) return [false, 6]
  if (login.indexOf("  ") >= 0) {
    return [false, 1]
  }
  if (/^[a-zA-Z0-9\s]+$/.test(login)) {
    return true
  }
  return [false, 2]
}

function validatePassword(pass) {
  if (!pass) return [false, 7]
  if (pass.indexOf(" ") >= 0) {
    return [false, 3]
  }
  if (/^[a-zA-Z0-9\s]+$/.test(pass)) {
    return true
  }
  return [false, 4]
}

function validateRepeat(pass1, pass2) {
  return pass1 === pass2 ? true : [false, 5]
}

export default function validateForm(state) {
  const { login, password, passwordRepeat, registered } = state
  const validLogin = validateLogin(login)
  const validPassword = validatePassword(password)
  const validRepeat = validateRepeat(password, passwordRepeat)

  if (registered && validLogin + validPassword === 2) return true
  if (validLogin + validPassword + validRepeat === 3) return true
  return [validLogin[1], validPassword[1], validRepeat[1]].join("")[0]
}
