import { deleteResume, getResumes } from "../../api/resume";
import footerAdmin from "../../components/footer-admin"
import headerAdmin from "../../components/header-admin"
import { useEffect, useState } from "../../lib"


const resumeAdmin = () => {
  const[resumes,setResumes] = useState([]);
  useEffect(()=>{
    getResumes().then(({data})=>setResumes(data));
  },[]);

useEffect(function(){
  const btns = document.querySelectorAll(".btn-remove");
  for(let btn of btns){
  btn.addEventListener("click",function(){
    const id = btn.dataset.id;
    deleteResume(id).then(()=>{
      const newResumes = resumes.filter((resume)=>resume.id != id);
        setResumes(newResumes);
      }).catch((err)=>{console.log(err)});
  });
}
});

  return (
    `
    ${headerAdmin()}

    <div class="container pt-5">
    <h1>Quản lý danh sách</h1>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Tên môn học</th>
        <th>Tháng học tập</th>
        <th>Điểm số</th>
        <th><a class=" btn btn-info btn-remove" href="/#/admin/resume/add">Add</a></th>

      </tr>
    </thead>
    <tbody>
    ${resumes.map((resume)=>{
      return`
      <tr>
        <td>${resume.id}</td>
        <td>${resume.subject}</td>
        <td>${resume.date}</td>
        <td>${resume.scores}</td>

        <td>
          <button data-id="${resume.id}" class=" btn btn-danger btn-remove">Remove</button>
          <a class=" btn btn-info btn-remove" href="/#/admin/resume/${resume.id}/edit">Edit</a>
          
        </td>
      </tr>
      `
    }).join("")}
   
    
      
    </tbody>
  </table></div>

  ${footerAdmin()}
    
    `
  )
}

export default resumeAdmin