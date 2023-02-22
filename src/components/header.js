import {  useEffect } from "../lib";
import nav from "./nav"
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const header = () => {
  const user = JSON.parse(localStorage.getItem("user")) || "";
  if(user){
  useEffect(function(){
  const logout = document.querySelector("#logout");
  logout.addEventListener("click", () => {
    toastr.success("Bạn đã đăng xuất thành công");
      localStorage.removeItem("user");
      setTimeout( document.location.href =`/`, 10000);
  });
  });
}


  return (
    `
    <head>
    </head>
    <header class="header">
        <div class="container">
            <ul class="social-icons pt-4"style="float:right;">
           ${user.id ? user.name  : ` <a style="width:150px" href="/#/signup" >Đăng ký</a>
           <a style="width:150px" href="/#/signin" >Đăng nhập</a>`}
           ${user.id ?  `<a style="padding-left:20px;" id="logout" >Đăng xuất</a>` : ""}
          

         

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