import BackgroundAnimation from "../components/BackgroundAnimiation";
import { Typewriter } from "react-simple-typewriter";
import "./index.css";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="layout">
      <BackgroundAnimation />
      <div className="content">
        <h1 className="name">Hi, my name is Sam.</h1>
        <div className="header">
          <span
            style={{ fontWeight: "bold", color: "#F4B400", fontSize: "1rem" }}
          >
            <Typewriter
              words={[
                "I'm a software engineer.",
                "I'm a dog dad.",
                "I'm a musician.",
                "I'm a public speaker.",
                "I'm queer and trans."
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <p className="bio">
            I am a web developer who loves to build elegant, clean and scalable
            code. I have a passion for learning new tech. I'm an advocate for
            queer & trans inclusion in the workplace.
          </p>
        </div>
        <div className="btn-ctn">
          <Link to="https://github.com/samswagbot">Portfolio</Link>
          <Link to="mailto:sammossallam@gmail.com?subject=Interested in chatting!&body=Hi Sam,">
            Contact
          </Link>
          <Link to="https://resume.creddle.io/resume/6i323bo4q9f">Resume</Link>
        </div>
      </div>
    </div>
  );
};
