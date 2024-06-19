"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">MH</div>
          <div className="logo-text">Mohammad Haider</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:haidermo1408@gmail.com" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-white">
            <h1>
              <small>Hello There, I'm</small>
              Mohammad Haider
            </h1>
            <p>
              Web Developer and Software Engineer in New York, specializing in
              React & Next.js front-end app development and deployment.
              <span>
                {" "}
                Experienced with back-end tools like Python and Node.js for
                full-stack delivery. Bachelor's in Computer Science with startup
                experience.
              </span>
            </p>
            <div className="call-to-action">
              <a
                href="/docs/Mohammad__Haider_2024.pdf"
                className="button black"
              >
                View Resume
              </a>
              <a href="mailto:haidermo1408@gmail.com" className="button red">
                Contact Me
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Ares-93">
                <Image
                  src="/images/github.png"
                  alt="github"
                  width={48}
                  height={48}
                />
              </a>
              <a href="https://www.linkedin.com/in/mhaider93/">
                <Image
                  src="/images/linkedin.png"
                  alt="linkedin"
                  width={48}
                  height={48}
                />
              </a>
            </div>
          </div>
          <div className="hero-black">
            <Image
              src="/images/PFP.png"
              alt="My Pic"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <Image
                src="/images/html.png"
                alt="HTML"
                width={128}
                height={128}
              />
              <Image src="/images/css.png" alt="CSS" width={128} height={128} />
              <Image
                src="/images/javascript.png"
                alt="JS"
                width={128}
                height={128}
              />
              <Image
                src="/images/nodejs.png"
                alt="NodeJS"
                width={128}
                height={128}
              />
              <Image
                src="/images/nextjs.png"
                alt="NextJS"
                width={128}
                height={128}
              />
              <Image
                src="/images/react.png"
                alt="REACT"
                width={128}
                height={128}
              />
              <Image
                src="/images/tailwind.jpg"
                alt="Tailwind"
                width={128}
                height={128}
              />
              <Image
                src="/images/python.png"
                alt="Python"
                width={128}
                height={128}
              />
              <Image
                src="/images/mongo.png"
                alt="Mongo"
                width={128}
                height={128}
              />
              <Image
                src="/images/html.png"
                alt="HTML"
                width={128}
                height={128}
              />
              <Image src="/images/css.png" alt="CSS" width={128} height={128} />
              <Image
                src="/images/javascript.png"
                alt="JS"
                width={128}
                height={128}
              />
              <Image
                src="/images/nodejs.png"
                alt="NodeJS"
                width={128}
                height={128}
              />
              <Image
                src="/images/nextjs.png"
                alt="NextJS"
                width={128}
                height={128}
              />
              <Image
                src="/images/react.png"
                alt="REACT"
                width={128}
                height={128}
              />
              <Image
                src="/images/tailwind.jpg"
                alt="Tailwind"
                width={128}
                height={128}
              />
              <Image
                src="/images/python.png"
                alt="Python"
                width={128}
                height={128}
              />
              <Image
                src="/images/mongo.png"
                alt="Mongo"
                width={128}
                height={128}
              />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-white">
            <div className="left-column">
              <h3>Front-End</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>REACT</li>
                <li>Next JS</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
              <h3>Back-End</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>Something about me</h3>
              <p>
                Hey, I'm Mohammad Haider, I'm a Software Engineer experienced in
                both Front-End & Back-End tools to bring a FullStack Experienced
                Developer toolset to any projects. I'm interested in showing my
                skills to build projects which can make an impact.
              </p>
              <p>
                Currently I'm working on projects for non-profit organizations
                and always looking for new projects to work on as I love
                building websites, games and apps.
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <Image
                    src="/images/workplace-1.jpg"
                    alt="theCoderSchool"
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                  <figcaption>Coding Instructor</figcaption>
                </div>
              </figure>
              <h3>theCoderSchool</h3>
              <div>2023-present</div>
              <p>
                An Organization dedicated to teaching the next generation of
                software engineers and developers.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <Image
                    src="/images/workplace-2.png"
                    alt="CHAD Foundation"
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                  <figcaption>Front-End Developer</figcaption>
                </div>
              </figure>
              <h3>CHAD Foundation</h3>
              <div>2023-present</div>
              <p>
                A non-profit organization with a mission in raising awareness of
                Heart-Related Abnormalities.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <Image
                    src="/images/workplace-3.jpg"
                    alt="LocalDevs"
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                  <figcaption>Back-End Developer</figcaption>
                </div>
              </figure>
              <h3>LocalDevs</h3>
              <div>2024-present</div>
              <p>
                A non-profit of software devs, engineers, designers, and public
                health students, working together to promote social and health
                equity.
              </p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small> previous </small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="https://ares-game-zone.vercel.app" className="bento-item">
              <Image
                src="/images/AresGameZone.webp"
                alt="Game Zone"
                layout="responsive"
                width={500}
                height={500}
              />
            </a>
            <a
              href="https://space-invaders-qtyrhe90f-ariz-haiders-projects.vercel.app"
              className="bento-item"
            >
              <Image
                src="/images/space-invaders.png"
                alt="Space Invaders"
                layout="responsive"
                width={500}
                height={500}
              />
            </a>
            <a
              href="https://dmc-landing-page.vercel.app"
              className="bento-item"
            >
              <Image
                src="/images/Hero.jpg"
                alt="Devil May Cry"
                layout="responsive"
                width={500}
                height={500}
              />
            </a>
            <a
              href="https://quiz-1puazkee8-ariz-haiders-projects.vercel.app"
              className="bento-item"
            >
              <Image
                src="/images/Quiz.jpg"
                alt="Quizz App"
                layout="responsive"
                width={500}
                height={500}
              />
            </a>
            <a href="#" className="bento-item">
              <Image
                src="/images/Marvel_Logo.svg"
                alt="Marvel Comic App"
                layout="responsive"
                width={500}
                height={500}
              />
            </a>
            <a href="#" className="bento-item">
              <Image
                src="/images/AI Assistant.jpg"
                alt="AI Assistant APP"
                layout="responsive"
                width={500}
                height={500}
              />
            </a>
          </div>
        </section>
        <section className="chat-bot container">
          <h2>
            <small>Talk to me</small>
            Chatbot
          </h2>
          <div className="chat-bot-white">
            <div className="chat-info">
              <h3 className="chat-bot-head">AI Chatbot</h3>
              <p>
                This Chatbot knows my work experiences, skills and contains a
                copy of my resume. Feel free to ask questions to get a better
                idea on what I do.
              </p>
              <p>
                Please feel free to download my resume. I'm currently on the
                lookout for new opportunities so if you have a project that
                needs my help please get in touch!
              </p>
              <a
                href="/docs/Mohammad__Haider_2024.pdf"
                className="button black"
              >
                Download Resume
              </a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  <li className="chat-list">
                    <span className="avatar bot">AI</span>
                    <div className="message">
                      Hey there, I'm a chatbot built to help you interact with
                      this portfolio and CV. What can I do to help?
                    </div>
                  </li>
                  <li>
                    <span className="avatar user">User</span>
                    <div className="message">
                      I have a question about this resume.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat-message">
                <input
                  type="text"
                  placeholder="Hey Mohammad, what skills are you good at?"
                />
                <button className="button red">Send</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
