// src/lib/particlesConfig.ts

export const flowerParticles: any = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: 15 },
    move: { speed: 1.5, direction: "bottom", outModes: { default: "out" } },
    shape: {
      type: "image",
      image: [
        {
          src: "/assets/images/FLOWERS (1).webp",
          width: 100,
          height: 100
        },
        {
          src: "/assets/images/FLOWERS (2).webp",
          width: 100,
          height: 100
        }
      ]
    },
    size: { value: { min: 15, max: 25 } },
    opacity: { value: { min: 0.6, max: 1 } },
    rotate: {
      value: { min: 0, max: 360 },
      direction: "random",
      animation: { enable: true, speed: 5 }
    }
  },
};

export const heartSparkleParticles: any = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: 20 },
    move: { speed: 2, direction: "top", outModes: { default: "out" } },
    shape: {
      type: "image",
      image: {
        src: "/assets/images/heart.webp",
        width: 80,
        height: 80
      }
    },
    size: { value: { min: 20, max: 40 } },
    opacity: { 
      value: { min: 0.5, max: 1 },
      animation: { enable: true, speed: 1, minimumValue: 0.2 } 
    },
  },
};
