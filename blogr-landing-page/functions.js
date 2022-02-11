window.onload = () => {
	// Get all dropdowns
	const dropdowns = document.querySelectorAll(".dropdown")

	// Add Click event listeners to dropdowns
	dropdowns.forEach(dropdown => {
		dropdown.addEventListener("click", e => {
			e.stopImmediatePropagation()

			dropdown.classList.toggle("active")

			dropdowns.forEach(d => {
				if (d.getAttribute("id") !== dropdown.getAttribute("id")) {
					d.classList.remove("active")
				}
			})
		})
	})

	//Add Click event listener to body to close dropdowns when clicking elsewhere
	const body = document.querySelector("body")
	body.addEventListener("click", e => {
		dropdowns.forEach(dropdown => {
			dropdown.classList.remove("active")
		})
	}, {capture: false})
}