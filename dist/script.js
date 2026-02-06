//
// const artist_list = document.getElementById('other_list_artist_58f7bdc3');
//
// const artists = [
// 	{
// 		circle: null,
// 		isPlaying: false,
// 		isShowing: false,
// 		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
// 		photo: "./image/other_artist.png",
// 		name: "Сергей Чонишвили",
// 		price: 10000,
// 		description: "Федеральный диктор, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
// 		characters_photo: [
// 			"./image/photo_other.png",
// 			"./image/photo_other.png",
// 		]
// 	},
// 	{
// 		circle: null,
// 		isPlaying: false,
// 		isShowing: false,
// 		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5f68d0efd410d.mp3"),
// 		photo: "./image/other_artist.png",
// 		name: "Сергей Чонишвили",
// 		price: 9000,
// 		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
// 		characters_photo: [
// 			"./image/photo_other.png",
// 			"./image/photo_other.png",
// 		]
// 	},
// 	{
// 		circle: null,
// 		isPlaying: false,
// 		isShowing: false,
// 		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
// 		photo: "./image/other_artist.png",
// 		name: "Сергей Чонишвили",
// 		price: 9000,
// 		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
// 		characters_photo: [
// 			"./image/photo_other.png",
// 			"./image/photo_other.png",
// 		]
// 	},
// 	{
// 		circle: null,
// 		isPlaying: false,
// 		isShowing: false,
// 		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
// 		photo: "./image/other_artist.png",
// 		name: "Сергей Чонишвили",
// 		price: 9000,
// 		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
// 		characters_photo: [
// 			"./image/photo_other.png",
// 			"./image/photo_other.png",
// 		]
// 	},
// 	{
// 		circle: null,
// 		isPlaying: false,
// 		isShowing: false,
// 		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
// 		photo: "./image/other_artist.png",
// 		name: "Сергей Чонишвили",
// 		price: 9000,
// 		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
// 		characters_photo: [
// 			"./image/photo_other.png",
// 			"./image/photo_other.png",
// 		]
// 	},
// 	{
// 		circle: null,
// 		isPlaying: false,
// 		isShowing: false,
// 		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
// 		photo: "./image/other_artist.png",
// 		name: "Сергей Чонишвили",
// 		price: 9000,
// 		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
// 		characters_photo: [
// 			"./image/photo_other.png",
// 			"./image/photo_other.png",
// 		]
// 	},
// 	{
// 		circle: null,
// 		isPlaying: false,
// 		isShowing: false,
// 		audio: new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"),
// 		photo: "./image/other_artist.png",
// 		name: "Сергей Чонишвили",
// 		price: 9000,
// 		description: "Федеральный призидент, актёр. Голос СТС и Вина Дизеля. Специализация: озвучка рекламы, документального кино, дубляж",
// 		characters_photo: [
// 			"./image/photo_other.png",
// 			"./image/photo_other.png",
// 		]
// 	},
// ]
//
// artists.forEach((artist, key) => {
// 	artist_list.innerHTML += `
// 		<li class="swiper-slide other_artist_58f7bdc3" id="artist_${key}">
// 			<div class="other_artist_menu_58f7bdc3">
// 				<div class="other_artist_menu_buttons_58f7bdc3">
// 					<button class="other_artist_menu_button_58f7bdc3 other_artist_menu_button_like_58f7bdc3">
// 						<img src="./image/like.svg" alt=""/>
// 					</button>
//
// 					<button class="other_artist_menu_button_58f7bdc3">
// 						<img src="./image/download.svg" alt=""/>
// 					</button>
// 				</div>
//
// 				<p class="other_artist_menu_time_58f7bdc3" id="time_${key}"></p>
//
// 				<button class="other_artist_menu_button_58f7bdc3">
// 					<img src="./image/corona.svg" alt=""/>
// 				</button>
// 			</div>
//
// 			<div class="other_artist_player_58f7bdc3" id="audioOnePlayer">
// 				<button class="other_artist_player_button_58f7bdc3" onClick="togglePlay('${key}')">
// 					<img class="other_artist_player_player_58f7bdc3" id="button_${key}" src="./image/play.svg" alt=""/>
// 				</button>
//
// 				<img class="other_artist_player_photo_58f7bdc3" src="${artist.photo}" alt=""/>
// 				<div class="other_artist_player_bar_58f7bdc3" id="bar_${key}"></div>
// 			</div>
//
// 			<div class="other_artist_info_58f7bdc3">
// 				<h2 class="other_artist_name_58f7bdc3">${artist.name}</h2>
// 				<p class="other_artist_price_58f7bdc3">
// 					Цена от <span class="other_artist_price_bold_58f7bdc3">${artist.price}₽</span>
// 				</p>
// 			</div>
//
// 			<p class="other_artist_description_58f7bdc3">${artist.description}</p>
//
// 			<button class="other_artist_button_58f7bdc3" onclick="openForm()">Связаться</button>
// 		</li>
// 	`
// })
//
// artists.forEach((artist, key) => {
// 	const audio = artist.audio
//
// 	artist.circle = new ProgressBar.Circle(`#bar_${key}`, {
// 		color: '#C1492E',
// 		strokeWidth: 5,
// 		trailWidth: 5,
// 		trailColor: '#fff',
// 		duration: 100,
// 		svgStyle: {
// 			display: 'block',
// 			width: '100%'
// 		},
// 	});
//
// 	document.getElementById(`bar_${key}`).addEventListener('click', function(e) {
// 		const rect = this.getBoundingClientRect();
// 		const x = e.clientX - rect.left;
// 		const y = e.clientY - rect.top;
// 		const centerX = rect.width / 2;
// 		const centerY = rect.height / 2;
//
// 		let angle = Math.atan2(y - centerY, x - centerX);
// 		angle += Math.PI / 2;
// 		if (angle < 0) angle += 2 * Math.PI;
//
// 		const progress = angle / (2 * Math.PI);
//
// 		audio.currentTime = progress * audio.duration;
// 		artist.circle.set(progress);
// 		changeView(key)
// 	});
//
// 	audio.addEventListener('timeupdate', function() {
// 		const progress = audio.currentTime / audio.duration;
//
// 		artists[key].circle.animate(progress);
// 		updateTime(key);
// 	});
// })
//
// function togglePlay(id) {
// 	artists.forEach((artist, key) => {
// 		const buttonImage = document.getElementById(`button_${key}`);
// 		const block = document.getElementById(`artist_${key}`);
//
// 		if (key.toString() !== id) {
// 			buttonImage.classList = "other_artist_player_player_58f7bdc3"
// 			buttonImage.src = "./image/play.svg"
// 			block.classList.remove("other_artist_active_58f7bdc3");
// 			artist.isPlaying = false;
// 			artist.audio.pause();
// 		} else {
// 			if (artists[id].isPlaying) {
// 				artists[id].audio.pause();
// 				buttonImage.classList = "other_artist_player_player_58f7bdc3"
// 				buttonImage.src = "./image/play.svg"
// 				block.classList.remove("other_artist_active_58f7bdc3");
// 			} else {
// 				artists[id].audio.play();
// 				buttonImage.classList = "other_artist_player_pause_58f7bdc3"
// 				buttonImage.src = "./image/pause.png"
// 				block.classList.add("other_artist_active_58f7bdc3");
// 			}
//
// 			artists[id].isPlaying = !artists[id].isPlaying;
// 		}
// 	})
// }
//
// function updateTime(id) {
// 	const current = formatTime(artists[id].audio.currentTime);
// 	document.getElementById(`time_${id}`).textContent = `${current}`;
// }
//
// function formatTime(seconds) {
// 	if (isNaN(seconds)) return '0:00';
// 	const mins = Math.floor(seconds / 60);
// 	const secs = Math.floor(seconds % 60);
// 	return `${mins}:${secs.toString().padStart(2, '0')}`;
// }

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
document.addEventListener('DOMContentLoaded', function(){
	const dateInput = document.getElementById('dateInput');
	const calendar = document.getElementById('calendar');
	const calendarDays = document.getElementById('calendarDays');
	const monthSelect = document.getElementById('monthSelect');
	const yearSelect = document.getElementById('yearSelect');
	const prevMonthBtn = document.querySelector('.prev-month');
	const nextMonthBtn = document.querySelector('.next-month');

	let currentDate = new Date();
	let selectedDate = null;

	// Названия месяцев
	const monthNames = [
		'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
	];

	// Короткие названия месяцев
	const monthNamesShort = [
		'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
		'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
	];

	// Дни недели
	const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	// Форматирование даты
	function formatDate(date) {
		if (!date) return '';
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear();
		return `${day}.${month}.${year}`;
	}

	// Показать/скрыть календарь
	dateInput.addEventListener('click', (e) => {
		calendar.classList.toggle('show');
		e.stopPropagation();
		updateSelectors();
		renderCalendar();
	});

	// Закрыть календарь при клике вне его
	document.addEventListener('click', (e) => {
		if (!calendar.contains(e.target) && e.target !== dateInput) {
			calendar.classList.remove('show');
		}
	});

	// Заполнение выпадающих списков
	function populateSelectors() {
		// Заполнение месяцев
		monthSelect.innerHTML = '';
		monthNames.forEach((month, index) => {
			const option = document.createElement('option');
			option.value = index;
			option.textContent = month;
			monthSelect.appendChild(option);
		});

		// Заполнение годов (от -10 до +10 лет от текущего)
		yearSelect.innerHTML = '';
		const currentYear = new Date().getFullYear();
		for (let year = currentYear; year <= currentYear + 2; year++) {
			const option = document.createElement('option');
			option.value = year;
			option.textContent = year;
			yearSelect.appendChild(option);
		}
	}

	// Обновление выбранных значений в селекторах
	function updateSelectors() {
		monthSelect.value = currentDate.getMonth();
		yearSelect.value = currentDate.getFullYear();
	}

	// Обработчики изменения селекторов
	monthSelect.addEventListener('change', () => {
		currentDate.setMonth(parseInt(monthSelect.value));
		renderCalendar();
	});

	yearSelect.addEventListener('change', () => {
		currentDate.setFullYear(parseInt(yearSelect.value));
		renderCalendar();
	});

	// Навигация
	prevMonthBtn.addEventListener('click', () => {
		currentDate.setMonth(currentDate.getMonth() - 1);
		updateSelectors();
		renderCalendar();
	});

	nextMonthBtn.addEventListener('click', () => {
		currentDate.setMonth(currentDate.getMonth() + 1);
		updateSelectors();
		renderCalendar();
	});

	// Отрисовка календаря
	function renderCalendar() {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();

		// Первый день месяца
		const firstDay = new Date(year, month, 1);
		// Последний день месяца
		const lastDay = new Date(year, month + 1, 0);
		// День недели первого дня (0 - воскресенье, 1 - понедельник и т.д.)
		const firstDayIndex = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
		// Последний день предыдущего месяца
		const prevLastDay = new Date(year, month, 0).getDate();

		calendarDays.innerHTML = '';

		// Дни предыдущего месяца
		for (let i = firstDayIndex; i > 0; i--) {
			const day = document.createElement('div');
			day.classList.add('day', 'other-month');
			day.textContent = prevLastDay - i + 1;

			// Отметка выходных для предыдущего месяца
			const date = new Date(year, month - 1, prevLastDay - i + 1);
			if (date.getDay() === 0 || date.getDay() === 6) {
				day.classList.add('weekend');
			}

			calendarDays.appendChild(day);
		}

		// Дни текущего месяца
		for (let i = 1; i <= lastDay.getDate(); i++) {
			const day = document.createElement('div');
			day.classList.add('day');
			day.textContent = i;

			const date = new Date(year, month, i);

			// Отметить выходные
			if (date.getDay() === 0 || date.getDay() === 6) {
				day.classList.add('weekend');
			}

			// Отметить сегодняшний день
			const today = new Date();
			if (date.toDateString() === today.toDateString()) {
				day.classList.add('today');
			}

			// Отметить выбранный день
			if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
				day.classList.add('selected');
			}

			day.addEventListener('click', () => {
				selectedDate = date;
				dateInput.value = formatDate(date);
				renderCalendar();
			});

			calendarDays.appendChild(day);
		}

		// Дни следующего месяца
		const totalCells = 42; // 6 недель
		const nextDays = totalCells - (firstDayIndex + lastDay.getDate());

		for (let i = 1; i <= nextDays; i++) {
			const day = document.createElement('div');
			day.classList.add('day', 'other-month');
			day.textContent = i;

			// Отметка выходных для следующего месяца
			const date = new Date(year, month + 1, i);
			if (date.getDay() === 0 || date.getDay() === 6) {
				day.classList.add('weekend');
			}

			calendarDays.appendChild(day);
		}
	}

	// Инициализация
	populateSelectors();
	updateSelectors();
	renderCalendar();

	// Закрытие календаря по клавише Esc
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && calendar.classList.contains('show')) {
			calendar.classList.remove('show');
		}
	});
});

const header = document.getElementById("header_58f7bdc3");

window.addEventListener("scroll", () => {
	if (window.pageYOffset !== 0) {
		header.classList.add("header_active_58f7bdc3");
	} else {
		header.classList.remove("header_active_58f7bdc3");
	}
})
const menu = document.getElementById("menu_58f7bdc3");
const buttonMenu = document.getElementById("header_button_menu_58f7bdc3");
let view = false

function toggleMenu() {
	if (view) {
		body.style.overflow = "auto"
	} else {
		body.style.overflow = "hidden"
	}

	buttonMenu.classList.toggle("header_button_menu_active_58f7bdc3")
	menu.classList.toggle("menu_active_58f7bdc3");
	view = !view;
}


document.addEventListener('DOMContentLoaded', function(){
	const dateInput = document.getElementById('openCalendar');
	const calendar = document.getElementById('sidebarCalendar');
	const calendarDays = document.getElementById('sidebarCalendarDays');
	const monthSelect = document.getElementById('sidebarCalendarMonthSelect');
	const yearSelect = document.getElementById('sidebarCalendarYearSelect');
	const prevMonthBtn = document.querySelector('.prev-sidebar_month');
	const nextMonthBtn = document.querySelector('.next-sidebar_month');

	let currentDate = new Date();
	let selectedDate = null;

	// Названия месяцев
	const monthNames = [
		'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
	];

	// Короткие названия месяцев
	const monthNamesShort = [
		'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
		'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
	];

	// Дни недели
	const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	// Форматирование даты
	function formatDate(date) {
		if (!date) return '';
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear();
		return `${day}.${month}.${year}`;
	}

	// Показать/скрыть календарь
	dateInput.addEventListener('click', (e) => {
		calendar.classList.toggle('show');
		e.stopPropagation();
		updateSelectors();
		renderCalendar();
	});

	// Закрыть календарь при клике вне его
	document.addEventListener('click', (e) => {
		if (!calendar.contains(e.target) && e.target !== dateInput) {
			calendar.classList.remove('show');
		}
	});

	// Заполнение выпадающих списков
	function populateSelectors() {
		// Заполнение месяцев
		monthSelect.innerHTML = '';
		monthNames.forEach((month, index) => {
			const option = document.createElement('option');
			option.value = index;
			option.textContent = month;
			monthSelect.appendChild(option);
		});

		// Заполнение годов (от -10 до +10 лет от текущего)
		yearSelect.innerHTML = '';
		const currentYear = new Date().getFullYear();
		for (let year = currentYear; year <= currentYear + 2; year++) {
			const option = document.createElement('option');
			option.value = year;
			option.textContent = year;
			yearSelect.appendChild(option);
		}
	}

	// Обновление выбранных значений в селекторах
	function updateSelectors() {
		monthSelect.value = currentDate.getMonth();
		yearSelect.value = currentDate.getFullYear();
	}

	// Обработчики изменения селекторов
	monthSelect.addEventListener('change', () => {
		currentDate.setMonth(parseInt(monthSelect.value));
		renderCalendar();
	});

	yearSelect.addEventListener('change', () => {
		currentDate.setFullYear(parseInt(yearSelect.value));
		renderCalendar();
	});

	// Навигация
	prevMonthBtn.addEventListener('click', () => {
		currentDate.setMonth(currentDate.getMonth() - 1);
		updateSelectors();
		renderCalendar();
	});

	nextMonthBtn.addEventListener('click', () => {
		currentDate.setMonth(currentDate.getMonth() + 1);
		updateSelectors();
		renderCalendar();
	});

	// Отрисовка календаря
	function renderCalendar() {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();

		// Первый день месяца
		const firstDay = new Date(year, month, 1);
		// Последний день месяца
		const lastDay = new Date(year, month + 1, 0);
		// День недели первого дня (0 - воскресенье, 1 - понедельник и т.д.)
		const firstDayIndex = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
		// Последний день предыдущего месяца
		const prevLastDay = new Date(year, month, 0).getDate();

		calendarDays.innerHTML = '';

		// Дни предыдущего месяца
		for (let i = firstDayIndex; i > 0; i--) {
			const day = document.createElement('div');
			day.classList.add('day', 'other-month');
			day.textContent = prevLastDay - i + 1;

			// Отметка выходных для предыдущего месяца
			const date = new Date(year, month - 1, prevLastDay - i + 1);
			if (date.getDay() === 0 || date.getDay() === 6) {
				day.classList.add('weekend');
			}

			calendarDays.appendChild(day);
		}

		// Дни текущего месяца
		for (let i = 1; i <= lastDay.getDate(); i++) {
			const day = document.createElement('div');
			day.classList.add('day');
			day.textContent = i;

			const date = new Date(year, month, i);

			// Отметить выходные
			if (date.getDay() === 0 || date.getDay() === 6) {
				day.classList.add('weekend');
			}

			// Отметить сегодняшний день
			const today = new Date();
			if (date.toDateString() === today.toDateString()) {
				day.classList.add('today');
			}

			// Отметить выбранный день
			if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
				day.classList.add('selected');
			}

			day.addEventListener('click', () => {
				selectedDate = date;
				dateInput.value = formatDate(date);
				renderCalendar();
			});

			calendarDays.appendChild(day);
		}

		// Дни следующего месяца
		const totalCells = 42; // 6 недель
		const nextDays = totalCells - (firstDayIndex + lastDay.getDate());

		for (let i = 1; i <= nextDays; i++) {
			const day = document.createElement('div');
			day.classList.add('day', 'other-month');
			day.textContent = i;

			// Отметка выходных для следующего месяца
			const date = new Date(year, month + 1, i);
			if (date.getDay() === 0 || date.getDay() === 6) {
				day.classList.add('weekend');
			}

			calendarDays.appendChild(day);
		}
	}

	// Инициализация
	populateSelectors();
	updateSelectors();
	renderCalendar();

	// Закрытие календаря по клавише Esc
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && calendar.classList.contains('show')) {
			calendar.classList.remove('show');
		}
	});
});
const characters = new Swiper('.info_list_characters_58f7bdc3', {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 2,
	grid: {
		rows: 3,
		fill: "row"
	},
	breakpoints: {
		1280: {
			spaceBetween: 15,
			slidesPerView: 9,
			grid: {
				rows: 1,
			}
		},
		810: {
			spaceBetween: 15,
			slidesPerView: 8,
			grid: {
				rows: 1,
			}
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
	slidesPerView: 2,
	spaceBetween: 3,
	grid: {
		rows: 3,
		fill: "row"
	},
	breakpoints: {
		810: {
			slidesPerView: 4,
			spaceBetween: 3,
			grid: {
				rows: 2,
				fill: "row"
			}
		}
	},
	navigation: {
		nextEl: '.info_swiper_button_next_photo_58f7bdc3',
		prevEl: '.info_swiper_button_prev_photo_58f7bdc3',
	},
});

document.addEventListener('DOMContentLoaded', function() {
	photo_list.update();
	photo_list.navigation.update();

} )


const comments_list = new Swiper('.info_comments_list_58f7bdc3', {
	slidesPerView: 1,
	spaceBetween: 10,
	grid: {
		rows: 5,
		fill: "row"
	},
	breakpoints: {
		810: {
			spaceBetween: 20,
		}
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
	slidesPerView: 2,
	spaceBetween: 20,
	loop: true,
	breakpoints: {
		810: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	}
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