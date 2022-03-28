const PROJECTS = [
	{ // Countries API
		name: "Where in the World",
		thumbnail: {
			src: "assets/countries-api-preview.jpg",
			alt: "Preview of the Where in the World app",
		},
		technologies: ["HTML", "CSS", "JS", "REACT"],
		links: {
			demo: "https://simoneclr.github.io/fm-countries-api",
			code: "https://github.com/simoneclr/fm-countries-api"
		}
	},

	{ // Jobs Listings
		name: "Jobs Listings",
		thumbnail: {
			src: "assets/jobs-listings-preview.jpg",
			alt: "Preview of a Jobs listings board",
		},
		technologies: ["HTML", "CSS", "JS", "REACT"],
		links: {
			demo: "https://simoneclr.github.io/fm-jobs-listings/",
			code: "https://github.com/simoneclr/fm-jobs-listings"
		}
	},

	{ // Loopstudios Landing Page
		name: "Loopstudios Landing Page",
		thumbnail: {
			src: "loopstudios-landing-page/design/desktop-preview.jpg",
			alt: "Preview of Loopstudios landing page",
		},
		technologies: ["HTML", "CSS", "JS"],
		links: {
			demo: "https://simoneclr.github.io/Frontend-Mentor-Challenges/loopstudios-landing-page",
			code: "https://github.com/simoneclr/Frontend-Mentor-Challenges/tree/main/loopstudios-landing-page"
		}
	},

	{ // Blogr Landing Page
		name: "Blogr Landing Page",
		thumbnail: {
			src: "blogr-landing-page/design/desktop-preview.jpg",
			alt: "Preview of Blogr landing page",
		},
		technologies: ["HTML", "CSS", "JS"],
		links: {
			demo: "https://simoneclr.github.io/Frontend-Mentor-Challenges/blogr-landing-page",
			code: "https://github.com/simoneclr/Frontend-Mentor-Challenges/tree/main/blogr-landing-page"
		}
	},

	{ // Huddle Landing Page
		name: "Huddle Landing Page",
		thumbnail: {
			src: "huddle-landing-page/design/desktop-preview.jpg",
			alt: "Preview of Huddle Landing Page",
		},
		technologies: ["HTML", "CSS"],
		links: {
			demo: "https://simoneclr.github.io/Frontend-Mentor-Challenges/huddle-landing-page",
			code: "https://github.com/simoneclr/Frontend-Mentor-Challenges/tree/main/huddle-landing-page"
		}
	},

	{ // FAQ Accordion Card
		name: "FAQ Accordion Card",
		thumbnail: {
			src: "faq-accordion-card/design/desktop-preview.jpg",
			alt: "Preview of a FAQ Accordion",
		},
		technologies: ["HTML", "CSS"],
		links: {
			demo: "https://simoneclr.github.io/Frontend-Mentor-Challenges/faq-accordion-card",
			code: "https://github.com/simoneclr/Frontend-Mentor-Challenges/tree/main/faq-accordion-card"
		}
	},

	{ // Order Summary Card
		name: "Order Summary Card",
		thumbnail: {
			src: "order-summary-component/design/desktop-preview.jpg",
			alt: "Preview of an order summary card",
		},
		technologies: ["HTML", "CSS"],
		links: {
			demo: "https://simoneclr.github.io/Frontend-Mentor-Challenges/order-summary-component",
			code: "https://github.com/simoneclr/Frontend-Mentor-Challenges/tree/main/order-summary-component"
		}
	},

	{ // QR Code Card
		name: "QR Code Card",
		thumbnail: {
			src: "qr-code-component/design/desktop-preview.jpg",
			alt: "Preview of a QR Code card",
		},
		technologies: ["HTML", "CSS"],
		links: {
			demo: "https://simoneclr.github.io/Frontend-Mentor-Challenges/qr-code-component",
			code: "https://github.com/simoneclr/Frontend-Mentor-Challenges/tree/main/qr-code-component"
		}
	}
]

window.onload = () => {
	// Retrieve project template
	var projectCardTemplate = document.getElementById("hb-project-card").innerHTML

	// Compile template
	var projectCard = Handlebars.compile(projectCardTemplate)

	// Create html
	var html = PROJECTS.map(project => projectCard(project)).join("")

	// Add html to the page
	document.getElementById("projects").innerHTML = html
}
