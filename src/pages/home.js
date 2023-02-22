import footer from "../components/footer"
import header from "../components/header"
import about from "./about"
import contact from "./contact"
import portfolio from "./portfolio"
import resume from "./resume"
import posts from "./posts"


const homePage = () => {
  return (
    `
    ${header()}
    ${about()}
    ${resume()}
    ${portfolio()}
    ${posts()}
    ${contact()}
    ${footer()}
    `
  )
}

export default homePage