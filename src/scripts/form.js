
const body = document.getElementById("body")
const popup = document.getElementById("form_58f7bdc3")
const background = document.getElementById("background_58f7bdc3")
let isView = true

function openForm() {
	popup.classList.add("form_58f7bdc3_active")
	background.classList.add("background_58f7bdc3_active")
	body.style.overflow = "hidden"
}

function closeForm() {
	popup.classList.remove("form_58f7bdc3_active")
	background.classList.remove("background_58f7bdc3_active")
	body.style.overflow = "auto"
}

function submitForm() {
	console.log("Submit")

	closeForm()
}