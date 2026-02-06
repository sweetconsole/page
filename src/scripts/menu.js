const menu = document.getElementById("menu_58f7bdc3");
const buttonMenu = document.getElementById("header_button_menu_58f7bdc3");
let view = false

function toggleMenu() {
	if (view) {
		body.style.overflow = "auto"
	} else {
		body.style.overflow = "hidden"
	}

	buttonMenu.classList.toggle("header_button_menu_active_58f7bdc3")
	menu.classList.toggle("menu_active_58f7bdc3");
	view = !view;
}