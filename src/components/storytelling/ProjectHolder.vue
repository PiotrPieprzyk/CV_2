<template>
	<div class="project-holder" :class="{ fluid: fluid }">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		fluid: Boolean
	},
	mounted() {
		console.log(this.fluid);
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
</style>
