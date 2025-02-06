document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");

    // Toggles the menu open and close on click
    menuBtn.addEventListener("click", () => {
        console.log("weorking")
        menu.classList.toggle("active");

        menuBtn.classList.toggle("open"); // Optional for styling animation of the button
    });

    // Close menu on clicking menu links
    document.querySelectorAll(".menu li a").forEach((item) => {
        item.addEventListener("click", () => {
            menu.classList.remove("active");
            menuBtn.classList.remove("open");
        });
    });
});
