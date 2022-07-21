window.addEventListener("load", function (e) {

    let divSkills = document.getElementById("div-skills");
    let skills = [
        { name: "HTML", score: 0.8 },
        { name: "css", score: 0.8 },
        { name: "JavaScript", score: 0.9 },
        { name: "Vue.js", score: 0.7 },
        { name: "Java", score: 0.8 },
        { name: "Spring Boot", score: 0.8 },
        { name: "Python", score: 0.7 },
        { name: "FastAPI", score: 0.7 },
        { name: "SQL", score: 0.8 },
        { name: "Git, Github", score: 0.7 }        
    ]

    for (let skill of skills) {    

        let template = `
            <span class="span-skill">${skill.name}</span>
            <div class="div-progress-bar">
                <div class="div-skill-progress" id="div-progress-${skill.name}"></div>
            </div>      
        `

        let divSkill = document.createElement("div");
        divSkill.classList.add("div-skill");
        divSkill.innerHTML += template;
        divSkills.appendChild(divSkill);         
        let divSkillProgress = document.getElementById(`div-progress-${skill.name}`);
        let width = skill.score*100;
        let barWidth = `${width.toString()}%`;
        divSkillProgress.setAttribute("style", `width: ${barWidth}`);

    }
})