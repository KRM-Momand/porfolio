import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import '../styles/contact.scss';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);
  const form = useRef(null);
  const buttonRef = useRef(null);

  const [status, setStatus] = useState('idle');

  // --------------------------------------------------
  // GSAP
  // --------------------------------------------------

  useGSAP(
    () => {
      const section = contactRef.current;

      if (!section) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1.2,
        },
      });

      // -----------------------------------------------
      // BIG CONTACT TYPOGRAPHY
      // -----------------------------------------------

      tl.fromTo(
        '.contact-background-title',
        {
          x: 180,
          opacity: 0,
        },
        {
          x: -100,
          opacity: 0.055,
          duration: 1.5,
          ease: 'none',
        }
      );

      // -----------------------------------------------
      // MAIN CONTENT
      // -----------------------------------------------

      tl.fromTo(
        '.contact-msg',
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '-=1'
      );

      // -----------------------------------------------
      // HEADING
      // -----------------------------------------------

      tl.fromTo(
        '.contact-heading-line',
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: 'power4.out',
        },
        '-=0.6'
      );

      // -----------------------------------------------
      // FORM FIELDS
      // -----------------------------------------------

      tl.fromTo(
        '.contact-field',
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
        },
        '-=0.4'
      );

      // -----------------------------------------------
      // BUTTON
      // -----------------------------------------------

      tl.fromTo(
        '.contact-submit',
        {
          y: 40,
          opacity: 0,
          scaleX: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          scaleX: 1,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.35'
      );

      // -----------------------------------------------
      // CONTACT INFO
      // -----------------------------------------------

      tl.fromTo(
        '.contact-info',
        {
          x: 120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8'
      );

      // -----------------------------------------------
      // INDIVIDUAL INFO BLOCKS
      // -----------------------------------------------

      tl.fromTo(
        '.contact-info-item',
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        },
        '-=0.6'
      );

      // -----------------------------------------------
      // ICONS
      // -----------------------------------------------

      tl.fromTo(
        '.contact-icon',
        {
          scale: 0,
          rotate: -45,
        },
        {
          scale: 1,
          rotate: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'back.out(1.7)',
        },
        '-=0.7'
      );

      // -----------------------------------------------
      // UNDERLINES
      // -----------------------------------------------

      gsap.fromTo(
        '.contact-info-line',
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );
    },
    {
      scope: contactRef,
    }
  );

  // --------------------------------------------------
  // BUTTON MAGNETIC EFFECT
  // --------------------------------------------------

  const handleButtonMove = (e) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.15,
      y: y * 0.25,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const handleButtonLeave = () => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  // --------------------------------------------------
  // EMAIL
  // --------------------------------------------------

  const sendEmail = (e) => {
    e.preventDefault();

    if (status === 'sending') return;

    setStatus('sending');

    emailjs
      .sendForm(
        'service_gc6349w',
        'template_fr6wvvx',
        form.current,
        'wjwvceVpZ4TU8dsEK'
      )
      .then(() => {
        setStatus('success');

        form.current.reset();

        gsap.fromTo(
          buttonRef.current,
          {
            scale: 1,
          },
          {
            scale: 1.04,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out',
          }
        );

        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      })
      .catch((error) => {
        console.error(error);

        setStatus('error');

        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      });
  };

  return (
    <section
      className="contact"
      id="contact"
      ref={contactRef}
    >
      {/* =================================================
          BACKGROUND TYPOGRAPHY
      ================================================= */}

      <div className="contact-background">
        <div className="contact-background-title">
          CONTACT
        </div>
      </div>

      {/* =================================================
          TOP LABEL
      ================================================= */}

      <div className="contact-top">
        <span>Let's work together</span>

        <span>06 / Contact</span>
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="contact-content">
        {/* ===============================================
            FORM
        ================================================ */}

        <div className="contact-msg">
          <div className="contact-heading">
            <div className="contact-heading-mask">
              <h1 className="contact-heading-line">
                Contact Me
              </h1>
            </div>

            <p>
              Have an idea, a project or just want to
              say hello?
            </p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >
            {/* Name */}

            <div className="contact-field">
              <label htmlFor="fullName">
                <span>01</span>
                Full Name
              </label>

              <input
                type="text"
                name="from_name"
                id="fullName"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}

            <div className="contact-field">
              <label htmlFor="email">
                <span>02</span>
                Email
              </label>

              <input
                type="email"
                name="from_email"
                id="email"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Message */}

            <div className="contact-field">
              <label htmlFor="msg">
                <span>03</span>
                Your Message
              </label>

              <textarea
                name="message"
                id="msg"
                rows="5"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            {/* Submit */}

            <div className="contact-submit-wrap">
              <button
                ref={buttonRef}
                type="submit"
                className={`contact-submit ${
                  status === 'success'
                    ? 'is-success'
                    : ''
                } ${
                  status === 'error'
                    ? 'is-error'
                    : ''
                }`}
                onMouseMove={handleButtonMove}
                onMouseLeave={handleButtonLeave}
                disabled={status === 'sending'}
              >
                <span>
                  {status === 'sending'
                    ? 'Sending...'
                    : status === 'success'
                    ? 'Message Sent ✓'
                    : status === 'error'
                    ? 'Try Again'
                    : 'Send Message'}
                </span>

                <span className="submit-arrow">
                  ↗
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* ===============================================
            CONTACT INFORMATION
        ================================================ */}

        <div className="contact-info">
          {/* Time */}

          <div className="contact-info-item">
            <div className="contact-icon">
              <i className="bi bi-clock" />
            </div>

            <div className="contact-info-body">
              <div className="contact-info-line" />

              <span className="contact-info-label">
                Availability
              </span>

              <p>
                Saturday & Sunday
              </p>

              <p>
                08:00 — 18:00
              </p>
            </div>
          </div>

          {/* Phone */}

          <div className="contact-info-item">
            <div className="contact-icon">
              <i className="bi bi-telephone" />
            </div>

            <div className="contact-info-body">
              <div className="contact-info-line" />

              <span className="contact-info-label">
                Cell Phone
              </span>

              <a href="tel:+4915561007971">
                +49 (0) 15561 0079 71
              </a>
            </div>
          </div>

          {/* Location */}

          <div className="contact-info-item">
            <div className="contact-icon">
              <i className="bi bi-map" />
            </div>

            <div className="contact-info-body">
              <div className="contact-info-line" />

              <span className="contact-info-label">
                Location
              </span>

              <p>Germany</p>

              <p>Zwickau, Sachsen</p>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          FOOTER
      ================================================= */}

      <div className="contact-footer">
        <span>Available for freelance</span>

        <span>
          © {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}

export default Contact;