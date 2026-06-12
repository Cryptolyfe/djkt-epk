console.log("Katie Kirby EPK loaded");

document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.querySelector("[data-year]");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});