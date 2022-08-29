export default async function callRecentVideos() {
  return fetch("https://wonderful-app-lmk4d.cloud.serverless.com/video", {
    method: "GET",
  }).then((res) => res.json())
}
