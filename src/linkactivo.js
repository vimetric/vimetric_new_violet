const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".opc .b1");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      }
    });
  },
  {
    threshold: 0.6, // 60% visible
  }
);

sections.forEach((section) => observer.observe(section));