const backgroundOverlay_58f7bdc3 = document.getElementById("background_58f7bdc3")

if (backgroundOverlay_58f7bdc3) {
	backgroundOverlay_58f7bdc3.addEventListener("click", handleBackgroundClick);
} else {
	console.warn('Элемент background_58f7bdc3 не найден на странице');
}

function handleBackgroundClick () {
	closeForm()
	closeVideoPopup()
	closeMenuForm()
}