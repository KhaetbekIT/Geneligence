import AnimeImage from "@public/assets/projects/anime.png";
import BurgerImage from "@public/assets/projects/burger.png";
import CinemaImage from "@public/assets/projects/cinema.png";
import DeliveryImage from "@public/assets/projects/delivery.png";
import FilmatekaImage from "@public/assets/projects/filmateka.png";
import HipsumBlog from "@public/assets/projects/hipsum-blog.png";
import JunitImage from "@public/assets/projects/junit.png";
import KeyboardImage from "@public/assets/projects/keyboard.png";
import MiShopImage from "@public/assets/projects/mi-shop.png";
import OzoneImage from "@public/assets/projects/ozone.png";
import SolarisImage from "@public/assets/projects/solaris.png";
import TravelImage from "@public/assets/projects/travel.png";
import type { StaticImageData } from "next/image";
import { Router } from "@/configs/router.config";

export const ProjectsData: ProjectData[] = [
	{
		title: "Keyboard",
		description:
			"keyboard is a learning project of a virtual keyboard created to practice handling key events, DOM elements, and input display. the project is built with pure html, css, and javascript. it includes visual feedback for key presses, supports input from a physical keyboard, handles special keys like backspace, enter, and space, and has a clean and easy-to-understand code structure. the goal of the project is to develop skills in user input interaction and building an interactive interface without using third-party libraries.",
		image: KeyboardImage,
		link: {
			github: "https://github.com/KhaetbekIT/Keyboard",
			global: Router.projects.keyboard,
		},
		id: crypto.randomUUID(),
	},

	{
		id: crypto.randomUUID(),
		title: "Burger",
		description:
			"Chedder Burgers is a training project — a simple one-page burger restaurant website created for learning purposes. The main goal was to practice layout techniques, responsive design, and basic UI elements using modern front-end tools. The website is built using HTML5, SCSS, and follows the BEM methodology. It features a clean layout, responsive design for different screen sizes, and a simple structure with header, main content, and footer sections. There’s a section showcasing burger menu items, styled form elements, and smooth layout behavior across devices. Important: This is not a real commercial website — it was built as a learning exercise.",
		image: BurgerImage,
		link: {
			github: "https://github.com/KhaetbekIT/Burger",
			global: Router.projects.burger,
		},
	},
	{
		id: crypto.randomUUID(),
		title: "Cinema",
		description:
			"Cinema is a training project for an online movie streaming website. It was created to practice responsive layout using HTML and SCSS. The project features a modern UI, adaptive design for various devices, a flexible grid system, and styles following the BEM methodology. This is a single-page website hosted on GitHub Pages. The goal of the project is to improve frontend development skills and experience with CSS preprocessors.",
		image: CinemaImage,
		link: {
			github: "https://github.com/KhaetbekIT/Cinema",
			global: Router.projects.cinema,
		},
	},
	{
		id: crypto.randomUUID(),
		title: "Filmateka",
		description:
			"Filmateka is a learning project created as part of a frontend development course. The website allows users to search for movies, view detailed information, add favorites, and switch between light and dark themes. The project showcases skills in working with APIs, managing state via LocalStorage, and building responsive layouts.",
		image: FilmatekaImage,
		link: {
			github: "https://github.com/KhaetbekIT/Filmateka",
			global: Router.projects.filmateka,
		},
	},
	{
		id: crypto.randomUUID(),
		title: "Hipsum Blog",
		description:
			"Hipsum Blog is a learning project created to practice modern layout techniques. It is a responsive blog template built using pure HTML, SCSS, and JavaScript without any frameworks. The focus was on clean typography, grid-based layout, semantic HTML structure, and adaptive design for multiple screen sizes. The goal of this project was to improve frontend skills in structuring styles, using responsive breakpoints, and writing maintainable code.",
		image: HipsumBlog,
		link: {
			github: "https://github.com/KhaetbekIT/Hipsum-Blog",
			global: Router.projects.hipsumBlog,
		},
	},
	{
		id: crypto.randomUUID(),
		title: "Solaris",
		description:
			"Solaris — educational project. Solaris is a training web project created to practice responsive layout, HTML, CSS, and basic JavaScript. The project is an informative landing page about car sales. Technology stack: HTML5, SCSS (with variables, mixins, @extend), responsive layout with breakpoints, BEM methodology, minimal JavaScript (if used). Implemented: cross-browser and responsive layout, well-structured file system, use of SCSS and mixins for responsive design, modern layout with flexbox, semantic and clean code. Project goal: to strengthen layout and styling skills, and to learn working with frontend architecture in a learning environment.",
		image: SolarisImage,
		link: {
			github: "https://github.com/KhaetbekIT/Solaris",
			global: Router.projects.solaris,
		},
	},
	{
		id: crypto.randomUUID(),
		title: "Junit",
		description:
			"Junit is a learning project created to practice HTML, CSS, SASS, JS and responsive web design. It is a simple one-page landing layout with clean structure, consistent typography, and mobile-friendly responsiveness using media queries. The main goal of the project is to improve layout skills, work with SASS features like variables and mixins, and strengthen understanding of responsive design principles.",
		image: JunitImage,
		link: {
			github: "https://github.com/KhaetbekIT/Junit",
			global: Router.projects.junit,
		},
	},
	{
		id: crypto.randomUUID(),
		title: "Anime",
		description:
			"Anime is a learning project developed during the study of frontend development. It’s a simple anime catalog with a modern user interface. The main goal of the project is to practice layout creation, responsive design, and basic UI development. The project is built using HTML, SCSS, and JavaScript. It's deployed via GitHub Pages. This is a non-commercial project, made purely for educational purposes and to demonstrate fundamental skills.",
		image: AnimeImage,
		link: {
			github: "https://github.com/KhaetbekIT/Anime",
			global: Router.projects.anime,
		},
	},
	{
		id: crypto.randomUUID(),
		title: "Mi-Shop",
		description:
			"Mi-Shop is a learning project that represents a simple, responsive online store layout built with HTML, SCSS, and JavaScript, created for practicing front-end development skills.",
		image: MiShopImage,
		link: {
			github: "https://github.com/KhaetbekIT/MiShop",
			global: Router.projects.miShop,
		},
	},

	{
		id: crypto.randomUUID(),
		title: "Ozone",
		description:
			"Description: Ozone is a responsive educational website created to practice frontend development skills using HTML, SCSS, and basic JavaScript. The project is a landing page with multiple content sections, including product cards, icons, modal windows, and a subscription form. Project Goal: To improve skills in modern layout techniques and build a clean, structured website using reusable and scalable code. Technologies: HTML5 with semantic structure; SCSS (BEM naming, mixins, variables); Responsive layout using media queries; JavaScript (for menu toggle, scrolling, and interactions).  Features: Fully responsive on all devices; Custom SCSS mixins for breakpoints (@mixin Responsive)",
		image: OzoneImage,
		link: {
			github: "https://github.com/KhaetbekIT/Ozone",
			global: Router.projects.ozone,
		},
	},
	{
		id: crypto.randomUUID(),
		title: "Delivery Food",
		description:
			"Delivery Food is a learning project created to practice frontend development skills. It is a simple web application for online food ordering. The main features include: Viewing a list of restaurants and their menus; Adding food items to the cart; Responsive layout that works on all devices; Loading data dynamically from JSON files; Saving orders using localStorage",
		image: DeliveryImage,
		link: {
			github: "https://github.com/KhaetbekIT/Delivery-Food",
			global: Router.projects.delivery,
		},
	},
	{
		id: crypto.randomUUID(),
		title: "ForestTravel",
		description:
			"This is a simple landing page built as part of a front-end practice project. The goal was to learn and improve skills in layout structuring, responsive design, and clean UI development. Main features: Semantic HTML5 and modern CSS; SCSS for styling and structure; Responsive design for mobile, tablet, and desktop;  Grid & Flexbox layout system; Clean, minimal UI with basic interaction; This project was created purely for learning purposes and does not include any backend or advanced logic. It helped solidify my understanding of building static websites from scratch.",
		image: TravelImage,
		link: {
			github: "https://github.com/KhaetbekIT/Travel",
			global: Router.projects.delivery,
		},
	},
];

interface ProjectData {
	title: string;
	description: string;
	image: string | StaticImageData;
	link: {
		global: string;
		github?: string;
	};
	id: string;
}
