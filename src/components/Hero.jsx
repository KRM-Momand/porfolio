import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import '../styles/hero.scss';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    image: './slide01.avif',
    number: '01',
    title: 'CREATIVE',
  },
  {
    image: './slide02.avif',
    number: '02',
    title: 'DIGITAL',
  },
  {
    image: './slide03.avif',
    number: '03',
    title: 'EXPERIENCE',
  },
];

const socials = [
  {
    name: 'GitHub',
    icon: 'bi bi-github',
    link: 'https://github.com/',
  },
  {
    name: 'Facebook',
    icon: 'bi bi-facebook',
    link: 'https://www.facebook.com/3dforlife',
  },
  {
    name: 'Instagram',
    icon: 'bi bi-instagram',
    link: 'https://www.instagram.com/krm_momand',
  },
  {
    name: 'TikTok',
    icon: 'bi bi-tiktok',
    link: '#',
  },
  {
    name: 'YouTube',
    icon: 'bi bi-youtube',
    link: '#',
  },
];

function Hero() {
  const heroRef = useRef(null);
  const imageRefs = useRef([]);
  const currentSlide = useRef(0);
  const isAnimating = useRef(false);
  const carouselTimer = useRef(null);

  useGSAP(
    () => {
      const hero = heroRef.current;

      if (!hero) return;

      const intro = gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
      });

      gsap.set('.hero-grid-line', {
        scaleY: 0,
        transformOrigin: 'top',
      });

      gsap.set('.hero-name-word', {
        yPercent: 120,
      });

      gsap.set('.hero-role-line', {
        yPercent: 120,
      });

      gsap.set('.hero-image-mask', {
        clipPath: 'inset(100% 0% 0% 0%)',
      });

      gsap.set('.hero-image', {
        scale: 1.3,
      });

      gsap.set('.hero-image-overlay', {
        scaleX: 0,
        transformOrigin: 'left',
      });

      gsap.set('.hero-social-item', {
        x: -40,
        opacity: 0,
      });

      gsap.set('.hero-meta > *', {
        y: 20,
        opacity: 0,
      });

      gsap.set('.hero-scroll', {
        y: 30,
        opacity: 0,
      });

      gsap.set('.hero-counter', {
        y: 30,
        opacity: 0,
      });

      intro.to(
        '.hero-grid-line',
        {
          scaleY: 1,
          duration: 1.4,
          stagger: 0.08,
          ease: 'power3.inOut',
        },
        0
      );

      intro.to(
        '.hero-image-mask',
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.8,
          ease: 'power4.inOut',
        },
        0.15
      );

      intro.to(
        '.hero-image',
        {
          scale: 1,
          duration: 2.2,
          ease: 'power3.out',
        },
        0.1
      );

      intro.to(
        '.hero-image-overlay',
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power4.inOut',
        },
        0.6
      );

      intro.to(
        '.hero-image-overlay',
        {
          scaleX: 0,
          transformOrigin: 'right',
          duration: 1.1,
          ease: 'power4.inOut',
        },
        1.4
      );

 
      intro.to(
        '.hero-name-word',
        {
          yPercent: 0,
          duration: 1.2,
          stagger: 0.07,
          ease: 'power4.out',
        },
        0.7
      );

      intro.to(
        '.hero-role-line',
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.out',
        },
        1.15
      );

 
      intro.to(
        '.hero-meta > *',
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
        },
        1.2
      );

 
      intro.to(
        '.hero-social-item',
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
        },
        1.4
      );


      intro.to(
        '.hero-scroll',
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        1.7
      );

      intro.to(
        '.hero-counter',
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        1.7
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=100%',
          scrub: 1,
        },
      });

      scrollTl
        .to(
          '.hero-name',
          {
            y: -180,
            opacity: 0,
            ease: 'none',
          },
          0
        )
        .to(
          '.hero-image-wrap',
          {
            y: -120,
            scale: 1.12,
            ease: 'none',
          },
          0
        )
        .to(
          '.hero-meta',
          {
            y: -80,
            opacity: 0,
            ease: 'none',
          },
          0
        )
        .to(
          '.hero-social',
          {
            x: -100,
            opacity: 0,
            ease: 'none',
          },
          0
        )
        .to(
          '.hero-scroll',
          {
            y: 80,
            opacity: 0,
            ease: 'none',
          },
          0
        )
        .to(
          '.hero-bg-word',
          {
            x: '-20vw',
            ease: 'none',
          },
          0
        );
    },
    {
      scope: heroRef,
    }
  );


  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (e) => {
      const x =
        e.clientX / window.innerWidth - 0.5;

      const y =
        e.clientY / window.innerHeight - 0.5;

      gsap.to('.hero-image-wrap', {
        x: x * 18,
        y: y * 12,
        duration: 1.2,
        ease: 'power3.out',
      });

      gsap.to('.hero-name', {
        x: x * -12,
        y: y * -8,
        duration: 1.4,
        ease: 'power3.out',
      });

      gsap.to('.hero-bg-word', {
        x: x * -35,
        y: y * -20,
        duration: 1.8,
        ease: 'power3.out',
      });

      gsap.to('.hero-orb', {
        x: x * 40,
        y: y * 30,
        duration: 2,
        ease: 'power3.out',
      });
    };

    hero.addEventListener(
      'mousemove',
      handleMouseMove
    );

    return () => {
      hero.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);


  const handleSocialMove = (e) => {
    const element = e.currentTarget;

    const rect = element.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    gsap.to(element, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.35,
      ease: 'power3.out',
    });
  };

  const handleSocialLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  const goToSlide = (index, direction = 1) => {
    if (isAnimating.current) return;

    if (index === currentSlide.current) return;

    isAnimating.current = true;

    const current =
      imageRefs.current[currentSlide.current];

    const next = imageRefs.current[index];

    if (!current || !next) {
      isAnimating.current = false;
      return;
    }

    const nextImage =
      next.querySelector('.hero-image');

    const currentImage =
      current.querySelector('.hero-image');

    const nextNumber =
      next.querySelector('.hero-slide-number');

    const currentNumber =
      current.querySelector('.hero-slide-number');

    const nextTitle =
      next.querySelector('.hero-slide-title');

    const currentTitle =
      current.querySelector('.hero-slide-title');

    const tl = gsap.timeline({
      onComplete: () => {
        currentSlide.current = index;
        isAnimating.current = false;
      },
    });

    gsap.set(next, {
      zIndex: 3,
      clipPath:
        direction > 0
          ? 'inset(0% 0% 100% 0%)'
          : 'inset(100% 0% 0% 0%)',
    });

    gsap.set(nextImage, {
      scale: 1.35,
    });

    tl.to(
      current,
      {
        scale: 0.95,
        duration: 1,
        ease: 'power3.inOut',
      },
      0
    );

    tl.to(
      next,
      {
        clipPath:
          'inset(0% 0% 0% 0%)',
        duration: 1.25,
        ease: 'power4.inOut',
      },
      0
    );

    tl.to(
      nextImage,
      {
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
      },
      0
    );

    tl.fromTo(
      nextTitle,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 0.8,
        ease: 'power4.out',
      },
      0.45
    );

    tl.fromTo(
      nextNumber,
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      },
      0.5
    );

    tl.to(
      currentImage,
      {
        scale: 1.15,
        duration: 1.25,
        ease: 'power3.inOut',
      },
      0
    );

    tl.set(current, {
      zIndex: 1,
    });
  };

  const nextSlide = () => {
    const next =
      (currentSlide.current + 1) %
      slides.length;

    goToSlide(next, 1);
  };

  const previousSlide = () => {
    const previous =
      (currentSlide.current - 1 + slides.length) %
      slides.length;

    goToSlide(previous, -1);
  };


  useEffect(() => {
    carouselTimer.current =
      setInterval(() => {
        nextSlide();
      }, 6500);

    return () => {
      clearInterval(carouselTimer.current);
    };
  }, []);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      }

      if (e.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, []);

  return (
    <section
      className="hero"
      id="home"
      ref={heroRef}
    >

      <div className="hero-background">
        <div className="hero-bg-word">
          DESIGN
        </div>

        <div className="hero-orb" />

        <div className="hero-grid">
          <span className="hero-grid-line" />
          <span className="hero-grid-line" />
          <span className="hero-grid-line" />
          <span className="hero-grid-line" />
          <span className="hero-grid-line" />
        </div>
      </div>


      <header className="hero-top">
        <span className="hero-logo">
          KRM
        </span>

        <span className="hero-location">
          Germany — DE
        </span>

        <span className="hero-status">
          <i />
          Available for work
        </span>
      </header>

      <aside className="hero-social">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="hero-social-item"
            onMouseMove={handleSocialMove}
            onMouseLeave={handleSocialLeave}
          >
            <i className={social.icon} />
          </a>
        ))}
      </aside>


      <main className="hero-main">

        <div className="hero-name">
          <div className="hero-name-mask">
            <h1 className="hero-name-word">
              Khalil
            </h1>
          </div>

          <div className="hero-name-mask">
            <h1 className="hero-name-word hero-name-outline">
              Rahman
            </h1>
          </div>

          <div className="hero-name-mask">
            <h1 className="hero-name-word">
              Momand
            </h1>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-shadow" />

          <div className="hero-slides">
            {slides.map((slide, index) => (
              <div
                key={slide.image}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className={`hero-slide ${
                  index === 0
                    ? 'is-active'
                    : ''
                }`}
              >
                <img
                  className="hero-image"
                  src={slide.image}
                  alt={slide.title}
                />

                <div className="hero-image-gradient" />

                <div className="hero-slide-info">
                  <span className="hero-slide-number">
                    {slide.number}
                  </span>

                  <div className="hero-slide-title-mask">
                    <span className="hero-slide-title">
                      {slide.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-image-overlay" />
        </div>

        <div className="hero-role">
          <div className="hero-role-mask">
            <p className="hero-role-line">
              Graphic Designer
            </p>
          </div>

          <div className="hero-role-mask">
            <p className="hero-role-line">
              3D Artist
            </p>
          </div>

          <div className="hero-role-mask">
            <p className="hero-role-line">
              Web Developer
            </p>
          </div>
        </div>

        <div className="hero-meta">
          <span>
            Creative
            <br />
            Technologist
          </span>

          <span>
            UI / UX
            <br />
            Full Stack
          </span>
        </div>
      </main>

      <div className="hero-controls">
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className="hero-counter">
          <span>
            0{currentSlide.current + 1}
          </span>

          <span className="hero-counter-divider">
            /
          </span>

          <span>
            0{slides.length}
          </span>
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-circle">
          <svg viewBox="0 0 100 100">
            <defs>
              <path
                id="scrollCircle"
                d="
                  M 50,50
                  m -35,0
                  a 35,35 0 1,1 70,0
                  a 35,35 0 1,1 -70,0
                "
              />
            </defs>

            <text>
              <textPath href="#scrollCircle">
                SCROLL TO EXPLORE • SCROLL TO EXPLORE •
              </textPath>
            </text>
          </svg>

          <span>
            ↓
          </span>
        </div>
      </div>

      <footer className="hero-bottom">
        <span>
          Portfolio / 2026
        </span>

        <span>
          Scroll to explore
        </span>
      </footer>

      <div className="hero-noise" />
    </section>
  );
}

export default Hero;