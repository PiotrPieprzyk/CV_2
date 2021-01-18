import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home2.vue";

const projects = [
	{
		path: "/dev/gemini",
		name: "Gemini",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/projects/dev/Gemini.vue")
	},
	{
		path: "/dev/longdevs",
		name: "LongDevsDev",
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../views/projects/dev/LongdevsDev.vue"
			)
	},
	{
		path: "/design/longdevs",
		name: "LongdevsDesign",
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../views/projects/design/LongDevsDesing.vue"
			)
	},
	{
		path: "/design/learningplan",
		name: "LearningPlan",
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../views/projects/design/LearningPlan.vue"
			)
	},
	{
		path: "/design/inteligentlearning",
		name: "InteligentLearning",
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../views/projects/design/InteligentLearning.vue"
			)
	}
];

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue")
	},
	{
		path: "/contact",
		name: "Contact",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Contact.vue")
	},
	...projects,
	{
		path: "/projects",
		name: "Projects",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Projects.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.afterEach(() => {
	window.scrollTo(0, 0);
});

export default router;
