const url = "https://koronawirus-api.herokuapp.com/api/covid19/daily";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const infectionsNumber = data.general.infections;
    const deathsNumber = data.general.deaths;
    const recoveredNumber = data.general.recovered;

    const infections = (document.getElementById(
      "infections"
    ).innerText = infectionsNumber);
    const deaths = (document.getElementById("deaths").innerText = deathsNumber);
    const recovered = (document.getElementById(
      "recovered"
    ).innerText = recoveredNumber);
  });
