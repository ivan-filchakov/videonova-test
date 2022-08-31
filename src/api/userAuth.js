import apiURL from "./apiURL"

function callUserAuth(el) {
  const apiRequest = `${apiURL}${el.registered ? "auth" : "register"}`
  return fetch(apiRequest, {
    method: "POST",
    body: JSON.stringify({
      username: el.username,
      password: el.password,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((resp) => {
    const json = resp.json()
    if (resp.status === 200) {
      return json
    }
    return json.then(Promise.reject.bind(Promise))
  })
}

export default callUserAuth
