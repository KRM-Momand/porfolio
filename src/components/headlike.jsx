import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Frames live in /public/frames (see ffmpeg command below), so they're
// reachable at this literal URL path — do NOT import them from src/assets.
const FRAME_COUNT = 124; // set to match: ls public/frames | wc -l
const FRAME_PATH = (i) => `/frames/frame_${String(i).padStart(4, "0")}.jpg`;

function Headlike() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx2d = canvas.getContext("2d");
    let gctx; // gsap context, for cleanup

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame(currentIndexRef.current);
    }

    function drawFrame(index) {
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;
      let dw, dh, dx, dy;
      if (imgAspect > canvasAspect) {
        dh = canvas.height;
        dw = dh * imgAspect;
        dx = (canvas.width - dw) / 2;
        dy = 0;
      } else {
        dw = canvas.width;
        dh = dw / imgAspect;
        dx = 0;
        dy = (canvas.height - dh) / 2;
      }
      ctx2d.clearRect(0, 0, canvas.width, canvas.height);
      ctx2d.drawImage(img, dx, dy, dw, dh);
    }

    let loaded = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        if (loaded === FRAME_COUNT) start();
      };
      imagesRef.current.push(img);
    }

    function start() {
      resizeCanvas();
      drawFrame(0);

      gctx = gsap.context(() => {
        const frameProxy = { frame: 0 };

        gsap.to(frameProxy, {
          frame: FRAME_COUNT - 1,
          ease: "none",
          snap: "frame",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=5000", // tune scroll distance to taste
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            markers: false,
          },
          onUpdate: () => {
            currentIndexRef.current = frameProxy.frame;
            drawFrame(frameProxy.frame);
          },
        });
      }, section);
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      gctx?.revert(); // kills tween + ScrollTrigger + unpins, in one call
    };
  }, []);

  return (
    <section ref={sectionRef} className="head-section">
      <canvas ref={canvasRef} className="head-video" />
    </section>
  );
}

export default Headlike;