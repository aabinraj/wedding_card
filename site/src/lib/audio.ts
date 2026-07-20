// src/lib/audio.ts
/**
 * Simple audio helper for the invitation site.
 * It loads the wax‑seal cracking sound and a background music track.
 * The files are expected at `public/assets/audio/`.
 */

let bgAudio: HTMLAudioElement | null = null;
let visibilityListenerAdded = false;

export const initAudio = () => {
  if (!bgAudio) {
    // background music file name as provided by the user "bgaudio"
    bgAudio = new Audio("/assets/audio/bgaudio.mp3");
    bgAudio.loop = false; // play only once
    bgAudio.preload = "auto";
    bgAudio.volume = 0.5;
  }

  if (!visibilityListenerAdded && typeof document !== "undefined") {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        bgAudio?.pause();
      } else {
        // Optionally resume here: bgAudio?.play(); 
        // But usually safer to just pause on exit to stop unwanted noise.
      }
    });
    visibilityListenerAdded = true;
  }
};

export const playBackground = () => {
  initAudio();
  bgAudio?.play();
};

export const stopBackground = () => {
  bgAudio?.pause();
  bgAudio && (bgAudio.currentTime = 0);
};
