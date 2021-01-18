<template>
	<div class="project-content">
		<div class="holder mr-md-3">
			<slot name="left"></slot>
		</div>
		<div class="holder ml-md-3 d-none d-md-flex">
			<slot name="right"></slot>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			text: "text"
		};
	}
};
</script>
<style lang="scss" scope>
@use './src/scss/variables' as *;

.project-content {
	width: 100%;
	display: flex;
	justify-content: space-between;
	.holder {
		flex: 1;
		max-width: 450px;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		img {
			width: 100%;
			height: auto;
		}
		& > * {
			margin-bottom: 26px;
		}
	}
}
@media (min-width: $sm) {
	.project-content .holder {
		& > * {
			margin-bottom: 36px;
		}
	}
}
@media (min-width: $md) {
	.project-content {
		max-width: 1100px;
	}
}
</style>
