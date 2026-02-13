
const videoPopup = document.getElementById("video_player_58f7bdc3")
const videoPlayer= document.getElementById("video_player_src_58f7bdc3")

function openVideoPopup(url) {
	videoPopup.classList.add("video_player_58f7bdc3_active")
	background.classList.add("background_58f7bdc3_active")
	videoPlayer.src = url
	body.style.overflow = "hidden"
}

function closeVideoPopup() {
	videoPopup.classList.remove("video_player_58f7bdc3_active")
	background.classList.remove("background_58f7bdc3_active")
	body.style.overflow = "auto"
}
