window.onload = () => {
	// Mobile Navbar toggle
	const navbarToggle = document.querySelector("#navbar-toggle")

	// Add click event listener to button
	navbarToggle.addEventListener("click", (e) => {
		// Check if the nav menu is open
		const isNavOpen = e.currentTarget.getAttribute("data-nav-open")

		// Toggle expanded status
		if (isNavOpen === "true" ) {
			e.currentTarget.setAttribute("data-nav-open", "false")
		} else {
			e.currentTarget.setAttribute("data-nav-open", "true")
		}		
	})
}
