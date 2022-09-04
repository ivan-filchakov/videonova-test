function sortByVideos(arr, sortState, setSortState, setUsers) {
  const sort = sortState === "vidMax" ? -1 : 1
  setUsers([...arr].sort((a, b) => b.video.length - a.video.length * sort))
  const newState = sortState === "vidMax" ? "vidMin" : "vidMax"
  setSortState(newState)
}

function sortByName(arr, sortState, setSortState, setUsers) {
  const sort = sortState === "nameAZ" ? -1 : 1
  setUsers(
    [...arr].sort((a, b) => {
      const nameA = a.userName.toLowerCase()
      const nameB = b.userName.toLowerCase()
      if (nameA < nameB) {
        return -1 * sort
      }
      if (nameA > nameB) {
        return sort
      }
      return 0
    })
  )
  const newState = sortState === "nameAZ" ? "nameZA" : "nameAZ"
  setSortState(newState)
}

export { sortByName, sortByVideos }
