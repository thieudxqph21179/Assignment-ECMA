import { render, router } from "./src/lib";
import about from "./src/pages/about";
import blog from "./src/pages/blog";
import contact from "./src/pages/contact";
import homePage from "./src/pages/home";
import portfolio from "./src/pages/portfolio";
import resume from "./src/pages/resume";

const app = document.querySelector("#app");

router.on("/",()=> render(homePage,app));
router.on("#about",()=> render(about,app));
router.on("#resume",()=>render(resume,app));
router.on("#portfolio",()=>render(portfolio,app));
router.on("#blog",()=> render(blog,app));
router.on("#contact",()=>render(contact,app));
// render.notFound(()=>render(notFound,app));
router.resolve();

