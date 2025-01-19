<template>
	<div class="about">
		<div class="d-grid grid-col-4">
			<div class="col-4 col-md-2">
				<h1 class="bold mb-2">
					About
				</h1>
				<p class="mr-md-8">
					Programing became my passion since the 2018. Now I'm working as a
					Front-end developer. <br />I enjoy working with people and for people.
					I'm open to new projects and challenges, constantly ready to learn new
					things. Fanatic of writing reusable, easy to maintain, and clean code.
				</p>
			</div>
			<div class="col-4 col-md-2">
				<a
					target="_blank"
					class="cv-holder"
					href="https://drive.google.com/file/d/1tnODAx9MTdGeZk8ZiA31olRFNbHY-iOC/view?usp=sharing"
				>
					<h3 class="text-holder bold">Download CV</h3>
					<img :src="CvImage" alt="" />
				</a>
			</div>
		</div>
		<h4 class="bold mb-6 mt-8">
			Full list of skills
		</h4>
		<p class="mb-6">
			The full list of skills can be found on the
			<a target="_blank" href="https://roadmap.sh/u/piotrpieprzyk">roadmap</a>
			webpage.
		</p>
		<div class="d-grid grid-col-4">
			<div class="col-12 roadmap-image-holder">
				<img :src="RoadmapImage" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
import CvImage from "../assets/about/cv.png";
import RoadmapImage from "../assets/about/roadmap_image.png";
export default {
	data() {
		return {
			CvImage,
			RoadmapImage
		};
	}
};
</script>
<style lang="scss" scoped>
@use '../scss/variables' as *;

.about {
	max-width: 410px;
	& > * {
		gap: 36px;
	}
	.cv-holder {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		overflow: hidden;
		position: relative;
		height: 100%;
		.text-holder {
			position: absolute;
			top: 36px;
			left: 36px;
		}
		img {
			width: auto;
			height: 100%;
			display: flex;
			align-items: center;
		}
	}
	.roadmap-image-holder {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		overflow: hidden;
		position: relative;
		height: 600px;

		img {
			position: absolute;
			width: 100%;
			height: auto;
			display: flex;
			align-items: center;
		}
	}
	.card {
		background: map-get($map: $colors, $key: "white");
		padding: 36px;
		& > * {
			margin-bottom: map-get($map: $margines, $key: "2");
		}
	}
}
@media (min-width: $md) {
	.about {
		max-width: 1100px;
	}
}
</style>
