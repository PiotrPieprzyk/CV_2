<template>
	<div v-if="project" class="case">
		<div class="card">
			<h4>Project</h4>
			<h1 class="bold mt-2">{{ project.title }}</h1>
			<h4 class="light mt-2">/ {{ project.subtitle }}</h4>

			<div class="description mt-6">
				<p v-for="(sentence, index) in project.description" :key="index">
					{{ sentence }}
				</p>
			</div>

			<h4 class="bold mt-6">Technologies</h4>
			<ul class="tech-list mt-4">
				<li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
			</ul>

			<div class="links mt-6">
				<a
					v-if="project.caseUrl"
					class="case-link bold"
					:href="project.caseUrl"
					target="_blank"
					rel="noopener"
					>Read the case study →</a
				>
				<p v-else class="coming-soon">Case study coming soon</p>
				<p v-if="project.codeUrl">
					<a :href="project.codeUrl" target="_blank" rel="noopener"
						>Source code on GitHub</a
					>
				</p>
			</div>

			<p class="mt-6">
				<router-link to="/projects" class="back">← All projects</router-link>
			</p>
		</div>
	</div>
	<div v-else class="case">
		<div class="card">
			<h1 class="bold">Not found</h1>
			<p class="mt-4">
				<router-link to="/projects" class="back">← All projects</router-link>
			</p>
		</div>
	</div>
</template>

<script>
import cases from "@/data/cases.js";

export default {
	computed: {
		project() {
			return cases.find(item => item.slug === this.$route.params.slug);
		}
	}
};
</script>

<style lang="scss" scoped>
@use '../../scss/variables' as *;

.case {
	width: 100%;
	max-width: 410px;
	.card {
		display: flex;
		flex-direction: column;
	}
	.links > * + * {
		margin-top: 12px;
	}
	.description p + p {
		margin-top: 12px;
	}
	.tech-list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		padding: 0;
		list-style: none;
		li {
			padding: 4px 12px;
			border: 1px solid map-get($map: $colors, $key: "black");
			font-size: 16px;
		}
	}
	.case-link {
		color: map-get($map: $colors, $key: "primary");
		font-size: map-get($map: $typography, $key: "h4");
		text-decoration: underline;
	}
	.coming-soon {
		font-style: italic;
		color: map-get($map: $colors, $key: "primary");
	}
	.back {
		font-weight: 700;
		text-decoration: underline;
	}
}

@media (min-width: $md) {
	.case {
		max-width: 860px;
		.card {
			background: map-get($map: $colors, $key: "white");
			padding: 60px;
		}
	}
}
</style>
