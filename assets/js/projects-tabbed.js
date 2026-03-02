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
        description: "An Application made for editing and privately publishing a book for users to read, The app contains the ability to make comments and highlight sections for the author to see when doing draft edits",
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
        description: "A Turn Based Strategy game made in Unreal engine 5",
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
        description: "Imagine is an animated film project developed at FENIX Studios in collaboration with AIME. I was responsible for building the technical pipeline, and creating real-time tools inside Unreal Engine to improve artist workflows and production efficiency.",
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
        description: "This work provided critical development continuity while the core team was on leave, ensuring production progress and system stability were maintained. The focus was on improving performance, usability, and long-term maintainability across both technical systems and character pipelines.",
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
        description: "This project was a real-time virtual production trailer created for Zero Latency, combining Unreal Engine environments with live-action actors captured on an LED stage. The production used real-time sets and triggered in-world events during filming to allow the director to control scenes live on set.",
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
        description: "Incollarboration with the VHS team we helped bring Zed into Unreal Engine 5",
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
        description: "You’ve been unfairly laid off by Mega Corp and the news kills you. Literally. As a vengeful spirit, use your ghostly power to fling cups, chairs and tables at your co-workers all in the name of revenge. Start fights and watch the destruction unfold in this casual physics-based destruction game.",
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
        description: "Brawlers is a live auto-battler built in Unreal Engine that turns meme coin market data into real-time AI combat. Two fighters battle automatically while players place bets on the winner. The game streams from an AWS-hosted Unreal instance and uses WebSockets and HTTP APIs to drive fighters, levels, and AI decisions from live financial data.",
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
        description: "Worked on virtual production for the TV series La Brea, creating and maintaining real-time environments for LED volume stages. Provided live technical support to ensure smooth production playback.",
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
        description: "Over the course of a year we built, A configurator so users could design thier own personalised NFTS. A batch rendering system was then created to render and add rarity to each individuals \"NOOD\". Pipelines were created for marketing and trailer content. As well as a social platform for users to join and play utilising their own \"NOOD\" nfts",
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
        description: "Taking the existing Emergisim product we were created a military TCCC scenario that followed Military Tactical Combat Casualty Care medical procedures",
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
        description: "Technical development for ZedRun, a digital horse racing and breeding platform. Worked on real-time race visualisation systems and character and animation pipelines.",
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
        description: "Virtual production project for Ford's Auto Nights campaign. Designed and built real-time LED volume environments showcasing Ford vehicles in dynamic, cinematic settings using Unreal Engine.",
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
        description: "Virtual production environment for Masked Wolf's performance segment on The Tonight Show with Jimmy Fallon. Built real-time immersive backdrops and visual effects delivered via LED volume.",
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
        description: "Virtual reality experience developed at Spectre Studios. Responsible for core VR interaction systems, environment development, and performance optimization for the target VR platforms.",
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
        description: "Virtual reality paramedic training simulation. Built realistic emergency scenarios, interactive medical procedures, and comprehensive training modules to deliver an immersive first-responder training experience.",
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
        description: "This Project was created to assist Tales of Aluna convert 3D Environments into 2d compatible layouts that they could use for production.",
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
        description: "Virtual production and film work for the Lah-Lah children's entertainment brand. Developed real-time environments and integrated animation pipelines for the production shoot.",
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
        description: "Animated film project for Roborovski. Contributed to the real-time rendering pipeline and character animation systems using Unreal Engine as the primary production tool.",
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
        description: "",
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
        description: "Designed and built the character pipeline for the Atmosfear board game CGI project. Created tooling and workflows covering rigging, animation export, and import into Unreal Engine to streamline the CGI render process.",
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
    
    // Apply initial filter to show all projects
    // Use setTimeout to ensure filter buttons are initialized
    setTimeout(() => {
        if (typeof filterProjects === 'function') {
            filterProjects('all');
        }
    }, 50);
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