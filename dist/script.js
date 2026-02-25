const background = document.getElementById("background_58f7bdc3")

background.addEventListener("click", function () {
	closeForm()
	closeVideoPopup()
	closeMenuForm()
})
const commentsBlock = document.querySelector('.info_comments_list_58f7bdc3');
const buttonComments = document.getElementById("info_comment_add_58f7bdc3")
let commentsCount = null

if (commentsBlock) {
	commentsCount = commentsBlock.getElementsByTagName('li').length
}

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

function showMoreComments() {
	if (commentsCount > comments_list.params.grid.rows) {
		console.log(commentsCount, comments_list.params.grid.rows);
		comments_list.params.grid.rows += 5;
		comments_list.update();

		if (commentsCount <= comments_list.params.grid.rows) {
			buttonComments.classList.add("info_comment_add_disabled_58f7bdc3");
		}
	} else {
		buttonComments.classList.add("info_comment_add_disabled_58f7bdc3");
	}
}

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
const menu_link_1 = document.getElementById("menu_link_1");
const menu_link_2 = document.getElementById("menu_link_2");
const menu_link_3 = document.getElementById("menu_link_3");
const menu_link_4 = document.getElementById("menu_link_4");

let isViewMenuLinks = false;
let currentMenuLink = null;

const header = document.getElementById("header_58f7bdc3");

window.addEventListener("scroll", () => {
	if (window.pageYOffset >= 115) {
		header.classList.add("header_active_58f7bdc3");
	} else {
		header.classList.remove("header_active_58f7bdc3");
	}
})

function toggle(id) {
	menu_link_1.classList.remove("header_bottom_navigation_block_active");
	menu_link_2.classList.remove("header_bottom_navigation_block_active");
	menu_link_3.classList.remove("header_bottom_navigation_block_active");
	menu_link_4.classList.remove("header_bottom_navigation_block_active");

	if (!isViewMenuLinks) {
		const menu = document.getElementById(id)

		menu.classList.add("header_bottom_navigation_block_active");
		isViewMenuLinks = true;
		currentMenuLink = id
	} else {
		if (currentMenuLink !== id) {
			const menu = document.getElementById(id)

			menu.classList.add("header_bottom_navigation_block_active");
		}

		isViewMenuLinks = false;
	}
}
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
	spaceBetween: 10,
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
	slidesPerView: 1,
	spaceBetween: 20,
	allowTouchMove: false,
	navigation: {
		nextEl: '.info_swiper_button_next_artist_58f7bdc3',
		prevEl: '.info_swiper_button_prev_artist_photo_58f7bdc3',
	},
})
const videoPopup = document.getElementById("video_player_58f7bdc3")
const videoPlayer= document.getElementById("video_player_src_58f7bdc3")

function openVideoPopup(url) {
	videoPopup.classList.add("video_player_58f7bdc3_active")
	background.classList.add("background_58f7bdc3_active")
	videoPlayer.src = url
	body.style.overflow = "hidden"
}

function closeVideoPopup() {
	const video = videoPlayer.getElementsByTagName("video")[0];

	videoPopup.classList.remove("video_player_58f7bdc3_active")
	background.classList.remove("background_58f7bdc3_active")
	body.style.overflow = "auto"

	console.log(video)

	videoPlayer.contentWindow.postMessage(JSON.stringify({type: 'player:pause',data: {}}), '*');
}


const artist_list = document.getElementById('other_list_artist_58f7bdc3').getElementsByClassName('card_58f7bdc3')

let circles = []
let audios = []
let audiosIsPlaying = []

for (let key = 0; key < artist_list.length; key++) {
	let currentProgress = 0
	let targetProgress = 0
	let animationFrame = null
	const audio = new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3")

	let circle= new ProgressBar.Circle(`#bar_${key}`, {
		color: '#C1492E',
		strokeWidth: 5,
		trailWidth: 5,
		trailColor: '#fff',
		svgStyle: {
			display: 'block',
			width: '100%'
		},
	});

	circles.push(circle)
	audios.push(audio)
	audiosIsPlaying.push(false)

	circles[key].set(0);

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
		circle.set(progress);
	});

	function smoothAnimation() {
		const diff = targetProgress - currentProgress
		const smoothFactor = 0.15

		currentProgress += diff * smoothFactor

		circle.animate(currentProgress, {
			duration: 50,
			easing: 'linear'
		})

		if (Math.abs(diff) > 0.001) {
			animationFrame = requestAnimationFrame(smoothAnimation)
		} else {
			circle.set(targetProgress)
			animationFrame = null
		}
	}

	audio.addEventListener('timeupdate', function() {
		targetProgress = this.currentTime / this.duration

		console.log(targetProgress)

		if (!animationFrame && targetProgress !== 1) {
			animationFrame = requestAnimationFrame(smoothAnimation)
		}

		if (targetProgress === 1) {
			circle.set(0);
			audiosIsPlaying[key] = false
		}
	});

	audio.addEventListener('ended', function() {
		circle.set(0);
		audios[key].play()
		audios[key].pause()
		audiosIsPlaying[key] = false

		const buttonImage = document.getElementById(`button_${key}`);
		buttonImage.classList = "player_button_play_58f7bdc3";
		buttonImage.src = "./image/play.svg"
	});

	document.addEventListener('DOMContentLoaded', function(){
		const dateInput = document.getElementById(`openCalendar-${key}`);
		const calendar = document.getElementById(`calendar-${key}`);
		const calendarDays = document.getElementById(`calendarDays-${key}`);
		const monthSelect = document.getElementById(`monthSelect-${key}`);
		const yearSelect = document.getElementById(`yearSelect-${key}`);
		const prevMonthBtn = document.querySelector(`.prev-month-${key}`);
		const nextMonthBtn = document.querySelector(`.next-month-${key}`);

		console.log(dateInput, calendarDays, monthSelect, yearSelect, prevMonthBtn);

		let currentDate = new Date();
		let selectedDate = null;

		const monthNames = [
			'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
		];

		const monthNamesShort = [
			'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
			'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
		];

		const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

		function formatDate(date) {
			if (!date) return '';
			const day = date.getDate().toString().padStart(2, '0');
			const month = (date.getMonth() + 1).toString().padStart(2, '0');
			const year = date.getFullYear();
			return `${day}.${month}.${year}`;
		}

		dateInput.addEventListener('click', (e) => {
			calendar.classList.toggle('show');
			e.stopPropagation();
			updateSelectors();
			renderCalendar();
		});

		document.addEventListener('click', (e) => {
			if (!calendar.contains(e.target) && e.target !== dateInput) {
				calendar.classList.remove('show');
			}
		});

		function populateSelectors() {
			monthSelect.innerHTML = '';
			monthNames.forEach((month, index) => {
				const option = document.createElement('option');
				option.value = index;
				option.textContent = month;
				monthSelect.appendChild(option);
			});

			yearSelect.innerHTML = '';
			const currentYear = new Date().getFullYear();
			for (let year = currentYear; year <= currentYear + 2; year++) {
				const option = document.createElement('option');
				option.value = year;
				option.textContent = year;
				yearSelect.appendChild(option);
			}
		}

		function updateSelectors() {
			monthSelect.value = currentDate.getMonth();
			yearSelect.value = currentDate.getFullYear();
		}

		monthSelect.addEventListener('change', () => {
			currentDate.setMonth(parseInt(monthSelect.value));
			renderCalendar();
		});

		yearSelect.addEventListener('change', () => {
			currentDate.setFullYear(parseInt(yearSelect.value));
			renderCalendar();
		});

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

		function renderCalendar() {
			const year = currentDate.getFullYear();
			const month = currentDate.getMonth();

			const firstDay = new Date(year, month, 1);
			const lastDay = new Date(year, month + 1, 0);
			const firstDayIndex = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
			const prevLastDay = new Date(year, month, 0).getDate();

			calendarDays.innerHTML = '';

			for (let i = firstDayIndex; i > 0; i--) {
				const day = document.createElement('div');
				day.classList.add('day', 'other-month');
				day.textContent = prevLastDay - i + 1;

				const date = new Date(year, month - 1, prevLastDay - i + 1);
				if (date.getDay() === 0 || date.getDay() === 6) {
					day.classList.add('weekend');
				}

				calendarDays.appendChild(day);
			}

			for (let i = 1; i <= lastDay.getDate(); i++) {
				const day = document.createElement('div');
				day.classList.add('day');
				day.textContent = i;

				const date = new Date(year, month, i);

				if (date.getDay() === 0 || date.getDay() === 6) {
					day.classList.add('weekend');
				}

				const today = new Date();
				if (date.toDateString() === today.toDateString()) {
					day.classList.add('today');
				}

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

			const totalCells = 42;
			const nextDays = totalCells - (firstDayIndex + lastDay.getDate());

			for (let i = 1; i <= nextDays; i++) {
				const day = document.createElement('div');
				day.classList.add('day', 'other-month');
				day.textContent = i;

				const date = new Date(year, month + 1, i);
				if (date.getDay() === 0 || date.getDay() === 6) {
					day.classList.add('weekend');
				}

				calendarDays.appendChild(day);
			}
		}

		populateSelectors();
		updateSelectors();
		renderCalendar();

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && calendar.classList.contains('show')) {
				calendar.classList.remove('show');
			}
		});
	});
}

function togglePlay(id) {
	for (let key = 0; key < artist_list.length; key++) {
		const buttonImage = document.getElementById(`button_${key}`);
		const block = document.getElementById(`artist_${key}`);

		if (key !== id) {
			buttonImage.classList = "player_button_play_58f7bdc3"
			buttonImage.src = "./image/play.svg"
			block.classList.remove("other_artist_active_58f7bdc3");
			audios[key].pause();

			console.log(key, id)

			console.log("One Pause")
		} else {
			if (audiosIsPlaying[id]) {
				audios[id].pause();
				buttonImage.classList = "player_button_play_58f7bdc3"
				buttonImage.src = "./image/play.svg"
				block.classList.remove("other_artist_active_58f7bdc3");

				console.log("Two Pause")
			} else {
				audios[id].play();
				buttonImage.classList = "player_button_pause_58f7bdc3"
				buttonImage.src = "./image/pause.png"
				block.classList.add("other_artist_active_58f7bdc3");

				console.log("Two Play")
			}

			audiosIsPlaying[id] = !audiosIsPlaying[id];
		}
	}
}