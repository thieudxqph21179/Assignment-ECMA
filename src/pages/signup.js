import { signup } from "../api/user";
import { router, useEffect } from "../lib";
const Signup = () => {

    useEffect(()=>{
        const form =document.querySelector(".form-signup");
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
   <section class="login">
   <div class="login_box">
       <div class="left">
           <div class="top_link"><a href="/"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="">Trở về trang chủ</a></div>
           <div class="contact">
               <form class="form-signup">
                   <h3>Đăng Ký</h3>
                   <input id="username" type="text" placeholder="Tên tài khoản">
                   <input id="email" type="text" placeholder="Email">
                   <input id="password" type="text" placeholder="Mật khẩu">
                   <input id="vaiTro" type="hidden" value="2">
                   <button class="submit">Đăng Ký</button>
               </form>
           </div>
       </div>
       <div class="right">
           <div class="right-text">
               <h2>Xin chào bro</h2>
               <h5>Chào mừng bro đến với trang của tui <br> nếu bro đã có tài khoản rồi thì hãy đăng nhập đi <br> <a href="signin">Đăng nhập</a></h5>
               
           </div>
           <div class="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt=""></div>
       </div>
   </div>
</section>
   `
  )
}

export default Signup