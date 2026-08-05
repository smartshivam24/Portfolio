const isCertificatePage = window.location.pathname.includes("/Certificate/");

const navbarPath = isCertificatePage
    ? "../Nav/navbar.html"
    : "Nav/navbar.html";

fetch(navbarPath)
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar").innerHTML = data;

        // ===== Links =====

        document.getElementById("home-link").href =
            isCertificatePage ? "../index.html" : "index.html";

        document.getElementById("about-link").href =
            isCertificatePage ? "../About/About.html" : "About/About.html";

        document.getElementById("certificate-link").href =
            isCertificatePage ? "Certificate.html" : "Certificate/Certificate.html";

        document.getElementById("project-link").href =
            isCertificatePage ? "../Projects/projects.html" : "Projects/projects.html";

        document.getElementById("resume-link").href =
            isCertificatePage ? "../resume.pdf" : "resume.pdf";

        // ===== Mobile Menu =====

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
    .catch(error => console.log(error));
