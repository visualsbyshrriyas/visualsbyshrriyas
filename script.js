const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();


// Scroll-triggered reveal animations
const revealTargets = document.querySelectorAll(
  '.section-heading, .project, .service-row, .about-top, .about-left, .about-right, .contact > *'
);
revealTargets.forEach((el, index) => {
  el.classList.add(index % 3 === 1 ? 'reveal-left' : index % 3 === 2 ? 'reveal-right' : 'reveal');
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => revealObserver.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}
