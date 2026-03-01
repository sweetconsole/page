const background_58f7bdc3 = document.getElementById("background_58f7bdc3")

background_58f7bdc3.addEventListener("click", function () {
	closeForm()
	closeVideoPopup()
	closeMenuForm()
})

const CALENDAR = {
	monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
	weekDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
};

class CalendarManager {
	constructor(key) {
		this.key = key;
		this.currentDate = new Date();
		this.selectedDate = null;
		this.init();
	}

	init() {
		this.dateInput = document.getElementById(`open-calendar-${this.key}`);
		this.calendar = document.getElementById(`calendar-${this.key}`);
		this.calendarDays = document.getElementById(`calendar-days-${this.key}`);
		this.monthSelect = document.getElementById(`month-select-${this.key}`);
		this.yearSelect = document.getElementById(`year-select-${this.key}`);
		this.prevMonthBtn = document.getElementById(`prev-month-${this.key}`);
		this.nextMonthBtn = document.getElementById(`next-month-${this.key}`);

		if (!this.dateInput || !this.calendar) return;

		this.bindEvents();
		this.populateSelectors();
		this.updateSelectors();
		this.renderCalendar();
	}

	bindEvents() {
		this.dateInput.addEventListener('click', (e) => {
			this.calendar.classList.toggle('show');
			e.stopPropagation();
			this.updateSelectors();
			this.renderCalendar();
		});

		document.addEventListener('click', (e) => {
			if (!this.calendar.contains(e.target) && e.target !== this.dateInput) {
				this.calendar.classList.remove('show');
			}
		});

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && this.calendar.classList.contains('show')) {
				this.calendar.classList.remove('show');
			}
		});

		if (this.monthSelect) {
			this.monthSelect.addEventListener('change', () => {
				this.currentDate.setMonth(parseInt(this.monthSelect.value));
				this.renderCalendar();
			});
		}

		if (this.yearSelect) {
			this.yearSelect.addEventListener('change', () => {
				this.currentDate.setFullYear(parseInt(this.yearSelect.value));
				this.renderCalendar();
			});
		}

		if (this.prevMonthBtn) {
			this.prevMonthBtn.addEventListener('click', () => {
				this.currentDate.setMonth(this.currentDate.getMonth() - 1);
				this.updateSelectors();
				this.renderCalendar();
			});
		}

		if (this.nextMonthBtn) {
			this.nextMonthBtn.addEventListener('click', () => {
				this.currentDate.setMonth(this.currentDate.getMonth() + 1);
				this.updateSelectors();
				this.renderCalendar();
			});
		}
	}

	populateSelectors() {
		if (!this.monthSelect || !this.yearSelect) return;

		this.monthSelect.innerHTML = '';
		CALENDAR.monthNames.forEach((month, index) => {
			const option = document.createElement('option');
			option.value = index;
			option.textContent = month;
			this.monthSelect.appendChild(option);
		});

		this.yearSelect.innerHTML = '';
		const currentYear = new Date().getFullYear();
		for (let year = currentYear; year <= currentYear + 2; year++) {
			const option = document.createElement('option');
			option.value = year;
			option.textContent = year;
			this.yearSelect.appendChild(option);
		}
	}

	updateSelectors() {
		if (this.monthSelect) this.monthSelect.value = this.currentDate.getMonth();
		if (this.yearSelect) this.yearSelect.value = this.currentDate.getFullYear();
	}

	formatDate(date) {
		if (!date) return '';
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear();
		return `${day}.${month}.${year}`;
	}

	renderCalendar() {
		if (!this.calendarDays) return;

		const year = this.currentDate.getFullYear();
		const month = this.currentDate.getMonth();

		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const firstDayIndex = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
		const prevLastDay = new Date(year, month, 0).getDate();

		this.calendarDays.innerHTML = '';

		for (let i = firstDayIndex; i > 0; i--) {
			const day = document.createElement('div');
			day.classList.add('day', 'other-month');
			day.textContent = prevLastDay - i + 1;

			const date = new Date(year, month - 1, prevLastDay - i + 1);
			if (date.getDay() === 0 || date.getDay() === 6) {
				day.classList.add('weekend');
			}

			this.calendarDays.appendChild(day);
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

			if (this.selectedDate && date.toDateString() === this.selectedDate.toDateString()) {
				day.classList.add('selected');
			}

			day.addEventListener('click', () => {
				this.selectedDate = date;
				this.dateInput.value = this.formatDate(date);
				this.renderCalendar();
			});

			this.calendarDays.appendChild(day);
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

			this.calendarDays.appendChild(day);
		}
	}
}
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
	background_58f7bdc3.classList.add("background_58f7bdc3_active")
	body.style.overflow = "hidden"
}

function closeForm() {
	popup.classList.remove("form_58f7bdc3_active")
	background_58f7bdc3.classList.remove("background_58f7bdc3_active")
	body.style.overflow = "auto"
}

function submitForm() {
	console.log("Submit")

	closeForm()
}

new CalendarManager("form");
const menu_link_1 = document.getElementById("menu_link_1");
const menu_link_2 = document.getElementById("menu_link_2");
const menu_link_3 = document.getElementById("menu_link_3");
const menu_link_4 = document.getElementById("menu_link_4");

let isViewMenuLinks = false;
let currentMenuLink = null;

const header_58f7bdc3 = document.getElementById("header_58f7bdc3");

window.addEventListener("scroll", () => {
	if (window.pageYOffset >= 115) {
		header_58f7bdc3.classList.add("header_active_58f7bdc3");
	} else {
		header_58f7bdc3.classList.remove("header_active_58f7bdc3");
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
	background_58f7bdc3.classList.add("background_58f7bdc3_active")
	body.style.overflow = "hidden"
}

function closeMenuForm() {
	menuForm.classList.remove("form_58f7bdc3_active")
	background_58f7bdc3.classList.remove("background_58f7bdc3_active")
	body.style.overflow = "auto"
}

function submitMenuForm() {
	console.log("Submit")

	closeForm()
}
const artist_list = document.getElementById('other_list_artist_58f7bdc3').getElementsByClassName('card_58f7bdc3');

let circles = [];
let audios = [];
let audiosIsPlaying = [];

const CONFIG = {
	PROGRESS_BAR: {
		color: '#C1492E',
		strokeWidth: 5,
		trailWidth: 5,
		trailColor: '#fff'
	},
};

class AudioPlayer {
	constructor(key, circle, audioElement) {
		this.key = key;
		this.circle = circle;
		this.audio = audioElement;
		this.currentProgress = 0;
		this.targetProgress = 0;
		this.animationFrame = null;
		this.isEnding = false;
		this.init();
	}

	init() {
		this.initClickHandler();
		this.initAudioEvents();
	}

	initClickHandler() {
		const bar = document.getElementById(`bar_${this.key}`);
		if (bar) {
			bar.addEventListener('click', this.handleClick.bind(this));
		}
	}

	handleClick(e) {
		if (!this.audio.duration) return;

		const progress = this.calculateProgress(e);
		this.audio.currentTime = progress * this.audio.duration;
		this.circle.set(progress);
		this.currentProgress = progress;
		this.targetProgress = progress;
	}

	calculateProgress(e) {
		const rect = e.target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		let angle = Math.atan2(y - centerY, x - centerX);
		angle += Math.PI / 2;
		if (angle < 0) angle += 2 * Math.PI;

		return angle / (2 * Math.PI);
	}

	initAudioEvents() {
		this.audio.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
		this.audio.addEventListener('ended', this.handleEnded.bind(this));
		this.audio.addEventListener('loadedmetadata', this.handleLoadedMetadata.bind(this));
		this.audio.addEventListener('play', this.handlePlay.bind(this));
		this.audio.addEventListener('pause', this.handlePause.bind(this));
	}

	handlePlay() {
		const buttonImage = document.getElementById(`button_${this.key}`);
		if (buttonImage) {
			buttonImage.classList = "player_button_pause_58f7bdc3";
			buttonImage.src = "./img/pause.png";
		}
		const block = document.getElementById(`artist_${this.key}`);
		if (block) {
			block.classList.add("other_artist_active_58f7bdc3");
		}
	}

	handlePause() {
		const buttonImage = document.getElementById(`button_${this.key}`);
		if (buttonImage) {
			buttonImage.classList = "player_button_play_58f7bdc3";
			buttonImage.src = "./img/play.svg";
		}
		const block = document.getElementById(`artist_${this.key}`);
		if (block) {
			block.classList.remove("other_artist_active_58f7bdc3");
		}
	}

	handleTimeUpdate() {
		if (!this.audio.duration) return;

		this.targetProgress = this.audio.currentTime / this.audio.duration;

		if (!this.animationFrame) {
			this.animationFrame = requestAnimationFrame(this.smoothAnimation.bind(this));
		}
	}

	handleEnded() {
		this.isEnding = true;
		this.circle.set(0);
		this.currentProgress = 0;
		this.targetProgress = 0;

		if (this.animationFrame) {
			cancelAnimationFrame(this.animationFrame);
			this.animationFrame = null;
		}

		audiosIsPlaying[this.key] = false;

		const buttonImage = document.getElementById(`button_${this.key}`);
		if (buttonImage) {
			buttonImage.classList = "player_button_play_58f7bdc3";
			buttonImage.src = "./img/play.svg";
		}

		const block = document.getElementById(`artist_${this.key}`);
		if (block) {
			block.classList.remove("other_artist_active_58f7bdc3");
		}

		this.isEnding = false;
	}

	handleLoadedMetadata() {
		this.circle.set(0);
		this.currentProgress = 0;
		this.targetProgress = 0;
	}

	smoothAnimation() {
		if (this.isEnding) return;

		const diff = this.targetProgress - this.currentProgress;
		const smoothFactor = 0.15;

		if (Math.abs(diff) < 0.001) {
			this.circle.set(this.targetProgress);
			this.animationFrame = null;
			return;
		}

		this.currentProgress += diff * smoothFactor;

		this.circle.animate(this.currentProgress, {
			duration: 50,
			easing: 'linear'
		});

		this.animationFrame = requestAnimationFrame(this.smoothAnimation.bind(this));
	}
}

Array.from(artist_list).forEach((artist, key) => {
	const circle = new ProgressBar.Circle(`#bar_${key}`, {
		color: CONFIG.PROGRESS_BAR.color,
		strokeWidth: CONFIG.PROGRESS_BAR.strokeWidth,
		trailWidth: CONFIG.PROGRESS_BAR.trailWidth,
		trailColor: CONFIG.PROGRESS_BAR.trailColor,
		svgStyle: {
			display: 'block',
			width: '100%'
		},
	});

	const audioElement = document.getElementById(`card_audio_${key}`);

	circles.push(circle);
	audios.push(audioElement);
	audiosIsPlaying.push(false);
	circle.set(0);

	if (audioElement) {
		new AudioPlayer(key, circle, audioElement);
	}

	new Swiper(`.gallery_${key}_58f7bdc3`, {
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
	});

	new CalendarManager(key);
});

function togglePlay(id) {
	Array.from(artist_list).forEach((_, key) => {
		const audio = audios[key];

		if (!audio) return;

		if (key !== id) {
			audio.pause();
			audio.currentTime = 0;
			audiosIsPlaying[key] = false;
		} else {
			if (audiosIsPlaying[id]) {
				audio.pause();
			} else {
				audio.play().catch(error => {
					console.log('Playback failed:', error);
				});
			}
			audiosIsPlaying[id] = !audiosIsPlaying[id];
		}
	});
}

new CalendarManager("sidebar")

document.addEventListener('DOMContentLoaded', function() {
	function createSwiper(selector, options, name = '') {
		try {
			const element = document.querySelector(selector);

			if (!element) {
				console.warn(`Swiper element not found: ${selector}`);
				return null;
			}

			const swiper = new Swiper(selector, options);
			console.log(`Swiper ${name ? `"${name}" ` : ''}initialized: ${selector}`);
			return swiper;
		} catch (error) {
			console.error(`Failed to initialize swiper ${selector}:`, error);
			return null;
		}
	}

	const swipers = {
		video: createSwiper('.info_list_video_58f7bdc3', {
			direction: 'horizontal',
			slidesPerView: 1,
			navigation: {
				nextEl: '.info_swiper_button_next_video_58f7bdc3',
				prevEl: '.info_swiper_button_prev_video_58f7bdc3',
			}
		}, 'video'),

		photo: createSwiper('.info_list_photo_58f7bdc3', {
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
			}
		}, 'photo'),

		characters: createSwiper('.info_list_characters_58f7bdc3', {
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
					grid: { rows: 1 }
				},
				810: {
					spaceBetween: 15,
					slidesPerView: 8,
					grid: { rows: 1 }
				}
			}
		}, 'characters'),

		movies: createSwiper('.info_list_movies_58f7bdc3', {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
			breakpoints: {
				810: {
					slidesPerView: 5,
					spaceBetween: 20,
				}
			}
		}, 'movies'),

		otherArtist: createSwiper(".other_artists_58f7bdc3", {
			slidesPerView: 1,
			spaceBetween: 20,
			allowTouchMove: false,
			navigation: {
				nextEl: '.info_swiper_button_next_artist_58f7bdc3',
				prevEl: '.info_swiper_button_prev_artist_photo_58f7bdc3',
			}
		}, 'otherArtist')
	};

	window.updateAllSwipers = function() {
		Object.entries(swipers).forEach(([name, swiper]) => {
			if (swiper) {
				try {
					swiper.update();
					if (swiper.navigation) {
						swiper.navigation.update();
					}
				} catch (error) {
					console.error(`Failed to update ${name} swiper:`, error);
				}
			}
		});
	};

	window.swipers = swipers;
});
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
