<template>
	<project-holder :fluid="true">
		<title-holder>
			PageGenerator
		</title-holder>
		<a class="design-project-holder" href="">
			<img src="@/assets/projects/design/PageGenerator.jpg" alt="" />
		</a>
		<div class="link-holder">
			<p>Link to <a href="">Figma</a></p>
		</div>
	</project-holder>
</template>

<script>
import TitleHolder from "@/components/storytelling/TitleHolder.vue";
import ProjectHolder from "@/components/storytelling/ProjectHolder.vue";

export default {
	components: {
		ProjectHolder,
		TitleHolder
	}
};
</script>

<style lang="scss" scoped></style>
