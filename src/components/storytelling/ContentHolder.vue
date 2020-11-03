<template>
	<div class="project-content">
		<div class="holder">
			<slot name="left"></slot>
		</div>
		<div class="holder d-none d-md-flex">
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
	gap: 60px;
	.holder {
		flex: 1;
		max-width: 450px;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 26px;
		img {
			width: 100%;
			height: auto;
		}
	}
}
@media (min-width: $sm) {
	.project-content .holder {
		gap: 36px;
	}
}
@media (min-width: $md) {
	.project-content {
		max-width: 1100px;
		.holder {
			gap: 36px;
		}
	}
}
</style>
