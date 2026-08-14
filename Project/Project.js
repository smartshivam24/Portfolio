/* ===== Project Data ===== */

const projects = [
    
    //     title: "Real Estate Webapp",

    //     image: "assets/real-estate.png",

    //     description:
    //         "Property listing platform with advanced filtering and search capabilities.",

    //     technologies: [
    //         "HTML5",
    //         "CSS3",
    //         "JavaScript",
    //         "Node.js",
    //         "Express"
    //     ],

    //     github: "https://github.com/",
    //     demo: "",
    //     live: true
    // },

    // {
    //     title: "Number System Converter",

    //     image: "assets/number-system.png",

    //     description:
    //         "Advanced number system converter with real-time calculations and copy-paste functionality.",

    //     technologies: [
    //         "HTML5",
    //         "JavaScript",
    //         "CSS3"
    //     ],

    //     github: "https://github.com/",
    //     demo: "https://shree-furniture.netlify.app/",
    //     live: true
    // },

    // {
    //     title: "Weather App",

    //     image: "assets/weather-app.png",

    //     description:
    //         "A modern, responsive webapp that provides real-time weather updates, hourly and daily weather information.",

    //     technologies: [
    //         "JavaScript",
    //         "React",
    //         "CSS3"
    //     ],

    //     github: "https://github.com/",
    //     demo: "https://example.com/",
    //     live: true
    // },

    // {
    //     title: "Employee Management System",

    //     image: "assets/employee-system.png",

    //     description:
    //         "Desktop based employee management system with database connectivity and employee records.",

    //     technologies: [
    //         "Java",
    //         "Swing",
    //         "JDBC",
    //         "MySQL"
    //     ],

    //     github: "https://github.com/",
    //     demo: "https://opvishwakarma.netlify.app/",
    //     live: true
    // },

    {
        title: "Personal Portfolio",

        image: "../Project/assets/Portfolio.png",

        description:
            "Modern personal portfolio website showcasing skills, projects, certificates and contact information.",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],

        github: "https://github.com/",
        demo: "",
        live: true
    },

    {
        title: "E-Commerce Website",

        image: "../Project/assets/E Commerce web.png",

        description:
            "Responsive online shopping website with product cards, cart system and WhatsApp ordering functionality.",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],

        github: "https://github.com/",
        demo: "https://shree-furniture.netlify.app/",
        live: true
    }
];


/* ===== Generate Cards ===== */

const container = document.getElementById("projectsContainer");

projects.forEach(project => {

    const card = document.createElement("article");

    card.className = "project-card";

    card.innerHTML = `

        <!-- Project Image -->

        <div class="project-image">

            <img
                src="${project.image}"
                alt="${project.title}"
                loading="lazy"
            >

            ${
                project.live
                    ? `
                        <div class="live-badge">
                            <span class="live-dot"></span>
                            LIVE
                        </div>
                    `
                    : ""
            }

        </div>


        <!-- Project Content -->

        <div class="project-content">

            <div class="project-title-row">

                <h2 class="project-title">
                    ${project.title}
                </h2>

            </div>


            <!-- Description -->

            <p class="project-description">
                ${project.description}
            </p>


            <!-- Technologies -->

            <div class="project-tags">

                ${project.technologies
                    .map(
                        tech => `<span class="tag">${tech}</span>`
                    )
                    .join("")
                }

            </div>


            <!-- Bottom Buttons -->

            <div class="project-buttons">

                <a
                    href="${project.github}"
                    target="_blank"
                    class="project-btn source-btn"
                >
                    ◉ Source Code
                </a>

                <a
                    href="${project.demo}"
                    target="_blank"
                    class="project-btn live-btn"
                >
                    ↗ Live Demo
                </a>

            </div>

        </div>

    `;

    container.appendChild(card);

});