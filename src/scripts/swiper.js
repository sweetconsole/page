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