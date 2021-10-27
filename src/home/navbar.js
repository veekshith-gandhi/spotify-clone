function Navbar() {
  return `<nav class="navbar navbar-dark  navbar-expand-sm navPadding navFont navBg navHeight">
    <a class="navbar-brand ml-4" href="index.html" style="color: white;">
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-spotify spotifyLogo" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
  </svg>
    
       
      <b class="spotifyLogoFont" mt-1>Spotify</b>
    </a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
      <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto navBoldFont" style="color: white; id="list">
          <li class="nav-item active list-inline-item"><a class="nav-link text-light mr-4" href="premium.html">Premium</a></li>
          <li class="nav-item active list-inline-item"><a class="nav-link text-light mr-4" href="">Support</a></li>
          <li class="nav-item active list-inline-item"><a class="nav-link text-light mr-4" href="">Download</a></li>
          <li class="nav-item active list-inline-item"><div class="dashLine"></div></li>
          <li class="nav-item active list-inline-item"><a class="nav-link text-light ml-4 mr-2" href="./signup.html">Sign Up</a></li>
          <li class="nav-item active list-inline-item"><a class="nav-link text-light mr-4" href="">Log in</a></li>
        </ul>
      </div>
  </nav>`;
}

export default Navbar;
