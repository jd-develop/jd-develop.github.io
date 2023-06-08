const params = new URLSearchParams(document.location.search);
const project_id = params.get("id");

const project = projects[project_id];

const project_wrapper = document.querySelector("main");
console.log(project.tags);
project_wrapper.innerHTML = `
<img src="images/projects/mixer.png" />
<div class="project__details">
    <h2>${project.name}</h2>
    <div class="project__languages">${project.languages.join(" · ")}</div>

    <p class="project__description">${project.description}</p>

    ${
		project.tags.length
			? `<div class="tags">${project.tags.map((tag) => `<div class="tag" style="--tag-bg: ${tags_color?.[tag] || "grey"}">${tag}</div>`).join("")}</div>`
			: ""
	}
</div>
`;
