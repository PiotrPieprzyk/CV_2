<template>
	<div class="project-holder">
		<title-holder>
			Inteligent Learning
		</title-holder>
		<a
			target="_blank"
			class="design-project-holder"
			href="https://www.figma.com/file/qfoH0tsbC1dxBgV6nEMQoD/Inteligent-Learning"
		>
			<img src="@/assets/projects/design/InteligentLearning.jpg" alt="" />
		</a>
		<div class="link-holder">
			<p>
				Link to
				<a
					target="_blank"
					href="https://www.figma.com/file/qfoH0tsbC1dxBgV6nEMQoD/Inteligent-Learning"
					>Figma</a
				>
			</p>
		</div>
	</div>
</template>

<script>
import TitleHolder from "@/components/storytelling/TitleHolder.vue";

export default {
	components: {
		TitleHolder
	}
};
</script>

<style lang="scss" scoped>
@use './src/scss/variables' as *;

.project-holder {
	max-width: 410px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: calc(100vh - 155px);
	position: relative;
	& > * {
		margin-bottom: 60px;
	}
	.design-project-holder {
		width: 100%;
		img {
			width: 100%;
		}
	}
}
@media (min-width: $md) {
	.project-holder {
		max-width: 1100px;
	}
}
</style>
