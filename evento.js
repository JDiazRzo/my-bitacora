document.addEventListener("DOMContentLoaded", () => {
    const current = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("activo");
      }
    });
}); // carajo no mne acuerdo de nada de eventos, AYUDA