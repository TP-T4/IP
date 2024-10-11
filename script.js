async function download() {

  const url = "https://www.freetogame.com/api/games?platform=pc"
  const response = await fetch(url)
  const json = (await response.json()).splice(-10)
  const element = document.querySelector(".title")

  element.innerHTML = ""
  for (const item of json) {
    const message = item.message
    const name = item.name
    element.innerHTML += "<p>" + name + ": " + message + "</p>"
  }
}

download()