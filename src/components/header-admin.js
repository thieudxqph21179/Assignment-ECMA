

const headerAdmin = () => {
  return (
  `
  <head>
  <script src="assets2/js/plugin/webfont/webfont.min.js"></script>

  <link rel="stylesheet" href="assets2/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets2/css/atlantis.min.css">
  <link rel="stylesheet" href="assets2/css/demo.css">
  </head>


  <div class="wrapper">
  <div class="main-header">
    <div class="logo-header" data-background-color="blue">
      <a href="#" class="logo">
        <img
          src="assets2/img/logo.svg"
          alt="Thieu"
          class="navbar-brand"
        />
      </a>
    </div>
    <nav
      class="navbar navbar-header navbar-expand-lg"
      data-background-color="blue2"
    >
      <div class="container-fluid">
        </ul>
      </div>
    </nav>
  </div>

  <div class="sidebar sidebar-style-2">
    <div class="sidebar-wrapper scrollbar scrollbar-inner">
      <div class="sidebar-content" style={{ marginTop: "30px" }}>
        <ul class="nav nav-primary">
          <li class="nav-item">
            <a  href="/#/admin/resume" data-navigo>
              <i class="fa-layer-group"></i>
              <p>Danh Sách Môn Học</p>
            </a>
          </li>
          <li class="nav-item">
            <a  href="/#/admin/portfolio" data-navigo>
              <i class="fa-layer-group"></i>
              <p>Danh Sách Dự Án</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="main-panel">

  `
  )
}

export default headerAdmin