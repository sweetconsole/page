
const header = document.getElementById("header_58f7bdc3");

window.addEventListener("scroll", () => {
	if (window.pageYOffset !== 0) {
		header.classList.add("header_active_58f7bdc3");
	} else {
		header.classList.remove("header_active_58f7bdc3");
	}
})