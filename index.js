const PROJECTS = {
	apps: [
		{ // E-Commerce
			name: "Sneakers E-Commerce",
			thumbnail: {
				src: "assets/e-commerce-preview.jpg",
				alt: "Preview of an E-Commerce app",
			},
			technologies: ["REACT", "REDUX", "Tailwind"],
			links: {
				demo: "https://simoneclr.github.io/fm-e-commerce/",
				code: "https://github.com/simoneclr/fm-e-commerce"
			}
		},
		{ // Comments Section
			name: "Comments Section",
			thumbnail: {
				src: "assets/comments-section-preview.jpg",
				alt: "Preview of a Comments Section app",
			},
			technologies: ["HTML", "CSS", "JS", "REACT", "REDUX"],
			links: {
				demo: "https://simoneclr.github.io/fm-comments-section/",
				code: "https://github.com/simoneclr/fm-comments-section"
			}
		},

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
		{ // Credit Card Details
			name: "Credit Card Details",
			thumbnail: {
				src: "assets/card-details-preview.jpg",
				alt: "Preview of a Credit Card Details App",
			},
			technologies: ["TypeScript", "REACT"],
			links: {
				demo: "https://simoneclr.github.io/fm-card-details/",
				code: "https://github.com/simoneclr/fm-card-details"
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
	],

	landingPages: [
		{ // Loopstudios Landing Page
			name: "Room Homepage",
			thumbnail: {
				src: "room-homepage/design/desktop-preview.jpg",
				alt: "Preview of Room homepage",
			},
			technologies: ["HTML", "CSS", "Tailwind", "JS"],
			links: {
				demo: "https://simoneclr.github.io/Frontend-Mentor-Challenges/room-homepage",
				code: "https://github.com/simoneclr/Frontend-Mentor-Challenges/tree/main/room-homepage"
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
	],

	cards: [
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
}

window.onload = () => {
	// Retrieve project template
	var projectCardTemplate = document.getElementById("hb-project-card").innerHTML

	// Compile template
	var projectCard = Handlebars.compile(projectCardTemplate)

	// Create html
	const appsShelf = PROJECTS.apps.map(project => projectCard(project)).join("")

	const landingPagesShelf = PROJECTS.landingPages.map(project => projectCard(project)).join("")

	const cardsShelf = PROJECTS.cards.map(project => projectCard(project)).join("")

	// Add html to the page
	document.getElementById("apps-shelf").innerHTML = appsShelf

	document.getElementById("landing-pages-shelf").innerHTML = landingPagesShelf

	document.getElementById("cards-shelf").innerHTML = cardsShelf
}
