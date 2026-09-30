const hero = document.querySelector(".hero");

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
let ticking = false;

function updateHero() {
  if (!hero) return;

  const r = hero.getBoundingClientRect();
  const h = r.height;

  const p = clamp((-r.top) / (h * 0.85), 0, 1);

  hero.style.setProperty("--zoom", (1 + p * 0.18).toFixed(3));
  hero.style.setProperty("--hue", `${(p * 60).toFixed(1)}deg`);
  hero.style.setProperty("--tint", p.toFixed(3));

  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(updateHero);
      ticking = true;
    }
  },
  { passive: true }
);

window.addEventListener("resize", updateHero);
updateHero();

const reveals = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => io.observe(el));
