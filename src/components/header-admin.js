

const headerAdmin = () => {
  return (
  `

  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
            <div class="container">
                <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                            <ul  class="navbar-nav mr-auto">
                       
                            <li class="nav-item">
                                    <a class="nav-link" hover:text-red-400" href="/#/admin">
                                        Thông tin cá nhân</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" hover:text-red-400" href="/#/admin/resume">
                                        Danh sách môn học</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" hover:text-red-400" href="/#/admin/portfolio">
                                        Danh sách dự án</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" hover:text-red-400" href="/#/admin/post">
                                    Danh sách bài viết</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" hover:text-red-400" href="/#/admin/user">
                                    Danh sách người dùng</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" hover:text-red-400" href="/#/admin/contact">
                                Danh sách góp ý</a>
                        </li><li class="nav-item">
                        <a class="nav-link" hover:text-red-400" href="/#/admin/header">
                            Menu</a>
                    </li>
                    
                            </ul>
                    </div>
            </div>
                      
        </div>
        </nav>
  `
  )
}

export default headerAdmin