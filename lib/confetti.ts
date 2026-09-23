const COLORS = ["#F96E5B", "#FFD85E", "#8CC9FF", "#C9B7FF", "#A9E5C2", "#FFB36B"];

/** Dependency-free confetti burst using the Web Animations API. */
export function confettiBurst(count = 90) {
  if (typeof document === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    const size = 6 + Math.random() * 8;
    const x = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 40;
    const duration = 1400 + Math.random() * 1800;

    el.style.cssText = `
      position: fixed; top: -3vh; left: ${x}vw; z-index: 200;
      width: ${size}px; height: ${size * (Math.random() > 0.5 ? 0.4 : 1)}px;
      background: ${COLORS[i % COLORS.length]};
      border-radius: ${Math.random() > 0.6 ? "50%" : "2px"};
      pointer-events: none; will-change: transform;
    `;
    document.body.appendChild(el);

    el.animate(
      [
        { transform: "translate(0, 0) rotate(0deg)", opacity: 1 },
        {
          transform: `translate(${drift}vw, 108vh) rotate(${540 + Math.random() * 540}deg)`,
          opacity: 0.9,
        },
      ],
      { duration, easing: "cubic-bezier(.2,.5,.4,1)" }
    ).onfinish = () => el.remove();
  }
}
