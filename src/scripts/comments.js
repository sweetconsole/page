const commentsBlock = document.querySelector('.info_comments_list_58f7bdc3');
const buttonComments = document.getElementById("info_comment_add_58f7bdc3")
const commentsCount = commentsBlock.getElementsByTagName('li').length

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