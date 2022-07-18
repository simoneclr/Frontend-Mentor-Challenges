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

	// Select navbar button
	const navToggle = document.querySelector("#btn-nav-toggle")

	const nav = document.querySelector("nav")
	nav.dataset.navOpen = false

	navToggle.addEventListener("click", () => {
		if (nav.dataset.navOpen === "false") {
			nav.dataset.navOpen = true
		} else {
			nav.dataset.navOpen = false
		}
	})
}