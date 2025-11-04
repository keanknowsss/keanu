export type Projects = Array<ProjectType>;

export type ProjectType = {
  id: number;
  title: string;
  status: string;
  shortDescription: string;
  image: string;
  tags: Array<Tags>;
  carouselImages: Array<string>;
  fullDescription: string;
  features: Array<string>;
};

type Tags = {
  name: string;
  type: string;
};

const projects: Projects = [
  {
    id: 1,
    title: "CAREVA - A Journey Guided by Care",
    status: "ONGOING",
    shortDescription:
      "A health-focused app built around HIV awareness and care, empowering users to monitor their health, connect with a community, and manage their treatment journey.",
    image: "/src/assets/careva/cover.png",
    tags: [
      { name: "Flutter", type: "fe" },
      { name: "Laravel", type: "be" },
      { name: "MySQL", type: "db" },
    ],
    carouselImages: [
      "/src/assets/careva/1.png", 
      "/src/assets/careva/2.png", 
      "/src/assets/careva/3.png", 
      "/src/assets/careva/4.png", 
      "/src/assets/careva/5.png", 
      "/src/assets/careva/6.png", 
      "/src/assets/careva/7.png", 
      "/src/assets/careva/8.png", 
      "/src/assets/careva/9.png", 
      "/src/assets/careva/10.png", 
      "/src/assets/careva/11.png", 
      "/src/assets/careva/12.png", 
      "/src/assets/careva/13.png", 
    ],
    fullDescription:
      "CAREVA is a comprehensive health platform designed to promote HIV awareness, safe practices, and treatment adherence. It combines personal health tracking with interactive features like an NFC-based medication system, a guided chatbot, and a supportive community space. CAREVA bridges technology and care to make health management simple, connected, and secure.",
    features: [
      "Secure user authentication system",
      "NFC-based medication tag reading and writing",
      "Personal activity and medication tracking",
      "CAREVA conversational chatbot for health guidance",
      "In-app messaging and community engagement features",
    ],
  },
  {
    id: 2,
    title: "Jokejoke - Connecting people through laughter",
    status: "ONGOING",
    shortDescription:
      "A social media platform built for humor lovers — connect, laugh, and share your funniest moments.",
    image: "/src/assets/jokejoke/cover.png",
    tags: [
      { name: "Laravel Livewire", type: "be" },
      { name: "Alpine.js", type: "fe" },
      { name: "Tailwindcss", type: "fe" },
      { name: "CSS", type: "fe" },
      { name: "MySQL", type: "db" },
    ],
    carouselImages: [
      "/src/assets/jokejoke/1.png",
      "/src/assets/jokejoke/2.png",
      "/src/assets/jokejoke/3.png",
      "/src/assets/jokejoke/4.png",
      "/src/assets/jokejoke/5.png",
    ],
    fullDescription:
      "JokeJoke is a community-driven social platform where laughter brings people together. Users can post, edit, and interact with jokes, engage through comments and reactions, and discover trending humor across the feed. Built with performance and simplicity in mind, JokeJoke turns everyday jokes into shared joy.",
    features: [
      "Secure login and user authentication",
      "Post creation, editing, and deletion",
      "Interactive social features: likes, comments, and reactions",
      "Clean, dynamic newsfeed for discovering and sharing jokes",
    ],
  },
  {
    id: 3,
    title: "Resu.me",
    status: "ONGOING",
    shortDescription:
      "A smart resume builder that instantly visualizes and generates professional resumes in real time.",
    image: "/src/assets/resume/cover.png",
    tags: [
      { name: "React.js", type: "fe" },
      { name: "Typescript", type: "fe" },
      { name: "Shadcn UI", type: "fe" },
      { name: "Tailwindcss", type: "fe" },
      { name: "CSS", type: "fe" },
    ],
    carouselImages: [
      "/src/assets/resume/1.png",
      "/src/assets/resume/2.png",
    ],
    fullDescription:
      "Resu.me helps users build stunning resumes effortlessly. By entering personal details, skills, and experiences, users can see a live preview of their resume as they type. The final output can be exported as a polished PDF, simplifying the entire resume creation process for students and professionals alike.",
    features: [
      "Instant resume visualization with real-time updates",
      "Professional, user-friendly interface",
      "Automated PDF resume generation",
      "Streamlined user flow for faster resume building",
    ],
  },
  {
    id: 4,
    title: "The Keeper",
    status: "DONE",
    shortDescription:
      "A note-taking app for readers — organize your thoughts and discover books through an integrated public library API.",
    image: "/src/assets/thekeeper/cover.png",
    tags: [
      { name: "EJS", type: "fe" },
      { name: "CSS", type: "fe" },
      { name: "Node.js", type: "be" },
      { name: "Express.js", type: "be" },
      { name: "Postgresql", type: "db" },
    ],
    carouselImages: [
      "/src/assets/thekeeper/1.png",
      "/src/assets/thekeeper/2.png",
      "/src/assets/thekeeper/3.png",
      "/src/assets/thekeeper/4.png",
      "/src/assets/thekeeper/5.png",
      "/src/assets/thekeeper/6.png",
      "/src/assets/thekeeper/7.png",
    ],
    fullDescription:
      "The Keeper is a productivity app tailored for book lovers and note-takers. It lets users search for books via a public library API, manage reading lists, and take notes on their current reads. With a clean and intuitive interface, it turns reading into an organized, insightful experience.",
    features: [
      "Integration with public library APIs for book discovery",
      "Add, update, and delete book notes easily",
      "Manage personal book collections and reading lists",
      "Minimalist, user-friendly interface designed for readers",
    ],
  },
  {
    id: 5,
    title: "ToDo.me",
    status: "DONE",
    shortDescription:
      "A clean and responsive task management app to keep your daily goals on track.",
    image: "/src/assets/todome/cover.png",
    tags: [
      { name: "EJS", type: "fe" },
      { name: "CSS", type: "fe" },
      { name: "Node.js", type: "be" },
      { name: "Express.js", type: "be" },
    ],
    carouselImages: [
      "/src/assets/todome/1.png",
      "/src/assets/todome/2.png",
      "/src/assets/todome/3.png",
      "/src/assets/todome/4.png",
    ],
    fullDescription:
      "ToDo.me is a productivity-focused application designed to simplify task organization. It allows users to create, edit, and manage their to-do lists effortlessly across devices. With its lightweight interface and responsive design, it helps users stay focused, efficient, and on top of their priorities.",
    features: [
      "Create, edit, and delete tasks with ease",
      "Mark completed tasks for visual progress tracking",
      "Responsive, mobile-friendly layout",
      "Streamlined design for everyday productivity",
    ],
  },
  {
    id: 6,
    title: "Pixel Positions",
    status: "DONE",
    shortDescription:
      "A job platform connecting creative professionals and recruiters through an intuitive posting and application system.",
    image: "/src/assets/pixelpositions/cover.png",
    tags: [
      { name: "Laravel", type: "be" },
      { name: "Tailwindcss", type: "fe" },
      { name: "SQLite", type: "db" },
    ],
    carouselImages: [
      "/src/assets/pixelpositions/1.png",
      "/src/assets/pixelpositions/2.png",
      "/src/assets/pixelpositions/3.png",
      "/src/assets/pixelpositions/4.png",
    ],
    fullDescription:
      "Pixel Positions is a recruitment-focused application that bridges the gap between employers and job seekers. It allows recruiters to post opportunities while enabling applicants to browse and apply seamlessly. Designed with accessibility and clarity in mind, it simplifies the hiring process for both sides.",
    features: [
      "Secure user authentication and account management",
      "Job posting and management for recruiters",
      "Easy job application flow for candidates",
      "Organized, responsive interface for efficient browsing",
    ],
  },
];

export default projects;
