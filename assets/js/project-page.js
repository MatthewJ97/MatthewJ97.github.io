// ============================================================
// PROJECT PAGE RENDERER
// Reads the `project` object defined in the HTML and renders
// the full page. No need to edit this file.
// ============================================================

const categoryInfo = {
    game:     { name: "Game",               color: "category-game" },
    vr:       { name: "VR",                 color: "category-vr" },
    vp:       { name: "Virtual Production", color: "category-vp" },
    film:     { name: "Film",               color: "category-film" },
    pipeline: { name: "Pipeline",           color: "category-pipeline" }
};

const statusColors = {
    "Released":       "status-released",
    "In Development": "status-dev",
    "Completed":      "status-completed"
};

document.addEventListener('DOMContentLoaded', function() {
    renderHeader();
    renderMain();
    updatePageTitle();
});

// ---- Header (hero image + title) ----

function renderHeader() {
    const header = document.getElementById('project-header');

    const heroImage = project.images && project.images.length > 0
        ? `style="background-image: url('${project.images[0]}')"` : '';

    const badges = (project.categories || []).map(cat => {
        const info = categoryInfo[cat];
        return `<span class="project-category-badge ${info.color}">${info.name}</span>`;
    }).join('');

    const statusClass = statusColors[project.status] || 'status-completed';

    const companyHTML = project.companyLink
        ? `<a href="${project.companyLink}" target="_blank">${project.company}</a>`
        : project.company;

    header.innerHTML = `
        <div class="hero-image" ${heroImage}>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <div class="hero-meta">
                    ${badges}
                    <span class="project-status ${statusClass}">${project.status}</span>
                </div>
                <h1 class="hero-title">${project.title}</h1>
                <p class="hero-subtitle">${project.subtitle}</p>
                <div class="hero-details">
                    <span><i class="fa fa-building"></i> ${companyHTML}</span>
                    <span><i class="fa fa-calendar"></i> ${project.period}</span>
                    <span><i class="fa fa-user"></i> ${project.role}</span>
                </div>
            </div>
        </div>`;
}

// ---- Main content ----

function renderMain() {
    const main = document.getElementById('project-main');

    main.innerHTML = `
        <div class="project-content">

            <!-- Left column -->
            <div class="project-col-main">
                ${renderVideo()}
                ${renderGallery()}
                ${renderOverview()}
                ${renderHighlights()}
            </div>

            <!-- Right sidebar -->
            <div class="project-col-sidebar">
                ${renderLinks()}
                ${renderResponsibilities()}
                ${renderSkills()}
                ${renderTeam()}
            </div>

        </div>`;

    // Initialise gallery after render
    initGallery();
}

function renderVideo() {
    if (!project.video) return '';

    const ytId = project.video.split('/embed/')[1]?.split('?')[0] || '';
    const ytWatchUrl = ytId ? `https://www.youtube.com/watch?v=${ytId}` : project.video;
    const ytThumbnail = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : '';

    return `
        <div class="project-section">
            <a href="${ytWatchUrl}" target="_blank" class="yt-thumbnail-link">
                <div class="yt-thumbnail">
                    <img src="${ytThumbnail}" alt="Watch ${project.title} on YouTube" onerror="this.style.display='none'">
                    <div class="yt-play-btn"><i class="fa fa-youtube-play"></i></div>
                    <div class="yt-label"><i class="fa fa-youtube-play"></i> Watch on YouTube</div>
                </div>
            </a>
        </div>`;
}

function renderGallery() {
    if (!project.images || project.images.length === 0) return '';

    // Skip the hero image (index 0) if there's only 1 image
    const galleryImages = project.images.length > 1 ? project.images.slice(1) : project.images;

    if (galleryImages.length === 0) return '';

    return `
        <div class="project-section">
            <h2 class="project-section-title"><i class="fa fa-images"></i> Screenshots</h2>
            <div class="project-gallery-grid">
                ${galleryImages.map((img, idx) => `
                    <div class="gallery-grid-item" onclick="openLightbox(${idx})">
                        <img loading="lazy" src="${img}" alt="${project.title} screenshot ${idx + 1}" onerror="this.parentElement.style.display='none'">
                        <div class="gallery-grid-overlay"><i class="fa fa-expand"></i></div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Lightbox -->
        <div class="lightbox" id="lightbox" onclick="closeLightbox()">
            <button class="lightbox-close" onclick="closeLightbox()"><i class="fa fa-times"></i></button>
            <button class="lightbox-prev" onclick="event.stopPropagation(); lightboxNav(-1)"><i class="fa fa-chevron-left"></i></button>
            <img class="lightbox-img" id="lightbox-img" src="" alt="">
            <button class="lightbox-next" onclick="event.stopPropagation(); lightboxNav(1)"><i class="fa fa-chevron-right"></i></button>
        </div>`;
}

function renderOverview() {
    if (!project.overview) return '';
    return `
        <div class="project-section">
            <h2 class="project-section-title"><i class="fa fa-info-circle"></i> Overview</h2>
            <div class="project-overview">${project.overview}</div>
        </div>`;
}

function renderHighlights() {
    if (!project.highlights || project.highlights.length === 0) return '';
    return `
        <div class="project-section">
            <h2 class="project-section-title"><i class="fa fa-star"></i> Highlights</h2>
            <ul class="highlights-list">
                ${project.highlights.map(h => `<li><i class="fa fa-check"></i> ${h}</li>`).join('')}
            </ul>
        </div>`;
}

function renderLinks() {
    if (!project.links || project.links.length === 0) return '';
    return `
        <div class="sidebar-section">
            <h3 class="sidebar-section-title">Links</h3>
            <div class="project-links">
                ${project.links.map(link => `
                    <a href="${link.url}" target="_blank" class="project-link-btn">
                        <i class="fa ${link.icon}"></i> ${link.label}
                    </a>
                `).join('')}
            </div>
        </div>`;
}

function renderResponsibilities() {
    if (!project.responsibilities || project.responsibilities.length === 0) return '';
    return `
        <div class="sidebar-section">
            <h3 class="sidebar-section-title">My Role</h3>
            <ul class="sidebar-list">
                ${project.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>`;
}

function renderSkills() {
    if (!project.skills || project.skills.length === 0) return '';
    return `
        <div class="sidebar-section">
            <h3 class="sidebar-section-title">Tech Stack</h3>
            <div class="skills-tags">
                ${project.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>`;
}

function renderTeam() {
    if (!project.team || project.team.length === 0) return '';
    return `
        <div class="sidebar-section">
            <h3 class="sidebar-section-title">Team</h3>
            <ul class="team-list">
                ${project.team.map(member => `
                    <li>
                        <span class="team-role">${member.role}</span>
                        ${member.link
                            ? `<a href="${member.link}" target="_blank">${member.name}</a>`
                            : `<span>${member.name}</span>`}
                    </li>
                `).join('')}
            </ul>
        </div>`;
}

// ---- Page title ----

function updatePageTitle() {
    document.title = `${project.title} - Matthew Jones Portfolio`;
}

// ---- Lightbox ----

let lightboxImages = [];
let lightboxIndex = 0;

function initGallery() {
    lightboxImages = project.images && project.images.length > 1
        ? project.images.slice(1) : project.images || [];
}

function openLightbox(index) {
    lightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (!lightbox || !img) return;
    img.src = lightboxImages[lightboxIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function lightboxNav(direction) {
    lightboxIndex = (lightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
    const img = document.getElementById('lightbox-img');
    if (img) img.src = lightboxImages[lightboxIndex];
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft')  lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
    if (e.key === 'Escape')     closeLightbox();
});
