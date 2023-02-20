
import { getResume, updateResume } from "../../api/resume";
import footerAdmin from "../../components/footer-admin";
import headerAdmin from "../../components/header-admin";
import { router, useEffect, useState } from "../../lib";

const resumeAdminEdit = ({id}) => {
    const[resumes,setResumes] = useState([]);
  useEffect(()=>{
    getResume(id).then(({data})=>setResumes(data));
  },[]);
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
            id,
            date: resumedate.value, 
            subject: resumesubject.value,
            content: resumecontent.value,
            scores: resumescores.value 

        };
        updateResume(formData).then(()=>router.navigate("/admin/resume"));
    });
});

  return (
    `
    ${headerAdmin()}
    
    <div class="container" style="padding-top:100px">
    <form action="" id="form-add">
    <div class="form-group">
      <label for="" class="form-label">Tên môn học :</label>
      <input type="text" class="form-control" id="resume-subject" value="${resumes.subject}">
    </div>
    <div class="form-group">
    <label for="" class="form-label">Tháng :</label>
    <input type="text" class="form-control" id="resume-date" value="${resumes.date}">
  </div>
  <div class="form-group">
  <label for="" class="form-label">Điểm số :</label>
  <input type="text" class="form-control" id="resume-scores" value="${resumes.scores}">
</div>
    <div class="form-group">
      <label for="" class="form-label">Nội dung :</label>
      <input type="text" class="form-control" id="resume-content" value="${resumes.content}">
    </div>
    <button class="btn btn-primary">Sửa môn học</button>
   </form></div>
  ${footerAdmin()}
   
    `
  )
};

export default resumeAdminEdit;