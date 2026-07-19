/** Toggles night mode on the whole document and remembers the choice. */
export function toggleNight(force?: boolean): boolean {
  const el = document.documentElement;
  const on = force ?? !el.classList.contains("night");
  el.classList.toggle("night", on);
  try {
    localStorage.setItem("ccu-night", on ? "1" : "0");
  } catch {
    // private mode — fine, just don't persist
  }
  return on;
}

export function isNight(): boolean {
  return typeof document !== "undefined" && document.documentElement.classList.contains("night");
}
