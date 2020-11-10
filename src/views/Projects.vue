<template>
	<div class="projects">
		<h1 class="bold">Projects</h1>
		<h4 class="mt-2">/ Frontend developer</h4>
		<div class="projects-wrapper d-grid grid-col-4 grid-row-md-2">
			<router-link
				to="/dev/longdevs"
				class="project-link-holder col-4 col-md-1"
			>
				<h4>Longdevs.pl</h4>
			</router-link>
			<router-link
				to="/dev/gemini"
				class="project-link-holder col-4 col-md-1 row-md-2"
			>
				<div class="img-holder">
					<img
						src="@/assets/projects/images/Gemini-logo.jpg"
						alt=""
						style="width: 150px; height: 150px"
					/>
				</div>
			</router-link>
			<div class="project-link-holder d-none d-md-flex col-md-2 row-md-2">
				<div class="img-holder">
					<img src="@/assets/projects/images/dazai.png" alt="" />
				</div>
			</div>
			<div class="project-link-holder col-4 col-md-1">
				<h4 class="bold">LAB</h4>
			</div>
		</div>
		<h4>/ Web desinger</h4>
		<div class="projects-wrapper d-grid grid-col-4 grid-row-md-2">
			<div class="project-link-holder d-none d-md-flex col-md-2 row-md-2">
				<div class="img-holder">
					<img src="@/assets/projects/images/dazai.png" alt="" />
				</div>
			</div>
			<router-link
				to="/design/longdevs"
				class="project-link-holder col-4 col-md-1"
			>
				<h4>LONGDEVS</h4>
			</router-link>
			<router-link
				to="/design/pagegenerator"
				class="project-link-holder col-4 col-md-1"
			>
				<h4>Page Generator</h4>
			</router-link>

			<router-link
				to="/design/inteligentlearning"
				class="project-link-holder col-4 col-md-1"
			>
				<h4>Inteligent<br />Learning</h4>
			</router-link>
			<router-link
				to="/design/learningplan"
				class="project-link-holder col-4 col-md-1"
			>
				<h4>Learning Plan</h4>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		console.log("projects");
	}
};
</script>

<style lang="scss" scope>
@use '../scss/variables' as *;

.projects {
	width: 100%;
	max-width: 410px;
	display: flex;
	flex-direction: column;
	.projects-wrapper {
		width: 100%;
		grid-gap: 36px;
		gap: 36px;
		grid-template-rows: 200px 200px;
		margin: 60px 0;
		.project-link-holder {
			width: 100%;
			height: 100%;
			min-height: 200px;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			background: map-get($map: $colors, $key: "white");
		}
	}
}

@media (min-width: $md) {
	.projects {
		max-width: 1100px;
		.img-holder {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			img {
				width: 100%;
				height: auto;
			}
		}
	}
}
</style>
