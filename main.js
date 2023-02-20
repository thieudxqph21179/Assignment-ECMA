import resumeAdmin from "./src/admin/resume/resumeAdmin";
import resumeAdminAdd from "./src/admin/resume/resumeAdminAdd";
import resumeAdminEdit from "./src/admin/resume/resumeAdminEdit";
import template from "./src/admin/template";
import { render, router } from "./src/lib";
import homePage from "./src/pages/home";


const app = document.querySelector("#app");

router.on("/",()=> render(homePage,app));
router.on("/admin",()=> render(template,app));
router.on("/admin/resume",()=> render(resumeAdmin,app));
router.on("/admin/resume/add",()=> render(resumeAdminAdd,app));
router.on("/admin/resume/:id/edit",({ data })=> render(() =>resumeAdminEdit(data),app));

router.resolve();

