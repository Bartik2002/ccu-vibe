/** Fires an app-wide toast (rendered by <EasterEggs /> in providers). */
export function toast(message: string) {
  window.dispatchEvent(new CustomEvent("ccu:toast", { detail: message }));
}

/** Triggers the full-screen "Dream Bigger" moment. */
export function dreamBigger() {
  window.dispatchEvent(new CustomEvent("ccu:dream"));
}
