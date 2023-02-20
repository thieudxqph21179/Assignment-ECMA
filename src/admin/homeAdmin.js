import footerAdmin from "../components/footer-admin"
import headerAdmin from "../components/header-admin"


const homeAdmin = () => {
  return (
    `
    ${headerAdmin()}

    ${footerAdmin()}
    `
  )
}

export default homeAdmin