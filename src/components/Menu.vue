<template>
	<div ref="menu" class="menu-holder">
		<div class="header-holder">
			<button class="pa-4" @click="$emit('toggle-menu')">Back</button>
			<router-link to="/" class="name">Piotr Pieprzyk</router-link>
		</div>
		<div class="navigation-wrapper">
			<router-link class="big" to="/projects"
				><div class="h1">Projects</div></router-link
			>
			<router-link class="big" to="/about"
				><div class="h1">About</div></router-link
			>
			<router-link class="big" to="/contact"
				><div class="h1">Contact</div></router-link
			>
		</div>
		<div class="navigation-wrapper">
			<a href="https://stackoverflow.com/users/story/14174739" class="small"
				>Stackoverflow</a
			>
			<a
				href="https://www.linkedin.com/in/piotr-pieprzyk-608164185/"
				class="small"
				>LinkedIn</a
			>
		</div>
	</div>
</template>

<script>
import gsap from "gsap";
export default {
	emits: ["toggle-menu"],
	watch: {
		$route() {
			this.$emit("toggle-menu");
		}
	},
	mounted() {
		const menuElement = this.$refs.menu;
		const bigLinksElements = Array.from(menuElement.querySelectorAll(".big"));
		const smallLinksElements = Array.from(
			menuElement.querySelectorAll(".small")
		);
		const timeline = gsap.timeline({});

		timeline.from([...bigLinksElements, ...smallLinksElements], {
			opacity: 0,
			y: "+=20",
			stagger: 0.1
		});
	}
};
</script>

<style lang="scss" scoped>
@use './src/scss/variables' as *;
.menu-holder {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	min-height: 100vh;
	background: map-get($map: $colors, $key: "black");
	color: map-get($map: $colors, $key: "white");
	z-index: 3;

	.header-holder {
		display: flex;
		justify-content: space-between;
		padding: 24px;

		button,
		.name {
			font-size: map-get($map: $typography, $key: "h4");
		}
	}
	.navigation-wrapper {
		display: flex;
		flex-direction: column;
		padding: 24px;
		> .big {
			font-size: map-get($map: $typography, $key: "h2");
			font-weight: 700;
		}
		> * {
			margin-bottom: map-get($map: $margines, $key: "2");
		}
	}
}
</style>
