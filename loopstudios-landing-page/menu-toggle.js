window.onload = () => {
	// Select the menu toggle button
	const menuToggle = document.querySelector("#menu-toggle")

	// Select the navbar to toggle
	const navToggle = document.querySelector("#navbar-toggle")

	// Select the body
	const body = document.querySelector("body")

	// Add event listener to button to open/close the menu
	menuToggle.addEventListener("click", e => {
		// Prevent from triggering the body click event
		e.stopImmediatePropagation()

		navToggle.classList.toggle("menu-open")
	})

	// Add event listener to the body to close the menu when clicking anywhere
	body.addEventListener("click", e => {
		e.stopImmediatePropagation()

		navToggle.classList.remove("menu-open")
	})
}