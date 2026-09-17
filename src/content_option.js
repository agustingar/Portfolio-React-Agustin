import img from "../src/assets/images/AG.PNG";
import partfriImg from "../src/assets/images/portfolio/partfri.jpg";
import guardifyImg from "../src/assets/images/portfolio/guardify.jpg";
import lechuzasImg from "../src/assets/images/portfolio/lechuzas.jpg";
import selectyourvetImg from "../src/assets/images/portfolio/selectyourvet.jpg";
import agmarketingImg from "../src/assets/images/portfolio/agmarketing.jpg";
import dentalcorbellaImg from "../src/assets/images/portfolio/dentalcorbella.jpg";
import v3ntureImg from "../src/assets/images/portfolio/v3nture.jpg";
import boconniImg from "../src/assets/images/portfolio/boconni.jpg";
import waquaImg from "../src/assets/images/portfolio/waqua.jpg";
import anartxyImg from "../src/assets/images/portfolio/anartxy.jpg";
import dermobalImg from "../src/assets/images/portfolio/dermobal.jpg";
import pilatuImg from "../src/assets/images/portfolio/pilatu.jpg";
import afterbiteImg from "../src/assets/images/portfolio/afterbite.jpg";
import prolinkImg from "../src/assets/images/portfolio/prolink.jpg";
import fenixImg from "../src/assets/images/portfolio/fenix.jpg";
import radooImg from "../src/assets/images/portfolio/radoo.jpg";
import valyImg from "../src/assets/images/portfolio/valy.jpg";
import triptomaxImg from "../src/assets/images/portfolio/triptomax.jpg";
import melodyImg from "../src/assets/images/portfolio/melody.jpg";
import gif4uImg from "../src/assets/images/portfolio/gif4u.jpg";
import spotifyImg from "../src/assets/images/portfolio/spotify.jpg";
import calculatorImg from "../src/assets/images/portfolio/calculator.jpg";

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
const testimonialKeys = ["one", "two", "three", "four", "five"];

const stats = [
  { key: "projects", value: 35, suffix: "+" },
  { key: "years", value: 6, suffix: "+" },
  { key: "clients", value: 25, suffix: "+" },
  { key: "stack", value: 15, suffix: "+" },
];

const dataportfolio = [
  {
    key: "partfri",
    img: partfriImg,
    link: "https://partfri.ag-marketing.es/",
    tags: ["React Native", "iOS", "Android", "Spotify API"],
    category: "app",
  },
  {
    key: "guardify",
    img: guardifyImg,
    link: "https://ag-marketing.es/portfolio-item/guardify/",
    tags: ["React Native", "Expo", "Laravel", "IA"],
    category: "app",
  },
  {
    key: "lechuzas",
    img: lechuzasImg,
    link: "https://lechuzas-properties.com",
    tags: ["Wordpress", "Elementor", "Plugin", "Bookings"],
    category: "web",
  },
  {
    key: "selectyourvet",
    img: selectyourvetImg,
    link: "https://selectyourvet.com/",
    tags: ["Wordpress", "Plugin", "IA"],
    category: "web",
  },
  {
    key: "agmarketing",
    img: agmarketingImg,
    link: "https://ag-marketing.es",
    tags: ["Wordpress", "SEO", "Branding"],
    category: "web",
  },
  {
    key: "dentalcorbella",
    img: dentalcorbellaImg,
    link: "https://dentalcorbella.com",
    tags: ["Wordpress", "Marketing", "Animación"],
    category: "web",
  },
  {
    key: "v3nture",
    img: v3ntureImg,
    link: "https://v3nturebuilders.com/",
    tags: ["Wordpress", "Plugin", "Web3"],
    category: "web",
  },
  {
    key: "boconni",
    img: boconniImg,
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
    img: anartxyImg,
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
    img: pilatuImg,
    link: "https://pilatufitness.com",
    tags: ["Wordpress", "Web"],
    category: "web",
  },
  {
    key: "afterbite",
    img: afterbiteImg,
    link: "https://afterbite.es",
    tags: ["Wordpress", "Web"],
    category: "web",
  },
  {
    key: "prolink",
    img: prolinkImg,
    link: "https://prolink.es",
    tags: ["Wordpress", "Web"],
    category: "web",
  },
  {
    key: "fenix",
    img: fenixImg,
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
    img: valyImg,
    link: "https://valycosmetics.com/",
    tags: ["Wordpress", "Ecommerce"],
    category: "shop",
  },
  {
    key: "triptomax",
    img: triptomaxImg,
    link: "https://triptomax.com",
    tags: ["Wordpress", "Web"],
    category: "web",
  },
  {
    key: "melody",
    img: melodyImg,
    link: "https://melody-music-stream-front.vercel.app",
    tags: ["React", "NodeJS", "MongoDB"],
    category: "code",
  },
  {
    key: "gif4u",
    img: gif4uImg,
    link: "https://challenge-agustin.vercel.app",
    tags: ["React", "Firebase"],
    category: "code",
  },
  {
    key: "spotify",
    img: spotifyImg,
    link: "https://spoty-theta.vercel.app/",
    tags: ["React", "Frontend"],
    category: "code",
  },
  {
    key: "calculator",
    img: calculatorImg,
    link: "https://agustingar.github.io/calculator/",
    tags: ["Javascript", "UI"],
    category: "code",
  },
];

const contactConfig = {
  YOUR_EMAIL: "agustin.tavoite@gmail.com",
  YOUR_FONE: "+34 603 568 026",
  YOUR_SERVICE_ID: "service_hnjmjyw",
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
