import axios from "axios";
import { addPost } from "../../api/posts";
import footerAdmin from "../../components/footer-admin";
import headerAdmin from "../../components/header-admin";
import { useEffect ,router} from "../../lib";


const postAdminAdd = () => {

    useEffect(()=>{
        const form =document.querySelector("#form-add");
        const postTitle = document.querySelector("#post-title");
        const postContent = document.querySelector("#post-content");
        const postContent2 = document.querySelector("#post-content2");
        const postText = document.querySelector("#post-text");
        const postImg = document.querySelector("#post-img");
        const postBy = document.querySelector("#post-by");


        form.addEventListener("submit",async function(e){
            e.preventDefault();
            const urls = await uploadFiles(postImg.files);
            //tạo project mới
            const formData= {
                title: postTitle.value, 
                text: postText.value, 
                content: postContent.value, 
                content2: postContent2.value, 
                img: urls, 
                by: postBy.value, 


            };
            addPost(formData).then(()=>router.navigate("/admin/post"));
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
            <label for="" class="form-label">Tiêu đề</label>
            <input type="text" class="form-control" id="post-title" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Mô tả 1</label>
            <input type="text" class="form-control" id="post-content" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Ảnh</label>
            <input type="file" class="form-control" multiple id="post-img" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Tiêu đề 2 </label>
            <input type="text" class="form-control" id="post-text" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Mô tả 2</label>
            <input type="text" class="form-control" id="post-content2" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Người đăng bài</label>
            <input type="text" class="form-control" id="post-by" value="Quản Trị Viên" />
        </div>
       
        <button class="btn btn-primary">Thêm dự án</button>
    </form>
    </div>
  ${footerAdmin()}
   
   `
  )
}

export default postAdminAdd