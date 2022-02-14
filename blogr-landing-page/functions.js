window.onload = () => {
	// Get all dropdowns
	const dropdowns = document.querySelectorAll(".dropdown")

	// Add Click event listeners to dropdowns
	dropdowns.forEach(dropdown => {
		dropdown.addEventListener("click", e => {
			e.stopImmediatePropagation()

			dropdown.classList.toggle("dropdown-active")

			dropdowns.forEach(d => {
				if (d.getAttribute("id") !== dropdown.getAttribute("id")) {
					d.classList.remove("dropdown-active")
				}
			})
		})
	})

	//Add Click event listener to body to close dropdowns when clicking elsewhere
	const body = document.querySelector("body")

	body.addEventListener("click", e => {
		dropdowns.forEach(dropdown => {
			dropdown.classList.remove("dropdown-active")
		})
	}, {capture: false})

	// Get mobile menu toggle button
	const menuToggle = document.querySelector(".menu-toggle")

	// Get the nav content to be toggled
	const navContentToggle = document.querySelector("#nav-content-toggle")

	menuToggle.addEventListener("click", e => {
		menuToggle.classList.toggle("icon-active")
		navContentToggle.classList.toggle("nav-content-active")
	})
}