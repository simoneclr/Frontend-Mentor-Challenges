window.onload = () => {
	// Get body
	const body = document.querySelector("body")

	// Get the navbar toggle button
	const navToggle = document.querySelector(".js-navbar-toggle")

	// Get navbar's backdrop
	const navBackdrop = document.querySelector(".js-navbar-backdrop")

	// Get all nav links
	const navLinks = document.querySelectorAll(".js-nav-link")

	// Toggle navbar's nav-open attribute when clicking navToggle button
	navToggle.addEventListener("click", e => {
		if (body.dataset.navOpen == "false") {
			body.dataset.navOpen = true
		} else {
			body.dataset.navOpen = false
		}
	})

	// When the user clicks the backdrop, close the nav menu
	navBackdrop.addEventListener("click", e => {
		body.dataset.navOpen = false
	})

	// When a navlink is clicked, close the nav menu
	navLinks.forEach(navlink => navlink.addEventListener("click", e => {
		body.dataset.navOpen = false
	}))
}
