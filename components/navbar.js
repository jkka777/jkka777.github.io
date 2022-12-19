let navbar = () => {
    return `
    <div class="name-logo">
            <h2>{ KJ. }</h2>
        </div>
        <div class="buttons-nav">
            <div><button>Home</button></div>
            <div><button>Skills</button></div>
            <div><button>Projects</button></div>
            <div><button>Contact</button></div>
            <div><a href="util/Kishore-Jeelugula-Resume.pdf" download="Kishore-Jeelugula-Resume"><button>Resume</button></a></div>
        </div>
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