<template>
	<project-holder>
		<template v-slot:headerContent>
			<content-holder>
				<template v-slot:left>
					<h1 class="bold d-none d-md-block">Gemini</h1>
					<img
						class="d-block d-md-none"
						src="@/assets/projects/dev/gemini/gemini-project-small.png"
						alt=""
						style="height: 190px"
					/>
					<h4 class="text-center text-md-left">
						That was the first commercial project which I participated in as a
						<primary>Frontend developer</primary> working for a big company.
					</h4>
					<h4 class="text-center text-md-left">
						I was working with the NXO team on maintaining the Gemini pharmacy
						website.
					</h4>
					<h4 class="bold">
						Main challenges:
					</h4>
					<ul>
						<li>
							work with Vue and Less/Sass solutions, and use it to optimize code
						</li>
						<li>
							work with Jira Software
						</li>
						<li>
							Agile teamwork
						</li>
						<li>
							Communication with client
						</li>
						<li>
							independent work organization
						</li>
					</ul>
				</template>
				<template v-slot:right>
					<img
						src="@/assets/projects/dev/gemini/big-apteka-gemini.png"
						alt=""
					/>
				</template>
			</content-holder>
		</template>
		<template v-slot:mainContent>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">
						My response: Learning
					</h4>
					<p>
						I have been given three months to learn under the supervision of one
						of my colleagues. At that time, I spend 8 - 12 hours learning each
						day. I went through courses such as: "JavaScript - The Complete
						Guide 2020" and "Vue - The Complete Guide" by Maximilian
						Schwarzmüller.
					</p>
					<p>
						I read documentation on<primary> MDN</primary>,
						<primary>Vue.js</primary>, and <primary> Medium articles</primary> .
						Simultaneously I prepared many small projects in order to gain
						practical knowledge.
					</p>
				</template>
				<template v-slot:right> </template>
			</content-holder>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">
						DOING
					</h4>
					<p>
						I was entrusted with many tasks and had to
						<primary>independently organize</primary> my work schedule. Subsides
						prepared by me are: Contact, FAQ, Regulations, Complaints, Payment,
						Delivery, Ask the pharmacist, and Withdrawal from the contract and
						more.
					</p>
					<p>
						Throughout all this work, I have developed
						<primary>three main skills</primary>
						. The ability to plan, create functions and components, and create
						connections.
					</p>
				</template>
			</content-holder>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">
						PLANING
					</h4>
					<img src="@/assets/projects/dev/gemini/detailed_plan.png" alt="" />
					<p>
						This is one of my favorite activities. It allows me to know
						<primary>exactly what to do</primary>. The list of tasks turned out
						to be super useful, especially when I was returning to work after
						the weekend.
					</p>
					<p>
						Another advantage of planning my day was the
						<primary>reduction of the time needed to complete the task</primary
						>. Each saved hour I spent reading study material and I was able to
						develop all the time.
					</p>
				</template>
			</content-holder>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">
						COMPONENTS
					</h4>
					<img src="@/assets/projects/dev/gemini/Components.png" alt="" />
					<p>
						Another useful skill is writing reusable code. After creating a few
						components, I was producing pages faster. Writing time was often
						reduced by up to 40%. Additionally, a code containing components was
						much shorter and easier to
						<primary>maintain</primary>.
					</p>
				</template>
			</content-holder>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">
						CONNECTION
					</h4>
					<p>
						I learned a lot from collaborating with NXO and Gemini Teams.
						Firstly I became familiar with <primary> Agile workflow</primary>.
					</p>
					<p>
						The second thing I learned from working with Gemini is the ability
						to use <primary>Figma</primary>! Thanks to my colleagues I got to
						know about the tool and tried it myself. It quickly became my main
						design tool. Additionally, starting with Figma, I found out how
						interesting the design process itself is and decided to develop
						myself in this area.
					</p>
				</template>
			</content-holder>
		</template>
		<template v-slot:footerContent>
			<content-holder>
				<template v-slot:left>
					<h4 class="bold">
						OVERVIEW
					</h4>
					<p>
						Summing up, working for Gemini in cooperation with NXO was a new and
						interesting experience. While working on this project, I learned
						that by making connections, you can gather a lot more knowledge. The
						main things I have learned are:
					</p>
					<ul>
						<li>
							Vue
						</li>
						<li>
							Less / Sass
						</li>
						<li>
							Jira & Agile
						</li>
						<li>
							Organization of work
						</li>
						<li>
							Figma
						</li>
						<li>
							Ability to create components
						</li>
						<li>
							KISS, DRY - Code
						</li>
					</ul>
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
							href="https://drive.google.com/file/d/1lrrRf5A27IzZMApA9uiXGFcQrVGuohtv/view?usp=sharing"
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

<style lang="scss" scoped></style>
