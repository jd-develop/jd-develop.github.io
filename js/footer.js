// Footer custom element
class Footer extends HTMLDivElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

		const footer = document.createElement("div");
		footer.classList.add("footer");

		footer.innerHTML = `Site web sous license GNU GPL3.<br>
		Créé par un <a href="https://bepo.fr">bépoète</a> qui fait du
		<a href="https://bepo.fr/wiki/Installation">prosélytisme</a>.`;

		shadow.appendChild(footer);

		// Style
		const style = document.createElement("style");
		style.textContent = `
		.footer {
			margin-top: auto;
			background-color: var(--primary);
			color: var(--on-primary);
			width: 100%;
			box-sizing: border-box;
			padding: 1rem;
			text-align: center;
		}
		a {
			color: var(--on-primary);
		}
		`;
		shadow.appendChild(style);
	}
}

customElements.define("custom-footer", Footer, { extends: "div" });
