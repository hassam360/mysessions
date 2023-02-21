const listViewEL = document.querySelector(".listView");


allSkills();



async function allSkills() {
    let response = await fetch("skills.json");
    let fromJson = await response.json();
    showSkills(fromJson);
}

function showSkills(skills) {
    skills.forEach(skill => {
        const { total_session, name } = skill;
        console.log(name);
        skillCard = document.createElement("div");
        skillCard.classList.add("card");

        skillCard.innerHTML = `
            <h1> <a href="skill.html" target="_parent"> ${name} </a></h1>
            <h2> ${total_session} </h2>
            `;
        listViewEL.appendChild(skillCard)
    });
}
