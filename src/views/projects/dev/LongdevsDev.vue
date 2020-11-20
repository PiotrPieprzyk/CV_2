<template>
	<project-holder>
		<template v-slot:headerContent>
			<content-holder>
				<template v-slot:left>
					<h1 class="bold">LongDevs</h1>
					<h4>
						Longdevs was my first <primary>no commercial project</primary> that
						I created to train new computer programmers. The project was meant
						to encourage cooperation and exchange of experience.
					</h4>
					<h4 class="bold">Main challenges:</h4>
					<ul>
						<li>establishing a learning path</li>
						<li>create places for joint projects</li>
						<li>gain skills as an instructor</li>
						<li>train interns in the company</li>
					</ul>
					<!-- TO DO -->
					<!-- <p>Link to <a>longdevs.com</a></p> -->
				</template>
				<template v-slot:right>right</template>
			</content-holder>
		</template>
		<template v-slot:mainContent>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">How did it start?</h4>
					<p>
						The following months, of intensive study, proved to me that
						<primary>teamwork is essential</primary> in creating good websites.
						Working with others makes it possible to master all the areas
						related to web development, such as Front-end, Back-end, Dev-ops,
						Graphic Designer, UX Designer, SEO.
					</p>
					<p>That's why I created Longdevs!</p>
				</template>
			</content-holder>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">First internship</h4>
					<p>
						I already have a <primary>year and a half of experience</primary> as
						a front-end developer. Knowledge gathered during that time enables
						me to introduce new interns to the world of programming. I asked my
						boss if I could take care of their education. He agreed so I
						couldn't miss this opportunity.
					</p>
					<p>
						I started by establishing a catalog of practical skills, in a form
						of a check box list. This allowed me to find out the current level
						of knowledge and then control the progress.
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
						Every day I spend one hour working with interns. At the end of each
						lesson, I was asking them what would they like to learn tomorrow.
					</p>
					<p>Sample topics:</p>
					<ul>
						<li>What is a variable?</li>
						<li>How to reduce code by functions?</li>
						<li>Asynchronical code - what is a Promise?</li>
						<li>
							How to prepare your work schedule? Why tools like to-do list or
							xMind are helpful?
						</li>
						<li>Array methods and ESNext</li>
						<li>
							Start with a simple code then add libraries - why VueX is not
							always a solution.
						</li>
					</ul>
				</template>
			</content-holder>

			<content-holder>
				<template v-slot:left>
					<h4 class="bold">Effects</h4>
					<p>
						The internship was over. Then it was time to evaluate. The trainees
						leave me with a few pleasent words
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
						<router-link to="/about">About page</router-link><br />
						<a
							href="https://drive.google.com/file/d/1ZJ48vm2Ll7nVdGI047QxrvRx-5D60dPD/view?usp=sharing"
							>CV</a
						>
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
