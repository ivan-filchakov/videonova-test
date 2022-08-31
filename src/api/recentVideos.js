import apiURL from "./apiURL"

export default async function callRecentVideos() {
  return fetch(`${apiURL}video`).then((res) => res.json())
}
