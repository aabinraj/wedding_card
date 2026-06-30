// src/lib/audio.ts
/**
 * Simple audio helper for the invitation site.
 * It loads the wax‑seal cracking sound and a background music track.
 * The files are expected at `public/assets/audio/`.
 */

let sealAudio: HTMLAudioElement | null = null;
let bgAudio: HTMLAudioElement | null = null;

export const initAudio = () => {
  if (!sealAudio) {
    sealAudio = new Audio("/assets/audio/wax_cracking.mp3");
    sealAudio.preload = "auto";
  }
  if (!bgAudio) {
    // background music file name as provided by the user "bgaudio"
    bgAudio = new Audio("/assets/audio/bgaudio.mp3");
    bgAudio.loop = false; // play only once
    bgAudio.preload = "auto";
    bgAudio.volume = 0.5;
  }
};

export const playSeal = () => {
  initAudio();
  sealAudio?.play();
};

export const playBackground = () => {
  initAudio();
  // Delay a short moment after the seal sound finishes (approx 2s) before playing background
  setTimeout(() => {
    bgAudio?.play();
  }, 2000);
};

export const stopBackground = () => {
  bgAudio?.pause();
  bgAudio && (bgAudio.currentTime = 0);
};
