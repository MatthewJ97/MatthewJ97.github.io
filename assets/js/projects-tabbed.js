// ============================================================
// PROJECTS DATA
// ============================================================
// To add a project, copy a block and fill in the fields.
//
// CATEGORIES (use one or more):
//   "game"     - Playable games
//   "vr"       - Virtual reality experiences
//   "vp"       - Virtual production
//   "film"     - Film / animated projects
//   "pipeline" - Pipeline / technical tools
//
// IMAGES: Add screenshots to assets/images/projects/project-name/
// VIDEO:  Use YouTube embed URL: "https://www.youtube.com/embed/VIDEO_ID"
//         Leave as null if no video
// LINK:   Public URL to project, or null
// ============================================================

const projects = [

    // --------------------------------------------------------
    // FENIX STUDIOS
    // --------------------------------------------------------

    {
        title: "OfficeFight",
        time: "2024",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["game"],
        images: [
            "assets/images/projects/officefight/officefight-1.jpg",
            "assets/images/projects/officefight/officefight-2.jpg",
            "assets/images/projects/officefight/officefight-3.jpg"

        ],
        video: "https://www.youtube.com/embed/XtftJ78oUgM",
        description: "You’ve been unfairly laid off by Mega Corp and the news kills you. Literally. As a vengeful spirit, use your ghostly power to fling cups, chairs and tables at your co-workers all in the name of revenge. Start fights and watch the destruction unfold in this casual physics-based destruction game. https://www.youtube.com/watch?v=XtftJ78oUgM",
        skills: "Unreal Engine 5, C++, Blueprint, Chaos Physics",
        link: "https://store.steampowered.com/app/2747060/Office_Fight/"
    },

    {
        title: "Brawlers",
        time: "2023 - Present",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["game"],
        images: [
            "assets/images/projects/brawlers/brawlers-1.jpg",
            "assets/images/projects/brawlers/brawlers-2.jpg"
        ],
        video: null,
        description: "Brawlers is a live auto-battler built in Unreal Engine that turns meme coin market data into real-time AI combat. Two fighters battle automatically while players place bets on the winner. The game streams from an AWS-hosted Unreal instance and uses WebSockets and HTTP APIs to drive fighters, levels, and AI decisions from live financial data.",
        skills: "Unreal Engine 5, C++, Blueprint, Websockets, REST Apis, AWS, RTMP, Perforce",
        link: null
    },

    {
        title: "Zero Latency - Space Marine Trailer",
        time: "2024",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["vp"],
        images: [
            "assets/images/projects/zero-latency/zero-latency-1.jpg",
            "assets/images/projects/zero-latency/zero-latency-2.jpg"
        ],
        video: "https://www.youtube.com/embed?v=EuBLQKNGT1I",
        description: "This project was a real-time virtual production trailer created for Zero Latency, combining Unreal Engine environments with live-action actors captured on an LED stage. The production used real-time sets and triggered in-world events during filming to allow the director to control scenes live on set.",
        skills: "Unreal Engine 5, VP Pipelines, nDisplay, Real-time VFX, Perforce",
        link: "https://hyperepublic.com/portfolio/masked-wolf-astronaut-in-the-ocean/"
    },

    {
        title: "Imagine",
        time: "2025",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["film"],
        images: [
            "assets/images/projects/imagine/imagine-1.jpg",
            "assets/images/projects/imagine/imagine-2.jpg"
        ],
        video: "https://www.youtube.com/embed/Etv4_oBiYxM?si=OV-ocGXGEcuECAmg",
        description: "Imagine is an animated film project developed at FENIX Studios in collaboration with AIME. I was responsible for building the technical pipeline, and creating real-time tools inside Unreal Engine to improve artist workflows and production efficiency.",
        skills: "Unreal Engine 5, C++, Animation, Sequencer",
        link: "https://imaginefilm.org/"
    },

    {
        title: "La Brea - Season 2",
        time: "2024",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["vp"],
        images: [
            "assets/images/projects/la-brea/la-brea-1.jpg",
            "assets/images/projects/la-brea/la-brea-2.jpg"
        ],
        video: "https://www.youtube.com/embed?v=u6PrJtzUKdA",
        description: "Worked on virtual production for the TV series La Brea, creating and maintaining real-time environments for LED volume stages. Provided live technical support to ensure smooth production playback.",
        skills: "Unreal Engine 5, VP Pipelines, nDisplay, Real-time VFX, Perforce",
        link: "https://www.youtube.com/watch?v=u6PrJtzUKdA"
    },

    // --------------------------------------------------------
    // SPECTRE STUDIOS
    // --------------------------------------------------------

    {
        title: "Emergisim",
        time: "2018 - 2023",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        categories: ["vr"],
        images: [
            "assets/images/projects/emergisim/emergisim-1.jpg",
            "assets/images/projects/emergisim/emergisim-2.jpg"
        ],
        video: null,
        description: "Virtual reality paramedic training simulation. Built realistic emergency scenarios, interactive medical procedures, and comprehensive training modules to deliver an immersive first-responder training experience.",
        skills: "Unreal Engine 4, C++, VR, Blueprint, Motion Capture",
        link: null
    },

    {
        title: "ZedRun",
        time: "2021 - 2022",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        categories: ["game"],
        images: [
            "assets/images/projects/zedrun/zedrun-1.jpg",
            "assets/images/projects/zedrun/zedrun-2.jpg"
        ],
        video: null,
        description: "Technical development for ZedRun, a digital horse racing and breeding platform. Worked on real-time race visualisation systems and character and animation pipelines.",
        skills: "Unreal Engine 4, C++, Blueprint, Animation, Real-time Rendering",
        link: null
    },

    {
        title: "Ford Auto Nights",
        time: "2021",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        categories: ["vp"],
        images: [
            "assets/images/projects/ford-auto-nights/ford-1.jpg",
            "assets/images/projects/ford-auto-nights/ford-2.jpg"
        ],
        video: "https://www.youtube.com/embed?v=zq92oNGHr8o",
        description: "Virtual production project for Ford's Auto Nights campaign. Designed and built real-time LED volume environments showcasing Ford vehicles in dynamic, cinematic settings using Unreal Engine.",
        skills: "Unreal Engine 4, Virtual Production, LED Volume, nDisplay, Lighting",
        link: null
    },

    {
        title: "Masked Wolf - Jimmy Fallon",
        time: "2021",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        categories: ["vp"],
        images: [
            "assets/images/projects/masked-wolf/masked-wolf-1.jpg",
            "assets/images/projects/masked-wolf/masked-wolf-2.jpg"
        ],
        video: null,
        description: "Virtual production environment for Masked Wolf's performance segment on The Tonight Show with Jimmy Fallon. Built real-time immersive backdrops and visual effects delivered via LED volume.",
        skills: "Unreal Engine 4, Virtual Production, LED Volume, Real-time VFX",
        link: null
    },

    {
        title: "Project Tyrion",
        time: "2020 - 2021",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        categories: ["vr"],
        images: [
            "assets/images/projects/project-tyrion/tyrion-1.jpg",
            "assets/images/projects/project-tyrion/tyrion-2.jpg"
        ],
        video: null,
        description: "Virtual reality experience developed at Spectre Studios. Responsible for core VR interaction systems, environment development, and performance optimization for the target VR platforms.",
        skills: "Unreal Engine 4, C++, VR, Blueprint, Interaction Systems",
        link: null
    },

    {
        title: "Lah-Lah",
        time: "2020",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        categories: ["vp"],
        images: [
            "assets/images/projects/lah-lah/lah-lah-1.jpg",
            "assets/images/projects/lah-lah/lah-lah-2.jpg"
        ],
        video: null,
        description: "Virtual production and film work for the Lah-Lah children's entertainment brand. Developed real-time environments and integrated animation pipelines for the production shoot.",
        skills: "Unreal Engine 4, Virtual Production, Animation, Sequencer, LED Volume",
        link: null
    },

    {
        title: "Roborovski",
        time: "2020",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        categories: ["film"],
        images: [
            "assets/images/projects/roborovski/roborovski-1.jpg",
            "assets/images/projects/roborovski/roborovski-2.jpg"
        ],
        video: null,
        description: "Animated film project for Roborovski. Contributed to the real-time rendering pipeline and character animation systems using Unreal Engine as the primary production tool.",
        skills: "Unreal Engine 4, Animation, Rendering Pipeline, Sequencer",
        link: null
    },

    {
        title: "Atmosfear - Character Pipeline",
        time: "2020",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        categories: ["pipeline"],
        images: [
            "assets/images/projects/atmosfear/atmosfear-1.jpg",
            "assets/images/projects/atmosfear/atmosfear-2.jpg"
        ],
        video: "https://www.youtube.com/embed?v=H7CNn5FSGi0",
        description: "Designed and built the character pipeline for the Atmosfear board game CGI project. Created tooling and workflows covering rigging, animation export, and import into Unreal Engine to streamline the CGI render process.",
        skills: "Unreal Engine 4, Python, Maya API, Pipeline Development, Character Rigging",
        link: "https://www.youtube.com/watch?v=H7CNn5FSGi0"
    }

];

// ============================================================
// CATEGORY DEFINITIONS
// To add a new category: add it here AND add a button in
// index.html AND add a colour in tabs.css
// ============================================================

const categoryInfo = {
    game:     { name: "Game",               color: "category-game" },
    vr:       { name: "VR",                 color: "category-vr" },
    vp:       { name: "Virtual Production", color: "category-vp" },
    film:     { name: "Film",               color: "category-film" },
    pipeline: { name: "Pipeline",           color: "category-pipeline" }
};

// ============================================================
// RENDER - No need to edit below this line
// ============================================================

function renderProjects() {
    const container = document.getElementById('projects-container');

    projects.forEach(project => {

        // Build category badges
        const categoryBadges = (project.categories || []).map(cat => {
            const info = categoryInfo[cat];
            return `<span class="project-category-badge ${info.color}">${info.name}</span>`;
        }).join('');

        // Build media (video takes priority over images)
        let videoHTML = '';
        if (project.video) {
            videoHTML = `
                <div class="project-video">
                    <iframe loading="lazy" src="${project.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>`;
        }
        let mediaHTML = '';

         if (project.images && project.images.length > 0) {
            if (project.images.length === 1) {
                mediaHTML = `
                    <div class="project-image-single">
                        <img loading="lazy" class="img-responsive project-image" src="${project.images[0]}" alt="${project.title}" onerror="this.parentElement.style.display='none'">
                    </div>`;
            } else {
                mediaHTML = `
                    <div class="project-gallery">
                        ${project.images.map((img, idx) => `
                            <img loading="lazy" class="gallery-image ${idx === 0 ? 'active' : ''}" src="${img}" alt="${project.title} ${idx + 1}" onerror="this.style.display='none'">
                        `).join('')}
                        <div class="gallery-controls">
                            <button class="gallery-prev" onclick="changeImage(this, -1)"><i class="fa fa-chevron-left"></i></button>
                            <button class="gallery-next" onclick="changeImage(this, 1)"><i class="fa fa-chevron-right"></i></button>
                        </div>
                        <div class="gallery-dots">
                            ${project.images.map((_, idx) => `
                                <span class="dot ${idx === 0 ? 'active' : ''}" onclick="setImage(this, ${idx})"></span>
                            `).join('')}
                        </div>
                    </div>`;
            }
        }

        const categoriesAttr = (project.categories || []).join(' ');

        container.innerHTML += `
            <div class="item project-item" data-categories="${categoriesAttr}">
                <div class="meta">
                    <div class="upper-row">
                        <h3 class="job-title">
                            ${project.link
                                ? `<a href="${project.link}" target="_blank">${project.title}</a>`
                                : project.title}
                        </h3>
                        <div class="time">${project.time}</div>
                    </div><!--//upper-row-->
                    <div class="company">
                        ${project.companyLink
                            ? `<a href="${project.companyLink}" target="_blank">${project.company}</a>`
                            : project.company}
                    </div>
                    ${categoryBadges ? `<div class="project-categories" style="margin-top:6px;">${categoryBadges}</div>` : ''}
                </div><!--//meta-->
                <div class="details">
                    ${videoHTML}
                    ${mediaHTML}
                    <div class="item">
                        <span class="details"></span> ${project.description}
                    </div>
                    <div class="item">
                        <span class="details">Skills Used:</span> ${project.skills}
                    </div>
                </div><!--//details-->
            </div><!--//project-item-->`;
    });
}

// Gallery navigation
function changeImage(button, direction) {
    const gallery = button.closest('.project-gallery');
    const images = gallery.querySelectorAll('.gallery-image');
    const dots = gallery.querySelectorAll('.dot');
    let current = Array.from(images).findIndex(img => img.classList.contains('active'));
    images[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (current + direction + images.length) % images.length;
    images[current].classList.add('active');
    dots[current].classList.add('active');
}

function setImage(dot, index) {
    const gallery = dot.closest('.project-gallery');
    const images = gallery.querySelectorAll('.gallery-image');
    const dots = gallery.querySelectorAll('.dot');
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    images[index].classList.add('active');
    dots[index].classList.add('active');
}

document.addEventListener('DOMContentLoaded', renderProjects);
