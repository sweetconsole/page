const videoPopup = document.getElementById("video_player_58f7bdc3")
const videoPlayer= document.getElementById("video_player_src_58f7bdc3")

function openVideoPopup(url) {
	videoPopup.classList.add("video_player_58f7bdc3_active")
	background_58f7bdc3.classList.add("background_58f7bdc3_active")
	videoPlayer.src = url
	body.style.overflow = "hidden"
}

function closeVideoPopup() {
	const video = videoPlayer.getElementsByTagName("video")[0];

	videoPopup.classList.remove("video_player_58f7bdc3_active")
	background_58f7bdc3.classList.remove("background_58f7bdc3_active")
	body.style.overflow = "auto"

	videoPlayer.contentWindow.postMessage(JSON.stringify({type: 'player:pause',data: {}}), '*');
}
