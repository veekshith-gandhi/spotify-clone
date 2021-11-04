import { player } from "./webplayerbody";

export class APIController {
  static artist() {
    const contentArea = document.querySelector(".webplayer-content-area");
    const axios = require("axios").default;
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search&limit=55",
      params: { q: "trending" },
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      
      },
    };

    axios
      .request(options)
      .then(({ data }) => {
        const { data: levelOne } = data;
        const h1Tag = document.createElement("h1");
        h1Tag.innerHTML = "Jump back in";
        h1Tag.style.fontSize = "x-large";
        h1Tag.style.fontFamily = "Arial, sans-serif";
        h1Tag.style.fontWeight = "800";
        h1Tag.style.margin = "20px 30px";

        contentArea.appendChild(h1Tag);
        contentArea.appendChild(creatCardOfArtist(levelOne));
      })
      .catch((error) => {
        console.error(error);
      });
  }
  static playlist() {
    const contentArea = document.querySelector(".webplayer-content-area");
    const axios = require("axios").default;
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search&limit=35",
      params: { q: "akon" },
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      
      },
    };

    axios
      .request(options)
      .then(({ data }) => {
        const { data: levelOne } = data;
        contentArea.appendChild(creatCardOfList(levelOne));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const creatCardOfArtist = (res) => {
  const mainCard = document.createElement("div");
  mainCard.style.margin = "10px 0px";
  // const h1Tag = document.createElement("h1");
  // h1Tag.textContent = "Top Songs";
  // mainCard.before(h1Tag);
  mainCard.style.display = "flex";
  mainCard.style.flexWrap = "wrap";
  res.forEach((element) => {
    // console.log(element.album);
    const imgDiv = document.createElement("div");
    imgDiv.style.cursor = "pointer";
    imgDiv.addEventListener("click", function () {
      window.location.href = "http://localhost:8080/musicpage.html";
      let body = document.getElementById("#musicContainer");
      console.log(body);
      body.innerHTML = player();
    });
    imgDiv.style.margin = "10px 15px";
    imgDiv.style.width = "17%";
    imgDiv.style.background = "#161616";
    const imgTag = document.createElement("img");
    imgTag.src = element.album.cover;
    imgTag.style.width = "100%";
    imgTag.style.padding = "15px";
    imgDiv.appendChild(imgTag);

    const textDiv = document.createElement("div");
    const pTag = document.createElement("p");
    pTag.textContent = element.title_short;
    pTag.style.color = "white";
    pTag.style.textAlign = "center";
    pTag.style.fontFamily = "serif";
    pTag.style.font = "small";
    textDiv.appendChild(pTag);
    imgDiv.appendChild(textDiv);
    mainCard.appendChild(imgDiv);
  });
  return mainCard;
};

const creatCardOfList = (res) => {
  const mainContainer = document.createElement("div");

  const coverContainerDiv = document.createElement("div");
  coverContainerDiv.style.display = "flex";
  const coverDiv = document.createElement("div");
  coverDiv.style.background = "rgb(29,39,44)";
  const imgdiv = document.createElement("img");
  imgdiv.style.padding = "10px";

  const textContentDiv = document.createElement("div");
  textContentDiv.style.background = "rgb(29,39,44)";
  textContentDiv.style.minWidth = "870px";
  textContentDiv.style.padding = "10px";
  // textContentDiv.style.margin = "0px 20px";
  const pTag1 = document.createElement("p");
  pTag1.textContent = "Playlist";
  pTag1.style.margin = "40px 0px";
  const hTag1 = document.createElement("h1");
  hTag1.textContent = "Daily Mix";
  hTag1.style.fontSize = "xxx-large";
  const hTag2 = document.createElement("h1");
  hTag2.style.fontSize = "x-large";
  const pTag2 = document.createElement("p");
  pTag2.textContent = "Spotify 35 songs,2hr 10 min";
  pTag2.style.color = "white";
  pTag2.style.fontFamily = "serif";
  pTag2.style.font = "small";
  // after coverContainerDiv
  const listOfSongsContainer = document.createElement("div");
  const songBtn = document.createElement("div");
  songBtn.style.background = "rgb(17,20,22)";
  songBtn.style.padding = "30px";
  const btnImg = document.createElement("img");
  btnImg.src = "https://img.icons8.com/flat-round/64/000000/play--v1.png";
  const pTitle = document.createElement("p");
  pTitle.textContent = "#  Title";
  pTitle.style.fontSize = "medium";
  pTitle.style.margin = "24px 0px -9px 2px";
  const hrTag = document.createElement("hr");
  hrTag.style.border = "1px solid green";

  songBtn.appendChild(btnImg);
  songBtn.appendChild(pTitle);
  songBtn.appendChild(hrTag);
  let count = 1;
  listOfSongsContainer.appendChild(songBtn);
  res.forEach((element) => {
    imgdiv.src = element.album.cover_medium;
    hTag2.textContent = `${element.album.title} and more`;

    const divMain = document.createElement("div");
    divMain.className = "webplayer-main-container";
    divMain.style.padding = "3px";
    divMain.style.display = "grid";
    divMain.style.gridTemplateColumns = "0fr 4fr 3fr 1fr";
    divMain.style.background = "rgb(17,20,22)";

    const divOne = document.createElement("div");
    divOne.style.margin = "20px -6px 0px 6px";
    divOne.textContent = `${count++}`;

    const divTwo = document.createElement("div");
    divTwo.style.margin = "3px 20px";
    const imgDivTwo = document.createElement("img");
    imgDivTwo.src = element.album.cover_small;
    divTwo.appendChild(imgDivTwo);
    const pDivTwo = document.createElement("span");
    pDivTwo.style.margin = "15px";
    pDivTwo.textContent = element.title;
    divTwo.appendChild(pDivTwo);

    const divThree = document.createElement("div");
    const pDivThree = document.createElement("p");
    pDivThree.textContent = element.album.title;
    pDivThree.style.margin = "19px 0px 0px 0px";
    divThree.appendChild(pDivThree);

    const divFour = document.createElement("div");
    const pDivFour = document.createElement("p");
    pDivFour.textContent = `${(element.duration / 60).toFixed(1)} min`;
    pDivFour.style.margin = "19px 0px 0px 2px";
    divFour.appendChild(pDivFour);

    divMain.appendChild(divOne);
    divMain.appendChild(divTwo);
    divMain.appendChild(divThree);
    divMain.appendChild(divFour);
    listOfSongsContainer.appendChild(divMain);
    textContentDiv.appendChild(pTag1);
    textContentDiv.appendChild(hTag1);
    textContentDiv.appendChild(hTag2);
    textContentDiv.appendChild(pTag2);
    coverDiv.appendChild(imgdiv);
    coverContainerDiv.appendChild(coverDiv);
    coverContainerDiv.appendChild(textContentDiv);
    mainContainer.appendChild(coverContainerDiv);
    // after coverContainerDiv
    mainContainer.appendChild(listOfSongsContainer);
  });
  return mainContainer;
};
