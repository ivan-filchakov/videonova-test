export default function isInternalLink(path) {
  const external = /^(https?:\/\/|\/\/)/i
  return !external.test(path)
}
