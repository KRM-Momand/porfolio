import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import '../styles/about.scss';

gsap.registerPlugin(ScrollTrigger);

const webSkills = [
  'C',
  'C++',
  'HTML',
  'CSS',
  'SCSS',
  'Bootstrap',
  'JavaScript',
  'React.js',
  'Redux',
  'Redux Toolkit',
  'Node.js',
  'Express.js',
  'Socket.IO',
];

const designSkills = [
  'Photoshop',
  'Illustrator',
  'After Effects',
  'Autodesk Maya',
  'Autodesk Mudbox',
];

function About() {
  const aboutRef = useRef(null);
  const aboutTrackRef = useRef(null);

  useGSAP(
    () => {
      const section = aboutRef.current;
      const track = aboutTrackRef.current;

      if (!section || !track) return;

      const panels = gsap.utils.toArray('.about-panel');

      // --------------------------------------------------
      // MAIN HORIZONTAL MOVEMENT
      // --------------------------------------------------

      const horizontalTween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',

        scrollTrigger: {
          trigger: section,

          start: 'top top',

          end: () => `+=${track.scrollWidth * 1.25}`,

          pin: true,

          scrub: 1.2,

          invalidateOnRefresh: true,
        },
      });

      // --------------------------------------------------
      // HUGE BACKGROUND ABOUT TEXT
      // --------------------------------------------------

      gsap.fromTo(
        '.about-background-title',
        {
          x: '15vw',
        },
        {
          x: '-20vw',

          ease: 'none',

          scrollTrigger: {
            trigger: section,

            start: 'top top',

            end: () => `+=${track.scrollWidth}`,

            scrub: true,
          },
        }
      );

      // --------------------------------------------------
      // INTRO TEXT
      // --------------------------------------------------

      gsap.fromTo(
        '.about-intro',
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,

          ease: 'none',

          scrollTrigger: {
            trigger: section,

            start: 'top 90%',

            end: 'top 35%',

            scrub: true,
          },
        }
      );

      // --------------------------------------------------
      // INTRO LINE
      // --------------------------------------------------

      gsap.fromTo(
        '.about-intro-line',
        {
          scaleX: 0,
        },
        {
          scaleX: 1,

          transformOrigin: 'left center',

          ease: 'none',

          scrollTrigger: {
            trigger: section,

            start: 'top 90%',

            end: 'top 40%',

            scrub: true,
          },
        }
      );

      // --------------------------------------------------
      // EACH PANEL
      // --------------------------------------------------

      panels.forEach((panel, index) => {
        const heading = panel.querySelector('.about-panel-title');
        const content = panel.querySelector('.about-panel-content');
        const skills = panel.querySelectorAll('.skill-item');

        // Panel depth
        gsap.fromTo(
          panel,
          {
            scale: 0.86,

            rotateY: index % 2 === 0 ? 8 : -8,

            opacity: 0.3,
          },
          {
            scale: 1,

            rotateY: 0,

            opacity: 1,

            ease: 'none',

            scrollTrigger: {
              trigger: panel,

              containerAnimation: horizontalTween,

              start: 'left 95%',

              end: 'left 35%',

              scrub: true,
            },
          }
        );

        // Heading
        gsap.fromTo(
          heading,
          {
            x: 120,

            opacity: 0,
          },
          {
            x: 0,

            opacity: 1,

            ease: 'none',

            scrollTrigger: {
              trigger: panel,

              containerAnimation: horizontalTween,

              start: 'left 80%',

              end: 'left 45%',

              scrub: true,
            },
          }
        );

        // Content
        gsap.fromTo(
          content,
          {
            y: 80,

            opacity: 0,
          },
          {
            y: 0,

            opacity: 1,

            ease: 'none',

            scrollTrigger: {
              trigger: panel,

              containerAnimation: horizontalTween,

              start: 'left 70%',

              end: 'left 40%',

              scrub: true,
            },
          }
        );

        // Individual skills
        skills.forEach((skill, skillIndex) => {
          gsap.fromTo(
            skill,
            {
              x: 60 + skillIndex * 3,

              opacity: 0,

              scale: 0.9,
            },
            {
              x: 0,

              opacity: 1,

              scale: 1,

              ease: 'none',

              scrollTrigger: {
                trigger: panel,

                containerAnimation: horizontalTween,

                start: `left ${70 + skillIndex * 1.2}%`,

                end: `left ${45 + skillIndex * 1.2}%`,

                scrub: true,
              },
            }
          );
        });
      });

      // --------------------------------------------------
      // PROGRESS
      // --------------------------------------------------

      gsap.to('.about-progress-line', {
        scaleX: 1,

        transformOrigin: 'left center',

        ease: 'none',

        scrollTrigger: {
          trigger: section,

          start: 'top top',

          end: () => `+=${track.scrollWidth * 1.25}`,

          scrub: true,
        },
      });

      // --------------------------------------------------
      // COUNTER
      // --------------------------------------------------

      const counter = section.querySelector('.about-counter');

      panels.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,

          containerAnimation: horizontalTween,

          start: 'left 55%',

          end: 'right 55%',

          onEnter: () => {
            counter.textContent = `0${index + 1}`;
          },

          onEnterBack: () => {
            counter.textContent = `0${index + 1}`;
          },
        });
      });
    },

    {
      scope: aboutRef,
    }
  );

  return (
    <section
      className="about"
      id="about"
      ref={aboutRef}
    >
      {/* -----------------------------------------------
          BACKGROUND TYPOGRAPHY
      ------------------------------------------------ */}

      <div className="about-background">
        <div className="about-background-title">
          ABOUT
        </div>
      </div>

      {/* -----------------------------------------------
          HEADER
      ------------------------------------------------ */}

      <div className="about-header">
        <span>About Me</span>

        <span>
          Scroll
          <span className="about-scroll-arrow">
            ↓
          </span>
        </span>
      </div>

      {/* -----------------------------------------------
          HORIZONTAL CONTENT
      ------------------------------------------------ */}

      <div className="about-viewport">
        <div
          className="about-track"
          ref={aboutTrackRef}
        >
          {/* -------------------------------------------
              INTRO
          -------------------------------------------- */}

          <article className="about-intro">
            <div className="about-intro-top">
              <span>01 / About</span>
            </div>

            <div className="about-intro-line" />

            <h2>
              Designer
              <br />
              turned
              <br />
              Developer.
            </h2>

            <p>
              I create digital experiences where
              visual design and technology meet.
            </p>
          </article>

          {/* -------------------------------------------
              STORY
          -------------------------------------------- */}

          <article className="about-panel about-story">
            <span className="about-panel-number">
              02
            </span>

            <h2 className="about-panel-title">
              Creative
              <br />
              Background
            </h2>

            <div className="about-panel-content">
              <p>
                As a creative professional with a
                background in TV commercials, branding,
                3D visualization, motion graphics and
                digital design, I have always been
                passionate about creating visual
                experiences.
              </p>

              <p>
                Over the years, I have worked on creative
                projects that strengthened my skills in
                design thinking and user-focused
                creativity.
              </p>
            </div>
          </article>

          {/* -------------------------------------------
              TRANSITION
          -------------------------------------------- */}

          <article className="about-transition">
            <span>Then I started asking...</span>

            <h2>
              What if
              <br />
              I could
              <br />
              build it?
            </h2>
          </article>

          {/* -------------------------------------------
              DEVELOPMENT
          -------------------------------------------- */}

          <article className="about-panel about-development">
            <span className="about-panel-number">
              03
            </span>

            <h2 className="about-panel-title">
              Development
              <br />
              & Programming
            </h2>

            <div className="about-panel-content">
              <p>
                While working in the design industry,
                I became increasingly interested in the
                technical side of building digital
                products.
              </p>

              <p>
                That curiosity inspired me to transition
                into web development and application
                programming.
              </p>

              <div className="skills">
                {webSkills.map((skill) => (
                  <span
                    className="skill-item"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* -------------------------------------------
              DESIGN
          -------------------------------------------- */}

          <article className="about-panel about-design">
            <span className="about-panel-number">
              04
            </span>

            <h2 className="about-panel-title">
              Design
              <br />
              & 3D
            </h2>

            <div className="about-panel-content">
              <p>
                My design background continues to shape
                how I approach development.
              </p>

              <p>
                I care about hierarchy, motion,
                interaction and the small details that
                make an interface feel intentional.
              </p>

              <div className="skills">
                {designSkills.map((skill) => (
                  <span
                    className="skill-item"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* -------------------------------------------
              CURRENT
          -------------------------------------------- */}

          <article className="about-current">
            <span>05 / Currently</span>

            <h2>
              Building
              <br />
              things that
              <br />
              feel good.
            </h2>

            <p>
              Currently pursuing my Master of Computer
              Applications and expanding my skills in
              full-stack development, UI/UX and modern
              web technologies.
            </p>
          </article>

          {/* -------------------------------------------
              END
          -------------------------------------------- */}

          <article className="about-end">
            <span>More to come</span>

            <strong>
              2026 →
            </strong>
          </article>
        </div>
      </div>

      {/* -----------------------------------------------
          FOOTER
      ------------------------------------------------ */}

      <div className="about-footer">
        <span className="about-counter">
          01
        </span>

        <div className="about-progress">
          <div className="about-progress-line" />
        </div>

        <span>05</span>
      </div>
    </section>
  );
}

export default About;