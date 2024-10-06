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
          headerRef.current.style.height = "250px";
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
    <div class="App" id = "home-section">
      <header class="App-header" ref={headerRef} style={{height: "300px"}}>
        <div class="inner-header">
          <div class="logo-side" ref={logoContainer}>
            <img src="tdllogos\TDL-logo-color-cropped.png" className="App-logo" alt="logo" />
            <img src="tdllogos\logo-words-only.png" className="App-logo-words" alt="logo-words" />
          </div>
          <div class="nav-items">
            <a class="a" href="#home-section">Home</a>
            <a class="a" href="#about-section">About Us</a>
            <a class="a" href="#services-section">Services</a>
            <a class="a" href="#project-section">Projects</a>
            <a class="contact" href="#contact-section"><span class="contact-help"></span>Contact Us</a>
          </div>
        </div>
      </header>
      <body class = "body">
        <div class = "space"></div>
        <div class = "inner-body">
          <div class="img-phrase-pair">
            <div class ="left-phrase">
              <h1>We Are A Family</h1>
              <h3>A company that builds from the heart</h3>
            </div>
            <img className="img" alt="show-the-back" src="photos/the-back.png"></img>
            <div class= "bottom-text-clear">
              <p class = "para">When our founder, Dan Lokeni, tragically lost his son, Ta'imua'iao Dayne Lokeni (TDL), he envisioned a 
                company that could uplift his community and honor his son's memory. At TDL, you're a part of something bigger, where 
                every project serves a greater purpose. </p>
              <p class = "para">We operate like an employee-owned non-profit, distributing earnings equitably and 
                supporting philanthropic projects to fight poverty in Samoa. This motivates our team to work smarter and faster, 
                benefiting everyone. Unlike other steel erectors, we're driven to maximize efficiency.</p>
            </div>
          </div>
          <div class="img-phrase-pair" id="about-section">
            <h1 class="center-phrase">About Us</h1>
            <img class="img" alt="say-hi" src="photos/the-gang.png"></img>
            <div class="mid-text-clear">
              <p>TDL is a trusted steel erection company in Utah with over 15 years of experience in the structural 
                steel trade. We specialize in commercial, industrial, and public works projects, handling everything from steel joists 
                and girders to beams and cross-sections for buildings of all sizes. 
              </p>
              <p>We are committed to delivering high-quality, safe, 
                and efficient work that meets the expectations of our general contractors. Whether constructing new steel structures 
                or repairing existing ones, our skilled team brings the expertise and dedication to ensure your project's success.</p>
            </div>
          </div>
          <div class="img-phrase-pair" id="services-section">
            <h1 class="left-phrase">Our Provided Services</h1>
            <img class="img" alt="services" src="photos/far-stare.png"></img>
            <ul class="right-panel-text">
              <li>Commercial</li>
              <li>Industrial</li>
              <li>Public Works</li>
              <li>Buildings Of All Sizes</li>              
            </ul>
          </div>
          <div class="img-phrase-pair" id="project-section">
            <h1 class="corner-phrase">Our Latest Project</h1>
            <img class="img" alt="say-hi" src="photos/project-photos/library-full.jpg"></img>
            <div class="right-panel-text">
              <h2>The Spanish Fork Library Hall</h2>
              <h3>Completed April 29, 2023</h3>
            </div>
          </div>
          <div class="img-phrase-pair" id="contact-section">
            <div class = "right-phrase">
              <h2 class="h1-contact">Contact Us</h2>
              <div class ="footer-para">
                <h4>Located in: West Jordan, UT 84081, USA</h4>
                <h4>Call us: (801) 259-6255</h4>
                <h4>Email us: tdl23group@gmail.com</h4>
              </div>
            </div>
            <img class="img" alt="say-hi" src="photos/look-up-short.png"></img>
          </div>
          <div class = "end-space"></div>
        </div>
      </body>
      <footer className="App-footer">
        <p class="copyright">© David Wells 2024. All Rights Reserved. **Disclaimer: This is a site proposal, not an official site of TDL.**</p>
        <div class="media-links">
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
