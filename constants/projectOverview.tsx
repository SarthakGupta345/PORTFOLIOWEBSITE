export const projectOverviews = [
    {
        title: "Vercel Clone",
        image: "https://www.aashishjaini.me/projects/siteease.jpg",
        slug: "Vercel Clone: Cloud Deployment Platform with CI/CD Magic",
        tagline:
            "A simplified clone of Vercel's deployment platform with CI/CD capabilities.",
        features: [
            "Developed a Vercel-like deployment platform with a user-friendly UI for seamless project uploads via Git repos.",
            "Designed a deployment pipeline where projects are stored in AWS S3, built using dynamic environment detection, and served via cloud storage.",
            "Implemented automatic CI/CD with Redis-backed queues for real-time build tracking and deployment updates.",
        ],
        techStack: [
            {
                name: "AWS",
                icon: "/next.svg"
            },
            {
                name: "TypeScript",
                icon: "/typescript.svg"
            },
            {
                name: "Tailwind CSS",
                icon: "/tailwind.svg"
            },
            {
                name: "AWS S3",
                icon: "/aws.svg"
            },
            {
                name: "Redis",
                icon: "/redis.svg"
            }
        ],
        detailsLink: "/http://localhost:3000/project/vercel-clone",
        links: {
            live: "https://nike-reimagined-mu.vercel.app/",
            github: "https://github.com/adityadomle/nike-reimagined",
        },
    },

];
