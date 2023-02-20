import { getResumes } from "../api/resume";
import { useEffect, useState } from "../lib";

const resume = () => {
    const[resumes,setResumes] = useState([]);
    useEffect(()=>{
      getResumes().then(({data})=>setResumes(data));
    },[]);
   

  return (
    `
        <section class="section" id="resume">
            <div class="container">
                <h2 class="mb-5"><span class="text-danger">Sơ yếu lý lịch của tôi</h2>
                <div class="row">
                
                    <div class="col-md-6 col-lg-8">
                        <div class="card">
                        <div class="card-header">
                                <div class="mt-2">
                                    <h4>Học tập</h4>
                                    <span class="line"></span>  
                                </div>
                            </div>
                            
                            <div class="card-body">
                            ${resumes.map((resume)=>{
                                return`
                                <h6 class="title text-danger"> Tháng ${resume.date}</h6>
                                <P>${resume.subject}</P>
                                <P class="subtitle">${resume.content}</P>
                                <hr>
                                `}).join("")}

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                        <div class="card-header">
                                <div class="pull-left">
                                    <h4 class="mt-2">Điểm số các môn</h4>
                                    <span class="line"></span>  
                                </div>
                            </div>
                            <div class="card-body pb-2">
                            ${resumes.map((resume)=>{
                                return`
                                <h6>${resume.subject} : ${resume.scores}</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${resume.scores*10}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                `}).join("")}
                                
                                
                            </div>
                        </div>
                      
                        
                    </div>
                </div>
            </div>
        </section>
    `
  )
}

export default resume