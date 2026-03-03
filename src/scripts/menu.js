const menu_58f7bdc3 = document.getElementById("menu_58f7bdc3");
const buttonMenu_58f7bdc3 = document.getElementById("header_button_menu_58f7bdc3");
let viewMenu_58f7bdc3 = false

function toggleMenu() {
	if (viewMenu_58f7bdc3) {
		body.style.overflow = "auto"
	} else {
		body.style.overflow = "hidden"
	}

	buttonMenu_58f7bdc3.classList.toggle("header_button_menu_active_58f7bdc3")
	menu_58f7bdc3.classList.toggle("menu_active_58f7bdc3");
	viewMenu_58f7bdc3 = !viewMenu_58f7bdc3;
}