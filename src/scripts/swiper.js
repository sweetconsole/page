const characters = new Swiper('.info_list_characters_58f7bdc3', {
	loop: true,
	spaceBetween: 15,
	slidesPerView: 9,
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

const movies_list = new Swiper('.info_list_movies_58f7bdc3', {
	slidesPerView: 5,
	spaceBetween: 20,
	loop: true
});

const other_artist = new Swiper(".other_artists_58f7bdc3", {
	slidesPerView: 6,
	spaceBetween: 30,
	navigation: {
		nextEl: '.info_swiper_button_next_photo_58f7bdc3',
		prevEl: '.info_swiper_button_prev_photo_58f7bdc3',
	},
})