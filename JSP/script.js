document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const navItem = document.createElement("a");
    navItem.classList.add("nav-link");
    navItem.href = `#${section.id}`;
    navItem.textContent = section.querySelector("h2").textContent;
    navbar.appendChild(navItem);
  });


  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      e.preventDefault();
      const targetSection = document.querySelector(e.target.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });


  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });

    sections.forEach((section) => {
      section.classList.remove("active");
      if (section.id === currentSection) {
        section.classList.add("active");
      }
    });
  });
});
