import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import CloudIcon from "../component/CloudIcon";
import "./home.css";
import githubIcon from "../assets/github-fill.png";
import linkedInIcon from "../assets/linkedin-box-fill.png";
import instaIcon from "../assets/instagram-line (1).png";
import twitterIcon from "../assets/twitter-x-fill.png";
import mailIcon from "../assets/mail-line (1).png";

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Web Designing",
      ],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="inner-wrapper">
        <div className="Home-container">
          <div className="home-left-container">
            <div className="profile-txt">
              <div className="profile-txt1">Hi There,</div>
              <div className="profile-txt1">
                I'm Anjul <span className="surename-txt">Singh</span>
              </div>
              <div className="profile-txt2">
                I Am into <span ref={typedElement}></span>
              </div>
              <div className="resume-btn">
                <button>Resume</button>
              </div>
              <div className="socialmedia-logo">
                <a href="https://github.com/npmanjul" target="_blank">
                  <div className="social-icon">
                    <img src={githubIcon} alt="GitHub" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/anjul-singh-3500a1219/" target="_blank">
                  <div className="social-icon">
                    <img src={linkedInIcon} alt="LinkedIn" />
                  </div>
                </a>

                <a href="https://www.instagram.com/anjul__s/" target="_blank">
                  <div className="social-icon">
                    <img src={instaIcon} alt="Instagram" />
                  </div>
                </a>

                <a href="https://x.com/Anjul__s" target="_blank">
                  <div className="social-icon">
                    <img src={twitterIcon} alt="Twitter" />
                  </div>
                </a>


                <a href="mailto:anjulsingh462@gmail.com?subject=Hello,%20I%20am%20anjul">
                  <div className="social-icon">
                    <img src={mailIcon} alt="Mail" />
                  </div>
                </a>

              </div>
            </div>
          </div>
          <div className="home-right-container">
            <div className="cloud-box">
              <CloudIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
