window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
  });
  
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
  
      if (!href || href.startsWith("#") || href.startsWith("http")) return;
  
      e.preventDefault();
  
      document.body.classList.remove("loaded");
      document.body.classList.add("fade-out");
  
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });