const path = window.location.pathname.includes("/Certificate/")
    ? "../Footer/footer.html"
    : "Footer/footer.html";

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });
