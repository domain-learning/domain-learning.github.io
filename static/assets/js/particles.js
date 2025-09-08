document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".particles-container");
    if (!container) return;
  
    for (let i = 0; i < 50; i++) {
      const p = document.createElement("div");
      p.classList.add("particle");
      const size = Math.random() * 4 + 2; // 2–6px
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.bottom = `-${size}px`;
      p.style.animationDuration = `${10 + Math.random() * 20}s`;
      p.style.animationDelay = `${Math.random() * 20}s`;
      container.appendChild(p);
    }
  });
  