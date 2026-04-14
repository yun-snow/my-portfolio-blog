// import ogCard from "/og-images/og-card.png";
/* import avatarSamkit from "~/assets/Images/testimonials/samkit-jain.webp";
import avatarJijo from "~/assets/Images/testimonials/jijo-bose.webp"; */

const RESUME_LINK: string = "https://drive.google.com/file/d/15LzVVSWv5RQ1kb0RM-vkGDmtu2nGt0--/view?usp=sharing";

const getYearsOfExperience = (careerStartDate: string | Date) => {
  const currentDate = new Date();
  const bootcampExperience: number = 1;

  if ((typeof careerStartDate)?.toLowerCase()?.trim() === "string") {
    careerStartDate = new Date(careerStartDate);
  }

  if (careerStartDate instanceof Date && !isNaN(careerStartDate.getTime())) {
    // Calculate the difference in years
    let yearsOfExperience =
      currentDate.getFullYear() - careerStartDate.getFullYear();

    // Check if the current month is before the starting month or if the current month is the same but the day is before the starting day
    if (
      currentDate.getMonth() < careerStartDate.getMonth() ||
      (currentDate.getMonth() === careerStartDate.getMonth() &&
        currentDate.getDate() < careerStartDate.getDate())
    ) {
      // Subtract one year if the current date is before the starting date in the same year
      yearsOfExperience -= 1;
    }
    return yearsOfExperience + bootcampExperience;
  }
  return "";
};

interface IConfig {
  app: {
    site_name: string;
    author: string;
    keywords: string;
    description: string;
    long_description: string;
  };
  me: {
    avatar: string;
    name: string;
    about: string | string[];
    job: string;
    started: string;
    yearsOfExperience: string | number;
    stack: string;
    hobby: string;
    projectLink: string;
    resumeLink: string;
  };
  about: {
    workExperiences: WorkExperienceObj[];
    educationDetails: EducationObj[];
    skills: SkillObj[];
  };
  website: string;
  pages: LinkObj[];
  socials: {
    [name: string]: string;
  };
  projects: ProjectObj[];
/*   testimonials: TestimonialsObj[]; */
  og: {
    image: string;
  };
}

interface ProjectObj {
  appName: string;
  url: string;
  tags: string[];
  about: string;
}

interface LinkObj {
  title: string;
  url: string;
  external?: boolean;
  displayInDrawerOnly?: boolean;
}

interface WorkExperienceObj {
  title: string;
  company: string;
  years: string;
  contributions: string[];
}

interface EducationObj {
  title: string;
  institute: string;
  address: string;
  years: string;
}

interface SkillObj {
  title: string;
  icon?: string;
  svg?: string;
}

/* interface TestimonialsObj {
  avatar: any;
  role: string;
  name: string;
  message: string;
  link: string;
} */

const AboutMe: string[] = [
  "I'm a Machine Learning Engineer and Data Scientist with solid expertise on ML and DL practices.",
  "I earned a M.Sc in Data Science from Université Paris-Saclay and an Engineering Degree (M.Sc) in Computer Science from ENSIIE.",
];

const Pages: LinkObj[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Profile",
    url: "/profile",
  },
  {
    title: "Blog",
    url: "/blogs",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Resume",
    url: RESUME_LINK,
    external: true,
  },
  {
    title: "GitHub",
    url: "https://github.com/yun-snow/",
    external: true,
    displayInDrawerOnly: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/youenn-esnault/",
    external: true,
    displayInDrawerOnly: true,
  },

  {
    title: "RSS feed",
    url: "/rss.xml",
    external: true,
    displayInDrawerOnly: true,
  },
  {
    title: "esnaultyouenn@gmail.com",
    url: "mailto:esnaultyouenn@gmail.com",
    external: true,
    displayInDrawerOnly: true,
  },
];

const WorkExperiences: WorkExperienceObj[] = [
  {
    years: "Feb 2023 - Nov 2023",
    title: "Machine Learning Researcher",
    company: "Centre d'études et de recherche en informatique et communications (CEDRIC) - CNAM",
    contributions: [
      "Built a fully responsive website using Next.js and delivered it before the deadline.",
      "Integrated Google Analytics and HubSpot for traffic tracking and lead capture.",
    ],
  },
  {
    years: "Mar 2022 - Jun 2022",
    title: "Deep Learning Researcher",
    company: "Smart Infrastructure Lab - Yonsei University",
    contributions: [
      "Developed the Miru desktop app almost from scratch, creating an easy-to-use time-tracking system with automatic idle-state detection. Ensured it works seamlessly with the Miru web app for generating invoices.",
      "Developed the Miru marketing website with React.js, integrating Google Analytics and HubSpot for traffic tracking and lead capture.",
      "Contributed as a full stack developer to the Miru web app, a time-tracking and invoicing application. Involved in developing key features such as the PTO module, Organization settings, authentication flow, and refactoring pages related to time-tracking. Also, actively addressed bug fixes and reported issues.",
      "Contributed to the development of the Tlatocash app, a payment wallet application built using React Native. Implemented features like sharing QR codes, scanning QR codes, and enabling seamless payments to saved contacts on the mobile app.",
      "Contributed to various client projects.",
    ],
  },
  {
    years: "Jun 2021 - Sep 2021",
    title: "Incubating startup lead",
    company: "IMT Starter & C-19",
    contributions: [
      "Undertook team lead responsibilities and successfully led high-priority sprints.",
      "Contributed to redesigning and optimizing the entire Juvoxa doctor, patient, and partner application.",
      "Migrated the vintage react code to the latest React hooks format and refactored React components to optimize the component rendering.",
      "Developed several important features like prescribing any solution to patients, creating fixed and scheduled programs, sending reports to doctors, etc.",
      "Designed the dashboard page for doctors where doctors can check patients' vitals, most prescribed contents, programs, etc.",
    ],
  },
  {
    years: "Apr 2020 - Jun 2020",
    title: "Full Stack Developer",
    company: "Kasetsart University",
    contributions: [
      "Contributed as a full stack developer to the client project and in-house projects like Neeto KB, Neeto Auth.",
      "Contributed to implementing Single-Sign-On(SSO). Wrote functional, unit, and integration tests for application quality assurance.",
    ],
  },
];

const EducationDetails: EducationObj[] = [
  {
    title: "Master of Science (M.Sc) in Data Science : Master TRIED",
    institute: "Université Paris-Saclay",
    address: "Gif-sur-Yvette, France",
    years: "2022 - 2023",
  },
  {
    title: "Diplôme d'Ingénieur (M.Sc Equivalent) in Computer Science",
    institute: "Ecole Nationale Supérieure d'Informatique pour l'Industrie et l'Entreprise (ENSIIE)",
    address: "Evry, France",
    years: "2020 - 2023",
  },
  {
    title: "Graduate Level Study Semester",
    institute: "Yonsei University",
    address: "Seoul, South Korea",
    years: "2022 - 2022",
  },
  {
    title: "DUT (Associate's) in Computer Science ",
    institute: "Université Rennes 1",
    address: "Lannion, France",
    years: "2018 - 2020",
  },
];

const Skills: SkillObj[] = [
  {title: "Python", icon: "python-plain" },
  { title: "R", icon: "r-plain" },
  { title: "Pandas", icon: "pandas-plain" },
  { title: "Keras", icon: "keras-plain" },
  { title: "TensorFlow", icon: "tensorflow-original" },
  { title: "PyTorch", icon: " pytorch-original" },
  { title: "Scikit-Learn", icon: "scikitlearn-plain" },
  { title: "Airflow", icon: "apacheairflow-plain" },
  { title: "Flask", icon: "flask-original" },
  { title: "AWS", icon: "amazonwebservices-plain" },
  { title: "GCP", icon: "googlecloud-plain" },
  { title: "Docker", icon: "docker-plain" },
  { title: "Kubernetes", icon: "kubernetes-plain" },
  { title: "Scala", svg: "scala-plain" },
  { title: "Spark", svg: "apachespark-original" },
  { title: "git", icon: "git-plain" },
  { title: "PostgreSQL", icon: "postgresql-plain" },
  { title: "C++", icon: "cplusplus-plain" },
  { title: "Javascript", icon: "javascript-plain" },
  { title: "PHP", icon: "php-plain" },
];

/* const Testimonials: TestimonialsObj[] = [
   {
    avatar: avatarJijo.src,
    role: "Senior Software Developer at Saeloun",
    name: "Jijo Bose",
    message: `I have worked with Sanjib to build a desktop app built using ElectronJS. 
    
    Sanjib possesses a deep understanding of the Ruby on Rails, ElectronJS and Typescript. He consistently wrote clean, maintainable, and well-documented code, adhering to best practices and industry standards.`,
    link: "https://www.linkedin.com/in/sanjibroy360/details/recommendations",
  },
  {
    avatar: avatarSamkit.src,
    role: "Principal Engineer at Juvoxa",
    name: "Samkit Jain",
    message:
      "Sanjib showed tremendous growth during his tenure at Juvoxa. He is a quick learner and knows JavaScript very well. Able to convert Figma designs into reusable components to the T and regularly employed code optimisation techniques. Apart from the technical requirements, he also showcased managerial qualities by leading sprints for new product features.",
    link: "https://www.linkedin.com/in/sanjibroy360/details/recommendations",
  }, 
];*/

const Projects: ProjectObj[] = [
  {
    appName: "MLOps pipeline",
    url: "",
    about: "End-to-end ML pipeline with experiment tracking, orchestration, and drift monitoring. Soon to upload on GitHub..",
    tags: ["Python", "Airflow", "Prefect", "Evidently"],
  },
  {
    appName: "Internal company RAG",
    url: "",
    about: "Trello is a web-based, kanban-style, work management tool.",
    tags: ["React.js", "Node.js", "Express.js"],
  },
  {
    appName: "Quizzy",
    url: "https://github.com/sanjibroy360/quizzy-by-sanjibroy360",
    about:
      "Quiz app lets users create, share quizzes with detailed stats for creators.",

    tags: ["React.js", "Ruby on Rails"],
  },
];

export const Config: IConfig = {
  app: {
    author: "Youenn Esnault",
    site_name: "Youenn Esnault",
    description: `Experienced Full Stack Software Developer skilled in MERN stack, Next.js, Ruby on Rails, with overall ${
      +getYearsOfExperience("2021-02-01") || "less than 1"
    }+ ${
      +getYearsOfExperience("2021-02-01") > 1 ? "years" : "year"
    } of experience. Portfolio website shared my blogs, projects, journey`,
    long_description: `Hi, I am Sanjib Roy, a Software Developer with overall ${
      +getYearsOfExperience("2021-02-01") || "less than 1"
    }+ ${
      +getYearsOfExperience("2021-02-01") > 1 ? "years" : "year"
    } of experience, proficient in JavaScript React.js Next.js Node.js TypeScript Electron.js MongoDB, Ruby Ruby on Rails, and PostgreSQL. I completed my Bachelor of Science in Computer Science (Honours) in 2019. Throughout my career, I have led a couple of teams in developing applications from scratch, managed a couple of projects single-handedly and I love taking on challenging projects that will push me to learn and grow.`,
    keywords:
      "sanjib, sanjib roy, sanjibroy360, fullstack developer, mern stack developer, software developer, software engineer, frontend developer, portfolio, web developer, react developers, rails developer, javascript, sanjib roy official website, sanjib roy portfolio website, raniganj sanjib, west bengal sanjib, sanjib-roy",
  },
  me: {
    avatar: "/src/assets/Images/avatar.webp",
    name: "Youenn Esnault",
    about: AboutMe,
    job: "Full-stack engineer",
    started: "2021-02-01", // Used to calculate years of experience dynamically
    yearsOfExperience: getYearsOfExperience("2021-02-01"),
    stack: "MERN stack and Ruby on Rails",
    hobby: "gamble my life savings",
    projectLink: "/projects",
    resumeLink: RESUME_LINK,
  },
  about: {
    workExperiences: WorkExperiences,
    educationDetails: EducationDetails,
    skills: Skills,
  },
  website: "https://sanjibroy.com",
  pages: Pages,
  socials: {
    GitHub: "https://github.com/sanjibroy360",
    LinkedIn: "https://www.linkedin.com/in/sanjibroy360/",
    Email: "mailto:sanjibroy.dev@gmail.com",
    RSS: "/rss.xml",
  },
  projects: Projects,
  /* testimonials: Testimonials, */
  og: {
    image: "/og/og-card.png",
  },
};
