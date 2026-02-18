
const menuForm = document.getElementById("menu_form_58f7bdc3")

function openMenuForm() {
	menuForm.classList.add("form_58f7bdc3_active")
	background.classList.add("background_58f7bdc3_active")
	body.style.overflow = "hidden"
}

function closeMenuForm() {
	menuForm.classList.remove("form_58f7bdc3_active")
	background.classList.remove("background_58f7bdc3_active")
	body.style.overflow = "auto"
}

function submitMenuForm() {
	console.log("Submit")

	closeForm()
}