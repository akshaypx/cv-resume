import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Akshay Srivastava",
  initials: "AS",
  location: "Gurugram, Haryana, India",
  locationLink: "https://www.google.com/maps/place/Gurugram",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "As a Developer I have build many products. I have 2 years of experience in building frontend for applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/17939192?v=4",
  personalWebsiteUrl: "https://github.com/akshaypx",
  contact: {
    email: "akshaysrivastava46@gmail.com",
    tel: "+917355044476",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/akshaypx",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akshaysrivastava46/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/pxdev0",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Jaypee University of Engineering & Technology",
      degree: "Bachelor's Degree in Computer Science Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Nagarro",
      link: "https://www.nagarro.com/en",
      badges: ["Full Time"],
      title: "Trainee → Associate Engineer → Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: "Present",
      description:
        "Implemented new features, developed POC's, worked on developing and deploying many apps. Technologies: React, TypeScript, Springboot, ML",
    },
    {
      company: "BlackFoxMillennium",
      link: "https://google.com",
      badges: ["Remote"],
      title: "Website Developer Intern",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Created and maintained landing page for their application. Technologies: HTML, CSS, React",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "MongoDB",
    "Java",
    "Python",
  ],
  projects: [
    {
      title: "Moon Creations Store",
      techStack: [
        "Side Project",
        "TypeScript",
        "React.js",
        "Vite",
        "MongoDB",
        "Node.js",
      ],
      description: "An online ecommerce store for local jwellery shop.",
      logo: ConsultlyLogo,
      link: {
        label: "mooncreationsstore",
        href: "https://ecom-frontend-self.vercel.app/",
      },
    },
    
  ],
} as const;
