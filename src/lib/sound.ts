"use client";

/**
 * Procedural Web Audio API sound synthesis engine for Kott Studio.
 * Zero external audio files required — pure mathematical oscillators & noise nodes.
 */

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

if (typeof window !== "undefined") {
  const saved = localStorage.getItem("kott_sound");
  if (saved !== null) {
    soundEnabled = saved === "true";
  }
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export const sound = {
  isEnabled(): boolean {
    return soundEnabled;
  },

  toggle(): boolean {
    soundEnabled = !soundEnabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("kott_sound", String(soundEnabled));
      window.dispatchEvent(new CustomEvent("kott-sound-change", { detail: soundEnabled }));
    }
    if (soundEnabled) {
      this.click();
    }
    return soundEnabled;
  },

  setEnabled(enabled: boolean) {
    soundEnabled = enabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("kott_sound", String(soundEnabled));
      window.dispatchEvent(new CustomEvent("kott-sound-change", { detail: soundEnabled }));
    }
  },

  /**
   * Sharp, tactile analog switch click for buttons & links (12ms transient).
   */
  click() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.018);

      gain.gain.setValueAtTime(0.045, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.018);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.019);
    } catch {
      // Ignore audio policy restrictions gracefully
    }
  },

  /**
   * Micro-tick for pill buttons & selection chips (880Hz soft pulse).
   */
  select() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.025);

      gain.gain.setValueAtTime(0.035, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.026);
    } catch {
      // Ignore audio policy restrictions
    }
  },

  /**
   * Subtle mechanical tick when opening/closing expandable accordion menus.
   */
  toggleTick(isOpen: boolean) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const startFreq = isOpen ? 320 : 540;
      const endFreq = isOpen ? 540 : 320;

      osc.type = "sine";
      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + 0.028);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.028);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.029);
    } catch {
      // Ignore audio policy restrictions
    }
  },

  /**
   * Harmonic resolution chime when a form is successfully transmitted (C5 + E5 harmonic).
   */
  success() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const notes = [523.25, 659.25]; // C5, E5
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.06);

        gain.gain.setValueAtTime(0.05, ctx.currentTime + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.06 + 0.28);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + i * 0.06);
        osc.stop(ctx.currentTime + i * 0.06 + 0.29);
      });
    } catch {
      // Ignore audio policy restrictions
    }
  },
};
