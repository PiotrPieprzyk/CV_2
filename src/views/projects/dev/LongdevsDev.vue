<template>
	<project-holder>
		<template v-slot:headerContent>
			<content-holder>
				<template v-slot:left>
					<h1 class="bold">LongDevs</h1>
					<h4>
						was my first
						<primary>no commerce and social</primary> project that I created to
						developed new programmers. The project has encouraged to cooperate
						and exchange of experience.
					</h4>
					<h4 class="bold">Main challenges:</h4>
					<ul>
						<li>establishing a learning path</li>
						<li>create places for joint projects</li>
						<li>gain skills as an instructor</li>
						<li>train interns in the company</li>
					</ul>
					<p>Link to <a>longdevs.com</a></p>
				</template>
				<template v-slot:right>right</template>
			</content-holder>
		</template>
		<template v-slot:mainContent>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">How did it start?</h4>
					<p>
						The following months of intensive study proved me that to create a
						good website <primary> I need people</primary>. It is not about
						specialization problems, but quite the opposite. The problem is to
						master all the areas related to web development.
					</p>

					<p>
						The ideas that began to emerge required more specialists. Front-end,
						Back-end, Dev-ops, Graphic Designer, UX Designer, SEO. Each of the
						roles has the foundation of a good website. That's why I created
						Longdevs.
					</p>
				</template>
			</content-holder>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">First internship</h4>
					<p>
						I already have a <primary>year and a half of experience</primary> as
						a Front-end developer. I have already gathered enough knowledge to
						introduce new students to the world of programming. New interns
						joined our company. I asked my boss if I could take care of their
						education. He agreed so I couldn't miss this opportunity.
					</p>
					<p>
						I started by creating a list of things to learn. They have the form
						of a check box list. It was supposed to find out from what level we
						start and then control the progress.
					</p>
					<p>Link to <a>learning shedule</a>.</p>
					<p>
						You can check a comparison of interns' knowledge before and after
						two months at the end of this article.
					</p>
				</template>
			</content-holder>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">Study of internship</h4>
					<p>
						Every day, I had the opportunity to devote one hour to an intern. At
						the end of the lessons, I asked them what would you like to learn
						tomorrow.
					</p>
					<p>Sample topics:</p>
					<ul>
						<li>What is a variable?</li>
						<li>How to reduce code by functions?</li>
						<li>Asynchronical code - what is a Promise?</li>
						<li>
							How to do your work schedule? How could help us tools like a to-do
							list or xMind?
						</li>
						<li>Array methods and ESNext</li>
						<li>
							Start with a simple code then add libraries - why VueX is not
							always a solution.
						</li>
					</ul>
					<p>
						Link to the presentation
						<a
							>"Start with a simple code then add libraries - why VueX is not
							always a solution."</a
						>
					</p>
				</template>
			</content-holder>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">Defects</h4>
					<p>
						There were also failures. Halfway through the education of the
						trainees, they did well. At such a moment, I overdid on the next
						task. PageGenerator. The assumption was theoretically simple, but
						the execution was too complex. Interns had a hard to figure out how
						to organize out all the code.
					</p>
					<p>Link to graphic project <a>PageGenerator</a>.</p>
					<p>However, the two things we had learned. It is worth to:</p>
					<ul>
						<li>learning from small projects and</li>
						<li>leaving at the right moment</li>
					</ul>
				</template>
			</content-holder>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">Effects</h4>
					<p>
						The internship was over. Then it was time to evaluate. The trainees
						have a few pleasant words.
					</p>
				</template>
			</content-holder>
		</template>
		<template v-slot:footerContent>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">Overview</h4>
					<p>
						I am pleased with the beginning of this project. Of course, this is
						not the end. There is a plan to implement new people with already
						gathered knowledge. Who knows what will come?
					</p>
				</template>
			</content-holder>

			<content-holder>
				<template v-slot:left>
					<p>
						Thank you for reading
					</p>
					<p>
						If you are interested to hire me I invite you to check mine About me
						page where you can check my actual full list of skills, and download
						my CV.
					</p>
					<p>
						<a href="/gemini">About page</a><br />
						<a href="/gemini">CV</a>
					</p>
				</template>
			</content-holder>
		</template>
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
