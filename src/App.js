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
          <div class ="phrase">
            <h1>We are a family</h1>
            <h2>A company that builds from the heart</h2>
          </div>
          <img className="img" alt="show-the-back" src="photos/TDL-Manti_2.14.1.png"></img>
          <p class = "para">When our Founder Dan Lokeni tragically lost his son, Ta'imua'iao Dayne Lokeni (TDL), he developed a vision 
            of a company that could lift his brothers and sisters and honor the memory of his son. When you are part of TDL, you are 
            part of something bigger than yourself, and every job helps us achieve a greater purpose. 
            At TDL, we work for eachother. The company acts like an employee-owned non-profit and distributes the earnings equitably. 
            A portion of our earnings go to philanthropic projects in our home country to alleviate poverty. This incentivizes our team 
            to do their best work and deliver the project faster, benefiting all parties. Unlike traditional steel erectors who are 
            incentivized to do the minimum amount of work in an hour, we are motivated to save manhours by working harder, smarter, 
            and more effectively. Truly, this unselfish way of doing business has the power to revolutionize the industry.
            Sometimes, out of great pain emerges a new begining. TDL is making big waves not only here at work but back in Samoa. 
            Join us on our journey and come be part of something bigger. </p>
        </div>
        <div class="img-phrase-pair">
          <h1 class ="phrase">About Us</h1>
          <img class="img" alt="say-hi" src="photos/TDL-Manti_2.9.1.png"></img>
          <p class ="para">TDL is an experienced steel erection company in Utah.
              Our company offers a combined work experience of over 15 years in the structural steel erection trade. Our structural 
              steel work relates to commercial buildings and industrial facilities as well as public works. Our experience has 
              included, but is not limited to the following: erection of steel joists, girders, beams, cross sections, and other 
              structural members for buildings of various sizes and square footage. We strive to provide the kind of quality, time, 
              effort, experience and personnel that our general contractors look for in a safe and qualified steel erector.
              From erecting new metal buildings and steel structures to repairing existing structures, we have decades of experience 
              to deliver the results for your erection projects.</p>
        </div>
        <div class="img-phrase-pair">
          <h1 class = "phrase">Our Latest Projects</h1>
          <img class="img" alt="say-hi" src="photos/library-full.jpg"></img>
          <p class = "para"></p>
        </div>
        <div class="img-phrase-pair">
          <h1 class = "phrase">Contact Us</h1>
          <img class="img" alt="say-hi" src="photos/TDL-Manti_1.75.1.png"></img>
          <div class ="footer-para">
            <h3>Located in: West Jordan, UT 84081, USA</h3>
            <h3>Call us: (801) 259-6255</h3>
            <h3>Email us: tdl23group@gmail.com</h3>
          </div>
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
