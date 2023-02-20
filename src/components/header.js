import nav from "./nav"

const header = () => {
  return (
    `
    
    <header class="header">
        <div class="container">
            <ul class="social-icons pt-3">
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
            </ul>  
            <div class="header-content">
                <h4 class="header-subtitle" >Xin chào, Tôi là</h4>
                <h1 class="header-title">Thiều</h1>
                <h6 class="header-mono" >Lập trình viên Frond end</h6>
                <button class="btn btn-primary btn-rounded"><i class="ti-printer pr-2"></i>Hồ sơ</button>
            </div>
        </div>
    </header>
    ${nav()}
    
    `
  )
}

export default header