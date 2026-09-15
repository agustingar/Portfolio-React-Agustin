import img from "../src/assets/images/AG.PNG";
import dermobalImg from "../src/assets/images/dermobal.png";
import waquaImg from "../src/assets/images/waqua.jpg";
import radooImg from "../src/assets/images/radoo.jpg";

const logotext = "AGUSTÍN GARCÍA";

const introdata = {
  your_img_url: `${img}`,
};

const worktimeline = [
  {
    key: "freelance",
    where: "Remote / Valencia",
  },
  {
    key: "doowebs",
    where: "Valencia",
  },
  {
    key: "anartxy",
    where: "Pobla de Vallbona (Valencia)",
  },
  {
    key: "assembler",
    where: "Remote / Barcelona",
  },
  {
    key: "radoo",
    where: "Valencia",
  },
];

const education = [
  {
    key: "assembler",
    place: "Assembler Institute of Technology",
    date: "2022",
  },
  {
    key: "florida",
    place: "Florida Universitària / Mondragon Unibertsitatea",
    date: "2018 - 2022",
  },
  {
    key: "ceu",
    place: "Universidad CEU (Moncada, Valencia)",
    date: "2016 - 2018",
  },
];

const skills = [
  { name: "Wordpress", value: 95 },
  { name: "HTML / CSS", value: 92 },
  { name: "Javascript", value: 85 },
  { name: "React", value: 80 },
  { name: "PHP", value: 78 },
  { name: "React Native", value: 75 },
  { name: "Node.js", value: 72 },
  { name: "Firebase", value: 70 },
];

const techStack = [
  "React",
  "React Native",
  "Javascript",
  "PHP",
  "Wordpress",
  "Shopify",
  "PrestaShop",
  "Node.js",
  "Firebase",
  "MongoDB",
  "MySQL",
  "Expo",
  "Laravel",
  "Elementor",
  "Figma",
  "Git",
];

const languages = [
  { key: "es", level: "native" },
  { key: "ca", level: "native" },
  { key: "en", level: "professional" },
  { key: "ko", level: "technical" },
];

const servicesKeys = ["agmarketing", "apps", "programming"];
const highlightKeys = ["wordpress", "react", "apps"];
const processKeys = ["discover", "design", "build", "launch"];
const featuredKeys = ["partfri", "guardify", "selectyourvet", "lechuzas"];
const valueKeys = ["speed", "craft", "collab"];
const testimonialKeys = ["one", "two"];

const stats = [
  { key: "projects", value: 35, suffix: "+" },
  { key: "years", value: 6, suffix: "+" },
  { key: "clients", value: 25, suffix: "+" },
  { key: "stack", value: 15, suffix: "+" },
];

const dataportfolio = [
  {
    key: "partfri",
    img: "https://ag-marketing.es/wp-content/uploads/2026/05/Partfri-4.png",
    link: "https://partfri.ag-marketing.es/",
    tags: ["React Native", "iOS", "Android", "Spotify API"],
    category: "app",
  },
  {
    key: "guardify",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/96/a3/71/96a37172-f75e-4ef3-66a0-6e7ce27ec57d/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png",
    link: "https://ag-marketing.es/portfolio-item/guardify/",
    tags: ["React Native", "Expo", "Laravel", "IA"],
    category: "app",
  },
  {
    key: "lechuzas",
    img: "https://lechuzas-properties.com/wp-content/uploads/2025/06/12-1024x683.jpeg",
    link: "https://lechuzas-properties.com",
    tags: ["Wordpress", "Elementor", "Plugin", "Bookings"],
    category: "web",
  },
  {
    key: "selectyourvet",
    img: "https://selectyourvet.com/wp-content/uploads/2024/06/logo-letras-verdes-scaled.png",
    link: "https://selectyourvet.com/",
    tags: ["Wordpress", "Plugin", "IA"],
    category: "web",
  },
  {
    key: "agmarketing",
    img: "https://ag-marketing.es/wp-content/uploads/2024/03/Black-White-Minimalist-Aesthetic-Initials-Font-Logo.png",
    link: "https://ag-marketing.es",
    tags: ["Wordpress", "SEO", "Branding"],
    category: "web",
  },
  {
    key: "dentalcorbella",
    img: "https://ag-marketing.es/wp-content/uploads/2025/02/1.png",
    link: "https://dentalcorbella.com",
    tags: ["Wordpress", "Marketing", "Animación"],
    category: "web",
  },
  {
    key: "v3nture",
    img: "https://ag-marketing.es/wp-content/uploads/2025/02/R-1080-x-1080-px-1.png",
    link: "https://v3nturebuilders.com/",
    tags: ["Wordpress", "Plugin", "Web3"],
    category: "web",
  },
  {
    key: "boconni",
    img: "https://boconni.com/wp-content/uploads/2024/07/VILLA-PIRINEOS-FISCAL-scaled-1170x653.jpg",
    link: "https://boconni.com/",
    tags: ["Wordpress", "Real Estate"],
    category: "web",
  },
  {
    key: "waqua",
    img: waquaImg,
    link: "https://waqua.es",
    tags: ["Wordpress", "Elementor", "Integración"],
    category: "web",
  },
  {
    key: "anartxy",
    img: "https://www.anartxy.com/cdn/shop/files/34A1835_dbf69b63-8cc9-495b-affe-60dc052560e4.jpg?v=1704197456&width=1200&height=600",
    link: "https://anartxy.es",
    tags: ["PrestaShop", "Ecommerce", "PHP"],
    category: "shop",
  },
  {
    key: "dermobal",
    img: dermobalImg,
    link: "https://dermobal.es/",
    tags: ["Wordpress", "Web"],
    category: "web",
  },
  {
    key: "pilatu",
    img: "https://pilatufitness.com/wp-content/uploads/2021/08/Pilatu_Cadillac_Reformer_01-2-1097x1536.jpg",
    link: "https://pilatufitness.com",
    tags: ["Wordpress", "Web"],
    category: "web",
  },
  {
    key: "afterbite",
    img: "https://www.farmaciasoler.com/img/uploads/after-bite-gel-xtreme-20g--2.jpg",
    link: "https://afterbite.es",
    tags: ["Wordpress", "Web"],
    category: "web",
  },
  {
    key: "prolink",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGq1R6LRnfeKvELP89EifAftFfhsP9XWnCUQ&s",
    link: "https://prolink.es",
    tags: ["Wordpress", "Web"],
    category: "web",
  },
  {
    key: "fenix",
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQGcUISF1fUFAw/company-logo_200_200/company-logo_200_200/0/1631353681286?e=2147483647&v=beta&t=17hvckgk6jv01q41QvbBSUMbWgBOjqADXmLzGLJJKZY",
    link: "https://fenixstage.com",
    tags: ["Wordpress", "Web"],
    category: "web",
  },
  {
    key: "radoo",
    img: radooImg,
    link: "https://radoo.app",
    tags: ["App", "Hostelería", "Producto"],
    category: "app",
  },
  {
    key: "valy",
    img: "https://s3-eu-west-1.amazonaws.com/tpd/logos/60bf9915fde226000166a596/0x0.png",
    link: "https://valycosmetics.com/",
    tags: ["Wordpress", "Ecommerce"],
    category: "shop",
  },
  {
    key: "triptomax",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWXlVV-kTzzU1_SHMscrnTFhQvlORTXzmn0_Bf_e4NQ&s",
    link: "https://triptomax.com",
    tags: ["Wordpress", "Web"],
    category: "web",
  },
  {
    key: "melody",
    img: "https://picsum.photos/id/532/400/700/",
    link: "https://melody-music-stream-front.vercel.app",
    tags: ["React", "NodeJS", "MongoDB"],
    category: "code",
  },
  {
    key: "gif4u",
    img: "https://picsum.photos/id/119/600/550",
    link: "https://challenge-agustin.vercel.app",
    tags: ["React", "Firebase"],
    category: "code",
  },
  {
    key: "spotify",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQEY_iIUMy7Wn63UE53yByCCLArmXOsAUrg&s",
    link: "https://spoty-theta.vercel.app/",
    tags: ["React", "Frontend"],
    category: "code",
  },
  {
    key: "calculator",
    img: "https://images.unsplash.com/photo-1625225233840-695456021cde?auto=format&fit=crop&q=80&w=1000",
    link: "https://agustingar.github.io/calculator/",
    tags: ["Javascript", "UI"],
    category: "code",
  },
];

const contactConfig = {
  YOUR_EMAIL: "agustin.tavoite@gmail.com",
  YOUR_FONE: "+34 603 568 026",
  YOUR_SERVICE_ID: "service_kqb0wpr",
  YOUR_TEMPLATE_ID: "template_15l0mhe",
  YOUR_USER_ID: "t4PpHmWZtYGQCL9LO",
};

const socialprofils = {
  github: "https://github.com/agustingar",
  linkedin: "https://www.linkedin.com/in/agustin-garcia-llorca-978984171/",
};

export {
  dataportfolio,
  worktimeline,
  education,
  skills,
  techStack,
  languages,
  servicesKeys,
  highlightKeys,
  processKeys,
  featuredKeys,
  valueKeys,
  testimonialKeys,
  stats,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
