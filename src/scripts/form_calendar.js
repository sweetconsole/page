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