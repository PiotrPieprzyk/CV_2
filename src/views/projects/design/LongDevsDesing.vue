<template>
	<div class="project-holder">
		<title-holder>
			Longdevs.pl
		</title-holder>
		<a
			target="_blank"
			class="design-project-holder"
			href="https://www.figma.com/file/1HslhI3X3ZNU8MKFJL4AC2/LongDevs.pl?node-id=0%3A1"
		>
			<img src="@/assets/projects/design/longdevs.jpg" alt="" />
		</a>
		<div class="link-holder">
			<p>
				Link to
				<a
					target="_blank"
					href="https://www.figma.com/file/1HslhI3X3ZNU8MKFJL4AC2/LongDevs.pl?node-id=0%3A1"
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
