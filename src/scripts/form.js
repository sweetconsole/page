
const body = document.getElementById("body")
const popup = document.getElementById("form_58f7bdc3")

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

document.addEventListener('DOMContentLoaded', function() {
	const container = document.querySelector('.form_select_container');
	const button = document.querySelector('.form_select');
	const selectedSpan = document.querySelector('.form_select_value');
	const customOptions = document.querySelectorAll('.form_option');
	const hiddenSelect = document.getElementById('eventSelect');

	button.addEventListener('click', function(e) {
		e.stopPropagation();
		container.classList.toggle('open');
	});

	customOptions.forEach(function(option) {
		option.addEventListener('click', function() {
			const value = this.getAttribute('data-value');
			const text = this.textContent;

			selectedSpan.textContent = text;
			selectedSpan.classList.add('form_selected_value');

			hiddenSelect.value = value;

			customOptions.forEach(function(opt) {
				opt.classList.remove('selected');
			});
			this.classList.add('selected');

			container.classList.remove('open');
		});
	});

	document.addEventListener('click', function(e) {
		if (!container.contains(e.target)) {
			container.classList.remove('open');
		}
	});

	const defaultSelected = hiddenSelect.options[hiddenSelect.selectedIndex];
	if (defaultSelected && defaultSelected.value) {
		const defaultText = defaultSelected.text;
		const defaultValue = defaultSelected.value;
		selectedSpan.textContent = defaultText;

		customOptions.forEach(function(opt) {
			if (opt.getAttribute('data-value') === defaultValue) {
				opt.classList.add('selected');
			}
		});
	} else {
		customOptions[0].classList.add('selected');
	}
});