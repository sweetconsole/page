
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