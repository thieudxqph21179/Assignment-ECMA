

const nav = () => {
  return (
    `
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
        <div class="container">
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="#home" class="nav-link">Trang chủ</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">Tôi</a>
                    </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link">Học tập</a>
                    </li>
                </ul>
                <ul class="navbar-nav brand">
                    <img src="https://res.cloudinary.com/ddijrqtc9/image/upload/v1676906562/ECMA/Screenshot_4_ex6tih.png" alt="" class="brand-img">
                    <li class="brand-txt">
                        <h5 class="brand-title">Thiều Dương</h5>
                        <div class="brand-subtitle">Web Designer | Developer</div>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#portfolio" class="nav-link">Dự án</a>
                    </li>
                    <li class="nav-item">
                        <a href="#blog" class="nav-link">Tin tức</a>
                    </li>
                    <li class="nav-item last-item">
                        <a href="/signup" class="nav-link">Đăng ký</a>
                    </li>
                    <li class="nav-item last-item">
                    <a href="/signin" class="nav-link">Đăng nhập</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
  )
}

export default nav