<template>
	<div class="contact">
		<div class="card">
			<h1 class="bold">Contact</h1>
			<p>
				n: Piotr Pieprzyk
			</p>
			<p>e: piotr.pieprzyk.pp@gmail.com</p>
			<p>t: +48 886 169 843</p>
			<div class="links-holder">
				<p>links:</p>
				<img src="@/assets/contact/github.svg" alt="" />
				<img src="@/assets/contact/linked_in.svg" alt="" />
				<img src="@/assets/contact/stackoverflow.svg" alt="" />
			</div>
			<img
				ref="plane"
				class="paper-plane d-none d-md-block"
				src="@/assets/contact/paper_plane.svg"
				alt=""
			/>
		</div>
	</div>
</template>

<script>
import gsap from "gsap";

const animation = gsap.timeline();

export default {
	data() {
		return {
			plane: null
		};
	},
	mounted() {
		this.plane = this.$refs.plane;
		animation.from(this.plane, {
			duration: 2,
			x: 200,
			y: 50,
			opacity: 0,
			ease: "back"
		});

		animation.play();
	}
};
</script>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.contact {
	max-width: 410px;

	.card {
		display: flex;
		flex-direction: column;
		height: fit-content;
		.links-holder {
			display: flex;
			> * {
				margin-right: 24px;
			}
		}
		> * {
			margin-bottom: 24px;
		}
	}
}

@media (min-width: $md) {
	.contact {
		width: 100%;
		max-width: 700px;
		display: flex;
		justify-content: center;
		align-items: center;
		.card {
			padding: 60px;
			width: 100%;
			background: map-get($map: $colors, $key: "white");
			position: relative;
		}
		@keyframes flyingPlane {
			0% {
				top: 45%;
			}
			20% {
				top: 35%;
			}
			40% {
				top: 45%;
			}
		}
		.paper-plane {
			position: absolute;
			right: 15%;
			top: 45%;
			width: 150px;
			transition: none;
			animation: 6s flyingPlane infinite;
		}
	}
}
</style>
