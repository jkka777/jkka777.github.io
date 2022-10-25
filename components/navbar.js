let navbar = () => {
    return `
    <div class="name-logo">
            <h2>{ KJ. }</h2>
        </div>
        <div class="buttons-nav">
            <div><button>Home</button></div>
            <div><button>About Me</button></div>
            <div><button>Skills</button></div>
            <div><button>Projects</button></div>
            <div><button>Contact</button></div>
            <div><button>Resume</button></div>
        </div>
    `
}

let footer = () => {
    return `
    <div><img
                src="https://imgs.search.brave.com/xViDn4jLsf4MX2JcyTAMcrpHnnBpvbts2cSVffn6emE/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
                alt="linkedn logo"></div>
        <div><img
                src="https://imgs.search.brave.com/pTRxp49h_VbVkhHasbi3ThNs_i8jOhBM0NfTGZ68Sro/rs:fit:280:280:1/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/Lzk1Mjg5MC5wbmc"
                alt="github-logo"></div>
        <div>
            <img src="https://imgs.search.brave.com/INSRq5CU0U0vTJcSJrAvY0eLvA-pj8T5MXF96hliv7M/rs:fit:1200:1104:1/g:ce/aHR0cDovL3RvdXMt/bG9nb3MuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1R3aXR0ZXItbG9n/by5wbmc"
                alt="twitter-logo">
        </div>
    `
}


export { navbar, footer }; 