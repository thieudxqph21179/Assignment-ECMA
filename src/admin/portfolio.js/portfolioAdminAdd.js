import axios from "axios";
import { addPortfolio } from "../../api/portfolio";
import footerAdmin from "../../components/footer-admin";
import headerAdmin from "../../components/header-admin";
import { router, useEffect } from "../../lib";

const portfolioAdminAdd = () => {

    useEffect(()=>{
        const form =document.querySelector("#form-add");
        const portfolioName = document.querySelector("#portfolio-name");
        const portfolioContent = document.querySelector("#portfolio-content");
        const portfolioImg = document.querySelector("#portfolio-img");
        const portfolioTime = document.querySelector("#portfolio-time");
        const portfolioLanguage = document.querySelector("#portfolio-language");
        const portfolioDemo = document.querySelector("#portfolio-demo");
        const portfolioGithub = document.querySelector("#portfolio-github");


        form.addEventListener("submit",async function(e){
            e.preventDefault();
            const urls = await uploadFiles(portfolioImg.files);
            
            const formData= {
                name: portfolioName.value, 
                img: urls,
                content: portfolioContent.value,
                time: portfolioTime.value ,
                language:portfolioLanguage.value,
                demo:portfolioDemo.value,
                github:portfolioGithub.value
            };
            addPortfolio(formData).then(()=>router.navigate("/admin/portfolio"));
        });
    });

const uploadFiles = async (files) => {
    if (files){
    const CLOUD_NAME = "ddijrqtc9";
    const PRESET_NAME = "upload";
    const FOLDER_NAME = "ECMA"
    const urls =[];
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);

    for(const file of files) {
        formData.append("file", file);

        const response = await axios.post(api,formData,{
            headers:{
                "Content-Type": "multipart/form-data",
            },
        })
        urls.push(response.data.secure_url);
    }
    return urls;
    }
};

  return (
    `
    ${headerAdmin()}
    <div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group">
                <label for="" class="form-label">Tên Dự án</label>
                <input type="text" class="form-control" id="portfolio-name" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Mô tả</label>
                <input type="text" class="form-control" id="portfolio-content" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Ảnh</label>
                <input type="file" class="form-control" multiple id="portfolio-img" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Thời gian làm </label>
                <input type="text" class="form-control" id="portfolio-time" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Ngôn ngữ</label>
                <input type="text" class="form-control" id="portfolio-language" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Link Demo</label>
                <input type="text" class="form-control" id="portfolio-demo" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Link Github</label>
                <input type="text" class="form-control" id="portfolio-github" />
            </div>
            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>
        ${footerAdmin()}
    `
  )
}

export default portfolioAdminAdd