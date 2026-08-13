/* ============================================
   Mean Grill — Site JS
   ============================================ */

// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    })
  );
}

// Navbar shadow on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (navbar) navbar.style.boxShadow = window.scrollY > 10 ? "0 8px 30px rgba(0,0,0,.45)" : "none";
});

// WhatsApp contact form — composes a message and opens WhatsApp
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("c-name").value.trim();
    const phone = document.getElementById("c-phone").value.trim();
    const msg = document.getElementById("c-msg").value.trim();
    const full = `Hi Mean Grill! My name is ${name}.\nPhone: ${phone}\n\n${msg}`;
    window.open(`https://wa.me/254758922294?text=${encodeURIComponent(full)}`, "_blank");
    if (formNote) {
      formNote.textContent = "✅ Opening WhatsApp — just hit send!";
      formNote.style.color = "#2ee571";
    }
    contactForm.reset();
  });
}
