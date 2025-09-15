// Navbar toggle for mobile
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Skills animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  function animateSkills() {
    progressBars.forEach(bar => {
      const value = bar.getAttribute("data-skill");
      bar.style.width = value + "%";
    });
  }

  function checkScroll() {
    const skillsSection = document.getElementById("skills");
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      animateSkills();
      window.removeEventListener("scroll", checkScroll);
    }
  }

  window.addEventListener("scroll", checkScroll);
});