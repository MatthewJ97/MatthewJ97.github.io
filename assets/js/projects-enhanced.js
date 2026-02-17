// Project Data - Enhanced with multiple images and video support
// Just add/edit/remove projects from this array and they'll automatically appear on the page

const projects = [
    {
        title: "Office Fight",
        time: "2024",
        company: "FENIX Studios",
        companyLink: "https://www.fenixstudios.com.au/",
        // Multiple images - first one is the main thumbnail
        images: [
            
        ],
        video: null, // YouTube embed URL: "https://www.youtube.com/embed/VIDEO_ID"
        description: "Comprehensive migration from Unreal Engine 5.3 to 5.6, systematically resolving API compatibility issues, iOS packaging challenges, and implementing Chaos ragdoll physics optimization for mobile deployment.",
        skills: "Unreal Engine 5, C++, iOS, Xcode, Chaos Physics",
        link: null,
        teamMembers: null
    },
    {
        title: "Gaussian Splat Converter",
        time: "2024",
        company: "Introverted Pixel",
        companyLink: null,
        images: [
            "assets/images/gaussian-splat-1.jpg",
            "assets/images/gaussian-splat-2.jpg"
        ],
        video: null,
        description: "Full-stack web application for converting Gaussian Splat files (PLY, SPLAT, KSPLAT to SOG, PLY, CSV). Features Node.js backend, Express server, user authentication, real-time progress tracking, and support for files up to 50GB. Professional drag-and-drop interface with rate limiting and security validation.",
        skills: "Node.js, Express, JavaScript, @playcanvas/splat-transform",
        link: null,
        teamMembers: null
    },
    {
        title: "Story Reader Platform",
        time: "2024",
        company: "Personal",
        companyLink: null,
        images: [
            "assets/images/story-reader.jpg"
        ],
        video: null,
        description: "Massive modularization project transforming a 5,129-line monolithic HTML file into a 16-module enterprise-grade system. Implemented ES6 modules, event-driven architecture, dependency injection patterns, and comprehensive file processing utilities.",
        skills: "JavaScript, ES6 Modules, Web Development, Architecture",
        link: null,
        teamMembers: null
    },
    {
        title: "Emergisim VR",
        time: "2018-2023",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        images: [
            "assets/images/emergisim-1.jpg",
            "assets/images/emergisim-2.jpg"
        ],
        video: null, // Add YouTube embed if you have a demo video
        description: "Virtual reality paramedic training application featuring realistic emergency scenarios, interactive medical procedures, and comprehensive training modules. Built in Unreal Engine with full VR interaction systems.",
        skills: "Unreal Engine 4, C++, VR, Blueprint, Motion Capture",
        link: null,
        teamMembers: null
    },
    {
        title: "Nekrotronic VR",
        time: "Released August 2019",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        images: [
            "assets/images/Nekrotronic-featured1.jpg"
        ],
        video: null, // Example: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
        description: "Intensely immersive sci-fi VR shooter. Tie-in game for the feature film Nekrotronic. Players hunt Ghost-Wraiths, dodge stealth attacks, operate sci-fi technology, 3D print demons and destroy them with plasma rifles. Hyper-realistic first-person shooter built for commercial VR platforms.",
        skills: "Unreal Engine 4, UMG, Blueprints, C++, VR",
        link: null,
        teamMembers: null
    },
    {
        title: "Virtual Production Tools Suite",
        time: "2018-2023",
        company: "Spectre Studios",
        companyLink: "https://www.facebook.com/specvr/",
        images: [
            "assets/images/virtual-production-1.jpg",
            "assets/images/virtual-production-2.jpg"
        ],
        video: null,
        description: "Comprehensive suite of tools for LED virtual production and previs workflows. Includes 360 video render tools from Unreal Engine, Maya integration scripts, environment tools, and real-time motion capture integration with Rokoko. Enabled professional virtual production pipelines.",
        skills: "Unreal Engine, Python, Maya API, Motion Capture, Virtual Production",
        link: null,
        teamMembers: null
    },
    {
        title: "Welcome To Wonderland VR",
        time: "July 2017 - December 2017",
        company: "Group Project",
        companyLink: null,
        images: [
            "assets/images/project-featured2.jpg"
        ],
        video: null,
        description: "VR puzzle game where players use wits and problem-solving skills to survive and escape the galaxy's most dangerous game show. Features a charismatic, crazed AI host and multiple challenge rooms.",
        skills: "C#, Unity, VR",
        link: null,
        teamMembers: {
            programmers: [
                { name: "Joel Gabriel", link: "https://joelybahh.github.io/" }
            ],
            artists: [
                { name: "Dion Graves", link: "https://www.facebook.com/WelcomeToWonderlandVR/" },
                { name: "Aaron Watson", link: "https://www.facebook.com/WelcomeToWonderlandVR/" }
            ],
            designers: [
                { name: "Zachary Farmer", link: "https://zachfa97.wixsite.com/zacharyfeportfolio" },
                { name: "Lucas Hobbs", link: "https://www.facebook.com/WelcomeToWonderlandVR/" }
            ]
        }
    }
];

// Function to render projects - enhanced with image gallery and video support
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        // Build image gallery HTML
        let imageGalleryHTML = '';
        if (project.images && project.images.length > 0) {
            if (project.images.length === 1) {
                // Single image
                imageGalleryHTML = `
                    <div class="project-image-single">
                        <img loading="lazy" class="img-responsive project-image" src="${project.images[0]}" alt="${project.title}" onerror="this.parentElement.style.display='none'">
                    </div>
                `;
            } else {
                // Multiple images - create gallery
                imageGalleryHTML = `
                    <div class="project-gallery">
                        ${project.images.map((img, idx) => `
                            <img loading="lazy" class="gallery-image ${idx === 0 ? 'active' : ''}" src="${img}" alt="${project.title} - Image ${idx + 1}" onerror="this.style.display='none'">
                        `).join('')}
                        ${project.images.length > 1 ? `
                            <div class="gallery-controls">
                                <button class="gallery-prev" onclick="changeImage(this, -1)"><i class="fa fa-chevron-left"></i></button>
                                <button class="gallery-next" onclick="changeImage(this, 1)"><i class="fa fa-chevron-right"></i></button>
                            </div>
                            <div class="gallery-dots">
                                ${project.images.map((_, idx) => `
                                    <span class="dot ${idx === 0 ? 'active' : ''}" onclick="setImage(this, ${idx})"></span>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                `;
            }
        }

        // Build video HTML
        let videoHTML = '';
        if (project.video) {
            videoHTML = `
                <div class="project-video">
                    <iframe loading="lazy" width="560" height="315" src="${project.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            `;
        }
        
        const projectHTML = `
            <div class="item project-item">
                <div class="meta">
                    <div class="upper-row">
                        <h3 class="job-title">
                            ${project.link ? `<a href="${project.link}" target="_blank">` : ''}
                            ${project.title}
                            ${project.link ? '</a>' : ''}
                        </h3>
                        <div class="time">${project.time}</div>
                    </div><!--//upper-row-->
                    <div class="company">
                        ${project.companyLink ? `<a href="${project.companyLink}" target="_blank">` : ''}
                        ${project.company}
                        ${project.companyLink ? '</a>' : ''}
                    </div>
                </div><!--//meta-->
                <div class="details">
                    ${videoHTML}
                    ${imageGalleryHTML}
                    <div class="item">
                        <span class="details">Description:</span> ${project.description}
                    </div>
                    <div class="item">
                        <span class="details">Skills Used:</span> ${project.skills}
                    </div>
                    ${project.teamMembers ? `
                    <span class="item">Team Members</span> 
                    <ul class="list-unstyled interests-list">
                        ${project.teamMembers.programmers ? `
                            <li>
                                <span class="details">Programmers: </span>
                                ${project.teamMembers.programmers.map(p => 
                                    `<a href="${p.link}" target="_blank">${p.name}</a>`
                                ).join(', ')}
                            </li>
                        ` : ''}
                        ${project.teamMembers.artists ? `
                            <li>
                                <span class="details">Artists: </span>
                                ${project.teamMembers.artists.map(p => 
                                    `<a href="${p.link}" target="_blank">${p.name}</a>`
                                ).join(', ')}
                            </li>
                        ` : ''}
                        ${project.teamMembers.designers ? `
                            <li>
                                <span class="details">Designers: </span>
                                ${project.teamMembers.designers.map(p => 
                                    `<a href="${p.link}" target="_blank">${p.name}</a>`
                                ).join(', ')}
                            </li>
                        ` : ''}
                    </ul>
                    ` : ''}
                </div>
            </div>
        `;
        
        container.innerHTML += projectHTML;
    });
}

// Image gallery navigation functions
function changeImage(button, direction) {
    const gallery = button.closest('.project-gallery');
    const images = gallery.querySelectorAll('.gallery-image');
    const dots = gallery.querySelectorAll('.dot');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + direction + images.length) % images.length;
    
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
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

// Run when page loads
document.addEventListener('DOMContentLoaded', renderProjects);
