const menu_link_1 = document.getElementById("menu_link_1");
const menu_link_2 = document.getElementById("menu_link_2");
const menu_link_3 = document.getElementById("menu_link_3");
const menu_link_4 = document.getElementById("menu_link_4");

let isViewMenuLinks = false;

const header = document.getElementById("header_58f7bdc3");

window.addEventListener("scroll", () => {
	if (window.pageYOffset !== 0) {
		header.classList.add("header_active_58f7bdc3");
	} else {
		header.classList.remove("header_active_58f7bdc3");
	}
})

function toggle(id) {
	menu_link_1.classList.remove("header_bottom_navigation_block_active");
	menu_link_2.classList.remove("header_bottom_navigation_block_active");
	menu_link_3.classList.remove("header_bottom_navigation_block_active");
	menu_link_4.classList.remove("header_bottom_navigation_block_active");

	if (!isViewMenuLinks) {
		const menu = document.getElementById(id)

		menu.classList.add("header_bottom_navigation_block_active");
		isViewMenuLinks = true;
	} else {
		isViewMenuLinks = false;
	}
}