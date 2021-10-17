const btn = document.querySelector(".header-body__burger-btn");
const menu = document.querySelector(".header-body__burger-menu");

btn.addEventListener("click", btnOnclick);

function btnOnclick (e) {
	document.body.classList.toggle("fixed");
	btn.classList.toggle("open");
	menu.classList.toggle("open");
}