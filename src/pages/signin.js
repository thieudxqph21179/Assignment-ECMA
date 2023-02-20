import { signin } from "../api/user";
import { router, useEffect } from "../lib";
const Signin = () => {

    useEffect(()=>{
        const form =document.querySelector(".form-signin");

        const email = document.querySelector("#email");
        const password = document.querySelector("#password");



        if(form){
       
        form.addEventListener("submit", async(e)=>{
            e.preventDefault();
            //tạo project mới
            const formData= {  
                email: email.value,
                password: password.value
            };
            
            const { data } = await signin(formData);
            localStorage.setItem("user", JSON.stringify(data.user));
            console.log(data.user);
            if (data.user.vaiTro == 1) {
                router.navigate(`/admin`);
            } else {
                router.navigate(`/`);

            }
        });
    }
    });
    
  return (
   `
   <div class="w-full pt-20 pb-60 h-full bg-[#9f9da7]">
            <div class="w-96 h-96 m-auto bg-white rounded-md text-center">
                <div class="font-medium pt-5 text-[#2b3e51] text-3xl">Đăng nhập tài khoản</div>
                <form class="ml-6 my-10 form-signin">
                <div class="mb-3">
                <input type="text" class="form-control w-80 h-14 ml-2" id="email" placeholder="Email">
                </div>
                <div class="mb-3">
                <input type="text" class="form-control w-80 h-14 ml-2" id="password" placeholder="Mật khẩu">
                </div>
                
                <button class="btn btn-primary bg-[#3ca9e2] w-80 h-14 mt-3 mr-5 font-medium text-xl">Đăng nhập</button>
            </form>
            </div>
        </div>
   `
  )
}

export default Signin