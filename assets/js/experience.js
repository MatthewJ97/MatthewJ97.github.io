// Work Experience Data
// Add/edit your positions here - they'll automatically appear on the page

const experience = [
    {
        title: "Technical Director",
        company: "FENIX Studios Australia",
        companyLink: null,
        location: "Sydney, New South Wales, Australia",
        period: "April 2023 - Present",
        current: true,
        highlights: [
            "Define and execute the studio's technical vision, roadmap, and coding standards",
            "Lead, mentor, and manage the programming team, fostering collaboration and growth",
            "Architect and implement scalable, maintainable, and high-performance systems",
            "Troubleshoot complex issues and optimize performance across platforms",
            "Collaborate with artists, designers, and stakeholders to align technical solutions with creative goals",
            "Oversee QA and testing frameworks to ensure product stability and quality",
            "Support business development through publisher pitches, conferences, and community engagement"
        ]
    },

    {
        title: "Senior UE4 Programmer",
        company: "Spectre Studios - Virtual Production & Design",
        companyLink: "https://www.facebook.com/specvr/",
        location: "Sydney, Australia",
        period: "January 2022 - April 2023",
        current: false,
        highlights: [
            "Led Unreal Engine development for commercial VR titles",
            "Developed virtual production tools and workflows",
            "Created custom render pipelines for 360 video capture",
            "Integrated real-time motion capture systems (Rokoko)",
            "Maintained IT infrastructure including Perforce version control"
        ]
    },
    {
        title: "Lead Programmer",
        company: "Spectre Studios - Virtual Production & Design",
        companyLink: "https://www.facebook.com/specvr/",
        location: "Sydney, Australia",
        period: "March 2018 - February 2022",
        current: false,
        highlights: [
            "Programmed VR applications: Emergisim (Paramedic Training), Nekrotronic VR (Film Tie-in Game)",
            "Developed Maya scripts and environment tools for production pipeline",
            "Built previs and LED virtual production systems",
            "Handled project packaging and distribution across platforms",
            "Managed PC upgrades, software installation, and Perforce administration"
        ]
    }
];

// Function to render experience - don't need to edit this!
function renderExperience() {
    const container = document.getElementById('experience-container');
    
    experience.forEach((job, index) => {
        const experienceHTML = `
            <div class="item">
                <div class="meta">
                    <div class="upper-row">
                        <h3 class="job-title">${job.title}</h3>
                        <div class="time">${job.period}</div>
                    </div><!--//upper-row-->
                    <div class="company">
                        ${job.companyLink ? `<a href="${job.companyLink}" target="_blank">` : ''}
                        ${job.company}
                        ${job.companyLink ? '</a>' : ''}
                        ${job.current ? '<span class="badge badge-current">Current</span>' : ''}
                    </div>
                </div><!--//meta-->
                <div class="details">
                    <ul>
                        ${job.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                </div><!--//details-->
            </div><!--//item-->
        `;
        
        container.innerHTML += experienceHTML;
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', renderExperience);
