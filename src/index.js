import _ from "lodash"

function component() {
  debugger
  const element = document.createElement("div")

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ")

  return element
}

document.body.appendChild(component())
