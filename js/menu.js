// Nav custom element
class Navbar extends HTMLDivElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

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

		shadow.appendChild(wrapper);

		// Style
		const style = document.createElement("style");
		style.textContent = `
		.navbar {
			display: flex;
			align-items: center;
			padding: 1rem;
			border-bottom: 1px solid var(--on-background);
		}
		a {
			color: var(--primary);
			text-decoration: none;
			font-size: 1.2rem
		}
		a.exact-active {
			color: var(--on-background);
		}
		a:hover {
			text-decoration: underline;
		}
		.menu__list {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 3rem;
		}

		.menu__list a:first-of-type {
			margin-right: auto;/*Align left*/
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.menu__list a:first-of-type::before {
			content: "";
			display: block;
			height: 2.5rem;
			aspect-ratio: 1;
			background-image: url('images/icon.png');
			background-size: contain;
			margin-right: 1rem;
		}

		@media screen and (max-width: 500px) {
			.menu__list {
				flex-direction: column;
				align-items: flex-end;
				gap: 1rem;
			}
			.menu__list a:first-of-type {
				margin-right: initial;
			}

			.navbar::before {
				content: "";
				display: block;
				height: 4rem;
				aspect-ratio: 1;
				background-image: url('images/icon.png');
				background-size: contain;
				margin-right: 1rem;
			}
			.menu__list a{
				text-align: right;
			}
			.menu__list a:first-of-type::before {
				content: "";
				display: none;
			}
		}
		`;
		shadow.appendChild(style);
	}
}

customElements.define("nav-bar", Navbar, { extends: "div" });
