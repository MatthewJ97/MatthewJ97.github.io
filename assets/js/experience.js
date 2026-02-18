// Work Experience Data
// Add/edit your positions here - they'll automatically appear on the page

const experience = [
    {
        title: "Freelance Programmer",
        company: "",
        companyLink: null,
        location: "Sydney, New South Wales, Australia",
        period: "August 2025 - Present",
        current: true,
        highlights: [
            "Providing Programming and Technical support on a need by need basis"
        ]
    },
    {
        title: "Technical Director",
        company: "FENIX Studios Australia",
        companyLink: "https://www.fenixstudios.com.au/",
        location: "Sydney, New South Wales, Australia",
        period: "April 2023 - August 2025",
        current: false,
        highlights: [
            "Define and execute the studio's technical vision, roadmap, and coding standards",
            "Drive technical planning, task estimation, and risk assessment during pre-production and production phases",
            "Lead, mentor, and manage the programming team, fostering collaboration and growth",
            "Architect and implement scalable, maintainable, and high-performance systems",
            "Oversee integration of third-party systems, plugins, and middleware into the Unreal Engine pipeline",
            "Troubleshoot complex issues and optimize performance across platforms",
            "Collaborate with artists, designers, and stakeholders to align technical solutions with creative goals",
            "Support business development through publisher pitches, conferences, and community engagement",
            "Ensure scalability and maintainability of systems to support evolving project requirements",
            "Review and guide code architecture, refactors, and tech debt management",
        ]
    },
    {
        title: "Lead Programmer",
        company: "Spectre Studios - Virtual Production & Design",
        companyLink: "https://www.facebook.com/specvr/",
        location: "Sydney, Australia",
        period: "January 2022 - March 2023",
        current: false,
        highlights: [
            "Lead the development of core gameplay and systems programming in C++ and Blueprints ",
            "Collaborate with design and art teams to implement features that align with creative goals ",
            "Manage and mentor a team of programmers, enforcing code quality and best practices",
            "Optimize performance and memory usage across platforms",
            "Contribute to technical planning, task breakdown, and code reviews "
        ]
    },
    {
        title: "Mid Programmer",
        company: "Spectre Studios - Virtual Production & Design",
        companyLink: "",
        location: "Sydney, Australia",
        period: "January 2020 - December 2021",
        current: false,
        highlights: [
            "Develop and maintain gameplay features and systems using C++ and Blueprints ",
            "Collaborate with designers and artists to implement game mechanics and tools ",
            "Debug, profile, and optimize code for performance and stability ",
            "Support integration of assets and systems into the Unreal Engine pipeline",
            "Maintained IT infrastructure including Perforce version control"
        ]
    },
        {
        title: "Junior Programmer",
        company: "Spectre Studios - Virtual Production & Design",
        companyLink: "",
        location: "Sydney, Australia",
        period: "March 2018 - December 2019",
        current: false,
        highlights: [
            "Develop and maintain gameplay features and systems using C++ and Blueprints ",
            "Collaborate with designers and artists to implement game mechanics and tools ",
            "Debug, profile, and optimize code for performance and stability ",
            "Support integration of assets and systems into the Unreal Engine pipeline",
            "Maintained IT infrastructure including Perforce version control"
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
