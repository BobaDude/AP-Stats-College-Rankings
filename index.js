colleges.forEach((c, index) => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <h3>#${index + 1} ${c.name}</h3>
    <img src="${c.img}" alt="${c.name}" style="width:100%; border-radius:10px;">
  `;

  container.appendChild(div);
});


// =======================
// NAV TAB FUNCTIONALITY
// =======================

// FIXED: matches your HTML class="nav-tab"
const tabs = document.querySelectorAll(".nav-tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    document.querySelectorAll(".content").forEach(box => {
      box.classList.remove("active");
    });

    tabs.forEach(btn => {
      btn.classList.remove("active");
    });

    tab.classList.add("active");

    const target = tab.dataset.tab;

    if (target) {
      document.getElementById(target)?.classList.add("active");
    }
  });
});
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
  
    document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });