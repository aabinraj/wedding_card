// src/lib/audio.ts
/**
 * Simple audio helper for the invitation site.
 * It loads the wax‑seal cracking sound and a background music track.
 * The files are expected at `public/assets/audio/`.
 */

let sealAudio: HTMLAudioElement | null = null;
let bgAudio: HTMLAudioElement | null = null;

export const initAudio = () => {
  if (!bgAudio) {
    // background music file name as provided by the user "bgaudio"
    bgAudio = new Audio("/assets/audio/bgaudio.mp3");
    bgAudio.loop = false; // play only once
    bgAudio.preload = "auto";
    bgAudio.volume = 0.5;
  }
};

export const playSeal = () => {
  // Wax seal sound removed as per user request
};

export const playBackground = () => {
  initAudio();
  bgAudio?.play();
};

export const stopBackground = () => {
  bgAudio?.pause();
  bgAudio && (bgAudio.currentTime = 0);
};
