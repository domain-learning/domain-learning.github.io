
document.addEventListener("DOMContentLoaded", () => {
  // collect nav links that point to hashes
  const navLinks = Array.from(
    document.querySelectorAll('#nav-menu a[href*="#"]')
  );

  // map hash -> link element
  const linkMap = new Map();
  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;
    const id = href.slice(hashIndex + 1).trim();
    if (!id) return;
    // store first matching link for this id
    if (!linkMap.has(id)) linkMap.set(id, link);
  });

  // build list of { id, el } only for elements that actually exist in DOM
  const observed = [];
  linkMap.forEach((_, id) => {
    const el = document.getElementById(id);
    if (el) observed.push({ id, el });
  });

  if (observed.length === 0) return; // nothing to observe

  const observer = new IntersectionObserver(
    (entries) => {
      // pick the intersecting entry with the largest intersectionRatio
      const visible = entries.filter((e) => e.isIntersecting && e.intersectionRatio > 0);
      if (visible.length === 0) return;

      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      let activeId = visible[0].target.id;

      // treat tutorial-content as part of home
      if (activeId === "tutorial-content") activeId = "home";

      // clear and set
      navLinks.forEach((l) => l.classList.remove("text-gradient"));
      const activeLink = linkMap.get(activeId);
      if (activeLink) activeLink.classList.add("text-gradient");
    },
    {
      threshold: [0.25, 0.75], // fine-grained ratios
      rootMargin: "0px"
      // rootMargin: "0px 0px -40% 0px" // optional: shift activation point upwards
    }
  );

  observed.forEach((o) => observer.observe(o.el));
});


// Set AAAI logo link in the navbar menu
document.addEventListener("DOMContentLoaded", () => {
  const logoLink = document.querySelector(".navbar a"); // adjust class as per your theme
  if (logoLink) {
    logoLink.setAttribute("href", "https://aaai.org/conference/aaai/aaai-26/");
    logoLink.setAttribute("target", "_blank");
    logoLink.setAttribute("rel", "noopener");
  }
});


// Scroll smoothly between sections
document.addEventListener("DOMContentLoaded", () => {
  // Select all anchor links to page sections
  document.querySelectorAll('.navbar a').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        // Smooth scroll with offset for fixed navbar
        const offset = 80; // adjust based on navbar height
        const topPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: topPos,
          behavior: "smooth"
        });
      }
    });
  });
});

// // Wait for the DOM to be fully loaded
// document.addEventListener("DOMContentLoaded", () => {
//   // Select all <section> elements
//   const sections = document.querySelectorAll("section");

//   // Add the fade-in class to each section
//   sections.forEach((section) => {
//     section.classList.add("fade-in");
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section:not(#home)"); // exclude home
  sections.forEach(section => section.classList.add("fade-in"));
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');   // fade in
      } else {
        entry.target.classList.remove('visible'); // fade out when scrolling away
      }
    });
  }, { threshold: 0.1 }); // trigger when 10% visible

  sections.forEach(section => observer.observe(section));
});



document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in");
  let lastScrollY = window.scrollY;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const currentScrollY = window.scrollY;

      if (entry.isIntersecting && currentScrollY > lastScrollY) {
        // scrolling down into view
        entry.target.classList.add("visible");
      } else if (!entry.isIntersecting) {
        // reset fade-in when section leaves viewport
        entry.target.classList.remove("visible");
      }

      lastScrollY = currentScrollY;
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('a[href^="/#"]'); // select all anchor links

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href"); // e.g., "/#schedule"
      const targetId = href.split("#")[1];    // "schedule"
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        const offset = 80; // fixed navbar height
        const topPos = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: topPos,
          behavior: "smooth"
        });
      }
    });
  });
});



// Meeting link join button

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById('joinVirtualBtn');
  const tooltip = document.getElementById('tooltip');

  btn.addEventListener('mouseenter', (e) => {
    tooltip.classList.remove('hidden');
    positionTooltip(e);
  });

  btn.addEventListener('mousemove', (e) => {
    positionTooltip(e);
  });

  btn.addEventListener('mouseleave', () => {
    tooltip.classList.add('hidden');
  });

  function positionTooltip(e) {
    const offset = 12; // distance from cursor
    tooltip.style.top = `${e.clientY + offset}px`;
    tooltip.style.left = `${e.clientX + offset}px`;
  }

});


document.addEventListener("DOMContentLoaded", () => {
  // Select the div with max-w-2xl inside the home section
  const homeContainer = document.querySelector("#home .max-w-2xl");
  if (homeContainer) {
    homeContainer.classList.remove("max-w-2xl");
    // homeContainer.classList.remove("py-32");
    homeContainer.classList.remove("sm:py-48");
    homeContainer.classList.remove("lg:py-56");

    // // Replace existing padding classes with smaller ones
    // homeContainer.classList.replace("py-32", "py-16");
    // homeContainer.classList.replace("sm:py-48", "sm:py-24");
    // homeContainer.classList.replace("lg:py-56", "lg:py-32");
    
    homeContainer.classList.add("max-w-4xl");
  }
});