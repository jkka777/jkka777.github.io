let navbar = () => {
    return `
    <div class="name-logo">
            <h2>Kishore J</h2>
        </div>
        <div class="buttons-nav">
            <div><a href="#home-page">Home</a></div>
            <div><a href="#about-page">About</a></div>
            <div><a href="#tech-page">Tech Stack</a></div>
            <div><a href="#skill-page">Skills and Statistics</a></div>
            <div><a href="#project-page">Projects</a></div>
            <div><a href="#contact-page">Contact Me</a></div>
            <div class="resume"><button class="nav-resume-button"><a href="utility/Kishore-Jeelugula-Resume.pdf" download="fw19_0718-Kishore-Jeelugula-Resume" onclick="downloadResume()">Resume</a></button></div>
        </div>
        <div class="color-mode"></div>
    `
}

let footer = () => {
    return `
    <div><img
                src="/util/linkedin.webp"
                alt="linkedn logo"></div>
        <div><img
                src="/util/github.webp"
                alt="github-logo"></div>
        <div>
            <img src="/util/twitter.webp"
                alt="twitter-logo">
        </div>
    `
}


export { navbar, footer }; 