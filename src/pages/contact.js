import { addContact } from "../api/contact";
import { router, useEffect, useState } from "../lib";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { getAbout } from "../api/about";
const contact = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const [about,setAbout] = useState([]);
    useEffect(()=>{
        getAbout().then(({data})=>setAbout(data));
    },[]);
    useEffect(()=>{
        const form =document.querySelector("#form-add");
        const contactname = document.querySelector("#contact-name");
        const contactemail = document.querySelector("#contact-email");
        const contactmessage = document.querySelector("#contact-message");
       

        form.addEventListener("submit",function(e){
            e.preventDefault();
            //tạo project mới
            const formData= {
                name: contactname.value, 
                email: contactemail.value,
                message: contactmessage.value,
                
            };

            if(user&& user.id == "2"){
                toastr.success("Bạn đã gửi góp ý thành công");
                addContact(formData).then(()=> router.navigate("/"));
            }else{
                toastr.error("Bạn cần đăng nhập để gửi góp ý");
                
            }

        });
    });
    
  return (
    `
    <div class="section contact" id="contact">
    <div id="map" class="map"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="contact-form-card">
                    <h4 class="contact-title">Gửi góp ý</h4>
                    <form action="" id="form-add">
                    ${user.id ?  `<div class="form-group">
                    <input  class="form-control" type="text" placeholder="Tên *" id="contact-name" value="${user.name}" disabled>
                </div>
                <div class="form-group">
                    <input class="form-control" type="email" placeholder="Email *" id="contact-email" value="${user.email}" disabled>
                </div>` : ""}
                <div class="form-group">
                <input  class="form-control" type="hidden" placeholder="Tên *" id="contact-name" value="${user.name}" disabled>
            </div>
            <div class="form-group">
                <input class="form-control" type="hidden" placeholder="Email *" id="contact-email" value="${user.email}" disabled>
            </div>
                        <div class="form-group">
                            <textarea class="form-control"  placeholder="Nội dung *" rows="7" id="contact-message" required></textarea>
                        </div>
                        <div class="form-group ">
                            <button type="submit" class="form-control btn btn-primary" >Gửi góp ý</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-4">
            ${about.map((profile)=>{
                return`
                <div class="contact-info-card">
                    <h4 class="contact-title">Địa chỉ liên lạc</h4>
                    <div class="row mb-2">
                        <div class="col-1 pt-1 mr-1">
                            <i class="ti-mobile icon-md"></i>
                        </div>
                        <div class="col-10 ">
                            <h6 class="d-inline">Số điện thoại : <br> <span class="text-muted">${profile.info.phone}</span></h6>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-1 pt-1 mr-1">
                            <i class="ti-map-alt icon-md"></i>
                        </div>
                        <div class="col-10">
                            <h6 class="d-inline">Địa chỉ :<br> <span class="text-muted">${profile.info.address}</span></h6>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-1 pt-1 mr-1">
                            <i class="ti-envelope icon-md"></i>
                        </div>
                        <div class="col-10">
                            <h6 class="d-inline">Email :<br> <span class="text-muted">${profile.info.email}</span></h6>
                        </div>
                    </div>
                    <ul class="social-icons pt-4">
                        <li class="social-item"><a class="social-link text-dark" href="${profile.info.facebook}"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link text-dark" href="https://www.${profile.info.email}"><i class="ti-google" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link text-dark" href="${profile.info.instagram}"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link text-dark" href="${profile.info.github}"><i class="ti-github" aria-hidden="true"></i></a></li>
                    </ul> 
                </div>
                `
            }).join("")}
            </div>
        </div>

    </div>
</div>
    `
  )
}

export default contact