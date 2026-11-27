<template>
	<div class="home">
		<div class="card d-md-grid grid-col-md-12">
			<div class="title-holder col-md-6">
				<h1 class="bold">Fullstack <br />Developer</h1>
				<h4>/ Senior FE Engineer</h4>
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
				<img :src="myPhoto" alt="Piotr Pieprzyk" width="367" height="409" />
			</div>
			<div class="img-holder__desktop d-none d-md-block col-md-6">
				<img :src="myPhoto" alt="Piotr Pieprzyk" width="367" height="409" />
			</div>
			<div class="skills-wrapper mt-6 mt-md-8 col-md-12">
				<div v-for="(icon, index) in myIcons" :key="index" class="ico-holder">
					<img
						:src="icon.src"
						:alt="icon.alt"
						:width="icon.w"
						:height="icon.h"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import myPhoto from "@/assets/home/images/Piotr_Pieprzyk_Photo2.webp";
import vueIco from "@/assets/home/icons/Vue.svg";
import reactIco from "@/assets/home/icons/React.svg";
import nextIco from "@/assets/home/icons/Nextjs.svg";
import typescriptIco from "@/assets/home/icons/Typescript.svg";
import slashIco from "@/assets/home/icons/slash.svg";
import nodeIco from "@/assets/home/icons/Nodejs.svg";
import postgresIco from "@/assets/home/icons/Postgresql.svg";
import awsIco from "@/assets/home/icons/Aws.svg";
import terraformIco from "@/assets/home/icons/Terraform.svg";

export default {
	data() {
		return {
			myIcons: [
				{ src: vueIco, alt: "Vue", w: 27, h: 24 },
				{ src: reactIco, alt: "React", w: 23, h: 24 },
				{ src: nextIco, alt: "Next.js", w: 24, h: 24 },
				{ src: typescriptIco, alt: "TypeScript", w: 25, h: 24 },
				{ src: slashIco, alt: "", w: 10, h: 28 },
				{ src: nodeIco, alt: "Node.js", w: 24, h: 24 },
				{ src: postgresIco, alt: "PostgreSQL", w: 24, h: 24 },
				{ src: awsIco, alt: "AWS", w: 38, h: 24 },
				{ src: terraformIco, alt: "Terraform", w: 24, h: 24 }
			],
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
				top: 50%;
				width: 140px;
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
@media (min-width: $sm) {
	.home {
		.card {
			.img-holder {
				.quato-holder {
					top: 45%;
					width: 160px;
				}
			}
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
				// explicit width so the card (a flex item sized by content)
				// is as wide before the photo loads as after
				width: 367px;
				max-width: 100%;
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
