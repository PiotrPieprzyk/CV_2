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
	gap: 48px;
	.holder {
		flex: 1;
		max-width: 450px;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 36px;
		img {
			width: 100%;
			height: auto;
		}
	}
}
</style>
