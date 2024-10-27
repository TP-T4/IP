async function download() {

  const url = "https://ipinfo.io/json"
  const response = await fetch(url)
  const json = await response.json()
  const element = document.querySelector(".ip")

  element.innerHTML = ""
    const ip = json.ip
    const city = json.city
    const region = json.region
    const country = json.country
    const org = json.org
    const postal = json.postal
    const timezone = json.timezone
    element.innerHTML += "<p>" + ip + "<br>" + city + "<br>" + region + "<br>" + country + "<br>" + org + "<br>" + postal + "<br>" + timezone + "</p>"
  } 

download()