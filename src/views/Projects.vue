<template>
	<div class="projects">
		<h1 class="bold">Projects</h1>
		<h4 class="mt-2">/ Frontend developer</h4>
		<div class="projects-wrapper d-grid grid-col-4 grid-row-md-2">
			
			<router-link
				to="/dev/een"
				class="project-link-holder col-4 grid-el-1"
			>
				<div class="img-holder">
					<img
						src="@/assets/projects/images/een-logo.webp"
						alt=""
						style="width: 150px; height: 150px"
					/>
				</div>
			</router-link>
			
			<router-link
				to="/dev/gemini"
				class="project-link-holder col-4 grid-el-2"
			>
				<div class="img-holder">
					<img
						src="@/assets/projects/images/Gemini-logo.jpg"
						alt=""
						style="width: 150px; height: 150px"
					/>
				</div>
			</router-link>

			<div class="project-link-holder d-none d-md-flex col-4 grid-el-5">
				<div class="img-holder">
					<img
						src="@/assets/projects/images/tracy-adams-YSkuPlvE4nc-unsplash.jpg"
						alt=""
					/>
				</div>
			</div>
			
			<router-link
				to="/dev/longdevs"
				class="project-link-holder col-4 grid-el-3"
			>
				<div class="light">
					<p class="h4">Longdevs</p>
					<p class="light">for interns</p>
				</div>
			</router-link>

			<router-link
				to="/design/learningplan"
				class="project-link-holder col-4 grid-el-4"
			>
				<div class="h4">Learning shedule</div>
			</router-link>

			
			
		</div>
		<h4>/ Web desinger</h4>
		<div class="projects-wrapper d-grid grid-col-4 grid-row-md-2">
			<div class="project-link-holder d-none d-md-flex col-md-2 row-md-2">
				<div class="img-holder">
					<img
						src="@/assets/projects/images/glenn-carstens-peters-P1qyEf1g0HU-unsplash.jpg"
						alt=""
					/>
				</div>
			</div>
			<router-link
				to="/design/longdevs"
				class="project-link-holder col-4 col-md-1 row-md-2"
			>
				<div class="light">
					<p class="h4">Longdevs</p>
					<p class="light">web desing</p>
				</div>
			</router-link>

			<router-link
				to="/design/inteligentlearning"
				class="project-link-holder col-4 col-md-1 row-md-2"
			>
				<div class="h4">Inteligent<br />Learning</div>
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
	.grid-el-1 {
		grid-column: 1;
		grid-row: 1;
	}

	.grid-el-2 {
		grid-column: 1;
		grid-row: 2;
	}

	.grid-el-3 {
		grid-column: 2;
		grid-row: 1;
	}

	.grid-el-4 {
		grid-column: 2;
		grid-row: 2;
	}

	.grid-el-5 {
		grid-column: 3/5;
		grid-row: 1/3;
	}

	.grid-col-4 {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
	
	.projects {
		max-width: 1100px;
		.img-holder {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			position: relative;
			img {
				width: 100%;
				height: auto;
			}
			.text {
				position: absolute;
				bottom: 20px;
				left: 36px;
				color: map-get($map: $colors, $key: "white");
				text-align: left;
			}
		}
	}
}
</style>
