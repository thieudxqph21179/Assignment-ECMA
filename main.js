import portfolioAdmin from "./src/admin/portfolio.js/portfolioAdmin";
import portfolioAdminAdd from "./src/admin/portfolio.js/portfolioAdminAdd";
import portfolioAdminEdit from "./src/admin/portfolio.js/portfolioAdminEdit";
import PostAdmin from "./src/admin/posts/postsAdmin";
import postAdminAdd from "./src/admin/posts/postsAdminAdd";
import postAdminEdit from "./src/admin/posts/postsAdminEdit";
import resumeAdmin from "./src/admin/resume/resumeAdmin";
import resumeAdminAdd from "./src/admin/resume/resumeAdminAdd";
import resumeAdminEdit from "./src/admin/resume/resumeAdminEdit";
import template from "./src/admin/template";

import { render, router } from "./src/lib";
import homePage from "./src/pages/home";
import Signin from "./src/pages/signin";
import Signup from "./src/pages/signup";



const app = document.querySelector("#app");

router.on("/admin/*", () => {}, {
    // nếu tao truy cập vào tất cả đường có /admin/
    before(done) {
        const user = JSON.parse(localStorage.getItem("user")) || [];
        if (!user) return (window.location.href = "/");
        if (user && user.vaiTro != "1") return (window.location.href = "/signin");
        done();
    },
});

router.on("/",()=> render(homePage,app));
router.on("/admin",()=> render(template,app));
router.on("/admin/resume",()=> render(resumeAdmin,app));
router.on("/admin/resume/add",()=> render(resumeAdminAdd,app));
router.on("/admin/resume/:id/edit",({ data })=> render(() =>resumeAdminEdit(data),app));
router.on("/admin/portfolio",()=> render(portfolioAdmin,app));
router.on("/admin/portfolio/add",()=> render(portfolioAdminAdd,app));
router.on("/admin/portfolio/:id/edit",({ data })=> render(() =>portfolioAdminEdit(data),app));
router.on("/admin/post",()=> render(PostAdmin,app));
router.on("/admin/post/add",()=> render(postAdminAdd,app));
router.on("/admin/post/:id/edit",({ data })=> render(() =>postAdminEdit(data),app));
router.on("/signup",()=> render(Signup,app));
router.on("/signin",()=> render(Signin,app));

router.resolve();
