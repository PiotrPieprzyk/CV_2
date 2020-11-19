<template>
	<div class="project-holder" :class="{ fluid: fluid }">
		<transition name="fade">
			<div v-if="isFloatingInfoVisibile" class="floating-info">
				<div class="img-holder-outer">
					<div ref="imgHolderInner" class="img-holder-inner">
						<img :src="Circle" alt="" />
					</div>
				</div>
				<transition name="slide">
					<div :key="currentTitle" class="h4">
						{{ currentTitle }}
					</div>
				</transition>
			</div>
		</transition>
		<div
			class="header-content fade"
			:class="{ 'fade-active': isFloatingInfoVisibile }"
		>
			<slot name="headerContent"></slot>
		</div>
		<div
			ref="mainContent"
			class="main-content fade"
			:class="{ 'fade-active': !isFloatingInfoVisibile }"
		>
			<slot name="mainContent"></slot>
		</div>
		<div
			class="footer-content fade"
			:class="{ 'fade-active': isFloatingInfoVisibile }"
		>
			<slot name="footerContent"></slot>
		</div>
	</div>
</template>

<script>
import Circle from "../../assets/home/icons/Cricle.svg";

export default {
	props: {
		fluid: Boolean
	},
	data() {
		return {
			Circle,
			mainContentElement: {
				y: null,
				h: null
			},
			currentTitle: "components",
			currentProcent: null
		};
	},
	mounted() {
		const titlesElements = Array.from(
			this.$refs.mainContent.querySelectorAll("h4")
		);

		window.addEventListener("scroll", () => {
			const mainContentElement = this.$refs.mainContent;
			if (mainContentElement) {
				const mainContentProperties = {
					y:
						-mainContentElement.getBoundingClientRect().y +
						window.innerHeight / 2,
					h: mainContentElement.getBoundingClientRect().height,
					offsetTop: mainContentElement.offsetTop
				};

				const currentProcent =
					mainContentProperties.y / mainContentProperties.h;

				const titlesTexts = titlesElements.map(el => {
					return new Object({
						title: el.innerHTML,
						procentHeight:
							(el.offsetTop - mainContentProperties.offsetTop) /
							mainContentProperties.h
					});
				});

				const getCurrentElement = () => {
					const lenght = titlesTexts.length - 1;
					let i = lenght;
					while (i >= 0) {
						if (titlesTexts[i].procentHeight < currentProcent) {
							return titlesTexts[i];
						}
						i--;
					}
				};
				const currentElement = getCurrentElement();

				this.currentTitle = currentElement ? currentElement.title : "";

				this.currentProcent = currentProcent;

				const imgHolder = this.$refs.imgHolderInner;
				if (imgHolder) {
					imgHolder.style.width = `${currentProcent * 100}%`;
				}

				console.log(currentProcent);
			}
		});
	},
	computed: {
		isFloatingInfoVisibile() {
			return this.currentProcent > 0 && this.currentProcent < 1;
		}
	}
};
</script>

<style lang="scss" scope>
@use './src/scss/variables' as *;

.text-center {
	text-align: center;
}

.project-holder {
	max-width: 410px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.main-content,
	.footer-content,
	.header-content {
		width: 100%;
	}
}

.fluid {
	max-width: 100%;
}

.design-project-holder {
	display: flex;
	width: 100%;
	img {
		width: 100%;
	}
}

@media (min-width: $md) {
	.text-md-left {
		text-align: left;
	}
	.project-holder {
		max-width: 1100px;
	}
	.fluid {
		max-width: 1100px;
	}
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s ease-out;
}

.slide-enter-from {
	transform: translateY(-20px);
	opacity: 0;
}
.slide-leave-to {
	transform: translateY(20px);
	opacity: 0;
}

.fade {
	transition: all 0.3s ease;
	opacity: 1;
}
.fade.fade-active {
	opacity: 0.5;
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.floating-info {
	position: fixed;
	top: 40%;
	right: 19%;
	display: flex;
	width: 400px;
	height: 60px;
	align-items: center;
	.img-holder-outer {
		position: absolute;
		width: 50px;
		height: 50px;
		.img-holder-inner {
			height: 100%;
			width: 50%;
			overflow: hidden;
			img {
				width: 50px;
				height: auto;
			}
		}
	}

	.h4 {
		position: absolute;
		left: 66px;
	}
}
</style>
