fetch("/Nav/navbar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar").innerHTML = data;

        const menuBtn = document.getElementById("menu-btn");
        const navLinks = document.getElementById("nav-links");

        if (menuBtn && navLinks) {

            const icon = menuBtn.querySelector("i");

            menuBtn.addEventListener("click", () => {

                navLinks.classList.toggle("active");

                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");

            });

        }

    });
