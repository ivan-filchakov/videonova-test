export default async function callAllUsers() {
  return fetch("https://wonderful-app-lmk4d.cloud.serverless.com/user").then(
    (res) => res.json()
  )
}
