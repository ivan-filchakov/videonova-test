export default function findErrors(form) {
  if (!form.link) return "noLink"

  if (form.link.indexOf(" ") >= 0) {
    return "linkSpaces"
  }

  const validLinks = ["youtu.be/", "youtube.com/embed/", "youtube.com/watch?v="]
  const link = validLinks.find((el) => {
    const id = form.link.split(el)[1]
    return id && id.length > 10
  })
  if (!link) return "incorrectLink"

  if (!form.name) return "noName"

  if (form.name.indexOf("  ") >= 0) return "twoSpaces"

  if (form.name.length > 40) return "tooLongName"

<<<<<<< HEAD
  // if (!/^[a-zA-Z0-9\s]+$/.test(form.name)) return "incorrectSymblos"
=======
  if (!/^[a-zA-Z0-9\s]+$/.test(form.name)) return "incorrectSymblos"
>>>>>>> main

  if (!form.description) return "noDescription"

  if (form.description.indexOf("  ") >= 0) return "twoSpaces"

  if (form.description.length > 120) return "tooLongDescription"

<<<<<<< HEAD
  // if (!/^[a-zA-Z0-9\s]+$/.test(form.description)) return "incorrectSymblos"
=======
  if (!/^[a-zA-Z0-9\s]+$/.test(form.description)) return "incorrectSymblos"
>>>>>>> main

  return false
}
