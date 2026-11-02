/**
 * WhatsApp-style notification sound, synthesised with the Web Audio API so the
 * site ships without an audio asset. Browsers block audio until the user has
 * interacted with the page, so `unlockNotificationSound` is wired to the first
 * pointer/keyboard event and the player is a no-op while the context is locked.
 */

type WindowWithWebkitAudio = Window & {
  webkitAudioContext?: typeof AudioContext;
};

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (audioContext) return audioContext;

  const AudioCtor =
    window.AudioContext ??
    (window as WindowWithWebkitAudio).webkitAudioContext;

  if (!AudioCtor) return null;

  try {
    audioContext = new AudioCtor();
  } catch {
    return null;
  }

  return audioContext;
}

/** Resume the audio context after the first user gesture. */
export function unlockNotificationSound(): void {
  const ctx = getAudioContext();
  if (!ctx || ctx.state === "running") return;
  void ctx.resume().catch(() => {});
}

function playTone(
  ctx: AudioContext,
  frequency: number,
  start: number,
  duration: number,
  peak: number,
): void {
  const oscillator = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, start);
  // Slight downward bend gives the tone its soft "pop" character.
  oscillator.frequency.exponentialRampToValueAtTime(
    frequency * 0.93,
    start + duration,
  );

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(4800, start);

  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(peak, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

/** Short two-note chime modelled on the WhatsApp message alert. */
export function playWhatsAppNotification(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    void ctx.resume().catch(() => {});
    return;
  }

  const now = ctx.currentTime + 0.01;
  playTone(ctx, 1046.5, now, 0.13, 0.14); // C6
  playTone(ctx, 1568, now + 0.085, 0.16, 0.1); // G6
}
