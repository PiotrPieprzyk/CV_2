<template>
	<div class="titleHolder">
		<h4>Project</h4>
		<h1 class="bold text-h3 text-md-h1">
			<slot></slot>
		</h1>
	</div>
</template>
<style lang="scss" scoped>
@use './src/scss/variables' as *;

.titleHolder {
	width: 100%;
	max-width: 650px;
	margin: 0 auto;
	right: 0;
	left: 0;
	text-align: left;
}

@media (min-width: $md) {
	.titleHolder {
		text-align: center;
	}
}
</style>
