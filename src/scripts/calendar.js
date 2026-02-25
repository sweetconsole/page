
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