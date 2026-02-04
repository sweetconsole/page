
const artist_list = document.getElementById('other_list_artist_58f7bdc3');

const artists = [
	{
		circle: null,
		isPlaying: false,
		isShowing: false,
		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
		photo: "./image/other_artist.png",
		name: "Сергей Чонишвили",
		price: 10000,
		description: "Федеральный диктор, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
		characters_photo: [
			"./image/photo_other.png",
			"./image/photo_other.png",
		]
	},
	{
		circle: null,
		isPlaying: false,
		isShowing: false,
		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5f68d0efd410d.mp3"),
		photo: "./image/other_artist.png",
		name: "Сергей Петросян",
		price: 9000,
		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
		characters_photo: [
			"./image/photo_other.png",
			"./image/photo_other.png",
		]
	},
	{
		circle: null,
		isPlaying: false,
		isShowing: false,
		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
		photo: "./image/other_artist.png",
		name: "Сергей Петросян",
		price: 9000,
		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
		characters_photo: [
			"./image/photo_other.png",
			"./image/photo_other.png",
		]
	},
	{
		circle: null,
		isPlaying: false,
		isShowing: false,
		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
		photo: "./image/other_artist.png",
		name: "Сергей Петросян",
		price: 9000,
		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
		characters_photo: [
			"./image/photo_other.png",
			"./image/photo_other.png",
		]
	},
	{
		circle: null,
		isPlaying: false,
		isShowing: false,
		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
		photo: "./image/other_artist.png",
		name: "Сергей Петросян",
		price: 9000,
		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
		characters_photo: [
			"./image/photo_other.png",
			"./image/photo_other.png",
		]
	},
	{
		circle: null,
		isPlaying: false,
		isShowing: false,
		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
		photo: "./image/other_artist.png",
		name: "Сергей Петросян",
		price: 9000,
		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
		characters_photo: [
			"./image/photo_other.png",
			"./image/photo_other.png",
		]
	},
	{
		circle: null,
		isPlaying: false,
		isShowing: false,
		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
		photo: "./image/other_artist.png",
		name: "Сергей Петросян",
		price: 9000,
		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
		characters_photo: [
			"./image/photo_other.png",
			"./image/photo_other.png",
		]
	},
]

artists.forEach((artist, key) => {
	artist_list.innerHTML += `
		<li class="swiper-slide other_artist_58f7bdc3" id="artist_${key}">
			<div class="other_artist_menu_58f7bdc3">
				<div class="other_artist_menu_buttons_58f7bdc3">
					<button class="other_artist_menu_button_58f7bdc3 other_artist_menu_button_like_58f7bdc3">
						<img src="./image/like.svg" alt=""/>
					</button>

					<button class="other_artist_menu_button_58f7bdc3">
						<img src="./image/download.svg" alt=""/>
					</button>
				</div>

				<p class="other_artist_menu_time_58f7bdc3" id="time_${key}"></p>

				<button class="other_artist_menu_button_58f7bdc3">
					<img src="./image/corona.svg" alt=""/>
				</button>
			</div>

			<div class="other_artist_player_58f7bdc3" id="audioOnePlayer">
				<button class="other_artist_player_button_58f7bdc3" onClick="togglePlay('${key}')">
					<img class="other_artist_player_player_58f7bdc3" id="button_${key}" src="./image/play.svg" alt=""/>
				</button>

				<img class="other_artist_player_photo_58f7bdc3" src="${artist.photo}" alt=""/>
				<div class="other_artist_player_bar_58f7bdc3" id="bar_${key}"></div>
			</div>

			<div class="other_artist_info_58f7bdc3">
				<h2 class="other_artist_name_58f7bdc3">${artist.name}</h2>
				<p class="other_artist_price_58f7bdc3">
					Цена от <span class="other_artist_price_bold_58f7bdc3">${artist.price}₽</span>
				</p>
			</div>

			<p class="other_artist_description_58f7bdc3">${artist.description}</p>

			<button class="other_artist_button_58f7bdc3">Связаться</button>
		</li>
	`
})

artists.forEach((artist, key) => {
	const audio = artist.audio

	artist.circle = new ProgressBar.Circle(`#bar_${key}`, {
		color: '#C1492E',
		strokeWidth: 5,
		trailWidth: 5,
		trailColor: '#fff',
		duration: 100,
		svgStyle: {
			display: 'block',
			width: '100%'
		},
	});

	document.getElementById(`bar_${key}`).addEventListener('click', function(e) {
		const rect = this.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		let angle = Math.atan2(y - centerY, x - centerX);
		angle += Math.PI / 2;
		if (angle < 0) angle += 2 * Math.PI;

		const progress = angle / (2 * Math.PI);

		audio.currentTime = progress * audio.duration;
		artist.circle.set(progress);
		changeView(key)
	});

	audio.addEventListener('timeupdate', function() {
		const progress = audio.currentTime / audio.duration;

		artists[key].circle.animate(progress);
		updateTime(key);
	});
})

function togglePlay(id) {
	artists.forEach((artist, key) => {
		const buttonImage = document.getElementById(`button_${key}`);
		const block = document.getElementById(`artist_${key}`);

		if (key.toString() !== id) {
			buttonImage.classList = "other_artist_player_player_58f7bdc3"
			buttonImage.src = "./image/play.svg"
			block.classList.remove("other_artist_active_58f7bdc3");
			artist.isPlaying = false;
			artist.audio.pause();
		} else {
			if (artists[id].isPlaying) {
				artists[id].audio.pause();
				buttonImage.classList = "other_artist_player_player_58f7bdc3"
				buttonImage.src = "./image/play.svg"
				block.classList.remove("other_artist_active_58f7bdc3");
			} else {
				artists[id].audio.play();
				buttonImage.classList = "other_artist_player_pause_58f7bdc3"
				buttonImage.src = "./image/pause.png"
				block.classList.add("other_artist_active_58f7bdc3");
			}

			artists[id].isPlaying = !artists[id].isPlaying;
		}
	})
}

function updateTime(id) {
	const current = formatTime(artists[id].audio.currentTime);
	document.getElementById(`time_${id}`).textContent = `${current}`;
}

function formatTime(seconds) {
	if (isNaN(seconds)) return '0:00';
	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${mins}:${secs.toString().padStart(2, '0')}`;
}
const mouth_days = new Swiper(".calendar_month_days_58f7bdc3", {
	slidesPerView: 7,
	spaceBetween: 4,
	grid: {
		rows: 5,
		fill: "row"
	},
	navigation: {
		nextEl: '.calendar_button_next_month_58f7bdc3',
		prevEl: '.calendar_button_prev_month_58f7bdc3',
	}
})


const characters = new Swiper('.info_list_characters_58f7bdc3', {
	loop: true,
	spaceBetween: 15,
	slidesPerView: 8,
	breakpoints: {
		1280: {
			spaceBetween: 15,
			slidesPerView: 9,
		}
	}
});

const video_list = new Swiper('.info_list_video_58f7bdc3', {
	direction: 'horizontal',
	slidesPerView: 1,
	navigation: {
		nextEl: '.info_swiper_button_next_video_58f7bdc3',
		prevEl: '.info_swiper_button_prev_video_58f7bdc3',
	},
});

const photo_list = new Swiper('.info_list_photo_58f7bdc3', {
	slidesPerView: 4,
	grid: {
		rows: 2,
		fill: "row"
	},
	spaceBetween: 10,
	navigation: {
		nextEl: '.info_swiper_button_next_photo_58f7bdc3',
		prevEl: '.info_swiper_button_prev_photo_58f7bdc3',
	},
});

const comments_list = new Swiper('.info_comments_list_58f7bdc3', {
	slidesPerView: 1,
	spaceBetween: 20,
	grid: {
		rows: 5,
		fill: "row"
	},
	pagination: {
		el: '.info_comment_pagination_58f7bdc3',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
	navigation: {
		nextEl: '.info_swiper_button_next_comments_58f7bdc3',
		prevEl: '.info_swiper_button_prev_comments_58f7bdc3',
	},
});

const movies_list = new Swiper('.info_list_movies_58f7bdc3', {
	slidesPerView: 5,
	spaceBetween: 20,
	loop: true
});

const other_artist = new Swiper(".other_artists_58f7bdc3", {
	slidesPerView: 2,
	spaceBetween: 10,
	navigation: {
		nextEl: '.info_swiper_button_next_photo_58f7bdc3',
		prevEl: '.info_swiper_button_prev_photo_58f7bdc3',
	},

	breakpoints: {
		810: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1280: {
			slidesPerView: 6,
			spaceBetween: 30,
		},
	}
})