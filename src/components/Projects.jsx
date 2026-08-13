import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import '../styles/projects.scss';

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: 1,
    title: 'Imposter Game',
    desc: 'A multiplayer-style game experience developed using React.',
    img: './imposter.png',
    link: 'https://imposter-lilac.vercel.app/',
  },
  {
    id: 2,
    title: 'Chat App',
    desc: 'A real-time application using React, Express, PostgreSQL and Socket.IO.',
    img: './project01.png',
    link: 'https://auth-system-mu-azure.vercel.app',
  },
  {
    id: 3,
    title: 'Project',
    desc: 'More details about this project will be added soon.',
    img: './project01.png',
    link: '#',
  },
];

function Projects() {
  const projectsRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const section = projectsRef.current;
      const track = trackRef.current;
      const cards = gsap.utils.toArray('.project-card');

      if (!section || !track || !cards.length) return;

      // --------------------------------------------------
      // MAIN HORIZONTAL SCROLL
      // --------------------------------------------------

      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth);
      };

      const horizontalTween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${track.scrollWidth * 1.5}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // --------------------------------------------------
      // CARD DEPTH / ROTATION / SCALE
      // --------------------------------------------------

      cards.forEach((card, index) => {
        const image = card.querySelector('.project-image img');
        const content = card.querySelector('.project-content');
        const number = card.querySelector('.project-number');

        gsap.fromTo(
          card,
          {
            scale: 0.72,
            rotateZ: index % 2 === 0 ? -5 : 5,
            rotateY: index % 2 === 0 ? 12 : -12,
            opacity: 0.35,
          },
          {
            scale: 1,
            rotateZ: 0,
            rotateY: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: 'left 95%',
              end: 'left 35%',
              scrub: true,
            },
          }
        );

        // --------------------------------------------------
        // IMAGE PARALLAX
        // --------------------------------------------------

        gsap.fromTo(
          image,
          {
            xPercent: -12,
            scale: 1.25,
          },
          {
            xPercent: 12,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          }
        );

        // --------------------------------------------------
        // CONTENT REVEAL
        // --------------------------------------------------

        gsap.fromTo(
          content,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: 'left 70%',
              end: 'left 35%',
              scrub: true,
            },
          }
        );

        // --------------------------------------------------
        // PROJECT NUMBER
        // --------------------------------------------------

        gsap.fromTo(
          number,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: 'left 80%',
              end: 'left 45%',
              scrub: true,
            },
          }
        );
      });

      // --------------------------------------------------
      // BIG TITLE
      // --------------------------------------------------

      gsap.fromTo(
        '.projects-title',
        {
          x: 150,
          opacity: 0,
        },
        {
          x: -150,
          opacity: 1,
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
      // PROGRESS BAR
      // --------------------------------------------------

      gsap.to('.projects-progress-line', {
        scaleX: 1,
        transformOrigin: 'left center',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${track.scrollWidth * 1.5}`,
          scrub: true,
        },
      });

      // --------------------------------------------------
      // PROJECT COUNTER
      // --------------------------------------------------

      cards.forEach((card, index) => {
        const counter = document.querySelector('.projects-counter');

        ScrollTrigger.create({
          trigger: card,
          containerAnimation: horizontalTween,
          start: 'left 55%',
          end: 'right 55%',
          onEnter: () => {
            gsap.to(counter, {
              opacity: 1,
              duration: 0.2,
            });

            counter.textContent = `0${index + 1}`;
          },
          onEnterBack: () => {
            gsap.to(counter, {
              opacity: 1,
              duration: 0.2,
            });

            counter.textContent = `0${index + 1}`;
          },
        });
      });

      // --------------------------------------------------
      // REFRESH
      // --------------------------------------------------

      const refresh = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', refresh);

      return () => {
        window.removeEventListener('resize', refresh);
      };
    },
    {
      scope: projectsRef,
    }
  );

  // --------------------------------------------------
  // MOUSE PARALLAX
  // --------------------------------------------------

  const handleMouseMove = (event) => {
    const cards = projectsRef.current?.querySelectorAll('.project-card');

    if (!cards) return;

    const { clientX, clientY } = event;

    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;

    cards.forEach((card, index) => {
      const strength = (index + 1) * 2;

      gsap.to(card, {
        rotateY: x * strength,
        rotateX: -y * strength,
        duration: 0.8,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    });
  };

  const handleMouseLeave = () => {
    const cards = projectsRef.current?.querySelectorAll('.project-card');

    if (!cards) return;

    cards.forEach((card) => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  };

  return (
    <section
      className="projects-main"
      id="projects"
      ref={projectsRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* -----------------------------------------------
          BACKGROUND TITLE
      ------------------------------------------------ */}

      <div className="projects-title-wrap">
        <h1 className="projects-title">
          PROJECTS
        </h1>
      </div>

      {/* -----------------------------------------------
          TOP INFORMATION
      ------------------------------------------------ */}

      <div className="projects-header">
        <span>Selected Work</span>

        <span>
          Scroll
          <span className="scroll-arrow">↓</span>
        </span>
      </div>

      {/* -----------------------------------------------
          HORIZONTAL TRACK
      ------------------------------------------------ */}

      <div className="projects-viewport">
        <div
          className="projects-track"
          ref={trackRef}
        >
          {projectData.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
            >
              {/* NUMBER */}

              <div className="project-number">
                0{index + 1}
              </div>

              {/* IMAGE */}

              <div className="project-image">
                <img
                  src={project.img}
                  alt={project.title}
                />

                <div className="image-overlay" />
              </div>

              {/* CONTENT */}

              <div className="project-content">
                <div>
                  <span className="project-category">
                    PROJECT / {String(index + 1).padStart(2, '0')}
                  </span>

                  <h2>{project.title}</h2>

                  <p>{project.desc}</p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>View Project</span>

                  <span className="link-arrow">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}

          {/* END SPACE */}

          <div className="projects-end">
            <span>More</span>

            <span>Coming Soon</span>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------
          BOTTOM UI
      ------------------------------------------------ */}

      <div className="projects-footer">
        <span className="projects-counter">
          01
        </span>

        <div className="projects-progress">
          <div className="projects-progress-line" />
        </div>

        <span>03</span>
      </div>
    </section>
  );
}

export default Projects;