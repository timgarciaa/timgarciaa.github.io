// Tiny synthesized sound effects, so the site ships no audio files.
let ctx: AudioContext | null = null;

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'square', vol = 0.06) {
  ctx ??= new AudioContext();
  const t = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + dur);
}

export const sfx = {
  coin() {
    tone(988, 0, 0.08);
    tone(1319, 0.08, 0.35);
  },
  powerUp() {
    [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.07, 0.12));
  },
  blip() {
    tone(660, 0, 0.05, 'triangle', 0.04);
  },
};
