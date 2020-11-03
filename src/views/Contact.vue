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
				class="paper-plane d-none d-md-block"
				src="@/assets/contact/paper_plane.svg"
				alt=""
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.contact {
	max-width: 410px;

	.card {
		display: flex;
		flex-direction: column;
		gap: 24px;
		height: fit-content;
		.links-holder {
			display: flex;
			gap: 24px;
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
			25% {
				top: 40%;
			}
			75% {
				top: 50%;
			}
			100% {
				top: 45%;
			}
		}
		.paper-plane {
			position: absolute;
			right: 15%;
			top: 45%;
			width: 150px;
			transition: ease-in-out;
			animation: 5s flyingPlane infinite;
		}
	}
}
</style>
