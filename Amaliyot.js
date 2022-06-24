let numberOfSeries;

function startApp() {
  numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

  while (numberOfSeries === 0 || isNaN(numberOfSeries)) {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
  }
}

startApp();

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMySeries() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Oxirgi ko'rgan serialingiz");
    while (a === "" || a === null) {
      a = prompt("Oxirgi ko'rgan serialingiz");
    }
    let b = +prompt("Nechchi baho berasiz?");
    while (b === 0 || isNaN(b)) {
      b = +prompt("Nechchi baho berasiz?");
    }
    seriesDB.series[a] = b;
  }
}

rememberMySeries();

function detectLevelSeries() {
  if (seriesDB.count < 5) console.log("Kam serial Ko'ribsiz");
  else if (seriesDB.count < 10) console.log("Siz Klassik tomoshabin ekansiz");
  else console.log("Siz serialchi zvezda ekansiz");
}

detectLevelSeries();

function writeGenres() {
  for (let i = 0; i < 3; i++) {
    let genre = prompt(`Yaxshi ko'rgan janringiz - ${i + 1}`, "");
    if (genre !== "" && genre !== null) seriesDB.genres.push(genre);
    else i--;
  }
}

writeGenres();

function showDb() {
  if (!seriesDB.private) console.log(seriesDB);
}
showDb();
