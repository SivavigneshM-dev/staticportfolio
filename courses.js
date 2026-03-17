/**
 * COURSES.JS
 * Logic for Nilal Arts Courses Page
 */

// 1. Intersection Observer for scroll reveal
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 },
);

revealElements.forEach((el) => observer.observe(el));

// 2. Read More Toggle
function toggleReadMore(id, btn) {
  const content = document.getElementById(id);
  content.classList.toggle("open");
  btn.innerText = content.classList.contains("open")
    ? "Show Less"
    : "Know More";
}

// 3. Modals Logic
function openVideoModal(videoId) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");

  // Using YouTube No-Cookie for better privacy and professional feel
  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`;

  modal.classList.remove("hidden");
  modal.style.display = "flex"; // Ensure flex display for centering
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");

  iframe.src = ""; // Stop video playback
  modal.classList.add("hidden");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scroll
}

function openCurriculumModal() {
  const modal = document.getElementById("curriculumModal");
  modal.classList.remove("hidden");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeCurriculumModal() {
  const modal = document.getElementById("curriculumModal");
  modal.classList.add("hidden");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// 4. Urgency Countdown
function startTimer() {
  let duration = 3600 * 5; // 5 hours
  const display = document.querySelector("#timer");

  setInterval(() => {
    let hours = parseInt(duration / 3600, 10);
    let minutes = parseInt((duration % 3600) / 60, 10);
    let seconds = parseInt(duration % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--duration < 0) duration = 3600 * 5;
  }, 1000);
}
startTimer();

// 5. Sticky Nav Active State
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-gold");
    if (link.getAttribute("href").includes(current) && current !== null) {
      link.classList.add("text-gold");
    }
  });
});

// 6. FAQ Accordion
function toggleFaq(btn) {
  const container = btn.parentElement;
  const answer = container.querySelector(".faq-answer");
  const icon = btn.querySelector("i");

  // Close other FAQs
  document.querySelectorAll(".faq-answer").forEach((el) => {
    if (el !== answer) {
      el.style.maxHeight = null;
      el.previousElementSibling
        .querySelector("i")
        .classList.remove("rotate-180");
    }
  });

  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
    icon.classList.remove("rotate-180");
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    icon.classList.add("rotate-180");
  }
}

// 7. Shorts Carousel Scroll
function scrollShorts(direction) {
  const track = document.getElementById("shortsTrack");
  const scrollAmount = 302; // Card width (270) + Gap (32)
  if (track) {
    const leftPos = track.scrollLeft;
    const targetPos =
      direction === "left" ? leftPos - scrollAmount : leftPos + scrollAmount;
    track.scrollTo({ left: targetPos, behavior: "smooth" });
  }
}

// 8. Scroll To Top Logic
const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("translate-y-24", "opacity-0");
    } else {
      scrollBtn.classList.add("translate-y-24", "opacity-0");
    }
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 9. Feature List Toggle for Masterclass
function toggleFeatures(id, btn) {
  const content = document.getElementById(id);
  content.classList.toggle("open");
  btn.innerText = content.classList.contains("open")
    ? "Show Less ▵"
    : "Show More ▿";
}

// 10. Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
