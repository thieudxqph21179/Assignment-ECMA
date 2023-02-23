import { useEffect, useState } from "../lib";
import { getAbout } from "../api/about";

const about = () => {
    const [about,setAbout] = useState([]);
    useEffect(()=>{
        getAbout().then(({data})=>setAbout(data));
    },[]);

  return (
    `
    ${about.map((profile)=>{
        return`
        <div class="container-fluid">
            <div id="about" class="row about-section">
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">${profile.my.title}</h3>
                    <span class="line mb-5"></span>
                    <h5 class="mb-3">${profile.my.text1}</h5>
                    <p class="mt-20">${profile.my.text2}</p>
                   <i class="icon-down-circled2 "></i><a href="${profile.my.cv}">Hồ sơ của tôi</a>
                </div>
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">${profile.info.title}</h3>
                    <span class="line mb-5"></span>
                    <ul class="mt40 info list-unstyled">
                        <li><span>Ngày sinh</span> : ${profile.info.date}</li>
                        <li><span>Email</span> : ${profile.info.email}</li>
                        <li><span>Số điện thoại</span> : ${profile.info.phone}</li>
                        <li><span>Địa chỉ</span> :  ${profile.info.address}</li>
                    </ul>
                    <ul class="social-icons pt-3">
                        <li class="social-item"><a class="social-link" href="${profile.info.facebook}"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link" href="https://www.${profile.info.email}"><i class="ti-google" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link" href="${profile.info.instagram}"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                        <li class="social-item"><a class="social-link" href="${profile.info.github}"><i class="ti-github" aria-hidden="true"></i></a></li>
                    </ul>  
                </div>
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">${profile.skills.title}</h3>
                    <span class="line mb-5"></span>
                    <div class="row">
                        <div class="col-1 text-danger pt-1"><i class="ti-widget icon-lg"></i></div>
                        <div class="col-10 ml-auto mr-3">
                            <h6>${profile.skills.content1}</h6>
                            <p class="subtitle"> ${profile.skills.text1}</p>
                            <hr>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1 text-danger pt-1"><i class="ti-paint-bucket icon-lg"></i></div>
                        <div class="col-10 ml-auto mr-3">
                            <h6>${profile.skills.content2}</h6>
                            <p class="subtitle">${profile.skills.text2}</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }).join("")}
            
    `
  )
}

export default about