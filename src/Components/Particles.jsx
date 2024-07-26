import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particles_Component() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <>
      {init && (
        <div id="particles-container">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              fullScreen: {
                enable: false,
         
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "rgb(255, 255, 255)",
                },
                links: {
                  color: "rgb(255, 255, 255)",
                  distance: 180,
                  enable: true,
                  opacity: 0.7,
                  width: 1.1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1.5,
                  straight: false,
                },
                number: {
                  value: 108,
                  density: {
                    enable: true,
                    value_area: 140,
                  },
                },
                opacity: {
                  value: 0.6,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 2.2 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}
    </>
  );
}
