import './App.css';
import React, { useEffect, useRef } from 'react';

function App() {
  const headerRef = useRef(null);
  const logoContainer = useRef(null);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY < 0) {
        window.scrollTo(0,0);
      }

      if (window.scrollY > 50) {
        if (headerRef.current) {
          headerRef.current.style.height = "130px";
          logoContainer.current.classList.add('shrunk');
        }
      } else {
        if (headerRef.current) {
          headerRef.current.style.height = "300px";
          logoContainer.current.classList.remove('shrunk');
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div class="App">
      <header class="App-header" ref={headerRef} style={{height: "300px"}}>
        <div class="logo-side" ref={logoContainer}>
          <img src="tdllogos\TDL-logo-color-cropped.png" className="App-logo" alt="logo" />
          <img src="tdllogos\logo-words-only.png" className="App-logo-words" alt="logo-words" />
        </div>
        <div class="nav-items">
          <a class="a" href="/">Home</a>
          <a class="a" href="/">About Us</a>
          <a class="a" href="/">Projects</a>
          <a class="contact" href="/"><span class="contact-help"></span>Contact Us</a>
        </div>
      </header>
      <header class = "space"></header>
      <body class = "body">
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
        <div></div>
        <div>
          <a class ="icon" href = "https://www.facebook.com/TDLGROUP/">
            <img class="icon" alt="facebook" src="tdllogos/facebook.jpg"></img>
          </a>
          <a class = "icon" href = "https://www.facebook.com/TDLGROUP/videos/982365362379517/">
            <img class="icon" alt="youtube" src="tdllogos/youtube.jpg"></img>
          </a>
          <a class = "icon" href = "https://www.linkedin.com/company/tdl-group-llc/">
            <img class="icon" alt="linkedin" src="tdllogos/linkedin.jpg"></img>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
