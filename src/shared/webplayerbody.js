export function player() {
  return `  <div class="webplayer-container">
    <div class="top">
      <div class="sidebar">
        <div class="zero">
          <a href="#"
            ><svg viewBox="0 0 1134 340" class="spotify-logo--text">
              <title>Spotify</title>
              <path
                fill="currentColor"
                d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
              ></path>
            </svg>
          </a>
        </div>
        <ul class="one">
          <li class="green-li">
            <a
              href="player.html"
              class="side-a"
              style="text-decoration: none"
              id="home-li"
            >
              <img
                class="src-home-logo"
                src="https://img.icons8.com/ios/50/000000/home--v1.png"
              />
              <span>Home</span>
            </a>
          </li>
          <li id="br-li">
            <a href="search.html" class="side-a" style="text-decoration: none">
              <img
                class="src-home-logo"
                src="https://img.icons8.com/ios/50/000000/search--v1.png"
              />
              <span>Search</span>
            </a>
          </li>
          <li id="br-li">
            <a href="#" class="side-a" style="text-decoration: none">
              <img
                class="src-home-logo"
                src="https://img.icons8.com/ios/50/000000/music-library--v1.png"
              />
              <span>library</span>
            </a>
          </li>
        </ul>
        <div class="two sidebar-scroll">
          <h3 class="side-h3" style="filter: invert(100%)">Your Library</h3>
          <ul class="side-list">
            <li class="side-li2"><a href="#">Made For You</a></li>
            <li class="side-li2"><a href="#">Recently Played</a></li>
            <li class="side-li2"><a href="likedSongs.html">Liked Songs</a></li>
            <li class="side-li2"><a href="#">Albums</a></li>
          </ul>
          <br />
          <h3 class="side-h3" style="filter: invert(100%)">Playlists</h3>
          <ul class="side-list">
            <li class="side-li2"><a href="#">India Top 50</a></li>
            <li class="side-li2"><a href="#">Global Top 50</a></li>
            <li class="side-li2"><a href="#">Monday Mood</a></li>
            <li class="side-li2"><a href="#">Indian Old</a></li>
            <li class="side-li2"><a href="#">Weekend Nostalgia 1990</a></li>
            <li class="side-li2"><a href="#">Monday Mood</a></li>
            <li class="side-li2"><a href="#">Indian Old</a></li>
          </ul>
        </div>
        <div class="three">
          <img
            class="src-home-logo"
            src="https://img.icons8.com/material-two-tone/48/000000/add.png"
          />
          <a href="#">New Playlist</a>
        </div>
      </div>

      <!-- < bar > -->
      <div class="content">
        <div class="top-bar">
          <div class="top-bar-l">
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
            <div class="search">
              <input
                class="search-input"
                name="search"
                type="text"
                style="display: none"
                placeholder="Search"
                autocomplete="off"
              />
              <div class="ser-icon">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="top-bar-r">
            <img src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg" alt="" />
            <h3 id="username" style="font-size: large"></h3>
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div class="webplayer-content-area">
      
          <!-- append using js 
        --></div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
          <img id="songImg"
            src="https://e-cdns-images.dzcdn.net/images/cover/a18d1bf2734af6e550b8f1cfa24cd6a5/56x56-000000-80-0-0.jpg"
            alt=""
          />
        <div class="song-name">
          <div class="sng-name">
            <a href="#" id="sgName">akon</a>
            <div id="likeSong">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="artist-name"><a href="#" id="art-name"> Joyner Lucas</a></div>
        </div>
      </div>
      <div class="bottom-center">
        <div class="buttons">
          <ion-icon class="player-icon" name="shuffle"></ion-icon>
          <ion-icon class="player-icon" name="play-skip-back"></ion-icon>
          <ion-icon
            class="player-icon-m"
            name="stop-circle-outline"
          ></ion-icon>
          <ion-icon class="player-icon" name="play-skip-forward"></ion-icon>
          <ion-icon class="player-icon" name="repeat"></ion-icon>
        </div>
        <div class="song_slider_container">
        <div class="current-time">00:00</div>
        <input type="range" min="1" max="100"
          value="0" class="seek_slider">
        <div class="total-duration">00:00</div>
      </div>
      </div>
      <div class="volume_slider_container">
        <i class="fa fa-volume-down" style="margin-right:5px"></i>
        <input type="range" min="1" max="100"
        value="99" class="volume_slider">
        <i class="fa fa-volume-up style="margin-left:5px""></i>
      </div>
      <div class="bottom-right">
        <ion-icon class="vol-icon" name="reorder-three-outline"></ion-icon>
        <ion-icon class="vol-icon" name="tv-outline"></ion-icon>
      </div>
    </div>
  </div>`;
}
