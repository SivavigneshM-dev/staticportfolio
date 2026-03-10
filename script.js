document.addEventListener("DOMContentLoaded", () => {
  // 1. GSAP ScrollReveal Animations
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".reveal").forEach((elem) => {
    gsap.to(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Register ScrollToPlugin for smooth scrolling
  gsap.registerPlugin(ScrollToPlugin);

  // Example: Smooth scroll to the #materials section when a specific button is clicked
  const scrollToMaterialsBtn = document.getElementById(
    "scroll-to-materials-btn",
  );
  if (scrollToMaterialsBtn) {
    scrollToMaterialsBtn.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: "#materials",
        ease: "power2.out",
      });
    });
  }

  // 2. Market Popularity Pie Chart
  const marketCtx = document.getElementById("marketChart").getContext("2d");
  new Chart(marketCtx, {
    type: "doughnut",
    data: {
      labels: ["Solid Wood", "Resin/Epoxy", "Glass Hybrid", "Stone Base"],
      datasets: [
        {
          data: [45, 35, 12, 8],
          backgroundColor: ["#000", "#d97706", "#9ca3af", "#4b5563"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      plugins: {
        legend: { position: "bottom" },
      },
    },
  });

  // 3. Production Bar Chart
  const prodCtx = document.getElementById("productionChart").getContext("2d");
  new Chart(prodCtx, {
    type: "bar",
    data: {
      labels: ["Sourcing", "Cutting", "Pouring", "Curing", "Finishing"],
      datasets: [
        {
          label: "Days required",
          data: [2, 1, 3, 7, 2],
          backgroundColor: "#fbbf24",
          borderRadius: 5,
        },
      ],
    },
    options: {
      scales: {
        y: { beginAtZero: true, grid: { color: "#333" } },
        x: { grid: { display: false } },
      },
      plugins: {
        legend: { display: false },
      },
    },
  });
});
