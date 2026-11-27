// Fullstack side projects shown on /projects and /cases/:slug.
// caseUrl: link to the full case study, or null while it is being written.
// codeUrl: public repository, or null when the repo is private.
export default [
	{
		slug: "simple-shop",
		title: "Simple shop",
		subtitle: "serverless e-commerce",
		description: [
			"An online shop for an artist who sells mostly one-of-a-kind pieces, so the same item must never be sold twice.",
			"Checkout reserves stock for 20 minutes, PayU payments are verified by signature, InPost shipments and refunds are handled from signed owner links, and every email is sent exactly once.",
			"It runs serverless on AWS for about $0.2 a month, as a modular monolith with linter-enforced module boundaries and 438 story-driven test cases."
		],
		technologies: [
			"Next.js 16",
			"React 19",
			"TypeScript",
			"Sanity CMS",
			"DynamoDB",
			"AWS Lambda (OpenNext)",
			"CloudFront & WAF",
			"SES",
			"Terraform",
			"GitHub Actions",
			"Vitest"
		],
		caseUrl: "https://case.shop.piotrpieprzyk.com/",
		codeUrl: null
	},
	{
		slug: "tree-felling-page",
		title: "Tree felling page",
		subtitle: "CMS landing page",
		description: [
			"A one-page site for a tree felling company where every text and image is editable in a CMS, and publishing triggers a redeploy in about 2 minutes.",
			"Its quote form uploads photos straight from the browser to a private S3 bucket and emails them to the owner, protected by Cloudflare Turnstile.",
			"It is a static Next.js export on S3 and CloudFront with two small Lambdas, built in about 9 days and kept under $1 a month."
		],
		technologies: [
			"Next.js 16 (static export)",
			"React 19",
			"Tailwind CSS 4",
			"Sanity CMS",
			"SST v4",
			"AWS S3, CloudFront, Lambda, SES",
			"Cloudflare Turnstile",
			"PostHog",
			"GitHub Actions"
		],
		caseUrl: null,
		codeUrl: null
	},
	{
		slug: "tic-tac-toe",
		title: "Tic tac toe",
		subtitle: "with own server",
		description: [
			"A real-time multiplayer tic tac toe with rooms, where the host starts the game and moves are pushed to players over WebSockets.",
			"I built it to practise backend development end to end: a contract-first REST and WebSocket API, Clean Architecture with DDD aggregates, and PostgreSQL with migrations.",
			"It runs in Docker on AWS EC2 and RDS provisioned with Terraform, reachable only through a Cloudflare Tunnel."
		],
		technologies: [
			"React 19",
			"Vite",
			"Tailwind CSS 4",
			"Node.js",
			"Express",
			"WebSockets",
			"PostgreSQL",
			"OpenAPI",
			"Docker Compose",
			"Terraform",
			"AWS EC2 & RDS",
			"Jest & Vitest"
		],
		caseUrl: null,
		codeUrl: "https://github.com/PiotrPieprzyk/tic-tac-toe-game-with-server"
	}
];
