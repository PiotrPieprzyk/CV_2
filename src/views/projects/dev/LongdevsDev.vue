<template>
	<project-holder>
		<content-holder>
			<template v-slot:left>left</template>
			<template v-slot:right>right</template>
		</content-holder>
	</project-holder>
</template>

<script>
import ProjectHolder from "@/components/storytelling/ProjectHolder.vue";
import ContentHolder from "@/components/storytelling/ContentHolder.vue";

export default {
	components: {
		ProjectHolder,
		ContentHolder
	}
};
</script>

<style></style>
