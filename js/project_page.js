const params = new URLSearchParams(document.location.search);
const project_id = params.get("id");

const project = projects[project_id];
document.title = project.name + " | Jean Dubois";

const project_wrapper = document.querySelector("main");
project_wrapper.innerHTML = `
<img src="images/projects/${project.cover_url}" alt="${project.name} logo"/>
<div class="project__details">
    <h2>${project.name}</h2>
    <div class="project__languages">${project.languages.join(" · ")}</div>

    <p class="project__description"><b>${project.description}</b></p>
	<p class="project__description">${project.long_description}</p>
	<p class="project__description"><b>Crédit d’image&nbsp;:</b> ${project.image_credits}</p>
	
    ${
		project.additional_links
			? `<div class="links">
			<a href="${project.github_url}" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
				</svg>Accéder au GitHub
			</a>
			${project.additional_links
					.map(
						(link) => `
                    <a href="${link.link}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>${link.label}
                    </a>`
					)
					.join("")}
                </div>`
			: ""
	}

    ${
		project.tags
			? `<div class="tags">${project.tags.map((tag) => `<div class="tag" style="--tag-bg: ${tags_color?.[tag] || "grey"}">${tag}</div>`).join("")}</div>`
			: ""
	}
</div>
`;
