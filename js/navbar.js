const wrapper = document.createElement("div");
wrapper.classList.add("navbar");

// Left
const menu_list = document.createElement("div");
menu_list.classList.add("menu__list");

const links = [
	{
		text: "Accueil",
		url: "/",
	},
	{
		text: "Informations utiles",
		url: "infos.html",
	},
	{
		text: "Mon GitHub",
		url: "https://github.com/jd-develop",
		target: "_blank",
	},
];
const currentPath = new URL(window.location.href).pathname;
links.forEach((link) => {
	const link_element = document.createElement("a");
	link_element.href = link.url;
	link_element.textContent = link.text;

	if (link.target) link_element.target = link.target;

	if (currentPath.endsWith(link.url)) link_element.classList.add("exact-active");

	menu_list.appendChild(link_element);
});
wrapper.appendChild(menu_list);

document.body.insertBefore(wrapper, document.body.firstChild);
