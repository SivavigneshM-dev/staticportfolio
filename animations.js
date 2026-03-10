// --- GSAP Animations ---
const initAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  // --- 1. Hero Section Fade Up ---
  // Targets the content inside the hero section
  gsap.from("#hero .hero-content > *", {
    y: 60,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2, // Delays each element slightly
    ease: "power4.out",
    delay: 0.5,
  });

  // --- 2. Client Marquee ---
  const logosContainer = document.querySelector(".client-logos");
  if (logosContainer) {
    const logos = gsap.utils.toArray(".client-logos > div");

    // Clone logos for seamless loop
    logos.forEach((logo) => {
      logosContainer.appendChild(logo.cloneNode(true));
    });

    // Animate the container
    // Use a timeline to wait for render to get proper width
    gsap.timeline({
      scrollTrigger: {
        trigger: logosContainer,
        start: "top bottom", // Start when the container is visible
        once: true,
        onEnter: () => {
          gsap.to(logosContainer, {
            x: -logosContainer.scrollWidth / 2,
            duration: 60, // Slower is smoother
            ease: "none",
            repeat: -1,
          });
        },
      },
    });
  }

  // --- 2. Generic Reveal-on-Scroll for Sections ---
  // This applies a slide-up and fade-in effect to the children of specific sections
  const sectionsToAnimate = [
    "#metrics",
    "#clients",
    "#events",
    "#testimonials",
    "#team",
    "#blog",
    "footer",
  ];

  sectionsToAnimate.forEach((selector) => {
    const section = document.querySelector(selector);
    if (!section) return;

    // Select direct children or specific grid items depending on structure
    const targets = section.querySelectorAll(
      ".grid > div, .space-y-4 > div, h2, p, .max-w-7xl > div",
    );

    gsap.from(targets, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%", // Start animation when top of section hits 85% of viewport
        toggleActions: "play none none reverse", // Play on enter, reverse on leave back up
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1, // Stagger animations for a cascading effect
      ease: "power3.out",
    });
  });
};

// Initialize
document.addEventListener("DOMContentLoaded", initAnimations);
