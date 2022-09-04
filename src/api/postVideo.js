import apiURL from "./apiURL"

function callPostVideo(el) {
  const apiRequest = `${apiURL}video`
  return fetch(apiRequest, {
    method: "POST",
    body: JSON.stringify({
      url: el.url,
      title: el.title,
      description: el.description,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: el.token,
    },
  }).then((resp) => {
    const json = resp.json()
    if (resp.status === 200) {
      return json
    }
    return json.then(Promise.reject.bind(Promise))
  })
}

export default callPostVideo
