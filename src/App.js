import './App.css';

function App() {
  return (
    <div class="App">
      <header class="App-header">
        <div class="logo-side">
          <img src="tdllogos\TDL-logo-color-cropped.png" className="App-logo" alt="logo" />
          <img src="tdllogos\logo-words-only.png" className="App-logo-words" alt="logo-words" />
        </div>
        <div class="nav-items">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Projects</a>
          <a className="contact" href="/">Contact Us</a>
        </div>
      </header>
      <header class = "space"></header>
      <body>
        <div class="img-phrase-pair">
          <h1 class="phrase">Put a motto here!</h1>
          <img className="img" alt="show-the-back" src="photos/TDL-Manti_2.14.1.png"></img>
          <p class = "para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="img-phrase-pair">
          <h1 class ="phrase">About Us</h1>
          <img class="img" alt="say-hi" src="photos/TDL-Manti_2.9.1.png"></img>
          <p class ="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="img-phrase-pair">
          <h1 class = "phrase">Our Latest Project</h1>
          <img class="img" alt="say-hi" src="photos/library.jpg"></img>
          <p class = "para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="img-phrase-pair">
          <h1 class = "phrase">Contact Us</h1>
          <img class="img" alt="say-hi" src="photos/TDL-Manti_1.75.1.png"></img>
          <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </body>
      <footer className="App-footer">
        <div>
          media links go here
        </div>
      </footer>
    </div>
  );
}

export default App;
