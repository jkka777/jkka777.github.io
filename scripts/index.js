import { footer, navbar } from "../components/navbar.js";

let catchElem = (val) => document.querySelector(val);

let createElem = (val) => document.createElement(val);

catchElem('.navbar').innerHTML = navbar();

catchElem('.footer').innerHTML = footer();

const mainContent = catchElem('.content');

window.addEventListener('load', () => toHomePage());

/*<===============> --------- home page script -------- <===================>*/

let toHomePage = () => {

    mainContent.style.height = '1200px';

    mainContent.innerHTML = '';

    /*  home structure
    
    div(hc)[flex] ---> 1. div(intro) ---> div(greetin,emoji) , div(name), div(role)

                ---> 2. div(pic) ---> img
    */

    let hc_div1 = createElem('div');

    let hc_div = createElem('div');
    hc_div.setAttribute('class', 'home-content');

    let about_title = createElem('div');
    about_title.setAttribute('class', 'about_title');
    let about_h2 = createElem('h2');
    about_h2.textContent = 'About Me';

    about_title.append(about_h2);

    let intro_div = createElem('div');
    intro_div.setAttribute('class', 'intro-div');

    let intro_div1 = createElem('div');

    let greet = createElem('h2');
    greet.textContent = 'Hello!';

    let img = createElem('img');
    img.src = 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif';

    intro_div1.append(greet, img);

    let intro_div2 = createElem('div');
    let intro_name = createElem('h2');
    intro_name.textContent = "I'm Kishore.";

    intro_div2.append(intro_name);

    let intro_div3 = createElem('div');
    let intro_role = createElem('h2');
    intro_role.textContent = "JAVA Backend Developer";

    intro_div3.append(intro_role);

    intro_div.append(intro_div1, intro_div2, intro_div3);

    let pic_div = createElem('div');
    pic_div.setAttribute('class', 'profile-img-div');

    let pic_img = createElem('img');
    pic_img.src = 'util/profile.png';
    pic_img.setAttribute('alt', "Kishore's image");

    pic_div.append(pic_img);

    hc_div.append(intro_div, pic_div);

    let resume_div = createElem('div');
    resume_div.setAttribute('class', 'home-resume-div');

    let resume_a = createElem('a');
    resume_a.setAttribute("href","https://drive.google.com/file/d/1BjBdLoDuAGOOCp55gpwQ_Ap3tTu12CW2/view?usp=sharing");
    resume_a.setAttribute("download","Kishore-Jeelugula-Resume");
    resume_a.setAttribute('target','_blank');

    let resume_button = createElem('button');
    resume_button.setAttribute('class', 'home-resume-button');
    resume_button.textContent = 'Resume';

    resume_a.append(resume_button);

    resume_div.append(resume_a);
/*
    function download(file, url) {
        let element = document.createElement('a');
        element.setAttribute('href', url);
        element.setAttribute('download', file);
        element.setAttribute('target', '_blank');
        resume_div.append(element);
        element.click();
        resume_div.remove(element);
    }
*/
    let details_div = createElem('div');
    details_div.setAttribute('class', 'details_div');
    let details_p = createElem('p');
    details_p.textContent = `Hi! I'm Kishore Jeelugula, an aspiring software developer where I look for the oppurtunity to upskill and develop the robust and user-friendly applications. I work for the details in every aspect, As they say "Devil lies in the details". I'm Passionate about working with enthusiastic and energetic minds.`;

    details_div.append(details_p, resume_div);

    // about_div.append(about_title, details_div);

    hc_div1.append(about_title, hc_div);

    // let resume_div = createElem('div');
    // resume_div.setAttribute('class', 'home-resume-div');

    // let resume_button = createElem('button');
    // resume_button.setAttribute('class', 'home-resume-button');
    // resume_button.textContent = 'Resume';
    // resume_button.addEventListener('click', () => window.open('https://drive.google.com/file/d/1BjBdLoDuAGOOCp55gpwQ_Ap3tTu12CW2/view?usp=sharing'));

    // resume_div.append(resume_button);

    mainContent.append(hc_div1, details_div);

    catchElem('.buttons-nav>div:nth-child(1)>button').style.cssText += 'border-radius:5px;background-color:black;color:white;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(2)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(3)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(4)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)>a>button').style.cssText += 'border-radius:5px;background-color:yellow;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)').style.cssText += 'border-radius:5px;background-color:yellow;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)>a').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    // catchElem('.buttons-nav>div:nth-child(6)>a>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

};

catchElem('.buttons-nav>div:nth-child(1)>button').addEventListener('click', toHomePage);

/*<===============> --------- skills page script -------- <===================>*/


let skillsPage = () => {

    mainContent.innerHTML = '';

    mainContent.style.height = '1200px';

    let skills_div = createElem('div');
    skills_div.setAttribute('class', 'skill-content');

    let skill_title = createElem('div');
    let skill_h2 = createElem('h2');
    skill_h2.textContent = 'Skills';

    skill_title.append(skill_h2);

    let tech_skills = createElem('div');
    tech_skills.setAttribute('class', 'tech-skills');

    let skill1 = createElem('div');
    let skill1_img = createElem('img');
    skill1_img.src = 'util/html.webp';
    skill1_img.setAttribute('alt', 'html icon');
    skill1.append(skill1_img);

    let skill2 = createElem('div');
    let skill2_img = createElem('img');
    skill2_img.src = 'util/css.webp';
    skill2_img.setAttribute('alt', 'css icon');
    skill2.append(skill2_img);

    let skill3 = createElem('div');
    let skill3_img = createElem('img');
    skill3_img.src = 'util/javascript.webp';
    skill3_img.setAttribute('alt', 'js icon');
    skill3.append(skill3_img);

    let skill4 = createElem('div');
    let skill4_img = createElem('img');
    skill4_img.src = 'util/java.webp';
    skill4_img.setAttribute('alt', 'java icon');
    skill4.append(skill4_img);

    let skill5 = createElem('div');
    let skill5_img = createElem('img');
    skill5_img.src = 'util/spring.webp';
    skill5_img.setAttribute('alt', 'spring icon');
    skill5.append(skill5_img);

    let skill6 = createElem('div');
    let skill6_img = createElem('img');
    skill6_img.src = 'util/github_png.webp';
    skill6_img.setAttribute('alt', 'github icon');
    skill6.append(skill6_img);

    let skill7 = createElem('div');
    let skill7_img = createElem('img');
    skill7_img.src = 'util/hibernate.webp';
    skill7_img.setAttribute('alt', 'github icon');
    skill7.append(skill7_img);

    let skill8 = createElem('div');
    let skill8_img = createElem('img');
    skill8_img.src = 'util/postman.webp';
    skill8_img.setAttribute('alt', 'github icon');
    skill8.append(skill8_img);

    let skill9 = createElem('div');
    let skill9_img = createElem('img');
    skill9_img.src = 'util/mysql.webp';
    skill9_img.setAttribute('alt', 'github icon');
    skill9.append(skill9_img);

    let skill10 = createElem('div');
    let skill10_img = createElem('img');
    skill10_img.src = 'util/aws.webp';
    skill10_img.setAttribute('alt', 'github icon');
    skill10.append(skill10_img);

    tech_skills.append(skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9, skill10);

    // styling part //

    catchElem('.buttons-nav>div:nth-child(2)>button').style.cssText += 'border-radius:5px;background-color:black;color:white;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(1)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(3)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(4)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    // catchElem('.buttons-nav>div:nth-child(5)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)>a>button').style.cssText += 'border-radius:5px;background-color:yellow;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)').style.cssText += 'border-radius:5px;background-color:yellow;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)>a').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    let git_stattus = createElem('div');
    git_stattus.setAttribute('class', 'git-stats');
    git_stattus.addEventListener('click', () => {
        window.open('https://github.com/jkka777');
    })

    let git_cal = createElem('div');
    git_cal.setAttribute('class', 'calendar')

    let git_cont = createElem('h2');
    git_cont.textContent = 'GitHub Contributions';


    // <github-calendar user-name="shinyaigeek" tooltips="true" >Loading Fallback...</github-calendar>
    // let cal = createElem('github-calendar');
    // cal.setAttribute('user-name', 'jkka777');
    // cal.setAttribute('tool-tips', 'true');

    let cal_img = createElem('img');
    // https://ghchart.rshah.org/jkka777
    cal_img.src = `https://ghchart.rshah.org/666666/jkka777`;
    cal_img.alt = "kishore's Github calander"

    git_cal.append(git_cont, cal_img);

    let stat_streak = createElem('h2');
    stat_streak.textContent = 'GitHub Statistics';

    let git_streaks = createElem('div');
    git_streaks.setAttribute('class', 'streaks');

    let stats = createElem('img');
    stats.src = 'https://github-readme-stats-jkka777.vercel.app/api?username=jkka777&theme=graywhite&show_icons=true&hide_border=true';
    stats.alt = "kishore's github stats";

    let streak = createElem('img');
    streak.src = 'https://streak-stats.demolab.com?user=jkka777&theme=default&hide_border=true';
    streak.alt = "kishore's github streak";

    git_streaks.append(stats, streak);

    git_stattus.append(git_cal, stat_streak, git_streaks);

    skills_div.append(skill_title, tech_skills, git_stattus);

    mainContent.append(skills_div);
};

catchElem('.buttons-nav>div:nth-child(2)>button').addEventListener('click', skillsPage);

/*<===============> --------- projects page script -------- <===================>*/

let projectsPage = () => {

    mainContent.innerHTML = '';

    mainContent.style.height = '2200px';

    let prj_content = createElem('div');
    prj_content.setAttribute('class', 'project-content');

    let prj_main = createElem('div');

    /*----------------------------------------project 1----------------------------------------*/

    let p1 = createElem('div');

    let p1_1 = createElem('div');
    p1_1.setAttribute('id', 'project-box1');

    let p1_name = createElem('h4');
    p1_name.textContent = 'Bewakoof.com Clone';

    let p1_img = createElem('img');
    p1_img.src = 'util/p1_img.png';

    let p1_innerDiv = createElem('div');

    let p1_link = createElem('a');
    p1_link.setAttribute('href', 'https://bewakoof-cloned.netlify.app/');
    p1_link.setAttribute('target', '_blank');
    p1_link.textContent = 'Deployment';
    p1_link.style.cssText += 'text-decoration:none';

    let repo_link1 = createElem('img');
    repo_link1.setAttribute('src', 'util/github_png.webp');
    repo_link1.addEventListener('click', () => window.open('https://github.com/jkka777/bewakoof-clone'));
    repo_link1.style.cssText += 'height:26px;width:26px;cursor:pointer';

    p1_innerDiv.append(p1_link, repo_link1);

    p1_1.append(p1_name, p1_img, p1_innerDiv);

    let p1_2 = createElem('div');
    p1_2.setAttribute('id', 'project-box2');

    let div1 = createElem('div');
    let project_details = createElem('h4');
    project_details.textContent = 'Features';
    project_details.style.textDecoration = 'underline';

    let project_featuers = createElem('p');
    project_featuers.textContent = 'bewakoof.com is an online shopping website where one can shop for clothes and accessories for men and women. This clone has the features of SignUp, Login, Shop Mens clothes, Shop Womens clothes and Add to cart functationality'

    div1.append(project_details, project_featuers);

    let div2 = createElem('div');

    let pt_1 = createElem("h4");
    pt_1.textContent = 'Languages';
    pt_1.style.textDecoration = 'underline';

    let lang_div = createElem('div');
    lang_div.setAttribute('id', 'lang-div-1');
    let html_logo = createElem('img');
    html_logo.src = 'util/html.webp';
    // html_logo.style.height = '80px';
    // html_logo.style.width = '80px';

    let css_logo = createElem('img');
    css_logo.src = 'util/css.webp';

    let js_logo = createElem('img');
    js_logo.src = 'util/javascript.webp';

    lang_div.append(html_logo, css_logo, js_logo);

    let pt_2 = createElem('h4');
    pt_2.textContent = 'Tools';
    pt_2.style.textDecoration = 'underline';

    let tool_div = createElem('div');
    tool_div.setAttribute('id', 'tool-div-1');
    let vs_code_logo = createElem('img');
    vs_code_logo.src = 'util/vscode.webp';

    let git_logo = createElem('img');
    git_logo.src = 'util/github_png.webp';

    tool_div.append(vs_code_logo, git_logo);

    div2.append(pt_1, lang_div, pt_2, tool_div);

    p1_2.append(div1, div2);

    p1.append(p1_1, p1_2);

    /*----------------------------------------project 2----------------------------------------*/

    let p2 = createElem('div');

    let p2_1 = createElem('div');
    p2_1.setAttribute('id', 'project-box1');

    let p2_name = createElem('h4');
    p2_name.textContent = 'Cronometer.com Clone';

    let p2_img = createElem('img');
    p2_img.src = 'util/p2_img.png';

    let p2_innerDiv = createElem('div');

    let p2_link = createElem('a');
    p2_link.setAttribute('href', 'https://cronometer-cloned.netlify.app/');
    p2_link.setAttribute('target', '_blank');
    p2_link.textContent = 'Deployment';
    p2_link.style.cssText += 'text-decoration:none';

    let repo_link2 = createElem('img');
    repo_link2.setAttribute('src', 'util/github_png.webp');
    repo_link2.addEventListener('click', () => window.open('https://github.com/jkka777/cronometer-clone'));
    repo_link2.style.cssText += 'height:26px;width:26px;cursor:pointer';

    p2_innerDiv.append(p2_link, repo_link2);

    p2_1.append(p2_name, p2_img, p2_innerDiv);

    let p2_2 = createElem('div');
    p2_2.setAttribute('id', 'project-box2');

    let div2_1 = createElem('div');

    let project_details_2 = createElem('h4');
    project_details_2.textContent = 'Features';
    project_details_2.style.textDecoration = 'underline';

    let project_featuers_2 = createElem('p');
    project_featuers_2.textContent = 'cronometer is an application where one can track the nutrition and health wellness. We can register our food intake, measure calories and control the diet. This clone features Signup, Login, Blogs, Support, Food tracking.'

    div2_1.append(project_details_2, project_featuers_2);

    let div2_2 = createElem('div');

    let pt_2_1 = createElem("h4");
    pt_2_1.textContent = 'Languages';
    pt_2_1.style.textDecoration = 'underline';

    let lang_div_2 = createElem('div');
    lang_div_2.setAttribute('id', 'lang-div-1');

    let html_logo_2 = createElem('img');
    html_logo_2.src = 'util/html.webp';

    let css_logo_2 = createElem('img');
    css_logo_2.src = 'util/css.webp';

    let js_logo_2 = createElem('img');
    js_logo_2.src = 'util/javascript.webp';

    lang_div_2.append(html_logo_2, css_logo_2, js_logo_2);

    let pt_2_2 = createElem('h4');
    pt_2_2.textContent = 'Tools';
    pt_2_2.style.textDecoration = 'underline';

    let tool_div_2 = createElem('div');
    tool_div_2.setAttribute('id', 'tool-div-1');
    let vs_code_logo_2 = createElem('img');
    vs_code_logo_2.src = 'util/vscode.webp';

    let git_logo_2 = createElem('img');
    git_logo_2.src = 'util/github_png.webp';

    tool_div_2.append(vs_code_logo_2, git_logo_2);

    div2_2.append(pt_2_1, lang_div_2, pt_2_2, tool_div_2);

    p2_2.append(div2_1, div2_2);

    p2.append(p2_1, p2_2);

    /*----------------------------------------project 3----------------------------------------*/

    let p3 = createElem('div');

    let p3_1 = createElem('div');
    p3_1.setAttribute('id', 'project-box1');

    let p3_name = createElem('h4');
    p3_name.textContent = 'Clockify-me Clone';

    let p3_img = createElem('img');
    p3_img.src = 'util/p3_img.png';

    let p3_innerDiv = createElem('div');

    let p3_link = createElem('a');
    p3_link.setAttribute('href', 'https://clockify-me-cloned.netlify.app/');
    p3_link.setAttribute('target', '_blank');
    p3_link.textContent = 'Deployment';
    p3_link.style.cssText += 'text-decoration:none';

    let repo_link3 = createElem('img');
    repo_link3.setAttribute('src', 'util/github_png.webp');
    repo_link3.addEventListener('click', () => window.open('https://github.com/jkka777/clockify-clone'));
    repo_link3.style.cssText += 'height:26px;width:26px;cursor:pointer';

    p3_innerDiv.append(p3_link, repo_link3);

    p3_1.append(p3_name, p3_img, p3_innerDiv);

    let p3_2 = createElem('div');
    p3_2.setAttribute('id', 'project-box2');

    let div3_1 = createElem('div');

    let project_details_3 = createElem('h4');
    project_details_3.textContent = 'Features';
    project_details_3.style.textDecoration = 'underline';

    let project_featuers_3 = createElem('p');
    project_featuers_3.textContent = 'Clockify.me is a time tracking application, where an user can keep track of time for the projects and its related management. This clone features Signup, Login, Dashboard, Project management, Payments.'

    div3_1.append(project_details_3, project_featuers_3);

    let div3_2 = createElem('div');

    let pt_3_1 = createElem("h4");
    pt_3_1.textContent = 'Languages';
    pt_3_1.style.textDecoration = 'underline';

    let lang_div_3 = createElem('div');
    lang_div_3.setAttribute('id', 'lang-div-1');

    let html_logo_3 = createElem('img');
    html_logo_3.src = 'util/html.webp';

    let css_logo_3 = createElem('img');
    css_logo_3.src = 'util/css.webp';

    let js_logo_3 = createElem('img');
    js_logo_3.src = 'util/javascript.webp';

    lang_div_3.append(html_logo_3, css_logo_3, js_logo_3);

    let pt_3_2 = createElem('h4');
    pt_3_2.textContent = 'Tools';
    pt_3_2.style.textDecoration = 'underline';

    let tool_div_3 = createElem('div');
    tool_div_3.setAttribute('id', 'tool-div-1');
    let vs_code_logo_3 = createElem('img');
    vs_code_logo_3.src = 'util/vscode.webp';

    let git_logo_3 = createElem('img');
    git_logo_3.src = 'util/github_png.webp';

    let npm_logo_3 = createElem('img');
    npm_logo_3.src = 'util/npm.webp';

    let heroku_logo_3 = createElem('img');
    heroku_logo_3.src = 'util/heroku.webp';

    tool_div_3.append(vs_code_logo_3, git_logo_3, npm_logo_3, heroku_logo_3);

    div3_2.append(pt_3_1, lang_div_3, pt_3_2, tool_div_3);

    p3_2.append(div3_1, div3_2);

    p3.append(p3_1, p3_2);


    /*----------------------------------------project 4----------------------------------------*/

    let p4 = createElem('div');

    let p4_1 = createElem('div');
    p4_1.setAttribute('id', 'project-box1');

    let p4_name = createElem('h4');
    p4_name.textContent = 'Crime Information Management System - console based application';

    let p4_img = createElem('img');
    p4_img.src = 'util/CIMS.png';

    let p4_innerDiv = createElem('div');

    let p4_link = createElem('a');
    p4_link.setAttribute('href', 'https://drive.google.com/file/d/12L2GOSCW6DB18bJjlaH4liMQo6m_H_bM/view');
    p4_link.setAttribute('target', '_blank');
    p4_link.textContent = 'Video link';
    p4_link.style.cssText += 'text-decoration:none';

    let repo_link4 = createElem('img');
    repo_link4.setAttribute('src', 'util/github_png.webp');
    repo_link4.addEventListener('click', () => window.open('https://github.com/jkka777/CIMS-Crime-Information-and-Management-System-'));
    repo_link4.style.cssText += 'height:26px;width:26px;cursor:pointer';

    p4_innerDiv.append(p4_link, repo_link4);

    p4_1.append(p4_name, p4_img, p4_innerDiv);

    let p4_2 = createElem('div');
    p4_2.setAttribute('id', 'project-box2');

    let div4_1 = createElem('div');

    let project_details_4 = createElem('h4');
    project_details_4.textContent = 'Features';
    project_details_4.style.textDecoration = 'underline';

    let project_featuers_4 = createElem('p');
    project_featuers_4.textContent = 'Crime information management system is a console based application which registers the crime and its related information and stores in the SQL database.'

    div4_1.append(project_details_4, project_featuers_4);

    let div4_2 = createElem('div');

    let pt_4_1 = createElem("h4");
    pt_4_1.textContent = 'Languages';
    pt_4_1.style.textDecoration = 'underline';

    let lang_div_4 = createElem('div');
    lang_div_4.setAttribute('id', 'lang-div-1');

    let html_logo_4 = createElem('img');
    html_logo_4.src = 'util/java.webp';

    let css_logo_4 = createElem('img');
    css_logo_4.src = 'util/mysql.webp';

    // let js_logo_4 = createElem('img');
    // js_logo_4.src = 'util/javascript.webp';

    lang_div_4.append(html_logo_4, css_logo_4);

    let pt_4_2 = createElem('h4');
    pt_4_2.textContent = 'Tools';
    pt_4_2.style.textDecoration = 'underline';

    let tool_div_4 = createElem('div');
    tool_div_4.setAttribute('id', 'tool-div-1');
    let vs_code_logo_4 = createElem('img');
    vs_code_logo_4.src = 'util/spring.webp';

    let git_logo_4 = createElem('img');
    git_logo_4.src = 'util/github_png.webp';

    let npm_logo_4 = createElem('img');
    npm_logo_4.src = 'util/npm.webp';

    let heroku_logo_4 = createElem('img');
    heroku_logo_4.src = 'util/heroku.webp';

    tool_div_4.append(vs_code_logo_4, git_logo_4);

    div4_2.append(pt_4_1, lang_div_4, pt_4_2, tool_div_4);

    p4_2.append(div4_1, div4_2);

    p4.append(p4_1, p4_2);



    prj_main.append(p1, p2, p3, p4);

    prj_content.append(prj_main);

    mainContent.append(prj_content);

    catchElem('.buttons-nav>div:nth-child(3)>button').style.cssText += 'border-radius:5px;background-color:black;color:white;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(1)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(2)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(4)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)>a>button').style.cssText += 'border-radius:5px;background-color:yellow;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)').style.cssText += 'border-radius:5px;background-color:yellow;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)>a').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    // catchElem('.buttons-nav>div:nth-child(6)>a>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

};

catchElem('.buttons-nav>div:nth-child(3)>button').addEventListener('click', projectsPage);

let contactPage = () => {

    mainContent.innerHTML = '';

    mainContent.style.height = '980px';

    let contact_div = createElem('div');
    contact_div.setAttribute('class', 'contact-content');

    let div1 = createElem('div');

    let contact_text = createElem('h2');
    contact_text.textContent = 'Contact Me';

    div1.append(contact_text);

    let div2 = createElem('div');

    let inner_div1 = createElem('div');

    let text1 = createElem('p');
    text1.textContent = 'Want to collaborate?';
    let text2 = createElem('p');
    text2.textContent = 'Contact me through these mediums.';
    let text3 = createElem('p');
    text3.textContent = 'Looking forward to work with you.';

    inner_div1.append(text1, text2, text3);

    let inner_div2 = createElem('div');

    let mail_div = createElem('div');
    mail_div.setAttribute('id', 'mail');

    let mail_img = createElem('img');
    mail_img.src = 'util/gmail.webp';

    let mail_p = createElem('p');
    let mail_link = createElem('a');
    mail_link.href = 'mailto:abhiram.kishore@gmail.com';
    mail_link.textContent = 'abhiram.kishore@gmail.com';
    mail_p.append(mail_link);

    mail_div.append(mail_img, mail_p);

    let link_div = createElem('div');
    link_div.setAttribute('id', 'link');

    let link_img = createElem('img');
    link_img.src = 'util/linkedin.webp';

    let link_link = createElem('a');
    link_link.textContent = 'LinkedIn';
    link_link.href = 'https://www.linkedin.com/in/kishore-j-8986bb235/';
    link_link.target = '_blank';

    link_div.append(link_img, link_link);

    let git_div = createElem('div');
    git_div.setAttribute('id', 'git');

    let git_img = createElem('img');
    git_img.src = 'util/github_png.webp';

    let git_link = createElem('a');
    git_link.textContent = 'GitHub';
    git_link.href = 'https://github.com/jkka777';
    git_link.target = '_blank';

    git_div.append(git_img, git_link);

    let phn_div = createElem('div');
    phn_div.setAttribute('id', 'phone');

    let phn_img = createElem('img');;
    phn_img.src = 'util/phone.webp';

    let phn_p = createElem('p');
    let phn_link = createElem('a');
    phn_link.href = 'tel:+919440940244';
    phn_link.textContent = '+91 9440 940 244';
    phn_p.append(phn_link);

    phn_div.append(phn_img, phn_p);

    inner_div2.append(mail_div, link_div, git_div, phn_div);

    div2.append(inner_div1, inner_div2);

    contact_div.append(div1, div2);

    mainContent.append(contact_div);

    // styling part //

    catchElem('.buttons-nav>div:nth-child(4)>button').style.cssText += 'border-radius:5px;background-color:black;color:white;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(1)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(2)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(3)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)>a>button').style.cssText += 'border-radius:5px;background-color:yellow;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)').style.cssText += 'border-radius:5px;background-color:yellow;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)>a').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    // catchElem('.buttons-nav>div:nth-child(6)>a>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';
};

catchElem('.buttons-nav>div:nth-child(4)>button').addEventListener('click', contactPage);

let resume = () => {

    window.open('https://drive.google.com/file/d/1BjBdLoDuAGOOCp55gpwQ_Ap3tTu12CW2/view?usp=sharing');

    // styling part //

    // let resume_btn = catchElem('.buttons-nav>div:nth-child(5)>a>button');
    // resume_btn.style.cssText += 'border-radius:5px;background-color:black;color:white;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)>a>button').style.cssText += 'border-radius:5px;background-color:black;color:white;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(5)').style.cssText += 'border-radius:5px;background-color:black;color:white;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(1)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(2)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(3)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    catchElem('.buttons-nav>div:nth-child(4)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

    // catchElem('.buttons-nav>div:nth-child(5)>button').style.cssText += 'border-radius:5px;background-color:transparent;color:black;font-weight:600';

};

catchElem('.buttons-nav>div:nth-child(5)>a>button').addEventListener('click', resume);

let toLinkdIn = () => window.open('https://www.linkedin.com/in/kishore-j-8986bb235/');
catchElem('.footer>div:nth-child(1)').addEventListener('click', toLinkdIn);

let toGitHub = () => window.open('https://github.com/jkka777');
catchElem('.footer>div:nth-child(2)').addEventListener('click', toGitHub);

let toTwitter = () => window.open('https://twitter.com/hxh_kishore');
catchElem('.footer>div:nth-child(3)').addEventListener('click', toTwitter);