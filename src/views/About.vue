<template>
	<div class="about">
		<div class="d-grid grid-col-4">
			<div class="col-4 col-md-2">
				<h1 class="bold mb-2">
					About
				</h1>
				<p class="mr-md-8">
					Programing became my passion since the winter of 2019. Now I'm working
					as a Front-end developer. <br />I enjoy working with people and for
					people. I'm open to new projects and challenges, constantly ready to
					learn new things. Fanatic of writing reusable, easy to maintain, and
					clean code.
				</p>
			</div>
			<div class="col-4 col-md-2">
				<a
					class="cv-holder"
					href="https://drive.google.com/file/d/1ZJ48vm2Ll7nVdGI047QxrvRx-5D60dPD/view?usp=sharing"
				>
					<h3 class="text-holder bold">Download CV</h3>
					<img :src="CvImage" alt="" />
				</a>
			</div>
		</div>
		<h4 class="bold mb-6 mt-8">
			Full list of skills
		</h4>
		<div class=" d-grid grid-col-4">
			<div class="col-4 col-md-2">
				<div class="card">
					<h3 class="bold">Front-end</h3>
					<p>Level / proficient</p>
					<ul>
						<li>
							HTML
						</li>
						<li>CSS</li>
						<ul>
							<li>
								SCSS
							</li>
						</ul>
						<li>JavaScript</li>
						<li>
							Git
						</li>
						<li>
							Vue
							<ul>
								<li>Vue2/3</li>
								<li>VueX</li>
								<li>VueRouter</li>
							</ul>
						</li>
						<li>VSCode</li>
						<li>Prettier</li>
						<li>ESLint</li>
					</ul>
					<p>Level / good</p>
					<ul>
						<li>Vuetify</li>
						<li>
							React
							<ul>
								<li>Redux</li>
								<li>Styled Components</li>
								<li>React router</li>
							</ul>
						</li>
					</ul>
					<p>Level / basic</p>
					<ul>
						<li>Vue cli</li>

						<li>Next.js</li>

						<li>Gsap</li>
						<li>
							Github
						</li>
						<li>Netlify</li>
					</ul>
				</div>
			</div>
			<div class="col-4 col-md-2">
				<div class="card mb-6">
					<h3 class="bold">UI Designer</h3>
					<p>Level / proficient</p>
					<ul>
						<li>Figma</li>
					</ul>
					<p>Level / basic</p>
					<ul>
						<li>
							Material Design
						</li>
						<li>
							Responsive Web Desing
						</li>
					</ul>
				</div>
				<div class="card mb-6">
					<h3 class="bold">Tester</h3>
					<p>Level / good</p>
					<ul>
						<li>Cypress</li>
					</ul>
				</div>
				<ul>
					<li>Experience with Jira and Agile workflow</li>
					<li>Knowledge about SEO</li>
				</ul>
			</div>
		</div>
		<h4 class="bold my-6">
			Learning Schedule
		</h4>

		<div class=" d-grid grid-col-4">
			<div class="col-4 col-md-2">
				<h4 class="bold my-6">
					1/4 2021
				</h4>
				<ul class="mb-6">
					<li>English C1</li>
				</ul>
				<div class="card">
					<h3 class="bold">Front-end</h3>
					<ul>
						<li>Webpack</li>
						<li>Node.js</li>
					</ul>
				</div>
				<h4 class="bold my-6">
					2/4 2021
				</h4>
				<div class="card">
					<h3 class="bold">Marketing</h3>
					<ul>
						<li>Facebook marketing</li>
					</ul>
				</div>
				<div class="card mt-6">
					<h3 class="bold">Front-end</h3>
					<ul>
						<li>PWA</li>
						<li>A11Y</li>
					</ul>
				</div>
			</div>
			<div class="d-none d-md-block col-md-2"></div>
		</div>
	</div>
</template>

<script>
import CvImage from "../assets/about/cv.png";
export default {
	data() {
		return {
			CvImage
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
		align-items: start;
		overflow: hidden;
		position: relative;
		.text-holder {
			position: absolute;
			top: 36px;
			left: 36px;
		}
		img {
			width: 100%;
			height: auto;
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
