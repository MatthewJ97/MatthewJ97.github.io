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
        title: "Story Editor Application",
        time: "2026",
        company: "Personal",
        companyLink: "",
        categories: ["pipeline", "wip"],
        images: [
        ],
        video: "",
        description: "A web-based application designed for drafting, editing, and privately publishing long-form written content. The platform enables structured feedback workflows, allowing readers to highlight passages and leave contextual comments that authors can review during revision cycles. Built to support iterative editing and streamlined collaboration.",
        responsibilities: "",
        skills: "NodeJS, HTML",
        link: "https://imaginefilm.org/"
    }, 
    {
        title: "Threadbreaker",
        time: "2026",
        company: "Personal",
        companyLink: "",
        categories: ["game", "wip"],
        images: [
        ],
        video: "",
        description: "A turn-based strategy game developed in Unreal Engine 5. The project focuses on systemic gameplay design, tactical decision-making mechanics, and scalable architecture to support future feature expansion and content iteration.",
        responsibilities: "",
        skills: "Unreal Engine 5, C++",
        link: ""
    },
    {
        title: "Imagine",
        time: "2025",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["film"],
        images: [
        ],
        video: "https://www.youtube.com/embed/Etv4_oBiYxM?si=OV-ocGXGEcuECAmg",
        description: "In collaboration with AIME. An animated film project developed at FENIX Studios in collaboration with AIME. I led the development of the technical pipeline tools and created real-time production tools within Unreal Engine to enhance artist workflows, improve iteration speed, and increase overall production efficiency.",
        responsibilities: "",
        skills: "Unreal Engine 5, C++, Animation, Sequencer",
        link: "https://imaginefilm.org/"
    },
    {
        title: "Animo",
        time: "2025",
        company: "FENIX Studios",
        companyLink: "https://animo.gg/#Games",
        categories: ["vp"],
        images: [

        ],
        video: "https://x.com/Stake/status/1979306430214676856",
        description: "Delivered critical development continuity during a key production phase, ensuring system stability and uninterrupted progress while core team members were on leave. Focus areas included performance optimisation, workflow improvements, and long-term maintainability across gameplay systems and character pipelines.",
        responsibilities: "",
        skills: "Unreal Engine 5, C++, Blueprint, Chaos Physics, Composure, Producing, Team Management, Github",
        link: "https://animo.gg/#Games"
    },
    {
        title: "Zero Latency - Space Marine Trailer",
        time: "2024",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["vp"],
        images: [
        ],
        video: "https://www.youtube.com/embed/EuBLQKNGT1I",
        description: "A real-time virtual production trailer created for Zero Latency. The project integrated Unreal Engine environments with live-action performers captured on an LED volume stage. Real-time set extensions and triggered in-world events enabled the director to control environmental changes live during filming, streamlining production and creative decision-making.",
        responsibilities: "",
        skills: "Unreal Engine 5, VP Pipelines, nDisplay, Real-time VFX, Perforce, Onset Supervisor",
        link: "https://www.youtube.com/watch?v=EuBLQKNGT1I"
    },
    {
        title: "Zed Champions",
        time: "2024",
        company: "FENIX Studios",
        companyLink: "https://zedchampions.com/",
        categories: ["game"],
        images: [
        ],
        video: "https://www.youtube.com/embed/_t9TCwcTQHY",
        description: "Developed in collaboration with the VHS team, this project involved integrating the Zed platform into Unreal Engine 5. Responsibilities included implementing backend connectivity via REST APIs, WebSockets, and RTMP pipelines to support real-time data exchange and gameplay functionality.",
        responsibilities: "",
        skills: "Unreal Engine 5, C++, Blueprint, REST apis, RTMP, Web Sockets",
        link: "https://zedchampions.com/"
    },
    {
        title: "OfficeFight",
        time: "2024",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["game"],
        images: [
        ],
        video: "https://www.youtube.com/embed/XtftJ78oUgM",
        description: "A physics-driven action game built in Unreal Engine 5. Players control a vengeful spirit capable of manipulating environmental objects to create large-scale destruction. The project emphasised Chaos Physics integration, systemic object interaction, and scalable gameplay architecture while managing technical direction and team coordination.",
        responsibilities: "",
        skills: "Unreal Engine 5, C++, Blueprint, Chaos Physics, Team Management",
        link: "https://store.steampowered.com/app/2747060/Office_Fight/"
    },
    {
        title: "Brawlers",
        time: "2023",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["game"],
        images: [
            
        ],
        video: "https://vimeo.com/945602189?fl=pl&fe=sh",
        description: "A live auto-battler built in Unreal Engine 5 that transforms real-time meme coin market data into AI-driven combat encounters. Two fighters compete autonomously while users place wagers on the outcome. The system streams from an AWS-hosted Unreal instance and leverages WebSockets and HTTP APIs to drive fighter behaviour, progression systems, and AI logic based on live financial inputs.",
        responsibilities: "",
        skills: "Unreal Engine 5, C++, Blueprint, Websockets, REST Apis, AWS, RTMP, Perforce",
        link: "https://vimeo.com/945602189?fl=pl&fe=sh"
    },

    {
        title: "La Brea - Season 2",
        time: "2023",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["vp"],
        images: [
        ],
        video: "https://www.youtube.com/embed/u6PrJtzUKdA",
        description: "Contributed to virtual production workflows for Season 2 of La Brea. Developed and maintained real-time environments for LED volume stages and provided on-set technical support to ensure stable playback, synchronisation, and production continuity during filming.",
        responsibilities: "",
        skills: "Unreal Engine 5, VP Pipelines, nDisplay, Real-time VFX, Perforce",
        link: "https://www.youtube.com/watch?v=u6PrJtzUKdA"
    },

    // --------------------------------------------------------
    // SPECTRE STUDIOS
    // --------------------------------------------------------
    {
        title: "Human Park",
        time: "2022",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["game"],
        images: [
            
        ],
        video: "https://vimeo.com/745690780",
        description: "Over a 12-month development cycle, we built a custom NFT configurator enabling users to design personalised digital assets (“NOODs”). I contributed to the development of a batch rendering pipeline that generated large-scale asset variations with embedded rarity systems. Additional pipelines were established for marketing and trailer production, alongside a social platform that allowed users to interact and play using their owned NFT characters.",
        responsibilities: "",
        skills: "Unreal Engine 5, C++, Blueprint, REST Apis, Networking, Team Management, Render Pipelines",
        link: "https://vimeo.com/745690780"
    },

     {
        title: "Emergisim - ADF",
        time: "2022",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        categories: ["game"],
        images: [
        ],
        video: "https://www.youtube.com/embed/y2MDTHR9Scw",
        description: "Expanded the existing Emergisim platform to develop a military training scenario aligned with Tactical Combat Casualty Care (TCCC) procedures for the Australian Defence Force. The project required adapting core systems to accurately reflect structured military medical workflows within an interactive simulation environment.",
        responsibilities: "",
        skills: "Unreal Engine 5, C++, Blueprint",
        link: "https://www.youtube.com/watch?v=y2MDTHR9Scw"
    },   

    {
        title: "ZedRun",
        time: "2021 - 2022",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["game"],
        images: [
        ],
        video: "https://www.youtube.com/embed/DICO7y6djug",
        description: "Provided technical development for ZedRun, a digital horse racing and breeding platform. Contributed to real-time race visualisation systems, character and animation pipelines, and rendering workflows to support large-scale online events and interactive race broadcasts.",
        responsibilities: "",
        skills: "Unreal Engine 4, C++, Blueprint, Animation, Render Pipelines",
        link: null
    },

    {
        title: "Ford Auto Nights",
        time: "2021",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["vp", "pipeline"],
        images: [
        ],
        video: "https://www.youtube.com/embed/zq92oNGHr8o",
        description: "A virtual production project for Ford’s Auto Nights campaign. Designed and developed real-time LED volume environments in Unreal Engine to showcase Ford vehicles within cinematic, dynamic settings. The work focused on environment optimisation, lighting fidelity, and on-set playback reliability.",
        responsibilities: "",
        skills: "Unreal Engine 4, Virtual Production, LED Volume, nDisplay, Onset tools for VP, Perforce",
        link: null
    },

    {
        title: "Masked Wolf - Jimmy Fallon",
        time: "2021",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["vp"],
        images: [
        ],
        video: "https://hyperepublic.com/portfolio/masked-wolf-astronaut-in-the-ocean/",
        description: "Delivered real-time virtual production environments for Masked Wolf’s performance on The Tonight Show Starring Jimmy Fallon. Built immersive LED volume backdrops and real-time visual effects to support live broadcast performance requirements with minimal latency and high visual fidelity.",
        responsibilities: "",
        skills: "Unreal Engine 4, Virtual Production, LED Volume, Real-time VFX, Onset tools for VP",
        link: null
    },

    {
        title: "Project Tyrion",
        time: "2021",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["vr"],
        images: [
        ],
        video: "https://x.com/BritishArmy/status/1450824187271131146",
        description: "Developed a VR training experience focused on immersive interaction and narrative delivery. Responsible for core VR interaction systems, environment development, and performance optimisation across target VR platforms, ensuring stable frame rates and intuitive user engagement.",
        responsibilities: "",
        skills: "Unreal Engine 4, C++, VR, Blueprint, JALI, Sequencer, Branching Narrative",
        link: null
    },

    {
        title: "Emergisim",
        time: "2019 - 2020",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["vr"],
        images: [

        ],
        video: "https://www.youtube.com/embed/z9bzFkv7_Fo",
        description: "A virtual reality paramedic training simulation designed to replicate real-world emergency response scenarios. Contributed to the development of interactive medical procedures, scenario logic, and training modules to create an immersive and educational first-responder experience.",
        responsibilities: "",
        skills: "Unreal Engine 4, C++, VR, Blueprint, Motion Capture",
        link: null
    },
    {
        title: "Tales of Aluna",
        time: "2019",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["game"],
        images: [
        ],
        video: "https://www.youtube.com/embed/zaFBQnxlsCs",
        description: "Developed technical workflows to convert 3D environments into 2D-compatible layouts for production use in Toon Boom. Built custom camera and rendering pipelines within Unreal Engine to enable efficient asset reuse and streamline hybrid 2D/3D content creation.",
        responsibilities: "",
        skills: "Unreal Engine 4, C++, Blueprint, Animation, 2D Camera Pipeline",
        link: "https://www.youtube.com/watch?v=zaFBQnxlsCs"
    },
    {
        title: "Lah-Lah",
        time: "2019",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["vp"],
        images: [
        ],
        video: "https://www.youtube.com/embed/RC2bKp-TrL4",
        description: "Contributed to virtual production workflows for the Lah-Lah children’s entertainment brand. Developed real-time environments and integrated animation pipelines to support live-action production shoots using Unreal Engine.",
        responsibilities: "",
        skills: "Unreal Engine 4, Virtual Production, Animation, Sequencer, Greenscreen",
        link: null
    },

    {
        title: "Roborovski",
        time: "2019",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["film"],
        images: [
        ],
        video: "https://www.youtube.com/embed/LHsA9oxp2x4",
        description: "Animated film project utilising Unreal Engine as the primary real-time rendering platform. Contributed to the rendering pipeline and character animation systems to support efficient iteration and high-quality final output.",
        responsibilities: "",
        skills: "Unreal Engine 4, Animation, Rendering Pipeline, Sequencer",
        link: null
    },
    {
        title: "Wyrmwood VR",
        time: "2019",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["game"],
        images: [
        ],
        video: "https://vimeo.com/349809923?fl=pl&fe=vl",
        description: "A VR experience developed in Unreal Engine 4. Contributed to gameplay systems, interactive sequences, and performance optimisation to deliver an immersive real-time virtual reality experience.",
        responsibilities: "",
        skills: "Unreal Engine 4, C++, Blueprint, Sequencer, VR",
        link: "https://vimeo.com/349809923?fl=pl&fe=vl"
    },
    {
        title: "Atmosfear - Character Pipeline",
        time: "2018",
        company: "Spectre Studios",
        companyLink: "",
        categories: ["pipeline"],
        images: [
        ],
        video: "https://www.youtube.com/embed/H7CNn5FSGi0",
        description: "Designed and implemented the end-to-end character pipeline for the Atmosfear CGI board game project. Developed custom tooling for rigging, animation export, and Unreal Engine integration, streamlining the render workflow and improving cross-department efficiency. The pipeline incorporated Maya tooling, facial capture systems, and Alembic workflows to support high-quality character performance.",
        responsibilities: "",
        skills: "Unreal Engine 4, Python, Maya tooling, Pipeline Development, Character Rigging, Face AR Kit, Faceware, Alembics",
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
    pipeline: { name: "Pipeline",           color: "category-pipeline" },
    wip:      { name: "WIP",                color: "category-wip" }
};
//work-in-progress: {name: "WIP", color: "category-"} -->
// ============================================================
// RENDER - No need to edit below this line
// ============================================================

function renderProjects() {
    const container = document.getElementById('projects-container');
    const htmlArray = [];

    projects.forEach(project => {

        // Build category badges
        const categoryBadges = (project.categories || []).map(cat => {
            const info = categoryInfo[cat];
            return `<span class="project-category-badge ${info.color}">${info.name}</span>`;
        }).join('');

        // Build media - video and images are shown independently
        let videoHTML = '';
        if (project.video) {
            // Extract video ID from embed URL: "https://www.youtube.com/embed/VIDEO_ID"
            const ytId = project.video.split('/embed/')[1]?.split('?')[0] || '';
            const ytWatchUrl = ytId ? `https://www.youtube.com/watch?v=${ytId}` : project.video;
            const ytThumbnail = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : '';
            videoHTML = `
                <a href="${ytWatchUrl}" target="_blank" class="yt-thumbnail-link">
                    <div class="yt-thumbnail">
                        <img src="${ytThumbnail}" alt="Watch ${project.title} on YouTube" onerror="this.style.display='none'">
                        <div class="yt-play-btn"><i class="fa fa-youtube-play"></i></div>
                        <div class="yt-label"><i class="fa fa-youtube-play"></i> Watch Video</div>
                    </div>
                </a>`;
        }

        let imageHTML = '';
        if (project.images && project.images.length > 0) {
            if (project.images.length === 1) {
                imageHTML = `
                    <div class="project-image-single">
                        <img loading="lazy" class="img-responsive project-image" src="${project.images[0]}" alt="${project.title}" onerror="this.parentElement.style.display='none'">
                    </div>`;
            } else {
                imageHTML = `
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

        const mediaHTML = videoHTML + imageHTML;

        const categoriesAttr = (project.categories || []).join(' ');

        htmlArray.push(`
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
                    ${mediaHTML}
                    <div class="item">
                        <span class="details"></span> ${project.description}
                    </div>
                    <div class="item">
                        <span class="details">Skills Used:</span> ${project.skills}
                    </div>
                </div><!--//details-->
                <hr>
            </div><!--//project-item-->`);
    });

    // Set innerHTML once at the end (much faster than += in loop)
    container.innerHTML = htmlArray.join('');
    

    // Immediately apply default filter AFTER render
    if (typeof filterProjects === 'function') {
    filterProjects('all');
}
}

// Show fallback if iframe fails to load
function showVideoFallback(ytId, url) {
    const fallback = document.getElementById(`fallback-${ytId}`);
    const videoEl = document.getElementById(`video-${ytId}`);
    if (fallback) fallback.style.display = 'flex';
    if (videoEl) videoEl.querySelector('iframe').style.display = 'none';
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