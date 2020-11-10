<template>
	<div class="appholder">
		<transition name="fade" mode="out-in">
			<menu-mobile
				v-if="menuActive"
				@toggle-menu="menuActive = !menuActive"
			></menu-mobile>
		</transition>
		<header>
			<div class="links-wrapper ">
				<div class="link-holder d-none d-md-flex">
					<router-link to="/projects">Projects</router-link>
					<img :src="Circle" alt="" />
				</div>
				<div class="link-holder d-none d-md-flex">
					<router-link to="/about">About</router-link>
					<img :src="Rectangle" alt="" />
				</div>
				<div class="link-holder d-none d-md-flex">
					<router-link to="/contact">Contact</router-link>
					<img :src="Triagle" alt="" />
				</div>

				<button class="d-block d-md-none" @click="menuActive = !menuActive">
					Menu
				</button>
			</div>
			<div>
				<router-link to="/">Piotr Pieprzyk</router-link>
			</div>
		</header>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script>
import Circle from "../src/assets/home/icons/Cricle.svg";
import Rectangle from "../src/assets/home/icons/Rectangle.svg";
import Triagle from "../src/assets/home/icons/triagle.svg";
import MenuMobile from "./components/Menu";
export default {
	data() {
		return {
			Circle,
			Triagle,
			Rectangle,
			menuActive: false
		};
	},
	components: {
		MenuMobile
	}
};
</script>

<style lang="scss">
@use 'scss/style';
@use 'scss/generic';
@use 'scss/variables' as *;
@use 'scss/typography' as *;

body {
	top: 0;
	margin: 0;
	background: map-get($map: $colors, $key: "grey");
	color: map-get($map: $colors, $key: "black");
	font-weight: 400;
	text-align: left;
	font-family: "Poppins", sans-serif;
	font-size: 18px;
}

header {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	padding: 24px;
	display: flex;
	justify-content: space-between;
	font-size: 24px;
	box-sizing: border-box;
	z-index: 2;
}

.appholder {
	position: relative;
	padding: 90px 24px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	min-height: 100vh;
	box-sizing: border-box;
}

.links-wrapper {
	display: flex;
}

@media (min-width: $md) {
	header {
		flex-direction: row-reverse;
		padding: 60px;
	}
	.appholder {
		padding: 155px 60px;
	}
	.link-holder {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 36px;

		a {
			z-index: 1;
		}
		img {
			position: absolute;
			width: 50px;
			height: 50px;
			opacity: 0;
			transition: 0.2s ease-in;
		}
		&:hover {
			img {
				opacity: 1;
			}
		}
	}
}

//  ANIMATION ROUTING

.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
