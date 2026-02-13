
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
		characters_photo: [
			"./image/other.png",
			"./image/other.png",
			"./image/other.png",
		],
		gallery: [
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
		]
	},
	{
		circle: null,
		isPlaying: false,
		isShowing: false,
		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
		photo: "./image/other_artist.png",
		name: "Сергей Чонишвили",
		price: 10000,
		characters_photo: [
			"./image/other.png",
			"./image/other.png",
			"./image/other.png",
		],
		gallery: [
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
		]
	},
	{
		circle: null,
		isPlaying: false,
		isShowing: false,
		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
		photo: "./image/other_artist.png",
		name: "Сергей Чонишвили",
		price: 10000,
		characters_photo: [
			"./image/other.png",
			"./image/other.png",
			"./image/other.png",
		],
		gallery: [
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
		]
	},
	{
		circle: null,
		isPlaying: false,
		isShowing: false,
		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
		photo: "./image/other_artist.png",
		name: "Сергей Чонишвили",
		price: 10000,
		characters_photo: [
			"./image/other.png",
			"./image/other.png",
			"./image/other.png",
		],
		gallery: [
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
			"./image/gallery.png",
		]
	},
]

artists.forEach((artist, key) => {
	artist_list.innerHTML += `
		<li class="swiper-slide card_58f7bdc3" id="artist_${key}">
      <div class="bookmark_58f7bdc3">
        <ul class="artists_58f7bdc3">
          ${artist.characters_photo.map((character, index) => (
						`
							<li class="artist_58f7bdc3">
								<img class="artist_photo" src=${character} alt="" >
							</li>
						`
					)).join('')}
        </ul>

        <p class="bookmark_title_58f7bdc3">Звёздный диктор!</p>
        <p class="bookmark_text_58f7bdc3">Федеральный диктор, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, </p>
      </div>
        <button class="like_58f7bdc3">
        	<img class="like_icon_hover_58f7bdc3" src="./image/like_fill.svg" alt="">
          <img class="like_icon_58f7bdc3" src="./image/like_border.svg" alt="">
        </button>

        <div class="profile_58f7bdc3">
          <div class="player_58f7bdc3" id="audioOnePlayer">
            <button class="player_button_58f7bdc3" onClick="togglePlay('${key}')">
              <img class="player_button_play_58f7bdc3" id="button_${key}" src="./image/play.svg" alt="">
            </button>

            <img class="player_photo_58f7bdc3" src=${artist.photo} alt="" >
            <div class="player_bar_58f7bdc3" id="bar_${key}"></div>
          </div>

          <div class="card_info_58f7bdc3">
            <div class="artist_name_58f7bdc3">
              <a class="artist_name_text_58f7bdc3" href="#">${artist.name}</a>
              <img class="artist_name_icon_58f7bdc3" src="./image/corona.svg" alt="" >
            </div>

            <ul class="statistics_list_58f7bdc3">
              <li class="statistics_58f7bdc3">
                <p class="statistics_text_58f7bdc3 stars_text_58f7bdc3">4.9</p>
                <div class="star_icons_58f7bdc3">
                  <img class="star_58f7bdc3" src="./image/star.svg" alt="">
                  <img class="star_58f7bdc3" src="./image/star.svg" alt="">
                  <img class="star_58f7bdc3" src="./image/star.svg" alt="">
                  <img class="star_58f7bdc3" src="./image/star.svg" alt="">
                  <img class="star_58f7bdc3" src="./image/star.svg" alt="">
                </div>
              </li>

              <li class="statistics_58f7bdc3">
                <img class="reviews_icon_58f7bdc3" src="./image/review.svg" alt="">
                <p class="statistics_text_58f7bdc3">100+ отзывов</p>
              </li>

              <li class="statistics_58f7bdc3">
                <img class="location_icon_58f7bdc3" src="./image/location.svg" alt="">
                <p class="statistics_text_58f7bdc3">г. Москва, Санкт-Петербург</p>
              </li>
            </ul>

            <ul class="tags_58f7bdc3">
              <li class="tag_check_58f7bdc3">
                <img class="tag_check_icon_58f7bdc3" src="./image/check.svg" alt="">
              </li>

              <li class="tag_58f7bdc3">
                <img class="tag_icon_58f7bdc3" src="./image/rings.svg" alt="">
                <p class="tag_title_58f7bdc3">Свадьба</p>
              </li>
              <li class="tag_58f7bdc3">
                <img class="tag_icon_58f7bdc3" src="./image/confetti.svg" alt="">
                <p class="tag_title_58f7bdc3">Корпоратив</p>
              </li>
              <li class="tag_58f7bdc3">
                <img class="tag_icon_58f7bdc3" src="./image/ball.svg" alt="">
                <p class="tag_title_58f7bdc3">Вечеринка</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="swiper gallery_58f7bdc3 gallery_${key}_58f7bdc3">
          <ul class="swiper-wrapper">
          	${artist.gallery.map((item, index) => (
							`
								<li class="swiper-slide gallery_item_58f7bdc3">
		              <img class="gallery_image_58f7bdc3" src=${item} alt="">
		
		              <button class="gallery_button_58f7bdc3">
		                <img class="gallery_button_icon_58f7bdc3" src="./image/play.svg" alt="">
		              </button>
		            </li>
							`
						)).join('')}
          </ul>
        </div>

        <div class="card_footer_58f7bdc3">
          <div class="card_price_58f7bdc3">
            <img class="card_price_icon_58f7bdc3" src="./image/price.svg" alt="">
            <p class="card_price_text_desktop_58f7bdc3">
            	 Цена от 
            	<span class="card_price_text_bold_58f7bdc3">${artist.price} ₽</span>
            </p>
            <p class="card_price_text_mobile_58f7bdc3">
            	 От 
            	<span class="card_price_text_bold_58f7bdc3">${artist.price}₽</span>
            </p>
          </div>

          <div class="card_menu_58f7bdc3">
            <button class="card_button_58f7bdc3 card_button_border_58f7bdc3">Проверить дату</button>
            <button class="card_button_58f7bdc3 card_button_full_58f7bdc3" onclick="openForm()">Заказать</button>
          </div>
        </div>
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

	const gallery = new Swiper(`.gallery_${key}_58f7bdc3`, {
		direction: 'horizontal',
		loop: true,
		spaceBetween: 10,
		slidesPerView: 2,
		breakpoints: {
			810: {
				spaceBetween: 12,
				slidesPerView: 4,
			}
		}
	})

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
			buttonImage.classList = "player_button_play_58f7bdc3"
			buttonImage.src = "./image/play.svg"
			block.classList.remove("other_artist_active_58f7bdc3");
			artist.isPlaying = false;
			artist.audio.pause();
		} else {
			if (artists[id].isPlaying) {
				artists[id].audio.pause();
				buttonImage.classList = "player_button_play_58f7bdc3"
				buttonImage.src = "./image/play.svg"
				block.classList.remove("other_artist_active_58f7bdc3");
			} else {
				artists[id].audio.play();
				buttonImage.classList = "player_button_pause_58f7bdc3"
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