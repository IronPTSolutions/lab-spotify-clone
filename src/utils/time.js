export function toMMss(time = 0) {
  return `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, "0")}`;
}
