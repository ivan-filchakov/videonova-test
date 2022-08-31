import apiURL from "./apiURL"

export default async function callAllUsers() {
  return fetch(`${apiURL}user`).then((res) => res.json())
}
