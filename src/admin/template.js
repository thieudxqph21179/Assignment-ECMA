import footerAdmin from "../components/footer-admin"
import headerAdmin from "../components/header-admin"


const template = () => {
  return (
    `
    ${headerAdmin()}
    
       
       
${footerAdmin()}
    `
  )
}

export default template