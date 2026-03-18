
const networksContainer = document.getElementById("networks_button_container_58f7bdc3")

let isViewNetworks = false

function viewNetworks() {
	networksContainer.classList.toggle("networks_button_container_58f7bdc3_active");
	isViewNetworks = !isViewNetworks;
}