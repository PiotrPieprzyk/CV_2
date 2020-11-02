<template>
	<project-holder :fluid="true">
		<title-holder>
			Learning plan for frontend developer
		</title-holder>
		<a class="design-project-holder" href="">
			<img src="@/assets/projects/design/LearningPlan.jpg" alt="" />
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
