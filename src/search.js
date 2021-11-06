import {
    playerBody
} from "./auth/player";
var axios = require("axios").default;
var songs = [];
export default function search() {
    playerBody();
    var searchInput = document.querySelector(".search-input");
    searchInput.style.display = "block";
    const content = document.querySelector(".webplayer-content-area")
    content.innerHTML = `<div style="display: flex;" >
    <div style="flex-basis: 5%; text-align:center;">#</div>
    <div style="flex-basis: 50%; text-align:center;">TITLE</div>
    <div style="flex-basis: 30%; text-align:center;">ALBUM</div>
    <div style="flex-basis: 15%; text-align:center;">Duration</div>
</div>`
    // content.addEventListener("click",playSong);
    searchInput.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
            /*fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchInput.value}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "x-rapidapi-key": "dc87229675msh2fd397d592069b3p1ca28bjsn072f093fc027"
                    }
                })
                .then(response => {
                    console.log(response);
                    response.json();
                })
                .then(response =>{
                    console.log(response);
                    // for(var data of response){
                        // console.log(data.title);
                    // }
                })
                .catch(err => {
                    console.error(err);
                });*/

            var axios = require("axios").default;

            var options = {
                method: 'GET',
                url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
                params: {
                    q: searchInput.value,
                },
                headers: {
                    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                    'x-rapidapi-key': 'dc87229675msh2fd397d592069b3p1ca28bjsn072f093fc027'
                }
            };

            axios.request(options).then(function (response) {
                var dt = response.data.data;
                // console.log(dt);
                var i=1;
                songs = [];
                content.innerHTML = `<div style="display: flex;" >
    <div style="flex-basis: 10%; text-align:center;">#</div>
    <div style="flex-basis: 45%; text-align:center;">TITLE</div>
    <div style="flex-basis: 30%; text-align:center;">ALBUM</div>
    <div style="flex-basis: 15%; text-align:center;">Duration</div>
</div>`
                for(var track of dt){
                    var container = document.createElement("div");
                    container.className = "song"
                    container.style.margin = "10px 0px"
                    container.style.display ="flex";
                    var id = document.createElement("div")
                    id.style.flexBasis = "10%"
                    id.style.textAlign = "center"
                    var trackDetails = document.createElement("div")
                    trackDetails.style.display = "flex"
                    trackDetails.style.flexBasis = "45%"
                    var img = document.createElement("img");
                    img.src = track.album.cover_small;
                    // console.log(img.src,track.album.cover_small);
                    var p = document.createElement("p");
                    p.textContent = track.title;
                    p.style.marginLeft = "10px"
                    p.style.textAlign = "center"
                    trackDetails.append(img,p);
                    // trackDetails.append("Hi");
                    var album = document.createElement("div")
                    album.style.flexBasis = "30%"
                    album.style.textAlign = "center"
                    var duration = document.createElement("div");
                    duration.style.flexBasis = "15%"
                    duration.style.textAlign = "center"
                    id.textContent = i;
                    album.textContent=track.album.title;
                    duration.textContent = "0.30"
                    container.append(id,trackDetails,album,duration);
                    content.append(container);
                    songs.push(track.preview);
                    id.id = i;
                    trackDetails.id = i;
                    img.id = i;
                    p.id = i;
                    album.id = i;
                    duration.id = i;
                    i++;
                    // console.log(track.preview);
                    container.addEventListener("click",function(){
                        playSong();
                    })
                }
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
    // const h1Tag = document.createElement("h1");
    // h1Tag.textContent = "Hi Hello lorenm ipsum tesxtskhfjskljlhfkjsna hjdskfhaks "
    // content.append(h1Tag)
    /*creating the list of songs*/
 /*   let frag = document.createElement('div');
    frag.innerHTML = `
    <ul class="text-light titleList titleHeight mb-3 thisClass" type="none">
    <li class="songBox1 mt-2 pl-2">${i}</li>
    <li class="songBox02 row mt-n2"><img class="likedImgSize pl-2 pr-2 pt-2 " src="${picOfSong}"/>
    <div class="ml-2">
        <p class="fontOfNameOfAlbum pb-1">${nameOfSong}</p>
        <p class="fontOfNameOfArtist">${nameOfArtist}</p>
    </div></li></li>
    <li class="songBox3  mt-2">${nameOfAlbum}</li>
    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
    </svg></li>
        <li class="songBox06 mt-2">${timeOfSong}</li>
        </ul>`*/
    // likedSongs.append(frag)
    // count++;
    // let accountAndsongNumber = document.getElementById("accountAndsongNumber");
    // accountAndsongNumber.innerHTML = `<small><b>${username}</b>&nbsp;.&nbsp;${count}&nbsp;songs</small>`;
    // i++;
}
var playing = false;
var audio;
function playSong(){
    // console.log(event.target.id);
    // var audio;
    if(playing){
        audio.pause();
    }
    var songId = Number(event.target.id)-1;
    var songPath = songs[songId];
    audio = new Audio(songPath);
    audio.play();
    playing = true;
    console.log(audio.duration);
}