import React from "react";
import { Link as Scroll } from "react-scroll";
import { openInNewTab } from "../../Utils/openTab";
import "./styles.css";

function About() {
  return (
    <div className="About">
      <section className="title-section">
        <h1 className="title">About</h1>
      </section>
      <article className="about-me">
        <img
          className="personal-photo"
          src="./Headshots/Pesonal Headshot.jpg"
          alt="Profile Icon"
        />
        <section className="about-icons">
          <i
            className="bi-instagram instagram-icon"
            onClick={() => openInNewTab("https://www.instagram.com/bosston.r/")}
          ></i>
          <i
            className="bi-reddit reddit-icon"
            onClick={() => openInNewTab("https://www.reddit.com/user/Bosstonr")}
          ></i>
          <i
            className="bi-twitter twitter-icon"
            onClick={() => openInNewTab("https://twitter.com/BostonRohan")}
          ></i>
        </section>
        <p>
          Hey! I'm Boston a junior web developer. I love to create modern and
          effective web applications for people to enjoy. I am a fast learner,
          and adapt quickly to fast paced environments. I enjoy collaboration,
          and will do the best I can to bring the best out of my teammates.
        </p>
        <p>
          I have been learning the <b>MERN</b> stack with MongoDB, Express,
          React and Node.
        </p>
        <p>
          I am certain that web development is my calling to serve others with
          clean, good-looking, and efficient web applications. By turning my
          hobby into a career I hope to serve myself, my family, and my
          community.
        </p>
        <p>
          To contact me, or gain more information{" "}
          <Scroll
            className="click-text"
            activeClass="active"
            spy={true}
            smooth={true}
            to="Contact"
          >
            click here.
          </Scroll>
        </p>
      </article>
    </div>
  );
}
export default About;
