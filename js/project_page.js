const params = new URLSearchParams(document.location.search);
const project_id = params.get("id");

console.log(project_id, projects[project_id]);
    