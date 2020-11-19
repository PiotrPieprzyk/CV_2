<template>
	<div class="project-holder" :class="{ fluid: fluid }">
		<transition name="fade">
			<div v-if="isMobile && isFloatingInfoVisibile" class="floating-info">
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
			<transition name="fade">
				<div class="scroll-me" v-if="!isFloatingInfoVisibile && isMobile">
					Scroll me
				</div>
			</transition>
		</div>
		<div
			ref="mainContent"
			class="main-content fade mt-6"
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
			currentProcent: null,
			windowWidth: window.innerWidth,
			isMobile: false
		};
	},
	mounted() {
		this.runFloatingReadingProgress();
		this.onResize();
		window.addEventListener("scroll", this.runFloatingReadingProgress);
		window.addEventListener("resize", this.onResize);
	},
	unmounted() {
		window.removeEventListener("scroll", this.runFloatingReadingProgress);
		window.removeEventListener("resize", this.onResize);
	},
	computed: {
		isFloatingInfoVisibile() {
			return this.currentProcent > 0 && this.currentProcent < 1;
		}
	},
	methods: {
		onResize() {
			this.isMobile = window.innerWidth > 1100;
		},
		runFloatingReadingProgress() {
			const mainContentProperties = this.getMainContnentProperties();
			const titleElementFromMainContent = this.getTitleElementFromMainContent();

			if (mainContentProperties && titleElementFromMainContent) {
				const percentageOfMainContentRead = this.getPercentageOfMainContentRead(
					mainContentProperties
				);
				const titlesProperties = this.getTitlesProperties(
					titleElementFromMainContent,
					mainContentProperties
				);
				const currentTitle = this.getCurrentTitle(
					titlesProperties,
					percentageOfMainContentRead
				);

				this.currentTitle = currentTitle ? currentTitle.title : "";
				this.currentProcent = percentageOfMainContentRead;

				const imgHolder = this.$refs.imgHolderInner;
				if (imgHolder) {
					imgHolder.style.width = `${percentageOfMainContentRead * 100}%`;
				}
			}
		},
		getMainContnentProperties() {
			const refToMainContentElementHtml = this.$refs.mainContent;
			if (refToMainContentElementHtml) {
				const mainContentProperties = {
					// offset from top edge main content wrapper from middle of window height
					offsetFromMiddle:
						-refToMainContentElementHtml.getBoundingClientRect().y +
						window.innerHeight / 2,
					height: refToMainContentElementHtml.getBoundingClientRect().height,
					offsetTopEdgeOf: refToMainContentElementHtml.offsetTop
				};
				return mainContentProperties;
			} else {
				new Error("Something gone wrong with getMainContnentProperties");
			}
		},
		getPercentageOfMainContentRead(mainContentProperties) {
			const percentage =
				mainContentProperties.offsetFromMiddle / mainContentProperties.height;
			if (percentage) {
				return percentage;
			} else {
				new Error("Something gone wrong with getPercentageOfMainContentRead");
			}
		},
		getTitleElementFromMainContent() {
			const titlesElements = Array.from(
				this.$refs.mainContent.querySelectorAll("h4")
			);
			if (titlesElements && titlesElements.length > 0) {
				return titlesElements;
			} else {
				new Error("Something gone wrong with getH4Element");
			}
		},
		getTitlesProperties(titlesElements, mainContentProperties) {
			return titlesElements.map(el => {
				return new Object({
					title: el.innerHTML,
					procentHeight: el.offsetTop / mainContentProperties.height
				});
			});
		},
		getCurrentTitle(titlesElements, percentageOfMainContentRead) {
			const lenght = titlesElements.length - 1;
			let i = lenght;
			while (i >= 0) {
				if (titlesElements[i].procentHeight < percentageOfMainContentRead) {
					return titlesElements[i];
				}
				i--;
			}
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		min-height: calc(100vh - 155px);
		position: relative;
	}
	.header-content {
		align-items: center;
		.scroll-me {
			position: absolute;
			bottom: 30px;
		}
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
	left: calc(50% + 100px);
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
