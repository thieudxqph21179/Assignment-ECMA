import { deleteAbout, getAbout } from "../../api/about";
import headerAdmin from "../../components/header-admin";
import { useEffect, useState } from "../../lib";


const aboutAdmin = () => {
    const[About,setAbout] = useState([]);
    useEffect(()=>{
      getAbout().then(({data})=>setAbout(data));
    },[]);
  
  useEffect(function(){
    const btns = document.querySelectorAll(".btn-remove");
    for(let btn of btns){
    btn.addEventListener("click",function(){
      const id = btn.dataset.id;
      deleteAbout(id).then(()=>{
        const newAbout = About.filter((user)=>user.id != id);
          setAbout(newAbout);
        }).catch((err)=>{console.log(err)});
    });
  }
  });

  return (
    `
     ${headerAdmin()}
     <div class="container pt-5">
     <form action="" id="form-add">
   
    ${About.map((About)=>{
      return`
     
            <div class="form-group">
            <label for="" class="form-label">Tiêu đề 1</label>
            <input type="text" class="form-control" value="${About.my.title}" id="post-title" />
                </div>
                <div class="form-group">
            <label for="" class="form-label">Text 1</label>
            <input type="text" class="form-control" value="${About.my.text1}" id="post-title" />
                </div>
                <div class="form-group">
            <label for="" class="form-label">Text 2</label>
            <input type="text" class="form-control" value="${About.my.text2}" id="post-title" />
                </div>
            
                <div class="form-group">
                <label for="" class="form-label">Tiêu đề 2</label>
                <input type="text" class="form-control" value="${About.info.title}" id="post-title" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Ngày sinh</label>
                <input type="text" class="form-control" value="${About.info.date}" id="post-title" />
            </div> 
            <div class="form-group">
                <label for="" class="form-label">Email</label>
                <input type="text" class="form-control" value="${About.info.email}" id="post-title" />
            </div> <div class="form-group">
            <label for="" class="form-label">Số đt</label>
            <input type="text" class="form-control" value="${About.info.phone}" id="post-title" />
        </div> <div class="form-group">
        <label for="" class="form-label">Đại chỉ</label>
        <input type="text" class="form-control" value="${About.info.address}" id="post-title" />
    </div> <div class="form-group">
    <label for="" class="form-label">Github</label>
    <input type="text" class="form-control" value="${About.info.github}" id="post-title" />
    
</div>   <div class="form-group">
<label for="" class="form-label">Facebook</label>
<input type="text" class="form-control" value="${About.info.facebook}" id="post-title" />

</div>
<div class="form-group">
<label for="" class="form-label">Instagram</label>
<input type="text" class="form-control" value="${About.info.instagram}" id="post-title" />

</div>
            <div class="form-group">
            <label for="" class="form-label">Tiêu đề 3</label>
            <input type="text" class="form-control" value="${About.skills.title}" id="post-title" />
            </div>
            <div class="form-group">
            <label for="" class="form-label">Text 1</label>
            <input type="text" class="form-control" value="${About.skills.content1}" id="post-title" />
            </div>
            <div class="form-group">
            <label for="" class="form-label">Text 2</label>
            <input type="text" class="form-control" value="${About.skills.text1}" id="post-title" />
            </div>
            <div class="form-group">
            <label for="" class="form-label">Text 3</label>
            <input type="text" class="form-control" value="${About.skills.content2}" id="post-title" />
            </div>
            <div class="form-group">
            <label for="" class="form-label">Text 4</label>
            <input type="text" class="form-control" value="${About.skills.text2}" id="post-title" />
            </div>
       
      
      `
    }).join("")}
    <button class="btn btn-primary">Sửa</button>
    </form>
    </div>
    
      
    </tbody>
  </table></div>
    `
  )
}

export default aboutAdmin