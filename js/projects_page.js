const projects_container = document.querySelector(".projects");
projects_container.innerHTML = "";

projects.forEach((project_data, index) => {
	console.log(project_data.tags.length);
	const tags_html = project_data.tags.length
		? `<div class="tags">
			${project_data.tags.map((tag) => `<div class="tag" style="--tag-bg: ${tags_color?.[tag]}">${tag}</div>`).join("")}
		  </div>`
		: "";

	projects_container.innerHTML += `
	<a href="project.html?id=${index}" class="project">
		<img src="images/projects/${project_data.cover_url}" />
		<div class="project__details">
		<div class="project__heading"><span class="project__title">${project_data.name}</span><span class="project__language">${project_data.languages[0]}</span></div>
			${tags_html}
		</div>
	</a>
	`;
});
