// import ogCard from "/og-images/og-card.png";

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
      "Machine Learning research project between CEDRIC and the Quebec Heart and Lung Institute (IUCPQ).",
      "Exchanged with medical teams to translate clinical requirements into technical specifications for genetic data analysis.",
      "Managed the study while ensuring the security of highly sensitive physical and genomic datasets.",
      "Identified significant variables for asthma case modeling, enabling simplified interpretation for medical research staff.",
    ],
  },
  {
    years: "Mar 2022 - Jun 2022",
    title: "Deep Learning Researcher",
    company: "Smart Infrastructure Lab - Yonsei University",
    contributions: [
      "Developed Deep Learning models for detecting cracks in concrete walls in collaboration with on-site building technicians.",
      "Data extraction from drone imagery, preprocessing, and CNN development (Python, PySpark, Keras, Scikit-Learn, TensorFlow, Roboflow).",
      "Developed a detection model PoC usablee for drone-based building inspections.",
    ],
  },
  {
    years: "Jun 2021 - Sep 2021",
    title: "Incubating startup lead",
    company: "IMT Starter & C-19",
    contributions: [
      "Led project development using Agile methodologies, including functional design and business planning.",
      "Conducted requirement gathering and interviews with more than a hundred potential clients.",
      "Pitched the project to the incubator directors.",
      "Won 1st prize in the competition, securing €6,000 in funding.",
    ],
  },
  {
    years: "Apr 2020 - Jun 2020",
    title: "Data Analytics and Knowledge Engineering",
    company: "NAiST Laboratory - Kasetsart University",
    contributions: [
      "Collaborated with remote sensing engineer/geographer to address wildfire challenges in Southeast Asia.",
      "Extracted, cleaned, and visualized satellite imagery data for wildfire prevention map (SQL, JavaScript, PHP).",
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
    avatar: ,
    role: "",
    name: "",
    message: "",
    link: "",
  },
  {
    avatar: ,
    role: "",
    name: "",
    message:
      "",
    link: "",
  }, 
];*/

const Projects: ProjectObj[] = [
  {
    appName: "MLOps pipeline",
    url: "",
    about: "End-to-end ML pipeline with experiment tracking, orchestration, and drift monitoring. Soon to upload on GitHub.",
    tags: ["Python", "Airflow", "Prefect", "Evidently", "Docker"],
  },
  {
    appName: "Internal company RAG",
    url: "",
    about: "Internal conversational genAI template with company information knowledge and data safety measures.",
    tags: ["Python", "LlamaIndex", "Qdrant", "FastAPI", "Docker"],
  },
  {
    appName: "Graph RAG",
    url: "",
    about:
      "Personal research project on the effects of GraphRAG on performance compared to a classic RAG.",

    tags: ["Python", "GraphRAG", "LangChain"],
  },
];

export const Config: IConfig = {
  app: {
    author: "Youenn Esnault",
    site_name: "Youenn Esnault",
    description: `Experienced Data Scientist skilled in data analysis, machine learning and deep learning ${
      +getYearsOfExperience("2025-01-01") || "less than 1"
    }+ ${
      +getYearsOfExperience("2025-01-01") > 1 ? "years" : "year"
    } of experience. Portfolio website shared my blogs, projects, journey`,
    long_description: `Hi, I am Youenn Esnault, a Data Scientist with overall  ${
      +getYearsOfExperience("2025-01-01") || "less than 1"
    }+ ${
      +getYearsOfExperience("2025-01-01") > 1 ? "years" : "year"
    } of experience, proficient in Python (PySpark, Keras, TensorFlow, Scikit-Learn), R, SQL, Node.js, TypeScript, Electron.js, MongoDB, Ruby, Ruby on Rails, and PostgreSQL. I completed a dual Master's program, an M.Sc in Data Science (Honors) and an Engineering Degree in Computer Science (Honors) in 2023. Throughout my career, I have led and worked on various team and solo projects in Data Science, Machine Learning and Deep Learning. I have worked with experts from diverse sectors (health, construction, environment) and am used to translating business needs into technical solutions. I love taking on challenging projects that will push me to learn and grow.`,
    keywords:
      "youenn",
  },
  me: {
    avatar: "/src/assets/Images/avatar.webp",
    name: "Youenn Esnault",
    about: AboutMe,
    job: "Data Scientist",
    started: "2025-01-01", // Used to calculate years of experience dynamically
    yearsOfExperience: getYearsOfExperience("2025-01-01"),
    stack: " ",
    hobby: " ",
    projectLink: "/projects",
    resumeLink: RESUME_LINK,
  },
  about: {
    workExperiences: WorkExperiences,
    educationDetails: EducationDetails,
    skills: Skills,
  },
  website: "https://yun-snow.github.io/my-portfolio-blog/",
  pages: Pages,
  socials: {
    GitHub: "https://github.com/yun-snow/",
    LinkedIn: "https://www.linkedin.com/in/youenn-esnault/",
    Email: "mailto:esnaultyouenn@gmail.com",
    
  },
  projects: Projects,
  /* testimonials: Testimonials, */
  og: {
    image: "/og/og-card.png",
  },
};
