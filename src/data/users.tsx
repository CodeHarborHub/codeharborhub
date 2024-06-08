import { sortBy } from "../utils/jsUtils";

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "nodejs"
  | "mongodb"
  | "favorite"
  | "opensource"
  | "product"
  | "design"
  | "i18n"
  | "versioning"
  | "large"
  | "meta"
  | "personal"
  | "templates"
  | "portfolio"
  | "nextjs"
  | "vanilla"
  | "typescript"
  | "ai"
  | "game"
  | "clone";

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

export const Tags: { [type in TagType]: Tag } = {
  html: {
    label: "HTML",
    description: "",
    color: "#f06529",
  },
  css: {
    label: "CSS",
    description: "",
    color: "#2965f1",
  },
  javascript: {
    label: "JavaScript",
    description: "",
    color: "#f0db4f",
  },
  vanilla: {
    label: "Vanilla",
    description: "",
    color: "#f0db4f",
  },
  react: {
    label: "React.js",
    description: "",
    color: "#61dafb",
  },
  nextjs: {
    label: "Next.js",
    description: "",
    color: "#000000",
  },
  typescript: {
    label: "TypeScript",
    description: "",
    color: "#007acc",
  },
  nodejs: {
    label: "Node.js",
    description: "",
    color: "#026e00",
  },

  mongodb: {
    label: "MongoDB",
    description: "",
    color: "#13aa52",
  },

  favorite: {
    label: "Favorite",
    description: "",
    color: "#f06529",
  },
  opensource: {
    label: "Open-Source",
    description: "",
    color: "#39ca30",
  },

  product: {
    label: "Product",
    description: "",
    color: "#dfd545",
  },

  design: {
    label: "Design",
    description: "",
    color: "#a44fb7",
  },

  i18n: {
    label: "I18n",
    description: "",
    color: "#127f82",
  },

  versioning: {
    label: "Versioning",
    description: "",
    color: "#fe6829",
  },

  large: {
    label: "Large",
    description: "",
    color: "#8c2f00",
  },

  meta: {
    label: "Meta",
    description: "",
    color: "#4267b2",
  },

  personal: {
    label: "Personal",
    description: "",
    color: "#14cfc3",
  },

  templates: {
    label: "Templates",
    description: "",
    color: "#ffcfc3",
  },
  portfolio: {
    label: "portfolio",
    description: "",
    color: "#ff4400",
  },

  clone: {
    label: "Clone",
    description: "",
    color: "#004400",
  },

  ai: {
    label: "AI",
    description: "",
    color: "#007acc",
  },
  game: {
    label: "Game",
    description: "",
    color: "#555555",
  },
};

const Users: User[] = [
  {
    title: "You Tube Clone",
    description:
      "Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5",
    preview: require("./showcase/YouTube-Clone.jpg"),
    website: "https://my-youtube-ajay.vercel.app/",
    source: "https://github.com/Ajay-Dhangar/youtube_clone",
    tags: ["opensource", "clone", "favorite", "react"],
  },
  {
    title: "Quiz App",
    description:
      "Explore and test your knowledge with the Quiz app. Engaging quizzes to challenge your mind and expand your horizons. Try it now!",
    preview: require("./showcase/quiz-app.jpg"),
    website: "https://quiz-app-ajay-dhangar.vercel.app/",
    source: "https://github.com/Ajay-Dhangar/Quiz-app",
    tags: ["opensource", "clone", "templates"],
  },
  {
    title: "Music App",
    description:
      "Your music, your way. Explore and enjoy a world of tunes with our Spotify-inspired app. 🎶 ",
    preview: require("./showcase/music-app.jpg"),
    website: "https://shivay-studio.vercel.app/",
    source: "https://github.com/Ajay-Dhangar/music-app",
    tags: ["opensource", "clone", "templates"],
  },

  {
    title: "TailwindBlog",
    description:
      "The Starter app is a feature-rich Next.js and Tailwind CSS blogging starter template.",
    preview: require("./showcase/TailwindBlog.jpg"),
    website: "https://starter-aj-zero-coding.vercel.app/",
    source: "https://github.com/Ajay-Dhangar/starter",
    tags: ["opensource", "clone", "templates"],
  },

  {
    title: "GERIGHT",
    description:
      "Experience culinary excellence at Gericht Restaurant: Modern UI, showcasing The Key To Fine Dining.",
    preview: require("./showcase/gericht-restaurant-modern-ui.jpg"),
    website: "https://ajay-1.vercel.app/",
    source: "https://github.com/Ajay-Dhangar/gericht-restaurant-modern-ui",
    tags: ["opensource", "templates", "clone"],
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Tic Tac Toe Game using React JS. Play the game and enjoy the fun.",
    preview: require("./showcase/react-tic-tac-toe.jpg"),
    website: "#",
    source: "https://github.com/Ajay-Dhangar/react-tic-tac-toe",
    tags: ["opensource", "game", "react"],
  },
  {
    title: "Broadcast Web",
    description:
      "Broadcast Web is a modern and responsive web application for broadcasting your own channel.",
    preview: require("./showcase/broadcast-web.jpg"),
    website: "https://codeharborhub-broadcast-web.vercel.app/",
    source: "",
    tags: ["opensource", "product", "nextjs", "javascript"],
  },
  {
    title: "Scientific Calculator",
    description:
      "Build and Deploy a Modern and Beginner-friendly Scientific Calculator using HTML, CSS and Vanilla Javascript",
    preview: require("./showcase/calculator-app.png"),
    website: "https://calcu-plus.vercel.app/",
    source: "https://github.com/ParnaRoyChowdhury777/Calculator---CalcuPlus",
    tags: ["opensource", "clone", "html", "css", "vanilla"],
  },
  {
    title: "Random Meme Generator",
    description:
      "It generates random memes by using the technique of API Fetching and also supports the feature of sharing the memes.",
    preview: require("./showcase/meme.png"),
    website: "https://giggle-hub.vercel.app/",
    source: "https://github.com/komal-agarwal5/Giggle-Hub------Meme-Generator",
    tags: ["opensource", "product", "html", "css", "javascript"],
  },
  {
    title: "Age Calculator",
    description:
      "It calculates the exact age in years, months and days on entering a date of birth with proper error handling.",
    preview: require("./showcase/age-calculator.png"),
    website: "https://age-calculator-rho-two.vercel.app/",
    source: "https://github.com/ParnaRoyChowdhury777/Age-Calculator",
    tags: ["opensource", "product", "react", "css", "javascript"],
  },
  {
    title: "To Do List App",
    description:
      "A simple To-Do List App using HTML CSS JS . Add your tasks and manage them easily , mark your task as completed or incomplete ",
    preview: require("./showcase/todolist.png"),
    website:
      "https://50-days-50-web-project.vercel.app/TO_DO_LIST/todolist.html",
    source:
      "https://github.com/dhairyagothi/50_days_50_web_project/tree/Main/public/TO_DO_LIST",
    tags: ["html", "css", "javascript"],
  },
  {
    title: "Currency Converter",
    description:
      "It allows users to convert between different currencies. It fetches live exchange rates from an API and performs conversions accordingly.",
    preview: require("./showcase/currency.png"),
    website: "https://coinshift-currency-converter.vercel.app/",
    source: "https://github.com/komal-agarwal5/CoinShift-Currency-Converter",
    tags: ["opensource", "product", "react", "css", "javascript"],
  },
  {
    title: "Guess The Number Game",
    description:
      "It allows users to play the Guess The Number Game based on the choice of Easy(3 rounds), Intermediate(5 rounds) and Hard(7 rounds).",
    preview: require("./showcase/guessnumber.png"),
    website: "https://guess-me-tau.vercel.app/",
    source: "https://github.com/ParnaRoyChowdhury777/Guess_The_Number_Game",
    tags: ["opensource", "product", "html", "css", "javascript", "vanilla"],
  },
  {
    title: "Resume Builder App",
    description:
      "This is a Resume Builder WebApp, to help you build your resumes in just a matter of few minutes.",
    preview: require("./showcase/resume-builder.png"),
    website: "https://resume-builder-rho-smoky.vercel.app/",
    source: "https://github.com/Sambit-Mondal/Resume-Builder-WebApp",
    tags: ["opensource", "product", "html", "css", "javascript", "vanilla"],
  },
  {
    title: "QR Generator",
    description: "It generates a QR code based on a typed text or URL.",
    preview: require("./showcase/qr_generator.png"),
    website: "https://scan--me.vercel.app/",
    source: "https://github.com/ParnaRoyChowdhury777/ScanMe",
    tags: ["opensource", "product", "html", "css", "javascript", "vanilla"],
  }
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes("favorite"));
  return result;
}

export const sortedUsers = sortUsers();
