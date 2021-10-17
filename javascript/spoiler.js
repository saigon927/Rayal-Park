 let spoilers = document.querySelectorAll(".footer-body__column_spoiler");

for (let spoiler of spoilers) {
	spoiler.addEventListener("click", spoilerOnClick);
	function spoilerOnClick(e) {
		let title = this.firstElementChild;
		let content = this.lastElementChild;
		title.classList.toggle("open");
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	}
}