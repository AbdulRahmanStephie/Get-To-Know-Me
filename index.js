const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const menuOverlay = document.getElementById("menuOverlay");
const menuOptions = document.querySelectorAll(".menu-option");
const informationSections = document.querySelectorAll(".information");

document.getElementById("Welcome").textContent = "Get to Know AbdulRahman Stephen";

function toggleMenu(isOpen) {
    sidebar.classList.toggle("is-open", isOpen);
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    sidebar.setAttribute("aria-hidden", !isOpen);
    menuOverlay.hidden = !isOpen;
}

menuToggle.addEventListener("click", () => {
    toggleMenu(!sidebar.classList.contains("is-open"));
});

menuOverlay.addEventListener("click", () => toggleMenu(false));

menuOptions.forEach((option) => {
    option.addEventListener("click", () => {
        informationSections.forEach((section) => {
            section.classList.toggle("is-visible", section.id === option.dataset.section);
        });
        toggleMenu(false);
    });
});
