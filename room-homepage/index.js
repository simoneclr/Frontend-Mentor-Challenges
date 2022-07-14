window.onload = () => {
	// Select gallery buttons
	const btnGalleryNext = document.querySelector("#btn-gallery-next")
	const btnGalleryPrev = document.querySelector("#btn-gallery-prev")

	// Select header
	const hero = document.querySelector("#hero")
	hero.dataset.heroSlide = 1

	// Handle next button click event
	btnGalleryNext.addEventListener("click", () => {
		if (parseInt(hero.dataset.heroSlide) < 3) {
			hero.dataset.heroSlide = parseInt(hero.dataset.heroSlide) + 1
		}
	})

	// Handle previous button click event
	btnGalleryPrev.addEventListener("click", () => {
		if (parseInt(hero.dataset.heroSlide) > 1) {
			hero.dataset.heroSlide = parseInt(hero.dataset.heroSlide) - 1
		}
	})	
}