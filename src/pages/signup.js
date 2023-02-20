import { signup } from "../api/user";
import { router, useEffect } from "../lib";
const Signup = () => {

    useEffect(()=>{
        const form =document.querySelector(".form-add");
        const username = document.querySelector("#username");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        const vaiTro = document.querySelector("#vaiTro");


        if(form){
       
        form.addEventListener("submit",function(e){
            e.preventDefault();
            //tạo project mới
            const formData= {
                name: username.value, 
                email: email.value,
                password: password.value,
                vaiTro: vaiTro.value 
            };
            
            alert("Đăng ký tài khoản thành công, chuyển đến trang đăng nhập !");
            signup(formData).then(()=>router.navigate("/signin"));
        });
    }
    });
    
  return (
   `
   <div class="w-full pt-20 pb-60 h-full bg-[#9f9da7]">
            <div class="w-96 h-96 m-auto bg-white rounded-md text-center">
                <div class="font-medium pt-3 text-[#2b3e51] text-3xl">Đăng ký tài khoản</div>
                <form class="ml-6 my-10 form-add">
                <div class="mb-3">
                    <input type="text" class="form-control w-80 h-14 ml-2" id="username" placeholder="Tên tài khoản">
                </div>
                <div class="mb-3">
                <input type="text" class="form-control w-80 h-14 ml-2" id="email" placeholder="Email">
                </div>
                <div class="mb-3">
                <input type="text" class="form-control w-80 h-14 ml-2" id="password" placeholder="Mật khẩu">
                </div>
                <div class="mb-3 ">
                    <input  type="hidden" class="form-control" id="vaiTro" value = "2">
                </div>
                <button class="btn btn-primary bg-[#3ca9e2] w-80 h-14 mr-5 font-medium text-xl">Đăng ký</button>
            </form>
            </div>
        </div>
   `
  )
}

export default Signup