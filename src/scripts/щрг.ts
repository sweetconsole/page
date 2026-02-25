
const artist_list = document.getElementById('other_list_artist_58f7bdc3').getElementsByClassName('card_58f7bdc3')

let audios = []

audios.push(new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3"));

for (let key = 1; key < artist_list.length +  1; key++) {
	let currentProgress = 0
	let targetProgress = 0
	let animationFrame = null
	const audio = new Audio("https://storage.kupigolos.ru/audio/demo/5881cd5a01f49.mp3")

	audios.push(audio);

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

	circle.set(0);

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

		if (!animationFrame && targetProgress !== 1) {
			animationFrame = requestAnimationFrame(smoothAnimation)
		}

		if (targetProgress === 1) {
			circle.set(0);
		}
	});

	audio.addEventListener('ended', function() {
		circle.set(0);

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
	for (let key = 1; key < artist_list.length +  1; key++) {
		const buttonImage = document.getElementById(`button_${key}`);
		const block = document.getElementById(`artist_${key}`);

		if (key.toString() !== id) {
			buttonImage.classList = "player_button_play_58f7bdc3"
			buttonImage.src = "./image/play.svg"
			block.classList.remove("other_artist_active_58f7bdc3");
			audios[id].pause();
		} else {
			if (audios[id].isPlaying) {
				audios[id].pause();
				buttonImage.classList = "player_button_play_58f7bdc3"
				buttonImage.src = "./image/play.svg"
				block.classList.remove("other_artist_active_58f7bdc3");
			} else {
				artist_list[id].isAudioEnded = false;
				audios[id].play();
				buttonImage.classList = "player_button_pause_58f7bdc3"
				buttonImage.src = "./image/pause.png"
				block.classList.add("other_artist_active_58f7bdc3");
			}

			artist_list[id].isPlaying = !artist_list[id].isPlaying;
		}
	}
}