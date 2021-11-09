import {
    side
} from "./auth/player";
var count=0;
var i=1;
export default function songAPI(){
    side();
    var obj = {}
    var id = localStorage.getItem("id");
        fetch(`http://localhost:8000/users?id=${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            obj = data[0];
            console.log(obj.likedsongs);
            for(var dt of obj.likedsongs){
                songBeingLiked(dt.songName,dt.songImg,dt.albumName,dt.albumName,dt.duration)
            }
            // for(i=0; i<obj.likedsongs.length; i++){
                // songBeingLiked(obj.likedsongs[i].songName,obj.likedsongs[i].songImg,obj.likedsongs[i].albumName,obj.likedsongs[i].albumName,obj.likedsongs[i].duration)
            // }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        // for(var dt of obj.likedsongs){
            // songBeingLiked(dt.songName,dt.songImg,dt.albumName,dt.albumName,dt.songImg,dt.duration)
        // }
    }
    function songBeingLiked(nameOfSong,picOfSong,nameOfAlbum,nameOfArtist,timeOfSong){
        console.log(i)
        let likedSongs = document.getElementById("likedSongs");
        
        // /calculating the time when song is liked/
        let dateAdded = new Date();
        console.log(dateAdded)
        let dateToday = dateAdded.getDate()+"-"+(dateAdded.getMonth()+1)+"-"+dateAdded.getFullYear();
        console.log(dateToday)
    
    
        // /creating the list of songs/
        let frag = document.createElement('div');
        frag.innerHTML = `
        <ul class="text-light titleList titleHeight mb-3 thisClass" type="none">
        <li class="songBox1 mt-2 pl-2">${i}</li>
        <li class="songBox02 row mt-n2"><img class="likedImgSize pl-2 pr-2 pt-2 " src="${picOfSong}"/>
        <div class="ml-2">
            <p class="fontOfNameOfAlbum pb-1">${nameOfSong}</p>
            <p class="fontOfNameOfArtist">${nameOfArtist}</p>
        </div></li></li>
        <li class="songBox3  mt-2">${nameOfAlbum}</li>
        <li class="songBox04 mt-2">${dateToday}</li>
        <li class="songBox05  mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill likeButtonInLikedPg" viewBox="0 0 16 16">
        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
        </svg></li>
            <li class="songBox06 mt-2">${Math.floor((timeOfSong/60).toFixed(0))}:${timeOfSong%60}</li>
            </ul>`
        console.log(frag);
        likedSongs.append(frag)
        count++;
        // let accountAndsongNumber = document.getElementById("accountAndsongNumber");
        // accountAndsongNumber.innerHTML = `<small><b>${username}</b>&nbsp;.&nbsp;${count}&nbsp;songs</small>`;
        i++;
    }
    // function likeHandle(){
     /*   // var isLikedPresent = https://localhost:8000/users?id=1
        fetch("http://localhost:8000/users?id=1")
        .then(res=>res.json())
        .then((res)=>{
            if(!res[0].likedsongs){
                console.log("no liked songs");
            }
            console.log(res[0].likedsongs);
        })*/
        
    // likeHandle();
