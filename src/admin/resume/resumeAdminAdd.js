import { addResume } from "../../api/resume";
import footerAdmin from "../../components/footer-admin";
import headerAdmin from "../../components/header-admin";
import { useEffect ,router} from "../../lib";


const resumeAdminAdd = () => {

    useEffect(()=>{
        const form =document.querySelector("#form-add");
        const resumesubject = document.querySelector("#resume-subject");
        const resumedate = document.querySelector("#resume-date");
        const resumecontent = document.querySelector("#resume-content");
        const resumescores = document.querySelector("#resume-scores");

        form.addEventListener("submit",function(e){
            e.preventDefault();
            //tạo project mới
            const formData= {
                date: resumedate.value, 
                subject: resumesubject.value,
                content: resumecontent.value,
                scores: resumescores.value 
            };
            addResume(formData).then(()=>router.navigate("/admin/resume"));
        });
    });
    
  return (
    `
    ${headerAdmin()}
    
    <div class="container" style="padding-top:100px">
    <form action="" id="form-add">
    <div class="form-group">
      <label for="" class="form-label">Tên môn học :</label>
      <input type="text" class="form-control" id="resume-subject">
    </div>
    <div class="form-group">
    <label for="" class="form-label">Tháng :</label>
    <input type="text" class="form-control" id="resume-date">
  </div>
  <div class="form-group">
  <label for="" class="form-label">Điểm số :</label>
  <input type="text" class="form-control" id="resume-scores">
</div>
    <div class="form-group">
      <label for="" class="form-label">Nội dung :</label>
      <input type="text" class="form-control" id="resume-content">
    </div>
    <button class="btn btn-primary">Thêm môn học</button>
   </form></div>
  ${footerAdmin()}
   
   `
  )
}

export default resumeAdminAdd