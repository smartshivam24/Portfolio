const navbarPath = window.location.pathname.includes("/Certificate/")
    ? "../Nav/navbar.html"
    : "Nav/navbar.html";

fetch(navbarPath)
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar").innerHTML = data;

        const menuBtn = document.getElementById("menu-btn");
        const navLinks = document.getElementById("nav-links");
        const icon = menuBtn.querySelector("i");

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                icon.classList.replace("fa-bars", "fa-xmark");
            } else {
                icon.classList.replace("fa-xmark", "fa-bars");
            }

        });

    })
    .catch(error => console.error("Navbar load error:", error));