import "./styles.css";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const [education, seteducation] = useState(true);
  const [experience, setexperience] = useState(false);
  const [projects, setprojects] = useState(false);
  const [skills, setskills] = useState(false);
  const [opennav, setopennav] = useState(false);
  function SetAllFalse() {
    seteducation(false);
    setexperience(false);
    setprojects(false);
    setskills(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  const container = useRef(null);
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      render: "svg",
      direction: "1",
      loop: true,
      autoplay: true,
      animationData: require("./lottie/anim.json")
    });
    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <div className="App">
      <nav
        className={
          !opennav
            ? "d-flex navbar-new bg-new px-9 py-3 flex-rows transition-all"
            : "d-flex navbar-fixed-new bg-new px-9 py-3 flex-rows transition-all"
        }
      >
        <span className="brand-name">😄Amisha</span>
        <div className="d-flex flex-rows">
          <a href="#home" className="mx-4 nav-items">
            Home
          </a>
          <a href="#aboutme " className="mx-4 nav-items">
            About me
          </a>
          <a href="#resume" className="mx-4 nav-items">
            Resume
          </a>
          <a href="#contactme" className="mx-4 nav-items">
            Contact me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-3" id="home">
        <div className="bars" onClick={() => setopennav(!opennav)}></div>
        <div className="herosection2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center im-text-section">
              <span className="im-text">
                Hi, I'm <span className="name-im-text">Amisha Shrivastava</span>
              </span>
              <span className="im-text-enthu">Enthusiastic Developer😎</span>
              <span className="im-text-head">
                Seeking solutions to real-world problems.
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hireme">
                  Hire me
                </a>
                <a
                  href="https://drive.google.com/file/d/15q789z64UCjw4NWx0bsBPs0lio4Tcxsl/view?usp=sharing"
                  className="btn-resume"
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/dy30t0qhi/image/upload/v1691858913/Copy_of_passportSize_hxshzb.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="about-me-section aboutme-inside my-5" id="aboutme">
        <div className="d-flex flex-column">
          <span className="aboutme-text">About Me</span>
          <span className="why-text">Why choose me?</span>
        </div>
        <div className="row  shadow-lg my-5">
          <div
            className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center anim"
            ref={container}
          ></div>
          <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
            <span className="about-self">
              As a curious and driven individual, I am always eager to take on
              new challenges and learn from them. I am particularly interested
              in exploring opportunities in the fields of Python, Machine
              Learning, and Full Stack Web Development. Let's connect and
              explore how we can collaborate and create innovative solutions in
              the world of technology.
            </span>
            <span className="few-highlights">
              <span className="few-text">Here are my skills:</span>
              <span className="few-list">
                <ul>
                  <li>Python, C/C++</li>
                  <li>Django, Flask, React</li>
                  <li>JavaScript, HTML, CSS, Bootstrap</li>
                  <li>MySQL, Oracle</li>
                  <li>Git, GitHub, VS Code, PyChram</li>
                </ul>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="aboutme-text">Resume</span>
        <span className="why-text">my formal bio details</span>
        <div
          className="resume-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 d-flex flex-row px-0 shadow-lg resume-left">
            <div className="d-flex flex-column bg-new text-dark">
              <span className="icons-span">
                <i class="fa-solid fa-user-graduate"></i>{" "}
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-briefcase"></i>{" "}
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-code"></i>{" "}
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-list-check"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column ">
              <span
                className={
                  education === false
                    ? "resume-options"
                    : "selected resume-options"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  experience === false
                    ? "resume-options"
                    : "selected resume-options"
                }
                onClick={() => {
                  ChangeState(setexperience, true);
                }}
              >
                Experience
              </span>
              <span
                className={
                  skills === false
                    ? "resume-options"
                    : "selected resume-options"
                }
                onClick={() => {
                  ChangeState(setskills, true);
                }}
              >
                Skills
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options"
                    : "selected resume-options"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right">
            {education === true && <Education />}
            {experience === true && <Experience />}
            {projects === true && <Projects />}
            {skills === true && <Skills />}
          </div>
        </div>
      </div>
      <div className="contact-me-sec" id="contactme">
        <div className="relative-bg"></div>
        <div className="contact-inner-part d-flex flex-column">
          <span className="aboutme-text">Contact Me</span>
          <span className="why-text mb-5">Lets get in touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
