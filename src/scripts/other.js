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
			buttonImage.src = "./image/pause.png";
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
			buttonImage.src = "./image/play.svg";
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
			buttonImage.src = "./image/play.svg";
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