<template>
	<div class="home">
		<div class="card d-md-grid grid-col-md-12">
			<div class="title-holder col-md-6">
				<h1 class="bold">Frontend <br />Developer</h1>
				<h4>/ Web Designer</h4>
				<h4 class="d-none d-md-block mt-md-8">
					“ ... who <span class="text-primary bold">loves</span> great<br />
					looking, and optimized<br />
					websites ”
				</h4>
			</div>
			<div class="img-holder mt-6 d-md-none">
				<div class="quato-holder">
					<h4>
						“ ... who <span class="text-primary bold">loves</span> great<br />
						looking, and optimized<br />
						websites ”
					</h4>
				</div>
				<img :src="myPhoto" alt="" />
			</div>
			<div class="img-holder__desktop d-none d-md-block col-md-6">
				<img :src="myPhoto" alt="" />
			</div>
			<div class="skills-wrapper mt-6 mt-md-8 col-md-12">
				<div v-for="(icon, index) in myIcons" :key="index" class="ico-holder">
					<img :src="icon" alt="" />
				</div>
			</div>
		</div>
		<div class="floating-info-holder mt-8">
			<p class="text-primary">currently <br />looking for job</p>
			<img :src="elipseIco" alt="" />
		</div>
	</div>
</template>

<script>
import myPhoto from "@/assets/home/images/Piotr_Pieprzyk_Photo.png";
import vueIco from "@/assets/home/icons/Vue.svg";
import reactIco from "@/assets/home/icons/React.svg";
import cypressIco from "@/assets/home/icons/Cypress.svg";
import TypescriptIco from "@/assets/home/icons/Typescript.svg";
import webpacktIco from "@/assets/home/icons/Webpack.svg";
import figmaIco from "@/assets/home/icons/Figma.svg";
import materialDesingIco from "@/assets/home/icons/Material_Desing.svg";
import slashIco from "@/assets/home/icons/slash.svg";
import elipseIco from "@/assets/home/icons/Ellipse.svg";

export default {
	data() {
		return {
			myIcons: [
				vueIco,
				reactIco,
				cypressIco,
				TypescriptIco,
				webpacktIco,
				slashIco,
				figmaIco,
				materialDesingIco
			],
			elipseIco,
			myPhoto
		};
	}
};
</script>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.home {
	width: 100%;
	max-width: 410px;
	.card {
		.img-holder {
			width: 100%;
			height: 350px;
			position: relative;
			.quato-holder {
				position: absolute;
				top: 35%;
				width: 160px;
				z-index: 1;
			}
			img {
				position: absolute;
				width: auto;
				height: 100%;
				left: 86px;
			}
		}
		.skills-wrapper {
			width: 100%;
			display: flex;
			justify-content: space-between;
			.ico-holder {
				height: 24px;
				img {
					height: 100%;
					width: auto;
				}
			}
		}
	}
	.floating-info-holder {
		display: flex;
		flex-direction: column;
		align-items: center;
		right: 0;
		left: 0;
		margin-right: auto;
		margin-left: auto;
		p {
			text-align: center;
			color: #e78174;
		}
		> * {
			margin-bottom: 12px;
		}
	}
}
@media (min-width: $md) {
	.home {
		max-width: 860px;
		display: flex;
		align-items: center;
		.card {
			background: map-get($map: $colors, $key: "white");
			padding: 36px;
			.skills-wrapper {
				width: 100%;
				justify-content: flex-start;
				> * {
					margin-right: 40px;
				}
			}
		}
		.img-holder__desktop {
			img {
				width: 100%;
				margin-top: -100px;
			}
		}
		.floating-info-holder {
			position: fixed;
			bottom: 60px;
			right: 60px;
			left: auto;
			margin-right: 0;
			margin-left: auto;
		}
	}
}
</style>
