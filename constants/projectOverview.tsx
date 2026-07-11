export const projectOverviews = [

    {
        title: "UpskillsX",
        image: "/projects/upskillsx.jpg",
        slug: "UpskillsX: Udemy-Style E-Learning Marketplace",
        tagline:
            "A full-featured e-learning marketplace where instructors publish courses and students learn at their own pace.",
        features: [
            "Built a full-stack e-learning platform with course creation, video-based lessons, and secure payments via Stripe.",
            "Engineered a scalable backend with Express and Prisma on PostgreSQL (AWS RDS), using Redis for caching and FFmpeg/Cloudinary for video processing and delivery.",
            "Containerized the app with Docker and deployed it on AWS EC2 and Vercel, with GitHub Actions automating the CI/CD pipeline and S3 handling media storage.",
        ],
        techStack: [
            {
                name: "Next.js",
                icon: "/next.svg"
            },
            {
                name: "TypeScript",
                icon: "/typescript.svg"
            },
            {
                name: "Express.js",
                icon: "/express.svg"
            },
            {
                name: "PostgreSQL",
                icon: "/postgresql.svg"
            },
            {
                name: "Prisma",
                icon: "/prisma.svg"
            },
            {
                name: "Docker",
                icon: "/docker.svg"
            },
            {
                name: "AWS",
                icon: "/aws.svg"
            },
            {
                name: "Redis",
                icon: "/redis.svg"
            },
            {
                name: "Stripe",
                icon: "/stripe.svg"
            }
        ],
        detailsLink: "/project/upskillsx",
        links: {
            live: "",
            github: "",
        },
    },
    {
        title: "NotebookAI",
        image: "/projects/notebookai.jpg",
        slug: "NotebookAI: RAG-Powered AI Chatbot for Document Q&A",
        tagline:
            "A NotebookLM-inspired RAG chatbot that lets you upload documents and have intelligent, context-aware conversations with them.",
        features: [
            "Built a full-stack RAG chatbot with FastAPI and LangChain, using LangGraph's StateGraph to orchestrate intent classification, query rewriting, and multi-turn memory via checkpointing.",
            "Implemented semantic document retrieval with ChromaDB/FAISS vector stores and Hugging Face embeddings, powered by the Groq API for fast LLM inference.",
            "Developed a Next.js and TypeScript frontend with Tailwind CSS, backed by MongoDB, and containerized with Docker for deployment on AWS EC2 and Vercel.",
        ],
        techStack: [
            {
                name: "Next.js",
                icon: "/next.svg"
            },
            {
                name: "TypeScript",
                icon: "/typescript.svg"
            },
            {
                name: "Python",
                icon: "/python.svg"
            },
            {
                name: "FastAPI",
                icon: "/fastapi.svg"
            },
            {
                name: "LangChain",
                icon: "/langchain.svg"
            },
            {
                name: "MongoDB",
                icon: "/mongodb.svg"
            },
            {
                name: "Docker",
                icon: "/docker.svg"
            },
            {
                name: "AWS",
                icon: "/aws.svg"
            },
            {
                name: "Tailwind CSS",
                icon: "/tailwind.svg"
            }
        ],
        detailsLink: "/project/notebookai",
        links: {
            live: "",
            github: "",
        },
    },
];